# Cross-Stage Bundle Gate

이 문서는 `planning -> design -> architecture` 이후 최종 결과물을 어떻게 엄격하게 판정할지 정의한다.

목표:

- 결과물이 있어 보여도 handoff 불가능한 상태를 통과시키지 않는다
- broad scenario success와 final artifact rigor를 같이 본다
- `95% usable`이라는 말을 정량 gate로 바꾼다
- 개발자가 구현 방향을 판단할 수 있어야 하지만, 구현 상세를 강제하지는 않아야 한다
- 서비스 기능, 조건, 상태, 예외, 역할 차이가 문서에 실제로 닫혀 있는지 본다

## Final Bundle Scope

최종 bundle은 최소 아래 문서를 포함한다.

- `PROJECT-THESIS.md`
- `PLANNING-RECORD.md`
- `RESEARCH.md`
- `PRD.md`
- `UX-IA.md`
- `SCREEN-SPECS.md`
- `BUSINESS-OPS.md`
- `EXECUTION-HANDOFF.md`
- `DESIGN.md`
- `ARCHITECTURE.md`
- `STATE-PERMISSIONS.md`
- `DATA-MODEL.md`
- `INTEGRATIONS.md`
- `NON-FUNCTIONAL.md`

## Critical Axes

각 축은 `PASS | NEAR-PASS | BLOCK`으로 판정한다.

1. `feature_scope_completeness`
2. `functional_condition_clarity`
3. `owner_source_policy_completeness`
4. `shared_doc_coherence`
5. `flow_state_exception_completeness`
6. `screen_and_state_readiness`
7. `role_visibility_completeness`
8. `design_signal_clarity`
9. `architecture_boundary_clarity`
10. `state_permissions_rigor`
11. `data_model_and_source_of_truth_rigor`
12. `integration_async_boundary_rigor`
13. `non_functional_trust_audit_rigor`
14. `terminology_consistency`
15. `update_usability`
16. `developer_handoff_boundary_clarity`

### Axis Meaning

- `feature_scope_completeness`
  - must-have 기능이 누락 없이 정의되고 traceability가 있다
- `functional_condition_clarity`
  - 각 기능의 허용 조건, 제한 조건, 금지 조건, 정책 조건이 explicit하다
- `flow_state_exception_completeness`
  - happy path뿐 아니라 실패, 대기, 복귀, 재시도, 만료, 예외가 닫혀 있다
- `role_visibility_completeness`
  - actor별 가능한 액션과 보이는 상태 차이가 명확하다
- `terminology_consistency`
  - 같은 개념을 문서마다 다른 말로 부르지 않고 의미 충돌이 없다

## Automatic BLOCK Conditions

아래 중 하나라도 있으면 scenario는 자동 `BLOCK`이다.

- must-have 기능이 빠져 있거나, 핵심 기능이 flow / screen / handoff 어디에도 매핑되지 않는다
- must-have 기능에 actor, trigger, desired outcome, completion signal이 없다
- 핵심 기능의 허용/차단/예외 조건이 비어서 개발자가 제품 질문을 다시 해야 한다
- approval/source/policy/exception owner가 비어 있다
- required visible state semantics가 없다
- 핵심 액션에 대해 blocked / denied / pending / recovery 중 relevant state가 전혀 없다
- 역할 차이가 있는데 누가 무엇을 볼 수 있고 할 수 있는지 explicit하지 않다
- shared doc이 upstream owner truth를 invent한다
- architecture에서 state transition authority 또는 source of truth가 비어 있다
- integration async boundary가 없는데 callback / sync / queue가 핵심이다
- non-functional에서 audit / recovery / trust requirement가 빠졌다
- product/behavior decision이 비어서 개발자가 다시 제품 질문을 해야 한다
- 문서 간 용어가 충돌해서 같은 상태/기능을 다른 의미로 읽게 만든다
- 문서가 API, component, module 설계를 complete criteria로 요구한다

## 95 Percent Gate

아래를 모두 충족해야 `95% gate passed`로 본다.

- broad 50-scenario matrix에서 `PASS + NEAR-PASS`가 `95%` 이상
- broad 50-scenario matrix에서 `BLOCK = 0`
- critical hard-case slice에서 `PASS >= 95%`
- `feature_scope_completeness`, `functional_condition_clarity`, `owner_source_policy_completeness`, `shared_doc_coherence`, `flow_state_exception_completeness`, `architecture_boundary_clarity`, `terminology_consistency`, `developer_handoff_boundary_clarity`는 `PASS`만 허용한다
- residual이 template/contract gap이 아니라 authored fill gap으로만 남는다

## Residual Interpretation

- `template gap`
  - pack 수정이 필요하다
- `authored fill gap`
  - 실제 프로젝트 작성자가 값을 채워야 한다

95% gate는 `template gap`이 거의 사라졌을 때만 통과한다.

## Stability Read

첫 pass만으로 shipping confidence를 과대평가하지 않는다.

- all-pass가 나온 뒤에도 stress mode rotation으로 추가 wave를 돈다
- 연속 wave에서 axis regression이 없을수록 shipping confidence가 올라간다
- 현재 pack read는 broad and critical loop surface에서 누적 안정성을 함께 본다
