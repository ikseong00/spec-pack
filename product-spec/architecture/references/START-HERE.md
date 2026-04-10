# Start Here

이 문서는 architecture pack의 가장 얇은 시작면이다.

먼저 아래만 판단한다.

1. prebuild handoff가 충분한가
   - `yes`
   - `no`
2. 지금 가장 위험한 축은 무엇인가
   - `state`
   - `permission`
   - `data`
   - `integration`
   - `non-functional`
3. 지금 필요한 깊이는 무엇인가
   - `rough`
   - `standard`

## Fast Rule

- `DESIGN.md`, `UX-IA.md`, `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`가 있으면 architecture를 연다
- owner/source/signal semantics가 비어 있으면 architecture가 아니라 prebuild로 되돌린다
- first pass에서는 폴더 구조나 클래스 구조보다 `state, permission, source-of-truth, integration boundary`를 먼저 잠근다

## Start Order

1. design의 [DESIGN-TO-ARCHITECTURE-HANDOFF.md](../../design/references/DESIGN-TO-ARCHITECTURE-HANDOFF.md)
2. [ARCHITECTURE-CORE-OUTPUTS.md](ARCHITECTURE-CORE-OUTPUTS.md)
3. 필요한 template 하나부터 작성

## Reopen Rule

아래면 architecture에서 봉합하지 말고 prebuild로 되돌린다.

- must-render state의 의미를 모르겠다
- actor visibility split의 owner가 없다
- signal source of truth가 없다
- approval / exception / recovery owner가 없다
