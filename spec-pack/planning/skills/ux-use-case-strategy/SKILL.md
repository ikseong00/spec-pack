---
name: ux-use-case-strategy
description: Define representative use cases, core flows, information architecture, and trust-building experience decisions before UI implementation.
---

# UX Use Case Strategy

## Purpose

대표 유스케이스와 사용자 경험 뼈대를 정해서, 기능 정의를 실제 사용 흐름으로 바꾼다.

## Use When

- 기능은 정의했지만 사용 흐름이 없다
- 첫 진입 경험과 반복 사용 이유가 모호하다
- UI 전에 경험 전략을 고정해야 한다

## Inputs

- representative use cases
- MVP scope
- target users
- archetype and modifiers

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
- active `required_modifier_blocks`를 읽고 user-visible flow를 바꾸는 block을 식별한다
- `answered_question_ids`, `suppressed_question_ids`, `unresolved_blockers`를 먼저 읽는다
- 이 skill에 필요한 prerequisite input과 slot이 없으면 `NEEDS_CONTEXT`로 멈추고 exact missing slot을 적는다
- blocker가 이 skill을 provisional로 만들면 ready 대신 `not_ready` route를 선택한다

## Required Modifier Block Injection

- `required_modifier_blocks`가 비면 [CONTROL-PLANE.md](../../references/CONTROL-PLANE.md)와 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map으로 다시 계산하고, non-owner unresolved block은 `open_questions`에 다음 owner skill과 함께 남긴다
- `required_modifier_blocks`가 있으면 [CONTROL-PLANE.md](../../references/CONTROL-PLANE.md)와 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map으로 이 skill이 다뤄야 하는 flow subset을 확정한다
- 이 skill이 특히 책임지는 block:
  - `privacy_sensitive_consumer`
  - `learning_progression_contract`
  - `review_queue_model`
  - `availability_booking_contract`
  - `media_membership`
  - `exception_recovery_contract`
- non-owner block이라도 user-visible state, step, recovery, trust surface를 바꾸면 flow/screen subset을 반드시 남긴다

## Core Workflow

1. 대표 유스케이스 2-3개를 고른다
2. 각 use case를 card 형태로 정리한다
3. first-time flow와 repeat flow를 정리한다
4. 탐색, 검색, 상세, 행동 전환 구조를 정한다
5. 신뢰 요소와 필요한 정보 블록을 정한다
6. activation event와 time to first value를 정의한다
7. archetype-specific conversion or onboarding path를 따로 본다
8. recovery edge case와 trust step을 정의한다
9. key screen inventory와 screen spec skeleton을 만든다
10. unresolved UX questions를 표시한다

## Must Capture

- representative use cases
- use-case cards with actor / segment / trigger context
- core user flows
- IA and navigation model
- key screens or states
- screen spec skeleton
- trust elements
- UX principles
- active required modifier blocks that change user-visible flow
- activation event
- time to first value
- archetype-specific conversion or onboarding path
- first-time vs repeat split
- recovery or exception flows
- paywall/package/support/moderation flow when applicable
- appeal, regrade, callback, override, user-visible recovery path when applicable
- `public-website-lite`면 page-template flow와 minimal re-engagement note로 줄일 수 있다

## Record Writes

- `decisions`: core first-time flow, repeat flow, trust steps, recovery principles, IA, navigation, key screen inventory
- `open_questions`: unresolved UX, onboarding, or exception-path questions
- `user_model`: refined trigger, context, or constraint updates if they change
- `use_case_cards`
- `screen_specs`
- conditional when applicable: `privacy_sensitive_consumer`, `learning_progression_contract`, `review_queue_model`, `availability_booking_contract`, `media_membership`, `exception_recovery_contract`

## Output

- `Use Case Map`
- `Flow Summary`
- `Trust and UX Principles`
- `Screen Spec Skeleton`

## Quality Bar

- 기본적으로 first-time flow와 repeat flow가 모두 있어야 한다
- `public-website-lite`면 repeat flow는 minimal re-engagement 또는 branded return path여도 된다
- trust block과 recovery path가 빠지면 불완전하다
- archetype에 맞는 핵심 전환이 보여야 한다
- use case에 current alternative와 desired outcome이 없으면 약하다

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

- data dependency가 큰 flow면 `data-source-strategy`
- activation / retention metric 연결은 `acquisition-retention-strategy`

## Backing Agents

- `ux-use-case-designer`
