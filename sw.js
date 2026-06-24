// CaliFit Service Worker
// Versió de la cau: PUJA AQUEST NÚMERO cada cop que publiquis una versió nova
// de l'app. Així els usuaris reben els canvis i no es queden amb una versió antiga.
const CACHE_VERSION = 'califit-v3';

// Fitxers que volem disponibles offline
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

// INSTAL·LACIÓ: desa els fitxers bàsics a la cau
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(ASSETS))
  );
  // Activa la versió nova immediatament
  self.skipWaiting();
});

// ACTIVACIÓ: esborra les caus antigues
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// FETCH: network-first per a documents (sempre la versió més recent si hi ha xarxa),
// amb fallback a la cau quan no hi ha connexió.
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Només gestionem peticions GET del mateix origen
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // deixa passar YouTube, Google Fonts, etc.

  event.respondWith(
    fetch(req)
      .then((res) => {
        // Desa una còpia fresca a la cau
        const copy = res.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        return res;
      })
      .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
  );
});
