function browserSupportsAllFeatures() {
  return 'content' in document.createElement('template') &&
         'createDocumentFragment' in document;
}

if (browserSupportsAllFeatures()) {
  // Browsers that support all features run `main()` immediately.
  main();
} else {
  // All other browsers loads polyfills and then run `main()`.
  loadScript('/path/to/polyfills.js', main);
}
