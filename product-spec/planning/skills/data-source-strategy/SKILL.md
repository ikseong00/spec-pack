---
name: data-source-strategy
description: Identify the external and internal data sources the product depends on, along with reliability, freshness, ownership, and legal or operational risks.
---

# Data Source Strategy

## Purpose

제품이 의존하는 데이터소스와 integration surface를 미리 정의해서, 구현 전부터 현실성을 점검한다.

## Use When

- 모든 website / SaaS planning에서 light mode pass가 가능하다
- 지도, 가격, 리뷰, 재고, 위치, 콘텐츠 등 외부 데이터가 필요하다
- 데이터 없이 제품 가치가 성립하지 않는다
- 직접 입력과 외부 수집 중 무엇이 맞는지 판단해야 한다

light mode:

- `data.required-entity`
- `data.source-of-truth`
- `data.main-dependency`
- `data.main-policy-risk`
- `data.manual-op-owner`
- `data.fallback`
- `data.legal-basis-or-allowed-use`
- `data.main-trust-control`
- output은 `Data Source Inventory` 축약형과 핵심 risk note면 충분하다

## Inputs

- MVP scope
- key entities
- archetype and modifiers
- planning record

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
- active `required_modifier_blocks`를 읽고 이 skill이 owner 또는 supporting owner인 block을 식별한다
- `answered_question_ids`, `suppressed_question_ids`, `unresolved_blockers`를 먼저 읽는다
- 이 skill에 필요한 prerequisite input과 slot이 없으면 `NEEDS_CONTEXT`로 멈추고 exact missing slot을 적는다
- blocker가 이 skill을 provisional로 만들면 ready 대신 `not_ready` route를 선택한다

## Required Modifier Block Injection

- `required_modifier_blocks`가 비면 [CONTROL-PLANE.md](../../references/CONTROL-PLANE.md)와 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map으로 다시 계산하고, non-owner unresolved block은 `open_questions`에 다음 owner skill과 함께 남긴다
- `required_modifier_blocks`가 있으면 [CONTROL-PLANE.md](../../references/CONTROL-PLANE.md)와 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map으로 이 skill이 다뤄야 하는 block subset을 확정한다
- 이 skill이 특히 책임지는 block:
  - `platform_contract`
  - `regulated_workflow_minimum`
  - `offline_operability`
  - `artifact_revision_contract`
  - `local_discovery_trust`
  - `reservation_lifecycle_contract`
  - `availability_booking_contract`
  - `constraint_exception_contract`
  - `exception_recovery_contract`
- non-owner block이라도 source of truth, authority, policy boundary를 바꾸면 relevant subset을 묻고 `open_questions` 또는 partial write로 남긴다

## Core Workflow

1. 제품이 필요로 하는 핵심 데이터 엔티티를 적는다
2. 각 엔티티별 데이터소스 후보를 나열한다
3. 직접 입력, 파트너십, 공공데이터, API, 크롤링 가능성을 비교한다
4. ranking, trust, freshness를 만드는 입력 신호를 따로 본다
5. system of record와 sync direction을 정한다
6. attribution, reconciliation, retention, consent, export/delete 요구를 본다
7. dependency register와 controls register를 만든다
8. 정확도, 최신성, 비용, 법적 리스크를 본다
9. 초기 운영 방식과 manual ops를 정한다
10. website / directory면 lead or content source-of-truth와 moderation ops를 따로 본다
11. website / directory면 canonical entity model, duplicate suppression, freshness owner를 scope freeze 전에 적는다
12. platform / integration이면 support owner or SLA, incident owner, rollback boundary를 `platform_contract`에 포함한다

## Baseline Question Pack

- open: `이 제품이 성립하려면 꼭 필요한 데이터는 무엇입니까?`
- recent example: `최근 그 데이터를 실제로 얻거나 갱신한 사례가 있습니까?`
- workaround: `그 데이터가 없으면 지금은 무엇으로 대신합니까?`
- evidence: `이 source를 실제 product source로 써도 된다고 볼 근거는 무엇입니까?`
- disconfirming: `관찰은 가능하지만 재사용은 못 하는 source가 있습니까?`
- stop: `source-of-truth, main dependency, main policy risk가 보이면 멈춘다`

## Must Capture

- required data entities
- candidate data sources
- ranking inputs
- system of record
- source of truth map
- integration inventory
- canonical entity model when applicable
- duplicate suppression rule when applicable
- sync and reconciliation requirements
- freshness requirements
- freshness owner
- ownership and update plan
- manual operations
- manual ops owner
- dependency register
- controls register
- active required modifier blocks with source-of-truth or policy ownership
- legal basis or allowed use
- main trust control
- legal or policy risks
- fallback plan
- support owner or SLA when applicable
- incident owner when applicable
- rollback boundary when applicable
- exception or recovery source of truth, callback authority, audit/event rule when applicable
- `commerce-transactional`이면 provider verification, dispute or refund, payout or settlement, manual-review SLA, rollout coupling

## Record Writes

- `facts`: required entities, source candidates, source-of-truth and reconciliation decisions
- `open_questions`: unresolved freshness, ownership, legal, or sync gaps
- `risks`: dependency, policy, freshness, cost, manual-ops risks
- `data_dependencies`
- `source_of_truth_map`
- `manual_operations`
- `dependency_register`
- `controls_register`
- conditional when applicable: `trust_ops_minimum`, `platform_contract`, `regulated_workflow_minimum`, `offline_operability`, `artifact_revision_contract`, `local_discovery_trust`, `reservation_lifecycle_contract`, `availability_booking_contract`, `constraint_exception_contract`, `exception_recovery_contract`

## Output

- `Data Source Inventory`
- `Risk Notes`
- `Initial Operations Plan`
- `Business Ops Inputs`
- `Trust Ops Minimum` when applicable

## Quality Bar

- source reliability와 update cost를 같이 봐야 한다
- source-of-truth가 불명확하면 unresolved로 남긴다
- legal risk가 높은데 mitigation이 없으면 blocked에 가깝다
- manual ops owner가 없으면 operationally incomplete다

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

- rollout 부담이 크면 `stakeholder-rollout-strategy`
- final dependency 정리는 `planning-synthesis`

## Backing Agents

- `data-source-analyst`
