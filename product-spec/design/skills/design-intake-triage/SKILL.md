---
name: design-intake-triage
description: Route planning outputs into the design stage, confirm what is already locked, and identify the minimum unanswered design questions.
---

# Design Intake Triage

## Purpose

Open the design stage without re-asking locked planning facts and without starting from a blank aesthetic discussion.

## Use When

- planning is complete enough to enter design
- the team needs to know which questions still belong to design
- you want to confirm ownership before touching DESIGN.md, UX-IA.md, or SCREEN-SPECS.md

## Inputs

- `PROJECT-THESIS.md`
- `PRD.md`
- `UX-IA.md`
- `SCREEN-SPECS.md`
- `BUSINESS-OPS.md`
- `EXECUTION-HANDOFF.md`

## Operating Boundary

This skill follows [DESIGN-SKILL-AGENT-CONTRACTS.md](../../references/DESIGN-SKILL-AGENT-CONTRACTS.md).

- Do not reopen planning-owned facts unless an upstream contradiction appears.
- Treat design as translation, prioritization, and signal placement, not product rediscovery.
- Keep missing design inputs explicit and narrow.
- Respect shared document ownership.

## Core Workflow

1. Read the planning handoff packet and locked facts first.
2. Identify what design already inherits from planning.
3. List only the unanswered design decisions that still matter.
4. Route work into visual direction, flow design, screen contract design, or synthesis.
5. Mark anything still blocked by planning as not-ready instead of guessing.
6. Recommend the smallest next design step.

## Must Capture

- locked planning facts
- open design decisions
- shared-document ownership boundaries
- recommended next design skill

## Record Writes

- `open_questions`
- `next_step`
- `not_ready_because` when needed

## Output

- `design_intake_summary`
- `open_design_questions`
- `recommended_next_skill`

## Quality Bar

- A good intake should reduce re-ask drift, not create it.
- The next design action should be obvious after reading the result.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: one of `visual-direction-strategy`, `experience-flow-design`, `screen-spec-design`, or `design-synthesis`
