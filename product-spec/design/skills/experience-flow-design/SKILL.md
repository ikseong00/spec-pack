---
name: experience-flow-design
description: Translate the product behavior into first-time, repeat, recovery, and state-aware UX flow design.
---

# Experience Flow Design

## Purpose

Turn planning behavior into usable flows, state visibility, and trust-sensitive experience structure.

## Use When

- flow logic exists in planning but needs design-level translation
- first-time, repeat, or recovery flows are still under-specified
- state visibility or trust signaling is becoming a design concern

## Inputs

- planning-owned `UX-IA.md`
- screen and state implications from `SCREEN-SPECS.md`
- business ops and trust constraints when relevant

## Operating Boundary

This skill follows [DESIGN-SKILL-AGENT-CONTRACTS.md](../../references/DESIGN-SKILL-AGENT-CONTRACTS.md).

- Do not invent behavior that planning has not authorized.
- Focus on flow translation, state visibility, and recovery clarity.
- Keep trust, error, loading, and recovery visible when they matter.
- Treat flow drift across shared docs as a real issue.

## Core Workflow

1. Read the current flow and state contract.
2. Separate first-time, repeat, recovery, and detour paths where needed.
3. Define the visibility and trust signals the user must encounter in each path.
4. Write the changes into design-enriched UX-IA.
5. Call out unresolved state or trust questions.
6. Recommend the next design step or synthesis.

## Must Capture

- first-time flow
- repeat flow
- recovery and detour path
- state visibility expectations
- trust or disclosure placement notes

## Record Writes

- updated `UX-IA.md`
- `open_questions`
- `recommended_next_step`

## Output

- `ux_flow_update`
- `state_visibility_notes`
- `recommended_next_skill`

## Quality Bar

- Happy-path-only flow work is incomplete.
- The result should clarify what users see and when, especially around trust-sensitive states.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: `screen-spec-design` or `design-synthesis`
