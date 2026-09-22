# TASKS.md

## 專案目前狀態

- `main` 是目前正式網站的基準。
- root `index.html` 是正式首頁；三個正式 Case Detail 位於 `redesign/cases/`。
- 現階段是在既有網站上做品質收斂與優化，不是新一輪全站 redesign。

## Current Stop Point

- 首頁固定為 Hero → 精選作品 → 深入案例 → Contact。
- Selected Work 目前六類為：商業實拍廣告、品牌形象影片、人物訪談／內容影片、生成式 AI 視覺、Vibe Coding 工具開發、半自動化工具建構。
- 深入案例已完成並 commit：
  - 分鏡提案工作台：Client Proposal Overlay。
  - 半自動化工具建構：Meeting Brief 六頁 Overlay。
- TOA-112 實拍製作的首頁案例與 Video Overlay 已在 working tree 完成；目前只使用本機 draft preview。正式成片完成後，應以正式 Web MP4 覆蓋同一檔名，再一併 commit。

## 候選方向（尚未定案）

以下為內容候選，不是正式 roadmap 或待執行需求：

- Selected Work 可能整合「品牌形象影片」與「人物訪談／內容影片」為實拍／內容類別；若空出欄位，才評估「AI 角色／IP 建構」。該方向仍待角色一致性、風格與公開內容成熟。
- Generative AI Visual Gallery 可優先擴充真實 AI 影像生成商業案例，以及 ComfyUI 製作的 Vader × Snoopy 三支短版廣告；不預設每案建立獨立深入案例。
- AI 生成 × 實拍目前沒有足夠清楚的獨立案例；暫不製作，待有可清楚說明 AI 與實拍角色、使用原因及完成成果的專案後再評估。

## Git／交付提醒

- 目前本機 `main` 已知比 `origin/main` 領先 4 commits；`origin/main` 停在 `918e2ba`。
- 最新已 commit 的 checkpoint 為 `ab0f701 feat: add presentation automation case`。
- TOA-112 第三案例仍位於 working tree；draft MP4 尚未正式完成前，不得 commit、push 或 deploy。

## 作品呈現原則

- 不為填滿欄位硬做案例；深入案例重質不重量。
- 不重複展示相同 evidence，優先展示真實輸出與完成作品。
- 工具／技術只在能幫助理解成果時出現。
- AI 角色／IP 等研發中項目成熟後再上線。
- 未定案項目不得被視為正式執行需求。

## 歷史紀錄

2026-07 的 Phase 1～6、MVP checklist 與「新版首頁尚未取代正式首頁」描述，均屬已結束的開發階段，不再是目前工作狀態。相關 UI／UX 經驗保留於 `UI_UX_LESSONS.md`。
