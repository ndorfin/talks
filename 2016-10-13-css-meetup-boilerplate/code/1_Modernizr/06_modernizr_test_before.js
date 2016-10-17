if (Modernizr.documentfragment) {
  setupFragments();
} else {
  downloadFragmentPolyfill();
}

if (Modernizr.template) {
  loadTemplates();
} else {
  downloadTemplatePolyfill();
}

/* etc */
