# Worked Example: Public Website Lite Directory

## Scenario

- 지역 빵집 지도 / local-service SEO directory
- 리드 제너레이션 또는 클릭아웃형 사이트
- direct SaaS가 아니라 page-template and content/data ops 중심

## Starting Input Shape

- niche와 acquisition intent는 보임
- exact entity model, listing source, freshness owner, monetization model은 아직 불명확

## Chosen Route

- archetype: `public-website-lead-gen-seo`
- modifiers: none
- pace: `fast`
- route:
  - `idea-discovery -> problem-validation -> user-research-analysis(light) -> market-competitor-research(light) -> positioning-strategy -> mvp-scope -> ux-use-case-strategy -> data-source-strategy(light) -> acquisition-retention-strategy -> monetization-strategy -> planning-synthesis`

## First Questions

- canonical entity는 brand인가 location인가 service area인가
- primary conversion은 무엇인가
- first lead or click source는 어디인가
- listing source of truth는 무엇인가
- duplicate rule은 무엇인가
- freshness owner와 correction SLA는 누구인가
- claim or moderation은 필요한가
- direct revenue인가 offsite revenue인가

## Required Blocks Before Scope Freeze

- `compression_mode = public-website-lite`
- canonical entity model
- duplicate rule
- freshness owner
- claim/moderation timing
- source-of-truth

## Expected Doc Density

- `RESEARCH`: search intent, competitor snapshot, freshness risk 정도로 thin하게
- `UX-IA`: page map, landing/list/detail, light recovery
- `SCREEN-SPECS`: page-template, form state, empty/error/state 중심
- `BUSINESS-OPS`: content/data owner, response owner, monetization note
- `EXECUTION-HANDOFF`: page/template + CMS + form + analytics + moderation slice

## Expected Next Step

- `next_implementation_input` 가능
- 단, listing source와 freshness owner가 unresolved면 `next_experiment` 또는 `not_ready_because`

## Main Watchouts

- small directory를 SaaS처럼 과하게 문서화하지 않는다
- 그래도 entity/source/freshness는 반드시 early로 잡는다
- local SEO / indexation / moderation을 product 바깥 운영 메모로만 미루지 않는다
