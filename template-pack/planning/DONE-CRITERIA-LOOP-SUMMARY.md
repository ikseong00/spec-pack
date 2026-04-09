# Done Criteria Loop Summary

이 문서는 `PLANNING-DONE-CRITERIA.md`를 기준으로 진행한 hardening loop의 압축 로그다.

## Wave 1

주요 지적:

- discovery slot이 schema로 강제되지 않음
- recent example / use-case가 card 형태로 고정되지 않음
- market / competitor evidence가 auditable하지 않음
- first value path, one-page artifact, business viability가 약함
- data / ops / rollout / controls가 advisory text에 머무름

핵심 반영:

- `CONTROL-PLANE.md`에 mandatory slot registry 추가
- `PLANNING-RECORD.md`에 recent example bundle, use-case card, market evidence, business viability snapshot, one-page artifact slot 추가
- `QUESTION-OVERLAYS.md`에 core web/SaaS question set과 archetype-specific validation order 추가
- 각 skill / agent에 light user analysis, first value path, first customer path, cost-to-serve, dependency register, controls register 반영

## Wave 2

주요 지적:

- one-page final handoff의 fixed slot이 아직 불명확함
- 일부 archetype minimum route가 hard gate와 완전히 정렬되지 않음
- README와 summary 문서가 이전 draft 상태를 끌고 와 self-contradiction이 생김

핵심 반영:

- `PLANNING-RECORD.md`와 `planning-synthesis`에 one-page core artifact fixed slot 명시
- `CONTROL-PLANE.md` synthesize minimum에 positioning difference, MVP boundary, success / guardrail metrics 추가
- `README.md` minimum route를 public website / marketplace / platform integration 기준으로 재정렬
- `PLANNING-PACK-SUMMARY.md`를 current summary + fixed-slot handoff 문서로 교체

## Wave 3

주요 지적:

- semantic slot ID와 final artifact key naming이 섞여 있어 handoff 해석이 흔들릴 수 있음
- canonical output discipline에 market / competitor / data / ops realism이 충분히 명시되지 않음
- `not_ready_because` 같은 failure surface가 prose와 schema 이름 사이에서 흔들림

핵심 반영:

- `CONTROL-PLANE.md`와 `PLANNING-RECORD.md`에 semantic ID -> artifact key naming convention을 명시
- `CONTROL-PLANE.md` canonical output discipline에 `market_evidence_brief`, `competitor_table`, conditional-required data / ops / rollout block을 추가
- `PLANNING-DONE-CRITERIA.md`와 `CONTROL-PLANE.md`의 field naming을 schema 기준으로 정렬

## Wave 4

주요 지적:

- skill 문서가 `planning record`를 쓴다고는 하지만, 정확히 어느 canonical section / block을 업데이트하는지 덜 명시됨
- 그래서 나중에 skill이 예쁜 local output만 남기고 canonical handoff를 비워둘 위험이 있음

핵심 반영:

- 13개 skill 전부에 `Record Writes` section을 추가
- 각 skill이 `facts / assumptions / decisions / open_questions / risks / next_step` 중 무엇을 갱신하는지 명시
- user / market / data / rollout / viability 관련 structured block 연결을 skill 단위로 고정

## Wave 5

주요 지적:

- suppression rule이 원칙 수준이고 구조로는 덜 남아 있었음
- market/data light mode와 route resolver가 모호해서 operator마다 해석 차이가 생길 수 있었음
- evidence, hypothesis, commercial handoff가 아직 summary-friendly 쪽에 치우쳐 있었음
- skill/agent boundary가 약간 겹치고 naming surface도 일부 새고 있었음

핵심 반영:

- `question_state`, `hypothesis_register`, `commercial_model`, `trust_ops_minimum`을 canonical schema에 추가
- `CONTROL-PLANE.md`에 evidence standard, market-light/data-light minimum, pace-aware route resolver 추가
- `PLANNING-RECORD.md`에 block ownership rule, stronger evidence fields, commercial/data policy fields, one-page artifact slot 확장 추가
- `PLANNING-DONE-CRITERIA.md`에 stronger acquisition/revenue/evidence hard gate 반영
- `QUESTION-OVERLAYS.md`를 behavior-first / strategy-follow-up 2-pass 구조로 분리
- 주요 skill들에 `Baseline Question Pack`을 넣어 discovery 이후에도 questioning quality가 유지되게 함

## Wave 6

주요 지적:

- `fast` pace가 still too conceptual했고, router가 실제 skill set보다 얇았음
- operator가 봐야 할 canonical 문서와 maintenance log의 경계가 덜 분명했음
- commercial/acquisition realism이 skill level에 비해 canonical schema에선 약간 얇았음

핵심 반영:

- `CONTROL-PLANE.md` route resolver에 `user-clarity`, `flow`, `rollout`, `growth`, `revenue` branch를 추가
- `PLANNING-DONE-CRITERIA.md`에 `Fast Pace Allowance`와 stronger funnel threshold를 추가
- `PLANNING-RECORD.md`를 core minimum / standard / conditional block 구조로 재정렬하고 viability / commercial fields를 더 현실화
- `README.md`에 canonical docs vs maintenance logs 경계를 명시
- `planning-synthesis` output을 lighter canonical-output 중심으로 정리

## Current Read

현재 pack의 핵심 상태:

- discovery / user clarity / recent example forcing: pass
- product definition / MVP / first value path: near-pass 이상
- market / data / ops / rollout realism: near-pass 이상
- acquisition / retention / monetization / viability: near-pass 이상
- core document self-contradiction: latest patch에서 정리
- naming contract와 conditional block rule도 latest patch에서 정리
- 13개 skill의 canonical write contract도 latest patch에서 정리
- route resolver, evidence rule, hypothesis/commercial schema도 latest patch에서 정리
- fast lane contract와 operator surface도 latest patch에서 정리

## Remaining Edges

현재 남은 것은 core planning contract보다는 packaging 성격이다.

- archetype별 worked example 추가
- `.claude` / `.codex` 실제 템플릿 구조로 포장
- helper / boilerplate / routing convenience 정리
