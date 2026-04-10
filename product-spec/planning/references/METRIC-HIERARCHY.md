# Metric Hierarchy

metric은 마지막에 덧붙이는 숫자 목록이 아니라, 기획 단계에서 제품 shape를 고정하는 기준이다.

## Core Rule

모든 프로젝트는 아래 6가지를 최소로 잡는다.

1. `north_star`
2. `acquisition`
3. `activation`
4. `retention`
5. `monetization`
6. `guardrails`

## Definitions

### North Star

제품이 반복적으로 만들어내는 핵심 가치 결과를 나타내는 대표 지표.

### Acquisition

처음 유저 / 리드 / 계정이 제품으로 들어오는 경로와 그 효율을 나타내는 지표.

### Activation

사용자가 "첫 가치"를 실제로 경험했다고 볼 수 있는 지점.

### Retention

사용자가 일정 주기 안에 돌아오는 이유와 그것을 측정하는 지표.

### Monetization

가치가 실제 돈으로 전환되는 순간과 관련 지표.

### Guardrails

성장을 위해 훼손하면 안 되는 신뢰, 품질, 비용, 리스크 지표.

## Archetype Hints

### public-website-lead-gen-seo

- north star: qualified lead / booked action / trusted discovery
- acquisition: visit -> lead -> qualified lead
- activation: contact, booking, save, clickout, newsletter signup
- retention: repeat visit, branded search, return inquiry
- monetization: lead fee, service booking, affiliate, sponsorship
- guardrails: trust, response SLA, content freshness
- note: lead disposition rate, spam rate, claim moderation latency, freshness SLA도 guardrail 후보가 된다
- note: `public-website-lite`면 retention은 product habit이 아니라 branded revisit / re-inquiry / return search 같은 light signal로 본다

### consumer-saas

- north star: activated retained user
- acquisition: signup volume, acquisition-to-activation efficiency
- activation: first value completed
- retention: day 7 / week 4 repeat behavior
- monetization: free-to-paid conversion, retained paid users
- guardrails: churn, onboarding drop-off, support burden
- note: habit product면 streak health, reminder response, reactivation success도 본다

### b2b-saas

- north star: activated retained account or team
- acquisition: lead -> meeting -> pilot -> paid
- activation: workflow completed by target role
- retention: weekly/monthly active accounts, renewal health
- monetization: expansion, contract conversion, payback
- guardrails: implementation burden, security blockers
- note: setup completion, install-to-live time, pilot success, pilot-to-expansion rate도 본다

### marketplace

- north star: successful match / transaction
- acquisition: initial supply creation, demand arrival efficiency
- activation: first qualified supply or demand action
- retention: repeat transaction, repeat supply activity
- monetization: take-rate, lead fee, subscription
- guardrails: liquidity, trust incidents, support load

### content-community

- north star: recurring engaged member / subscriber
- acquisition: new subscriber/member acquisition efficiency
- activation: first meaningful consume or contribute action
- retention: repeat contribution or repeat consumption
- monetization: subscription, sponsorship, upsell
- guardrails: trust, moderation load, churn

### platform-integration

- north star: retained successful integration or active developer account
- acquisition: docs visit -> signup -> install/start integration
- activation: first successful call / integration completion
- retention: active integrations, repeated usage
- monetization: usage, seats, credits, enterprise packaging
- guardrails: error rate, support load, versioning risk
- note: install-to-auth success, first-call success, webhook delivery success, active integration health도 본다

### self-serve-to-enterprise modifier

- north star: expanded retained account
- activation: self-serve activation plus qualified expansion signal
- retention: retained active team before and after expansion
- monetization: self-serve-to-paid, pilot-to-contract, expansion ARR
- guardrails: security review latency, procurement delay, support burden

## Quality Bar

- north star는 vanity metric이 아니어야 한다
- acquisition은 funnel economics나 channel affordability와 연결돼야 한다
- activation은 사용자가 진짜 가치를 느끼는 지점이어야 한다
- retention은 실제 반복 행동을 봐야 한다
- monetization은 pricing story와 연결돼야 한다
- guardrail은 신뢰나 운영 붕괴를 조기에 잡아야 한다
