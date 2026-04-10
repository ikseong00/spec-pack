---
name: problem-validation
description: Test whether the problem is real, painful, frequent, and worth solving before feature planning begins.
---

# Problem Validation

## Purpose

문제가 진짜 존재하는지, 얼마나 아픈지, 누가 얼마나 절실하게 느끼는지 확인한다.

## Use When

- 아이디어가 흥미롭지만 시장성은 아직 불확실하다
- 사용자가 "불편하다"라고 말하지만 강도가 애매하다
- nice-to-have와 must-have를 가려야 한다

## Inputs

- discovery summary
- current alternatives
- recent user examples
- any interview or observation notes

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
- active `required_modifier_blocks`를 읽고 problem severity or trust cost를 바꾸는 block을 식별한다
- `answered_question_ids`, `suppressed_question_ids`, `unresolved_blockers`를 먼저 읽는다
- 이 skill에 필요한 prerequisite input과 slot이 없으면 `NEEDS_CONTEXT`로 멈추고 exact missing slot을 적는다
- blocker가 이 skill을 provisional로 만들면 ready 대신 `not_ready` route를 선택한다
- required slot family는 `problem.statement`, `problem.current-alternative`, `problem.recent-instance.1`, `problem.frequency`, `problem.intensity`다
- `problem.statement` 또는 `problem.current-alternative`가 비면 `NEEDS_CONTEXT`로 멈추고 discovery로 되돌린다
- recent example이 비지만 validation은 시작해야 하면 `low-confidence provisional`로 표시하고 `problem.recent-instance.1`을 exact missing slot으로 남긴다

## Required Modifier Block Injection

- `required_modifier_blocks`가 비면 [CONTROL-PLANE.md](../../references/CONTROL-PLANE.md)와 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map으로 다시 계산하고, non-owner unresolved block은 `open_questions`에 다음 owner skill과 함께 남긴다
- `required_modifier_blocks`가 있으면 현재 pain, failure cost, recovery expectation을 바꾸는 block을 validation에서 같이 본다
- 이 skill이 특히 signal을 더 강하게 주는 block:
  - `consumer_evidence_gate`
  - `proof_of_value_gate`
  - `trust_ops_minimum`
  - `constraint_exception_contract`
  - `exception_recovery_contract`
- block을 final로 닫지 못해도 문제 강도와 validation threshold를 바꾸면 `open_questions`와 risk note에 block 이름을 남긴다

## Core Workflow

1. 현재 해결 방식과 대체재를 확인한다
2. 최근 실제 사례를 기준으로 문제 발생 빈도와 심각도를 확인한다
3. latency, exception, error, policy violation 같은 운영 증상을 확인한다
4. 실제 경험인지 추측인지 구분한다
5. strong claim이면 recent example bundle을 2-3개까지 채운다
6. frequency / intensity / time / money / trust cost를 같은 ladder로 본다
7. evidence strength를 표시한다
8. 가설 목록을 만든다
9. 가장 위험한 가설을 표시한다
10. 추가 검증이 필요한지 판정한다
11. 양면 서비스라면 각 side의 pain을 분리한다

## Validation Lens

- 얼마나 자주 겪는가
- 시간, 비용, 감정 손실이 얼마나 큰가
- 신뢰, SLA, compliance, abandonment 비용이 있는가
- 이미 돈이나 시간을 써서 해결하려고 하는가
- 기존 방식으로 충분히 해결되는가
- 문제를 겪는 사람이 초기 고객이 될 가능성이 있는가

## Baseline Question Pack

- open: `이 문제가 실제로 제일 아픈 사람은 누구입니까?`
- recent example: `마지막으로 그 문제가 생긴 구체적인 순간을 설명해 주세요`
- workaround: `그때는 지금 어떻게 처리했습니까?`
- evidence: `그 방식 때문에 시간, 돈, 신뢰 중 무엇이 얼마나 깨졌습니까?`
- disconfirming: `사실 기존 방식으로 이미 충분한 사람은 누구입니까?`
- stop: `frequency, intensity, workaround strength가 보이면 다음 gap으로 넘긴다`

## Must Capture

- 핵심 문제 진술
- 현재 workaround
- recent example bundles
- pain intensity
- problem frequency
- workaround insufficiency
- operational symptoms
- side-specific pain if applicable
- high-risk assumptions
- evidence threshold
- early validation needs
- active required modifier blocks that change pain, trust cost, or recovery expectation

## Record Writes

- `facts`: validated problem statement, workaround, frequency, intensity, and operational symptoms
- `assumptions`: pain claims that are still weak or inferred
- `open_questions`: unresolved validation gaps
- `risks`: strong workaround, weak pain, or thin evidence risk
- `recent_examples`
- conditional when applicable: `consumer_evidence_gate`, `proof_of_value_gate`, `constraint_exception_contract`, `exception_recovery_contract`

