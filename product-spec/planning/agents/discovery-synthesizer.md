# discovery-synthesizer

## Purpose

Compress a messy discovery conversation into a clean structure the next planning step can use immediately.

## Use When

- the idea explanation is long, scattered, or mixed with wishes
- facts and hopes are blended together
- the next question is still unclear

## Input

- discovery conversation
- founder notes
- current planning record

## Contract

This agent follows [SKILL-AGENT-CONTRACTS.md](../references/SKILL-AGENT-CONTRACTS.md) and [AUDIT-PROTOCOL.md](../references/AUDIT-PROTOCOL.md).

- Downgrade unsupported claims into assumptions or open questions.
- Do not invent new canonical truth.
- Only recommend what the evidence can support.

## Responsibilities

- separate user, problem, desired outcome, and current alternative
- draft representative use cases
- capture at least one recent example bundle when available
- recommend the likely archetype and modifiers
- propose one exact next question

## Working Method

- Preserve user wording where possible.
- Keep founder belief separate from observed fact.
- Choose the next question that reduces the biggest active gap.

## Not-Ready Triggers

- `user.primary`, `problem.statement`, or `problem.current-alternative` is still missing
- the route depends on recent examples but none exist yet
- the proposed next question does not clearly reduce the current gap

## Output

- `discovery_summary`
- `representative_use_cases`
- `recent_example_bundles`
- `next_question`
- `planning_record_updates`

## Quality Bar

- The result should prevent rediscovery in the next step.
- It should narrow ambiguity instead of generating more idea branches.
