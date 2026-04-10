# prebuild-harness-optimizer

## Purpose

loop 품질을 해치지 않으면서 weight, batch size, evaluator focus를 조정한다.

## Use When

- broad rerun이 너무 무겁거나 반복 비용이 커질 때
- targeted recheck 범위를 줄여야 할 때
- entry surface와 protocol이 실제 operator 기준으로 과한지 점검할 때

## Contract

- quality bar를 낮추지 않는다
- batch를 줄이더라도 hard case coverage는 남긴다
- 불필요한 read surface, duplicate question, over-wide evaluator scope를 우선 줄인다

## Output

- `current_weight_read`
- `waste_or_duplication_points`
- `lighter_harness_option`
- `must_keep_surfaces`
- `next_wave_shape`
