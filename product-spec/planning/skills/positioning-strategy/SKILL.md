---
name: positioning-strategy
description: Define the product wedge, switching reason, and category story so the plan can explain why users should choose this product now.
---

# Positioning Strategy

## Purpose

Turn vague differentiation into a focused wedge, a switching reason, and a credible message.

## Use When

- the product sounds useful but not distinct
- the target feels too broad or generic
- the plan needs a tighter wedge before scope or design hardens

## Inputs

- planning record
- market and competitor research when available
- problem and user framing
- known proof points or recent examples

## Operating Boundary

This skill follows [SKILL-AGENT-CONTRACTS.md](../../references/SKILL-AGENT-CONTRACTS.md) and [PLANNING-STATE-CONTRACT.md](../../references/PLANNING-STATE-CONTRACT.md).

- Do not claim differentiation without proof or a clearly labeled assumption.
- Keep the anti-target visible; positioning is incomplete if it tries to be for everyone.
- Prefer a narrow but strong wedge to a wide but weak message.
- Do not hide the trade-offs the wedge creates.

## Core Workflow

1. Narrow the primary target and the beachhead use case.
2. Define the current alternative and the switch reason.
3. Write the category frame, positioning line, and proof points.
4. Capture anti-targets, trade-offs, and why-now logic.
5. Project only the parts that change downstream planning decisions.
6. Recommend the next skill if scope, viability, or growth still needs revision.

## Must Capture

- primary wedge
- switch reason
- category framing
- proof points
- anti-targets
- why-now rationale

## Record Writes

- `facts`, `assumptions`, and `decisions`
- `open_questions` for weak proof areas
- `next_step`

## Output

- `positioning_summary`
- `switch_reason`
- `message_direction`
- `planning_record_updates`
- `recommended_next_skill`

## Quality Bar

- A good result explains why someone would switch, not just why the product is good.
- If anti-targets are missing, the wedge is probably still too broad.
- Proof and message should not contradict each other.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: usually `mvp-scope`, `market-competitor-research`, or `planning-synthesis`
