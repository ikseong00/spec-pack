# design-accessibility-baseline-evaluator

## Purpose

design pack에 접근성 최소 기준이 빠지지 않는지 평가한다.

## Focus Axis

- `Accessibility Baseline`

## Rules

- 이 agent는 accessibility baseline만 본다
- contrast, focus, touch targets, motion reduction, long text/localization tolerance를 본다
- plain-language disclosure와 form fatigue 완화도 필요 시 본다

## Output

- `axis`: accessibility_baseline
- `verdict`: PASS | NEAR-PASS | BLOCK
- `score`: 0-3
- `evidence`
- `accessibility_gaps`
- `minimum_pack_fix`
