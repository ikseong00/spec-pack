---
name: monetization-strategy
description: Capture a lightweight sustainability note by default, and go deep on pricing or monetization only when it changes product shape.
---

# Monetization Strategy

## Purpose

서비스가 성공한 뒤 sustain 가능한 방향을 가볍게 확인하고, monetization이 product shape를 바꾸는 경우에만 깊게 설계한다.

## Use When

- 누가 돈을 낼지 불분명하다
- 무료 제품으로 갈지 유료 제품으로 갈지 애매하다
- 광고, 구독, B2B, 제휴 중 선택이 필요하다
- paywall, pricing, take-rate, package ladder가 scope를 바꾸고 있다

fast mode:

- one sustainability note
- one optional revenue hypothesis
- one revisit trigger
- one next validation question

## Inputs

- product thesis
- target user
- growth model
- market context

## Baseline Question Pack

- open: `누가 언제 어떤 순간에 돈을 낼 가능성이 가장 큽니까?`
- recent example: `최근 비슷한 사용자나 고객이 실제로 돈을 내거나 예산을 쓴 사례가 있습니까?`
- workaround: `이 제품이 없어도 지금은 어떤 대안에 돈이나 시간을 쓰고 있습니까?`
- evidence: `이 수익화 방향이 실제로 sustain 가능하다고 볼 최소 근거는 무엇입니까?`
- disconfirming: `어떤 관찰이 나오면 이 monetization model을 버리거나 나중으로 미뤄야 합니까?`
- stop: `one sustainability note와 one revisit trigger가 보이면 멈추고, shape-changing이면 revenue boundary까지 본다`

## Operating Boundary

이 skill은 [SKILL-AGENT-CONTRACTS.md](../../references/SKILL-AGENT-CONTRACTS.md)와 [PLANNING-STATE-CONTRACT.md](../../references/PLANNING-STATE-CONTRACT.md)를 따른다.

- unanswered required slot을 추측으로 채우지 않는다
- prerequisite가 없으면 `NEEDS_CONTEXT`와 exact missing slot을 적는다
- answered / suppressed question ID를 다시 열지 않는다
- 다른 skill이 canonical owner인 결정을 대신 확정하지 않는다

## Modes

- 기본값은 `standard` 또는 해당 skill의 normal path다
- `LIGHT` / `FAST`는 control plane이나 compression contract가 허용할 때만
- `FULL`은 shape-changing blocker, legal/trust/ops risk, role split, strong-claim evidence gap이 있으면 강제로 올린다
- `COMPRESSION`은 explicit compression contract가 있을 때만 허용한다

## Interaction Contract

- start open, then narrow with one question at a time
- forced-choice는 concrete branch를 고를 때만 쓴다
- 사용자가 길게 설명하고 싶어 하면 freeform fallback으로 전환한다
- broad claim은 recent example과 current workaround로 다시 내린다
- done enough이면 다음 gap으로 넘기고 같은 discovery를 반복하지 않는다

## Required Start Check

- active `archetype`, `modifiers`, `pace`, `compression_contract`를 확인한다
- active `required_modifier_blocks`를 읽고 packaging, upgrade, or payer boundary를 바꾸는 block을 식별한다
- `answered_question_ids`, `suppressed_question_ids`, `unresolved_blockers`를 먼저 읽는다
- 이 skill에 필요한 prerequisite input과 slot이 없으면 `NEEDS_CONTEXT`로 멈추고 exact missing slot을 적는다
- blocker가 이 skill을 provisional로 만들면 ready 대신 `not_ready` route를 선택한다

## Required Modifier Block Injection

- `required_modifier_blocks`가 비면 [CONTROL-PLANE.md](../../references/CONTROL-PLANE.md)와 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map으로 다시 계산하고, non-owner unresolved block은 `open_questions`에 다음 owner skill과 함께 남긴다
- `required_modifier_blocks`가 있으면 packaging, entitlement, or paid boundary를 바꾸는 block subset을 같이 본다
- 이 skill이 특히 primary or supporting owner인 block:
  - `expansion_model`
  - `media_membership`
- membership, enterprise packaging, or upgrade trigger가 shape-changing이면 해당 block을 conditional write로 남긴다

## Core Workflow

