---
name: hypothesis-validation
description: Identify the riskiest product assumptions and define the fastest credible path to validate or disprove them.
---

# Hypothesis Validation

## Purpose

Turn vague confidence into explicit hypotheses, evidence quality, and the next validation move.

## Use When

- the product direction still depends on major assumptions
- confidence feels higher than the evidence really supports
- the team needs to decide what must be validated before scope freeze or implementation

## Inputs

- planning record
- current assumptions, evidence, and unresolved questions
- recent examples or observed user behavior when available

## Operating Boundary

This skill follows [SKILL-AGENT-CONTRACTS.md](../../references/SKILL-AGENT-CONTRACTS.md) and [PLANNING-STATE-CONTRACT.md](../../references/PLANNING-STATE-CONTRACT.md).

- Do not upgrade a belief into evidence-backed truth.
- Label weak support honestly with low confidence or open questions.
- Keep the next validation move narrow and testable.
- Do not reopen already-resolved questions unless the route changed.

## Core Workflow

1. List the riskiest assumptions shaping the route, scope, or viability of the product.
2. Separate assumptions about problem intensity, user behavior, distribution, pricing, and operations.
3. Rate the current evidence for each one and identify the highest-risk gap.
4. Define the smallest credible validation move that could change the decision.
5. Capture what success, failure, and ambiguous results would mean.
6. Recommend the next skill or experiment based on the most dangerous unresolved assumption.

## Must Capture

- hypothesis register
- evidence strength per assumption
- highest-risk unresolved assumption
- validation method and threshold
- decision impact if disproved

## Record Writes

- `hypothesis_register`
- `facts`, `assumptions`, and `open_questions`
- `next_step`
- `risks`

## Output

- `hypothesis_summary`
- `validation_plan`
- `planning_record_updates`
- `recommended_next_skill`

## Quality Bar

- Hypotheses should be specific enough that a failed result would change a real decision.
- Validation steps should be smaller than implementation whenever possible.
- The output should make uncertainty easier to act on, not easier to ignore.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: usually `problem-validation`, `user-research-analysis`, or `planning-synthesis`
