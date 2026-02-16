---
name: firefly-site-config
description: "修改 Firefly 站点基础配置。Use when adjusting title, SEO info, theme color, page switches, bangumi id, post list layout, analytics, or pagination in src/config/siteConfig.ts."
---

# Firefly Site Config

## Overview

Edit core site identity, theme, feature toggles, and listing behavior in one place.

## Workflow

1. Read the current target file(s) before editing.
2. Confirm the requested behavior and map it to existing keys.
3. Apply the smallest possible change inside the declared scope.
4. Keep existing style, object structure, and value types.
5. Report changed keys and paths.

## Edit Scope

- src/config/siteConfig.ts

## Common Keys

- title / subtitle / site_url / description / keywords / lang
- themeColor.hue / themeColor.fixed / themeColor.defaultMode
- navbar.logo / navbar.title / navbar.widthFull / navbar.followTheme
- siteStartDate / timezone / showLastModified / outdatedThreshold / sharePoster / generateOgImages
- bangumi.userId / pages.sponsor / pages.guestbook / pages.bangumi
- postListLayout.defaultMode / postListLayout.allowSwitch / postListLayout.grid.masonry / postListLayout.grid.columns
- pagination.postsPerPage / analytics.googleAnalyticsId / analytics.microsoftClarityId
- imageOptimization.formats / imageOptimization.quality

## Guardrails

1. Do not modify files outside Edit Scope unless explicitly requested.
2. Keep booleans, numbers, arrays, enums, and URLs in valid types.
3. Preserve existing comments unless they conflict with the new behavior.
4. Prefer minimal diffs that are easy to review.
