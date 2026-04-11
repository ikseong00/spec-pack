---
name: visual-direction-strategy
description: Translate the product personality, trust requirements, and use context into a coherent visual direction and design system starting point.
---

# Visual Direction Strategy

## Purpose

Turn product meaning into a visual system direction that supports trust, hierarchy, and differentiation.

## Use When

- the product is defined but the visual direction still feels generic or vague
- references exist but the actual direction is not yet clear
- the team needs a stable design system starting point

## Inputs

- planning outputs and design intake summary
- known references, constraints, and product context
- state and trust requirements that should affect the visual system

## Operating Boundary

This skill follows [DESIGN-SKILL-AGENT-CONTRACTS.md](../../references/DESIGN-SKILL-AGENT-CONTRACTS.md).

- Do not stop at mood-board language.
- Tie visual direction to product meaning, trust, and usage context.
- Closed tokens and generator rules should stay explicit.
- Avoid generic AI design drift.

## Core Workflow

1. Define the visual thesis and atmosphere.
2. Translate it into color, type, spacing, depth, motion, and component rules.
3. Capture what should never drift or become generic.
4. Write a stitch-friendly prompt guide and token table.
5. Call out unresolved visual risks or missing evidence.
6. Recommend screen or synthesis work next.

## Must Capture

- visual thesis
- palette and typography direction
- spacing, radius, and depth rules
- anti-slop rules
- stitch prompt guidance

## Record Writes

- `DESIGN.md`
- `open_questions`
- `recommended_next_step`

## Output

- `visual_direction_summary`
- `design_system_seed`
- `recommended_next_skill`

## Quality Bar

- The output should feel product-specific, not like default SaaS styling.
- Generators should have enough rules to build from without inventing the system.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: `experience-flow-design`, `screen-spec-design`, or `design-synthesis`
