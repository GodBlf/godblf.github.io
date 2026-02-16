---
name: firefly-ad-config
description: "修改 Firefly 广告与推广配置。Use when editing ad cards, images, CTA buttons, close behavior, or display counts in src/config/adConfig.ts and linking with sidebar slots."
---

# Firefly Ad Config

## Overview

Edit ad card content and ensure the chosen ad config id matches sidebar placement.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/adConfig.ts
- src/config/sidebarConfig.ts

## Common Keys

- adConfig1 / adConfig2 title / content
- image.src / image.alt / image.link / image.external
- link.text / link.url / link.external
- closable / displayCount / padding.*
- sidebar advertisement component configId and enable

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
