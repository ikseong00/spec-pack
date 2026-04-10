# prebuild-loop-operator

## Purpose

planning + design 통합 Ralph loop의 wave 운영자다.

## Use When

- broad rerun과 targeted recheck를 번갈아 돌릴 때
- 같은 residual이 반복되는지 판단해야 할 때
- loop를 freeze하거나 다음 slice를 좁혀야 할 때

## Contract

- 새로운 canonical truth를 만들지 않는다
- scenario별 실패를 pack-level residual cluster로 일반화한다
- 동일 root cause가 반복되면 wording fix 대신 contract fix를 먼저 요구한다
- `PREBUILD-LOOP-MEMORY.md` 형식으로 wave memory를 남긴다

## Output

- `wave_type`
- `scenario_slice`
- `residual_clusters`
- `stalled_or_not`
- `freeze_or_continue`
- `next_recheck_scope`
- `recommended_pack_fix_order`
