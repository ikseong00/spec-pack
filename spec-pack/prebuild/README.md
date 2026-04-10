# Prebuild Template Pack

이 디렉터리는 `planning + design`을 한 번에 검증하는 통합 authoring source다.

목표:

- planning이 만든 제품 정의를 design이 다시 추측하지 않게 한다
- `UX-IA.md`, `SCREEN-SPECS.md`를 planning-only 문서가 아니라 shared doc으로 운영한다
- 최종적으로 `planning -> design -> architecture`로 자연스럽게 이어지는 prebuild bundle을 만든다

현재 포함:

- `references/START-HERE.md`
- `references/UPDATE-ENTRY-MAP.md`
- `references/PREBUILD-CORE-OUTPUTS.md`
- `references/PLANNING-TO-DESIGN-HANDOFF.md`
- `references/SHARED-DOC-OWNERSHIP-MATRIX.md`
- `references/PREBUILD-RALPH-LOOP-PROTOCOL.md`
- `references/PREBUILD-LOOP-MEMORY.md`
- `references/PREBUILD-SCENARIO-MATRIX-30.md`
- `references/PREBUILD-SCENARIO-MATRIX-50.md`
- `agents/`
- `hosts/`
- `RALPH-LOOP-LOG.md`
- `internal-authored-bundles/`
- `INTERNAL-AUTHORED-BUNDLE-REVIEW.md`
- `worked-examples/`
- `PACKAGE-README.md`
- `PACKAGING-READINESS.md`

hard-case owner freeze를 빨리 채울 때는 planning의
[OWNER-FREEZE-QUICK-FILL-CARDS.md](../planning/references/OWNER-FREEZE-QUICK-FILL-CARDS.md)를 같이 본다.
서비스 명세 밀도를 높일 때는
[SERVICE-SPEC-AUTHORING-RULES.md](../planning/references/SERVICE-SPEC-AUTHORING-RULES.md)를 같이 본다.

`internal-authored-bundles/`는 배포용이 아니라 internal fixture다.
공개 가능한 예시는 `worked-examples/`에서 따로 유지한다.

ECC에서 가져오는 것은 배포 구조가 아니라 loop 운영 방식이다.

- `loop operator`
- `harness optimizer`
- `compliance auditor`
- wave memory snapshot

cross-stage strict gate와 누적 loop 기록은 아래를 같이 본다.

- [CROSS-STAGE-BUNDLE-GATE.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack/CROSS-STAGE-BUNDLE-GATE.md)
- [CROSS-STAGE-RALPH-LOOP-PROTOCOL.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack/CROSS-STAGE-RALPH-LOOP-PROTOCOL.md)
- [CROSS-STAGE-RALPH-LOOP-LOG.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack/CROSS-STAGE-RALPH-LOOP-LOG.md)

통합 코어 산출물은 [references/PREBUILD-CORE-OUTPUTS.md](references/PREBUILD-CORE-OUTPUTS.md)를 따른다.

핵심 원칙:

1. planning-owned 문서는 planning이 canonical owner다
2. `DESIGN.md`는 design-owned 문서다
3. `UX-IA.md`, `SCREEN-SPECS.md`는 shared doc이지만 upstream source-of-truth를 덮어쓰지 않는다
4. design은 planning에서 이미 잠근 target, scope, ops reality를 함부로 다시 열지 않는다
5. contradiction이 생기면 `예쁘게 봉합`하지 말고 owning doc로 되돌아간다

이 디렉터리는 internal loop 운영용이다. 최종 설치형 pack 구조는 나중에 별도로 묶는다.

future unified package candidate 문서는 아래를 본다.

- [PACKAGE-README.md](PACKAGE-README.md)
- [FUTURE-PACKAGING-SURFACE.md](FUTURE-PACKAGING-SURFACE.md)
- [PACKAGING-READINESS.md](PACKAGING-READINESS.md)
- [hosts/README.md](hosts/README.md)
- [EXPORT-MANIFEST-CANDIDATE.md](EXPORT-MANIFEST-CANDIDATE.md)
