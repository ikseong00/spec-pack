# Worked Example: B2B Pilot To Paid

## Scenario

- buyer/admin/user split이 있는 B2B SaaS
- pilot에서 paid contract로 넘어가는 motion이 core

## Starting Input Shape

- core workflow는 보이지만 buyer split, proof-to-buy, pilot success, rollout owner, entitlement timing은 아직 미정

## Chosen Route

- archetype: `b2b-saas`
- modifiers: `self-serve-to-enterprise`
- pace: `full`
- route:
  - `idea-discovery -> user-research-analysis -> problem-validation -> market-competitor-research -> positioning-strategy -> mvp-scope -> ux-use-case-strategy -> stakeholder-rollout-strategy -> acquisition-retention-strategy -> monetization-strategy -> planning-synthesis`

## First Questions

- buyer, champion, end user, admin, security, procurement는 각각 누구인가
- proof to buy는 무엇인가
- pilot success criteria는 무엇인가
- support owner, SLA, rollout owner는 누구인가
- package ladder와 entitlement unlock timing은 무엇인가

## Required Blocks Before Scope Freeze

- `expansion_model`
- stage role map
- pilot success
- package ladder
- entitlement unlock timing
- proof to buy

## Expected Doc Density

- `BUSINESS-OPS`는 buyer / payer / stage role map / pilot conversion rule을 canonical로 보여야 한다
- `SCREEN-SPECS`는 admin, security review, procurement handoff, entitlement locked/unlocked 상태를 드러내야 한다
- `EXECUTION-HANDOFF`는 proof-to-buy, pilot success, rollout owner를 phase/task/acceptance로 내려야 한다

## Compact Mini-Bundle Proof

### Representative 8-Doc Snapshot

- `PROJECT-THESIS.md`
  - `one_line_product: ops-heavy team workflow를 pilot에서 enterprise rollout까지 끌고 가는 B2B workspace`
  - `primary_target: 20-150 seat operations team with admin + security review`
  - `positioning_difference: setup는 self-serve처럼 빠르지만, paid conversion은 proof-to-buy + admin controls로 닫는다`
- `PLANNING-RECORD.md`
  - `expansion_model.stage_role_map: self_serve -> pilot -> contract -> enterprise`
  - `expansion_model.entitlement_unlock_timing: audit_export and SSO are contract_pending 이후`
  - `next_implementation_input_ready: only if proof_to_buy and pilot_success are resolved`
- `RESEARCH.md`
  - `competitor.primary_set: seat-based collaboration SaaS, workflow ops suites`
  - `market.demand_proxy: pilot-heavy internal tooling spend, security-review gated expansion`
  - `market.why_now_signal: manual export/audit workflow burden + policy review pressure`
- `PRD.md`
  - `must_have: role_split, pilot_health_view, admin_controls, entitlement_gate, security_review_state`
  - `defer: custom procurement workflow automation`
  - `proof_event: pilot team reaches success threshold and buyer approves paid conversion`
- `UX-IA.md`
  - `flow_id: admin_start_pilot`
  - `step_id: invite_team -> connect_data -> validate_usage -> request_security_review -> unlock_enterprise`
  - `recovery_flow: failed_security_review -> limited_mode -> retry`

- `SCREEN-SPECS.md`
  - `screen_id: workspace_upgrade_gate`
  - `state: self_serve | pilot_active | security_review | contract_pending | enterprise_unlocked`
  - `acceptance_note: enterprise entitlement는 contract_pending 이전에 노출되지 않음`
- `EXECUTION-HANDOFF.md`
  - `phase: pilot-to-paid`
  - `task: enforce enterprise entitlement unlock only after pilot success + signed order form`
  - `acceptance: pilot success 미충족 또는 계약 미서명 상태에서는 admin console에 enterprise-only control이 보이지 않음`
- `BUSINESS-OPS.md`
  - `buyer_payer_split: champion requests, buyer approves, finance is payer`
  - `pilot_success: weekly active seats >= 15 and export workflow completion >= 80% for 2 weeks`
  - `sales_handoff_trigger: security questionnaire requested or seat count > 20`

### Traceability Table

| Decision | Canonical record | Downstream docs | Build implication |
| --- | --- | --- | --- |
| proof to buy required before paid conversion | `expansion_model.proof_to_buy` | `PROJECT-THESIS`, `PRD`, `BUSINESS-OPS`, `EXECUTION-HANDOFF` | paid upgrade CTA와 sales handoff trigger를 분리해야 한다 |
| pilot success gates enterprise unlock | `expansion_model.pilot_success` | `PRD`, `SCREEN-SPECS`, `BUSINESS-OPS`, `EXECUTION-HANDOFF` | unlocked entitlement state는 threshold 충족 전 노출되면 안 된다 |
| entitlement unlock timing after contract | `expansion_model.entitlement_unlock_timing` | `PLANNING-RECORD`, `SCREEN-SPECS`, `EXECUTION-HANDOFF` | admin console state machine과 acceptance 기준 필요 |
| buyer / payer / admin split | `expansion_model.stage_role_map` | `PROJECT-THESIS`, `UX-IA`, `BUSINESS-OPS`, `EXECUTION-HANDOFF` | one-user assumption 금지, role별 phase/task 필요 |

## Expected Next Step

- buyer split과 pilot success가 약하면 `next_experiment`
- stage threshold, rollout owner, buyer/payer split, proof-to-buy, pilot success, entitlement unlock timing이 `SCREEN-SPECS`와 `EXECUTION-HANDOFF`에 projection되면 `next_implementation_input`

## Main Watchouts

- pricing을 proof-to-buy보다 먼저 확정하지 않는다
- enterprise/admin/procurement 상태를 `SCREEN-SPECS`와 `EXECUTION-HANDOFF`에 projection하지 않으면 incomplete다
- role split이 generic `user`로 무너지면 다시 user-clarity로 돌아간다
