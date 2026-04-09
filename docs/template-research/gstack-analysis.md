# gstack 분석

## 한 줄 요약

gstack은 "전략적 기획 + 실제 브라우저 조작 + 리뷰 + QA + 배포"를 하나의 스킬 팩으로 묶은, 실행형 소프트웨어 팩토리다.

## 스캔 범위

- 루트 스킬 디렉터리 36개
- `test/` 파일 65개
- `bin/` 실행 스크립트 30개
- `design/src/` 16개 소스 파일
- `browse/src/` 28개 소스 파일
- 확인한 핵심 파일
  - `.vendor/gstack/README.md`
  - `.vendor/gstack/ARCHITECTURE.md`
  - `.vendor/gstack/BROWSER.md`
  - `.vendor/gstack/docs/skills.md`
  - `.vendor/gstack/package.json`
  - `.vendor/gstack/setup`
  - `.vendor/gstack/bin/gstack-config`
  - `.vendor/gstack/bin/gstack-team-init`
  - `.vendor/gstack/hosts/codex.ts`
  - `.vendor/gstack/scripts/resolvers/preamble.ts`

## 목적

gstack의 목적은 "AI가 그냥 코드 조금 도와주는 수준"을 넘어서, 실제 제품 제작 흐름 전체를 전문 역할 단위로 수행하게 만드는 데 있다.

README와 docs를 종합하면 흐름은 거의 이렇게 정리된다.

- `office-hours`: 제품 문제 재정의
- `plan-*`: CEO / Eng / Design / DX 관점 리뷰
- 구현
- `review`, `investigate`, `design-review`
- `qa`, `benchmark`, `canary`
- `ship`, `land-and-deploy`
- `retro`, `learn`

즉, gstack은 "AI 에이전트를 브라우저와 운영 습관까지 포함한 가상 팀처럼 쓰기 위한 시스템"이다.

## 구조

### 1. 스킬 팩이지만 사실상 제품이다

겉으로는 SKILL.md 모음처럼 보이지만 내부는 꽤 크다.

- 스킬 모음
- 브라우저 daemon
- 디자인 생성/반복 시스템
- Chrome extension / sidepanel
- 전역 상태 저장소
- 템플릿 기반 문서 생성기
- 다중 호스트 설치기
- 팀 부트스트랩 도구

이건 단순 프롬프트 컬렉션이 아니라 실제 제품 구조다.

### 2. 브라우저가 핵심 차별점

`ARCHITECTURE.md`와 `BROWSER.md` 기준으로 보면 gstack의 핵심은 persistent browser daemon이다.

- CLI는 얇은 클라이언트
- Bun HTTP server가 localhost에서 명령 수신
- Playwright가 Chromium을 지속 실행
- `.gstack/browse.json` 상태 파일로 연결 유지
- 첫 호출 이후 명령 지연은 대략 100~200ms

이 설계 덕분에 QA, 시각 검토, 인증 세션 유지, 페이지 클릭 자동화가 실제로 usable한 수준으로 된다.

### 3. Ref 기반 브라우징

`snapshot -> @e1/@e2 ref -> locator click` 구조가 잘 잡혀 있다. DOM에 주석을 심는 방식이 아니라 accessibility tree와 Locator를 쓰기 때문에, SPA나 CSP 환경에서도 상대적으로 안정적이다.

### 4. 생성형 문서 시스템

`SKILL.md.tmpl -> gen-skill-docs.ts -> SKILL.md` 파이프라인이 있다. 이건 상당히 좋은 설계다.

- 사람이 쓰는 부분과
- 소스코드에서 자동 생성되는 커맨드 레퍼런스

를 분리해서 문서 드리프트를 줄인다.

### 5. 글로벌 런타임 + 글로벌 상태

이 시스템은 기본적으로 글로벌 설치를 전제로 한다.

- 스킬 설치 경로: `~/.claude/skills`, `~/.codex/skills` 등
- 상태 저장: `~/.gstack`
- 텔레메트리/세션/러닝/리뷰 이력 누적

즉, repo-local 템플릿이라기보다 사용자 환경에 설치되는 플랫폼에 가깝다.

## 장점

### 1. 브라우저 기반 QA/검증 능력이 강하다

이건 gstack의 가장 큰 강점이다.

- 실제 Chromium 제어
- 쿠키 import
- headed mode
- diff / screenshot / perf / network / console
- QA 후 버그 수정 및 regression test 유도

문서형 시스템과 달리 "보여서 검증"이 가능하다.

### 2. 역할 분리가 매우 선명하다

README와 `docs/skills.md`를 보면 각 스킬이 거의 전문 직군 단위로 설계돼 있다.

- CEO
- Eng Manager
- Senior Designer
- QA Lead
- Release Engineer
- SRE
- Security Officer
- Technical Writer

이건 사용자가 "어떤 종류의 사고를 지금 빌리고 있는가"를 명확히 느끼게 한다.

### 3. 제품/디자인 감도가 높다

gstack은 단순 코드 생성기보다 제품 기획과 디자인 쪽 감도가 강하다.

- `office-hours`의 문제 재정의
- `plan-ceo-review`의 scope reframing
- `plan-design-review`, `design-review`
- `design-shotgun`, `design-html`

특히 "AI slop" 회피를 명시적으로 다루는 점이 눈에 띈다.

### 4. 실행 후반부가 강하다

많은 시스템이 계획이나 구현까지만 신경 쓰는데, gstack은 후반부가 강하다.

- `/review`
- `/qa`
- `/ship`
- `/land-and-deploy`
- `/canary`
- `/benchmark`
- `/document-release`
- `/retro`

