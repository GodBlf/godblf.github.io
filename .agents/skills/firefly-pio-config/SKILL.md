---
name: firefly-pio-config
description: "修改 Firefly 看板娘配置。Use when enabling Spine or Live2D model, changing model path, interaction copy, position, size, or mobile visibility in src/config/pioConfig.ts."
---

# Firefly Pio Config

## Overview

Tune mascot model type and interactive behavior for desktop and mobile.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/pioConfig.ts

## Common Keys

- spineModelConfig.enable / model.path / model.scale / model.x / model.y
- spineModelConfig.position.corner / offsetX / offsetY
- spineModelConfig.size.width / size.height / zIndex / opacity
- spineModelConfig.interactive.clickAnimations / clickMessages / messageDisplayTime / idleAnimations / idleInterval
- spineModelConfig.responsive.hideOnMobile / mobileBreakpoint
- live2dModelConfig.enable / model.path / position / size / interactive / responsive

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
