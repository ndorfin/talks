# Progressive-enhancement with Rails 7

## Topics

- Latest trend: Division between app-only direction and web-based direction, calls for an HTML replacement
- Declarative vs. Imperative
- Tree of web technlogy, branches pruned (Flash, Silverlight, etc), trunk (Web Standards)
- Tried and tested: HTTP, HTML, CSS, JavaScript, Accessibility, etc.
- Rule of least power: HTML, then CSS, then JS, then whatever else.
    - No JS? https://kryogenix.org/code/browser/everyonehasjs.html
- Keep it accessible!
- Proggresive enhancement to the rescue…
    - Assume the worst-case (No JS, No CSS, Bad network)
    - Rule of least power
        - Build on underlying tech
- How do we make something progressively-enhanced?
    - Redesign your design process, or guerrila implementation
    - Meaningful and structured HTML (Accessible)
    - Server-side by default (State)
    - CSS to steer it visually, and behaviourally. (Accessible)
    - JS to enhance, improve. (Save round-trips, improve interactivity, streamline)
- For goodness sake - hire Design Engineers (or front-of-the-front-end developers, developers who work with designers, and write mostly HTML and CSS)
- Web Components
    - Wrapper for functional HTML
    - Discrete enhancement
    - Ignored by default, treated as a functionless node
- StimulusJS
    - Some minor modifications
    - Works well with Web Components too
- Hotwire/TurboDrive
    - Efficient page transitions
- Hotwire/TurboFrame
- Service Workers


## References

- https://www.innoq.com/en/blog/progressive-enhancement-mit-hotwire/