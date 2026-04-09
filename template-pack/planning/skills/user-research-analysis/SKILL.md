---
name: user-research-analysis
description: Define target users, segments, jobs-to-be-done, pains, behaviors, and representative user profiles from discovery or research inputs.
---

# User Research Analysis

## Purpose

타깃층과 유저 분석을 명확히 하고, 대표 사용자 유형을 만든다.

## Use When

- 모든 웹사이트 / SaaS plan에서 최소 light mode로 사용한다
- "누가 쓸까?"가 아직 넓다
- 타깃이 모두를 향하고 있다
- 사용자 유형별로 니즈가 다를 가능성이 있다
- 인터뷰 노트, 관찰 메모, founder memo를 정리 가능한 형태로 바꿔야 한다

## Inputs

- discovery summary
- interview notes
- observation memos
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
- active `required_modifier_blocks`를 읽고 role split or behavior model을 바꾸는 block을 식별한다
- `answered_question_ids`, `suppressed_question_ids`, `unresolved_blockers`를 먼저 읽는다
- 이 skill에 필요한 prerequisite input과 slot이 없으면 `NEEDS_CONTEXT`로 멈추고 exact missing slot을 적는다
- blocker가 이 skill을 provisional로 만들면 ready 대신 `not_ready` route를 선택한다

## Required Modifier Block Injection

- `required_modifier_blocks`가 비면 [CONTROL-PLANE.md](../../references/CONTROL-PLANE.md)와 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map으로 다시 계산하고, non-owner unresolved block은 `open_questions`에 다음 owner skill과 함께 남긴다
- `required_modifier_blocks`가 있으면 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map 기준으로 role, behavior, or segment model을 바꾸는 block subset을 같이 수집한다
- 이 skill이 특히 support하는 block:
  - `knowledge_contract`
  - `review_queue_model`
  - `learning_progression_contract`
  - `privacy_sensitive_consumer`
- non-owner block이라도 role map, learner/reviewer split, privacy behavior, or approval actor를 바꾸면 Must Capture와 Record Writes에 남긴다

## Core Workflow

1. raw research input을 facts / quotes / inferred notes로 분리한다
2. 초기 타깃 후보를 나열한다
3. 문제 강도와 사용 맥락으로 세그먼트를 나눈다
4. JTBD, pain, desired outcome을 정리한다
5. 대표 사용자 프로필 2-3개를 만든다
6. 가장 먼저 잡을 타깃을 고른다
7. 사용 맥락과 lifecycle stage를 명시한다
8. trigger, environment, frequency, constraints를 정리한다
9. `user.role-split-needed`를 판단한다
10. role map을 product type에 맞게 강제한다

## Baseline Question Pack

- open: `지금 제일 먼저 잡아야 할 사용자는 누구입니까?`
- recent example: `그 사용자가 마지막으로 이 문제를 겪은 상황은 언제였습니까?`
- workaround: `그 사람은 지금 무엇으로 버티고 있습니까?`
- evidence: `그 사용자군이 다른 사용자군보다 더 절실하다고 볼 근거는 무엇입니까?`
- disconfirming: `처음에는 절대 잡지 말아야 할 사용자는 누구입니까?`
- stop: `primary target, segment difference, role split 필요성이 보이면 멈춘다`

## Must Capture

- primary target
- secondary targets
- stakeholder roles
- context of use
- trigger / environment / frequency / constraints
- lifecycle or journey stage
- JTBD
- top pains
- behavior patterns
- adoption blockers
- role-specific goals
- role split needed
- evidence-backed observations
- active required modifier blocks that change role split, behavior, or lifecycle

## Record Writes

- `facts`: evidence-backed user, segment, role, behavior, and blocker observations
- `assumptions`: inferred segments or role needs that still need evidence
- `open_questions`: unanswered segmentation, role-split, or lifecycle questions
- `user_model`
- `recent_examples`
- `use_case_cards`
- conditional when applicable: `knowledge_contract`, `review_queue_model`, `learning_progression_contract`, `privacy_sensitive_consumer`

## Output

- `Target User Summary`
- `User Segments`
- `Representative Profiles`
- `Role Map`
- normalized research notes

## Quality Bar

- segment는 demographics가 아니라 behavior와 context 차이를 보여야 한다
- role map이 archetype과 안 맞으면 다시 쓴다
- quote나 evidence 없이 강한 주장만 많으면 confidence를 낮춘다
- user는 있는데 actual moment of need가 없으면 incomplete다

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

- target이 정리되면 `positioning-strategy`
- representative flow가 필요하면 `ux-use-case-strategy`
- adoption blocker가 중요하면 `stakeholder-rollout-strategy`

## Backing Agents

- `user-researcher`
