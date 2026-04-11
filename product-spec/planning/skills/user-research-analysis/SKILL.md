---
name: user-research-analysis
description: Turn interviews, observations, and user notes into durable insights, evidence quality, and next planning implications.
---

# User Research Analysis

## Purpose

Make user evidence reusable by turning raw conversations and notes into structured insights and implications.

## Use When

- interview or observation data exists but is still messy
- the team keeps citing user conversations without extracting reusable signal
- planning needs stronger evidence from actual users

## Inputs

- interview notes or transcripts
- observation notes
- planning record and current hypotheses

## Operating Boundary

This skill follows [SKILL-AGENT-CONTRACTS.md](../../references/SKILL-AGENT-CONTRACTS.md) and [PLANNING-STATE-CONTRACT.md](../../references/PLANNING-STATE-CONTRACT.md).

- Do not treat one quote as universal truth.
- Keep raw user signal separate from interpretation.
- Call out gaps in sample quality or recency.
- Translate evidence into planning implications, not just observations.

## Core Workflow

1. Read the user material once and extract recurring patterns.
2. Separate observed behavior, quoted language, and inferred implications.
3. Map findings back to problem, workaround, use case, and hypothesis gaps.
4. Call out sample weakness, missing segments, or evidence bias.
5. Write only the durable user signal into the planning record.
6. Recommend the next validation or synthesis step.

## Must Capture

- core user patterns
- evidence-backed quotes or observations
- sample quality and gaps
- planning implications
- remaining unknowns

## Record Writes

- `facts`, `assumptions`, and `open_questions`
- `user_model`
- `use_case_cards` when affected
- `next_step`

## Output

- `user_research_summary`
- `pattern_list`
- `evidence_quality_note`
- `planning_record_updates`
- `recommended_next_skill`

## Quality Bar

- Evidence should stay tied to actual observed behavior or direct user language.
- The output should reduce rediscovery in later planning work.
- Sample weakness should be visible instead of hidden under confident wording.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: usually `problem-validation`, `hypothesis-validation`, or `planning-synthesis`
