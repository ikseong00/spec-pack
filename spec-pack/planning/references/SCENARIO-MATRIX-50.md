# Scenario Matrix 50

이 문서는 planning pack의 범용성을 넓게 검증하기 위한 50개 시나리오 세트다.

원칙:

- 업종 이름만 보지 않고 `work_shape + surface_model + loop_model + modifier`로 같이 읽는다
- reviewer는 각 시나리오를 현재 pack으로 무수정 처리 가능한지 평가한다
- 목표는 업종별 전용 pack을 만드는 것이 아니라, 반복되는 planning contract를 코어에 흡수하는 것이다

## Batch A

1. Food / local bakery discovery map
   - shape: `capture-and-route + web + content-return`
   - modifiers: `local-discovery-trust`
   - stress: freshness, duplicate rule, popularity trust, claim moderation
2. Food / cafe reservation and waitlist
   - shape: `system-of-record-workflow + multi-surface + workflow`
   - modifiers: `availability-booking`
   - stress: slot authority, no-show, buffer, staff comms
3. Food / subscription meal-plan planner
   - shape: `self-serve-loop + mobile-native + habit`
   - modifiers: `privacy-sensitive-consumer`
   - stress: repeat loop, reminder boundary, preference privacy
4. Food / supplier sourcing marketplace for bakeries
   - shape: `coordinate-and-transact + multi-surface + transactional`
   - modifiers: `commerce-transactional`
   - stress: supplier trust, MOQ, dispute, delivery exception
5. Travel / trip inspiration and itinerary curation
   - shape: `publish-and-curate + web + content-return`
   - modifiers: `local-discovery-trust`
   - stress: recommendation trust, recency, destination update freshness
6. Travel / booking support and post-booking change handling
   - shape: `coordinate-and-transact + multi-surface + transactional`
   - modifiers: `reservation-lifecycle`
   - stress: reissue, disruption support, supplier truth, change owner
7. Travel / tour slot booking for small groups
   - shape: `system-of-record-workflow + multi-surface + workflow`
   - modifiers: `availability-booking`, `commerce-transactional`
   - stress: hold expiry, guide capacity, last-minute reschedule
8. Travel / visa and travel-document prep workflow
   - shape: `system-of-record-workflow + multi-surface + workflow`
   - modifiers: `regulated-workflow`, `artifact-revision-controlled`
   - stress: required documents, revision control, deadline exceptions

## Batch B

9. Education / cohort-based learning platform
   - shape: `system-of-record-workflow + multi-surface + workflow`
   - modifiers: `learning-progression`
   - stress: unlock rules, due windows, grading, learner recovery
10. Education / teacher review and rubric grading tool
   - shape: `draft-review-approve + multi-surface + queue-driven`
   - modifiers: `human-review-gated`, `learning-progression`
   - stress: queue SLA, feedback cycle, override and regrade
11. Education / student habit and revision app
   - shape: `self-serve-loop + mobile-native + habit`
   - modifiers: `privacy-sensitive-consumer`
   - stress: reminder safety, progress trust, streak logic
12. Education / admissions application review portal
   - shape: `draft-review-approve + multi-surface + queue-driven`
   - modifiers: `artifact-revision-controlled`, `human-review-gated`
   - stress: document revisions, reviewer queue, appeal flow
13. Healthcare / regulated appointment intake workflow
   - shape: `system-of-record-workflow + multi-surface + workflow`
   - modifiers: `regulated-workflow`, `availability-booking`
   - stress: delegated access, sensitive communications, required artifacts
14. Healthcare / chronic-care patient habit companion
   - shape: `self-serve-loop + mobile-native + habit`
   - modifiers: `privacy-sensitive-consumer`
   - stress: health data boundary, reminder safety, export/delete/reset
15. Healthcare / lab-result review queue
   - shape: `draft-review-approve + multi-surface + queue-driven`
   - modifiers: `regulated-workflow`, `human-review-gated`
   - stress: approval threshold, disclosure boundary, audit trail
