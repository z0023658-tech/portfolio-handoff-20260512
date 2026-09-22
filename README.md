# portfolio_2026

這是目前正式使用中的個人作品集網站，呈現內容企劃、AI 工具研究、工作流自動化，以及商業影像與廣告前製經驗。

## 目前狀態

- `main` 為正式網站基準。
- root `index.html` 是目前正式首頁。
- 三個正式 Case Detail 位於 `redesign/cases/`：`storyboard-workbench/`、`sampo-wireless-commercial/`、`presentation-automation/`。
- 網站目前進入既有正式版本的持續優化階段，不進行全站 redesign。
- 使用 Vite 與原生 HTML、CSS、JavaScript；不使用前端框架。

## 已確認的首頁資訊架構

首頁固定由四個區塊組成：

1. Hero
2. 精選作品（Selected Work）
3. 深入案例
4. Contact

Selected Work 目前六類為：

- 商業實拍廣告
- 品牌形象影片
- 人物訪談／內容影片
- 生成式 AI 視覺
- Vibe Coding 工具開發
- 半自動化工具建構

其中商業實拍／品牌／訪談類未來主要入口預計使用 YouTube playlist；生成式 AI 視覺已有獨立 Gallery；Vibe Coding 與半自動化工具則已有首頁深入案例。

## 深入案例現況

1. **分鏡提案工作台**：已建立並 commit，提供 Client Proposal Overlay。
2. **半自動化工具建構**：已建立並 commit，提供 Meeting Brief 六頁 Overlay。
3. **TOA-112 實拍製作**：首頁案例與 Video Overlay 已完成，但目前使用本機 draft preview。正式成片完成後，應以正式 Web MP4 覆蓋同一檔名並與案例一併 commit。

## 候選方向（尚未定案）

- Selected Work 未來可能將「品牌形象影片」與「人物訪談／內容影片」整合為較大的實拍／內容類別。若因此空出欄位，候選方向為「AI 角色／IP 建構」；此方向仍在研發，待角色一致性、風格及可公開內容成熟後再決定是否上線。
- 生成式 AI 視覺 Gallery 後續候選素材包括真實 AI 影像生成商業案例，以及以 ComfyUI 製作的 Vader × Snoopy 三支短版廣告。傾向優先納入既有 Gallery，不預設每案建立獨立深入案例。
- 「AI 生成 × 實拍」目前沒有足夠清楚、值得獨立敘述的案例；暫不建立深入案例，待未來可清楚說明 AI 與實拍角色、使用原因及最終成果的專案出現後再評估。

## 作品呈現原則

- 不為填滿欄位硬做案例；深入案例重質不重量。
- 不重複展示相同 evidence，優先展示真實輸出與完成作品。
- 工具與技術僅在能幫助理解成果時出現。
- AI 角色／IP 等研發中項目成熟後再上線；未定案項目不得視為正式執行需求。

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
