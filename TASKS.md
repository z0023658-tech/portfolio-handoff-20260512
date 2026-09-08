# TASKS.md

## 專案目前狀態

- `main` 是目前正式網站的基準。
- root `index.html` 是正式首頁；三個正式 Case Detail 位於 `redesign/cases/`。
- 現階段是在既有網站上做品質收斂與優化，不是新一輪全站 redesign。

## Current Objective

後續優化依同一條主線、依序通過下列 Gate：

1. Hierarchy — Completed
2. Naming & Copy — Completed
3. Case Detail — Completed
4. Artwork / Cover / Screenshot Art Direction — Next

## Current Stop Point

- Gate 1 Hierarchy 已完成 audit、spec、CSS implementation 與 responsive QA。
- Gate 2 Naming & Copy 已完成 visitor-facing naming、copy 與 responsive rendered QA 收斂。
- Gate 3 Case Detail 已完成：
  - Homepage Featured Case 移除 engineering metrics 與重複 evidence
  - Storyboard 收斂為 Hero → 製作方式 → Role／Tools
  - SAMPO 移除重複 CTA，保留精簡 Visual Direction
  - Presentation 收斂為 Input → Output → Editable PPTX／Role
  - internal QA／automated-check／benchmark report language 已移除
  - 1440／820／390 rendered QA completed
- 下一階段為 Gate 4 — Artwork / Cover / Screenshot Art Direction。
- 非 blocker：Mobile 390px navigation 目前可讀且無 overflow，但正式發布前 final polish 應再檢查 tap target 與極窄 viewport。

## 已確認的主要問題

- Case 與 Homepage screenshot 尚未完成共同 art direction 與最終裁切。
- Selected Work cover 缺乏共同 art direction，且有裁切與一致性問題。
- Internal／external link 的點擊行為辨識不足。
- Mobile navigation 的 tap target 與極窄 viewport 尚待 final polish。

## Next Step

進行 Gate 4 — Artwork / Cover / Screenshot Art Direction。

主要待處理：

- Homepage Internal／Client comparison crop
- Storyboard UI screenshot crop／composition／readability
- SAMPO Visual Direction frames／stills
- Presentation screenshot／contact-sheet presentation
- Selected Work cover consistency
- Hero fragments artwork／crop

## 歷史紀錄

2026-07 的 Phase 1～6、MVP checklist 與「新版首頁尚未取代正式首頁」描述，均屬已結束的開發階段，不再是目前工作狀態。相關 UI／UX 經驗保留於 `UI_UX_LESSONS.md`。
