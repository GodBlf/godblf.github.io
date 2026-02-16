---
name: firefly-post-writing
description: "处理 Firefly 博客文章撰写与落位。Use when user provides Markdown content and asks to create or update posts under src/content/posts with valid frontmatter and proper file organization."
---

# Firefly Post Writing

## Overview

Place prepared Markdown content into the correct post location and keep frontmatter compatible with Firefly content schema.

## Workflow

1. Read `src/content.config.ts` to keep schema-compatible frontmatter.
2. Confirm whether the user wants a new post or to update an existing post.
3. Choose file layout:
- Single file mode: `src/content/posts/<slug>.md`.
- Folder mode (recommended when post has local assets): `src/content/posts/<slug>/index.md`.
4. Build or normalize frontmatter.
5. Insert provided Markdown body without altering meaning.
6. Place local images and fix relative paths.
7. Return final post path and preview route.

## Required Frontmatter

- `title` (string)
- `published` (date, `YYYY-MM-DD`)

## Common Optional Frontmatter

- `description`
- `updated`
- `draft`
- `tags`
- `category`
- `pinned`
- `author`
- `sourceLink`
- `licenseName`
- `licenseUrl`
- `comment`
- `image`

## Placement Rules

1. If the user provides a target file path, honor it directly.
2. If no path is provided, derive a slug and create under `src/content/posts/`.
3. If the article references local images, prefer folder mode so assets stay beside `index.md`.
4. Keep links and image paths relative to the final markdown file.
5. Keep existing post metadata when editing an existing file unless user asks to overwrite it.

## Guardrails

1. Do not place post content under `src/content/spec/` unless user explicitly requests a spec page.
2. Do not remove required frontmatter fields.
3. Keep date format stable as `YYYY-MM-DD`.
4. Avoid unrelated edits in non-content config files.
