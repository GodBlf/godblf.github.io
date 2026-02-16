---
name: firefly-bangumi-config
description: "修改 Firefly 番剧页面配置。Use when changing bangumi user id, enabling or disabling bangumi page, or syncing nav visibility through src/config/siteConfig.ts and src/config/navBarConfig.ts."
---

# Firefly Bangumi Config

## Overview

Control bangumi data source id and page visibility in site-level toggles.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/siteConfig.ts
- src/config/navBarConfig.ts

## Common Keys

- siteConfig.bangumi.userId
- siteConfig.pages.bangumi
- navBar dynamic menu inclusion tied to page toggle

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
