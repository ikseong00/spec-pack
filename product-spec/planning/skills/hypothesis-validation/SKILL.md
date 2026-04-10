---
name: hypothesis-validation
description: Convert assumptions into testable hypotheses with evidence thresholds, falsification criteria, and recommended validation methods.
---

# Hypothesis Validation

## Purpose

가설을 실제로 검증 가능한 형태로 바꾸고, 무엇이 맞고 틀린지 판단할 기준을 만든다.

## Use When

- 문제는 그럴듯하지만 증거가 약하다
- "사람들이 원할 것 같다" 수준의 주장에 머물러 있다
- MVP 전에 무엇을 먼저 확인해야 할지 정해야 한다

## Inputs

- assumption list
- problem statement
- user notes
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
- active `required_modifier_blocks`를 읽고 experiment gate로 내려가야 하는 block을 식별한다
- `answered_question_ids`, `suppressed_question_ids`, `unresolved_blockers`를 먼저 읽는다
- 이 skill에 필요한 prerequisite input과 slot이 없으면 `NEEDS_CONTEXT`로 멈추고 exact missing slot을 적는다
- blocker가 이 skill을 provisional로 만들면 ready 대신 `not_ready` route를 선택한다

## Required Modifier Block Injection

- `required_modifier_blocks`가 비면 [CONTROL-PLANE.md](../../references/CONTROL-PLANE.md)와 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map으로 다시 계산하고, non-owner unresolved block은 `open_questions`에 다음 owner skill과 함께 남긴다
- `required_modifier_blocks`가 있으면 이 skill은 experiment gate로 내려가야 하는 block을 먼저 본다
- 이 skill이 특히 책임지거나 강하게 support하는 block:
  - `consumer_evidence_gate`
  - `proof_of_value_gate`
- weak-evidence consumer, habit, or upgrade proof가 shape를 바꾸면 block 이름을 명시적으로 남긴다

## Core Workflow

1. 핵심 가정을 문장으로 뽑는다
2. 각 가정을 testable hypothesis로 바꾼다
3. 검증 신호와 반증 신호를 정의한다
4. evidence threshold와 confidence를 적는다
5. decision impact와 dependency order를 적는다
6. 가장 위험한 가설 하나를 current riskiest로 고른다
7. timebox, owner, fail decision을 붙인다
8. weak-evidence consumer면 habit loop인지 one-shot utility인지 먼저 갈라서 gate를 다르게 잡는다
9. build로 승격하는 promotion rule과 stop or pivot 조건을 분리한다
10. 인터뷰, 랜딩페이지, concierge, prototype, smoke test 등 적절한 검증 방식을 제안한다

## Baseline Question Pack

- open: `지금 가장 크게 틀릴 수 있는 믿음은 무엇입니까?`
- recent example: `그 믿음을 실제로 지지한 최근 사례가 있습니까?`
- workaround: `그 가정이 틀려도 사용자는 지금 무엇으로 버틸 수 있습니까?`
- evidence: `무엇을 보면 이 가정이 틀렸다고 인정할 수 있습니까?`
- disconfirming: `이 가정이 틀리면 어떤 결정이 즉시 바뀝니까?`
- promotion: `무엇을 보면 next experiment가 아니라 build로 승격합니까?`
- stop: `next experiment가 하나로 좁혀지면 멈춘다`

## Must Capture

- core assumptions
- testable hypotheses
- evidence threshold
- falsification signal
- decision impact if false
- timebox and owner
- decision if fail
- confidence notes
- recommended experiments
- current riskiest hypothesis
- go / no-go implications
- promotion_rule_to_build
- weak-evidence consumer SaaS면 product-shape fork, cohort, sample or traffic requirement, measurement window, paywall boundary, habit trigger, reactivation path, kill threshold, promotion rule to build
- active required experiment gates and their owner/timebox

## Record Writes

- `assumptions`: normalized testable hypotheses, confidence, fail conditions
- `open_questions`: unresolved evidence gaps and falsification unknowns
- `risks`: current riskiest hypothesis and impact if false
- `hypothesis_register`
- conditional when applicable: `consumer_evidence_gate`, `proof_of_value_gate`
- `next_step`: primary `next_experiment`

## Output

- `Hypothesis Table`
- `Validation Priority`
- `Experiment Suggestions`
- `Consumer Evidence Gate` when applicable

## Quality Bar

- falsification signal이 없으면 incomplete다
- evidence threshold가 숫자나 명확한 판정 조건 없이 끝나면 약하다
- 검증 비용이 너무 큰 방법부터 제안하지 않는다
- next experiment가 하나로 안 좁혀지면 아직 risk-first가 아니다
- weak-evidence consumer / habit product인데 product-shape fork와 build-unlock rule이 없으면 incomplete다

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

- user segmentation 차이가 크면 `user-research-analysis`
- market proof가 더 중요하면 `market-competitor-research`
- hypothesis 결과를 최종 문서에 반영할 때는 `planning-synthesis`

## Backing Agents

- `hypothesis-validator`
