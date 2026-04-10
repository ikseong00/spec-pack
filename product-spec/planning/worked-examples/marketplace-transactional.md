# Worked Example: Marketplace Transactional

## Scenario

- service booking / matching marketplace
- verification, dispute, payout, manual review가 product shape를 바꾼다

## Starting Input Shape

- transactional loop는 보이지만 side priority, liquidity target, verification rule, dispute owner, payout owner는 아직 미정

## Chosen Route

- archetype: `marketplace`
- modifiers: `commerce-transactional`
- pace: `full`
- route:
  - `idea-discovery -> problem-validation -> user-research-analysis -> market-competitor-research -> positioning-strategy -> data-source-strategy -> stakeholder-rollout-strategy -> mvp-scope -> ux-use-case-strategy -> acquisition-retention-strategy -> monetization-strategy -> planning-synthesis`

## First Questions

- 수요와 공급 중 어느 쪽을 먼저 띄워야 하는가
- launch wedge는 geo, category, provider type 중 무엇인가
- verified provider의 기준은 무엇인가
- dispute, refund, no-show, payout hold는 누가 소유하는가
- manual review SLA와 escalation owner는 누구인가
- liquidity stop condition은 무엇인가

## Required Blocks Before Scope Freeze

- `trust_ops_minimum`
- `rollout_plan`
- `rollout_unit`
- `provider_verification_rule`
- `dispute_or_refund_owner`
- `payout_or_settlement_owner`
- `manual_review_path_or_sla`
- `liquidity_stop_condition`

## Artifact Coverage Checklist

- `PLANNING-RECORD.md`
  - `trust_ops_minimum`와 key owner가 있어야 한다
- `PROJECT-THESIS.md`
  - side priority와 launch wedge가 보여야 한다
- `RESEARCH.md`
  - competitor, alternative, liquidity proxy가 보여야 한다
- `PRD.md`
  - must-have에 verify, book, dispute/remedy, payout-state가 반영되어야 한다
- `UX-IA.md`
  - demand flow, supply flow, recovery flow가 분리되어야 한다
- `SCREEN-SPECS.md`
  - verification, dispute, payout hold-release, manual review, remedy state가 있어야 한다
- `BUSINESS-OPS.md`
  - dispute/refund/payout/review ownership과 SLA가 있어야 한다
- `EXECUTION-HANDOFF.md`
  - trust-ops slice가 phase/task/acceptance로 내려가야 한다

## Compact Mini-Bundle Proof

### Filled `trust_ops_minimum` Example

- launch wedge:
  - 서울 2개 구에서 시작하는 홈클리닝 booking marketplace
- `trust_ops_minimum`
  - abuse vector:
    - fake provider signup
    - fake booking
    - off-platform payment diversion
    - no-show
    - bad-faith refund
  - detection signal:
    - ID mismatch
    - same-device multi-account
    - repeated late cancellation
    - complaint rate 10% 초과
  - provider verification rule:
    - phone + ID + bank account + service-area proof 완료 전에는 booking unlock 금지
  - dispute or refund owner:
    - ops lead, 24시간 내 first response
  - payout or settlement owner:
    - finance ops, service complete 후 T+3 release
  - manual review path or SLA:
    - booking-risk queue 4 business hours 이내 triage
  - escalation owner:
    - marketplace GM
  - no-show or cancellation owner:
    - buyer ops with provider penalty policy
  - user-visible remedy:
    - full refund, instant rebook credit, provider suspension notice
  - reversal or refund path:
    - pending -> held -> released or reversed
  - rollout unit:
    - district x verified-provider cohort
  - rollout coupling rule:
    - verified 공급 fill rate 80% 미만이면 demand acquisition pause
  - liquidity stop condition:
    - median fulfillment 48시간 초과 또는 cancel rate 12% 초과면 새 구 launch 중지

### 8-Doc Projection Slice

- `PROJECT-THESIS.md`
  - primary wedge는 "서울 2개 구의 verified cleaner instant booking"
  - differentiation은 "verified providers + guaranteed remedy + visible availability"
- `PLANNING-RECORD.md`
  - `trust_ops_minimum`, owner, SLA, stop condition, unresolved question를 canonical로 저장
- `RESEARCH.md`
  - local cleaning alternative, competitor refund posture, complaint-heavy failure mode, district-level liquidity proxy 기록
- `PRD.md`
  - must-have:
    - provider verification state
    - booking confirmation
    - dispute/remedy flow
    - payout hold/release state
    - liquidity stop dashboard note
