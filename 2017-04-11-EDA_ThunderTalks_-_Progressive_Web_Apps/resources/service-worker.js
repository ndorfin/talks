const CACHE_PREFIX   = 'EDAPWACache';
const CACHE_VERSION  = '0.0.1';
const CACHE_NAME     = CACHE_PREFIX + CACHE_VERSION;
// Files required to make this app work offline
const REQUIRED_FILES = [
  '/', // Separate URL than index.html!
  '/index.html',
  '/css/site.css',
  '/js/site.js',
  '/img/logo_eda.png'
];
const SITE_HOST      = 'sokkie.local:8000';

// Respond with cached resources
self.addEventListener('fetch', function(e) {
  // e.respondWith(
  //   caches.open(CACHE_NAME).then(function(cache) {
  //     return cache.match(e.request).then(function(response) {
  //       if (response) { // if cache is available, respond with cache
  //         return response;
  //       }
  //       // if there are no caches, try fetching request
  //       return fetch(e.request.clone()).then(function(response) {
  //         var matchesDomain = e.request.url.indexOf(SITE_HOST) > -1;
  //         if (response.status < 400 && matchesDomain) {
  //           cache.put(e.request, response.clone());
  //         }
  //         return response;
  //       });
  //     });
  //   })
  // );
});

// Cache resources
self.addEventListener('install', function (e) {
  // e.waitUntil(
  //   caches.open(CACHE_NAME).then(function (cache) {
  //     console.log('WORKER: Installing pre-cache: ' + CACHE_NAME);
  //     return cache.addAll(REQUIRED_FILES);
  //   })
  //   .then(function() {
  //     // `skipWaiting()` forces the waiting ServiceWorker to become the
  //     // active ServiceWorker, triggering the `onactivate` event.
  //     // Together with `Clients.claim()` this allows a worker to take effect
  //     // immediately in the client(s).
  //     return self.skipWaiting();
  //   })
  // );
});

// Delete outdated caches
self.addEventListener('activate', function (e) {
  // console.log('WORKER: Activate called');
  // e.waitUntil(
  //   caches
  //     /* This method returns a promise which will resolve to an array of available cache keys. */
  //     .keys()
  //     .then(function (keyList) {
  //       console.log('WORKER: Active Caches: ', keyList);
  //       /* We return a promise that settles when all outdated caches are deleted. */
  //       return Promise.all(
  //         keyList
  //           .filter(function (key) {
  //             /* Filter by keys that don't start with the latest version prefix. */
  //             return !key.startsWith(CACHE_NAME);
  //           })
  //           .map(function (key) {
  //             /* Return a promise that's fulfilled when each outdated cache is deleted. */
  //             return caches.delete(key);
  //           })
  //       );
  //     })
  //     .then(function(){
  //       console.log('WORKER: self.clients.claim()');
  //       return self.clients.claim();
  //     })
  //     .then(function() {console.log('WORKER: activate completed.');})
  // );
});
