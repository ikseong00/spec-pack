---
name: mvp-scope
description: Cut scope down to the minimum product needed to prove value without hiding required controls or operational realities.
---

# MVP Scope

## Purpose

Leave only the smallest buildable scope that can prove value and support the intended first-value path.

## Use When

- scope is expanding faster than evidence
- must-have and nice-to-have are getting mixed together
- the team needs a keep/defer/cut decision before moving forward

## Inputs

- planning record
- use cases, value path, and current assumptions
- operational or control requirements already discovered

## Operating Boundary

This skill follows [SKILL-AGENT-CONTRACTS.md](../../references/SKILL-AGENT-CONTRACTS.md) and [PLANNING-STATE-CONTRACT.md](../../references/PLANNING-STATE-CONTRACT.md).

- Judge scope by value proof, not by how attractive a feature sounds.
- Do not cut required controls, trust signals, or operational necessities just to make the list shorter.
- Keep explicit keep/defer/cut decisions visible.
- Leave disagreement as an open question instead of faking alignment.

## Core Workflow

1. Fix the primary actor, primary job, and first value path.
2. Sort features into keep, defer, and cut.
3. Check that each kept item directly creates or unblocks first value.
4. Preserve mandatory controls, trust signals, and workflow requirements.
5. Write stop conditions so scope does not silently expand again.
6. Recommend the next step only after the value path and kept set are coherent.

## Must Capture

- keep/defer/cut list
- first-value path
- must-have criteria
- scope stop condition
- deferred risks or follow-ups

## Record Writes

- `screen_specs` when scope affects screen coverage
- `execution_handoff` when next implementation input is in reach
- `risks`, `open_questions`, and `next_step`

## Output

- `mvp_scope_decision`
- `kept_feature_set`
- `defer_and_cut_list`
- `planning_record_updates`
- `recommended_next_skill`

## Quality Bar

- The MVP should still prove value, not just look small on paper.
- Deferred items should be explicit rather than disappearing.
- Operationally impossible MVPs do not count as complete scope decisions.

## Completion

- `## SKILL COMPLETE` or `## SKILL BLOCKED`
- `recommended_next_skill`: usually `ux-use-case-strategy`, `stakeholder-rollout-strategy`, or `planning-synthesis`
