if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('service-worker.js', {scope: '/'})
    .then(function() {
      console.log('The service worker has been registered!');
    });
}