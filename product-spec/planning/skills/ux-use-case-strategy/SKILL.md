---
name: ux-use-case-strategy
description: Define the representative use cases, first-time path, repeat path, and flow structure that planning and design will build on.
---

# UX Use Case Strategy

## Purpose

Turn the product thesis into concrete user jobs, flows, and use-case cards that downstream documents can reuse.

## Use When

- the core use cases are still vague or too broad
- planning needs clearer flow structure before screen specs or design
- the first-time and repeat paths are not yet separated

## Inputs

- planning record
- product thesis and problem framing
- known user patterns, jobs, or workflow assumptions

## Operating Boundary

This skill follows [SKILL-AGENT-CONTRACTS.md](../../references/SKILL-AGENT-CONTRACTS.md) and [PLANNING-STATE-CONTRACT.md](../../references/PLANNING-STATE-CONTRACT.md).

- Keep use cases tied to actual user jobs, not abstract feature wishlists.
- Separate first-time, repeat, recovery, and operator-visible flows when needed.
- Do not invent product states that the planning record cannot support.
- Keep the flow model compatible with downstream UX-IA and screen specs.

## Core Workflow

1. Identify the primary user jobs and representative use cases.
2. Define the first-time, repeat, and recovery flow structure.
3. Capture the main trigger, action path, and visible outcome for each key use case.
4. Link flows back to must-have scope and owner-sensitive rules where relevant.
5. Write stable use-case and flow identifiers for downstream reuse.
6. Recommend the next skill if validation, scope, or synthesis is still missing.

## Must Capture

- representative use cases
- first-time flow
- repeat flow
- recovery or detour flow when applicable
- stable flow and use-case IDs

## Record Writes

- `use_case_cards`
- `screen_specs` when flow implications are clear
- `facts`, `decisions`, `open_questions`, and `next_step`

## Output

- `use_case_strategy`
- `flow_summary`
- `planning_record_updates`
- `recommended_next_skill`

## Quality Bar

- Use cases should be specific enough to guide downstream screens and state coverage.
- The result should make the main path and the edge path easier to see, not blurrier.
- Flow IDs and use-case IDs should be stable enough for later docs to reuse.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: usually `mvp-scope`, `planning-synthesis`, or design intake
