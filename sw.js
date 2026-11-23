// MeloPro Service Worker - Network-First for HTML, Stale-While-Revalidate for Assets
const CACHE_NAME = 'melopro-cache-v4';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('MeloPro: Eski önbellek siliniyor ->', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const isNavigate = event.request.mode === 'navigate' || 
                     (event.request.method === 'GET' && 
                      event.request.headers.get('accept') && 
                      event.request.headers.get('accept').includes('text/html'));

  if (isNavigate) {
    // HTML / Sayfa geçişleri: Önce ağdan en günceli al, çevrimdışıysa önbellekten sun
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match(event.request)))
    );
    return;
  }

  // Diğer statik kaynaklar (ikonlar, manifest vb.): Önbellek varsa hemen sun, arkaplanda güncelle
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
        }
        return networkResponse;
      }).catch(() => {});

      return cachedResponse || fetchPromise;
    })
  );
});