16. Healthcare / clinic staff scheduling and callback ops
   - shape: `system-of-record-workflow + human-service-ops + workflow`
   - modifiers: `regulated-workflow`, `service-operations-workflow`
   - stress: callback ownership, queue SLA, manual exceptions

## Batch C

17. Architecture / fit-out approval and site execution
   - shape: `system-of-record-workflow + hybrid-offline + workflow`
   - modifiers: `artifact-revision-controlled`, `service-operations-workflow`
   - stress: authoritative revision set, supersession, field exceptions
18. Architecture / design review and client signoff board
   - shape: `draft-review-approve + multi-surface + queue-driven`
   - modifiers: `artifact-revision-controlled`, `human-review-gated`
   - stress: revision receipt, signoff state, comment-to-revision linkage
19. Construction / subcontractor coordination dashboard
   - shape: `system-of-record-workflow + hybrid-offline + workflow`
   - modifiers: `service-operations-workflow`, `offline-operability`
   - stress: crew assignment, onsite issue recovery, evidence capture
20. Real estate / listing discovery and tour booking
   - shape: `capture-and-route + web + content-return`
   - modifiers: `local-discovery-trust`, `availability-booking`
   - stress: listing freshness, tour scheduling, duplicate/claim policy
21. Real estate / rental application review workflow
   - shape: `draft-review-approve + multi-surface + queue-driven`
   - modifiers: `human-review-gated`, `regulated-workflow`
   - stress: document completeness, reviewer queue, disclosure boundary
22. Real estate / property maintenance dispatch
   - shape: `system-of-record-workflow + hybrid-offline + workflow`
   - modifiers: `service-operations-workflow`, `offline-operability`
   - stress: dispatch unit, parts/contractor coordination, tenant comms
23. Space / studio booking and turnaround ops
   - shape: `system-of-record-workflow + multi-surface + workflow`
   - modifiers: `availability-booking`, `service-operations-workflow`
   - stress: hold expiry, turnaround buffer, onsite exception
24. Space / coworking access and room reservation
   - shape: `system-of-record-workflow + multi-surface + workflow`
   - modifiers: `availability-booking`
   - stress: bookable unit, blackout rules, member access state

## Batch D

25. Legal / intake and case triage workflow
   - shape: `system-of-record-workflow + human-service-ops + workflow`
   - modifiers: `regulated-workflow`
   - stress: disclosure boundary, delegated access, required artifacts
26. Legal / document drafting and approval queue
   - shape: `draft-review-approve + multi-surface + queue-driven`
   - modifiers: `artifact-revision-controlled`, `human-review-gated`
   - stress: version authority, approval gate, change linkage
27. Finance / consumer expense insight app
   - shape: `self-serve-loop + mobile-native + habit`
   - modifiers: `privacy-sensitive-consumer`
   - stress: data sensitivity, notification safety, trust in categorization
28. Finance / loan-origination review workflow
   - shape: `draft-review-approve + multi-surface + queue-driven`
   - modifiers: `regulated-workflow`, `human-review-gated`
   - stress: required docs, approval matrix, exception path
29. Finance / advisor-client booking and follow-up
   - shape: `system-of-record-workflow + multi-surface + workflow`
   - modifiers: `availability-booking`, `regulated-workflow`
   - stress: booking authority, sensitive comms, delegated access
30. Insurance / claims intake and rework loop
   - shape: `system-of-record-workflow + multi-surface + workflow`
   - modifiers: `regulated-workflow`, `artifact-revision-controlled`
   - stress: missing documents, denial/rework, audit trail
31. Insurance / field adjuster offline workflow
   - shape: `system-of-record-workflow + hybrid-offline + workflow`
   - modifiers: `offline-operability`, `service-operations-workflow`
   - stress: attachment capture, sync conflict, proof/evidence state
32. HR / candidate interview scheduling
   - shape: `system-of-record-workflow + multi-surface + workflow`
   - modifiers: `availability-booking`
   - stress: slot authority, reschedule ownership, comms triggers

## Batch E

