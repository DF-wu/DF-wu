import datetime as dt
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

import profile_metrics as m

TODAY = dt.date(2026, 11, 11)


def share(rows=('Python (65.00%)', 'Markdown (35.00%)'), date='2026-11-10', title='Languages over Last Year (Powered by wakatime.com)'):
    return (f'<svg xmlns="http://www.w3.org/2000/svg"><!--Generated with pygal 3.1.3 on {date}-->'
            f'<title>{title}</title>' + ''.join(f'<text>{r}</text>' for r in rows) + '</svg>').encode()


class PublicMetricsTests(unittest.TestCase):
    def test_wakatime_keeps_scope_date_and_language_values_only(self):
        data = m.parse_wakatime(share(), TODAY)
        self.assertEqual(data['languages'], [('Python', 65.0), ('Markdown', 35.0)])
        self.assertEqual(data['source_date'], '2026-11-10')
        self.assertEqual(data['window'], 'Last Year')
        self.assertEqual(set(data), {'observed', 'source_date', 'window', 'languages'})

    def test_rejects_error_pages_empty_changed_private_and_stale_shares(self):
        for body in (b'<html>Not found</html>', share(rows=()), share(title='Projects over Last Year'),
                     share(date='2025-01-01'), share(date='2026-11-12'), share(rows=('Python (101%)',)),
                     share(rows=('Python (50%)', 'Python (50%)')),
                     share(rows=('Python (5%)', 'Go (5%)')),
                     b'<!DOCTYPE svg [<!ENTITY x "test">]>' + share()):
            with self.subTest(body=body[:100]), self.assertRaises((ValueError, m.ET.ParseError)):
                m.parse_wakatime(body, TODAY)

    def test_public_repo_pagination_forks_and_inclusive_pr_window(self):
        def repo(i, fork=False, language='Python'):
            return {'id': i, 'owner': {'login': 'DF-wu'}, 'private': False, 'fork': fork, 'language': language}
        responses = [ {'login': 'DF-wu', 'public_repos': 101},
                      [repo(i) for i in range(100)], [repo(100, True, 'Go')],
                      {'incomplete_results': False, 'total_count': 7} ]
        with patch.object(m, 'api', side_effect=responses) as api:
            data = m.collect_github(TODAY)
        self.assertEqual(data['non_fork_repos'], 100)
        self.assertEqual(data['languages'], [('Python', 100)])
        self.assertEqual(data['merged_prs'], 7)
        query = m.urllib.parse.parse_qs(api.call_args.args[0].split('?')[1])['q'][0]
        self.assertIn('is:public', query)
        self.assertIn('merged:2026-08-14..2026-11-11', query)
        self.assertIn('page=2', api.call_args_list[2].args[0])

    def test_rejects_private_repos_inconsistent_counts_and_incomplete_search(self):
        private = {'owner': {'login': 'DF-wu'}, 'private': True, 'fork': False}
        for responses in (
            [{'login': 'wrong', 'public_repos': 0}],
            [{'login': 'DF-wu', 'public_repos': 1}, [private]],
            [{'login': 'DF-wu', 'public_repos': 1}, []],
            [{'login': 'DF-wu', 'public_repos': 0}, [], {'incomplete_results': True, 'total_count': 0}],
        ):
            with self.subTest(responses=responses), patch.object(m, 'api', side_effect=responses):
                with self.assertRaises(ValueError):
                    m.collect_github(TODAY)

    def test_failed_source_preserves_all_previous_assets_while_other_updates(self):
        data = m.parse_wakatime(share(), TODAY)
        with tempfile.TemporaryDirectory() as temp, patch.object(m, 'OUTPUT', Path(temp)):
            m.save_source('wakatime', data, m.chart_wakatime)
            saved = {p.name: p.read_bytes() for p in Path(temp).iterdir()}
            good = {'observed': '2026-11-11', 'public_repos': 0, 'non_fork_repos': 0,
                    'merged_prs': 0, 'pr_start': '2026-08-14', 'pr_end': '2026-11-11', 'languages': []}
            with patch.object(m, 'collect_github', return_value=good), patch.object(m, 'fetch', return_value=b'<html>Unavailable</html>'):
                self.assertTrue(m.main())
            for name, value in saved.items():
                self.assertEqual((Path(temp) / name).read_bytes(), value)
            self.assertTrue((Path(temp) / 'github-light.svg').exists())
            self.assertIn('2026-11-10', (Path(temp) / 'metrics.md').read_text())
            # A renderer failure cannot overwrite the previous successful source.
            with patch.object(m, 'chart_wakatime', side_effect=ValueError):
                with self.assertRaises(ValueError):
                    m.save_source('wakatime', data, m.chart_wakatime)
            self.assertEqual((Path(temp) / 'wakatime.json').read_bytes(), saved['wakatime.json'])

    def test_svg_escapes_labels_and_contains_no_active_source_content(self):
        data = m.parse_wakatime(share(rows=('C&lt;test&gt; (65%)', 'Other (35%)')), TODAY)
        rendered = m.chart_wakatime(data, m.PALETTES['light'])
        root = m.ET.fromstring(rendered)
        self.assertIsNotNone(root.find('{http://www.w3.org/2000/svg}desc'))
        self.assertIn('C&lt;test&gt;', rendered)
        for forbidden in ('<script', '<foreignObject', '<style', 'http://wakatime', 'onload='):
            self.assertNotIn(forbidden, rendered)

    def test_install_failure_rolls_back_the_entire_source_snapshot(self):
        data = m.parse_wakatime(share(), TODAY)
        with tempfile.TemporaryDirectory() as temp, patch.object(m, 'OUTPUT', Path(temp)):
            m.save_source('wakatime', data, m.chart_wakatime)
            previous = {p.name: p.read_bytes() for p in Path(temp).iterdir()}
            changed = dict(data, observed='2026-11-12')
            replace = Path.replace
            def fail_second_install(path, target):
                if path.name == 'wakatime-dark.svg' and Path(target).parent == Path(temp):
                    raise OSError('Simulated installation failure')
                return replace(path, target)
            with patch.object(Path, 'replace', fail_second_install), self.assertRaises(OSError):
                m.save_source('wakatime', changed, m.chart_wakatime)
            self.assertEqual({p.name: p.read_bytes() for p in Path(temp).iterdir()}, previous)


if __name__ == '__main__':
    unittest.main()
