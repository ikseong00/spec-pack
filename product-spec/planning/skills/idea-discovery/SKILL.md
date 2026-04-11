---
name: idea-discovery
description: Clarify the core user, problem, context, and current alternative so the rest of planning starts from a precise product idea instead of loose brainstorming.
---

# Idea Discovery

## Purpose

Turn a rough idea into a sharp starting point with a user, a problem, a context, and a current alternative.

## Use When

- the idea is still fuzzy or over-broad
- user, problem, and solution language are mixed together
- you need a clean entry point for the rest of planning

## Inputs

- founder idea dump or conversation notes
- any existing use case clues or recent examples
- planning record if one already exists

## Operating Boundary

This skill follows [SKILL-AGENT-CONTRACTS.md](../../references/SKILL-AGENT-CONTRACTS.md) and [PLANNING-STATE-CONTRACT.md](../../references/PLANNING-STATE-CONTRACT.md).

- Do not pretend a rough idea is already validated.
- Separate facts, hopes, and guesses from the start.
- Keep questions focused on reducing ambiguity rather than exploring everything at once.
- Do not over-expand scope before the primary user and problem are clear.

## Core Workflow

1. Identify the primary user or buyer first.
2. Write the core problem, moment of need, and current alternative in plain language.
3. Capture one representative use case and one recent concrete example when possible.
4. Choose the first question that reduces the most ambiguity.
5. Recommend the likely work shape, surface model, loop model, and modifiers without overcommitting.
6. Write the results into the planning record so downstream steps do not restart discovery.

## Must Capture

- primary user
- problem statement
- moment of need
- current alternative
- representative use case
- next discovery question

## Record Writes

- `facts`, `assumptions`, and `open_questions`
- `user_model`
- `use_case_cards`
- `recent_examples` when available
- `domain_shape_snapshot` and `next_step`

## Output

- `discovery_summary`
- `representative_use_cases`
- `next_question`
- `planning_record_updates`
- `recommended_next_skill`

## Quality Bar

- The primary user and problem should be concrete enough that the next skill can continue without rediscovery.
- The result should narrow the idea instead of multiplying feature ideas.
- Weak evidence should stay visible rather than being polished away.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: usually `problem-validation`, `user-research-analysis`, or `market-competitor-research`
