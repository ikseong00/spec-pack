---
name: data-source-strategy
description: Define the data sources, source-of-truth boundaries, and operational risks the product depends on before implementation starts.
---

# Data Source Strategy

## Purpose

Make data dependencies explicit early enough to judge realism, risk, and operational load before the team starts building.

## Use When

- product value depends on external or structured data
- the team is still unclear whether data should come from direct entry, partners, public sources, or APIs
- the product cannot deliver value without trustworthy, fresh, or moderated data

## Inputs

- current planning record
- use cases and workflow assumptions
- known external systems or integrations
- modifier blocks that affect trust, policy, privacy, or platform constraints

## Operating Boundary

This skill follows [SKILL-AGENT-CONTRACTS.md](../../references/SKILL-AGENT-CONTRACTS.md) and [PLANNING-STATE-CONTRACT.md](../../references/PLANNING-STATE-CONTRACT.md).

- Do not guess missing source-of-truth boundaries.
- Call out manual operations, reconciliation, or policy risk explicitly instead of hiding them.
- Do not turn a weak source into a canonical source without evidence.
- Leave unresolved authority or policy boundaries as open questions.

## Core Workflow

1. List the product entities and signals that matter for value delivery.
2. Identify candidate sources for each entity and compare direct input, external APIs, partnerships, and public sources.
3. Decide which source is canonical, which is derived, and which only supports ranking or trust.
4. Capture freshness, reliability, attribution, retention, consent, export, and deletion concerns.
5. Document the operational owner, manual fallback, and failure mode for each critical dependency.
6. Write unresolved authority or policy questions into the planning record instead of smoothing them over.

## Must Capture

- data source inventory
- source-of-truth boundary
- freshness and reliability expectations
- manual operation or moderation path
- policy, trust, or legal risk notes
- dependency and controls summary

## Record Writes

- `data_dependencies`
- `source_of_truth_map`
- `manual_operations`
- `dependency_register`
- `controls_register`
- `open_questions`, `risks`, and `next_step`

## Output

- `data_source_inventory`
- `source_of_truth_summary`
- `dependency_risk_note`
- `planning_record_updates`
- `recommended_next_skill`

## Quality Bar

- The answer must separate canonical records from supporting or provisional sources.
- Operational burden must be visible if the product depends on manual fixes, moderation, or partner coordination.
- A high-risk data dependency cannot be marked complete just because the source exists in theory.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: usually `stakeholder-rollout-strategy`, `problem-validation`, or `planning-synthesis`
