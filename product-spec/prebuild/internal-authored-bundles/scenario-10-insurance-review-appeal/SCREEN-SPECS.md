# SCREEN-SPECS

## screen.upload_entry

- purpose: `증빙 업로드와 제출`
- must_render_states: `draft`, `upload success`, `upload failed`
- required_trust_or_status_signals: `required artifact list`

## screen.review_status

- purpose: `review 상태와 reviewer decision visibility`
- must_render_states: `uploaded`, `under review`, `needs correction`, `approved`, `denied`
- required_trust_or_status_signals: `review owner`, `review SLA`, `last updated`

## screen.appeal_entry

- purpose: `이의제기 제출과 상태 추적`
- must_render_states: `appeal available`, `appeal received`, `appeal decided`
- required_trust_or_status_signals: `appeal owner`, `appeal due window`
