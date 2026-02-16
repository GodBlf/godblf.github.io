---
name: firefly-comment-config
description: "修改 Firefly 评论系统配置。Use when switching comment provider or tuning Twikoo, Waline, Artalk, Giscus, or Disqus in src/config/commentConfig.ts."
---

# Firefly Comment Config

## Overview

Select a comment provider and adjust provider-specific options without breaking current comments.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/commentConfig.ts

## Common Keys

- type (none | twikoo | waline | giscus | disqus | artalk)
- twikoo.envId / twikoo.lang / twikoo.visitorCount
- waline.serverURL / waline.lang / waline.login / waline.visitorCount
- artalk.server / artalk.locale / artalk.visitorCount
- giscus.repo / repoId / category / categoryId / mapping / strict / reactionsEnabled / emitMetadata / inputPosition / lang / loading
- disqus.shortname

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
