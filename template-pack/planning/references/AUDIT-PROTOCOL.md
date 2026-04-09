# Audit Protocol

이 문서는 planning pack의 gate를 executable audit로 바꾸기 위한 프로토콜이다.

## 1. Audit Types

### stage-exit audit

입력:

- current skill output
- planning state
- planning record

pass condition:

- current state mandatory slot 충족
- recommended next skill이 존재
- unresolved blocker가 footnote로 숨겨져 있지 않다

fail severity:

- missing mandatory slot: `BLOCKER`
- weak evidence with explicit label: `WARNING`

### synthesize / done audit

입력:

- 8 core docs
- planning record
- one-page artifact if present

pass condition:

- [PLANNING-DONE-CRITERIA.md](PLANNING-DONE-CRITERIA.md) hard gate 충족
- exactly one of `next_experiment` or `next_implementation_input`
- core bundle ready

### freshness / reconciliation audit

입력:

- canonical docs
- derived docs
- metadata

pass condition:

- `source_of_truth_for` 중복 없음
- stale doc 없음
- update trigger가 발생한 문서가 reconcile됨

### traceability audit

입력:

- PRD
- UX-IA
- SCREEN-SPECS
- EXECUTION-HANDOFF

pass condition:

- `must_have -> flow -> screen -> phase -> task -> acceptance` traceability 유지
- required conditional block projection 유지

## 2. Issue Reporting

모든 audit는 아래 issue schema를 쓴다.

```yaml
- dimension: traceability
  severity: BLOCKER
  finding: must_have item has no screen mapping
  affected_field: PRD.must_have.booking_verification
  suggested_fix: add mapped_must_have row in SCREEN-SPECS and acceptance row in EXECUTION-HANDOFF
```

## 3. Severity Rules

- `BLOCKER`: ready/done 금지
- `WARNING`: usable하지만 revision 권장
- `INFO`: 참고용

severity mapping:

- ready/done를 직접 막는 missing required slot, canonical conflict, traceability break, projection miss는 `BLOCKER`
- weak but explicitly labeled evidence, stale non-owning doc, incomplete but non-route-changing support detail은 `WARNING`
- readability, compression, optional enrichment only는 `INFO`

## 4. Repair Order

issue가 여러 개면 아래 순서로 고친다.

1. source-of-truth / canonical ownership
2. missing mandatory slots
3. contradictory decisions
4. traceability gaps
5. stale docs
6. style / compression / readability

## 5. Audit Output Envelope

checker output은 [SKILL-AGENT-CONTRACTS.md](SKILL-AGENT-CONTRACTS.md)의 checker envelope를 그대로 재사용한다.

required metadata header:

```yaml
audit_type: stage_exit | synthesize_done | freshness_reconciliation | traceability
audit_result: verification_passed | issues_found | planning_blocked
status: DONE | DONE_WITH_CONCERNS | BLOCKED | NEEDS_CONTEXT
confidence: high | medium | low
evidence_strength: strong | mixed | weak | missing
revision_iteration: 0
recommended_next_step: revise-prd
```

marker mapping:

- `## VERIFICATION PASSED`
- `## ISSUES FOUND`
- `## PLANNING BLOCKED`

- `## VERIFICATION PASSED` -> `audit_result: verification_passed`, `status: DONE`
- `## ISSUES FOUND` -> `audit_result: issues_found`, `status: DONE_WITH_CONCERNS`
- `## PLANNING BLOCKED` -> `audit_result: planning_blocked`, `status: BLOCKED` 또는 `NEEDS_CONTEXT`

required sections:

- `## Summary`
- `## Issues`
- `## Repair Order`
- `## Open Questions`
- `## Escalation`

when `revision_iteration > 0`, checker output은 아래 `revision_delta`를 같이 남긴다.

```yaml
revision_delta:
  previous_blocker_count: 2
  previous_warning_count: 1
  delta_vs_previous: improved | flat | regressed
  attempted_repairs:
    - ...
  stall_reason: none | blocker-count-flat | warning-count-flat | conflicting-evidence
```
