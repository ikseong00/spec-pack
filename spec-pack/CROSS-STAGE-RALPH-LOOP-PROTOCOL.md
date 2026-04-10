# Cross-Stage Ralph Loop Protocol

이 문서는 `planning -> design -> architecture`를 하나의 loop로 검증하는 운영 규약이다.

## Loop Shape

1. planning -> design broad rerun on 50 scenarios
2. architecture deep review on critical slices
3. final bundle gate의 모든 critical axis 판정
4. every wave에서 `feature -> flow -> screen -> handoff` coverage를 다시 확인
5. 문서 / template / contract patch
6. targeted recheck를 하더라도 모든 critical axis를 다시 판정
7. 다시 broad rerun

## Scenario Surface

- broad matrix:
  - `spec-pack/prebuild/references/PREBUILD-SCENARIO-MATRIX-50.md`
- architecture critical slice:
  - `spec-pack/architecture/references/ARCHITECTURE-SCENARIO-MATRIX-15.md`

## Required Roles

- runner
- evaluator set
- loop operator
- harness optimizer
- compliance auditor

## Strictness Rules

- broad matrix success만으로 완료 선언하지 않는다
- final bundle gate를 반드시 함께 본다
- residual이 줄지 않으면 wording fix를 멈추고 ownership / template / protocol을 고친다
- `BLOCK`이 하나라도 있으면 95% gate를 통과시킬 수 없다
- every wave는 `all-axis wave`다
- 특정 residual을 고치더라도, 다음 판정은 항상 모든 critical axis를 다시 본다
- targeted recheck는 scope를 줄이는 용도일 뿐, single-axis success를 release signal로 쓰지 않는다
- single feature가 닫혀 보여도, 조건/예외/역할 차이가 비어 있으면 success로 보지 않는다
- 서비스 명세 completeness는 implementation detail이 아니라 product completeness로 본다

## Stress Mode Rotation

stability read를 만들 때는 아래 stress mode를 회전한다.

- sparse operator input
- terminology collision
- hybrid modifier overlap
- offline and sync restore
- delegated visibility split
- enterprise gate
- public-lite compression
- platform recovery
- review or appeal queue
- mixed-domain regression sweep

## Exit Signal

- [CROSS-STAGE-BUNDLE-GATE.md](CROSS-STAGE-BUNDLE-GATE.md)의 `95% gate` 충족
- template gap이 아니라 authored fill gap만 남음
