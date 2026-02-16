# LoliAPI Endpoints Reference

This file is distilled from `api.md` and used as the source of truth for endpoint selection.

## Endpoint Matrix

| Endpoint | URL | Purpose | Query Params | Response Behavior | Notes |
| --- | --- | --- | --- | --- | --- |
| Adaptive ACG image | `https://www.loliapi.com/acg/` | Return image adapted by user agent (desktop/mobile) | `id` optional, `type` optional | Default: redirect to image URL. With `type=url`: return image source URL text | Use for device-adaptive image widgets |
| Desktop ACG image | `https://www.loliapi.com/acg/pc/` | Return desktop-oriented random image | `id` optional, `type` optional | Same as above | Documented collection count: 699 (may change) |
| Mobile ACG image | `https://www.loliapi.com/acg/pe/` | Return mobile-oriented random image | `id` optional, `type` optional | Same as above | Documented collection count: 2875 (may change) |
| Profile picture | `https://www.loliapi.com/acg/pp/` | Return random avatar image | No documented params | Redirect to image URL | Documented collection count: 218 (may change) |
| Random background | `https://www.loliapi.com/bg/` | Return random desktop or mobile image | `id` optional, `type` optional | Default: redirect. With `type=url`: return source URL text | Good default for wallpaper-like banners |
| Get IP | `https://www.loliapi.com/getip/` | Supposedly return IP info | Unclear/inconsistent in source doc | Source section is inconsistent | Treat as low-trust; avoid by default |

## Query Parameters

| Name | Values | Meaning |
| --- | --- | --- |
| `id` | Integer, within provider collection size | Request a specific image record |
| `type` | omitted or `url` | Omitted: redirect behavior. `url`: return image URL text |

## Practical URL Examples

1. Adaptive random image:
`https://www.loliapi.com/acg/`
2. Adaptive fixed image URL text:
`https://www.loliapi.com/acg/?id=23&type=url`
3. Desktop random image:
`https://www.loliapi.com/acg/pc/`
4. Mobile random image URL text:
`https://www.loliapi.com/acg/pe/?type=url`
5. Random avatar:
`https://www.loliapi.com/acg/pp/`
6. Random background URL text:
`https://www.loliapi.com/bg/?type=url`

## Selection Heuristics

1. Need automatic desktop/mobile adaptation: choose `/acg/`.
2. Need strict desktop or strict mobile output: choose `/acg/pc/` or `/acg/pe/`.
3. Need avatar slot image: choose `/acg/pp/`.
4. Need hero/background section random image: choose `/bg/`.
