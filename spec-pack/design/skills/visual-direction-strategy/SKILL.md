---
name: visual-direction-strategy
description: Turn product context into a concrete visual direction with explicit typography, color, density, and trust posture rules.
---

# Visual Direction Strategy

## Purpose

제품의 성격과 사용 맥락을 시각 방향으로 번역한다.

## Use When

- product는 정리됐지만 어떤 감각으로 보여야 할지 모호하다
- reference는 많은데 direction이 없다
- stitch나 디자이너가 바로 읽을 visual source of truth가 필요하다

## Inputs

- `PROJECT-THESIS.md`
- `PRD.md`
- core user/market context
- known constraints on brand, trust, and tone
- route card from `design-intake-triage` if available

## Contract

이 skill은 [DESIGN-SKILL-AGENT-CONTRACTS.md](../../references/DESIGN-SKILL-AGENT-CONTRACTS.md)를 따른다.

## Core Workflow

1. product context와 user expectation을 읽는다
2. mandatory discovery ladder로 `trust posture`, `tone`, `hierarchy priority`, `density target`, `must-visible signal`을 먼저 잠근다
3. active domain stressors와 required conditional packs를 명시한다
4. reference를 3개 이하로 압축한다
5. visual thesis를 한 문장으로 만든다
6. typography, color, density, depth, motion stance를 정한다
7. proof/governance/disclosure/notification posture를 적는다
8. closed token table 초안을 만든다
9. AI slop risk를 explicit하게 금지한다
10. `DESIGN.md`의 상위 절반과 generator contract를 채운다

## Must Capture

- product context
- experience intent
- inspiration references
- visual theme and atmosphere
- color palette and roles
- typography rules
- spacing / radius / layout stance
- trust / proof / governance posture
- closed token table draft
- anti-slop guardrails

## Output

- `DESIGN.md` draft:
  - `Product Context`
  - `Experience Intent`
  - `Inspiration References`
  - `Visual Theme & Atmosphere`
  - `Color Palette & Roles`
  - `Typography Rules`
  - `Spacing, Radius, and Layout`

## Quality Bar

- reference를 그대로 베끼지 않는다
- tone 설명이 actual visual rule로 내려와야 한다
- color와 type는 product/trust posture와 연결돼야 한다
- generic SaaS slop으로 쉽게 흐를 수 있는 금지사항이 있어야 한다
- exact token or exact prohibition이 남아야 한다

## Completion

- `## SKILL COMPLETE` 또는 `## SKILL BLOCKED`
- `recommended_next_skill`: `experience-flow-design` 또는 `screen-spec-design`
