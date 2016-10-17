if (Modernizr.serviceworker) {
  installServiceWorker();
} else {
  showNoServiceWorkerSupport();
}
