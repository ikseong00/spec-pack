# Doc Metadata Spec

모든 core doc template은 아래 YAML front matter를 공통으로 사용한다.

```yaml
---
status: draft
owner: planning-owner
last_updated: YYYY-MM-DD
source_of_truth_for:
  - concept-a
update_when:
  - when concept-a changes
open_questions:
  - none
change_log:
  - YYYY-MM-DD: created
---
```

## Field Rules

- `status`
  - allowed values: `draft`, `in_review`, `ready`, `stale`, `derived`
  - `ready`는 update trigger가 반영되어 있고 source-of-truth 충돌이 없을 때만 쓴다
  - `stale`는 owning doc가 먼저 바뀌었거나, `update_when` 조건이 발생했는데 문서가 아직 reconcile되지 않았을 때 쓴다
  - `derived`는 canonical concept를 소유하지 않는 파생 뷰 문서에만 쓴다
- `owner`
  - one role or person string
- `last_updated`
  - `YYYY-MM-DD`
- `source_of_truth_for`
  - flat list of concepts this doc owns
  - one concept는 한 번에 하나의 canonical doc만 소유한다
  - 다른 문서가 이미 owning doc면 여기에는 같은 concept를 다시 넣지 않는다
  - freeform 문장 대신 canonical concept ID를 쓴다
  - 권장 형식은 `domain.concept_name`이다
  - 예: `prd.must_have_scope`, `ux.first_time_flow`, `business.metric_hierarchy`
  - 사용 가능한 ID는 [CANONICAL-CONCEPT-REGISTRY.md](CANONICAL-CONCEPT-REGISTRY.md)에 등록된 값으로 제한한다
  - `derived` 문서는 canonical concept를 넣지 않고 `derived index`, `summary view` 같은 파생 역할만 넣는다
- `update_when`
  - flat list of update triggers
- `open_questions`
  - flat list, or `none`
- `change_log`
  - flat list of `YYYY-MM-DD: summary`

## Derived Doc Rules

`One-Page Core Artifact` 같은 derived doc은 아래를 따른다.

- `status: derived`
- `source_of_truth_for`는 `derived index`나 `derived summary view`만 가진다
- `derived_from` field로 canonical input doc를 명시한다
- `derived_from`은 그 derived doc가 표시하는 slot or summary가 의존하는 모든 owning doc를 빠짐없이 포함해야 한다
- canonical fact가 바뀌었는데 derived doc가 아직 반영되지 않았으면 `stale`로 본다
- derived doc는 owning doc를 override할 수 없다

## Collision And Freshness Rules

- `source_of_truth_for` concept collision이 있으면 둘 다 valid가 아니라 충돌 상태다
- semantic synonym으로 ownership을 우회하지 않도록, 같은 의미면 같은 canonical concept ID를 써야 한다
- registry에 없는 concept ID는 invalid다
- 충돌이 풀릴 때까지 해당 문서는 `ready`가 될 수 없다
- `last_updated`가 더 최근인 owning doc가 있는데 downstream doc가 그 concept를 아직 반영하지 못했으면 downstream doc는 `stale`다
- `update_when` trigger가 이미 발생했고 `change_log`에 reconciliation이 남지 않았으면 `ready`가 아니라 `stale`다
- derived doc의 `derived_from`이 불완전하면 metadata는 incomplete다
- auditor는 metadata가 있어도 freshness와 exclusivity를 통과하지 못하면 ready를 막아야 한다

## Example

```yaml
---
status: ready
owner: product
last_updated: 2026-04-09
source_of_truth_for:
  - thesis.one_line_product
  - thesis.primary_target
update_when:
  - positioning changes
  - target user changes
open_questions:
  - none
change_log:
  - 2026-04-09: initial draft
---
```

## Derived Example

```yaml
---
status: derived
owner: product
last_updated: 2026-04-09
source_of_truth_for:
  - derived.one_page_index
derived_from:
  - PROJECT-THESIS.md
  - PLANNING-RECORD.md
  - PRD.md
  - UX-IA.md
  - BUSINESS-OPS.md
  - EXECUTION-HANDOFF.md
update_when:
  - any owning doc changes
open_questions:
  - none
change_log:
  - 2026-04-09: regenerated from canonical docs
---
```
