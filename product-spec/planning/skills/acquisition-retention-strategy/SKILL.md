---
name: acquisition-retention-strategy
description: Design the initial acquisition, activation, and retention path for a website or SaaS product so the plan is viable before implementation.
---

# Acquisition Retention Strategy

## Purpose

Define how the product gets its first users, what counts as activation, and what creates repeat usage or re-engagement.

## Use When

- the product value is becoming clearer but the growth path is still vague
- acquisition and retention questions keep getting deferred to the end of planning
- you need a realistic first-customer path instead of generic growth talk

## Inputs

- current planning record
- problem and user evidence gathered so far
- active domain shape, modifiers, and compression contract
- existing assumptions about acquisition, activation, or retention

## Operating Boundary

This skill follows [SKILL-AGENT-CONTRACTS.md](../../references/SKILL-AGENT-CONTRACTS.md) and [PLANNING-STATE-CONTRACT.md](../../references/PLANNING-STATE-CONTRACT.md).

- Do not invent a growth motion without concrete evidence or a clearly labeled assumption.
- Stop with `NEEDS_CONTEXT` if core prerequisites are still missing.
- Do not reopen already answered or intentionally suppressed questions.
- Do not finalize adjacent decisions owned by another skill.

## Core Workflow

1. Confirm the active shape, modifiers, and gating blocks that affect growth or re-engagement.
2. Identify the first customer or lead path and the primary acquisition motion.
3. Define the activation event, time-to-first-value, and one supporting guardrail metric.
4. Define the repeat-use, reactivation, or upgrade loop that keeps the product alive after first use.
5. Capture the owner, asset, cadence, threshold, and evidence behind the chosen motion.
6. Leave unsupported or weak paths as assumptions or open questions instead of overcommitting.

## Must Capture

- primary acquisition motion
- first customer path
- activation event and first value moment
- retention or re-engagement loop
- channel plausibility evidence
- owner, asset, cadence, and threshold
- guardrail and failure signals

## Record Writes

- `metric_hierarchy`
- `commercial_model` when relevant
- `rollout_plan` when channel ownership matters
- `consumer_evidence_gate` or related modifier blocks when applicable
- `open_questions`, `risks`, and `next_step`

## Output

- `acquisition_retention_brief`
- `activation_definition`
- `retention_loop_summary`
- `planning_record_updates`
- `recommended_next_skill`

## Quality Bar

- A channel is not acceptable if it only sounds plausible but has no near-term path to evidence.
- Retention cannot be left as a vague hope unless the product is intentionally one-shot and that is explicit.
- The result should make it obvious how the first 10 users, leads, or accounts could realistically happen.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: usually `monetization-strategy`, `stakeholder-rollout-strategy`, or `planning-synthesis`
