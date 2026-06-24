// CaliFit Service Worker
// ⚠️ PUJA AQUEST NÚMERO cada cop que publiquis una versió nova de l'app
// (v5 → v6 → v7...). Així els usuaris reben els canvis i s'esborra la cau antiga.
const CACHE_VERSION = 'califit-v6';

// Fitxers per tenir disponibles sense connexió
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

// INSTAL·LACIÓ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// ACTIVACIÓ: esborra TOTES les caus antigues
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// FETCH
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // YouTube, Fonts, etc. passen directes

  // Per a navegació i HTML: SEMPRE xarxa primer; només cau si no hi ha connexió.
  const isDoc = req.mode === 'navigate' ||
                (req.headers.get('accept') || '').includes('text/html');

  if (isDoc) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          // Només guardem respostes completes i correctes (status 200)
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put('./index.html', copy));
          }
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Per a la resta (icones, manifest): cau primer, i si no hi és, xarxa.
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        }
        return res;
      });
    })
  );
});
