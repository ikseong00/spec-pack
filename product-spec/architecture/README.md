# Architecture Template Pack

이 디렉터리는 `design -> architecture` 구간을 위한 internal authoring source다.

원칙:

- architecture는 구현 전에 `큰 구조와 위험한 결정`만 먼저 잠근다
- 완벽한 선설계가 아니라 rough-but-usable handoff를 만든다
- design intent를 다시 디자인하지 않고 system rule로 번역한다
- 목표는 `developer-judgment-ready`, not `implementation-detail-complete`다

현재 코어 방향:

- `ARCHITECTURE.md`
- `STATE-PERMISSIONS.md`
- `DATA-MODEL.md`
- `INTEGRATIONS.md`
- `NON-FUNCTIONAL.md`

start surface는 아래 순서로 읽는다.

1. [references/START-HERE.md](references/START-HERE.md)
2. [references/ARCHITECTURE-CORE-OUTPUTS.md](references/ARCHITECTURE-CORE-OUTPUTS.md)
3. design의 [DESIGN-TO-ARCHITECTURE-HANDOFF.md](../design/references/DESIGN-TO-ARCHITECTURE-HANDOFF.md)
4. [references/ARCHITECTURE-RALPH-LOOP-PROTOCOL.md](references/ARCHITECTURE-RALPH-LOOP-PROTOCOL.md)

현재 validation reference:

- [references/ARCHITECTURE-SCENARIO-MATRIX-15.md](references/ARCHITECTURE-SCENARIO-MATRIX-15.md)
- [INTERNAL-HANDOFF-REVIEW.md](INTERNAL-HANDOFF-REVIEW.md)
- [BROADER-HANDOFF-REVIEW.md](BROADER-HANDOFF-REVIEW.md)
- [CROSS-STAGE-BUNDLE-GATE.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/CROSS-STAGE-BUNDLE-GATE.md)
- [CROSS-STAGE-RALPH-LOOP-LOG.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/CROSS-STAGE-RALPH-LOOP-LOG.md)
- [DEVELOPER-HANDOFF-BOUNDARY.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/DEVELOPER-HANDOFF-BOUNDARY.md)

이 단계의 목표는:

- state를 system state로 번역
- actor split을 permission model로 번역
- source of truth와 signal requirement를 data/integration rule로 번역
- 구현 전에 치명적인 ambiguity만 제거
