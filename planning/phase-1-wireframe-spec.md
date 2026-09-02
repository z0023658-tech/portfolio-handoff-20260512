# Portfolio Redesign — Phase 1 Responsive Wireframe

Date: 2026-07-18

## Recommended Direction

Phase 1 uses one recommended direction rather than multiple style options:

- Light-first, warm editorial structure
- Commercial project leadership appears before AI tools
- Large media moments alternate with compact text and evidence sections
- Interactions help people understand a case; they do not hide required content
- Desktop and mobile have separate reading rhythms
- Final colors, fonts, motion and production assets remain outside Phase 1

The visual reference sites are used as research libraries only. The wireframe borrows general principles—clear project hierarchy, varied image scale, section-level rhythm and concise case introductions—without copying a specific page, composition or interaction.

## Homepage Story

### 1. Header

The header uses plain navigation names: Work, Process, About and Contact. Resume / Experience remains visible but lower priority than the primary Work route.

### 2. Hero

The Hero establishes the role first:

`品牌內容與創意專案主導者`

Supporting copy explains that business needs are translated into executable content, production systems and AI-assisted workflows.

CTA hierarchy is fixed:

1. Primary: 查看精選案例
2. Secondary: 查看履歷／經歷
3. Tertiary text link: 聯絡

The Hero media cluster contains three different signals:

- Commercial production
- Proposal / workflow interface
- Public issue, people or non-appliance work

This prevents the first impression from becoming an appliance-only portfolio.

### 3. Quick Proof

Quick Proof uses evidence with explicit context:

- 多年跨產業內容與影像實務
- 現職／近年每年約 15–30 案
- 現職 3 人團隊
- 約 3–4 次 AI 工具與流程內訓

No exact total experience year is used before resume verification.

### 4. Work Navigator

The Navigator is a visible table of contents, not a filter gate. All five routes remain readable:

- 商業專案
- 流程系統
- AI 解法
- 公共議題
- 影像作品

The commercial flagship case appears immediately after the Navigator by default. If JavaScript is absent, all following sections remain in the same reading order.

### 5. Featured Commercial Case

The oven project is the first full case proof. The homepage shows only:

- Business problem
- Key production decisions
- Confirmed role
- A small set of evidence placeholders
- Link to the future full case page

The formal client version and the unfinished Director's Cut must be labeled separately.

### 6. Selected Cases

The cases use different sizes because they prove different abilities:

- GAS workflow: large workflow-system case
- Anti-fraud proposal: commissioned concept proposal, not produced
- AI-assisted fan advertisement: delivered short case under budget constraints

Their status is visible before the visitor opens the case.

### 7. Process

The seven-step process is readable as a complete sequence:

`需求釐清 → 企劃與腳本 → 提案 → 資源與排程 → 拍攝／製作 → 回饋與驗收 → 流程改善`

Future interaction may reveal documents or media, but the step names and explanations remain visible without interaction.

### 8. Selected Visual Works

The visual wall proves lighting, photography, product-detail and on-set visual judgment. It does not claim ownership of client brand strategy.

MVP uses an editorial grid without filtering. Filtering remains Post-MVP.

### 9. About / Experience

This section explains cross-functional work, client communication, team coordination and internal training. It uses the temporary phrase `多年跨產業內容與影像實務` until the resume dates are verified.

### 10. Contact and Future Paths

Contact stays simple. Footer architecture reserves future entry points for Notes, Insights, Collaboration and Lab without creating empty MVP pages.

## Responsive Rules

### Desktop

- Hero copy and mixed media share the first screen.
- Sections alternate between full-width media, split layouts and compact evidence rows.
- The commercial flagship receives the largest single case area.
- Process uses a horizontal numbered sequence only when the full text fits.

### Mobile

- Content follows one vertical reading order.
- No required tabs, hover, horizontal scroll or hidden case copy.
- Primary CTA is full-width; secondary CTA is visually quieter; Contact remains a text link.
- The three Hero media types remain visible as a compact collage.
- Process becomes a vertical numbered list.
- Case status and role appear before optional media detail.

## Phase 1 Acceptance

- A recruiter can identify the role, business experience, AI's supporting role and the first flagship case without using an interaction.
- Hero and the first two viewports do not consist entirely of appliance imagery.
- Commercial work has greater visual weight than tools and experiments.
- Desktop and mobile show the same facts but use different layouts.
- No exact experience-year claim is present.
- No unverified result, production status or publication right is implied.
- No Vite, dependency, schema, routing or production-page change occurs in Phase 1.

## Current Stop Point

- Phase 1 grayscale responsive wireframe: complete
- Current blocker: none
- Production / deploy: unchanged
- Next small step after approval: convert the approved wireframe into a written design system and one scoped Hero implementation pilot before wider engineering restructuring
