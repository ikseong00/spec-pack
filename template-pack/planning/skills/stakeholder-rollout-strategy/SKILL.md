---
name: stakeholder-rollout-strategy
description: Map stakeholders, adoption blockers, rollout constraints, implementation dependencies, and compliance or change-management risks before execution begins.
---

# Stakeholder Rollout Strategy

## Purpose

도입과 롤아웃이 복잡한 제품에서 누가 영향을 받고, 무엇이 막고, 어떤 순서로 확산시킬지 정한다.

## Use When

- buyer와 user가 다르다
- 도입 과정에 admin, security, procurement, operations가 끼어든다
- 파일럿, 조직 확산, change management가 중요하다
- geo rollout, category rollout, supply seeding, support queue 같은 운영 rollout이 중요하다

## Inputs

- role map
- MVP scope
- dependencies and risks
- planning record

## Baseline Question Pack

- open: `누가 도입을 밀고, 누가 막고, 누가 승인합니까?`
- recent example: `최근 비슷한 도입이나 롤아웃에서 실제로 막혔던 단계가 있었습니까?`
- workaround: `이 단계가 없으면 지금은 어떤 수동 프로세스나 우회로로 버팁니까?`
- evidence: `이 rollout plan이 현실적이라고 볼 threshold나 proof는 무엇입니까?`
- disconfirming: `어떤 관찰이 나오면 pilot, rollout order, owner assignment를 바꿔야 합니까?`
- stop: `rollout owner, blocker, pilot boundary, rollback trigger가 보이면 멈춘다`

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
- active `required_modifier_blocks`를 읽고 owner/SLA/rollout subset이 필요한 block을 식별한다
- `answered_question_ids`, `suppressed_question_ids`, `unresolved_blockers`를 먼저 읽는다
- 이 skill에 필요한 prerequisite input과 slot이 없으면 `NEEDS_CONTEXT`로 멈추고 exact missing slot을 적는다
- blocker가 이 skill을 provisional로 만들면 ready 대신 `not_ready` route를 선택한다

## Required Modifier Block Injection

- `required_modifier_blocks`가 비면 [CONTROL-PLANE.md](../../references/CONTROL-PLANE.md)와 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map으로 다시 계산하고, non-owner unresolved block은 `open_questions`에 다음 owner skill과 함께 남긴다
- `required_modifier_blocks`가 있으면 [CONTROL-PLANE.md](../../references/CONTROL-PLANE.md)와 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map으로 이 skill이 다뤄야 하는 owner/SLA/rollout subset을 확정한다
- 이 skill이 특히 책임지는 block:
  - `expansion_model`
  - `trust_ops_minimum`
  - `service_ops_minimum`
  - `review_queue_model`
  - `media_membership`
  - `exception_recovery_contract`
- non-owner block이라도 stage owner, support owner, manual queue owner, or rollback owner가 필요한 경우 relevant subset을 반드시 남긴다

## Core Workflow

1. stakeholder role map을 만든다
2. champion, blocker, approver를 구분한다
3. pilot rollout 범위를 정한다
4. adoption blocker와 dependency를 정리한다
5. customer-side work, migration/backfill, time-to-go-live를 정한다
6. training, rollback, dual-run, implementation ownership을 정한다
7. onboarding, support, escalation ownership을 정한다
8. pilot entry criteria, pilot success metric, rollback trigger를 정한다
9. self-serve-to-enterprise면 package ladder, stage role map, entitlement unlock timing을 scope freeze 전에 정한다
10. compliance, procurement, implementation risk를 기록한다

## Must Capture

- stakeholder map
- adoption blockers
- rollout stages
- rollout unit
- dependency register
- customer work required
- implementation timeline
- migration or backfill plan
- pilot entry criteria
- rollback trigger
- training and rollout gates
- compliance or procurement risks
- owner per stage
- active required modifier blocks with owner, SLA, or rollout coupling
- support or escalation owner
- support SLA and incident owner when applicable
- liquidity or supply stage gate when applicable
- expansion stage role map, sales handoff, pilot success, enterprise entitlement, entitlement unlock timing, stage thresholds, artifact-vs-process split when applicable
- exception recovery owner, appeal/regrade/callback owner, communication boundary, response SLA when applicable
- media membership support owner, moderation owner, package ladder, refund/cancel ops when applicable
- `commerce-transactional`이면 verification, dispute, payout, review queue와 rollout cohort coupling까지 본다

## Record Writes

- `decisions`: rollout sequence, pilot boundary, stage owners, adoption plan
- `open_questions`: unresolved approval, procurement, migration, or onboarding blockers
- `risks`: compliance, implementation, migration, support, and rollout-failure risks
- `rollout_plan`
- `dependency_register`
- `controls_register`
- conditional when applicable: `expansion_model`, `trust_ops_minimum`, `service_ops_minimum`, `review_queue_model`, `media_membership`, `exception_recovery_contract`

## Output

- `Stakeholder Map`
- `Rollout Plan`
- `Dependency Register`
- `Expansion Model` when applicable
- `Trust Ops Minimum` when applicable

## Quality Bar

- rollout stage마다 owner가 있어야 한다
- support / escalation owner가 빠지면 운영 가정이 약하다
- blocker를 product issue와 org issue로 분리해야 한다
- customer-side implementation burden이 비어 있으면 incomplete다
- self-serve-to-enterprise 또는 platform 확장인데 package ladder, stage role map, entitlement unlock timing이 없으면 incomplete다

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

- distribution / adoption은 `acquisition-retention-strategy`
- final gate는 `planning-synthesis`

## Backing Agents

- `stakeholder-rollout-planner`
