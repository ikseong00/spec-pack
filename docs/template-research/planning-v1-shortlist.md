# 기획 템플릿 팩 v1 후보 정리

## 목적

이 문서는 기획 단계용 `.claude` / `.codex` 템플릿 팩에서 어떤 `skills`와 `agents`
가 필요한지 정리하고, 그중 v1에서 확실하게 필요한 것만 추린 뒤, 각 항목의 목표와
러프한 구성까지 잡기 위한 문서다.

핵심 기준은 아래다.

- 사용자에게 확실하게 묻는다
- 소크라테스식 질문으로 vague한 답을 걷어낸다
- 필요한 순간에만 리서치를 붙인다
- 조사와 결정을 분리한다
- 마지막엔 반드시 문서와 결정으로 남긴다

## 1. 전체 후보 Skills

### A. Discovery / 문제 정의 계열

- `idea-discovery`
- `problem-validation`
- `assumption-check`

### B. 조사 / 전략 계열

- `market-research`
- `competitor-analysis`
- `positioning-strategy`

### C. 제품 정의 계열

- `mvp-scope`
- `feature-prioritization`
- `ux-strategy`
- `information-architecture`

### D. 사업 검증 계열

- `monetization-strategy`
- `validation-plan`
- `go-to-market-outline`

### E. 정리 / 결정 계열

- `planning-synthesis`
- `decision-audit`
- `planning-memory`

## 2. 전체 후보 Agents

- `discovery-synthesizer`
- `problem-researcher`
- `assumption-auditor`
- `market-researcher`
- `competitor-researcher`
- `positioning-advisor`
- `mvp-critic`
- `priority-advisor`
- `ux-researcher`
- `ia-designer`
- `monetization-advisor`
- `validation-designer`
- `planning-writer`
- `decision-auditor`
- `memory-keeper`

## 3. v1에서 확실하게 필요한 Skills

v1에서는 후보를 다 가져가지 말고 아래 8개만 먼저 가져가는 게 맞다.

### P0 Skills

1. `idea-discovery`
2. `problem-validation`
3. `market-competitor-research`
4. `positioning-strategy`
5. `mvp-scope`
6. `ux-strategy`
7. `monetization-strategy`
8. `planning-synthesis`

### 왜 이 8개인가

- `idea-discovery`가 없으면 시작점이 흐리다
- `problem-validation`이 없으면 만들 가치가 있는지 모른다
- `market-competitor-research`가 없으면 바깥 기준이 없다
- `positioning-strategy`가 없으면 무엇으로 이길지 정해지지 않는다
- `mvp-scope`가 없으면 바로 비대해진다
- `ux-strategy`가 없으면 기능만 있고 경험 설계가 없다
- `monetization-strategy`가 없으면 사업성이 뒤로 밀린다
- `planning-synthesis`가 없으면 조사만 많고 결정이 남지 않는다

### v1에서 보류해도 되는 Skills

- `assumption-check`
- `feature-prioritization`
- `information-architecture`
- `validation-plan`
- `go-to-market-outline`
- `decision-audit`
- `planning-memory`

이 항목들은 중요하지만, 위 8개 안에 얇게 녹일 수 있다. v2에서 분리하는 게 낫다.

## 4. v1에서 확실하게 필요한 Agents

### P0 Agents

1. `discovery-synthesizer`
2. `market-competitor-researcher`
3. `positioning-advisor`
4. `mvp-critic`
5. `ux-researcher`
6. `monetization-advisor`
7. `planning-writer`
8. `decision-auditor`

### 왜 이 8개인가

- 메인 skill이 모든 걸 직접 처리하면 너무 무거워진다
- 각 agent는 좁은 역할과 명확한 출력이 있어야 재사용 가능하다
- GSD처럼 handoff가 명확해야 하고, gstack처럼 강한 관점을 줄 수 있어야 한다

### v1에서 보류해도 되는 Agents

- `problem-researcher`
- `assumption-auditor`
- `priority-advisor`
- `ia-designer`
- `validation-designer`
- `memory-keeper`

이들은 나중에 depth를 늘릴 때 따로 떼도 된다. 초반에는 메인 skill + P0 agent 조합으로
흡수 가능하다.

## 5. P0 Skills 러프 설계

아래는 각 skill에 대해 "목표를 이루기 위해 무엇을 해야 하는지"와 "대략 어떤 내용으로
구성해야 하는지"를 잡은 초안이다.

### 1. `idea-discovery`

목표:
- 사용자의 흐릿한 아이디어를 제품 논의가 가능한 수준까지 구체화한다

이 skill이 해야 하는 일:
- 자유 설명부터 받는다
- 한 번에 질문 하나만 던진다
- vague한 표현이 나오면 반드시 다시 묻는다
- 사용자의 에너지가 있는 부분을 더 깊게 판다
- 문제, 사용자, 상황, 기대 결과를 뽑아낸다
- 일정 수준 이상 명확해지면 다음 step으로 넘긴다

러프한 내용 구성:
- 역할 정의
- 질문 원칙
- 금지 패턴
- 시작 프롬프트
- follow-up 질문 패턴
- vague 답변 교정 방식
- 종료 조건
- 출력 포맷

