# TASKS.md

## 專案目前狀態

- `main` 是目前正式網站的基準。
- root `index.html` 是正式首頁；三個正式 Case Detail 位於 `redesign/cases/`。
- 現階段是在既有網站上做品質收斂與優化，不是新一輪全站 redesign。

## Current Objective

後續優化依同一條主線、依序通過下列 Gate：

1. Hierarchy — Completed
2. Naming & Copy — Completed
3. Case Detail — Next
4. Artwork / Cover

## Current Stop Point

- Gate 1 Hierarchy 已完成 audit、spec、CSS implementation 與 responsive QA。
- Gate 2 Naming & Copy 已完成：
  - Hero 與主要 visitor-facing copy 收斂
  - taxonomy 中文化
  - 六個作品名稱外部化
  - Global Section naming 統一
  - Featured Cases、About、Contact copy 收斂
  - Case Detail visitor-facing naming 同步
  - responsive rendered QA
- 下一階段為 Gate 3 — Case Detail 去報告化。
- 非 blocker：Mobile 390px navigation 目前可讀且無 overflow，但正式發布前 final polish 應再檢查 tap target 與極窄 viewport。

## 已確認的主要問題

- 部分 Case Detail 偏工程報告／驗證報告。
- Selected Work cover 缺乏共同 art direction，且有裁切問題。
- Internal／external link 的點擊行為辨識不足。
- Mobile navigation 的 tap target 與極窄 viewport 尚待 final polish。

## Next Step

進行 Gate 3 — Case Detail 去報告化。

本階段聚焦三個 Case Detail 的內容與結構收斂；不處理 artwork 或 cover。

## 歷史紀錄

2026-07 的 Phase 1～6、MVP checklist 與「新版首頁尚未取代正式首頁」描述，均屬已結束的開發階段，不再是目前工作狀態。相關 UI／UX 經驗保留於 `UI_UX_LESSONS.md`。
