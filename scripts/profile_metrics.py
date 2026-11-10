"""Generate public-only profile metrics with independent last-good snapshots."""

import datetime as dt
import html
import json
import math
import os
from pathlib import Path
import re
import sys
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from collections import Counter

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'assets/profile'
OWNER = 'DF-wu'
WAKA_URL = ('https://wakatime.com/share/@cb2e708b-89d1-4093-bf95-cafd34987f43/'
            'd210fe3c-7b63-47b5-a4d4-b70bb8300fcb.svg')
PALETTES = {
    'light': {'bg': '#f4f7fb', 'ink': '#172c45', 'muted': '#4b6179',
              'line': '#ccd8e5', 'blue': '#2459a6', 'teal': '#19756e'},
    'dark': {'bg': '#142235', 'ink': '#edf3fc', 'muted': '#afc1d8',
             'line': '#354b66', 'blue': '#8eb9ff', 'teal': '#76d2c3'},
}


def fetch(url, github=False):
    headers = {'User-Agent': 'DF-wu-public-profile', 'Accept': 'application/vnd.github+json' if github else 'image/svg+xml'}
    # Only the fixed GitHub API receives the repository-scoped Actions token.
    if github and os.environ.get('GH_TOKEN'):
        if not url.startswith('https://api.github.com/'):
            raise ValueError('Unexpected GitHub API host')
        headers['Authorization'] = 'Bearer ' + os.environ['GH_TOKEN']
    with urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=30) as response:
        body = response.read(2_000_001)
        if len(body) > 2_000_000:
            raise ValueError('Source exceeds response limit')
        if not github and 'image/svg+xml' not in response.headers.get('Content-Type', ''):
            raise ValueError('WakaTime did not return an SVG')
        return body


def api(path):
    return json.loads(fetch('https://api.github.com/' + path, github=True))


def integer(value):
    if type(value) is not int or value < 0:
        raise ValueError('Expected a nonnegative integer')
    return value


def collect_github(today):
    user = api('users/' + OWNER)
    if user.get('login') != OWNER:
        raise ValueError('Unexpected GitHub user')
    repos = []
    for page in range(1, 101):
        batch = api(f'users/{OWNER}/repos?type=owner&per_page=100&page={page}')
        if not isinstance(batch, list):
            raise ValueError('Expected public repository list')
        for repo in batch:
            if repo.get('private') is not False or repo.get('owner', {}).get('login') != OWNER:
                raise ValueError('Unexpected repository visibility or owner')
            if type(repo.get('fork')) is not bool:
                raise ValueError('Missing fork classification')
        repos.extend(batch)
        if len(batch) < 100:
            break
    else:
        raise ValueError('Repository pagination did not finish')
    if len(repos) != integer(user.get('public_repos')):
        raise ValueError('Repository counts changed during collection; retry later')
    originals = [repo for repo in repos if not repo['fork']]
    languages = Counter(repo.get('language') or 'Unclassified' for repo in originals)
    start = today - dt.timedelta(days=89)
    query = f'author:{OWNER} is:pr is:merged is:public merged:{start}..{today}'
    result = api('search/issues?' + urllib.parse.urlencode({'q': query, 'per_page': 1}))
    if result.get('incomplete_results') is not False:
        raise ValueError('Incomplete pull request search')
    return {'observed': today.isoformat(), 'public_repos': len(repos),
            'non_fork_repos': len(originals), 'merged_prs': integer(result.get('total_count')),
            'pr_start': start.isoformat(), 'pr_end': today.isoformat(),
            'languages': sorted(languages.items(), key=lambda row: (-row[1], row[0]))}