필수 출력:
- 한 줄 제품 설명
- 핵심 사용자
- 핵심 문제
- 기대 가치
- 아직 모호한 부분

### 2. `problem-validation`

목표:
- 이 문제가 진짜인지, 얼마나 아픈지, 누가 왜 쓰게 될지를 확인한다

이 skill이 해야 하는 일:
- 현재 대안이 무엇인지 묻는다
- 얼마나 자주 겪는 문제인지 묻는다
- 불편인지 절실함인지 구분한다
- 직접 경험인지 추측인지 가른다
- 문제 강도가 낮으면 경고한다

러프한 내용 구성:
- 문제 검증 기준
- pain level 질문 세트
- 현재 workaround 질문 세트
- 실제 수요 vs 추정 수요 구분 규칙
- weak signal 감지 규칙
- 출력 포맷

필수 출력:
- 문제 진술
- 현재 해결 방식
- pain intensity
- 초기 사용자 절실도
- 검증이 더 필요한 가설

### 3. `market-competitor-research`

목표:
- 시장 구조와 경쟁/대체 구도를 빠르게 파악해서 기준점을 만든다

이 skill이 해야 하는 일:
- 직접 경쟁사와 간접 경쟁사를 분리한다
- 사용자가 이미 쓰는 대체재를 찾는다
- 각 제품의 강점, 약점, 포지션을 요약한다
- 사용자가 왜 기존 방식에 남아있는지 확인한다
- 시장의 빈틈이 있는지 본다

러프한 내용 구성:
- 조사 범위 정의
- 비교 프레임
- 경쟁사 표 템플릿
- 대체재 분석 틀
- UX 패턴 관찰 포인트
- 차별화 포인트 도출 규칙

필수 출력:
- competitor table
- substitute map
- expected user habit
- 시장 기회 / 포화 영역
- 참고할 패턴 / 피할 패턴

### 4. `positioning-strategy`

목표:
- 이 제품이 누구를 위해, 어떤 방식으로, 왜 선택받는지를 결정한다

이 skill이 해야 하는 일:
- 가장 먼저 잡을 사용자군을 고른다
- narrow wedge를 정한다
- 왜 이걸 쓰는지 한 줄 차별점을 만든다
- "모두를 위한 제품"을 경계한다
- 전략적으로 안 할 것도 정한다

러프한 내용 구성:
- 타깃 우선순위 프레임
- wedge 질문 세트
- switching reason 프레임
- category framing
- anti-positioning 규칙
- output template

필수 출력:
- primary target user
- wedge
- one-line positioning
- switching trigger
- intentionally not doing

### 5. `mvp-scope`

목표:
- 핵심 가치 검증에 필요한 최소 범위만 남긴다

이 skill이 해야 하는 일:
- must-have와 nice-to-have를 가른다
- 초기 출시 시나리오를 상상하게 한다
- 핵심 가치 전달에 직접 기여하지 않는 기능을 자른다
- out-of-scope를 명시한다
- v1 성공 조건을 정의한다

러프한 내용 구성:
- scope cutting 원칙
- must-have 판단 기준
- 삭제 질문 패턴
- dependency 확인 규칙
- scope freeze 규칙
- output template

필수 출력:
- v1 must-have list
- defer list
- out-of-scope list
- MVP success condition
- scope risk

### 6. `ux-strategy`

목표:
- 구현 전에 사용자 경험의 뼈대를 정한다

이 skill이 해야 하는 일:
- 첫 진입 경험을 설계한다
- 핵심 사용자 플로우를 정리한다
- 검색, 탐색, 비교, 상세, 저장의 흐름을 정한다
- 신뢰를 주는 요소를 정한다
- 브랜드 톤과 제품 느낌을 정의한다

러프한 내용 구성:
- first-time user flow
- repeat usage flow
- IA 초안
- trust cues checklist
- UX principle set
- design direction notes

필수 출력:
- primary user journey
- key screens or states
- trust elements
- UX principles
- unresolved UX questions

### 7. `monetization-strategy`

목표:
- 제품 가치와 맞는 수익 모델을 초기에 점검한다

이 skill이 해야 하는 일:
- 누가 돈을 낼지 정의한다
- 사용자는 누구고 payer는 누구인지 구분한다
- 과금 타이밍을 정의한다
- 광고, 구독, 제휴, B2B 등 옵션을 비교한다
- UX를 망치는 수익화는 경고한다

러프한 내용 구성:
- buyer / user / payer 분리 프레임
- monetization option table
- timing questions
- unit economics 수준의 간단한 감각 체크
- UX conflict rules
- output template

필수 출력:
- payer definition
- monetization options
- recommended model
- why now / why later
- monetization risk

### 8. `planning-synthesis`

목표:
- 지금까지 나온 모든 내용을 신뢰 가능한 planning artifact로 굳힌다

이 skill이 해야 하는 일:
- discovery, 조사, 전략 결과를 합친다
- 중복과 충돌을 제거한다
- 결정된 것과 미결정 사항을 분리한다
- 이후 단계가 바로 쓸 수 있는 문서를 만든다
- 다음에 뭘 해야 하는지도 남긴다

