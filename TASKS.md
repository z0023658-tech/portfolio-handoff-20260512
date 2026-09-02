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

## 2026-07-20 目前權威狀態

- Current phase：輕量 Vite、內容 contract 與新版首頁逐段實作。
- Last completed：新版首頁已完成第一次完整桌機／平板／手機視覺健檢；修正 About 照片過度裁切、工作方法標題斷行、手機聯絡箭頭，以及素材狀態文字過於工程化的問題。
- Current stop point：新版首頁主要 MVP 骨架已完整，並通過 1440px 桌機、820px 平板與 390px 手機的視覺及內容完整性檢查。
- Current blocker：無。
- Next small step：整理正式內容整合清單，先盤點商業旗艦素材、GAS 去識別化畫面、履歷任職區間與公開權限，不直接替換尚未確認內容。
- Requires human decision：目前不需 UI 決策；精確任職區間、正式履歷檔與素材公開權限留待正式內容整合前確認。
- Production / deploy：本輪未修改既有 `index.html`、未 commit、未 push、未 deploy；新版仍位於獨立 `redesign/` 入口。

### 本輪已鎖定的內容邊界

- 年資暫用「多年跨產業內容與影像實務」，不得先寫成「6–7 年」；精確年資待履歷區間確認。
- 「每年約 15–30 案」只描述現職／近年資料。
- 「3 人團隊」只描述現職團隊規模。
- 正式素材、公開權限、數據口徑與最終文案是正式內容整合前的 dependencies，不是 Phase 0–3 blocker。
- Work Navigator 不是必要閱讀門檻；預設與無 JavaScript 狀態都必須先呈現主要商業案例。
- Hero 與前兩個 viewport 不得全部使用家電畫面，需混合商業影像、提案／流程介面，以及公共議題、人物或非家電內容。
- CTA 層級固定為：Primary「查看精選案例」、Secondary「查看履歷／經歷」、Tertiary text link「聯絡」。
- Post-MVP 預留 Notes、Insights、Collaboration 與 Lab，但 MVP 不建立完整頁面。
- GAS 原始流程 GIF 含真實電話與 Email，不得直接放入新版；完成去識別化後才能替換目前的證據 placeholder。
- GAS 首頁文案不顯示尚未確認口徑的時間比較數字；完整案例確認起訖點、樣本與計算方式後再補。
- 警政署防詐案只標示為正式委託概念提案，不得描述成已製作、已發布或已有宣傳成效；公開素材確認前維持 placeholder。
- 七步流程必須保持完整靜態內容；未來若增加互動，只能補充文件或案例證據，不得成為必要閱讀門檻。
- Selected Visual Works 在 MVP 不加入篩選器或輪播；三組作品必須依序可讀，並清楚標示影像執行角色，不宣稱客戶提供的企劃或品牌策略為個人主導。
- About／Experience 在任職日期確認前不建立猜測式時間軸；不以「3 人團隊」或內訓次數當成主要成就，改說明協作責任與方法如何落地。
- Contact 不建立表單或資料收集功能；MVP 使用靜態說明、直接信箱與既有公開社群連結，Post-MVP 入口仍只保留在 Footer。
- 第一次跨尺寸視覺健檢已確認無水平跑版、缺圖或前端警告；後續只針對正式素材造成的裁切與文字變化再做局部複驗。

### 修正後的開發順序

1. Phase 0：baseline、branch、live／origin／local 差異保存。
2. Phase 1：灰階首頁資訊架構與 desktop／mobile responsive wireframe。
3. 原型核准後：才進行 Vite、依賴清理、內容 schema 與 routing 重構。
4. 正式案例與素材整合。
5. Responsive、效能與無障礙驗證。
6. QA、SEO 與部署準備；未取得明確確認不得 deploy。

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
