# Portfolio Redesign — Phase 0 Baseline

Checked at: 2026-07-18 21:05 Asia/Taipei

## Status

- Branch: `codex/portfolio-redesign-phase-0`
- Production branch and deployed site: unchanged
- Deploy / push: not performed
- Current blocker: none
- Current stop point: Phase 0 baseline and grayscale wireframe review
- Next small step: approve the Phase 0 information order, then refine it as the Phase 1 responsive wireframe

## Live / Origin / Local Baseline

| Baseline | Evidence | Meaning |
| --- | --- | --- |
| Live | `https://portfolio-wangweijie.pages.dev/` returned HTTP 200 | The production site was reachable during the check. |
| Origin | `origin/main` = `3af6297708b1558f96e2af626c27ecd5dcd77dd0` | This is the remote production reference currently available in Git. |
| Local | `HEAD` = `11e64c83379a9d85a4bbe4f23ff8c3abb688ce48` | The local starting point is 2 commits ahead of `origin/main`. |
| Live vs origin | Canonical HTML comparison: equal | The live HTML matches `origin/main` after normalizing line endings and the final newline. |
| Live vs local | Canonical HTML comparison: different | The local version contains the paused design-token / utility-class work that is not deployed. |

All three baselines currently use the same title, Hero heading and section order:

`hero → services → automation → featured → storyboard → experiments → commercial → contact`

The redesign branch starts from the local HEAD so the documented redesign lessons remain available. The deployed `origin/main` version remains the visual production reference.

## Confirmed Content Guardrails

- Do not publish `6–7 years` or another exact experience total until the resume dates are verified.
- Phase 0–3 placeholder: `多年跨產業內容與影像實務`.
- `每年約 15–30 案` must be labeled as current-role / recent-year information.
- `3 人團隊` must be labeled as the current-role team size.
- Final assets, publication rights, metric methodology and final copy are Phase 4 content-integration dependencies, not Phase 0–3 blockers.

## Grayscale Homepage Sitemap

1. Header
   - Work
   - Process
   - About
   - Contact
   - Resume / Experience
2. Hero
   - Positioning and short explanation
   - Primary CTA: 查看精選案例
   - Secondary CTA: 查看履歷／經歷
   - Tertiary text link: 聯絡
   - Mixed media: commercial image, proposal / workflow interface, and public-issue / people / non-appliance content
3. Quick Proof
   - 多年跨產業內容與影像實務
   - 現職／近年每年約 15–30 案
   - 現職 3 人團隊
   - 約 3–4 次 AI 工具與流程內訓
4. Work Navigator
   - Commercial Projects
   - Workflow Systems
   - AI Solutions
   - Public Issues
   - Visual Works
   - The default and no-JavaScript reading order always exposes the primary commercial case first.
5. Featured Commercial Case
   - Three air-fryer ovens project
   - Problem, role, decisions and production proof
6. Selected Cases
   - GAS workflow case
   - Anti-fraud commissioned concept proposal
   - Delivered AI-assisted fan advertisement
7. Process
8. Selected Visual Works
9. About / Experience
10. Contact
11. Future entry points, not built in MVP
    - Notes
    - Insights
    - Collaboration
    - Lab

## Wireframe Acceptance Rules

- Hero and the first two viewports must not be composed entirely of appliance imagery.
- At least three visual types appear early: commercial media, proposal / process interface, and public-issue / people / non-appliance content.
- Work Navigator enhances discovery but never hides the primary reading path.
- Mobile uses a sequential content layout; it does not require tabs, hover or horizontal scrolling.
- JavaScript failure must leave the full case titles, summaries and links readable.
- CTA hierarchy remains visibly distinct: primary, secondary and tertiary.
- The grayscale wireframe fixes hierarchy and responsive behavior only; it does not decide final color, typography, animation or asset selection.

## Dependencies Before Formal Content Integration

- Verified resume date ranges and experience wording
- Case publication rights and credits
- GAS time-comparison methodology
- Final oven-project differences and Director's Cut status
- Anti-fraud proposal publication scope
- Selected Visual Works shortlist
- Final Chinese / English positioning copy
