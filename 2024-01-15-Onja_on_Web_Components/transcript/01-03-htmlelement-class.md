## Extending the `HTMLElement` class

Extending the `HTMLElement` class looks a little something like this:

```javascript
class MyNewElementClass extends HTMLElement {
  constructor() {
    // Always call `super()` first
    super();
  }
}
```

## How do we bind that to a custom element?

We use the new Custom Elements Registry API for that!

```javascript
window.customElements.define('new-element', MyNewElementClass);
```

---
[**Next:** An example](./01-04-an-example.md)

More info:
- [MDN: Using custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)