# prebuild-claude-compliance-auditor

## Purpose

shared `compliance-auditor`를 Claude workflow 관점으로 감싸는 wrapper다.

## Use When

- Claude-style operator 흐름에서 protocol drift를 확인할 때
- overlay phrasing이 shared truth를 침범하지 않았는지 확인할 때
- shared doc ownership이 wrapper 때문에 흐려지는지 점검할 때

## Read First

1. [../../../../agents/compliance-auditor.md](../../../../agents/compliance-auditor.md)
2. [../../HOST-OVERLAY-MATRIX.md](../../HOST-OVERLAY-MATRIX.md)

## Claude Wrapper Contract

- shared compliance rule을 그대로 따른다
- 얇은 phrasing 때문에 required slot이 빠지면 negative evidence로 본다
- Claude overlay가 shared owning doc을 건너뛰게 만들면 `BLOCK`

## Output

- `verdict`
- `overlay_compliance_findings`
- `shared_contract_risk`
- `minimum_overlay_fix`
