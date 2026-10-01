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
  - TOA-112 實拍製作：首頁案例與 Video Overlay 程式整合完成；1080p Web MP4 已最佳化至約 19.86 MiB，Desktop／Mobile／Regression／Console 最小 QA 通過，已建立本機 checkpoint。
- 商業實拍／品牌／訪談類已接 YouTube playlist；生成式 AI Gallery 已包含 SAMPO 視覺探索、分鏡流程與成品截圖，以及 Vinda × Snoopy 三支短版廣告與影片 Overlay。
- 23 個研究／Prototype／QA／候選素材檔案已移出 production repo，數量、大小與 SHA-256 驗證通過；不再是 working tree 待整理項目。repo 外歸檔僅供歷史參考，不是正式網站 dependency。

## 候選方向（尚未定案）

以下為內容候選，不是正式 roadmap 或待執行需求：

- Selected Work 可能整合「品牌形象影片」與「人物訪談／內容影片」為實拍／內容類別；若空出欄位，才評估「AI 角色／IP 建構」。該方向仍待角色一致性、風格與公開內容成熟。
- Generative AI Visual Gallery 後續可擴充其他真實 AI 影像生成商業案例；不預設每案建立獨立深入案例。
- AI 生成 × 實拍目前沒有足夠清楚的獨立案例；暫不製作，待有可清楚說明 AI 與實拍角色、使用原因及完成成果的專案後再評估。

## Git／交付提醒

- 最新完成的作品功能 checkpoint：`fe816713e15f755d0083caa3d6bf13144ea5dd0e feat: add TOA-112 portfolio case`。
- 本次 cleanup／文件同步開始時 working tree 為 clean；當時本機 `main` 相對本機 `origin/main` 紀錄領先 9 commits、落後 0，`origin/main` 停在 `918e2ba`。此為本輪開始時快照，不是固定的後續提交數。
- 本機最小 QA 已通過；production／deployed site QA 尚未在本輪驗證。push 與 deploy 必須分別取得授權，不因本機 checkpoint 完成而自動執行。

## 下一步（待決定）

- 決定是否 push 目前本機 commits；若要更新正式網站，另行授權 deploy，並安排 deployed site QA。後續作品內容更新依指定 scope 另開任務；TOA-112 cleanup 已完成，不再列為 active task。

## 作品呈現原則

- 不為填滿欄位硬做案例；深入案例重質不重量。
- 不重複展示相同 evidence，優先展示真實輸出與完成作品。
- 工具／技術只在能幫助理解成果時出現。
- AI 角色／IP 等研發中項目成熟後再上線。
- 未定案項目不得被視為正式執行需求。

## 歷史紀錄

2026-07 的 Phase 1～6、MVP checklist 與「新版首頁尚未取代正式首頁」描述，均屬已結束的開發階段，不再是目前工作狀態。相關 UI／UX 經驗保留於 `UI_UX_LESSONS.md`。
