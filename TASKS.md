# TASKS.md

## 專案目前目標

本專案是個人履歷作品集 GitHub Pages 靜態網頁。

目前改版目標是調整個人網頁的求職定位，從偏「影像導演作品集」的呈現方式，逐步轉成更符合「內容企劃 × AI 工具研究 × 工作流自動化」的個人作品集。

新的定位方向包含：

- 內容企劃
- AI 工具研究
- AI 自動化工作流
- Google Apps Script / Google Sheet 自動化
- GitHub Pages 小工具
- Codex 輔助開發
- 商業影像與內容企劃背景

## 2026-07-05 專案暫停狀態

- 狀態：暫停。
- 暫停點 commit：`c658450 Document UI redesign pause and design tokens`。
- 本輪已完成：
  - 記錄 AI mockup 直接進入 UI/UX 改版的風險與踩雷點。
  - 新增 `UI_UX_LESSONS.md`。
  - 在 `AGENTS.md` 與 `README.md` 補上重啟入口。
  - 完成設計基礎層 MVP1-MVP3：design tokens、typography / spacing layer、component utility classes。
- 本輪暫緩：
  - MVP4 視覺 baseline check。
  - 拆分 `index.html`。
  - 進一步 UI 改版或單區塊 UI pilot。
- 重啟前必讀：
  - `AGENTS.md`
  - `README.md`
  - `UI_UX_LESSONS.md`
  - `TASKS.md`

## 目前已完成

- [x] Hero 定位已調整為「內容企劃 × AI 自動化工作流」方向。
- [x] `#automation` 區塊已改為「自動化工具與工作流案例 / Automation Works」方向。
- [x] `#services` 已從「服務 / Services」改為「專業 / Capabilities」方向。
- [x] `#contact` 已簡化，只保留聯絡標題與信箱 / 社群入口。
- [x] `#automation` 第一張 GAS 商品分鏡提案互動式網頁卡片已保留兩個正式專案入口：
  - 廣告分鏡提案｜MIRAVAC
  - 廣告分鏡提案｜Cuisinart TOA100
- [x] 首頁前段區塊順序已調整為：
  - Hero
  - `services` / 專業 Capabilities
  - `automation` / Automation Works
  - `featured`
  - `storyboard`
  - `experiments`
  - `commercial`
  - `contact`
- [x] 主要 section h2 已改為中文與英文上下兩行，移除「/」。
- [x] 設計基礎層 MVP1-MVP3 已完成，集中管理顏色、字級、間距、圓角、陰影與常用元件 class。
- [x] `index.html` 尚未拆檔；目前仍維持單檔靜態頁。

## 下一步待辦

- [ ] MVP4：進行桌機、平板、手機的視覺 baseline check，確認設計基礎層整理後沒有肉眼可見跑版。
- [ ] 檢查並同步 desktop nav / side nav / Hero quick links 的順序與文字。
- [ ] 評估 Featured / Storyboard / Experiments 的命名是否要從影像導向改為內容流程 / AI 工具研究導向。
- [ ] 將 Automation Works 作品卡片逐步改成「問題 / 工具 / 方法 / 成果」格式。
- [ ] 檢查正式頁部署後的桌機與手機版顯示。

## 改版原則

- 小步修改，避免一次改太多造成網站不穩定。
- 每次只改一個區塊，方便檢查差異與回復。
- 先文案，後版型，最後才做 JavaScript 或互動功能。
- 不一次重構整站。
- 保持靜態網站可部署到 GitHub Pages。
- 不寫入私有 URL、token、帳密或其他敏感資訊。

## Phase 規劃

### Phase 1：只讀分析目前頁面

- 狀態：已完成。
- 掃描 `index.html` 的區塊順序、文案、作品卡片與導覽。
- 判斷目前敘事重心是否偏向影像創作者。
- 找出可以轉向 AI 工作流、行銷自動化與小工具作品集的位置。
- 不修改任何檔案。

### Phase 2：Hero 文案修改

- 狀態：已完成。
- 只修改 Hero 區塊的文字。
- 將第一眼定位從影像導演調整為 AI 行銷工作流 / 自動化企劃。
- 不改 CSS。
- 不改 class。
- 不移動區塊。
- 不改圖片。
- 不改導覽與連結。

### Phase 3：區塊順序調整提案

- 狀態：部分完成。
- 先提出新版區塊順序。
- 優先讓工作流自動化、GAS、Google Sheet、小工具案例前移。
- 商業影像作品改成加分背景，而不是唯一主軸。
- 實際移動區塊前需先確認方案。

### Phase 4：作品卡片文案改寫

- 狀態：待處理。
- 將作品卡片從「視覺成果展示」改成「問題、工具、流程、成果」導向。
- 優先改 GAS、提案流程自動化、短影音腳本自動化等案例。
- 保留商業影像背景，但降低接案作品集語氣。

### Phase 5：視覺與 CSS 小幅調整

- 狀態：部分完成。
- 只做小幅 CSS 調整。
- 優先改善資訊層級、閱讀性、卡片一致性。
- 不改整體 premium dark portfolio 風格。
- 不加入不必要動畫。
- 已完成設計基礎層整理，但尚未做 MVP4 視覺 baseline check。

### Phase 6：GitHub Pages 測試與發布

- 狀態：待處理。
- 本機檢查 `index.html`。
- 檢查桌機、平板、手機版排版。
- 確認所有相對路徑與連結正常。
- commit 後才 push。
- 不部署前不 push。

## 第一個低風險任務

第一個低風險修改任務已完成：只修改 Hero 文案，讓首頁第一眼更符合內容企劃與 AI 自動化工作流方向。

限制如下：

- 只修改 Hero 文案。
- 不改 CSS。
- 不改 class。
- 不移動區塊。
- 不改圖片。
- 不改導覽與連結。

後續低風險任務應繼續維持小步修改，每次只處理一個區塊或一組導覽文字。

## 測試方式

- 執行 `git diff` 檢查修改內容。
- 本機打開 `index.html` 檢查畫面。
- 檢查 Hero 是否符合新定位。
- 確認沒有 layout 跑版。
- commit 後才 push。

## 暫不處理

- 不動 `backup/`。
- 不重構整站。
- 不抽 JavaScript data。
- 不做分類篩選。
- 不改 `package.json`。
- 不部署前不 push。

## Done when

- `TASKS.md` 持續記錄最新改版狀態。
- 重啟前可從 `AGENTS.md`、`README.md`、`UI_UX_LESSONS.md` 與本檔理解目前停靠點。
- MVP4 視覺 baseline check 完成後，才進入下一輪 UI 改版或拆分 CSS。
- 沒有敏感資訊。
- 等使用者確認後再 commit。
