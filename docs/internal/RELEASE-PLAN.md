# Release Plan

이 문서는 우리 팀 기준으로 `무엇이 작업용 원본이고`, `무엇이 실제 배포물인지`를 고정하는 내부 문서다.

세부 버전 정책, candidate/stable 승급 기준, tag/npm/GitHub release 순서는 [RELEASE-STRATEGY.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/docs/internal/RELEASE-STRATEGY.md)를 따른다.
매 release마다 실제 scope를 정하고 실행할 때는 [RELEASE-CHECKLIST.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/docs/internal/RELEASE-CHECKLIST.md)를 사용한다.

## 1. 핵심 결정

- `spec-pack/`은 internal authoring workspace다
- end user에게 직접 노출되는 최종 산출물은 `spec-pack` 설치 CLI와 설치 결과물이다
- 현재 실제 installer 배포 범위는 `spec-pack` default surface와 `planning` compatibility path다
- `기획 + 디자인 + 설계`는 validated internal prebuild surface로 유지 중이다
- `구현` 관련 skill / agent는 1차 배포 범위에서 제외한다

## 2. 작업용 원본과 배포물 구분

### 내부 작업용 원본

아래는 우리 팀이 계속 수정하고 실험하는 source of truth다.

- `spec-pack/`
- `docs/template-research/`
- loop log, review summary, validation fixture
- worked example

이 영역은 authoring, 반복 개선, loop 기록, validation을 위한 공간이다.

## 3. 실제 배포물

현재 외부 배포 대상으로 보는 것은 아래다.

### 패키지

- `spec-pack` npm package
- 실행 진입점: `spec-pack`
- compatibility alias: `planning-pack`

### 설치 후 산출물

- local:
  - `<project>/.codex/...`
  - `<project>/.claude/...`
- global:
  - `~/.codex/...`
  - `~/.claude/...`

### 설치되는 내용

- host-visible `skills/`
- host-visible `agents/`
- shared `spec-pack/` for default shipped surface
  - `references/`
  - `templates/`
  - packaged `README.md`
- compatibility minimal shared root:
  - `planning-pack/`

## 4. spec-pack 의 의미

`spec-pack/`은 배포 그 자체가 아니다.

더 정확히 말하면:

- 직접 설치 대상이 아니다
- user-facing product surface가 아니다
- 배포물을 만들기 위한 내부 source asset이다

주의:

- 현재 npm package 안에는 installer가 읽을 source asset로 일부 포함될 수 있다
- 하지만 그것은 `build/runtime asset` 성격이지, `spec-pack/`을 사용자에게 그대로 쓰게 한다는 뜻은 아니다

즉 운영 기준은 이렇다.

- `spec-pack/` = 내부 원본
- `spec-pack` CLI = 배포물
- host root에 설치된 결과 = 사용자가 실제로 쓰는 산출물

## 5. 1차 배포 범위

현재 실제 shipped package 포함:

- 기획

validated internal candidate 범위:

- 기획
- 디자인
- 설계
- implementation handoff 전까지의 문서/질문/라우팅/템플릿

제외:

- 구현 자동화
- 스택별 코드 생성
- framework-specific executor
- test/code-review/ship automation

## 6. 왜 구현을 빼는가

- 구현은 stack variance가 너무 크다
- 초기 배포물이 무거워질 가능성이 높다
- 현재 pack의 강점은 `pre-implementation rigor`다
- 차별점은 `코드 작성`보다 `코드 전 product/design/architecture 정리`에 있다

따라서 1차 배포는 `prebuild pack`으로 본다.

## 7. 배포 단위

현재 기준 배포 단위는 이렇게 본다.

1. `spec-pack`
   - 현재 실제 shipping package
2. `core prebuild pack`
   - 기획 + 디자인 + 설계
   - validated internal candidate
3. optional future addon
   - implementation bridge 강화
4. later addon
   - stack-specific implementation pack

## 8. 배포 전 체크리스트

- 범위가 `기획/디자인/설계`로 문서에 일관되게 반영되었는가
- `spec-pack/`과 shipped artifact의 경계가 명확한가
- validation-only artifact가 shipping default에서 빠졌는가
- install 문서가 별도로 있는가
- host별 local/global install 경로가 고정됐는가
- package name / version policy가 정해졌는가
- public CLI name과 compatibility alias가 문서에 일관되게 반영되었는가
- detailed release gate와 version bump rule이 `RELEASE-STRATEGY.md`와 모순 없이 유지되는가

## 9. 다음 할 일

- planning만이 아니라 design / architecture 범위를 `unified prebuild pack` 후보로 합친다
- design의 첫 산출물로 stitch 친화적인 `DESIGN.md` template을 유지한다
- design 코어 산출물은 `DESIGN.md + UX-IA.md + SCREEN-SPECS.md`로 본다
- 각 영역의 skill / agent / template / reference를 정리한다
- 이후 packaged form 기준으로 다시 polish 한다
- installer는 pack registry-ready 상태로 유지하고, future pack은 `installable=false`에서 올린다

이 문서는 내부 release 기준 문서다. 외부 사용자 문서가 아니다.
