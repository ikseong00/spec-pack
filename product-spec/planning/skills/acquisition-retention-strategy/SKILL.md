---
name: acquisition-retention-strategy
description: Define acquisition channels, activation, retention loops, success metrics, and growth assumptions for web and SaaS products.
---

# Acquisition Retention Strategy

## Purpose

웹사이트 / SaaS에서 유입, activation, retention이 어떻게 일어나는지 초기부터 설계한다.

## Use When

- 웹서비스나 SaaS를 만들고 있다
- product value는 보이는데 growth path가 모호하다
- acquisition과 retention이 synthesis 단계에서야 나오고 있다

fast mode:

- one primary motion
- one threshold
- one first-customer path
- one next experiment

## Inputs

- target user
- product thesis
- core use cases
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
- active `required_modifier_blocks`를 읽고 activation, retention, or upgrade loop를 바꾸는 block을 식별한다
- `answered_question_ids`, `suppressed_question_ids`, `unresolved_blockers`를 먼저 읽는다
- 이 skill에 필요한 prerequisite input과 slot이 없으면 `NEEDS_CONTEXT`로 멈추고 exact missing slot을 적는다
- blocker가 이 skill을 provisional로 만들면 ready 대신 `not_ready` route를 선택한다

## Required Modifier Block Injection

- `required_modifier_blocks`가 비면 [CONTROL-PLANE.md](../../references/CONTROL-PLANE.md)와 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map으로 다시 계산하고, non-owner unresolved block은 `open_questions`에 다음 owner skill과 함께 남긴다
- `required_modifier_blocks`가 있으면 activation, retention, reactivation, upgrade loop를 바꾸는 block subset을 같이 본다
- 이 skill이 특히 support하는 block:
  - `consumer_evidence_gate`
  - `proof_of_value_gate`
  - `media_membership`
  - `expansion_model`
- membership이나 weak-evidence consumer는 loop와 promotion threshold를 separate block으로 남긴다

## Core Workflow

1. primary acquisition channel 가설을 정한다
2. first customer path를 적는다
3. north star candidate를 정한다
4. activation event를 정한다
5. time to first value를 정한다
6. repeat-use loop, churn risk, retention trigger를 정한다
7. self-serve-to-enterprise modifier가 있으면 expansion handoff를 따로 정한다
8. referral, content, sales, community, SEO, paid channel 중 핵심 경로를 고른다
9. one primary motion과 one backup motion만 남긴다
10. owner, asset, cadence, time-to-feedback를 적는다
11. channel plausibility evidence를 붙인다
12. activation / retention / guardrail metrics를 우선 정하고, monetization metric은 relevant할 때만 붙인다

## Baseline Question Pack

- open: `첫 10명의 유저나 리드는 어디서 옵니까?`
- recent example: `비슷한 사람을 최근에 실제로 어디서 만났습니까?`
- workaround: `그 사람이 지금은 어떤 경로로 문제를 해결하러 갑니까?`
- evidence: `이 채널이 실제로 먹힌다고 볼 threshold는 무엇입니까?`
- disconfirming: `이 채널이 비싸거나 너무 느려서 안 될 근거는 무엇입니까?`
- stop: `primary motion, first customer path, one acquisition threshold가 보이면 멈춘다`

## Must Capture

- primary acquisition channels
- primary motion and backup motion
- first customer path
- north star candidate
- activation event
- time to first value
- retention loop
- churn risks
- owner / asset / cadence / time-to-feedback
- channel plausibility evidence
- expansion handoff if applicable
- leading growth metrics
- guardrail metrics
- biggest growth risks
- active required modifier blocks that change activation, retention, or upgrade behavior
- `public-website-lite`면 retention loop는 full product loop가 아니라 minimal re-engagement 또는 branded return note여도 된다

## Record Writes

- `decisions`: `primary_acquisition_motion`, backup motion, activation event, retention loop
- `assumptions`: channel plausibility, expansion, cadence assumptions
- `risks`: channel concentration, churn, weak activation, low-feedback-cycle risk
- `business_viability_snapshot`
- `metric_hierarchy`
- conditional when applicable: `consumer_evidence_gate`, `proof_of_value_gate`, `media_membership`, `expansion_model`

## Output

- `Growth Funnel Notes`
- `Activation and Retention Model`
- `Metric Hierarchy`

## Quality Bar

- 일반적으로 acquisition만 있고 retention이 약하면 불완전하다
- `public-website-lite`면 retention은 repeat visit, branded search, re-inquiry 같은 light signal로 충분할 수 있다
- north star는 vanity metric이면 안 된다
- churn risk와 guardrail이 같이 보여야 한다
- 첫 10명의 유저나 리드가 어떻게 생기는지 설명 못 하면 너무 추상적이다

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

- pricing / boundary 문제는 `monetization-strategy`
- final hierarchy 정리는 `planning-synthesis`

## Backing Agents

- `growth-strategist`
