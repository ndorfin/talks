if ('serviceWorker' in navigator) {
  installServiceWorker();
} else {
  showNoServiceWorkerSupport();
}
