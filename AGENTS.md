# AGENTS.md

## Project Overview

This is a personal portfolio website for an AI visual director / commercial film director / AI image workflow creator.

The current project is a static front-end portfolio site exported from AI Studio.

The main goal is to keep the site stable, readable, and easy to deploy.

## Core Rules

1. Do not rewrite the entire website unless explicitly requested.
2. Do not convert this project to React, Next.js, Vue, Tailwind, or any other framework unless explicitly requested.
3. Do not change the visual direction, layout structure, section order, or copywriting without approval.
4. Do not rename, move, or delete files unless the task specifically asks for it.
5. Do not change asset paths without checking all references in `index.html`.
6. Do not remove existing backup files.
7. Prefer small, incremental changes over large refactors.
8. Before modifying files, explain what will be changed.
9. After modifying files, summarize what changed and what should be tested.

## Current Structure

Expected root-level files may include:

- `index.html`
- `README.md`
- `AGENTS.md`
- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `metadata.json`
- `.gitignore`
- `.env.local`
- `assets/`
- `backup/`

## Asset Rules

1. All website media assets should stay under `assets/`.
2. Use lowercase English filenames when possible.
3. Prefer hyphenated filenames.
4. Avoid spaces, Chinese characters, and repeated file extensions.
5. Before reorganizing assets, create a backup.
6. If an asset is moved or renamed, update all related HTML references.

## Design Rules

1. Keep the current premium dark portfolio style.
2. Maintain responsive layout for desktop, tablet, and mobile.
3. Do not add unnecessary animations.
4. Prioritize readability, hierarchy, spacing, and image consistency.
5. Keep project thumbnails visually consistent.
6. Avoid generic AI-template visual patterns.

## Development Rules

1. This project should remain deployable as a static site.
2. Do not introduce unnecessary dependencies.
3. Do not add build complexity unless required.
4. Check desktop, tablet, and mobile layout after changes.
5. Keep code readable with clear section comments.

## Modal / JavaScript Rules

1. Do not refactor Modal logic unless explicitly requested.
2. If refactoring is requested, first propose the new structure.
3. Avoid breaking existing interactions.

## Deployment Rules

1. The site should be compatible with Cloudflare Pages or GitHub Pages.
2. Avoid absolute local paths.
3. Use relative paths for local assets.
4. Do not expose API keys or private environment variables.

## Preferred Workflow

For every task:

1. Inspect first.
2. List findings.
3. Propose the smallest safe change.
4. Modify only after the task is clear.
5. Summarize changed files.
6. List what the user should test next.