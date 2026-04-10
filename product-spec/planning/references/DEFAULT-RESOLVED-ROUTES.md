# Default Resolved Routes

이 문서는 first-time operator가 starter matrix 전체를 스캔하지 않고도,
가장 흔한 shape에서 `resolved_route`를 빠르게 고르기 위한 thin surface다.

원칙:

- 이것은 quickstart helper다
- canonical source는 [CONTROL-PLANE.md](CONTROL-PLANE.md)와 [OPERATOR-STARTER.md](OPERATOR-STARTER.md)다
- route는 `base route + triggered stress promotion + auto_inserted_owner_skills`로 읽는다

## Quick Use

1. 아래에서 가장 비슷한 row 하나를 고른다
2. `stress trigger`가 있으면 적는다
3. `resolved_route`를 그대로 시작 route로 쓴다
4. 더 복잡하면 [OPERATOR-STARTER.md](OPERATOR-STARTER.md)로 올라간다

## Default Route Table

| Shape | Common trigger | Resolved route |
| --- | --- | --- |
| local directory / discovery | freshness, duplicate, claim, ranking trust | `idea-discovery -> problem-validation -> user-research-analysis -> market-competitor-research -> data-source-strategy -> mvp-scope -> ux-use-case-strategy -> planning-synthesis` |
| local discovery + booking | availability, slot authority, waitlist, blackout | `idea-discovery -> problem-validation -> user-research-analysis -> data-source-strategy -> ux-use-case-strategy -> stakeholder-rollout-strategy -> planning-synthesis` |
| retained consumer app | weak evidence, repeat uncertainty, first value unclear | `idea-discovery -> problem-validation -> hypothesis-validation -> user-research-analysis -> mvp-scope -> ux-use-case-strategy -> acquisition-retention-strategy -> planning-synthesis` |
| privacy-sensitive habit product | role visibility, sensitive notes, reminder privacy | `idea-discovery -> problem-validation -> hypothesis-validation -> user-research-analysis -> mvp-scope -> ux-use-case-strategy -> acquisition-retention-strategy -> planning-synthesis` |
| review / approval queue | review SLA, approval threshold, regrade, callback | `idea-discovery -> problem-validation -> user-research-analysis -> ux-use-case-strategy -> data-source-strategy -> stakeholder-rollout-strategy -> planning-synthesis` |
| artifact-controlled internal workflow | required artifacts, step owner, signoff, escalation | `idea-discovery -> problem-validation -> user-research-analysis -> data-source-strategy -> ux-use-case-strategy -> stakeholder-rollout-strategy -> planning-synthesis` |
| workflow / internal ops | source of truth, required artifacts, approval or escalation | `idea-discovery -> problem-validation -> user-research-analysis -> data-source-strategy -> ux-use-case-strategy -> stakeholder-rollout-strategy -> planning-synthesis` |
| marketplace / transaction | verification, dispute, payout, no-show, support recovery | `idea-discovery -> problem-validation -> market-competitor-research -> data-source-strategy -> stakeholder-rollout-strategy -> mvp-scope -> ux-use-case-strategy -> planning-synthesis` |
| content / membership / progression | package ladder, paywall, completion, member access | `idea-discovery -> problem-validation -> user-research-analysis -> acquisition-retention-strategy -> monetization-strategy -> mvp-scope -> ux-use-case-strategy -> planning-synthesis` |
| platform / integration | auth, dependency risk, onboarding friction, enterprise signal | `idea-discovery -> problem-validation -> data-source-strategy -> ux-use-case-strategy -> stakeholder-rollout-strategy -> planning-synthesis` |
| hybrid service ops / offline | dispatch, field role, callback handoff, sync recovery | `idea-discovery -> problem-validation -> user-research-analysis -> data-source-strategy -> ux-use-case-strategy -> stakeholder-rollout-strategy -> planning-synthesis` |

## Stress Trigger Shortcuts

- `waitlist`, `capacity`, `quota`, `blackout`, `double-book`, `MOQ`
  - add `constraint_exception_contract`
- `appeal`, `regrade`, `callback`, `no-show`, `schedule change`, `support recovery`, `delivery exception`
  - add `exception_recovery_contract`
- `package ladder`, `paywall`, `entitlement`, `member access state`
  - add `media_membership`
  - if paid boundary changes product shape, auto-insert `monetization-strategy`
- `required artifacts`, `signoff`, `comment linkage`, `step owner`, `escalation`
  - consider the `artifact-controlled internal workflow` row before falling back to generic workflow
- `freshness`, `duplicate`, `claim`, `ranking trust`
  - add `local_discovery_trust`
- `progress`, `streak`, `completion`, `unlock`, `retry`
  - add `learning_progression_contract`
- `auth`, `connect`, `install`, `sync`, `status`, `rollback`, `developer onboarding`
  - make `platform_contract` explicit in UX projection and rollout planning

## Escalate To Full Starter

바로 [OPERATOR-STARTER.md](OPERATOR-STARTER.md)로 올라가야 하는 경우:

- row가 2개 이상 비슷하게 맞는다
- regulated / offline / platform / enterprise signal이 강하다
- source of truth나 dependency가 product shape를 바꾼다
- rollout / queue / SLA / buyer-payer split이 핵심이다
