self.addEventListener('install', (event) => {
  console.log('Service worker installing...');
  // Add a call to skipWaiting here if you have an immediate update strategy
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activating...');
  // Claim clients to start controlling them without reloading
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  console.log('Fetching:', event.request.url);
  // Implement caching strategies here
  event.respondWith(fetch(event.request));
});