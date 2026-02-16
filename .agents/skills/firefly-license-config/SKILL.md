---
name: firefly-license-config
description: "修改 Firefly 文章版权协议配置。Use when enabling or changing post license name and URL in src/config/licenseConfig.ts."
---

# Firefly License Config

## Overview

Control per-post license display and protocol link shown on article pages.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/licenseConfig.ts

## Common Keys

- enable
- name
- url

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
