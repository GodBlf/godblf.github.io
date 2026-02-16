# Frontend Integration Patterns

Use these patterns to integrate LoliAPI with framework-agnostic JavaScript.

## Shared URL Builder

```js
const BASE_URL = "https://www.loliapi.com";

const ENDPOINT_MAP = {
  adaptive: "/acg/",
  desktop: "/acg/pc/",
  mobile: "/acg/pe/",
  avatar: "/acg/pp/",
  background: "/bg/",
};

export function buildLoliApiUrl({ endpoint = "adaptive", id, type } = {}) {
  const pathname = ENDPOINT_MAP[endpoint];
  if (!pathname) throw new Error(`Unsupported endpoint: ${endpoint}`);

  const url = new URL(pathname, BASE_URL);
  if (Number.isInteger(id) && id >= 0) url.searchParams.set("id", String(id));
  if (type === "url") url.searchParams.set("type", "url");
  return url.toString();
}
```

## Pattern A: Direct `<img src>` (Simplest)

Use this when the page only needs to display an image and no URL post-processing is required.

```js
const img = document.querySelector("#cover");
img.loading = "lazy";
img.alt = "random acg";
img.src = buildLoliApiUrl({ endpoint: "adaptive" });
```

Benefits:
1. Minimal code and best compatibility with redirect behavior.
2. Avoid CORS issues that may appear when reading redirected responses via `fetch`.

## Pattern B: Fetch URL Text Then Render

Use this when you need to inspect/store/share the image URL before rendering.

```js
export async function fetchImageSourceUrl({ endpoint = "adaptive", id, timeoutMs = 8000 } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const url = buildLoliApiUrl({ endpoint, id, type: "url" });
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    const imageUrl = (await res.text()).trim();
    if (!imageUrl) throw new Error("Empty image URL");
    return imageUrl;
  } finally {
    clearTimeout(timer);
  }
}
```

## Pattern C: Resilient Loader (Timeout + Retry + Cache)

Use this for production pages where UX stability matters.

```js
const cache = new Map();

async function withRetry(task, retries = 1) {
  let lastError;
  for (let i = 0; i <= retries; i += 1) {
    try {
      return await task();
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
}

export async function loadImageForSlot(slotKey, options = {}) {
  if (cache.has(slotKey)) return cache.get(slotKey);

  const imageUrl = await withRetry(
    () => fetchImageSourceUrl(options),
    options.retries ?? 1
  );

  cache.set(slotKey, imageUrl);
  return imageUrl;
}
```

## UI State Contract

Always provide:
1. Loading state before URL/image is ready.
2. Error state with a retry action.
3. Success state with meaningful `alt` text.
4. Optional fallback image when remote loading fails repeatedly.
