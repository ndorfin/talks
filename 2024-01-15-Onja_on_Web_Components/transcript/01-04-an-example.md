## An example Web Component

Let's examine a simple, and 'open' Web Component.

This is easily my favourite way of using Web Components, since it works so well in a *progressive enhancement* approach.

### Setting the scene

Let's say you have a whole bunch of these sorta links littering your site:

```html
<a href="https://...">
  External link to another site
</a>
```

Your marketing manager calls you, saying that they want all these links to trigger new tabs, rather than take the user off-site.

No problem, this is simple use case for a Web Component!

Let's wrap these links in a custom element:

```html
<external-link>
  <a href="https://...">
    External link to another site
  </a>
</external-link>
```

Next up, let's write a class that contains the behaviour we want to add.

First, our standard class, extending the `HTMLElement` class:

```javascript
class ExternalLinkClass extends HTMLElement {
  constructor() {
    // Always call `super()` first
    super();
  }
}
```

Then, let's add this element to the list of Custom Elements:

```javascript
window.customElements.define('external-link', ExternalLinkClass);
```

Before we can add our logic, we'll need to add this script to the document.

```html
<script type="module" src="/mjs/wc/external-link.mjs" defer></script>
```

Great! Let's test that it's working by emitting these console logs...

```javascript
class ExternalLinkClass extends HTMLElement {
  constructor() {
    // Always call `super()` first
    super();
    console.log('`ExternalLinkClass` executed');
  }

  connectedCallback() {
    console.log('`<external-link>` found');
  }
}
```

...and checking it in our browser.

> Noticed we added a class method: `connectedCallback() {...}`.  We'll cover this and other lifecycle hooks later. For those not in the know, this special function fires each time our matching custom element is added to the document, as long as the script we provide is bound to the document.

## Add the tab-popping behaviour

Let's add a click handler to everything in scope of this element.

First, let's add an EventListener to our `connectedCallback()`:

```javascript
  connectedCallback() {
    console.log('`<external-link>` found');
    this.addEventListener('click', this.handleClick);
  }
```

Notice we have a function reference to a new class method: `handleClick`.

Let's add that too.

```javascript
handleClick(event) {
  debugger;
}
```

Great, let's see how that's *handling*.

Checklist:

- We'll need to stop the browser from using the current tab
- We'll need it to open a new tab and focus on that.
- Then we need to do some cleanup, in case things don't work as we want them to.

Do that now.

Wrapping up, our class should look like this...


```javascript
class ExternalLinkClass extends HTMLElement {
  constructor() {
    super();
  }

  handleClick(event) {
    event.preventDefault();
    let anchor = event.target.closest('a[href^="http"]');
    window.open(anchor.href, '_blank').focus();
  }

  connectedCallback() {
    this.addEventListener('click', this.handleClick);
  }
}

window.customElements.define('external-link', ExternalLinkClass);
```