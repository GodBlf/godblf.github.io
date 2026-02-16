---
name: firefly-profile-config
description: "修改 Firefly 个人资料卡片配置。Use when changing avatar, nickname, bio, icon set usage, or social links in src/config/profileConfig.ts."
---

# Firefly Profile Config

## Overview

Edit profile card identity and social link list shown in sidebar and profile-related areas.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/profileConfig.ts

## Common Keys

- avatar
- name
- bio
- links[].name / links[].icon / links[].url / links[].showName

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
