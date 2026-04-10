---
name: design-synthesis
description: Merge visual direction, UX state design, and screen contracts into a stable design bundle for stitch and downstream handoff.
---

# Design Synthesis

## Purpose

design 결과를 reusable living document bundle로 고정한다.

## Use When

- design direction, flow, screen 정보가 흩어져 있다
- stitch / frontend / architecture가 바로 쓸 bundle이 필요하다
- design done criteria 충족 여부를 점검해야 한다

## Inputs

- `DESIGN.md` draft
- updated `UX-IA.md`
- updated `SCREEN-SPECS.md`
- active design constraints and open questions

## Contract

이 skill은 [DESIGN-SKILL-AGENT-CONTRACTS.md](../../references/DESIGN-SKILL-AGENT-CONTRACTS.md)를 따른다.

## Core Workflow

1. design outputs를 한 번에 읽는다
2. contradiction을 surfaced한다
3. `DESIGN.md`, `UX-IA.md`, `SCREEN-SPECS.md` 책임 범위를 정리한다
4. stitch prompt guide, screen priority, state priority가 충분한지 확인한다
5. phase memory snapshot을 남겨 stitch / frontend / architecture가 같은 질문을 반복하지 않게 한다
6. compliance self-check로 locked planning fact re-ask, vague generator rule, hidden blocker를 짧게 확인한다
7. [DESIGN-DONE-CRITERIA.md](../../references/DESIGN-DONE-CRITERIA.md)를 기준으로 hard gate를 점검한다
8. ready가 아니면 `not_ready_because`를 남긴다
9. provisional mode와 update path가 빠지지 않았는지 확인한다

## Must Capture

- final design bundle
- unresolved questions
- not ready reasons when applicable
- stitch readiness notes
- handoff notes for frontend / architecture
- update ownership notes
- phase memory snapshot
- compliance self-check

## Output

- `DESIGN.md`
- updated `UX-IA.md`
- updated `SCREEN-SPECS.md`
- `recommended_next_step`
- `phase_memory_snapshot`
- `compliance_self_check`
- `not_ready_because` when needed

## Quality Bar

- 세 문서가 서로 충돌하지 않아야 한다
- stitch prompt guide가 추상적인 미사여구 수준이면 실패다
- frontend / architecture가 다시 물어볼 질문이 많으면 실패다
- 어떤 변경이 오면 어느 문서를 먼저 고칠지 모르면 synthesis가 덜 끝난 상태다
- phase memory snapshot이 없어서 downstream consumer가 route를 다시 추측하면 실패다
- generator-facing rule이 still vague하면 실패다

## Completion

- `## SKILL COMPLETE` 또는 `## SKILL BLOCKED`
- `recommended_next_skill`: `design-pack-auditor` or next stage
