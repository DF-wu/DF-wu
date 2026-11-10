# Profile redesign validation

Validated on 2026-11-10 UTC / 2026-11-11 Asia/Taipei.

## Actual GitHub rendering

The [isolated branch README](https://github.com/DF-wu/DF-wu/tree/design/profile-systems-evidence#readme) was opened in the shared T3 browser. These are GitHub's real rendered HTML, typography, spacing, image handling, and responsive layout; no local CSS approximation was used.

| View | Layout width | README width | Image results |
| --- | --- | --- | --- |
| Desktop, light | 1280 px | 838 px | All three light variants loaded |
| Desktop, dark | 1280 px | 838 px | All three dark variants loaded |
| Mobile, light | 390 px | 324 px | All three light variants loaded |
| Mobile, dark | 390 px | 324 px | All three dark variants loaded |

Full-page captures also used the same widths with 3840px-tall tiles (the preview tool's maximum height). Tiles were joined at their measured scroll offsets without scaling or content alteration; overlapping sticky navigation was excluded from the join. README-only and first-screen crops were saved separately. Original preview captures and their scroll positions are preserved in a capture manifest outside the repository.

Screenshot file sets: `desktop-light`, `desktop-dark`, `mobile-light`, and `mobile-dark`, each with `-full.png`, `-readme.png`, and `-first-screen.png`. The full repository-page captures are 1280 × 4757 pixels on desktop and 780 × 11913 pixels on mobile; mobile captures use the browser's 2× pixel density. Paths are supplied in the task delivery report rather than embedding large screenshots in this repository.

Observed: no document horizontal overflow at either width, all README image elements completed decoding with nonzero intrinsic size, correct dark sources selected under dark appearance, no clipped chart labels, and readable mobile chart percentages/dates. The 324px-wide mobile charts render secondary text at approximately 11.9 CSS pixels; linked text data supplies a full-size accessible alternative. Native prose stays at GitHub's normal text size.

The SVG main/secondary text contrast ratios against their surfaces are 13.18/5.95 in light mode and 14.37/8.73 in dark mode (rounded; computed from the authored palette). Decorative tracks are not text.

GitHub's Markdown API independently confirmed that all three picture/source/img groups survive its GFM renderer. Local references resolve, project anchors resolve, and the résumé and three selected merged PR pages return the intended GitHub documents. A burst of anonymous browser link checks caused one 429 response for the maintenance document; that relative file is present and was checked through repository contents instead. No broken-link conclusion was inferred from rate limiting.

## Source and automation checks

- Live generator completed against public GitHub endpoints and the useful WakaTime SVG response before and after the save-failure fix.
- WakaTime validation checked content type, SVG namespace, the exact language/window title, source-generation date, distinct language legends, bounded percentages, and an approximately 100% total. Its companion JSON endpoint returns 404; no private API key was read or needed.
- Seven offline unittest cases pass, covering public pagination, fork filtering, the inclusive UTC PR window, rejection of private/incomplete results, malformed/wrong-scope/stale WakaTime responses, escaped SVG text, independent local last-good behavior, and rollback after the second output installation fails.
- `actionlint` v1.7.7 passes for the changed workflow.
- `git diff --check` passes. Static SVG parsing and scope checks pass. No script, foreignObject, external SVG resource, or credential material was introduced.
- The owner-side visual review of desktop/mobile, light/dark captures found no material visual issue. The independent final code reviewer found one material issue: sequential file saves could leave a mixed snapshot on a filesystem failure. The fix stages rollback copies and restores the source set; automation now skips commits whenever any refresh step fails. An independent focused recheck reported no remaining material finding and reran all seven tests.

## Explicit limits

This validates the draft branch's repository README on GitHub. The account's live profile continues to show master until a separate merge decision. Mobile QA changes CSS viewport size, not the user agent, and is not a physical-device test.

The master-only scheduled/manual write path was not executed: doing so before review would publish changes to master. Its parser/generator, workflow syntax, and offline failure paths were validated locally. The PR's test job provides the CI check; the refresh job deliberately skips PR events. No manual website build or deployment was requested or run, and no website source or deployment configuration changed. The existing Vercel integration automatically produced a branch preview on push and reported success.

Research/experience evidence and source-retrieval limits are documented in [the maintenance note](README.md#public-evidence). WakaTime exposes percentages for its Last Year label, without exact date boundaries or hours; GitHub metrics are public snapshots rather than private contributions or proficiency scores.
