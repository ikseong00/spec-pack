---
name: positioning-strategy
description: Narrow the product wedge, sharpen the target user, and define why this product wins over current alternatives.
---

# Positioning Strategy

## Purpose

무엇을 누구에게 어떤 이유로 팔 것인지 명확히 정한다.

## Use When

- 차별점이 두루뭉술하다
- 타깃이 넓어서 메시지가 흐리다
- "왜 우리를 써야 하는가"가 아직 날카롭지 않다

## Inputs

- target user summary
- market and competitor summary
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
- active `required_modifier_blocks`를 읽고 value proposition이나 wedge를 바꾸는 block을 식별한다
- `answered_question_ids`, `suppressed_question_ids`, `unresolved_blockers`를 먼저 읽는다
- 이 skill에 필요한 prerequisite input과 slot이 없으면 `NEEDS_CONTEXT`로 멈추고 exact missing slot을 적는다
- blocker가 이 skill을 provisional로 만들면 ready 대신 `not_ready` route를 선택한다

## Required Modifier Block Injection

- `required_modifier_blocks`가 비면 [CONTROL-PLANE.md](../../references/CONTROL-PLANE.md)와 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map으로 다시 계산하고, non-owner unresolved block은 `open_questions`에 다음 owner skill과 함께 남긴다
- `required_modifier_blocks`가 있으면 현재 wedge와 proof point를 바꾸는 block subset을 positioning 안에 반영한다
- 이 skill이 특히 support하는 block:
  - `local_discovery_trust`
  - `media_membership`
- discovery/trust product면 ranking provenance, freshness, claim trust를 proof point로 반영하고, membership product면 free boundary와 upgrade proof를 positioning과 연결한다

## Core Workflow

1. primary target을 고른다
2. wedge를 정한다
3. `For X who currently use Y, we help them achieve Z unlike Y because...` 구조로 positioning을 만든다
4. switching reason과 proof point를 만든다
5. anti-target, not-for, switch cost를 적는다
6. 왜 지금 이 제품이 필요한지 정리한다
7. 첫 landing headline 또는 onboarding message를 만든다
8. 일부러 안 할 영역을 정한다

## Must Capture

- primary target user
- beachhead segment
- one-line positioning
- vs current alternative
- switch trigger
- switch cost
- proof points
- not-for statement
- headline or onboarding message
- explicit trade-offs
- why-now rationale
- active required modifier blocks that change the wedge or proof story

## Record Writes

- `decisions`: positioning statement, beachhead, anti-target, message direction, trade-offs
- `assumptions`: proof gaps behind the chosen wedge
- `open_questions`: unresolved switch trigger, proof, or category questions
- `risks`: weak differentiation or high switching-cost risk
- conditional when applicable: `local_discovery_trust`, `media_membership`

## Output

- `Positioning Statement`
- `Beachhead Recommendation`
- `Trade-Off Decisions`

## Quality Bar

- 모두를 위한 positioning은 실패다
- switching reason과 proof point가 연결돼야 한다
- why-now가 없으면 약한 positioning으로 본다
- current alternative 대비 차이가 안 보이면 handoff용 positioning이 아니다

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

- 범위를 자를 때는 `mvp-scope`
- growth / GTM 연결은 `acquisition-retention-strategy`

## Backing Agents

- `positioning-advisor`
