# Internal Authored Bundles

이 디렉터리는 `spec-pack` 검증용 내부 fixture다.

원칙:

- 절대 배포하지 않는다
- worked example의 원재료일 수는 있지만, 이 디렉터리 자체는 internal-only다
- 목적은 template completeness가 아니라 authored bundle completeness를 검증하는 것이다

현재 fixture:

- `scenario-02-regulated-clinic-booking-revisit`
- `scenario-09-legal-intake-delegate-callback`
- `scenario-10-insurance-review-appeal`

사용 방법:

1. 실제 값이 채워진 9-document bundle을 읽는다
2. owner/value 누락, shared-doc 충돌, architecture handoff ambiguity를 본다
3. 배포용 예시는 이 fixture를 그대로 내보내지 말고 요약/정제해서 `worked-examples`로 옮긴다
