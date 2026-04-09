# GSD 분석

## 한 줄 요약

GSD는 "아이디어 정리 -> 요구사항 -> 로드맵 -> 페이즈 계획 -> 실행 -> 검증 -> 마일스톤 정리"를 문서와 에이전트 계약으로 굴리는, 계획 중심의 개발 운영체제에 가깝다.

## 스캔 범위

- `.codex/skills/` 68개 스킬
- `.codex/get-shit-done/workflows/` 68개 워크플로
- `.codex/get-shit-done/references/` 34개 참조 문서
- `.codex/agents/` 48개 에이전트 정의
- `.codex/get-shit-done/templates/` 43개 템플릿
- 확인한 핵심 파일
  - `.codex/get-shit-done/workflows/help.md`
  - `.codex/get-shit-done/workflows/new-project.md`
  - `.codex/get-shit-done/workflows/plan-phase.md`
  - `.codex/get-shit-done/workflows/execute-phase.md`
  - `.codex/get-shit-done/workflows/autonomous.md`
  - `.codex/get-shit-done/references/agent-contracts.md`
  - `.codex/get-shit-done/references/planning-config.md`
  - `.codex/get-shit-done/templates/project.md`
  - `.codex/get-shit-done/templates/requirements.md`
  - `.codex/get-shit-done/templates/roadmap.md`
  - `.codex/get-shit-done/templates/state.md`
  - `.codex/get-shit-done/contexts/dev.md`
  - `.codex/get-shit-done/contexts/research.md`
  - `.codex/get-shit-done/contexts/review.md`
  - `.codex/agents/gsd-roadmapper.md`
  - `.codex/get-shit-done/bin/gsd-tools.cjs`

## 목적

GSD의 목적은 코드 생성 자체보다 "프로젝트를 잊지 않고 끝까지 밀어붙일 수 있게 만드는 것"에 있다. 핵심은 다음과 같다.

- 프로젝트 비전을 `.planning/PROJECT.md`로 고정
- 요구사항을 `REQUIREMENTS.md`로 체크 가능하게 분해
- `ROADMAP.md`로 페이즈 구조를 명시
- 각 페이즈를 `PLAN.md`로 실행 가능한 단위로 세분화
- 실행 후 `SUMMARY.md`, `STATE.md`, 검증 보고서로 누적 기억 유지
- 필요하면 보안, UI, 검증, 리뷰, 코드맵, 사용자 프로파일링까지 별도 흐름으로 확장

즉, GSD는 "계획 산출물 중심의 개발 프로세스 프레임워크"다.

## 구조

### 1. 문서 중심 아키텍처

GSD의 중심은 코드가 아니라 `.planning/`이다. 특히 다음 산출물이 시스템의 기준점이다.

- `PROJECT.md`: 제품 정체성, 핵심 가치, 범위
- `REQUIREMENTS.md`: 체크 가능한 요구사항과 traceability
- `ROADMAP.md`: 페이즈와 성공 기준
- `STATE.md`: 현재 위치와 누적 컨텍스트
- `CONTEXT.md`, `RESEARCH.md`, `PLAN.md`, `SUMMARY.md`: 페이즈 단위 컨텍스트와 실행 기록
- `UI-SPEC.md`, `SECURITY.md`, `VALIDATION.md`, `UAT.md`: 특정 품질 축에 대한 부가 산출물

### 2. 오케스트레이터 + 서브에이전트

워크플로 문서를 읽어보면 GSD는 메인 오케스트레이터가 직접 모든 걸 하지 않는다.

- `plan-phase`는 researcher, planner, checker를 돌린다
- `execute-phase`는 executor와 verifier를 붙인다
- `new-project`는 project researcher, synthesizer, roadmapper를 쓴다
- UI, security, verification도 각각 전용 에이전트가 있다

