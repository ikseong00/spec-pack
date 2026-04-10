---
name: experience-flow-design
description: Strengthen UX-IA with state visibility, trust placement, and flow-level design decisions.
---

# Experience Flow Design

## Purpose

planning의 흐름 문서를 design 단계의 flow contract로 끌어올린다.

## Use When

- flow는 있지만 state visibility가 약하다
- trust / recovery / empty / loading이 빠져 있다
- mobile / desktop / role 차이가 디자인에 영향을 준다

## Inputs

- existing `UX-IA.md`
- `PRD.md`
- `DESIGN.md` draft
- representative screens and critical states

## Contract

이 skill은 [DESIGN-SKILL-AGENT-CONTRACTS.md](../../references/DESIGN-SKILL-AGENT-CONTRACTS.md)를 따른다.

## Core Workflow

1. first-time / repeat / recovery flow를 다시 본다
2. mandatory discovery ladder로 must-visible signal과 critical non-happy-path state를 먼저 잠근다
3. first value moment와 핵심 user action을 더 분명히 한다
4. trust / error / empty / loading / permission / offline / review 상태를 보강한다
5. actor / permission / visibility / delegated access 차이를 적는다
6. navigation과 screen/page map을 design 관점으로 정리한다
7. notification, reminder, save/resume, moderation, enterprise/admin hierarchy가 shape를 바꾸면 explicit하게 적는다
8. device / role 차이가 shape를 바꾸면 explicit하게 적는다

## Must Capture

- first value moment
- first-time / repeat / recovery flow
- state visibility rule
- trust signal placement
- mobile vs desktop delta
- role or actor split
- permission or visibility split
- signal placement registry
- notification / reminder posture
- queue / lifecycle / approval / booking / recovery state when relevant

## Output

- updated `UX-IA.md`
- `Design Enrichment` section filled

## Quality Bar

- happy path만 있으면 불완전하다
- state coverage가 없으면 design 단계라고 볼 수 없다
- 어떤 화면이 핵심이고 어떤 순간에 사용자가 확신을 얻는지 보여야 한다
- delegated access, disclosure, moderation이 필요한 도메인에서 그 흐름이 빠지면 실패다

## Completion

- `## SKILL COMPLETE` 또는 `## SKILL BLOCKED`
- `recommended_next_skill`: `screen-spec-design`
