---
name: firefly-navbar-config
description: "修改 Firefly 导航栏配置。Use when adding or reordering nav links, menu children, or search method in src/config/navBarConfig.ts, and when needed sync page toggles in src/config/siteConfig.ts."
---

# Firefly Navbar Config

## Overview

Adjust navigation links and search behavior while respecting page toggle dependencies.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/navBarConfig.ts
- src/config/siteConfig.ts

## Common Keys

- links[] / children[] / external / icon / name / url
- navBarSearchConfig.method
- siteConfig.pages.sponsor / pages.guestbook / pages.bangumi (affects dynamic menu visibility)

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