그리고 `agent-contracts.md`로 completion marker까지 고정해 두었다. 이건 꽤 중요한 설계다. 에이전트가 자유형으로 말해도 오케스트레이터가 상태를 안정적으로 판정할 수 있다.

### 3. 워크플로 운영체제

`help.md` 기준으로 보면 GSD는 단순 명령 모음이 아니라 전체 운영체제를 제공한다.

- 초기화: `new-project`, `new-milestone`, `map-codebase`
- 탐색/질문: `discuss-phase`, `explore`, `list-phase-assumptions`
- 계획: `plan-phase`, `research-phase`
- 실행: `execute-phase`, `quick`, `fast`, `autonomous`
- 품질: `code-review`, `verify-work`, `validate-phase`, `secure-phase`, `ui-review`
- 유지보수: `progress`, `stats`, `session-report`, `resume-work`, `pause-work`
- 구조 관리: `add-phase`, `insert-phase`, `remove-phase`, `workstreams`, `new-workspace`

### 4. 설정 가능성

`planning-config.md` 기준으로 GSD는 다음을 세밀하게 제어한다.

- planning 문서를 git에 커밋할지
- worktree 기반 병렬 실행을 쓸지
- phase/milestone 브랜치 전략을 쓸지
- response language를 바꿀지
- 연구/검증/플랜체커 같은 workflow agent를 켤지

즉, "강한 기본값"은 있지만 완전히 하드코딩된 시스템은 아니다.

## 장점

### 1. 세션이 끊겨도 프로젝트가 안 날아간다

GSD의 가장 큰 장점은 컨텍스트를 문서에 외부화한다는 점이다. `STATE.md`와 각종 산출물 때문에, 세션이 끊겨도 어디까지 왔는지 복구가 쉽다.

### 2. 큰 작업을 계속 쪼개서 밀 수 있다

`ROADMAP -> phase -> plan -> task` 구조가 매우 명확하다. 막연한 "기능 하나 만들어줘"가 아니라, 실제 실행 가능한 단위로 내려간다.

### 3. 품질 검증 루프가 기본 내장이다

이 시스템은 계획만 만드는 게 아니다.

- plan checker
- verifier
- code review
- security audit
- UI audit
- validation / UAT

같은 품질 루프가 내장되어 있어서 "만들고 끝"이 아니라 "만든 뒤 검증"이 흐름에 포함된다.

### 4. 브라운필드 대응력이 좋다

`map-codebase`, `scan`, `intel`, `assumptions` 계열을 보면, 새 프로젝트뿐 아니라 기존 코드베이스를 읽고 들어가는 흐름도 꽤 신경 쓴다.

### 5. 단일 개발자 + AI 조합에 매우 잘 맞는다

문서 전반에서 "팀 PM 운영"이 아니라 "한 명의 비전 소유자 + 한 명의 AI builder"라는 관점이 분명하다. 이건 개인 프로젝트나 소수 프로젝트에 잘 맞는다.

### 6. 운영 감각이 좋다

좋았던 점:

- `commit_docs`와 `.gitignore` 동시 고려
- branch/worktree 전략 분리
- completion marker 규약
- text mode / interactive mode / auto mode 분리
- `.continue-here.md` 같은 재개 지점 설계

이건 실제로 오래 굴려본 시스템에서 나오는 운영 디테일이다.

## 단점

### 1. 무겁다

68개 스킬, 68개 워크플로, 43개 템플릿은 강력하지만 무겁다. 작은 프로젝트나 실험에는 문서 생산 비용이 과할 수 있다.

### 2. 문서 품질이 떨어지면 전체가 무너진다

GSD는 문서가 기준이기 때문에, 초기 `PROJECT.md`나 `REQUIREMENTS.md`가 부정확하면 뒤의 계획/실행/검증이 전부 그 오차를 증폭한다.

### 3. 프로세스가 과잉 적용될 수 있다

