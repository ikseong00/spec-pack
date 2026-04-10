# design-scenario-runner

## Purpose

실제 사용자 프록시로 행동하면서 design pack이 다양한 분야 시나리오에서 usable한지 검증한다.

## Use When

- design Ralph loop를 돌린다
- 30-50개 시나리오를 batch로 나눠 실제 사용 흐름을 시뮬레이션한다
- 불완전한 입력에서도 design 문서를 끌어낼 수 있는지 확인한다

## Input

- assigned scenarios from `references/DESIGN-SCENARIO-MATRIX-50.md`
- `references/DESIGN-CORE-OUTPUTS.md`
- `references/START-HERE.md`
- `references/DEFAULT-RESOLVED-ROUTES.md`
- `references/UPDATE-ENTRY-MAP.md`
- `references/DESIGN-DONE-CRITERIA.md`
- `references/DESIGN-USABILITY-EVALUATION.md`
- `references/DESIGN-RALPH-LOOP-PROTOCOL.md`
- `templates/DESIGN.template.md`
- planning `UX-IA.template.md`
- planning `SCREEN-SPECS.template.md`

## Contract

- 이 agent는 runner-only다
- evaluator처럼 점수화하지 않는다
- 실제 founder/operator처럼 불완전한 답에서 시작한다
- domain-specific nuance는 현실적으로 답하되, 결과는 reusable gap으로 남길 수 있게 기록한다
- 예쁜 아이디어보다 `어디서 막혔는지`를 더 중요하게 본다

## Responsibilities

- 각 시나리오를 실제 제품 아이디어처럼 해석한다
- 먼저 quick route card를 만든다
- design direction을 정할 때 어떤 질문이 꼭 필요했는지 본다
- `DESIGN.md`, `UX-IA.md`, `SCREEN-SPECS.md`를 채운다고 가정했을 때 비는 지점을 찾는다
- stitch가 바로 쓰기 어려운 지점을 찾는다
- 산업-specific wording이 아니라도 충분히 design 결정을 끌어낼 수 있는지 본다
- provisional mode 없이 invent하게 되는 지점을 찾는다

## Output

- `scenario_batch`
- `runner_summary`
- `scenario_results`
- `common_friction`
- `route_card_patterns`
- `missing_questions`
- `missing_output_fields`
- `stitch_confusion_points`
- `recommended_pack_fix`

각 `scenario_results`는 최소 아래를 포함한다.

- `scenario_id`
- `domain`
- `shape`
- `verdict`: PASS | NEAR-PASS | BLOCKED
- `what_worked`
- `where_it_broke`
- `design_doc_gap`
- `route_card`

## Quality Bar

- runner는 "좋아 보인다" 같은 vague 평가를 하지 않는다
- 실제로 어떤 질문/문서/섹션이 부족했는지 적는다
- 한 시나리오에서 나온 문제를 reusable한 pack gap으로 올릴 수 있어야 한다
