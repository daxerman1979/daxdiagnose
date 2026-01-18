// Naziv keša (možeš menjati verziju kad god nešto bitno izmeniš)
const CACHE_NAME = 'dax-diag-v11';

// Service Worker se instalira
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Aktiviranje Service Workera
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Presretanje zahteva (ovo je ključno da bi Chrome dozvolio "Add to Home Screen")
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
