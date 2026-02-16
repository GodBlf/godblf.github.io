---
name: firefly-footer-config
description: "修改 Firefly 页脚注入配置。Use when toggling custom footer HTML or editing备案和统计代码 in src/config/footerConfig.ts and src/config/FooterConfig.html."
---

# Firefly Footer Config

## Overview

Toggle footer HTML injection and maintain custom footer snippets safely.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/footerConfig.ts
- src/config/FooterConfig.html

## Common Keys

- footerConfig.enable
- FooterConfig.html custom HTML blocks

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
