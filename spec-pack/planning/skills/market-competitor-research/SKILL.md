---
name: market-competitor-research
description: Research the market, direct competitors, indirect alternatives, and whitespace opportunities relevant to the product idea.
---

# Market Competitor Research

## Purpose

시장 구조와 경쟁 구도를 이해하고, 어떤 틈이 있는지 찾는다.

## Use When

- 모든 website / SaaS planning에서 light mode pass가 가능하다
- 비슷한 서비스가 얼마나 있는지 모른다
- 차별화 포인트를 잡기 어렵다
- 사용자가 현재 어떤 대안에 익숙한지 파악해야 한다

light mode:

- `market.category`
- `market.demand-proxy`
- `competitor.primary-set`
- `market.why-now-signal`
- output은 `Market Evidence Brief`와 `Competitor Table`의 축약형이면 충분하다

## Inputs

- product thesis
- target user summary
- archetype
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
- active `required_modifier_blocks`를 읽고 category trust or market expectation을 바꾸는 block을 식별한다
- `answered_question_ids`, `suppressed_question_ids`, `unresolved_blockers`를 먼저 읽는다
- 이 skill에 필요한 prerequisite input과 slot이 없으면 `NEEDS_CONTEXT`로 멈추고 exact missing slot을 적는다
- blocker가 이 skill을 provisional로 만들면 ready 대신 `not_ready` route를 선택한다

## Required Modifier Block Injection

- `required_modifier_blocks`가 비면 [CONTROL-PLANE.md](../../references/CONTROL-PLANE.md)와 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map으로 다시 계산하고, non-owner unresolved block은 `open_questions`에 다음 owner skill과 함께 남긴다
- `required_modifier_blocks`가 있으면 market expectation, comparison set, or switching cost를 바꾸는 block subset을 같이 본다
- 이 skill이 특히 strong signal을 주는 block:
  - `local_discovery_trust`
  - `trust_ops_minimum`
  - `media_membership`
- discovery marketplace, paid community, sponsored ranking처럼 trust expectation이 category-level이면 block 이름을 explicit하게 남긴다

## Core Workflow

1. 시장 범위를 정의한다
2. direct competitor와 substitute를 나눈다
3. 주요 플레이어의 포지셔닝, 가격, 핵심 기능을 본다
4. source ref, observation date, geo, evidence type을 남긴다
5. UX 패턴, trust signals, freshness expectations를 정리한다
6. maps, reviews, community, social, content, workflow substitute까지 포함해 본다
7. switching cost, implementation model, compliance posture를 본다
8. demand proxy, why-now signal, channel feasibility, budget or WTP signal을 같이 본다
9. 과포화 영역과 빈틈을 나눈다

## Baseline Question Pack

- open: `사용자가 지금 실제로 비교하는 대안은 무엇입니까?`
- recent example: `최근 그 대안이 선택된 사례를 하나 설명할 수 있습니까?`
- workaround: `우리 제품이 없어도 지금은 어떻게 해결됩니까?`
- evidence: `수요가 있다고 볼 proxy는 무엇이며 언제 관찰했습니까?`
- disconfirming: `사실 이 시장이 너무 crowded거나 inertia가 너무 강한 근거는 무엇입니까?`
- stop: `category, substitute, switching cost, one wedge implication이 보이면 멈춘다`

## Must Capture

- market definition
- direct competitors
- substitutes
- market evidence brief
- competitive patterns
- trust and freshness expectations
- switching costs
- implementation and compliance notes
- auditable competitor row fields
- differentiation opportunities
- risks from incumbents
- active required modifier blocks that change trust, compliance, or expectation baseline

## Record Writes

- `facts`: category definition, demand proxies, competitor and substitute observations
- `open_questions`: unknowns that still block wedge or entry strategy
- `risks`: incumbent pressure, trust expectation, freshness, saturation, compliance risk
- `market_evidence_brief`
- `competitor_table`
- conditional when applicable: `local_discovery_trust`, `trust_ops_minimum`, `media_membership`

## Output

- `Market Evidence Brief`
- `Competitor Table`
- `Substitute Map`
- `Whitespace Summary`

## Quality Bar

- competitor feature list만 있으면 실패다
- switching cost와 trust expectation까지 보여야 한다
- public web면 SEO / local / directory pattern을 빼면 안 된다
- 관찰 근거와 관찰 시점이 없는 competitor row는 약하다

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

- wedge를 고를 때는 `positioning-strategy`
- data나 implementation pattern이 중요하면 `data-source-strategy`

## Backing Agents

- `market-competitor-researcher`
