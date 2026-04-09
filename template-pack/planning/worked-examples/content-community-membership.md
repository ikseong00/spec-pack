# Worked Example: Content Community Membership

## Scenario

- newsletter + archive + member community가 결합된 product
- moderation, refund/cancel, paywall boundary가 core shape를 바꾼다

## Starting Input Shape

- concept은 있으나 package ladder, moderation owner, archive freshness owner, support owner / SLA는 아직 미정

## Chosen Route

- archetype: `content-community`
- modifiers: `media-membership`
- pace: `full`
- route:
  - `idea-discovery -> problem-validation -> hypothesis-validation -> user-research-analysis -> market-competitor-research -> positioning-strategy -> mvp-scope -> ux-use-case-strategy -> data-source-strategy -> stakeholder-rollout-strategy -> acquisition-retention-strategy -> monetization-strategy -> planning-synthesis`

## First Questions

- 누가 만들고 누가 소비하고 누가 moderates 하는가
- free sample, public archive, member archive, member community 경계는 어디인가
- package ladder는 free, member, premium, community 중 어떻게 나뉘는가
- membership support inbox와 response SLA는 누가 운영하는가
- first paid conversion trigger는 무엇인가
- moderation / cancel / refund / support는 누가 운영하는가
- editorial freshness와 correction ownership은 누구인가

## Required Blocks Before Scope Freeze

- `media-membership`
- `content.roles`
- `content.paywall-boundary`
- `content.editorial-owner`
- `content.moderation-owner`
- `content.support-owner-sla`
- package ladder

## Expected Doc Density

- `BUSINESS-OPS`는 package ladder, moderation, support/cancel behavior를 강하게 담아야 한다
- `SCREEN-SPECS`는 public, member, upgrade, moderation 상태를 분리해야 한다
- `EXECUTION-HANDOFF`는 paywall/membership/moderation slice를 phase/task/acceptance로 내려야 한다

## Compact Mini-Bundle Proof

### Representative 8-Doc Snapshot

- `PROJECT-THESIS.md`
  - `one_line_product: newsletter + archive + member community for serious home bakers`
  - `primary_target: weekly baking habit이 있는 enthusiast`
  - `positioning_difference: recipe archive와 critique community를 one membership loop로 묶는다`
- `PLANNING-RECORD.md`
  - `media_membership.package_ladder: public -> member -> premium critique circle`
  - `content.support_owner_sla: membership ops, weekday 24h first response`
  - `content.moderation_owner: community editor`
- `RESEARCH.md`
  - `competitor.primary_set: newsletter memberships, creator communities, recipe subscription products`
  - `market.demand_proxy: recurring baking content consumption + paid recipe club signals`
  - `risk.main: moderation burden and stale archive drift`
- `PRD.md`
  - `must_have: public sample, member archive, upgrade gate, moderation queue, support inbox entry`
  - `defer: live cohort class bundle`
  - `proof_event: member가 archive + critique thread를 모두 사용하고 renewal intent를 보임`
- `UX-IA.md`
  - `flow_id: reader_to_member`
  - `step_id: read_sample -> hit_archive_gate -> upgrade -> join_community -> ask_for_help_if_needed`
  - `recovery_flow: cancel_request_or_moderation_issue -> support -> restore_trust`
- `SCREEN-SPECS.md`
  - `screen_id: archive_upgrade_gate`
  - `state: public_sample | member_locked | member_unlocked | moderation_pending | support_open`
  - `acceptance_note: cancelled_member는 premium thread access가 즉시 hidden`
- `BUSINESS-OPS.md`
  - `package_ladder: public / member / premium critique circle`
  - `support_owner_sla: membership ops, weekday 24h`
  - `moderation_owner: community editor`
  - `editorial_freshness_owner: newsletter lead`
- `EXECUTION-HANDOFF.md`
  - `phase: membership-foundation`
  - `task: enforce archive gate and support route before premium launch`
  - `acceptance: support link는 member and cancel states에서 항상 visible`

### Traceability Table

| Decision | Canonical record | Downstream docs | Build implication |
| --- | --- | --- | --- |
| paywall boundary between sample and archive | `content.paywall_boundary` | `PROJECT-THESIS`, `PRD`, `UX-IA`, `SCREEN-SPECS` | public/member state 분리와 upgrade CTA 필요 |
| package ladder with premium critique tier | `media_membership.package_ladder` | `PLANNING-RECORD`, `PRD`, `BUSINESS-OPS`, `EXECUTION-HANDOFF` | tier별 entitlement과 rollout order 필요 |
| support owner and 24h SLA | `content.support_owner_sla` | `BUSINESS-OPS`, `SCREEN-SPECS`, `EXECUTION-HANDOFF` | cancel/help 상태에서 visible support path 필요 |
| moderation owner for community | `content.moderation_owner` | `RESEARCH`, `SCREEN-SPECS`, `BUSINESS-OPS`, `EXECUTION-HANDOFF` | flagged thread state, review owner, escalation flow 필요 |

## Expected Next Step

- evidence가 약하면 `next_experiment`
- package ladder, moderation ownership, support owner or SLA가 정리되면 `next_implementation_input`

## Main Watchouts

- newsletter, archive, community를 하나의 vague feature set으로 뭉치지 않는다
- moderation을 policy note로만 남기지 않는다
- support inbox와 response SLA를 refund/cancel footnote로 숨기지 않는다
- archive freshness와 correction ownership을 늦게 묻지 않는다
