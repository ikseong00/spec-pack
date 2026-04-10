# Design Template Pack

이 디렉터리는 `design` 축의 internal authoring source다.

지금 단계의 첫 산출물은 `DESIGN.md` 템플릿이다.

의도:

- planning 결과를 시각/경험 계약으로 번역한다
- stitch 같은 AI UI 생성 도구가 바로 읽을 수 있는 design source of truth를 만든다
- 이후 design skill / agent / reference가 붙더라도, 최종 기준 문서는 `DESIGN.md`로 유지한다

현재 포함:

- `skills/`
- `agents/`
- `templates/DESIGN.template.md`
- `references/START-HERE.md`
- `references/DEFAULT-RESOLVED-ROUTES.md`
- `references/UPDATE-ENTRY-MAP.md`
- `references/TRUST-OWNERSHIP-MATRIX.md`
- `references/DESIGN-TO-ARCHITECTURE-HANDOFF.md`
- `references/DESIGN-CORE-OUTPUTS.md`
- `references/DESIGN-DONE-CRITERIA.md`
- `references/DESIGN-USABILITY-EVALUATION.md`
- `references/DESIGN-RALPH-LOOP-PROTOCOL.md`
- `references/DESIGN-SCENARIO-MATRIX-50.md`
- `RALPH-LOOP-LOG.md`

Codex / ECC 참고 기준에서 design pack이 가져가는 핵심은 아래다.

- stage close 때 memory snapshot을 남긴다
- broad loop와 targeted recheck를 분리한다
- generator-facing rule을 vague essay로 두지 않는다
- downstream consumer가 같은 질문을 반복하지 않게 한다

`DESIGN.md`는 아래 문서와 함께 읽히는 것을 전제로 한다.

- `PROJECT-THESIS.md`
- `PRD.md`
- `UX-IA.md`
- `SCREEN-SPECS.md`

즉:

- planning이 `무엇을 왜 만드는지`를 정리한다면
- `DESIGN.md`는 `어떤 감각과 규칙으로 보이고 동작해야 하는지`를 고정한다
- 하지만 구현 컴포넌트를 어떻게 쪼갤지는 여기서 정하지 않는다

design 단계의 코어 산출물 정의는 [references/DESIGN-CORE-OUTPUTS.md](references/DESIGN-CORE-OUTPUTS.md)를 따른다.
loop 준비와 평가 기준은 아래를 따른다.

- [references/START-HERE.md](references/START-HERE.md)
- [references/DEFAULT-RESOLVED-ROUTES.md](references/DEFAULT-RESOLVED-ROUTES.md)
- [references/UPDATE-ENTRY-MAP.md](references/UPDATE-ENTRY-MAP.md)
- [references/TRUST-OWNERSHIP-MATRIX.md](references/TRUST-OWNERSHIP-MATRIX.md)
- [references/DESIGN-TO-ARCHITECTURE-HANDOFF.md](references/DESIGN-TO-ARCHITECTURE-HANDOFF.md)
- [references/DESIGN-DONE-CRITERIA.md](references/DESIGN-DONE-CRITERIA.md)
- [references/DESIGN-USABILITY-EVALUATION.md](references/DESIGN-USABILITY-EVALUATION.md)
- [references/DESIGN-RALPH-LOOP-PROTOCOL.md](references/DESIGN-RALPH-LOOP-PROTOCOL.md)
- [references/DESIGN-SCENARIO-MATRIX-50.md](references/DESIGN-SCENARIO-MATRIX-50.md)
- [RALPH-LOOP-LOG.md](RALPH-LOOP-LOG.md)

즉 최종 산출물은:

1. `DESIGN.md`
2. design 관점으로 보강된 `UX-IA.md`
3. design 관점으로 보강된 `SCREEN-SPECS.md`

그리고 다음 `architecture` 단계로 넘길 때는 [references/DESIGN-TO-ARCHITECTURE-HANDOFF.md](references/DESIGN-TO-ARCHITECTURE-HANDOFF.md)를 bridge로 쓴다.

이 디렉터리는 아직 internal source다. 최종 설치형 `.claude` / `.codex` 배포 구조는 나중에 별도로 묶는다.
