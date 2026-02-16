---
name: firefly-sponsor-config
description: "修改 Firefly 赞助配置。Use when updating sponsor page text, payment methods, qr codes, donor list, or per-post sponsor button behavior in src/config/sponsorConfig.ts."
---

# Firefly Sponsor Config

## Overview

Maintain sponsor page metadata, donation methods, and sponsor records.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/sponsorConfig.ts
- src/config/siteConfig.ts

## Common Keys

- title / description / usage
- showSponsorsList / showButtonInPost
- methods[].name / icon / qrCode / link / description / enabled
- sponsors[].name / amount / date / message
- siteConfig.pages.sponsor (route switch)

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
