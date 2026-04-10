# Ralph Loop Spec

이 문서는 planning pack을 다양한 시나리오에 걸쳐 검증하기 위한 반복 평가 규약이다.

## Goal

- planning pack이 웹사이트 / SaaS 전반에서 보편적으로 작동하는지 본다
- 질문 기반 planning이 실제로 reusable doc bundle을 만들 수 있는지 본다
- skill / agent / reference 조합이 너무 무겁지 않으면서도 구체적인 handoff를 만들 수 있는지 본다

## Scenario Agent Role

scenario agent는 아래를 수행한다.

- 하나의 제품 시나리오를 맡는다
- 사용자가 이미 일부 정보만 가져온 상태를 가정한다
- 현재 planning pack을 따라 planning을 진행한다고 가정한다
- 어떤 skill 순서가 필요한지 본다
- 어떤 canonical block과 core document가 잘 채워질지 / 비게 될지 본다
- 실제 설계 / 구현으로 넘기기에 부족한 부분을 찾는다

scenario agent output은 아래 형식을 따른다.

- `scenario`
- `archetype`
- `starting_input_shape`
- `recommended_route`
- `likely_strengths`
- `likely_failures`
- `missing_questions`
- `missing_document_content`
- `minimum_fix`
- `verdict`

## Evaluator Agent Role

evaluator agent는 시나리오 전체 결과를 읽고, 자기 기준 하나만으로 pack을 평가한다.

- criterion 하나에만 집중한다
- good / weak / missing을 나눈다
- exact failure pattern과 best next fix를 적는다
- 자기 기준 밖으로 주제를 넓히지 않는다

## Scenario Set

1. 지역 기반 리드 제너레이션 웹사이트
   - 예: 지역 빵집 / 병원 / 학원 / 스튜디오 디렉터리
2. 개인 생산성 consumer SaaS
   - 예: habit / journaling / focus / personal finance light tool
3. SMB 대상 B2B SaaS
   - 예: 예약 / 고객관리 / 운영 대시보드
4. mid-market B2B workflow SaaS
   - 예: 승인 / 문서 / 협업 / 내부 프로세스 관리
5. 거래형 marketplace
   - 예: 예약 / 매칭 / 주문 / 시공 / 수리 연결
6. content-community product
   - 예: 큐레이션 / 랭킹 / 유저 생성 콘텐츠 / 커뮤니티
7. platform-integration SaaS
   - 예: API / webhook / sync / developer platform
8. AI-assisted consumer SaaS
   - 예: 여행 / 학습 / 글쓰기 / 추천 보조 서비스
9. paid membership or media website
   - 예: 뉴스레터 / 아카이브 / 교육 콘텐츠 / 구독형 사이트
10. hybrid self-serve to enterprise SaaS
   - 예: 처음엔 셀프서브, 이후 팀 / 관리자 / 결재 라인으로 확장

## Evaluation Criteria Set

각 evaluator는 아래 하나만 맡는다.

1. `problem-validation`
   - 문제, 빈도, 강도, 현재 대안, recent example이 충분한가
2. `target-and-role-clarity`
   - 타겟이 좁혀졌는가, role split이 필요한 곳에 반영되는가
3. `market-and-research`
   - 시장 / 경쟁사 / 대체재 / why-now / evidence가 충분한가
4. `product-definition`
   - 제품 한 줄 정의, positioning, representative use case가 충분한가
5. `mvp-and-scope`
   - must-have / defer / out-of-scope, proof event, feature structure가 충분한가
6. `ux-ia-screen-readiness`
   - flow, IA, screen set이 설계자가 판단 가능한 수준인가
7. `data-ops-risk`
   - data source, source of truth, manual ops, dependency, trust / legal risk가 충분한가
8. `business-viability`
   - acquisition, monetization, pricing boundary, first customer path, buyer / payer logic가 충분한가
9. `documentation-quality`
   - core doc bundle이 source of truth, living doc, maintenance reference로 충분한가
10. `implementation-handoff`
   - 설계 / 구현 단계가 phase / task / acceptance로 번역 가능한가

## Pass Condition

loop는 아래를 만족할수록 좋다.

- 공통 failure가 적다
- 시나리오별로 route가 크게 흔들리지 않는다
- archetype별 약점이 있어도 core document set은 유지된다
- evaluator가 반복해서 같은 결함을 지적하지 않는다
- fix가 skill / agent / reference 수정으로 설명 가능하다
