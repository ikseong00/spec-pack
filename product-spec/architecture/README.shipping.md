# Architecture Stage

이 문서는 shipped `architecture` surface에서 필요한 rough architecture 자료만 안내한다.

## Included

- `references/`
- `templates/`

## Intended Outputs

- `ARCHITECTURE.md`
- `STATE-PERMISSIONS.md`
- `DATA-MODEL.md`
- `INTEGRATIONS.md`
- `NON-FUNCTIONAL.md`

## First Read

1. `references/START-HERE.md`
2. `references/ARCHITECTURE-CORE-OUTPUTS.md`
3. `references/ARCHITECTURE-DONE-CRITERIA.md`

## Boundary

- 큰 구조와 위험한 결정만 잠근다
- 서비스/상태/권한 의미가 흔들리지 않게 한다
- final API schema, component/module 설계, infra vendor 선택은 강제하지 않는다

## Excluded By Default

- loop protocol
- scenario matrix
- internal handoff review
- validation log
