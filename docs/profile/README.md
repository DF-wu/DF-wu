# Profile design, evidence, and maintenance

This redesign is scoped to the GitHub profile README, authored SVGs, and public metric automation. The separate frontend, backend, site, Vercel portfolio, and Pages deployment are outside its scope.

## Design rationale

The profile should read as the working notebook of a backend and platform engineer: clear entry, a small selection of systems, and a visible trail from research to operation. The audience is engineering peers and hiring teams. The opening states the engineering focus immediately; each selected project gives the problem, mechanism, and a route into its source.

Three approaches were considered: a badge dashboard, a full résumé, and a compact engineering portfolio. The portfolio gives the strongest evidence per screen and works within GitHub's Markdown constraints. Long role-fit tables, repeated stack badges, raw LOC totals, and duplicate card providers dilute that hierarchy and were removed.

The single memorable element is an authored signal-path banner. Three paths cross service boundaries and terminate together: a reference to contracts, runtime flows, and operation in CCTS. It uses the DF monogram rather than a generic terminal screenshot or decorative technology logos. Everything substantive remains selectable native text.

| Token | Light | Dark | Purpose |
| --- | --- | --- | --- |
| Surface | `#f4f7fb` | `#142235` | Banner and metric backgrounds |
| Ink | `#172c45` | `#edf3fc` | Main text |
| Secondary ink | `#4b6179` | `#afc1d8` | Dates and scope |
| Signal blue | `#2459a6` | `#8eb9ff` | Data bars and paths |
| Signal teal | `#19756e` | `#76d2c3` | Secondary path |
| Rule | `#ccd8e5` | `#354b66` | Service boundaries and bar tracks |

GitHub supplies prose typography, spacing, focus behavior, and heading hierarchy. SVGs use local system sans-serif fonts, no downloaded fonts, scripts, stylesheets, animation, or foreignObject. A single column avoids narrow table cells on phones. The hero has no fine-print labels; metric labels use 22–29 SVG units at a 600-unit width (about 12–16 CSS pixels at 328 pixels). Each image has a title/description, Markdown alt text, and a linked text equivalent. Light/dark variants use GitHub-supported picture elements. Charts share the banner's palette and corner radius.

## Public evidence

Reviewed on 2026-11-10 UTC (2026-11-11 in Taiwan). Sources support the stated claims; they do not establish unaudited performance results or universal hardware compatibility.

