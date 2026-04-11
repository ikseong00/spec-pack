---
name: screen-spec-design
description: Turn planning and flow decisions into screen-level design contracts with purpose, sections, states, and signal placement.
---

# Screen Spec Design

## Purpose

Make each screen concrete enough that stitch, designers, and frontend can see what must be shown and what action each screen exists to support.

## Use When

- screen definitions are still thin or inconsistent
- must-render states and signal placement are not yet explicit
- the team needs screen contracts before synthesis or handoff

## Inputs

- `SCREEN-SPECS.md` draft
- current `UX-IA.md`
- design direction and trust/state priorities

## Operating Boundary

This skill follows [DESIGN-SKILL-AGENT-CONTRACTS.md](../../references/DESIGN-SKILL-AGENT-CONTRACTS.md).

- Keep the screen contract tied to flow ownership and must-have scope.
- Do not leave key state or signal placement implied.
- Do not rename the same screen across documents.
- Prefer precise screen purpose over feature-list prose.

## Core Workflow

1. Confirm the screen set and stable screen IDs.
2. Write each screen purpose, core sections, CTA, and must-render states.
3. Capture signal placement, role variants, blocked states, and recovery entry points.
4. Record device notes and visual priority when they matter.
5. Write unresolved screen contract issues explicitly.
6. Recommend synthesis or follow-up flow work.

## Must Capture

- screen purpose
- sections and CTA
- must-render states
- signal placement
- role variants and recovery entry
- visual priority and device notes

## Record Writes

- updated `SCREEN-SPECS.md`
- `open_questions`
- `recommended_next_step`

## Output

- `screen_contract_update`
- `must_render_state_notes`
- `recommended_next_skill`

## Quality Bar

- Screen contracts should be buildable by humans and generators alike.
- If a key state or disclosure would still have to be guessed, the screen spec is not done.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: `design-synthesis` or a focused flow/visual pass
