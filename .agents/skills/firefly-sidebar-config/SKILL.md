---
name: firefly-sidebar-config
description: "修改 Firefly 侧边栏布局配置。Use when changing sidebar position, component order, per-page visibility, or mobile bottom widgets in src/config/sidebarConfig.ts."
---

# Firefly Sidebar Config

## Overview

Arrange sidebar widgets and responsive behavior across post and non-post pages.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/sidebarConfig.ts

## Common Keys

- enable / position / showRightSidebarOnPostPage
- leftComponents[] / rightComponents[] / mobileBottomComponents[]
- component.type / enable / position / showOnPostPage / showOnNonPostPage / configId
- component.responsive.collapseThreshold

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
