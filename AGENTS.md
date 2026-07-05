# AGENTS.md

## Repo Purpose

本專案是個人作品集網站，定位為「內容企劃 x AI 工具研究 x 工作流自動化」的對外展示入口。

目前是靜態前端 portfolio，重點是保持網站穩定、視覺一致、內容可讀、可部署到 Cloudflare Pages 或 GitHub Pages。

## Must-read Files

- `README.md`
- `AGENTS.md`
- `TASKS.md`
- `UI_UX_LESSONS.md`，只要任務涉及大範圍 UI / UX redesign 就必讀
- `index.html`，只在需要修改頁面或確認 asset reference 時讀

## Project-specific Boundaries

- 只讀取與修改本專案資料夾內檔案。
- 不讀取 parent / sibling 專案，不修改 Hub、外部 portfolio repo 或封存 portfolio。
- 不將此專案轉成 React、Next.js、Vue、Tailwind 或其他框架，除非使用者明確要求。
- 不改變整體 premium dark portfolio 方向、section 順序或核心文案定位，除非使用者明確要求。
- 不任意搬移、刪除、重新命名 assets；若改 asset path，必須同步檢查 `index.html` 引用。
- 不刪除 `backup/`。
- 不暴露 API key、私有 URL 或環境變數。

## Build / Test / Validation

- 可用指令依 `README.md` 與 `package.json` 為準：
  - `npm install`
  - `npm run dev`
  - `npm run build`
- 修改後依任務範圍檢查：
  - desktop / tablet / mobile 版面。
  - modal 與既有互動。
  - asset path 是否仍為相對路徑。
  - GitHub Pages / Cloudflare Pages 相容性。

## Directory Notes

- `index.html`：主要靜態頁面。
- `assets/`：網站媒體素材。
- `backup/`：歷史備份，不要任意刪除。
- `TASKS.md`：短期網站整理任務。
- `UI_UX_LESSONS.md`：重啟 UI / UX redesign 前的踩雷紀錄。
- `package.json` / `vite.config.ts`：本機開發與 build 設定。

## Known Traps

- 不要直接照 AI mockup 做全頁 redesign；先轉成設計規格，再一段一段改。
- Modal / JavaScript logic 不要順手重構。
- portfolio 圖片路徑一改就可能影響部署頁面。
- 避免 generic AI-template 視覺；保持目前高質感深色作品集方向。
