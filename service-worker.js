self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('your-cache-name').then(function(cache) {
      return cache.addAll([
        'https://cv.lephiphi.com/',
        'https://cv.lephiphi.com/',
        'https://lephiphi.com/'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
