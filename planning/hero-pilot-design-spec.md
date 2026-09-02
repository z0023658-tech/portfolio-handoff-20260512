# Portfolio Redesign — Hero Pilot Design Spec

Date: 2026-07-18

## Purpose

This pilot tests one question only: can the first screen communicate commercial project leadership, AI-assisted workflow capability and visual range without looking like an appliance-only portfolio?

It is intentionally isolated from the production homepage. It does not introduce Vite, a new routing system, a content schema or deployment changes.

## Recommended Visual Direction

- Light-first warm editorial interface
- Quiet, confident typography instead of tech-product styling
- One large message on the left and an image-led editorial collage on the right
- Real existing assets instead of generated mockups
- Minimal motion; layout and image scale provide the visual interest
- No tool logos, skill-icon wall or AI terminology in the main headline

## Hero Message

Eyebrow:

`BRAND CONTENT · CREATIVE PROJECT LEAD`

Headline:

`品牌內容與創意專案主導者`

Supporting copy:

`從需求釐清、企劃提案到團隊執行與交付，並運用 AI 改善內容製作流程。`

CTA hierarchy:

1. Primary: 查看精選案例
2. Secondary: 查看履歷／經歷
3. Tertiary text link: 聯絡

Experience proof uses only the approved wording:

- 多年跨產業內容與影像實務
- 現職／近年每年約 15–30 案
- 現職 3 人團隊
- 約 3–4 次 AI 工具與流程內訓

## Selected Pilot Media

The pilot uses three existing assets with different meanings:

1. `service-interview-photo-cover.webp`
   - Main commercial-production signal
   - People-led rather than appliance-led
2. `GAS_cover.png`
   - Proposal and workflow-interface signal
   - Shows that AI / automation appears as a working method
3. `service-brand-film-cover.webp`
   - Public-sector / people / non-appliance signal
   - Prevents the opening view from becoming a row of household products

These are layout test assets, not the final Hero shortlist. Publication and credit review remains a formal-content dependency.

## Layout Rules

### Desktop

- Maximum content width: 1360px
- Page side space: 32–48px depending on viewport
- Header height: approximately 72px
- Hero split: roughly 42% message and 58% media
- Headline is deliberately broken into two controlled lines
- The media collage uses one large image and two smaller supporting images
- Quick Proof is integrated into the bottom of the Hero rather than shown as four floating cards

### Mobile

- One vertical reading order
- Message and CTA appear before media
- Primary and secondary CTA become full-width
- Contact remains a text link
- Main media remains landscape; supporting media form a two-column row
- Proof becomes a two-column list and then one column on very narrow screens
- Navigation does not depend on a hamburger interaction in this pilot

## Provisional Design Tokens

The pilot fixes a direction, not the final brand palette.

- Page background: warm ivory
- Primary text: soft black
- Supporting text: warm dark gray
- Primary action: dark forest / charcoal
- Lines and secondary surfaces: warm neutral gray
- Image corners: restrained, not highly rounded
- Shadows: used only to separate overlapping media

Typography uses system fonts so the pilot has no external font dependency. The Chinese headline uses a serif-capable editorial stack; body and controls use a system sans-serif stack.

## Interaction and Accessibility

- All content is readable without JavaScript
- No autoplay, parallax, horizontal scroll or cursor effect
- Keyboard focus remains visible
- The layout supports `prefers-reduced-motion`
- Media uses meaningful alt text
- CTA labels remain explicit
- Mobile does not depend on hover

## Acceptance Criteria

- The first screen reads as a content / creative project leader, not an AI-tool specialist
- At least three visual signals appear: commercial production, workflow interface and public / people content
- No exact experience-year claim appears
- The CTA hierarchy is visually obvious
- The headline does not wrap into awkward single-character lines at 360px, 768px or desktop widths
- The desktop and mobile compositions feel intentionally different
- The existing production `index.html` remains unchanged

## Stop Point

- Hero design spec: complete
- Isolated Hero implementation pilot: complete
- Current blocker: none
- Production / deploy: unchanged
- Next step after visual approval: establish the lightweight project structure and content contract needed to implement the approved homepage progressively