33. HR / recruiting review and hiring committee queue
   - shape: `draft-review-approve + multi-surface + queue-driven`
   - modifiers: `human-review-gated`
   - stress: reviewer SLA, approval threshold, candidate recovery
34. HR / employee onboarding checklist workflow
   - shape: `system-of-record-workflow + multi-surface + workflow`
   - modifiers: `artifact-revision-controlled`
   - stress: required artifacts, step ownership, escalation
35. Logistics / delivery operations dispatch
   - shape: `system-of-record-workflow + hybrid-offline + workflow`
   - modifiers: `service-operations-workflow`, `offline-operability`
   - stress: route, proof-of-service, reschedule/no-show, exception queue
36. Logistics / warehouse slot and dock booking
   - shape: `system-of-record-workflow + multi-surface + workflow`
   - modifiers: `availability-booking`
   - stress: hold, blackout, buffer, double-book rule
37. Ecommerce / local artisan discovery marketplace
   - shape: `capture-and-route + web + content-return`
   - modifiers: `local-discovery-trust`, `commerce-transactional`
   - stress: recommendation trust, seller claim, sponsored placement
38. Ecommerce / order support and return workflow
   - shape: `coordinate-and-transact + multi-surface + transactional`
   - modifiers: `reservation-lifecycle`
   - stress: order state, reissue/refund, support ownership
39. Beauty / salon slot booking and staff coordination
   - shape: `system-of-record-workflow + multi-surface + workflow`
   - modifiers: `availability-booking`, `service-operations-workflow`
   - stress: bookable unit, no-show, turnaround, staff handoff
40. Wellness / coach-client habit program
   - shape: `self-serve-loop + mobile-native + habit`
   - modifiers: `privacy-sensitive-consumer`
   - stress: reminders, coach visibility, sensitive notes

## Batch F

41. Automotive / service-center appointment and repair ops
   - shape: `system-of-record-workflow + multi-surface + workflow`
   - modifiers: `availability-booking`, `service-operations-workflow`
   - stress: booking authority, parts shortage, repair status, callbacks
42. Automotive / roadside assistance dispatch
   - shape: `system-of-record-workflow + hybrid-offline + workflow`
   - modifiers: `service-operations-workflow`, `offline-operability`
   - stress: dispatch, location truth, evidence capture, escalation
43. Pets / clinic intake and vaccination reminders
   - shape: `system-of-record-workflow + multi-surface + workflow`
   - modifiers: `regulated-workflow`, `availability-booking`
   - stress: booking, guardian access, sensitive comms, required docs
44. Pets / sitter and walker marketplace
   - shape: `coordinate-and-transact + multi-surface + transactional`
   - modifiers: `commerce-transactional`, `service-operations-workflow`
   - stress: trust, schedule change, payout, support
45. Events / attendee registration and check-in
   - shape: `system-of-record-workflow + multi-surface + workflow`
   - modifiers: `availability-booking`
   - stress: capacity authority, check-in state, onsite exception
46. Events / sponsor and speaker approval workflow
   - shape: `draft-review-approve + multi-surface + queue-driven`
   - modifiers: `artifact-revision-controlled`, `human-review-gated`
   - stress: revision receipt, approval gates, timeline changes
47. Nonprofit / volunteer scheduling and comms
   - shape: `system-of-record-workflow + multi-surface + workflow`
   - modifiers: `availability-booking`, `service-operations-workflow`
   - stress: shift authority, blackout, no-show, recovery
48. Nonprofit / aid-request triage queue
   - shape: `system-of-record-workflow + human-service-ops + workflow`
   - modifiers: `regulated-workflow`
   - stress: sensitive intake, delegated access, manual escalation
49. Creator economy / membership content and assignment challenge program
   - shape: `publish-and-curate + multi-surface + content-return`
   - modifiers: `media-membership`, `learning-progression`
   - stress: progression, moderation, support ownership
50. Developer tools / API onboarding and support workflow
   - shape: `integrate-and-control + api-sdk-cli + workflow`
   - modifiers: `self-serve-to-enterprise`
   - stress: integration truth, `platform_contract`, onboarding, rollback, support SLA
