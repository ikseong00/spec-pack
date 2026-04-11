---
name: monetization-strategy
description: Define the commercial model, pricing boundary, and value exchange when monetization is relevant to the product.
---

# Monetization Strategy

## Purpose

Make the revenue logic explicit enough that scope, rollout, and value exchange stay coherent.

## Use When

- the product needs a credible pricing or monetization direction
- commercial assumptions are affecting scope or positioning
- buyer and user are different or revenue depends on operational constraints

## Inputs

- planning record
- current product thesis and target user
- known commercial constraints or buyer signals

## Operating Boundary

This skill follows [SKILL-AGENT-CONTRACTS.md](../../references/SKILL-AGENT-CONTRACTS.md) and [PLANNING-STATE-CONTRACT.md](../../references/PLANNING-STATE-CONTRACT.md).

- Do not force monetization depth when it is irrelevant to the current product stage.
- Separate pricing guesses from evidence-backed commercial signals.
- Capture who pays, why they pay, and when revenue should matter.
- Do not hide policy, operational, or trust constraints that shape monetization.

## Core Workflow

1. Decide whether monetization is in-scope now, later, or intentionally deferred.
2. Define the buyer, paid moment, value exchange, and pricing boundary.
3. Capture pricing logic, packaging direction, and what would trigger a paid decision.
4. Call out operational dependencies or policy risks that affect revenue.
5. Keep unsupported commercial claims as assumptions.
6. Project only decision-relevant monetization notes into the planning record.

## Must Capture

- buyer and payer model
- pricing boundary
- paid trigger or commercial milestone
- commercial risks and assumptions
- relevance to current scope

## Record Writes

- `commercial_model`
- `business_viability_snapshot` when needed
- `open_questions`, `risks`, and `next_step`

## Output

- `commercial_summary`
- `pricing_boundary_note`
- `planning_record_updates`
- `recommended_next_skill`

## Quality Bar

- The output should explain who pays and why, not just list pricing ideas.
- The monetization path should not conflict with the stated first-value path.
- Commercial detail should stay proportional to the product stage.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: usually `stakeholder-rollout-strategy`, `mvp-scope`, or `planning-synthesis`
