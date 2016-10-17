# You might not need… boilerplate.
## First, a little backstory

5 years ago I applied for my dream job. A Front-end Engineering position at Blizzard Entertainment. Being an engineering position, I knew my sparse programming skills would be subjected to rigourous testing, and nowhere was this more apparent than the practical assignments they gave me as part of my interview process.

### The practical assignment of doom

One of the assignments was for me to build a multi-level, JSON+JavaScript menu system in 3 hours or less.

Now you may be thinking, barring the time constraint, that the task should be pretty straight-forward, but there was a catch: I'd have to do it without any JavaScript libraries. That meant, for me, a jQuery pundit, I'd have to dig deep and venture into the dark unknown that was vanilla JavaScript.

Somehow I managed to scrape something together (THANK YOU STACK OVERFLOW!) but I wasn't really happy with my work and I had a ton of questions about better ways to do what I tried to do in those short 3 hours. More importantly, I realised how ignorant I was in JavaScript terms. jQuery had made me JavaScript dumb.

### The results

Anyway, the effort proved to be enough, and a few weeks later I was winging my way to Blizzard HQ in Southern California for the next round of tests and face-to-face interviews.
They grilled me hard in the technical interviews and I realised I wasn't going to make it. On my return flight home, I received news I hadn't made the cut, but I came away from the experience with a new purpose: I had to learn the fundamentals.

### A new mission

So, for the last 5 years, I've been trying to build and test my own things, to not be too dependent on libraries and to understand how our tools work. Now that manifesto comes with some pros and cons.

Skipping libraries and writing raw JS and CSS has some pretty drastic side-effects:

- my work will take longer to produce.
- I'd be doing it alone
- It requires more rigourous testing
- it's not all that team-friendly, reading bespoke CSS / JS is hard!

On the plus side though:

- My work was bloat-free, had fewer dependencies and is Super-Performant™.
- I was learning an incredible amount about writing cross-browser JS and CSS
- I have a better understanding of the underlying tech (which has had great benefits, especially in picking up new libraries such as Angular)

That journey started 5 years ago. And that brings me to today, talking to you about Boilerplate in our tech.

## What is boilerplate code?

What's the definition of Boilerplate?
The template code we end up writing to kick-off a project.
Take this block of HTML as an example:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Hello world</title>
    <link rel="stylesheet" type="text/css" href="/style.css">
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
  </head>
  <body>
    …
    <script type="application/javascript" src="script.js"></script>
  </body>
</html>
```

Do any of you have any templates like this stored away somewhere for use on every new project? Do you use any build tools or plugins to generate it? Or do you just copy it from a previous project?

Why do we do that?

- Habit?
- Laziness?
- Saving time?
- Because it works?
- Because we don't care much for questions?

## Libraries

The concept of Boilerplate code applies to libraries too.

So, I'm sure you all have some libraries you swear by, and end up using on pretty much every project. Let's get some examples from the audience! What JS and CSS libraries do you end up using? Grid systems?

- Bootstrap
- Foundation
- H5BP?
- Normalize.css
- Modernizr
- jQuery

Is all this code necessary?
Let's take a look again at our HTML example - how much of that is necessary? What can we safely delete from it?

OK, let's delete all the unnecessary stuff.

```
<!DOCTYPE html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Hello world</title>
<link rel="stylesheet" href="/style.css">
…
<script src="script.js"></script>
```

Feeling a little uncomfortable?
Why?

Once again, why do we consistently do this?

## A closer look at these libraries

Let's take a closer look at these libraries, Modernizr, Normalize.css, Bootstrap and jQuery.

What makes them great?

They solve our (IE) problems, thereby making our lives easier and speeding up development. Above all else, we're not inconvenienced by doubt, or second-guessing. Is that a good thing?

How old are these libraries?

They're all 5 years or older, jQuery, for instance, clocks in at 10 years old.
What problems were these libraries fixing back then? Do we have those problems now?
Back to the 5-years ago, when I was applying for fancy dream jobs, what was the browser environment like?

- IE9 had just been introduced.
- We were dealing with the tail-end of IE6 to 8 at the time.
- HTML5 was maturing as a spec.

Today, IE9 AND IE10 amount to less than 1% of New Zealand's browser audience. A lot can happen in 5 years!
So, if these libraries are fixing problems that don't really exist anymore, why do we keep using them?  Let's take a closer look at what each library does for us.

### Modernizr

Modernizr is great for:

- JS-based browser feature detection
- CSS-feature insights using classes on the `html` node
- Conditionally loading polyfills

Modernizr is pretty poor at:

- Web Performance
- upsetting the dependency chain: using JS to solve HTML and CSS problems is not great.
- setting a browser support architecture

Modernizr is not a silver bullet, some features can't be polyfilled away.

Let'st take a look at some modernizr usage and look at our alternatives. See [code/1_Modernizr](code/1_Modernizr)

### Normalize.css

Normalize is great for:

- Ironing out user-agent default CSS problems
- covering all the elements in old browsers, including new elements and attributes introduced with HTML5.

Normalize is pretty poor because most folks don't use it properly:

- It can generate a lot of noise
- You won't use most of it
- You have to override the defaults that override the defaults.

Let'st take a look at some Normalize.css usage and look at our alternatives. See [code/2_Normalize](code/2_Normalize)

### Bootstrap

Bootstrap is great for:

- Building prototypes
- those that don't want to learn CSS
- including common UI patterns
- Cross-browser friendliness
- Creating a somewhat Responsive website

Bootstrap is pretty poor because:

- it's bloated. Most folks include the whole of Bootstrap without thinking about the consequences
- its use of HTML is pretty poor (but steadily improving)
- it keeps you CSS-ignorant
- it wastes your time as a Front-end Dev. You spend all your time customising it to the design, that you might well have spent building a bespoke website.

Let'st take a look at some Bootstrap usage and look at our alternatives. See [code/3_Bootstrap](code/3_Bootstrap)

### jQuery

jQuery is great for:

- its powerful selector-engine (Sizzle)
- ironing out browser differences
- fixing old browser bugs and compatibility issues
- writing less code

Bootstrap is pretty poor because:

- it's a massive library
- you won't use most of it
- your scripts become unportable, relying on jQuery forever more.
- it makes you prone to JavaScript ignorance

Let'st take a look at some jQuery usage and look at our alternatives. See [code/4_jQuery](code/4_jQuery)

## To sum up

Boilerplate libraries help us because:

- we write less code, thereby creating stuff quicker
- we have the power of the community behind us
- they solve a whole host of bugs
- we don't have to sweat the hard stuff or think about what's going on underneath the hood

But these libraries can also hinder us, in ways such as:

- Poor Performance
- Poor dependency-chain use
- Making us ignorant to the underlying tech.
- We spend so much time customising them that we might as well write our own code
- They create dependencies
- They suggest strategies and architecture that are not ideal
- They don't cater for cases we might need on our individual projects

Should we continue to use them? Really, it's up to you. Someone well-versed in the underlying tech will be really efficient with these libraries, but if you're new to the industry and want to learn, they might just be hampering your future prospects, like they did for ignorant-and-lazy-old-me.

Thanks for your time.
