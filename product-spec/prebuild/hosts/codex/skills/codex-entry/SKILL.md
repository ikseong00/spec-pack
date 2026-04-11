---
name: codex-entry
description: Codex-specific entry wrapper for the unified spec pack. Routes to shared references and the lean authoring surface without changing canonical service-spec truth.
---

# Codex Entry

## Purpose

Provide a light Codex-specific starting wrapper for the shared product-spec surface without changing canonical service-spec meaning.

## Use When

- you want to start the full planning -> design -> rough architecture flow from Codex
- you want a Codex-specific entry point without re-explaining the shared layer
- you want a quick pointer to the core planning, design, and audit surfaces

## Read First

1. [../../../../references/START-HERE.md](../../../../references/START-HERE.md)
2. [../../../../references/PLANNING-TO-DESIGN-HANDOFF.md](../../../../references/PLANNING-TO-DESIGN-HANDOFF.md)
3. [../../HOST-OVERLAY-MATRIX.md](../../HOST-OVERLAY-MATRIX.md)
4. [../../README.md](../../README.md)

## Operating Boundary

This skill follows the shared product-spec references and Codex runtime supplements.

- Read root `AGENTS.md` and `.codex/AGENTS.md` as runtime supplements.
- Use the shared `START-HERE` as the canonical route chooser.
- Act as a wrapper only; do not redefine shared doc meaning.

## Core Workflow

1. Read the shared entry references first.
2. Keep route choice in the shared layer.
3. Point the operator toward the most useful next shared skill or agent.
4. Use the Codex overlay only to simplify runtime entry.

## Must Capture

- selected route
- shared docs to touch
- recommended skills or agents
- why the Codex overlay helped

## Record Writes

- `selected_route`
- `recommended_skills_or_agents`

## Output

- `selected_route`
- `selected_weight`
- `shared_docs_to_touch`
- `recommended_skills_or_agents`
- `why_codex_overlay_helped`

## Quality Bar

- This wrapper should reduce friction without creating a second canonical workflow.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: typically `product-spec-planning-synthesis`, `product-spec-design-synthesis`, or a final audit agent
