# Design Usability Evaluation

이 문서는 design pack이 실제로 `usable`한지 판단하는 기준표다.

여기서 usable의 뜻은 아래다.

- 불완전한 입력에서도 design 방향을 안정적으로 끌어낼 수 있다
- operator가 visual / UX 판단에서 크게 헤매지 않는다
- 결과 문서가 stitch, designer, frontend, architecture handoff에 실제로 쓰인다
- 다양한 산업/서비스 시나리오에서도 design 질문 체계가 크게 깨지지 않는다

## 1. Evaluation Goal

usable 판단은 예쁜 결과 한 장으로 하지 않는다.

아래 4가지를 동시에 본다.

1. operator가 실제로 사용할 수 있는가
2. output 문서가 실제 design handoff에 쓸 수 있는가
3. stitch / AI UI generation에 실제로 먹히는가
4. 다양한 domain scenario에 재사용 가능한가

## 2. Pass Definition

최종적으로 usable이라고 보려면 아래를 만족해야 한다.

- 서로 다른 design shape 10개 이상에서 큰 구조 수정 없이 돌아간다
- 결과가 안정적으로 `DESIGN.md + UX-IA.md + SCREEN-SPECS.md`로 떨어진다
- 핵심 screen/state/trust hierarchy가 늘 명확하다
- stitch prompt guide가 실제 생성 입력으로 바로 쓸 수 있다
- frontend / architecture 단계에서 같은 디자인 질문을 대량으로 다시 하지 않는다
- first-time operator가 first route와 first owning doc를 빠르게 고른다

## 3. Evaluation Axes

| Axis | 질문 | Pass 기준 |
| --- | --- | --- |
| Operator Usability | 어디서 시작해야 하는지 바로 알 수 있는가 | visual direction, surface priority, flow priority를 1-2분 안에 정할 수 있다 |
| Question Quality | 질문이 진짜 디자인 결정을 끌어내는가 | vague taste talk가 아니라 trust, tone, hierarchy, state visibility까지 내려간다 |
| Visual Coherence | design system이 일관된가 | typography, color, spacing, radius, shadow, motion rules가 서로 맞는다 |
| UX State Coverage | 상태 설계가 충분한가 | empty, loading, error, permission, offline, recovery, review/trust states가 빠지지 않는다 |
| Screen Contract Quality | 화면 계약이 usable한가 | 각 screen purpose, section, CTA, states, priority가 분명하다 |
| Stitch Readiness | AI UI 생성 도구가 바로 읽을 수 있는가 | prompt guide, token reference, guardrail, screen priority가 있다 |
| Handoff Usability | 다음 단계가 바로 이어지는가 | designer, frontend, architecture가 무엇을 지켜야 하는지 바로 알 수 있다 |
| Domain Transfer | 여러 산업/서비스에 적용 가능한가 | 식품, 건축, 공간, 교육, 헬스케어, 여행 같은 분야에서 크게 깨지지 않는다 |
| Update Usability | 변경 시 유지보수 가능한가 | visual refresh, flow change, screen change의 update path가 분명하다 |
| Weight Control | 너무 무겁지 않은가 | 필요한 design 결정은 빠지지 않지만, 불필요한 style essay가 폭증하지 않는다 |
| Anti-Slop Resilience | AI slop를 막는가 | generic gradient, centered-everything, arbitrary radius/token drift를 문서가 억제한다 |
| Accessibility Baseline | 접근성 기준이 남는가 | contrast, focus, touch target, motion reduction, long text/localization이 빠지지 않는다 |

## 4. Score Rubric

| Score | 의미 |
| --- | --- |
| 0 | unusable. design direction이나 output이 무너짐 |
| 1 | partial. 구조는 있으나 사람이 많이 해석해야 함 |
| 2 | usable. 실전 적용 가능하나 polish가 더 필요함 |
| 3 | strong. 반복 사용과 handoff가 안정적임 |

## 5. Minimum Pass Bar

아래 6축은 모두 최소 `2` 이상이어야 한다.

- `Operator Usability`
- `Question Quality`
- `Visual Coherence`
- `UX State Coverage`
- `Stitch Readiness`
- `Handoff Usability`

전체 평균은 `2.3` 이상이어야 한다.

## 6. Hard Fail

아래 중 하나면 전체는 fail이다.

- `DESIGN.md`가 inspiration dump 수준에 머문다
- `UX-IA.md`에 recovery/state coverage가 자주 빠진다
- `SCREEN-SPECS.md`가 purpose/priority 없이 섹션 나열 수준이다
- stitch prompt guide가 실제 입력으로 쓸 수 없을 정도로 추상적이다
- 같은 디자인 질문을 다음 단계가 다시 대량으로 한다
- domain마다 문서를 뜯어고쳐야만 쓸 수 있다

## 7. Evidence To Collect Per Run

각 run에서는 아래를 남긴다.

- input summary
- scenario shape
- chosen design direction
- 핵심 질문 10~20개
- `DESIGN.md` snapshot
- `UX-IA.md` snapshot
- `SCREEN-SPECS.md` snapshot
- route card snapshot
- stitch prompt snippet
- operator friction notes
- ambiguity notes
- evaluator scores
- fail points

## 8. Verdict Bands

| Verdict | 의미 |
| --- | --- |
| Fail | 구조 수정 필요 |
| Narrow Usable | 일부 design shape에서만 안정적 |
| Broad Usable | 다수 산업/서비스 시나리오에서 안정적 |
| Production-Ready Template | onboarding, loop, packaging까지 갖춘 상태 |
