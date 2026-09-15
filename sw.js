// Service worker for the installable games. It exists so browsers offer "Install app"; it caches
// NOTHING and passes every request straight to the network, so updates to the games always arrive.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => { e.respondWith(fetch(e.request)); });
