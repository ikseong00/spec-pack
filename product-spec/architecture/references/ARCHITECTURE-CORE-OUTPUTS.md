# Architecture Core Outputs

이 문서는 architecture 단계의 코어 산출물을 정의한다.

원칙:

- architecture는 rough하게 간다
- 구현 전에 반드시 잠가야 하는 system rule만 먼저 정한다
- 세부 module/class 설계는 implementation 중에 진화해도 된다
- 개발자가 구현 방향을 판단할 수 있게 하되, 구현 방식까지 지시하지 않는다

## Core Outputs

1. `ARCHITECTURE.md`
2. `STATE-PERMISSIONS.md`
3. `DATA-MODEL.md`
4. `INTEGRATIONS.md`
5. `NON-FUNCTIONAL.md`

## What Each Output Must Answer

### `ARCHITECTURE.md`

- 시스템 경계는 어떻게 나뉘는가
- 어떤 runtime / app surface / admin or ops surface가 있는가
- 어떤 큰 흐름이 어디서 처리되는가
- entitlement, gate, public projection이 architecture-shaping이면 어디서 잠기는가

### `STATE-PERMISSIONS.md`

- must-render state가 어떤 system state로 번역되는가
- actor split이 어떤 permission / redaction rule로 번역되는가
- override, denial, recovery, escalation은 누가 어떤 조건에서 수행하는가
- irreversible action과 derived state trigger는 무엇인가
- gate or unlock condition이 무엇인가

### `DATA-MODEL.md`

- source of truth는 무엇인가
- 어떤 entity / record / derived state가 필요한가
- freshness, proof, audit에 필요한 필드는 무엇인가
- trust-critical event와 audit record는 무엇인가
- public projection / read model / index rule이 필요한가

### `INTEGRATIONS.md`

- 외부 시스템과 어떤 계약이 필요한가
- write authority와 reconciliation boundary는 어디인가
- manual handoff와 system handoff는 어디서 나뉘는가
- queue 또는 async boundary는 어디인가
- offline sync or restore boundary가 필요한가

### `NON-FUNCTIONAL.md`

- 성능, 보안, 접근성, 감사, 신뢰, 관측성 중 무엇이 architecture shaping인지
- 어떤 위험이 hard requirement인가

## Rough Rule

아래는 architecture 전에 잠그고, 그 외는 implementation 중에 정해도 된다.

- core state model
- permission / visibility model
- source of truth
- integration boundary
- audit / proof / freshness requirement
- 치명적인 performance or reliability constraint

반대로 아래는 나중으로 미뤄도 된다.

- 세부 module tree
- 함수 이름
- 내부 class 분리
- framework-specific folder polish
- endpoint 이름
- component decomposition
- exhaustive payload schema

## Non-Goal

이 단계는 아래를 산출하지 않는다.

- full API spec
- screen component spec
- framework-specific implementation plan