빠른 실험에도 `context`, `research`, `verification`, `review`, `summary`를 다 켜두면 생산성이 오히려 떨어질 수 있다. `fast`, `quick`가 있긴 하지만 시스템 기본 성향은 여전히 무거운 편이다.

### 4. 팀 협업 프레임워크로는 약간 독특하다

의도적으로 anti-enterprise라서, 전통적인 팀 협업 문서나 이해관계자 정렬에는 맞지 않는다. "팀 운영 OS"라기보다 "개인/소수 개발자 실행 OS"다.

### 5. 에이전트/문서 결합도가 높다

서브에이전트 completion marker, 템플릿 구조, `.planning` 파일 규약이 서로 촘촘히 얽혀 있다. 일부만 떼어다 쓰기는 쉽지 않다.

## 특화

GSD가 특히 강한 영역은 다음이다.

- 프로젝트 초기 구조화
- 큰 범위의 작업을 페이즈 단위로 오래 끌고 가는 것
- 컨텍스트 손실 방지
- 브라운필드 코드베이스 맵핑
- 실행 이후 검증과 상태 갱신
- 문서화된 AI 개발 프로세스

반대로 즉답형 코딩, 브라우저 QA, 디자인 시안 생성 같은 것은 GSD의 핵심 특화가 아니다.

## 운영 철학

읽은 문서들에서 드러나는 철학은 이렇다.

- 코드보다 먼저 맥락을 고정한다
- 요구사항은 체크 가능해야 한다
- 모든 phase는 observable success criteria가 있어야 한다
- 오케스트레이터는 조율하고, 실행은 서브에이전트가 맡는다
- 컨텍스트는 세션 안이 아니라 파일에 남겨야 한다
- "완료"는 구현이 아니라 검증까지 끝난 상태다

이 철학은 매우 일관적이다.

## 템플릿으로 가져갈 만한 요소

당신이 나중에 "나만의 템플릿"을 만든다면 GSD에서 가장 가져갈 가치가 큰 건 아래다.

### 반드시 가져갈 만한 것

- `.planning/PROJECT.md`, `REQUIREMENTS.md`, `ROADMAP.md`, `STATE.md`의 4축
- phase / plan / summary 구조
- requirements traceability
- success criteria를 "유저 관찰 가능 상태"로 쓰는 규칙
- session continuity 파일
- `commit_docs`, worktree, branching 같은 실행 설정 분리

### 선택적으로 가져갈 것

- UI / security / validation / review 같은 전문 감사 흐름
- workspace / workstream / milestone 분리
- user profiling, intel, backlog, seeds 같은 부가 기능

### 줄여야 할 것

- 너무 많은 명령 분기
- 과도한 phase/plan 문서 수
- 작은 작업에도 full pipeline을 강제하는 감각

## 템플릿 관점 평가

당신이 만들려는 건 "여러 프로젝트에서 재사용 가능한 Codex/Claude 문서 템플릿"이다. 그 기준에서 GSD는 매우 좋은 재료다.

이유:

- 코드가 아니라 문서 체계 중심이다
- 특정 도메인보다 workflow 구조에 강하다
- 재사용 가능한 artifact naming과 lifecycle이 잘 잡혀 있다

하지만 그대로 가져오면 너무 크다. 템플릿으로는 "핵심 문서 골격 + phase 운영 규칙 + 검증 루프 일부" 정도로 추출하는 게 현실적이다.

## 최종 평가

GSD는 "AI가 큰 프로젝트를 중간에 잊지 않게 만드는 계획/실행 운영체제"다.

가장 좋은 점:

- 지속성
- 구조화
- 검증 루프
- 브라운필드 적응력

가장 큰 약점:

- 무거움
- 문서 의존성
- 부분 도입의 어려움

한마디로 요약하면:

> GSD는 템플릿화하기에 매우 좋은 뼈대이지만, 그대로 복제하기보다 강한 핵심만 남기고 슬림화해서 가져오는 편이 맞다.
