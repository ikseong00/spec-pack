# Packaging Decision

이 문서는 `다음 shipped package를 어떤 형태로 낼지`에 대한 현재 결정을 고정한다.

## Decision

다음 packaging 후보는 `stage-by-stage packs`가 아니라 `unified spec pack`으로 간다.

즉:

- `spec-pack`
  - 현재 실제 shipped shared root
  - planning + design + rough architecture를 하나의 end-user surface로 묶는다
- `planning-pack`
  - compatibility minimal path

## Why Not Stage Packs

`design-pack`, `architecture-pack`를 따로 내면 아래 문제가 생긴다.

- 사용자가 어디서 시작해야 하는지 헷갈린다
- shared docs(`UX-IA.md`, `SCREEN-SPECS.md`) ownership이 package boundary에서 다시 흔들린다
- install surface가 많아져 `easy-to-use` 목표와 충돌한다
- operator가 stage handoff를 package 선택 문제로 착각할 수 있다

## Why Unified Spec Pack

- 사용자는 `planning -> design -> architecture`를 하나의 pre-implementation flow로 이해한다
- shared docs와 handoff contract를 한 package 안에서 설명할 수 있다
- 개발자 handoff용 문서를 한 bundle로 전달하기 쉽다
- internal validation 결과도 `cross-stage` 기준으로 이미 누적돼 있다

## Current Boundary

현재 shipped shared root는 `spec-pack`이다.

즉 상태는:

- shipped:
- `spec-pack`
- compatibility minimal:
  - `planning-pack`

## Unified Spec Pack Principle

현재 shipped `spec-pack`은 아래 원칙을 따른다.

- implementation detail은 주지 않는다
- developer-handoff docs까지만 제공한다
- service-spec completeness를 우선한다
- internal loop/log/fixture는 숨긴다
- worked example은 optional 공개 surface로만 둔다
- host-aware packaging을 고려한다
- current installer에서는 default surface로 제공한다

## Host-Aware Packaging Principle

현재 shipped `spec-pack`은 `layout만 host-aware`가 아니라 `content overlay도 host-aware`로 가는 것이 맞다.

단, 아래 경계는 지킨다.

- shared docs와 templates는 fork하지 않는다
- host별 차이는 operator/agent/skill surface에 둔다
- service-spec meaning은 host에 따라 달라지지 않는다

관련 기준:

- [HOST-AWARE-INSTALL-SURFACE.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack/HOST-AWARE-INSTALL-SURFACE.md)
- [prebuild/EXPORT-MANIFEST-CANDIDATE.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack/prebuild/EXPORT-MANIFEST-CANDIDATE.md)
