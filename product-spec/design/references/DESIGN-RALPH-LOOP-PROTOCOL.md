# Design Ralph Loop Protocol

이 문서는 design pack을 실제 사용 프록시 방식으로 검증하는 Ralph loop 운영 규약이다.

핵심 원칙:

- runner와 evaluator는 분리한다
- runner는 실제 사용자처럼 불완전한 입력에서 출발한다
- evaluator는 자기 축 하나만 들고 평가한다
- loop마다 문서를 패치하고 다시 돌린다
- 업종별 hack이 아니라 재사용 가능한 contract로 일반화한다
- targeted recheck여도 전체 evaluator set을 다시 본다

## 1. Loop Goal

목표는 문서가 보기 좋게 정리되는 것이 아니라 아래를 검증하는 것이다.

- 실제 사용자가 design 방향을 끌어낼 수 있는가
- 결과 문서가 stitch / designer / frontend / architecture에 실제로 유용한가
- 다양한 분야 시나리오에서도 질문 체계와 산출물이 버티는가

## 2. Runner vs Evaluator

### Runner Agents

runner는 실제 사용자 프록시다.

해야 하는 일:

- 아이디어가 불완전한 상태에서 시작
- 질문에 founder/operator처럼 대답
- design 문서 초안을 실제로 채운다고 가정
- 막히는 지점을 friction으로 기록

runner는 평가자가 아니다. "이 문서가 좋은가"를 판단하지 않는다.

### Evaluator Agents

evaluator는 기준표를 들고 결과를 판정한다.

규칙:

- 한 evaluator는 한 축만 본다
- 자기 축 외의 문제를 결론으로 삼지 않는다
- 가능하면 `PASS / NEAR-PASS / BLOCK`으로 판정한다
- fix suggestion은 pack-level contract gap으로 일반화한다

## 3. Recommended Agent Set Per Loop

### Runners

1 loop당 아래처럼 잡는다.

- `scenario-runner-a`
- `scenario-runner-b`
- `scenario-runner-c`
- `scenario-runner-d`
- `scenario-runner-e`

각 runner는 6-10개 시나리오를 맡아 총 30-50개를 커버한다.

### Evaluators

각 evaluator는 아래 축 중 하나만 본다.

1. `operator-usability-evaluator`
2. `question-quality-evaluator`
3. `visual-coherence-evaluator`
4. `ux-state-coverage-evaluator`
5. `screen-contract-evaluator`
6. `stitch-readiness-evaluator`
7. `handoff-usability-evaluator`
8. `domain-transfer-evaluator`
9. `update-usability-evaluator`
10. `weight-control-evaluator`
11. `anti-slop-evaluator`
12. `accessibility-baseline-evaluator`

## 4. Loop Pipeline

각 loop는 아래 순서로 진행한다.

1. scenario batch 선정
2. runner agents가 각 시나리오에 대해 quick route card를 먼저 만든다
3. runner agents가 각 시나리오를 실제 사용 흐름으로 수행
4. `DESIGN.md`, `UX-IA.md`, `SCREEN-SPECS.md` 결과를 가정 또는 생성
5. evaluator agents가 각 축별로 평가
6. 공통 실패를 `pack-level gap`으로 일반화
7. `templates / references / skills / agents`를 패치
8. 실패한 시나리오만 targeted recheck
9. targeted recheck여도 전체 evaluator 축을 다시 판정
10. 결과를 loop log에 기록

## 5. What Runners Must Produce

각 runner는 최소 아래를 남긴다.

- input summary
- route card
- chosen scenario shape
- 어떤 질문이 어려웠는지
- 최종적으로 어떤 design direction에 도달했는지
- `DESIGN.md`에서 비어 있거나 애매했던 섹션
- `UX-IA.md`에서 흐름이 흔들린 지점
- `SCREEN-SPECS.md`에서 빠진 상태/우선순위

## 6. What Evaluators Must Produce

각 evaluator는 아래 형식을 따른다.

- `axis`
- `verdict`: PASS | NEAR-PASS | BLOCK
- `score`: 0-3
- `evidence`
- `why it failed or nearly failed`
- `minimum pack-level fix`

## 7. Patch Rule

loop에서 나온 수정은 아래 원칙을 따른다.

- 특정 시나리오 전용 wording으로 끝내지 않는다
- 가능한 한 `template / reference / contract` 수준으로 일반화한다
- 한 문서의 응급처치보다 core output contract를 먼저 본다
- design stage 범위를 넘는 구현 디테일은 넣지 않는다
- 특정 axis 개선만 확인하고 나머지 축을 생략하지 않는다

## 8. Exit Signal

loop는 아래에 가까워질 때 종료를 검토한다.

- 30-50개 시나리오 batch에서 major block이 거의 없다
- 평균 점수가 `2.3+` 이상으로 안정적이다
- `DESIGN.md + UX-IA.md + SCREEN-SPECS.md`가 반복해서 usable하게 나온다
- operator가 처음 시작할 때 크게 헤매지 않는다
- stitch / frontend / architecture handoff가 자주 막히지 않는다
