---
name: screen-spec-design
description: Upgrade SCREEN-SPECS into a usable design contract with priorities, states, and trust/status signal placement.
---

# Screen Spec Design

## Purpose

각 화면/페이지를 실제 design handoff에 쓸 수 있는 screen contract로 강화한다.

## Use When

- 화면 목록은 있지만 우선순위와 상태가 약하다
- stitch나 디자이너가 화면을 만들 때 기준이 부족하다
- 핵심 CTA와 signal placement가 모호하다

## Inputs

- existing `SCREEN-SPECS.md`
- `UX-IA.md`
- `DESIGN.md`
- `PRD.md`

## Contract

이 skill은 [DESIGN-SKILL-AGENT-CONTRACTS.md](../../references/DESIGN-SKILL-AGENT-CONTRACTS.md)를 따른다.

## Core Workflow

1. 핵심 화면 3-7개를 우선순위로 정리한다
2. 각 화면의 `screen_id`, 목적, primary actor를 분명히 한다
3. main sections, primary CTA, state, edge case를 보강한다
4. `must-render states`, `primary decision or confirmation`, `trust or proof signals`를 적는다
5. visual priority와 layout mode를 명시한다
6. signal placement, freshness, audience boundary, irreversible action note를 명시한다
7. device variant나 dense-data mode가 필요한지 표시한다

## Must Capture

- screen purpose
- main sections
- primary CTA
- states
- edge cases
- dependencies
- visual priority
- layout mode
- device variant notes
- required trust or status signals
- proof or evidence surface
- freshness or last updated rule
- audience or visibility boundary
- acknowledgment or irreversible action notes
- design notes

## Output

- updated `SCREEN-SPECS.md`

## Quality Bar

- section list만 있고 목적/상태가 없으면 실패다
- stitch가 이 문서를 보고 화면을 만들 수 있어야 한다
- user trust를 좌우하는 signal이 어디 있는지 보여야 한다
- screen name만 있고 stable `screen_id`가 없으면 handoff quality가 약하다고 본다

## Completion

- `## SKILL COMPLETE` 또는 `## SKILL BLOCKED`
- `recommended_next_skill`: `design-synthesis`
