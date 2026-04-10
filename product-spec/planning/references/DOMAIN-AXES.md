# Domain Axes

이 문서는 planning pack을 특정 시장 카테고리 묶음이 아니라, 다양한 서비스 프로젝트에 보편 적용 가능한 분류 축으로 바꾸기 위한 canonical axis model이다.

핵심 원칙:

- 도메인 이름보다 `일의 형태`가 질문 순서를 더 크게 바꾼다
- 동일한 business category라도 `surface`, `loop`, `risk`가 다르면 planning 질문이 달라진다
- 기존 archetype 이름은 compatibility alias로 유지할 수 있지만, canonical classifier는 아래 axis를 우선한다

## 1. Canonical Axes

### work_shape

- `capture-and-route`
- `self-serve-loop`
- `draft-review-approve`
- `system-of-record-workflow`
- `coordinate-and-transact`
- `publish-and-curate`
- `integrate-and-control`

### surface_model

- `web`
- `mobile-native`
- `multi-surface`
- `internal-console`
- `api-sdk-cli`
- `human-service-ops`
- `hybrid-offline`

### loop_model

- `one-shot`
- `habit`
- `workflow`
- `queue-driven`
- `transactional`
- `content-return`

### modifiers

- `regulated-workflow`
- `self-serve-to-enterprise`
- `commerce-transactional`
- `knowledge-grounded`
- `human-review-gated`
- `service-operations-workflow`
- `offline-operability`
- `privacy-sensitive-consumer`
- `media-membership`
- `local-discovery-trust`
- `learning-progression`
- `reservation-lifecycle`
- `artifact-revision-controlled`
- `availability-booking`
- `constraint-exception-controlled`

## 2. Compatibility Aliases

기존 pack의 archetype은 아래처럼 읽는다.

| Legacy archetype | Canonical mapping |
| --- | --- |
| `public-website-lead-gen-seo` | `work_shape=capture-and-route`, `surface_model=web`, `loop_model=one-shot` or `content-return` |
| `consumer-saas` | `work_shape=self-serve-loop`, `surface_model=web` or `mobile-native`, `loop_model=habit` or `one-shot` |
| `b2b-saas` | `work_shape=system-of-record-workflow`, `surface_model=internal-console` or `multi-surface`, `loop_model=workflow` |
| `marketplace` | `work_shape=coordinate-and-transact`, `surface_model=multi-surface`, `loop_model=transactional` |
| `content-community` | `work_shape=publish-and-curate`, `surface_model=web` or `multi-surface`, `loop_model=content-return` |
| `platform-integration` | `work_shape=integrate-and-control`, `surface_model=api-sdk-cli` or `multi-surface`, `loop_model=workflow` |

새로운 canonical 조합 예시:

- analyst copilot: `draft-review-approve` + `knowledge-grounded` + `human-review-gated`
- field service dispatch: `system-of-record-workflow` + `service-operations-workflow` + `offline-operability`
- privacy-sensitive habit app: `self-serve-loop` + `mobile-native` + `privacy-sensitive-consumer`
- clinic pre-auth workflow: `system-of-record-workflow` + `regulated-workflow` + `human-service-ops`

## 3. Why This Model

이 모델은 아래를 가능하게 한다.

- website / SaaS / mobile app / internal tool / AI copilot / service workflow를 같은 pack에서 다룬다
- old archetype을 깨지 않고 더 넓은 시나리오를 수용한다
- product category보다 planning-critical constraint를 먼저 드러낸다

## 4. What Changes Operationally

planning 시작 시 operator는 아래를 먼저 적는다.

- `work_shape`
- `surface_model`
- `loop_model`
- `modifiers`
- `current_gap`

기존 `archetype`은 optional compatibility alias로 남길 수 있다.
