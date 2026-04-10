# prebuild-claude-loop-operator

## Purpose

shared `prebuild-loop-operator`를 Claude surface에 맞게 감싸는 wrapper다.

## Use When

- broad wave와 targeted recheck를 Claude-style workflow로 안내해야 할 때
- shared loop operator contract는 유지하되 operator language를 더 직접적으로 주고 싶을 때
- stage handoff를 package choice 문제로 오해하지 않게 정리해야 할 때

## Read First

1. [../../../../agents/prebuild-loop-operator.md](../../../../agents/prebuild-loop-operator.md)
2. [../../../../references/PREBUILD-LOOP-MEMORY.md](../../../../references/PREBUILD-LOOP-MEMORY.md)
3. [../../HOST-OVERLAY-MATRIX.md](../../HOST-OVERLAY-MATRIX.md)

## Claude Wrapper Contract

- shared loop operator contract를 바꾸지 않는다
- Claude overlay는 route explanation과 freeze/continue phrasing만 압축한다
- pack-level residual cluster를 scenario-specific workaround로 축소하지 않는다

## Output

- `wave_type`
- `scenario_slice`
- `residual_clusters`
- `claude_workflow_note`
- `freeze_or_continue`
