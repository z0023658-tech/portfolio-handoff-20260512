# AGENTS.md

## Repo Purpose

本專案是個人作品集網站，定位為「內容企劃 x AI 工具研究 x 工作流自動化」的對外展示入口。

目前是靜態前端 portfolio，重點是保持網站穩定、視覺一致、內容可讀、可部署到 Cloudflare Pages 或 GitHub Pages。

## Must-read Files

- `README.md`
- `AGENTS.md`
- `TASKS.md`
- `UI_UX_LESSONS.md`，只要任務涉及 UI / UX 方向、視覺或內容呈現就必讀
- `index.html`，只在需要修改頁面或確認 asset reference 時讀

## Project-specific Boundaries

- 只讀取與修改本專案資料夾內檔案。
- 不讀取 parent / sibling 專案，不修改 Hub、外部 portfolio repo 或封存 portfolio。
- 不將此專案轉成 React、Next.js、Vue、Tailwind 或其他框架，除非使用者明確要求。
- 不改變整體 premium dark portfolio 方向、section 順序或核心文案定位，除非使用者明確要求。
- 不任意搬移、刪除、重新命名 assets；若改 asset path，必須同步檢查 `index.html` 引用。
- 不刪除 `backup/`。
- 不暴露 API key、私有 URL 或環境變數。

## Current Portfolio Optimization Direction

目前正式網站基準是 `main`：root `index.html` 為正式首頁，`redesign/cases/` 為正式 Case Detail。後續是在既有網站上做品質收斂，不是重新進行全站 redesign。

後續優化固定依同一條主線、依序進行：

1. 全站資訊與視覺層級系統
2. 首頁作品命名與文案
3. Case Detail 去報告化
4. Artwork / Cover 視覺整理

### 後續任務硬性原則

- 已完成並確認的 hierarchy system 不得自行重新定義。
- 每次任務只能處理指定 Gate，不得提前處理下一階段。
- 局部修改不得順便改動其他區塊的 typography、spacing、layout、responsive behavior 或 visual hierarchy。
- 不因單一區塊需求重新解讀整站設計方向；維持 premium dark editorial portfolio，不轉成 SaaS、dashboard、template gallery 或 generic AI portfolio。
- 設計一致性是共享同一套 hierarchy，不是所有 Case 使用相同內容模板；Film、AI Visual、Build 可依作品證據採不同結構。
- 陌生訪客能否理解作品，優先於內部專案命名。
- 減少抽象 slogan、過度解釋與典型 AI-generated copy；能由圖片、影片、UI 或成果證明的內容，不以長段落重複解釋。
- Case Detail 優先讓作品本身說話，不預設必須呈現工程報告、完整流程或所有驗證數據。
- Internal link 與 external link 必須使訪客可預期點擊後行為。
- Artwork、thumbnail、cover 的最終選圖與裁切屬人工視覺判斷；未經要求不得大量重裁、替換或生成素材。
- 不因內容縮短或改名而自行重新設計 hierarchy。

若任務涉及視覺修改，先判斷其屬於 hierarchy、content、case structure 或 artwork；不得混成一次修改。

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
- `UI_UX_LESSONS.md`：已驗證的 UI / UX 教訓。
- `package.json` / `vite.config.ts`：本機開發與 build 設定。

## Known Traps

- 不要直接照 AI mockup 做全頁 redesign；先轉成設計規格，再一段一段改。
- Modal / JavaScript logic 不要順手重構。
- portfolio 圖片路徑一改就可能影響部署頁面。
- 避免 generic AI-template 視覺；保持目前高質感深色作品集方向。
