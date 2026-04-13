# Design Stage

이 문서는 shipped `design` surface에서 필요한 design 자료만 안내한다.

## Included

- `references/`
- `templates/`
- design skills
- selected design audit agent

## Intended Outputs

- `DESIGN.md`
- design-enriched `UX-IA.md`
- design-enriched `SCREEN-SPECS.md`
- optional preview outputs defined in `references/MOCKUP-PREVIEW-OUTPUTS.md`
  - recommended: standalone static `preview/index.html + styles.css + app.js`

## First Read

1. `references/START-HERE.md`
2. `references/DESIGN-CORE-OUTPUTS.md`
3. `references/DESIGN-DONE-CRITERIA.md`
4. `references/TRUST-OWNERSHIP-MATRIX.md`
5. `references/DESIGN-TO-ARCHITECTURE-HANDOFF.md`
6. optional: `references/MOCKUP-PREVIEW-OUTPUTS.md`

## Boundary

- 디자인 시스템, 상태 표현, 신뢰 신호, screen priority를 닫는다
- implementation detail이나 컴포넌트 분해는 지시하지 않는다
- visual refresh는 `DESIGN.md`, flow는 `UX-IA.md`, screen/state는 `SCREEN-SPECS.md`가 owner다
- 사용자 preview 산출물은 optional projection이며 canonical source가 아니다

## Excluded By Default

- loop protocol
- scenario matrix
- per-axis evaluator set
- validation log