def parse_wakatime(body, today):
    if b'<!DOCTYPE' in body.upper() or b'<!ENTITY' in body.upper():
        raise ValueError('Unexpected XML declarations')
    root = ET.fromstring(body)
    if root.tag != '{http://www.w3.org/2000/svg}svg':
        raise ValueError('Expected WakaTime SVG')
    title = root.find('{http://www.w3.org/2000/svg}title')
    expected = 'Languages over Last Year (Powered by wakatime.com)'
    if title is None or title.text != expected:
        raise ValueError('Unexpected WakaTime chart scope')
    match = re.search(rb'Generated with pygal[^<]*? on (\d{4}-\d{2}-\d{2})', body)
    if not match:
        raise ValueError('Missing WakaTime source date')
    source_date = dt.date.fromisoformat(match[1].decode())
    if not 0 <= (today - source_date).days <= 14:
        raise ValueError('WakaTime source date is stale or in the future')
    rows = []
    for element in root.iter('{http://www.w3.org/2000/svg}text'):
        label = ''.join(element.itertext()).strip()
        match = re.fullmatch(r'(.{1,45}) \((\d+(?:\.\d+)?)%\)', label)
        if match:
            name, percent = match[1], float(match[2])
            if not math.isfinite(percent) or not 0 <= percent <= 100:
                raise ValueError('Invalid WakaTime percentage')
            rows.append((name, percent))
    if not rows or len({name for name, _ in rows}) != len(rows):
        raise ValueError('Missing or duplicate WakaTime language data')
    if not 99 <= sum(value for _, value in rows) <= 101:
        raise ValueError('WakaTime percentages do not total approximately 100')
    return {'observed': today.isoformat(), 'source_date': source_date.isoformat(),
            'window': 'Last Year', 'languages': sorted(rows, key=lambda row: (-row[1], row[0]))}


def text(x, y, value, size=24, fill='ink', weight=400, anchor='start'):
    return (f'<text x="{x}" y="{y}" font-size="{size}" fill="{{{fill}}}" '
            f'font-weight="{weight}" text-anchor="{anchor}">{html.escape(str(value))}</text>')


def svg(title, description, content, height, palette):
    content = content.format(**palette)
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 {height}" '
            f'role="img" aria-labelledby="title desc">\n<title id="title">{html.escape(title)}</title>'
            f'<desc id="desc">{html.escape(description)}</desc>\n'
            f'<rect width="600" height="{height}" rx="16" fill="{palette["bg"]}"/>'
            '<g font-family="system-ui, -apple-system, Segoe UI, sans-serif">'
            f'{content}</g></svg>\n')


def bars(rows, total, y, percent=False):
    content = ''
    for index, (name, value) in enumerate(rows):
        cy = y + index * 57
        display = f'{value:.2f}%' if percent else str(value)
        content += text(28, cy, name) + text(572, cy, display, anchor='end')
        content += f'<rect x="28" y="{cy+12}" width="544" height="7" rx="3" fill="{{line}}"/>'
        width = 544 * value / total if total else 0
        content += f'<rect x="28" y="{cy+12}" width="{width:.2f}" height="7" rx="3" fill="{{blue}}"/>'
    return content


def chart_github(data, palette):
    rows = data['languages'][:5]
    rest = sum(value for _, value in data['languages'][5:])
    if rest:
        rows = rows + [('Other primary languages', rest)]
    content = text(28, 48, 'Public code & collaboration', 29, weight=650)
    for x, key, label in [(28, 'public_repos', 'Public repos'), (216, 'non_fork_repos', 'Non-forks'), (414, 'merged_prs', 'Merged PRs')]:
        content += text(x, 116, data[key], 44, weight=650)
        content += text(x, 149, label, 22, fill='muted')
    content += text(28, 194, 'PRs / last 90 days · includes own repos', 22, fill='muted')
    content += '<path d="M28 218H572" stroke="{line}"/>'
    content += text(28, 258, 'Primary language / public non-fork repos', 23, weight=600)
    content += bars(rows, data['non_fork_repos'], 302)
    end = 302 + len(rows) * 57
    content += text(28, end+13, f'Snapshot / {data["observed"]} UTC', 22, fill='muted')
    return svg('Public GitHub activity', 'Public repository counts, merged PR search, and repository primary language counts. See metrics.md for the exact window and values.', content, end+40, palette)


