// service-worker.js

self.addEventListener('install', (event) => {
  console.log('Service Worker đang được cài đặt.');
  // Thực hiện các bước cài đặt nếu cần
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker đang được kích hoạt.');
  // Thực hiện các bước kích hoạt nếu cần
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
