# Worked Example: Platform Integration With Self-Serve To Enterprise

## Scenario

- API / webhook / sync 기반 SaaS
- 처음에는 self-serve로 시작하지만 enterprise admin, security, procurement, entitlements로 확장

## Starting Input Shape

- partial input
- product idea와 workflow는 보이지만 integration contract, support model, stage thresholds는 아직 불명확

## Chosen Route

- archetype: `platform-integration`
- modifiers: `self-serve-to-enterprise`
- pace: `full`
- route:
  - `idea-discovery -> problem-validation -> user-research-analysis -> market-competitor-research -> positioning-strategy -> mvp-scope -> ux-use-case-strategy -> data-source-strategy -> stakeholder-rollout-strategy -> acquisition-retention-strategy -> monetization-strategy -> planning-synthesis`

## First Questions

- source of truth와 required integration은 무엇인가
- first success path는 install, auth, configure, validate, remediate 중 무엇인가
- support owner or SLA는 무엇인가
- incident owner와 rollback boundary는 무엇인가
- stage role map은 어떻게 달라지는가
- package ladder와 entitlement unlock timing은 무엇인가
- security/procurement gate는 언제 시작되는가
- pilot success와 contract conversion 조건은 무엇인가

## Required Blocks Before Scope Freeze

- `platform_contract`
- `expansion_model`
- support owner or SLA
- incident owner
- rollback boundary
- package ladder
- stage role map
- entitlement unlock timing

## Expected Doc Density

- `BUSINESS-OPS`: support, incident, rollout, package ladder가 상세해야 한다
- `SCREEN-SPECS`: install/auth/configure/validate/recover/admin/security/procurement 상태 포함
- `EXECUTION-HANDOFF`: auth, delivery, reconciliation, entitlement delivery를 phase/task/acceptance로 projection

## Expected Next Step

- 조건부
  - contract/support/entitlement 정의가 충분하면 `next_implementation_input`
  - 아니면 `next_experiment` 또는 `not_ready_because`

## Main Watchouts

- `platform_contract`와 `expansion_model`을 따로 메모만 하고 projection하지 않으면 안 된다
- enterprise gate를 business note로만 두지 않고 screen/state/phase/task까지 내려야 한다
- buyer/admin/security/procurement 분리를 늦게 물으면 product shape가 뒤집힌다
