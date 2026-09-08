# portfolio_2026

這是目前正式使用中的個人作品集網站，呈現內容企劃、AI 工具研究、工作流自動化，以及商業影像與廣告前製經驗。

## 目前狀態

- `main` 為正式網站基準。
- root `index.html` 是目前正式首頁。
- 三個正式 Case Detail 位於 `redesign/cases/`：`storyboard-workbench/`、`sampo-wireless-commercial/`、`presentation-automation/`。
- 網站目前進入既有正式版本的持續優化階段，不進行全站 redesign。
- 使用 Vite 與原生 HTML、CSS、JavaScript；不使用前端框架。

## 主要檔案

| 路徑 | 用途 |
| --- | --- |
| `index.html` | 正式首頁。 |
| `redesign/cases/` | 三個正式 Case Detail 的路徑。 |
| `src/styles.css` | 正式首頁與共用頁面的樣式。 |
| `src/main.js` | 首頁的內容檢查與既有游標互動。 |
| `src/content-contract.js` | 開發期首頁內容 contract 驗證；不負責產生或隱藏內容。 |
| `assets/` | 網站圖片、影片與其他媒體素材。 |
| `backup/` | 歷史備份；不要任意刪除或修改。 |

## 本機使用

```text
npm install
npm run dev
npm run build
```

## 協作入口

後續 UI／UX 任務開始前，依任務範圍閱讀下列文件：

- `AGENTS.md`：工作規則與不可跨越的專案邊界。
- `TASKS.md`：目前狀態、主要問題與唯一的下一步。
- `UI_UX_LESSONS.md`：已驗證的 UI／UX 教訓。

## 更新原則

- 小步修改並驗證 desktop、tablet、mobile。
- 不公開 API key、私人 URL、客戶敏感資料或未授權素材。
- 不修改 `backup/`，除非使用者明確要求。
- 不 commit、push 或部署，除非使用者明確要求。
