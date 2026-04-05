const CACHE = "gestao-2026-v1";
const ASSETS = [
  "/gestao-2026/",
  "/gestao-2026/index.html",
  "/gestao-2026/manifest.json",
  "/gestao-2026/icon-192.png",
  "/gestao-2026/icon-512.png",
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
