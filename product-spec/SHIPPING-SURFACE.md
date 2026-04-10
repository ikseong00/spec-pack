# Shipping Surface

이 문서는 `현재 실제로 배포되는 것`과 `아직 내부 authoring/validation 영역에 남아 있는 것`을 나눈다.

## Current Shipped Artifact

현재 실제 설치 가능한 surface는 두 층이다.

- `make-product-spec` CLI
- compatibility alias:
  - `dev-spec`
  - `spec-pack`
  - `planning-pack`
- default shipped surface:
  - `prebuild`
- compatibility minimal surface:
  - `planning`
host-aware 해석 기준은 [HOST-AWARE-INSTALL-SURFACE.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/HOST-AWARE-INSTALL-SURFACE.md)를 따른다.

설치 후 사용자에게 보이는 기본 구조:

- shared root:
  - `product-spec/`
- host-visible:
  - `skills/<prefix>-*`
  - `agents/<prefix>-*.md`

## What Current Users Get

현재 shipped default는 아래를 포함한다.

- curated planning shared surface
- curated design shared surface
- curated architecture shared surface
- curated prebuild cross-stage references
- host overlay entry skill
- host-visible authoring / audit agents
- packaged `README.md`

현재 `prebuild`는 host에 따라 shared bundle은 같고, overlay entry skill만 달라진다.

prebuild가 만드는 의도된 최종 문서:

- `PROJECT-THESIS.md`
- `PLANNING-RECORD.md`
- `RESEARCH.md`
- `PRD.md`
- `UX-IA.md`
- `SCREEN-SPECS.md`
- `BUSINESS-OPS.md`
- `EXECUTION-HANDOFF.md`
- `DESIGN.md`
- `ARCHITECTURE.md`
- `STATE-PERMISSIONS.md`
- `DATA-MODEL.md`
- `INTEGRATIONS.md`
- `NON-FUNCTIONAL.md`

## Compatibility Minimal Surface: Planning

`--pack planning`은 더 작은 호환용 설치 경로다.

planning pack이 만드는 최종 문서:

- `PROJECT-THESIS.md`
- `PLANNING-RECORD.md`
- `RESEARCH.md`
- `PRD.md`
- `UX-IA.md`
- `SCREEN-SPECS.md`
- `BUSINESS-OPS.md`
- `EXECUTION-HANDOFF.md`

## What Is Validated But Not Shipped Yet

아래는 검증과 authoring은 진행되었지만 아직 개별 shipped installer surface가 아니다.

- `design/`
- `architecture/`
- `CROSS-STAGE-*`
- `DEVELOPER-HANDOFF-BOUNDARY.md`
- `CODEX-OPERATING-MEMORY.md`

즉 현재 상태는:

- `validated internally`
- `not shipped as standalone pack`

## Internal-Only By Default

아래는 shipping default에 넣지 않는다.

- `RALPH-LOOP-LOG.md`
- internal review 문서
- internal authored bundles
- validation fixture
- validation-only notes
- loop scenario matrix
- loop protocol / memory

worked example은 공개 가능한 경우에만 별도 surface로 유지할 수 있지만, shipping default에는 포함하지 않는다.

## Why The Boundary Exists

- 현재 installer와 package name은 `make-product-spec` 기준으로 공개한다
- design / prebuild / architecture는 좋은 내부 surface이지만, packaged user surface로는 아직 분리/정리 중이다
- shipped pack은 `easy-to-use`를 우선하고, internal loop/harness artifact는 숨긴다

## Next Packaging Step

다음 packaging 후보는 아래 순서다.

1. `prebuild` shipped surface onboarding polish
2. host-aware overlay surface audit
3. publish checklist hardening
4. `design` / `architecture` 개별 pack을 계속 막을지 최종 결정
