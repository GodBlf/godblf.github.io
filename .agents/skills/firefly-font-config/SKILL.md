---
name: firefly-font-config
description: "修改 Firefly 字体配置。Use when changing custom font enablement, preload policy, selected fonts, or font source definitions in src/config/fontConfig.ts."
---

# Firefly Font Config

## Overview

Manage typography stack, font loading sources, and fallback behavior.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/fontConfig.ts

## Common Keys

- enable / preload
- selected[]
- fonts.<id>.id / name / src / family / weight / display
- fallback[]

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