def chart_wakatime(data, palette):
    # Merge the provider's own Other bucket with the undisplayed long tail.
    named = [(name, value) for name, value in data['languages'] if name != 'Other'][:5]
    rows = named + [('Other languages & formats', round(100-sum(value for _, value in named), 2))]
    content = text(28, 48, 'In the editor', 29, weight=650)
    content += text(28, 89, 'WakaTime / Last Year', 24, fill='muted')
    content += text(28, 128, 'Share of recorded language activity', 22, fill='muted')
    content += bars(rows, 100, 183, percent=True)
    content += text(28, 553, f'Source generated / {data["source_date"]}', 22, fill='muted')
    content += text(28, 585, f'Retrieved / {data["observed"]} UTC', 22, fill='muted')
    return svg('WakaTime language activity', 'Last Year, as labeled by the public share. Percentages of recorded activity, without total hours or exact date boundaries. See metrics.md for values.', content, 612, palette)


def atomic_write(path, content):
    temporary = path.with_suffix(path.suffix + '.tmp')
    temporary.write_text(content, encoding='utf-8')
    temporary.replace(path)


def save_source(name, data, renderer):
    # Render everything before touching last-good files; never save raw source responses.
    files = {OUTPUT / f'{name}-{theme}.svg': renderer(data, palette)
             for theme, palette in PALETTES.items()}
    files[OUTPUT / f'{name}.json'] = json.dumps(data, indent=2, ensure_ascii=True) + '\n'
    for path, content in files.items():
        atomic_write(path, content)


def write_text_data():
    content = '# Public profile metrics\n\nThese are dated snapshots. A failed refresh keeps the previous values and dates.\n'
    for source in ('github', 'wakatime'):
        path = OUTPUT / f'{source}.json'
        if not path.exists():
            continue
        data = json.loads(path.read_text())
        content += f'\n## {"GitHub" if source == "github" else "WakaTime"}\n\nRetrieved: {data["observed"]} UTC.\n\n'
        if source == 'github':
            content += (f'Public repositories: **{data["public_repos"]}**, including forks. '
                        f'Public non-fork repositories: **{data["non_fork_repos"]}**.\n\n'
                        f'Merged public PRs authored by DF-wu: **{data["merged_prs"]}**, '
                        f'from **{data["pr_start"]} through {data["pr_end"]}**, inclusive (UTC calendar days). '
                        'Includes PRs to own repositories. Search indexing may lag.\n\n'
                        'Each public non-fork repository contributes one count for its GitHub primary language; '
                        'repositories without one are Unclassified. This is not language proficiency.\n\n')
            unit = 'Repositories'
        else:
            content += (f'Provider window: **{data["window"]}**. Source chart generated: **{data["source_date"]}**. '
                        'The share exposes language percentages, not exact date boundaries or total hours. '
                        'Documentation and configuration activity is included. This is not productivity or proficiency.\n\n')
            unit = 'Recorded activity'
        content += f'| Language / format | {unit} |\n| --- | ---: |\n'
        for name, value in data['languages']:
            safe_name = str(name).replace('|', '&#124;').replace('<', '&lt;').replace('>', '&gt;')
            content += f'| {safe_name} | {value if source == "github" else f"{value:.2f}%"} |\n'
    atomic_write(OUTPUT / 'metrics.md', content)


def main():
    today = dt.datetime.now(dt.timezone.utc).date()
    OUTPUT.mkdir(parents=True, exist_ok=True)
    failures = []
    for name, collect, renderer in (
        ('github', lambda: collect_github(today), chart_github),
        ('wakatime', lambda: parse_wakatime(fetch(WAKA_URL), today), chart_wakatime),
    ):
        try:
            save_source(name, collect(), renderer)
            print(f'{name}: refreshed public aggregate snapshot')
        except Exception as error:
            # No URLs, payloads, headers, project names, or tokens in failure logs.
            print(f'{name}: refresh failed ({type(error).__name__}); last good assets retained', file=sys.stderr)
            failures.append(name)
    write_text_data()
    return bool(failures)


if __name__ == '__main__':
    sys.exit(main())
