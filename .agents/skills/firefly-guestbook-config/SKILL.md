---
name: firefly-guestbook-config
description: "修改 Firefly 留言板配置。Use when enabling or disabling guestbook page, editing guestbook markdown content, or preparing comment prerequisites in src/config/siteConfig.ts, src/content/spec/guestbook.md, and src/config/commentConfig.ts."
---

# Firefly Guestbook Config

## Overview

Control guestbook route visibility and page content with comment-system compatibility.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/siteConfig.ts
- src/content/spec/guestbook.md
- src/config/commentConfig.ts

## Common Keys

- siteConfig.pages.guestbook
- guestbook markdown frontmatter and body content
- commentConfig.type and provider basics when comments must be enabled

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
