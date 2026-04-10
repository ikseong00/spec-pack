# Design Agents

이 디렉터리는 design Ralph loop에서 쓰는 runner / evaluator agent 정의를 담는다.

원칙:

- runner는 실제 사용자 프록시다
- evaluator는 자기 축 하나만 평가한다
- evaluator는 design 문서를 더 예쁘게 만드는 역할이 아니라, usable 여부를 판정하는 역할이다
- 모든 agent는 `references/START-HERE.md`, `references/DEFAULT-RESOLVED-ROUTES.md`, `references/UPDATE-ENTRY-MAP.md`, `references/DESIGN-DONE-CRITERIA.md`, `references/DESIGN-USABILITY-EVALUATION.md`, `references/DESIGN-RALPH-LOOP-PROTOCOL.md`를 기준으로 움직인다

현재 포함:

- `design-scenario-runner.md`
- `design-operator-usability-evaluator.md`
- `design-question-quality-evaluator.md`
- `design-visual-coherence-evaluator.md`
- `design-ux-state-coverage-evaluator.md`
- `design-screen-contract-evaluator.md`
- `design-stitch-readiness-evaluator.md`
- `design-handoff-usability-evaluator.md`
- `design-domain-transfer-evaluator.md`
- `design-update-usability-evaluator.md`
- `design-weight-control-evaluator.md`
- `design-anti-slop-evaluator.md`
- `design-accessibility-baseline-evaluator.md`
- `design-pack-auditor.md`
