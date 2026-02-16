# Troubleshooting Guide

Use this checklist when generated integration code is not behaving as expected.

## Symptom: Image Does Not Render

Likely causes:
1. Invalid endpoint key (`adaptive/desktop/mobile/avatar/background` mismatch).
2. Broken DOM selector or image node not mounted yet.
3. Network failure or request timeout.

Actions:
1. Log the final URL produced by `buildLoliApiUrl`.
2. Open the URL directly in browser to verify endpoint behavior.
3. Increase timeout from `8000` to `12000` in slow networks.

## Symptom: Fetch Works Poorly But `<img src>` Works

Likely cause:
1. Redirect and CORS behavior differs between direct image loading and programmatic fetch.

Actions:
1. Prefer direct `<img src>` mode when URL text is not mandatory.
2. If URL text is required, keep `type=url` and only parse plain text body.

## Symptom: Always Getting Different Size Than Expected

Likely cause:
1. Using `/acg/` adaptive endpoint when fixed form factor is required.

Actions:
1. Use `/acg/pc/` for desktop layout.
2. Use `/acg/pe/` for mobile layout.
3. Keep `/acg/` only for automatic server-side adaptation.

## Symptom: Specific `id` Fails

Likely cause:
1. `id` out of available range.
2. `id` is not a valid non-negative integer.

Actions:
1. Validate `id` with `Number.isInteger(id) && id >= 0`.
2. On validation failure, omit `id` and request random image.

## Symptom: Frequent White Flash on Refresh

Likely cause:
1. Slow image fetch and no preload/fallback strategy.

Actions:
1. Keep previous image visible until the new image loads.
2. Preload next URL via `new Image()` and switch on load event.
3. Cache URL per UI slot where acceptable.

## Low-Trust Section Notice

`/getip/` in the original `api.md` appears to contain copied examples unrelated to IP payload behavior.
Treat that endpoint as undocumented unless independently verified.