- `UX-IA.md`
  - demand flow, provider onboarding flow, dispute recovery flow, payout review flow 분리
- `SCREEN-SPECS.md`
  - screens/states:
    - provider verification pending/approved/rejected
    - booking pending/confirmed/risk-held
    - dispute open/in-review/resolved
    - payout held/released/reversed
- `BUSINESS-OPS.md`
  - owner/SLA:
    - dispute 24h first response
    - review queue 4 business hours
    - payout release T+3
    - district launch pause trigger
- `EXECUTION-HANDOFF.md`
  - phase/task:
    - phase 1 provider verification
    - phase 2 booking + hold state
    - phase 3 dispute/remedy
    - phase 4 payout release/reversal
  - acceptance:
    - unverified provider는 booking 불가
    - held payout는 dispute open 상태에서 release되지 않음
    - cancel-rate stop condition breach 시 new district enable 차단

### Traceability Table

| Decision | Canonical record | Downstream docs | Build implication |
| --- | --- | --- | --- |
| provider verification before booking | `trust_ops_minimum.provider_verification_rule` | `PROJECT-THESIS`, `PRD`, `UX-IA`, `SCREEN-SPECS`, `EXECUTION-HANDOFF` | verification pending 상태와 booking guard 필요 |
| dispute owner + visible remedy | `trust_ops_minimum.dispute_or_refund_owner`, `trust_ops_minimum.user_visible_remedy` | `PRD`, `UX-IA`, `SCREEN-SPECS`, `BUSINESS-OPS`, `EXECUTION-HANDOFF` | dispute state machine, owner SLA, refund/rebook action 필요 |
| payout hold / release / reversal | `trust_ops_minimum.payout_or_settlement_owner`, `trust_ops_minimum.reversal_or_refund_path` | `PRD`, `SCREEN-SPECS`, `BUSINESS-OPS`, `EXECUTION-HANDOFF` | held/released/reversed status와 payout release gate 필요 |
| liquidity stop condition | `trust_ops_minimum.liquidity_stop_condition`, `trust_ops_minimum.rollout_coupling_rule` | `RESEARCH`, `PRD`, `BUSINESS-OPS`, `EXECUTION-HANDOFF` | launch pause rule, rollout dashboard, acquisition coupling 필요 |

### Sample Canonical Snippets

- `PROJECT-THESIS.md`
  - `one_line_product: verified cleaner instant booking for Seoul micro-districts`
  - `primary_target: same-day cleaning need가 있는 busy renter`
  - `why_this_segment_first: search intent가 강하고, provider verification value가 immediately visible하다`
- `PLANNING-RECORD.md`
  - `docs.core_bundle_ready: yes`
  - `docs.execution_handoff_ready: yes`
  - `open_questions: []`
- `RESEARCH.md`
  - `market.category: local service booking marketplace`
  - `market.demand_proxy: district-level cleaning search volume + repeat booking intent`
  - `competitor.primary_set: local helper apps, agency booking, phone/SNS booking`
- `PRD.md`
  - `must_have: provider_verification, booking_confirmation, payout_hold_state, dispute_remedy, liquidity_stop_dashboard`
  - `proof_event: verified provider booking completion with no manual escalation`
- `UX-IA.md`
  - `flow_id: demand_book_cleaner`
  - `step_id: compare -> request -> confirm -> service_complete -> remedy_if_needed`
  - `recovery_flow: no_show_or_quality_issue -> dispute -> remedy`
- `SCREEN-SPECS.md`
  - `screen_id: booking_risk_hold`
  - `state: pending_verification | risk_held | provider_confirmed | released`
  - `acceptance_note: dispute_open이면 payout_release CTA는 hidden`
- `BUSINESS-OPS.md`
  - `manual_review_sla: 4 business hours`
  - `dispute_owner: ops lead`
  - `payout_release_policy: T+3 after clean completion unless dispute_open`
- `EXECUTION-HANDOFF.md`
  - `phase: trust-foundation`
  - `task: block booking until provider verification complete`
  - `acceptance: unverified provider booking attempt returns blocked state and review path`

## Expected Next Step

- unresolved trust ops면 `not_ready_because`
- trust ops와 rollout owner가 정리되면 `next_implementation_input`

## Main Watchouts

- trust-ops를 business note로만 남기면 안 된다
- liquidity stop condition이 없으면 launch readiness를 말할 수 없다
- one-page summary만으로 scope freeze 하면 실패한다