즉 "만들고 나서 실제로 검증하고 배포하는 구간"이 강하다.

### 5. 멀티호스트 지원이 좋다

`setup`, `hosts/codex.ts` 등을 보면 Claude 전용이 아니라 Codex, Cursor, Factory, Kiro 등으로 확장되도록 잘 설계돼 있다.

### 6. 테스트와 운영성에 공을 들였다

65개 테스트 파일, 템플릿 생성, 업그레이드, relink, team mode, enforcement hook 등을 보면 취미 수준이 아니라 운영 도구로 다듬고 있다.

## 단점

### 1. 글로벌 설치와 글로벌 상태를 강하게 전제한다

이건 장점이자 단점이다.

- `~/.gstack`
- `~/.codex/skills`
- 팀 모드
- 전역 install/update

개인 환경을 만지지 않는 템플릿을 만들고 싶은 경우에는 그대로 가져오기 어렵다.

### 2. 매우 의견이 강하다

이 시스템은 중립적인 프레임워크가 아니다.

- 말투
- 워크플로 순서
- 스킬 역할 정의
- proactive behavior
- telemetry prompt
- CLAUDE.md routing

까지 꽤 강한 의견을 가진다. 잘 맞으면 강력하지만, 안 맞으면 과하다.

### 3. 프롬프트 규모가 매우 크다

이번 설치 중 생성된 Codex 스킬 기준으로도 `gstack-ship`, `gstack-plan-ceo-review`, `gstack-office-hours` 같은 스킬은 수만 토큰 급이다. 정교하지만 무겁다.

### 4. 웹/브라우저 제품에 편향돼 있다

backend-only 라이브러리나 시스템 프로그래밍 프로젝트보다, 웹 제품/UX/배포/브라우저 검증이 필요한 프로젝트에서 훨씬 강하다.

### 5. 설치 복잡도와 의존성이 있다

- Bun
- Playwright / Chromium
- 브라우저 관련 바이너리
- 글로벌 스킬 등록
- 일부 플랫폼별 분기

문서 템플릿만 복사하면 끝나는 구조가 아니다.

### 6. repo 템플릿으로는 과한 부분이 많다

당신이 만들고 싶은 건 "프로젝트별로 넣는 공통 문서 템플릿"인데, gstack은 그보다 더 큰 범위의 사용자 환경 플랫폼이다.

## 특화

gstack이 특히 강한 영역은 아래다.

- 제품 문제 재정의와 기획 압박
- 실제 브라우저 QA
- 디자인 생성과 디자인 리뷰
- 배포 직전 품질 게이트
- 릴리즈와 회고 자동화
- 멀티-AI / 멀티호스트 스킬 배포

반대로 순수한 roadmap/phase 문서 관리나 긴 호흡의 `.planning` 운영은 gstack의 핵심 특화가 아니다.

## 운영 철학

읽은 파일들 기준으로 보이는 철학은 다음과 같다.

- AI를 단순 도우미가 아니라 가상 전문팀으로 쓴다
- 실제 앱을 봐야 믿을 수 있다
- 브라우저 상태는 지속돼야 한다
- 설계와 디자인은 코드보다 앞선다
- 빌드 -> 리뷰 -> QA -> 배포 -> 회고를 하나의 파이프라인으로 본다
- 스킬 문서도 코드처럼 생성/검증해야 한다

이 철학도 상당히 일관적이다.

## 템플릿으로 가져갈 만한 요소

당신이 만들려는 건 여러 프로젝트에 공통으로 넣는 문서 템플릿이다. 그 기준에서 gstack에서 뽑아올 만한 건 다음이다.

### 반드시 가져갈 만한 것

- 역할 기반 스킬 분리 방식
- 제품/디자인/엔지니어링 관점을 분리하는 review 체계
- `Think -> Plan -> Build -> Review -> Test -> Ship -> Reflect` 순서
- 문서 템플릿 자동 생성 철학
- 팀 모드에서 쓰는 bootstrap 문구 구조
- safety / guardrail 개념

### 선택적으로 가져갈 것

- 브라우저 QA 체크리스트
- release checklist
- retro / learn 형식
- design review 기준
- proactive routing 문구

### 가져오지 않는 편이 나은 것

- 글로벌 상태 저장 구조 자체
- 텔레메트리/세션 추적/프로액티브 프롬프트
- Bun/Playwright/daemon 설치 전제
- 지나치게 큰 스킬 프롬프트

## 템플릿 관점 평가

gstack은 "문서 템플릿"보다는 "AI 작업 플랫폼"에 가깝다. 그래서 그대로 복제하는 건 맞지 않는다.

대신 템플릿 재료로서의 가치는 높다.

특히:

- 역할 정의 방식
- 리뷰와 QA의 기준
- 제품/디자인 감도
- 배포 전후의 운영 체크리스트

는 가져올 가치가 크다.

반대로:

- 글로벌 설치 방식
- 브라우저 데몬 구조
- 전역 상태 파일

은 당신 템플릿의 핵심이 되기 어렵다.

## 최종 평가

gstack은 "AI와 함께 실제 제품을 빠르게 만들고 검증하고 배포하기 위한 실행형 툴킷"이다.

가장 좋은 점:

- 브라우저 기반 QA
- 디자인/제품 감도
- 실행 후반부 품질 게이트
- 역할 기반 스킬 설계

가장 큰 약점:

- 글로벌 설치/상태 의존
- 무거운 프롬프트
- 강한 의견과 운영 개입

한마디로 요약하면:

> gstack은 템플릿의 뼈대라기보다, 템플릿에 녹여 넣을 "전문 역할, 리뷰 기준, QA/배포 체크리스트"의 원천 재료로 매우 좋다.
