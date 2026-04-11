---
name: problem-validation
description: Validate whether the problem is real, frequent, painful, and worth solving now for the chosen user.
---

# Problem Validation

## Purpose

Decide whether the problem is strong enough and current enough to justify the product direction.

## Use When

- the team has a product idea but weak confidence in the underlying problem
- recent examples, workarounds, or current alternatives are still thin
- planning needs a stronger problem case before locking scope or design

## Inputs

- planning record
- discovery summary and recent examples
- problem statements and alternative paths already discussed

## Operating Boundary

This skill follows [SKILL-AGENT-CONTRACTS.md](../../references/SKILL-AGENT-CONTRACTS.md) and [PLANNING-STATE-CONTRACT.md](../../references/PLANNING-STATE-CONTRACT.md).

- Do not confuse desire for the idea with evidence of the problem.
- Use recent, concrete examples whenever possible.
- Call out weak frequency or urgency honestly.
- Stop with `NEEDS_CONTEXT` if the required problem slots are still missing.

## Core Workflow

1. Restate the problem in concrete user language.
2. Check frequency, pain, urgency, and current workaround behavior.
3. Capture the cost of leaving the problem unsolved.
4. Separate evidence from assumptions and from founder hopes.
5. Write the biggest unresolved problem-risk gap into the record.
6. Recommend the next validation or synthesis step based on the strongest remaining uncertainty.

## Must Capture

- problem statement
- problem frequency and urgency
- current workaround or alternative
- recent example set
- evidence strength

## Record Writes

- `facts`, `assumptions`, and `open_questions`
- `recent_examples`
- `problem_validation_summary`
- `next_step`

## Output

- `problem_validation_summary`
- `evidence_gaps`
- `planning_record_updates`
- `recommended_next_skill`

## Quality Bar

- A validated problem should be grounded in present behavior, not just abstract agreement.
- If the current workaround is weakly understood, the problem is usually still under-validated.
- The output should make problem strength easier to judge, not easier to romanticize.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: usually `hypothesis-validation`, `user-research-analysis`, or `planning-synthesis`