러프한 내용 구성:
- synthesis rules
- contradiction handling
- fact / assumption / decision / open question 분리 규칙
- final artifact structure
- next-step generator

필수 출력:
- project thesis
- user/problem summary
- strategy summary
- MVP summary
- open questions
- next planning or execution step

## 6. P0 Agents 러프 설계

### 1. `discovery-synthesizer`

목표:
- 대화 내용을 구조화해서 다음 질문이나 문서 작성이 가능하게 만든다

입력:
- discovery 대화 로그

해야 하는 일:
- 핵심 발언 요약
- 문제/사용자/가치 분리
- ambiguity 표시
- 다음 질문 후보 제안

출력:
- 짧은 discovery summary
- ambiguity list
- recommended next questions

### 2. `market-competitor-researcher`

목표:
- 시장/경쟁사/대체재를 한 번에 조사해서 비교 가능한 형태로 돌려준다

입력:
- 제품 한 줄 설명
- 타깃 사용자

해야 하는 일:
- direct / indirect / substitute 분리
- 핵심 특징 요약
- 포지셔닝 비교
- 참고할 UX 패턴과 피할 패턴 정리

출력:
- competitor table
- substitute map
- whitespace summary

### 3. `positioning-advisor`

목표:
- 포지셔닝을 더 좁고 날카롭게 만든다

입력:
- discovery 결과
- 경쟁 분석 결과

해야 하는 일:
- primary user 후보 비교
- wedge 추천
- 차별 메시지 제안
- scope 과욕 경고

출력:
- recommended target
- wedge recommendation
- messaging options

### 4. `mvp-critic`

목표:
- 불필요한 기능을 잘라내고 MVP를 현실적으로 만든다

입력:
- 제안된 기능 목록
- 사용자 가치 설명

해야 하는 일:
- 각 기능이 핵심 가치에 직접 연결되는지 평가
- dependency 체크
- 출시 순서 제안
- 과한 범위 지적

출력:
- keep / defer / cut 분류
- scope warnings
- recommended v1 shape

### 5. `ux-researcher`

목표:
- 경험 설계 레벨에서 제품 흐름을 정리한다

입력:
- 사용자 정의
- MVP 범위

해야 하는 일:
- 첫 사용 흐름
- 재사용 흐름
- 탐색 구조
- 신뢰 요소와 필요한 정보 정의

출력:
- key flows
- screen/state map
- trust checklist

### 6. `monetization-advisor`

목표:
- 수익화 방식의 현실성을 점검한다

입력:
- 제품 가치
- 타깃 사용자
- 경쟁 구도

해야 하는 일:
- 누가 돈 내는지 정의
- 과금 방식 옵션 비교
- early monetization 가능성 점검
- UX 훼손 가능성 경고

출력:
- monetization options
- recommended model
- key risks

### 7. `planning-writer`

목표:
- planning 결과를 문서로 정리한다

입력:
- 모든 skill / agent 출력

해야 하는 일:
- 문체 통일
- 중복 제거
- 결정과 오픈 이슈 분리
- 후속 단계가 읽기 쉬운 문서 작성

출력:
- PROJECT 또는 planning summary 문서
- decisions section
- open questions section

### 8. `decision-auditor`

목표:
- 지금까지 나온 결과에 충돌이나 허점이 없는지 검사한다

입력:
- 최종 planning artifact

해야 하는 일:
- 자기모순 찾기
- 빠진 결정 찾기
- 너무 넓은 범위 경고
- unsupported claim 표시

출력:
- contradiction list
- missing decisions
- confidence notes
- recommended fixes

## 7. 현실적인 v1 구조 제안

처음부터 skill과 agent를 너무 많이 쪼개지 말고, 아래 4개 묶음으로 시작하는 게 좋다.

### 묶음 1. Discovery

- skill: `idea-discovery`
- agents:
  - `discovery-synthesizer`

### 묶음 2. Research

- skill: `market-competitor-research`
- agents:
  - `market-competitor-researcher`
  - `positioning-advisor`

### 묶음 3. Product Definition

- skills:
  - `problem-validation`
  - `mvp-scope`
  - `ux-strategy`
  - `monetization-strategy`
- agents:
  - `mvp-critic`
  - `ux-researcher`
  - `monetization-advisor`

### 묶음 4. Finalization

- skill: `planning-synthesis`
- agents:
  - `planning-writer`
  - `decision-auditor`

## 8. 다음 단계

이 다음엔 아래 순서로 가면 된다.

1. `idea-discovery` skill부터 실제 SKILL 초안 작성
2. 그 skill이 호출할 `discovery-synthesizer` agent 초안 작성
3. `market-competitor-research` skill 작성
4. `planning-synthesis` 문서 포맷 먼저 고정
5. 나머지 skill을 그 포맷에 맞춰 확장

즉, 지금은 "무엇이 필요한가"는 거의 정리됐다. 다음 작업은 "각 skill/agent를 실제로 어떤
문서 구조와 규칙으로 쓸 것인가"다.
