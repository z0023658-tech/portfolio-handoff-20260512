# portfolio_2026

## Codex restart note

Before restarting a broad UI/UX redesign, read `AGENTS.md` and `UI_UX_LESSONS.md`.

`UI_UX_LESSONS.md` records the paused AI-mockup-to-implementation attempt and the risks to avoid next time.

這個專案是目前正式使用中的個人作品集網站。

目前改版方向是從偏「影像導演作品集」轉向「內容企劃 x AI 工具研究 x 工作流自動化」的個人網站，呈現商業影像背景、AI 工具實驗、Google Apps Script / Google Sheet 自動化、GitHub Pages 小工具與 Codex 輔助開發成果。

## 專案定位

- 個人作品集與對外展示入口。
- 展示內容企劃、AI 工具研究與工作流自動化能力。
- 保留商業影像與廣告前製經驗作為背景。
- 適合放成熟、可公開、已遮蔽敏感資訊的案例。

## 目前狀態

- 靜態前端網站，使用 Vite 與原生 HTML / CSS / JavaScript，不使用 React 或其他前端框架。
- `index.html` 保留目前既有首頁；`redesign/index.html` 是逐段實作中的新版首頁入口。
- `src/` 只放新版共用樣式、漸進式 JavaScript 與最低必要內容 contract。
- 目前保留 `index.html`、`assets/`、`backup/` 與前端設定檔。
- `TASKS.md` 記錄目前改版方向與下一步。
- GitHub remote 尚未改名，仍需後續確認。

## 主要檔案

| 路徑 | 用途 |
| --- | --- |
| `index.html` | 主要網站頁面。 |
| `redesign/index.html` | 新版首頁的本機／build 驗證入口，尚未取代既有首頁。 |
| `src/styles.css` | 新版首頁共用樣式。 |
| `src/content-contract.js` | 檢查必要區塊、案例狀態與角色欄位，不負責隱藏內容。 |
| `assets/` | 網站圖片、影片與其他媒體素材。 |
| `backup/` | 舊版或備份資料，不要任意刪除。 |
| `TASKS.md` | 改版狀態、下一步與限制。 |
| `AGENTS.md` | Codex / AI agent 協作規則。 |
| `package.json` | 本機開發與 build 指令。 |

## 本機使用

```text
npm install
npm run dev
npm run build
```

啟動後可從 `http://127.0.0.1:3000/redesign/` 檢視新版首頁。新版內容以靜態 HTML 為主，即使 JavaScript 未執行，主要文字與連結仍保留。

## 更新原則

- 小步修改，不一次重構整站。
- 優先調整文案與資訊架構，再調整版型與互動。
- 不公開 API key、私人 URL、客戶敏感資料或未授權素材。
- 不修改 `backup/`，除非使用者明確要求。
- 不部署、不 push，除非使用者明確要求。

## 下一步

- GAS 流程案例已搬入新版，並完成桌機、平板與手機視覺驗證。
- 防詐概念提案與聲寶無線風扇已搬入其他精選案例，並清楚區分提案與已交付狀態。
- 工作方法與七步流程已完成，並保留無 JavaScript 的完整閱讀順序。
- Selected Visual Works 已完成，以商品、人物與公共議題作品呈現影像執行能力，並清楚標示個人負責範圍。
- About／Experience 已完成，以可確認的工作範圍呈現商業內容落地、跨角色協作與方法整理經驗，不使用未確認的精確年資。
- Contact 已完成，以職務、內容專案與流程改善三種方向引導聯絡，並保留直接信箱與 Instagram。
- 新版首頁主要 MVP 骨架已完成，並通過桌機、平板與手機的第一次完整視覺健檢。
- 下一步整理正式內容整合清單，依序確認旗艦素材、GAS 去識別化畫面、履歷任職區間與公開權限。
- 正式案例素材確認前維持清楚 placeholder，不以其他產品圖片代替。
- 補正式部署 URL 與 GitHub repo 狀態；未取得明確確認前不部署。
