---
name: firefly-announcement-config
description: "修改 Firefly 顶部公告配置。Use when updating announcement title, content, close behavior, or announcement link in src/config/announcementConfig.ts."
---

# Firefly Announcement Config

## Overview

Edit top announcement banner text and optional CTA link behavior.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/announcementConfig.ts

## Common Keys

- title
- content
- closable
- link.enable / link.text / link.url / link.external

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
