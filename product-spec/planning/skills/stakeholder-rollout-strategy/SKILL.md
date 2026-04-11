---
name: stakeholder-rollout-strategy
description: Define rollout owners, stakeholder dependencies, and the path from first use to broader adoption when operational coordination matters.
---

# Stakeholder Rollout Strategy

## Purpose

Make rollout, operational ownership, and stakeholder coordination explicit before implementation starts.

## Use When

- adoption depends on internal operators, external stakeholders, or rollout gates
- the product has enterprise, pilot, regulated, or service-heavy shape
- operations and adoption are tightly coupled

## Inputs

- planning record
- known stakeholder map and dependencies
- current rollout assumptions or manual operations

## Operating Boundary

This skill follows [SKILL-AGENT-CONTRACTS.md](../../references/SKILL-AGENT-CONTRACTS.md) and [PLANNING-STATE-CONTRACT.md](../../references/PLANNING-STATE-CONTRACT.md).

- Do not treat rollout as a generic launch checklist.
- Keep operational owner, escalation, and manual dependency visible.
- Do not hide stakeholder risk if adoption depends on non-user actors.
- Leave unresolved policy or owner questions explicit.

## Core Workflow

1. Identify the rollout unit, adoption sequence, and responsible stakeholders.
2. Capture manual operations, approvals, and dependencies that gate broader rollout.
3. Define the smallest viable rollout path and the stop condition for expansion.
4. Document who owns the next step if rollout stalls.
5. Project the outcome into business ops and execution handoff as needed.
6. Recommend the next skill if trust, pricing, or scope still blocks rollout.

## Must Capture

- stakeholder map
- rollout unit and sequence
- manual operations and approvals
- dependency and escalation notes
- expansion stop condition

## Record Writes

- `rollout_plan`
- `dependency_register`
- `manual_operations`
- `open_questions`, `risks`, and `next_step`

## Output

- `rollout_summary`
- `stakeholder_map`
- `rollout_risk_note`
- `planning_record_updates`
- `recommended_next_skill`

## Quality Bar

- The rollout path should explain who has to say yes and what can block progress.
- Manual operations cannot stay implicit if they shape adoption or reliability.
- A rollout that depends on undefined owners is not complete.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: usually `planning-synthesis`, `mvp-scope`, or `monetization-strategy`
