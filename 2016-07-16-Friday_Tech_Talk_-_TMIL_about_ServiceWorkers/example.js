// in /js/addWorker.js…
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
      .register('/sw.js', {scope: '/'})
      .then(_successHandler, _failureHandler);
};


// in /sw.js…
this.addEventListener('install',  _installFn);
this.addEventListener('fetch',    _fetchFn);
this.addEventListener('activate', _activateFn);
