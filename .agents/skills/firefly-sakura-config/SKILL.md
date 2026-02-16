---
name: firefly-sakura-config
description: "修改 Firefly 樱花特效配置。Use when enabling sakura effect or changing count, speed, opacity, size, and z-index in src/config/sakuraConfig.ts."
---

# Firefly Sakura Config

## Overview

Control falling sakura density and motion for visual style and performance balance.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/sakuraConfig.ts

## Common Keys

- enable / sakuraNum / limitTimes
- size.min / size.max
- opacity.min / opacity.max
- speed.horizontal.min / speed.horizontal.max
- speed.vertical.min / speed.vertical.max
- speed.rotation / speed.fadeSpeed
- zIndex

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
