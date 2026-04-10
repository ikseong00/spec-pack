---
name: claude-entry
description: Claude-specific entry wrapper for the unified spec pack. Uses shared references as source of truth and adds host-specific entry guidance only.
---

# Claude Entry

## Purpose

shared spec pack을 Claude surface에서 바로 시작할 수 있게 돕는 host overlay entry다.

## Use When

- Claude에서 `planning -> design -> rough architecture`를 하나의 흐름으로 시작할 때
- shared spec route는 유지하되 operator phrasing을 더 얇게 주고 싶을 때
- shared doc ownership과 reopen rule을 빠르게 재확인하고 싶을 때

## Read First

1. [../../../../references/START-HERE.md](../../../../references/START-HERE.md)
2. [../../../../references/PLANNING-TO-DESIGN-HANDOFF.md](../../../../references/PLANNING-TO-DESIGN-HANDOFF.md)
3. [../../HOST-OVERLAY-MATRIX.md](../../HOST-OVERLAY-MATRIX.md)

## Claude Overlay Rules

- canonical route choice는 shared `START-HERE`에서 한다
- Claude overlay는 operator phrasing과 wrapper selection만 바꾼다
- shared docs나 service-spec meaning을 재정의하지 않는다
- same residual이면 wording patch보다 shared contract fix를 먼저 요구한다

## Preferred Next Surfaces

- planning synthesis:
  - `product-spec-planning-synthesis`
- design synthesis:
  - `product-spec-design-synthesis`
- final doc audit:
  - `product-spec-design-pack-auditor`
  - `product-spec-compliance-auditor`

## Output

- `selected_route`
- `selected_weight`
- `shared_docs_to_touch`
- `recommended_skills_or_agents`
- `why_claude_overlay_helped`
