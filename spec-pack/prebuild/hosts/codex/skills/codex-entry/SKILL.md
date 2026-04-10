---
name: codex-entry
description: Codex-specific entry wrapper for the unified spec pack. Routes to shared references and the lean authoring surface without changing canonical service-spec truth.
---

# Codex Entry

## Purpose

shared spec pack을 Codex App/CLI surface에서 바로 시작할 수 있게 돕는 host overlay entry다.

## Use When

- Codex에서 `planning -> design -> rough architecture`를 하나의 흐름으로 시작할 때
- planning skill, design skill, final audit agent를 Codex surface에서 빠르게 고르고 싶을 때
- shared layer를 다시 설명하지 말고 Codex supplement만 얹고 싶을 때

## Read First

1. [../../../../references/START-HERE.md](../../../../references/START-HERE.md)
2. [../../../../references/PLANNING-TO-DESIGN-HANDOFF.md](../../../../references/PLANNING-TO-DESIGN-HANDOFF.md)
3. [../../HOST-OVERLAY-MATRIX.md](../../HOST-OVERLAY-MATRIX.md)
4. [../../README.md](../../README.md)

## Codex Overlay Rules

- root `AGENTS.md`와 `.codex/AGENTS.md`를 runtime supplement로 읽는다
- canonical route choice는 shared `START-HERE`에서 한다
- Codex overlay는 wrapper 역할만 한다
- shared docs나 service-spec meaning을 재정의하지 않는다

## Preferred Next Surfaces

- planning synthesis:
  - `spec-planning-synthesis`
- design synthesis:
  - `spec-design-synthesis`
- final doc audit:
  - `spec-design-pack-auditor`
  - `spec-compliance-auditor`

## Output

- `selected_route`
- `selected_weight`
- `shared_docs_to_touch`
- `recommended_skills_or_agents`
- `why_codex_overlay_helped`