1. user, buyer, payer를 구분한다
2. 돈이 발생하는 가치 순간을 찾는다
3. success-first 상태에서는 first revenue보다 sustainability note를 먼저 적는다
4. monetization이 shape-changing이면 first revenue motion과 buyer / payer / trigger를 적는다
5. free vs paid boundary 또는 self-serve vs sales boundary가 shape-changing이면 찾는다
6. ranking, trust, neutrality를 해칠 위험이 있으면 경고한다
7. annual contract, setup fee, service layer, seat or usage pricing은 relevant할 때만 포함해 본다
8. packaging, gating, paywall timing, upgrade trigger는 shape-changing일 때 함께 본다
9. distribution, partnership, premium, sponsorship, B2B 옵션까지 본다
10. willingness to pay, ROI, payback story를 확인한다
11. cost-to-serve, sales/support burden, early viability를 확인한다
12. 초기에는 무엇을 검증해야 하는지 정한다

## Must Capture

- payer definition
- value exchange moment or sustainability note
- first revenue motion when relevant
- free vs paid or expansion boundary when relevant
- candidate business models
- recommended first model or defer note
- trust conflicts
- pricing mechanics
- packaging or gating notes
- freemium or trial model if applicable
- expansion package ladder, sales handoff trigger, entitlement unlock timing when applicable
- willingness to pay or ROI story
- cost-to-serve assumption
- sales or support burden note
- failure threshold for first monetization test
- monetization risks
- active required modifier blocks that change packaging, upgrade, or paid boundary
- `public-website-lite`면 indirect or offsite monetization note도 허용한다

## Record Writes

- `decisions`: `first_revenue_motion`, pricing boundary, packaging, recommended model when relevant
- `assumptions`: WTP, ROI, payer behavior, upgrade trigger assumptions
- `open_questions`: unresolved paywall, pricing, packaging questions
- `risks`: trust conflict, support burden, monetization failure risk
- `business_viability_snapshot`
- `commercial_model`
- `metric_hierarchy`
- conditional when applicable: `expansion_model`, `media_membership`

## Output

- `Monetization Options`
- `Recommended Model Or Defer Note`
- `Validation Questions`
- `Expansion Packaging Notes` when applicable

## Quality Bar

- recommended model은 value exchange moment와 연결돼야 한다
- pricing mechanics와 business model을 분리해서 설명해야 한다
- trust를 해치는 수익화면 경고를 남겨야 한다
- early-stage viability note가 없으면 revenue direction만 있고 plan은 약하다
- success path가 아직 약한데 pricing만 과도하게 구체적이면 bad output이다
- `public-website-lite`면 full pricing stack 대신 indirect or offsite monetization boundary로도 통과할 수 있다

## Evidence And Scoring

- confidence는 `high` / `medium` / `low`로 남긴다
- evidence strength는 `strong` / `mixed` / `weak` / `missing`으로 남긴다
- readiness는 `ready` / `not_ready`로 명시한다
- unsupported claim은 `assumption` 또는 `open_question`으로 내린다

## Final Output Envelope

- final envelope는 [SYSTEM-IO-SCHEMAS.md](../../references/SYSTEM-IO-SCHEMAS.md)의 skill schema를 따른다
- required fields는 `status`, `evidence_strength`, `confidence`, `artifacts_produced`, `planning_record_writes`, `unresolved_questions`, `recommended_next_skill`, `exact_next_input`, `state_updates`다

## State Updates

- `current_state`, `active_skill`, `next_step`을 갱신한다
- question 상태가 바뀌면 `answered_question_ids` 또는 `suppressed_question_ids`를 갱신한다
- blocker나 stale effect가 생기면 state에 반영한다

## Checker Harness

- self-check 후 blocker/warning이 있으면 revision 대상으로 남긴다
- revision은 max 3회, blocker+warning count가 줄지 않으면 stalled로 본다
- stalled면 `planning-editor-auditor` 또는 user-facing escalation으로 넘긴다

## Completion

- final status: `DONE`, `DONE_WITH_CONCERNS`, `BLOCKED`, `NEEDS_CONTEXT`
- final marker: `## SKILL COMPLETE` 또는 `## SKILL BLOCKED`
- final output must include `evidence_strength`, `unresolved_questions`, `recommended_next_skill`, `exact_next_input`

## Escalate When

- strong claim에 필요한 evidence가 2회 push 후에도 없다
- legal/compliance/policy uncertainty가 route를 바꾼다
- another skill owns the blocking decision
- scope exceeds what this skill can verify

## Handoff

- final packaging, risks, next step은 `planning-synthesis`

## Backing Agents

- `monetization-advisor`
