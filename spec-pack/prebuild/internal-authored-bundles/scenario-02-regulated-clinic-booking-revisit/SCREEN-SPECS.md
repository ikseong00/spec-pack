# SCREEN-SPECS

## screen.intake_entry

- purpose: `필수 intake 제출`
- must_render_states: `eligibility block`, `draft saved`, `submit success`
- required_trust_or_status_signals: `required artifact status`

## screen.booking_status

- purpose: `현재 예약 상태와 다음 행동 노출`
- must_render_states: `held`, `confirmed`, `needs callback`, `hold expired`
- required_trust_or_status_signals: `slot hold expiry`, `last updated`
- do_not_hide_rules: `hold expiry와 callback requirement를 접힌 영역에 숨기지 않는다`

## screen.revisit_recovery

- purpose: `재방문 필요 상태와 recovery action 노출`
- must_render_states: `revisit needed`, `callback scheduled`, `rebook confirmed`
- required_trust_or_status_signals: `revisit owner`, `callback SLA`
