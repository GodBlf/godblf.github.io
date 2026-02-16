---
name: firefly-friends-config
description: "修改 Firefly 友链配置。Use when editing friends page columns, friend link cards, sorting weight, or enabled flags in src/config/friendsConfig.ts and optional page copy in src/content/spec/friends.md."
---

# Firefly Friends Config

## Overview

Maintain friend-link entries and ranking while keeping page layout consistent.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/friendsConfig.ts
- src/content/spec/friends.md

## Common Keys

- friendsPageConfig.columns
- friendsConfig[].title / imgurl / desc / siteurl / tags[] / weight / enabled
- getEnabledFriends sorting behavior (enabled filter + weight desc)
- friends page markdown content in src/content/spec/friends.md

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
