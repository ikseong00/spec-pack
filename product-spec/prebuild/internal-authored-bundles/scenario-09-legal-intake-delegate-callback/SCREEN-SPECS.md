# SCREEN-SPECS

## screen.intake_entry

- purpose: `법률 intake 제출과 위임장 업로드`
- must_render_states: `authorization missing`, `received`, `submission error`
- required_trust_or_status_signals: `authorization requirement`, `privacy note`

## screen.authorization_check

- purpose: `delegate authorization validity 확인`
- must_render_states: `authorization valid`, `authorization missing`, `authorization expired`
- do_not_hide_rules: `delegate callback 불가 이유를 숨기지 않는다`

## screen.callback_status

- purpose: `callback 상태와 audience boundary 노출`
- must_render_states: `awaiting callback`, `scheduled`, `needs requester confirmation`, `closed`
- required_trust_or_status_signals: `callback owner`, `callback SLA`, `authorized audience`
