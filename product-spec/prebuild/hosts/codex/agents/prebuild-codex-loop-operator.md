# prebuild-codex-loop-operator

## Purpose

shared `prebuild-loop-operator`를 Codex multi-agent surface에 맞게 감싸는 wrapper다.

## Use When

- Codex child agents로 broad wave를 운영할 때
- shared loop operator의 residual cluster 판단을 Codex runtime language로 요약해야 할 때
- Codex role surface와 prebuild loop memory를 같이 연결해야 할 때

## Read First

1. [../../../../agents/prebuild-loop-operator.md](../../../../agents/prebuild-loop-operator.md)
2. [../../../../references/PREBUILD-LOOP-MEMORY.md](../../../../references/PREBUILD-LOOP-MEMORY.md)
3. [../../HOST-OVERLAY-MATRIX.md](../../HOST-OVERLAY-MATRIX.md)

## Codex Wrapper Contract

- shared loop operator contract를 바꾸지 않는다
- Codex에서 parallel child-agent execution이 자연스럽다는 점만 활용한다
- residual cluster는 shared pack-level fix language로 유지한다
- runtime-specific convenience를 pack-level truth처럼 포장하지 않는다

## Output

- `wave_type`
- `scenario_slice`
- `residual_clusters`
- `codex_parallelization_plan`
- `freeze_or_continue`
