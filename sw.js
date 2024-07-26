const CACHE_NAME = 'blog-cache-v1';
const urlsToCache = [
  'https://www.lephiphi.com/?m=1',
  'https://www.lephiphi.com/?m=1',
  'https://www.lephiphi.com/?m=1'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
