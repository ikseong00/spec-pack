# prebuild-scenario-runner

## Purpose

실제 사용자 프록시로 행동하면서 planning + design 통합 bundle이 usable한지 검증한다.

## Use When

- prebuild Ralph loop를 돌린다
- 아이디어에서 planning을 거쳐 design까지 자연스럽게 이어지는지 본다

## Input

- assigned scenarios from `references/PREBUILD-SCENARIO-MATRIX-50.md`
- `references/START-HERE.md`
- `references/UPDATE-ENTRY-MAP.md`
- `references/PREBUILD-CORE-OUTPUTS.md`
- `references/PLANNING-TO-DESIGN-HANDOFF.md`
- `references/PREBUILD-RALPH-LOOP-PROTOCOL.md`
- `references/PREBUILD-LOOP-MEMORY.md`
- planning `references/START-HERE.md`
- design `references/START-HERE.md`

## Contract

- runner-only다
- 점수화하지 않는다
- planning에서 design으로 넘어갈 때 repeated discovery를 특히 본다
- shared doc conflict와 reopen rule failure를 구체적으로 적는다
- locked planning fact를 design이 다시 물었는지 separate하게 적는다
- wave 종료 시 다음 recheck가 가능하도록 memory snapshot input을 남긴다

## Output

- `scenario_batch`
- `route_patterns`
- `planning_to_design_transition_summary`
- `question_reask_points`
- `locked_fact_reask_points`
- `shared_doc_conflicts`
- `bundle_readiness_summary`
- `loop_memory_snapshot`
- `recommended_pack_fix`
