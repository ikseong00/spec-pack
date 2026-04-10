# Benchmark Harness

이 문서는 planning pack의 body quality와 goal achievement를 반복 검증하기 위한 benchmark harness다.

## 1. Fixture Format

각 benchmark fixture는 아래를 가진다.

- `scenario_name`
- `input_shape`
- `target_work_shape`
- `target_surface_model`
- `target_loop_model`
- `target_archetype`
- `target_modifier`
- `expected_route`
- `required_blocks`
- `expected_doc_density`
- `expected_next_step`
- `known_risks`

## 2. Scenario Set

최소 공통 세트:

- `public-website-lite`
- `consumer-saas-weak-evidence`
- `marketplace + commerce-transactional`
- `content-community + media-membership`
- `b2b-saas + self-serve-to-enterprise`
- `platform-integration`
- `mobile privacy-sensitive habit app`
- `regulated workflow`
- `AI review queue`
- `hybrid service operations`

## 3. Body Quality Axes

skills / agents 본문은 아래 축으로 점수화한다.

- `specificity`
  - 얼마나 concrete한 operating rule이 있는가
- `operator_enforceability`
  - 사람이 그대로 따라도 같은 결과가 나오는가
- `harness_strength`
  - revision / audit / escalation / completion marker가 있는가
- `anti_fabrication_strength`
  - evidence 약할 때 무엇을 하지 말아야 하는지 명확한가
- `goal_achievement`
  - 이 본문이 실제로 해당 단계 목표를 달성하게 만드는가

점수:

- `0`: 없음
- `1`: 암시만 있음
- `2`: usable하지만 약함
- `3`: strong and repeatable

## 4. Loop Rule

benchmark loop는 아래를 따른다.

1. scenario runner가 현재 body로 실행 가정
2. evaluator가 axes를 점수화
3. common failure를 종합
4. body patch
5. re-run

stop rule:

- critical axis가 `0` 또는 `1`이면 계속
- `specificity`, `operator_enforceability`, `goal_achievement`가 모두 `3`에 가까워질 때까지 반복

## 5. Regression Notes

loop마다 남긴다.

- 무엇이 좋아졌는가
- 어떤 축이 아직 `2/3`인가
- 무엇이 반복적으로 약한가
- 다음 patch가 어느 docs를 건드리는가
