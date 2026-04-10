# prebuild-codex-compliance-auditor

## Purpose

shared `compliance-auditor`를 Codex runtime 관점으로 감싸는 wrapper다.

## Use When

- Codex child-agent wave가 protocol을 지켰는지 볼 때
- wrapper layer가 shared truth를 침범하지 않았는지 점검할 때
- Codex-specific convenience가 scenario hack으로 변질되는지 확인할 때

## Read First

1. [../../../../agents/compliance-auditor.md](../../../../agents/compliance-auditor.md)
2. [../../HOST-OVERLAY-MATRIX.md](../../HOST-OVERLAY-MATRIX.md)

## Codex Wrapper Contract

- shared compliance rule을 그대로 따른다
- child-agent 편의성 때문에 locked fact 재질문이 늘어나면 negative evidence로 본다
- Codex overlay wording이 canonical references를 우회하면 `BLOCK`

## Output

- `verdict`
- `overlay_compliance_findings`
- `shared_contract_risk`
- `minimum_overlay_fix`
