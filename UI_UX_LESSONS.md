# UI/UX Redesign Lessons

## 2026-07-05 Redesign Pause Note

This project tested a workflow where Codex generated visual mockups, translated one preferred direction into an implementation plan, and then directly modified `index.html`.

The result was paused because the visual and layout outcome became hard to control. The main issue was not only color direction, but that broad UI/UX interpretation without a concrete design specification can unintentionally change spacing, rhythm, text wrapping, hierarchy, and section balance.

## What Went Wrong

- AI mockups were useful for mood exploration, but not precise enough as implementation specs.
- The implemented version looked too close to the original structure in some places, while other areas changed in ways that felt less controlled.
- Large typography and bilingual copy created wrapping problems that were not fully planned before implementation.
- A broad "Apple-like light UI" direction was too abstract for direct code changes.
- Codex had too much freedom to infer layout, spacing, and hierarchy from a visual reference.
- The redesign touched too many design decisions at once, making it hard to isolate what improved or worsened.

## Risks To Avoid Next Time

- Do not move from AI image mockup directly into full-page implementation.
- Do not treat a generated image as a complete design system.
- Do not combine color redesign, layout redesign, copy adjustment, responsive behavior, and content hierarchy in one pass.
- Do not let Codex decide major visual direction without fixed constraints.
- Do not modify the full `index.html` before agreeing on a smaller test section.
- Do not skip text wrapping rules for Chinese, English, and mixed-language labels.

## Better Workflow

1. Use AI images only for visual direction exploration.
2. Pick one direction and convert it into a written design spec before coding.
3. Define fixed constraints first: color tokens, type scale, spacing scale, card rules, image ratios, and responsive behavior.
4. Implement one section only, preferably Hero or one case-study card.
5. Review the section visually on desktop, tablet, and mobile.
6. Only continue if the test section feels right.
7. Expand the same rules gradually to other sections.

## What Codex Should Help With

- Auditing current UI/UX problems.
- Turning a chosen reference into a precise design specification.
- Creating small implementation plans.
- Applying scoped CSS changes.
- Checking navigation order, anchor links, and section consistency.
- Testing desktop, tablet, and mobile text wrapping.
- Verifying that changes are limited with `git diff`.

## What Codex Should Not Do Without Approval

- Redesign the whole site from a mockup in one pass.
- Freely rewrite layout structure or visual hierarchy.
- Change major copywriting direction.
- Change section order.
- Rename, move, or delete assets.
- Introduce new frameworks or build complexity.

## Recommended Restart Criteria

Before restarting UI/UX implementation, prepare at least one of the following:

- A Figma design or wireframe.
- A screenshot with annotated spacing, type, and layout notes.
- A written design system brief.
- A single-section pilot scope, such as Hero only or Automation Works card only.

Recommended first restart scope:

- Keep the current site structure.
- Improve one section only.
- Test text wrapping before expanding.
- Commit only after the section is approved.
