---
name: planning-synthesis
description: Merge discovery, research, strategy, scope, data, and viability outputs into a clear planning artifact with decisions and open questions separated.
---

# Planning Synthesis

## Purpose

Lock upstream planning work into a reusable living document bundle that downstream stages can trust.

## Use When

- discovery, research, strategy, and scope outputs exist but are still scattered
- decisions and unresolved questions are mixed together
- the next stage should not have to rediscover the same planning facts

## Inputs

- all previous planning skill outputs
- planning record
- active domain shape, route, modifiers, and compression contract
- owning source material for each core planning document

## Operating Boundary

This skill follows [SKILL-AGENT-CONTRACTS.md](../../references/SKILL-AGENT-CONTRACTS.md), [PLANNING-STATE-CONTRACT.md](../../references/PLANNING-STATE-CONTRACT.md), and [PLANNING-DONE-CRITERIA.md](../../references/PLANNING-DONE-CRITERIA.md).

- Do not fill unanswered required slots with guesses.
- Do not reopen answered or intentionally suppressed questions.
- Do not finalize decisions owned by another skill without the needed evidence.
- Keep route blockers, confidence, and evidence gaps visible.

## Core Workflow

1. Read all upstream planning outputs once and extract the durable signal.
2. Separate facts, assumptions, decisions, risks, and open questions.
3. Fix the domain shape snapshot, route state, and required modifier blocks.
4. Project the canonical planning record into the eight core planning documents.
5. Write metadata, ownership, update rules, and next-step clarity into every core document.
6. Run a short compliance self-check and stop with `not_ready_because` if hard gates still fail.

## Must Capture

- product thesis
- domain shape snapshot
- resolved route and stress signals
- target user and representative use cases
- MVP and first-value path
- data, rollout, and viability summary
- screen specs and execution handoff
- phase memory snapshot and compliance self-check

## Record Writes

- `facts`, `assumptions`, `decisions`, `open_questions`, and `risks`
- `next_step`
- `domain_shape_snapshot`
- `workflow_contract` when applicable
- `screen_specs`
- `execution_handoff`
- `business_viability_snapshot`
- `one-page core artifact`

## Output

- `PROJECT-THESIS.md`
- `PLANNING-RECORD.md`
- `RESEARCH.md`
- `PRD.md`
- `UX-IA.md`
- `SCREEN-SPECS.md`
- `BUSINESS-OPS.md`
- `EXECUTION-HANDOFF.md`
- `phase_memory_snapshot`
- `compliance_self_check`
- `recommended_next_step`

## Quality Bar

- Reusable handoff beats pretty summary language.
- The eight core documents, metadata, and traceability must all exist.
- If required gates or owner-sensitive fields are still missing, the result is not done.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: usually a final planning audit, design intake, or a blocking upstream skill
