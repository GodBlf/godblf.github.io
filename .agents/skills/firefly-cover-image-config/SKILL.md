---
name: firefly-cover-image-config
description: "修改 Firefly 随机封面图配置。Use when changing post-cover display or random API fallback strategy in src/config/coverImageConfig.ts."
---

# Firefly Cover Image Config

## Overview

Control post cover display and random cover API behavior.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/coverImageConfig.ts

## Common Keys

- enableInPost
- randomCoverImage.enable
- randomCoverImage.apis[]
- randomCoverImage.fallback
- randomCoverImage.showLoading

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
