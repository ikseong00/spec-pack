---
name: design-synthesis
description: Merge visual direction, UX state design, and screen contracts into a stable design bundle for stitch and downstream handoff.
---

# Design Synthesis

## Purpose

Lock design outputs into a reusable bundle that stitch, frontend, and architecture can all consume without reopening the same questions.

## Use When

- design direction, flow logic, and screen contracts are still scattered
- you need a stable bundle for stitch or downstream handoff
- you need to judge whether the design stage actually meets the done criteria

## Inputs

- `DESIGN.md` draft
- updated `UX-IA.md`
- updated `SCREEN-SPECS.md`
- active design constraints and unresolved questions

## Operating Boundary

This skill follows [DESIGN-SKILL-AGENT-CONTRACTS.md](../../references/DESIGN-SKILL-AGENT-CONTRACTS.md) and [DESIGN-DONE-CRITERIA.md](../../references/DESIGN-DONE-CRITERIA.md).

- Do not hide contradictions between the three core design documents.
- Do not mark the bundle ready if stitch guidance is still vague.
- Keep update ownership clear across documents.
- Do not reopen locked planning facts without a real upstream conflict.

## Core Workflow

1. Read the three core design outputs together.
2. Surface contradictions or ownership drift.
3. Confirm screen priority, state priority, and stitch guidance completeness.
4. Write a short phase memory snapshot for downstream users.
5. Run a compact compliance self-check.
6. Leave `not_ready_because` if the hard gate is still open.

## Must Capture

- final design bundle
- stitch readiness notes
- frontend and architecture handoff notes
- update ownership notes
- phase memory snapshot
- compliance self-check

## Record Writes

- `DESIGN.md`
- updated `UX-IA.md`
- updated `SCREEN-SPECS.md`
- `open_questions` and `not_ready_because` when needed

## Output

- `DESIGN.md`
- updated `UX-IA.md`
- updated `SCREEN-SPECS.md`
- `phase_memory_snapshot`
- `recommended_next_step`

## Quality Bar

- The three documents must agree on ownership and intent.
- Stitch rules must be generator-facing, not poetic.
- Downstream teams should know what to update first when change requests arrive.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: `design-pack-auditor` or the next stage handoff
