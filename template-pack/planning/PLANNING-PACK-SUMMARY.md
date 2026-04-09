---
status: derived
owner: product
last_updated: 2026-04-09
source_of_truth_for:
  - derived.pack_summary_view
derived_from:
  - README.md
  - references/CONTROL-PLANE.md
  - references/PLANNING-RECORD.md
  - references/PLANNING-DONE-CRITERIA.md
  - references/CORE-DOCUMENT-SET.md
  - references/PROJECTION-MATRIX.md
update_when:
  - any canonical pack rule changes
open_questions:
  - none
change_log:
  - 2026-04-09: marked as derived pack summary
---

# Planning Pack Current Summary

이 문서는 derived-only pack summary다.

- canonical source of truth가 아니다
- pack rule은 README와 references 아래 canonical 문서에서 먼저 수정한다
- 이 문서가 canonical 문서와 어긋나면 `stale`로 보고 다시 생성한다

이 문서는 현재 planning pack의 one-page index contract와 doc-bundle 상태 요약을 함께 담는다.

## One-Page Core Artifact Contract

최종 one-page index는 아래 slot을 고정한다.

- `one_line_product`
- `primary_target`
- `why_this_segment_first`
- `current_alternative`
- `primary_use_case`
- `anchor_recent_example`
- `positioning_difference`
- `first_value_moment`
- `core_first_time_flow`
- `repeat_flow`
- `must_have`
- `defer`
- `out_of_scope`
- `primary_acquisition_motion`
- `first_customer_path`
- `first_revenue_motion`
- `pricing_boundary`
- `main_risks`
- `business_viability_snapshot`
- `success_metrics`
- `guardrail_metrics`
- exactly one of `next_experiment` or `next_implementation_input`

## Current Pack Read

### one_line_product

웹사이트 / SaaS planning을 위해, 질문 기반 discovery와 fixed-slot synthesis를 강제하는 planning template pack.

### primary_target

- `.claude` / `.codex` 템플릿을 만들려는 builder
- 새 웹사이트 / SaaS 프로젝트를 기획하는 founder / PM / vibe coder

### why_this_segment_first

이 pack의 직접 사용자는 planning friction을 반복해서 겪는 builder라서, reusable route / slot / audit 체계를 가장 빠르게 검증할 수 있다.

### current_alternative

- ad hoc brainstorming 메모
- 경쟁사 기능 나열
- 좋은 말은 많지만 handoff가 안 되는 기획 문서

### primary_use_case

새 프로젝트를 시작한 builder가 archetype과 current gap을 고르고, 같은 질문을 반복하지 않는 planning handoff를 만든다.

### anchor_recent_example

새 프로젝트에서 아이디어는 있는데 어디서부터 물어야 할지 몰라, 매번 discovery 질문과 scope 질문이 섞여 버리는 상황.

### positioning_difference

- recent example, current alternative, use-case card를 schema level에서 강제한다
- archetype overlay와 minimum route로 범용성과 구체성을 같이 잡는다
- final output을 one-page index + planning record + 8-document core bundle로 고정한다

### first_value_moment

사용자가 한 archetype route를 따라가고 나면, 같은 질문을 다시 반복하지 않는 reusable planning doc bundle을 얻는다.

### core_first_time_flow

`classify -> minimum route -> fill planning record -> emit core docs -> done-criteria audit -> one-page index`

### repeat_flow

새 프로젝트에서도 같은 overlay, slot, audit 규약으로 planning을 재사용한다.

### must_have

- mandatory slot registry
- stable item-id scope contract
- light/full user analysis rule
- recent example bundle
- use-case card
- market evidence brief
- business viability snapshot
- one-page core artifact
- 8-document core bundle
- screen specs
- execution handoff
- done criteria audit
- per-skill record write contract

### defer

- archetype별 worked example
- 실제 `.claude` / `.codex` packaging
- routing helper / boilerplate

### out_of_scope

- implementation workflow
- testing / QA workflow
- roadmap / backlog / sprint 운영

### primary_acquisition_motion

초기에는 repo 안 planning pack 문서로 검증하고, 이후 `.claude` / `.codex` 템플릿 배포로 확장한다.

### first_customer_path

이 repo 안에서 planning pack을 반복 사용해 보고, 이후 다른 웹사이트 / SaaS 프로젝트에 그대로 가져가며 reuse quality를 검증한다.

### first_revenue_motion

내부 템플릿 pack 자체의 직접 수익화 대상은 아니다. 대신 이 pack이 나중에 어떤 client work / product planning / template distribution을 더 빨리 성사시키는지로 간접 가치가 생긴다.

### pricing_boundary

직접 pricing boundary는 없지만, 이 pack이 어디까지는 free internal asset이고 어디서부터 paid delivery asset으로 바뀌는지는 나중 템플릿 배포 단계에서 정해질 수 있다.

### main_risks

- archetype별 worked example가 아직 부족하다
- 실제 tool-specific packaging 전에는 install friction이 남는다
- future summary docs가 core references와 다시 어긋날 수 있다
- template skeleton과 metadata spec은 생겼지만 real example coverage는 아직 약하다

### business_viability_snapshot

- planning template를 실제로 여러 프로젝트에 재사용할 수 있어야 한다
- route resolver와 shared record가 반복 질문 비용을 줄여야 한다
- `.claude` / `.codex` 포장 전에도 문서만으로 operator가 따라갈 수 있어야 한다

### success_metrics

- archetype별 minimum route와 done criteria를 일관되게 통과

### guardrail_metrics

- 문서가 무거워지지 않음
- 같은 discovery 질문 반복 없음
- ops / data / monetization 누락 없음

### next_experiment

가설 검증이 아직 우선이면 interview, landing, concierge, prototype, smoke test 같은 다음 실험 입력으로 이어진다.

### next_implementation_input

이 planning pack을 실제 `.claude` / `.codex` 구조에 맞는 `skills / agents / references / routing` 템플릿으로 포장한다.

## Canonical State

### facts

- 13-skill spine은 유지한다
- 6 archetype + 5 modifier overlay 구조를 유지한다
- one-page core artifact는 index이고, canonical output은 planning record + 8-document core bundle이다
- 13개 skill 모두 canonical `planning record` write target을 명시한다
- fast / standard / full pace를 route resolver에 둔다

### assumptions

- 현재 문서 수준의 hardening이면 웹사이트 / SaaS planning에 충분히 범용적으로 적용 가능하다
- worked example 없이도 초기 템플릿 설계는 진행 가능하다

### decisions

- planning pack은 `질문 기반 operating system`으로 정의한다
- skills 수를 늘리기보다 schema / routing / audit을 강화한다
- 모든 웹사이트 / SaaS route는 최소 light user analysis를 포함한다

### open_questions

- archetype별 example output을 어떤 깊이로 둘 것인가
- `.claude` / `.codex` 포장 시 routing helper를 얼마나 자동화할 것인가

### risks

- example 부족으로 초반 사용자에게 추상적으로 느껴질 수 있다
- packaging 단계에서 tool-specific 제약이 드러날 수 있다
- worked example이 없으면 suppression / route resolver는 여전히 추상적으로 느껴질 수 있다

### next_step

- exactly one of `next_experiment` or `next_implementation_input`
