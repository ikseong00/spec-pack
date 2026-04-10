# Packaging Readiness

이 문서는 현재 planning pack의 packaging 상태와 남은 polish 항목을 정리하는 운영 문서다.

## Goal

packaging readiness의 목적은 아래 3가지다.

- final export 범위를 고정한다
- validation artifact와 shipping artifact를 분리한다
- shipping-ready 수준까지 남은 debt를 명시한다

## Final Export Set

최종 템플릿 본체에 들어갈 것:

- `skills/`
- `agents/`
- `references/`
- `templates/`
- packaged `README.md` from `PACKAGE-README.md`

## Validation-Only Artifacts

최종 템플릿 본체에서 제외할 것:

- `worked-examples/`
- `RALPH-LOOP-LOG.md`
- scenario-run scratch notes
- intermediate review summaries

유지할 수는 있지만 shipping default에는 넣지 않는다.

## Current Readiness

현재 상태:

- planning contract: strong
- route resolver / modifier handling: strong
- operator onboarding: good
- template usability: good
- packaging readiness: implemented

현재 verdict:

- `Broad Usable`
- `Packaged for Local/Global Host Install`

## What Is Already Ready

- 13 skills / 13 agents structure
- planning record + 8 core docs output contract
- canonical concept registry
- control plane / done criteria / projection matrix
- thin onboarding surfaces:
  - `START-HERE.md`
  - `DEFAULT-RESOLVED-ROUTES.md`
  - `OPERATOR-STARTER.md`

## Remaining Packaging Debt

- final naming polish, especially some template section labels
- packaging-specific onboarding language
- packaged-form host validation beyond local smoke tests
- publish-time package naming / versioning policy

현재 상태:

- `START-HERE.md` 있음
- `DEFAULT-RESOLVED-ROUTES.md` 있음
- `PACKAGING-IMPORT-GUIDE.md` 있음
- public `make-product-spec` CLI scaffold 있음
- compatibility alias `planning-pack` command 유지
- 따라서 남은 건 actual install logic이 아니라 host-polish와 publish policy 쪽이다

## Ready-To-Package Checklist

- skills body quality is stable across repeated Ralph loops
- agent body quality is stable across repeated Ralph loops
- starter / default route / control plane agree on route semantics
- 8 core templates agree with planning record ownership and projection matrix
- worked examples are not required for operator success
- final export set and exclude set are explicit

## Current Mapping

- `.claude`
  - `.claude/skills/<prefix>-*`
  - `.claude/agents/<prefix>-*`
  - `.claude/planning-pack/`
- `.codex`
  - `.codex/skills/<prefix>-*`
  - `.codex/agents/<prefix>-*`
  - `.codex/planning-pack/`

실제 import/install usage는 [PACKAGING-IMPORT-GUIDE.md](PACKAGING-IMPORT-GUIDE.md)를 따른다.