## Output

- `Problem Statement`
- `Assumption List`
- `Validation Priority`
- shared `planning record` updates

## Quality Bar

- problem이 "좋아 보인다"에서 멈추면 실패다
- frequency와 intensity가 모두 약하면 low-confidence로 둔다
- workaround가 생각보다 강하면 그대로 인정해야 한다
- 다음 validation question이 안 보이면 아직 정리가 덜 된 것이다
- recent example 없이 강한 문제 주장을 고정하면 안 된다

## Exit Criteria

아래가 채워지면 validation을 멈춘다.

- 핵심 문제와 workaround가 명확하다
- strong claim이면 recent example bundle이 1-3개 있다
- pain intensity와 frequency가 적어도 rough level로 정리됐다
- 가장 위험한 가설이 보인다
- 다음에 검증해야 할 질문이 open question으로 분리됐다

## Evidence And Scoring

- confidence는 `high` / `medium` / `low`로 남긴다
- evidence strength는 `strong` / `mixed` / `weak` / `missing`으로 남긴다
- readiness는 `ready` / `not_ready`로 명시한다
- unsupported claim은 `assumption` 또는 `open_question`으로 내린다

## Final Output Envelope

- final envelope는 [SYSTEM-IO-SCHEMAS.md](../../references/SYSTEM-IO-SCHEMAS.md)의 skill schema를 따른다
- required fields는 `status`, `evidence_strength`, `confidence`, `artifacts_produced`, `planning_record_writes`, `unresolved_questions`, `recommended_next_skill`, `exact_next_input`, `state_updates`다

example:

```yaml
status: DONE_WITH_CONCERNS
evidence_strength: weak
confidence: medium
artifacts_produced:
  - problem_statement
  - assumption_list
  - validation_priority
planning_record_writes:
  - facts
  - assumptions
  - open_questions
  - risks
  - recent_examples
unresolved_questions:
  - direct-user example bundle needs one more observed instance
recommended_next_skill: hypothesis-validation
exact_next_input:
  archetype: consumer-saas
  modifiers: []
  pace: standard
  required_focus:
    - hypothesis.riskiest
    - evidence.threshold
state_updates:
  route_rationale: problem shape is clear, evidence gap remains
  current_state: validate
  active_skill: problem-validation
  question_state:
    - question_id: problem.recent-instance.1
      state: answered
  last_audit_type: stage_exit
  last_audit_result: issues_found
  revision_iteration: 1
  next_step: hypothesis-validation
  next_step_owner: hypothesis-validation
```

## State Updates

- `current_state`, `active_skill`, `next_step`을 갱신한다
- question 상태가 바뀌면 `answered_question_ids` 또는 `suppressed_question_ids`를 갱신한다
- blocker나 stale effect가 생기면 state에 반영한다

transition table:

| when | set |
| --- | --- |
| main risk is still evidential | `current_state: validate`, `next_step: hypothesis-validation`, `next_step_owner: hypothesis-validation` |
| role/context split changes pain materially | `current_state: validate`, `next_step: user-research-analysis`, `next_step_owner: user-research-analysis` |
| alternative / market inertia becomes the main blocker | `current_state: validate`, `next_step: market-competitor-research`, `next_step_owner: market-competitor-research` |

## Self-Check Dimensions

- `problem clarity`: statement, workaround, recent example가 모두 있는가
- `disconfirmation`: 기존 방식으로 충분한 사람을 제대로 분리했는가
- `handoff`: 다음 validation question이 exact slot 기준으로 남았는가

## Checker Harness

- self-check 후 blocker/warning이 있으면 revision 대상으로 남긴다
- revision은 max 3회, blocker+warning count가 줄지 않으면 stalled로 본다
- stalled면 `planning-editor-auditor` 또는 user-facing escalation으로 넘긴다

checker handoff contract:

- checker prompt는 `## Issues`, `## Repair Order`, `revision_delta`, `blocker_count`, `warning_count`, `info_count`를 같이 낸다
- issue row는 `dimension`, `severity`, `finding`, `affected_field`, `suggested_fix` shape를 따른다
- user-facing escalation은 `STATUS / REASON / ATTEMPTED / RECOMMENDATION` 형식을 따른다

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

- 가설 구조가 핵심이면 `hypothesis-validation`
- role과 context 차이가 크면 `user-research-analysis`
- 대안과 경쟁 구조가 중요해졌으면 `market-competitor-research`

## Backing Agents

- `problem-validator`
