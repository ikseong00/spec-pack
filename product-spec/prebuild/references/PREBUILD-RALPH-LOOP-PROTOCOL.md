# Prebuild Ralph Loop Protocol

이 문서는 `planning + design` 통합 bundle을 실제 사용 프록시 방식으로 검증하는 Ralph loop 운영 규약이다.

핵심 원칙:

- planning과 design을 따로 PASS시켜도, handoff에서 다시 깨지면 통합 PASS가 아니다
- runner는 아이디어에서 출발해 planning과 design 사이의 재질문 비용까지 본다
- evaluator는 자기 축 하나만 평가한다
- patch는 개별 시나리오 해킹이 아니라 shared contract 수준으로 일반화한다
- 모든 wave는 full-axis 판정을 남긴다

## 1. Loop Goal

목표는 아래를 검증하는 것이다.

- 사용자가 planning에서 design으로 자연스럽게 넘어갈 수 있는가
- design이 planning 질문을 쓸데없이 다시 묻지 않는가
- `UX-IA.md`, `SCREEN-SPECS.md`가 shared doc으로 안정적으로 작동하는가
- 9-document prebuild bundle이 architecture 전 단계 handoff로 usable한가
- protocol을 실제로 지키는지, 즉 locked field re-ask와 ownership drift가 줄어드는가
- 기능 누락 없이, 조건/상태/예외/역할 차이가 planning -> design bundle에 실제로 닫히는가

## 2. Runner Role

runner는 실제 founder/operator 프록시다.

해야 하는 일:

- 불완전한 제품 아이디어에서 시작
- planning route를 고르고 필요한 답을 채운다고 가정
- design 진입 시 handoff packet이 충분한지 본다
- design이 upstream fact를 다시 묻는지, 아니면 필요한 표현 질문만 묻는지 기록한다
- 최종적으로 9-document bundle이 usable한지 본다

runner는 점수화하지 않는다.

## 3. Extra Loop Roles

- `loop_operator`
  - wave 종류를 정한다
  - stall을 판정한다
  - next recheck scope를 줄인다
- `harness_optimizer`
  - over-weight read surface를 줄인다
  - batch size와 evaluator focus를 조정한다
- `compliance_auditor`
  - protocol actual adherence를 본다
  - prompt가 supportive하지 않아도 contract가 유지되는지 본다

## 4. Evaluator Axes

각 evaluator는 아래 하나만 본다.

1. `operator_usability`
2. `planning_design_handoff`
3. `question_overlap_control`
4. `feature_scope_completeness`
5. `behavior_and_condition_clarity`
6. `flow_state_exception_completeness`
7. `role_visibility_completeness`
8. `document_coherence`
9. `screen_and_state_readiness`
10. `terminology_consistency`
11. `update_usability`
12. `weight_control`
13. `compliance_and_prompt_independence`

## 5. Loop Pipeline

1. scenario batch 선정
2. runner가 통합 quick route card를 만든다
3. runner가 planning route와 design entry point를 시뮬레이션한다
4. runner가 9-document bundle을 가정하고 friction을 기록한다
5. evaluator가 축별로 판정한다
6. evaluator는 매 wave마다 `feature -> flow -> screen -> handoff` coverage를 함께 확인한다
7. compliance auditor가 locked-field re-ask와 ownership drift를 따로 본다
8. loop operator가 공통 실패를 residual cluster로 일반화한다
9. `references / templates / readmes / contracts`를 패치한다
10. harness optimizer가 broad vs targeted 다음 wave를 정리한다
11. wave memory snapshot을 남긴다
12. 실패한 축과 시나리오만 targeted recheck 한다
13. targeted recheck여도 13개 축을 전부 다시 판정한다
14. 결과를 log에 기록한다

## 6. Runner Minimum Output

- `scenario_batch`
- `route_patterns`
- `planning_to_design_transition_summary`
- `question_reask_points`
- `locked_fact_reask_points`
- `shared_doc_conflicts`
- `bundle_readiness_summary`
- `feature_or_rule_gaps`
- `state_or_exception_gaps`
- `role_or_visibility_gaps`
- `loop_memory_snapshot`
- `recommended_pack_fix`

각 시나리오별 최소 필드:

- `scenario_id`
- `verdict`: PASS | NEAR-PASS | BLOCK
- `entry_point`
- `planning_route`
- `design_entry`
- `shared_doc_risk`
- `what_reasked_unnecessarily`
- `which_locked_fields_were_reasked`
- `what_was_missing_for_design`
- `missing_feature_or_rule`
- `missing_state_or_exception`
- `missing_role_or_visibility_detail`
- `minimum_fix`

## 7. Evaluator Output Contract

- `axis`
- `verdict`: PASS | NEAR-PASS | BLOCK
- `score`: 0-3
- `evidence`
- `why_it_failed_or_nearly_failed`
- `minimum_pack_fix`

## 8. Stall / Recovery Control

- 같은 residual cluster가 2회 연속 반복되면 stall로 본다
- stall이면 broad rerun을 멈추고 targeted recheck로 내린다
- targeted에서도 줄지 않으면 wording fix를 멈추고 ownership / protocol / template를 먼저 고친다
- wave 사이 memory는 [PREBUILD-LOOP-MEMORY.md](PREBUILD-LOOP-MEMORY.md)를 따른다
- targeted recheck는 primary fix scope를 좁히는 것이지 evaluator scope를 줄이는 것이 아니다

## 8.5 Stress Mode Rotation

연속 pass를 볼 때는 아래 stress mode를 돌려가며 본다.

- sparse operator input
- terminology collision
- hybrid modifier overlap
- public-website-lite compression
- offline or sync restore stress
- delegated visibility split
- enterprise gate
- platform integration recovery
- review or appeal queue
- update-after-change scenario

stress mode가 달라도 every wave는 all-axis wave다.

## 9. Exit Signal

loop는 아래에 가까워질 때 종료를 검토한다.

- planning -> design transition에서 repeated discovery가 거의 없다
- 기능 누락, 조건 누락, 예외 누락, 역할 차이 누락이 rare issue 수준이다
- `UX-IA.md`, `SCREEN-SPECS.md` ownership conflict가 드물다
- 평균 점수가 `2.3+` 이상으로 안정적이다
- update path가 planning-only, design-only, cross-pack 변경을 구분해 처리한다
- architecture 직전 handoff에 필요한 핵심 질문이 반복되지 않는다
- compliance auditor가 locked-field re-ask를 rare issue로만 본다