| Claim | Public source and finding |
| --- | --- |
| Education and ITRI experience | [Public résumé](https://github.com/DF-wu/resume/blob/main/CHUFEIWU_Resume.pdf), dated March 15, 2025. Lists NTOU CSE M.S./B.S. and ITRI software-engineering internship, July–December 2021; describes microservices, event-driven architecture, CI/CD, delivery, and documentation. Its project section lists AKS. Employment claims are attributed to this résumé rather than inferred from publications. |
| Graduate research | [SOSELab members](https://ntou-soselab.github.io/SOSELab/people.html) lists Wu's 2022 thesis on contract and end-to-end testing of event-driven microservices. |
| APSEC and TCSE | [SOSELab publications](https://ntou-soselab.github.io/SOSELab/publications.html) lists Chu-Fei Wu first for the APSEC 2022 paper and records the TCSE 2022 Best Chinese Paper award for the related work. The IEEE document link is retained as a destination; readable IEEE metadata was unavailable in this environment, so verification uses the lab's primary publication record. |
| PDAS | The same lab record lists Chu-Fei Wu as a co-author of the ICS 2020 PDAS paper. This establishes authorship, not sole ownership of the platform. |
| CCTS mechanisms | [CCTS architecture and research background](https://github.com/DF-wu/CCTS#architecture) describe consumer-driven contracts, event-log verification, state models, and the NTOU thesis connection. Self-published implementation documentation. No LOC claim is carried forward. |
| HideReplier runtime | [Build chain](https://github.com/DF-wu/HideReplier#building-chain) documents Go as the primary runtime, Vite, streaming results, atomic counters, precompression, and bounded pools. The prior profile's Java-only description was stale. Performance details are described as documented mechanisms, not independently benchmarked outcomes. |
| iDRAC automation | [Project design](https://github.com/DF-wu/iDRACFanSpeedControl#how-it-works) documents pluggable temperature providers, a common curve, diagnostics, restore mode, and R730xd/iDRAC 8 test limits. |
| Public collaboration | GitHub PR API confirms DF-wu authored and merged [lilac-mono #1](https://github.com/stanley2058/lilac-mono/pull/1), [mcp-feedback-enhanced #138](https://github.com/Minidoracat/mcp-feedback-enhanced/pull/138), and [Flipper firmware #691](https://github.com/flipperdevices/flipperzero-firmware/pull/691). |

The legacy SOSELab `/publications/` and `/lab-members/` URLs redirect to missing pages. Use the working `.html` destinations above. No operational domains, IP addresses, private project identifiers, or private repository details are reproduced.

## Metric definitions

[Readable values](../../assets/profile/metrics.md) and the two JSON snapshots live alongside the rendered SVGs. Only allowlisted aggregates are stored; raw API responses and the original WakaTime SVG are never committed.

### GitHub

- Public user and paginated public owned repositories from `api.github.com/users/DF-wu` and `/users/DF-wu/repos?type=owner`.
- Public repository count includes forks. Non-fork count excludes them. Primary-language counts give each non-fork repository one vote; missing language becomes Unclassified. This is neither code-volume weighting nor skill proficiency.
- Merged PRs use GitHub issue search: `author:DF-wu is:pr is:merged is:public merged:START..END`. The window is 90 inclusive UTC calendar days, including the retrieval day, and includes PRs to DF-wu's own repositories. Search indexing may lag. It is not the contribution-calendar count or total commits.
- Incomplete search results, visibility/owner mismatches, and inconsistent repository counts fail validation. No private endpoints or account-wide PAT is needed.

### WakaTime

The existing [public share](https://wakatime.com/share/@cb2e708b-89d1-4093-bf95-cafd34987f43/d210fe3c-7b63-47b5-a4d4-b70bb8300fcb.svg) returns a real Pygal language chart, not an error body. Its title is **Languages over Last Year**. At inspection, it reported Markdown 25.12%, Python 19.52%, and YAML 17.32%, with a source generation date of 2026-11-09. The companion `.json` URL returns 404.

The generator extracts only the title, source-generation date, and language legend percentages. The card displays the top five named languages/formats and a combined Other bucket containing the provider's Other category and the remaining long tail. The text data preserves the individual provider percentages (to two decimal places). Rounded source totals may differ slightly from 100%.

The provider's Last Year window is a rolling year label, without exact start/end timestamps in this response. Percentages describe recorded editor time including prose/configuration; they do not establish hours, total effort, productivity, or proficiency. Retrieval date and source-generation date remain separate. No private project/file/activity details are requested.

No WakaTime key is required for this integration. Secret-name inspection found `WAKATIME_API_KEY` already configured; its value was never read and this workflow does not use it. If the public share becomes private, unavailable, stale by more than 14 days, or changes schema, the last successful chart and its dates remain. Restoring that same public language share is the exact requirement for refresh; alternatively, a separately reviewed language-only API integration could use the existing secret. Do not add a key to source or logs.

## Refresh and failure behavior

`profile-summary-cards.yml` is repurposed as **Refresh public profile metrics**, the single metric writer. The old inactive WakaTime definition and no-op waka-box workflow are removed. Previously generated `profile-summary-card-output/` assets remain untouched as historical artifacts; the README no longer embeds them or calls third-party card hosts.

- Scheduled daily at 06:23 UTC after merge; manual refresh is supported on master. The branch guard deliberately prevents manual publishing from a draft branch.
- Pull requests run offline unit tests with read-only repository permission and no credentials persisted in checkout. Refresh runs only for this exact repository and master, with contents-write permission limited to that job.
- Checkout is pinned to the verified v4.2.2 commit. Python uses only the standard library already present on the runner. No pip/npm installation, WakaTime action, PAT, or new external service is required.
- GitHub's repository-scoped Actions token authenticates only fixed GitHub API URLs and the scoped push. The public WakaTime fetch receives no token.
- Each source is fetched, validated, and rendered before its output files are replaced. Each file is replaced atomically. A failed source keeps all its previous outputs; an independent successful source can still update. Text data is rebuilt from saved snapshots.
- A partial refresh commits successful data, then deliberately fails the run to surface the stale source. Failed API bodies, headers, and exception messages are not printed. Dates on retained charts remain unchanged.
- Only metric files are staged. Pushes are ordinary fast-forward pushes; concurrent master changes cause a safe push failure for the next scheduled/manual retry. No force push or automatic rebase is used.

Local refresh and checks:

```sh
python3 scripts/profile_metrics.py
python3 -m unittest discover -s scripts -p 'test_profile_metrics.py' -v
git diff --check
```

The GitHub API can be used unauthenticated within public rate limits. In Actions, `GH_TOKEN` is supplied by `github.token`. Unit tests are offline and cover pagination, fork filtering, exact PR windows, private/incomplete-source rejection, malformed/stale WakaTime content, XML escaping, and last-good preservation with independent updates.

## Git identity and target

Before writes, `gh api user` returned **DF-wu**, and repository inspection confirmed **public DF-wu/DF-wu**, default branch **master**, viewer permission **ADMIN**. This existing authenticated actor has repository access and is used for the authorized push/draft PR; no account changes were made.

Catalina's established identity was discovered in this repository's existing commits (including `ee1361cf59dfd3661f8bf94dc3a51f6ea4cbed8e`): **Catalina <catalina@dfder.tw>** as author and committer. It is configured only in this clone. GitHub does not associate that historical email with an account in its API; no verified-email/account attribution is claimed. Scheduled metric commits use GitHub Actions' standard bot identity.
