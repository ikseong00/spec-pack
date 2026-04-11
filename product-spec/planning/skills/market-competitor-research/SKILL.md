---
name: market-competitor-research
description: Summarize the market shape, direct alternatives, and competitive gaps that matter for product decisions.
---

# Market Competitor Research

## Purpose

Give planning a grounded view of the market, alternatives, and positioning pressure without turning research into a generic report.

## Use When

- the market context is still hand-wavy
- competitor claims are being made without structured evidence
- the team needs to know which alternatives users actually compare against

## Inputs

- planning record
- product thesis and user/problem framing
- known alternatives or named competitors

## Operating Boundary

This skill follows [SKILL-AGENT-CONTRACTS.md](../../references/SKILL-AGENT-CONTRACTS.md) and [PLANNING-STATE-CONTRACT.md](../../references/PLANNING-STATE-CONTRACT.md).

- Focus on decision-relevant research, not market trivia.
- Treat current alternatives as seriously as named competitors.
- Keep unsupported claims as assumptions or open questions.
- Do not imply differentiation where the evidence is weak.

## Core Workflow

1. Map the category, current alternatives, and real comparison set.
2. Summarize how users solve the problem today and what switching costs exist.
3. Capture the strongest competitor patterns, gaps, and proof points that matter.
4. Call out where the market looks crowded, weakly differentiated, or underserved.
5. Translate findings into planning implications instead of ending at research notes.
6. Recommend the next strategic skill if positioning or scope needs refinement.

## Must Capture

- competitor table
- current alternative map
- category framing
- relevant proof points and gaps
- planning implications

## Record Writes

- `market_evidence_brief`
- `competitor_table`
- `facts`, `assumptions`, and `open_questions`
- `next_step`

## Output

- `market_summary`
- `competitor_table`
- `positioning_implications`
- `planning_record_updates`
- `recommended_next_skill`

## Quality Bar

- The research should help a product decision, not just describe the market.
- Switching behavior and current alternatives matter more than vanity feature checklists.
- Differentiation claims should stay modest unless supported by real evidence.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: usually `positioning-strategy`, `mvp-scope`, or `planning-synthesis`
