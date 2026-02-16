---
name: firefly-music-config
description: "修改 Firefly 音乐播放器配置。Use when switching meting or local mode, changing playlist source, or tuning volume and play behavior in src/config/musicConfig.ts."
---

# Firefly Music Config

## Overview

Configure music source, player behavior, and navbar entry visibility.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/musicConfig.ts
- src/config/sidebarConfig.ts

## Common Keys

- showInNavbar / mode / volume / playMode / showLyrics
- meting.api / meting.server / meting.type / meting.id / meting.auth / meting.fallbackApis[]
- local.playlist[].name / artist / url / cover / lrc
- sidebar music widget enable state (if asked to hide sidebar player)

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
