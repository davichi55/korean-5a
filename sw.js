// Service worker for the installable games. It exists so browsers offer "Install app"; it caches NOTHING.
// Pages (navigations) are always re-checked with the server ("no-cache" = revalidate, a tiny request when
// nothing changed), so a fix pushed to GitHub shows up on the next open instead of up to 10 minutes later.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode === "navigate") e.respondWith(fetch(e.request, { cache: "no-cache" }).catch(() => fetch(e.request)));
  else e.respondWith(fetch(e.request));
});
