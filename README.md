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

- 靜態前端網站，使用 Vite / React 類型專案結構。
- 目前保留 `index.html`、`assets/`、`backup/` 與前端設定檔。
- `TASKS.md` 記錄目前改版方向與下一步。
- GitHub remote 尚未改名，仍需後續確認。

## 主要檔案

| 路徑 | 用途 |
| --- | --- |
| `index.html` | 主要網站頁面。 |
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

## 更新原則

- 小步修改，不一次重構整站。
- 優先調整文案與資訊架構，再調整版型與互動。
- 不公開 API key、私人 URL、客戶敏感資料或未授權素材。
- 不修改 `backup/`，除非使用者明確要求。
- 不部署、不 push，除非使用者明確要求。

## 下一步

- 同步導覽、Hero quick links 與區塊順序。
- 將作品卡片逐步改成「問題 / 工具 / 方法 / 成果」格式。
- 檢查桌機與手機版顯示。
- 補正式部署 URL 與 GitHub repo 狀態。
