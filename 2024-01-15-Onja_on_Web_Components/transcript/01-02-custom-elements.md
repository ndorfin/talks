## Custom elements

Which of these is a custom element?

1. `<realtime-output>`
2. `<output>`
3. `<input>`
3. `<neitherinnoroutput>`

**Tip:** All Custom elements must have at least one dash character in their element-name. e.g. `<main-nav>`

### Example

This is something I like doing, for brevity, and future-proofing:

```html
<button ...>
  <screenreader-only>
    More information about developer: Anita
  </screenreader-only>
</button>
```

### Side-quests

Considering the HTML above:

1. What default styles do these custom elements have?
1. How would you style or select these custom elements?
1. What is the difference between the following types of elements?
   - Built-in elements
   - Unregistered or undefined elements
   - Defined elements

---
[**Next:** The `HTMLElement` class](./01-03-htmlelement-class.md)


