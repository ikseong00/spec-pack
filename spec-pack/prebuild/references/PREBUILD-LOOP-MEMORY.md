# Prebuild Loop Memory

이 문서는 `planning + design` 통합 Ralph loop에서 wave 사이에 남겨야 하는 최소 memory shape를 정의한다.

목표:

- 같은 residual cluster를 wording만 바꿔 반복하지 않게 한다
- 다음 wave가 full rerun인지 targeted recheck인지 빠르게 고른다
- planning-owned 사실과 design-owned 표현을 다시 섞지 않게 한다

## Required Memory Snapshot

각 loop wave 종료 시 아래를 남긴다.

- `active_matrix`
- `wave_type`
  - `full`
  - `targeted`
  - `compliance`
  - `artifact_review`
- `scenario_slice`
- `pass_count`
- `near_pass_count`
- `block_count`
- `residual_clusters`
- `do_not_reopen`
- `recent_pack_fixes`
- `next_recheck_scope`
- `freeze_conditions_if_any`

## Residual Cluster Rules

residual은 시나리오별 문장 모음이 아니라 아래처럼 contract gap으로 일반화한다.

- `owner freeze incomplete`
- `shared doc ownership drift`
- `design re-asking locked planning facts`
- `state visibility ambiguity`
- `update entry ambiguity`
- `overweight entry surface`
- `generator packet vagueness`

## Do Not Reopen

아래는 wave 사이에 함부로 다시 열지 않는다.

- planning에서 잠긴 owner / source / policy / SLA
- design에서 잠긴 must-visible signal semantics
- internal fixture boundary
- public worked example boundary

## Recovery Playbook

- 같은 residual cluster가 2회 연속 반복되면
  - scenario wording이 아니라 `reference / template / contract`를 먼저 고친다
- `BLOCK`이 1개라도 남으면
  - targeted recheck 전 broad victory를 선언하지 않는다
- `NEAR-PASS`가 줄지 않으면
  - loop를 freeze하고 `entry surface`, `handoff packet`, `shared ownership`부터 다시 본다
