---
name: firefly-background-wallpaper-config
description: "修改 Firefly 背景壁纸配置。Use when adjusting wallpaper mode, desktop/mobile sources, banner text, waves, credit, or overlay effects in src/config/backgroundWallpaper.ts."
---

# Firefly Background Wallpaper Config

## Overview

Manage banner or overlay wallpaper behavior, assets, and visual effect parameters.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/backgroundWallpaper.ts

## Common Keys

- mode / switchable
- src.desktop / src.mobile
- banner.position
- banner.homeText.enable / switchable / title / subtitle / typewriter
- banner.credit.enable / text / url
- banner.navbar.transparentMode / enableBlur / blur
- banner.waves.enable / switchable
- overlay.zIndex / overlay.opacity / overlay.blur

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
