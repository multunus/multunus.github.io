---
title: Why Clojure?
date: '2016-11-11 11:54:19'
tags:
- cap-Kp
- technology
link: http://www.multunus.com/blog/2016/11/clojure-matters/
---

This post dives into the benefits of Clojure from the perspective of the tools that our team currently uses. Some of these benefits are not unique to Clojure. In fact, a lot of other functional programming languages share a few or more of these advantages.

At the moment, the following programming languages are our go-to options. We use Ruby mostly on the server side. We use Javascript with React for web/mobile frontend. We sometimes use Java and Objective-C either for raw performance or when the particular platform needs it.

### What is Clojure
Clojure is a modern version of Lisp. This is where Clojure gets most of its power from. Clojure is a hosted language that targets the JVM and Javascript. A lot has already been written about what makes Lisp so powerful. If you are completely new to Lisp, this essay [Beating the Averages](http://www.paulgraham.com/avg.html) from Paul Graham might convince you to look more into it.

![Lisp XKCD](http://imgs.xkcd.com/comics/lisp_cycles.png)

### Why Clojure?
#### An obsession for simplicity
Clojure both as a language and as a community seems to be obsessed with making stuff simple. Although I don’t think any language would try to make things complicated by intention, the key aspect with Clojure is the clear definition of the difference between stuff that is [simple vs easy](https://www.infoq.com/presentations/Simple-Made-Easy). The community is obsessed about not making things easy at the cost of simplicity. Such a fundamental obsession of a technology community is likely to get reflected in the software built using such technology.

#### Working with Values
>  It is better to have 100 functions operate on one data structure than to have 10 functions operate on 10 data structures."
>  — Alan J. Perlis.

In an object-oriented language, you will usually encapsulate data away in custom objects. Data in Clojure programs is represented in a way that is very close to how you would represent it on a piece of paper - just plain data without ornaments of behavior around it. We can create entire information models using the few immutable data structures provided by Clojure.

The advantage is in increased level of composability. An interesting analogy is UNIX command line tools. All of them can work with streams of text and this makes them composable in ways in which the original authors did not think of. We already do this at a macro level in our systems. We transfer data between our system boundaries in something like JSON, and not as a custom object that only we understand. It is much easier to fabricate and validate data and that makes approaches like generative testing easier in Clojure.

#### Reach of the language
Clojure reaches multiple platforms. It is possible to build entire systems that consist of the server and web and mobile components entirely in Clojure. There is a significant decrease in cognitive load when you can work across your stack in a single programming language.

#### Performance
We usually prefer to code in a language like Ruby compared to Java because of the resultant productivity and expressiveness. But there are times when we need to use something like Java because Ruby is just too slow for certain tasks. With Clojure, you get performance that is very close to Java (which is significantly better than Ruby) without paying a price in productivity or expressiveness.

#### ClojureScript
I would like to specifically emphasize ClojureScript. Even if you can’t use Clojure, it is totally worth using Clojurescript alone for the frontend. The experience of developing single page applications using ClojureScript with tools such as React, Figwheel and Reagent/OM in my opinion is superior to what the popular alternatives are with Javascript. Developer tooling is a general weakness of Clojure compared to more mature languages like Java and Ruby. But in the case of front-end development, this seems to be not true anymore. Starting to learn ClojureScript feels significantly easier compared to the madness in Javascript (npm, webpack, Bower, etc.). There is significantly less churn in the libraries available in ClojureScript compared to Javascript.

#### Macros

This is a very powerful feature of Lisp which allows you to write programs that generate programs. Although to be used sparingly, this enables any programmers to create extensions to the language without having to wait for the language designers to implement it. An example of where this has made a difference is the core.async macro in Clojure. core.async brings the power of CSP-style concurrency to Clojure. Because of the power of macros, this was created as a library and no changes to Clojure was required.

### What's the catch?


Having said all this, Clojure is still a relatively new language. There are issue and kinks that need to be fixed. These are a few issues that might annoy a first-time Clojure user. Although these are not show-stoppers, you will have to live with them until the community (of which you can be a good part of :) ) fixes them.

#### Lisp syntax
People complain about parenthesis a lot, but you will just need to look beyond this. With the right development environment, you will stop noticing this fairly soon. What you will soon realize is that this is what makes the Lisp syntax simple. You can learn the entire syntax in under 10 mins. This simplicity also makes it possible for tools like Paredit to exist ([Paredit is an emacs minor mode](http://danmidwood.com/content/2014/11/21/animated-paredit.html) which enables structural editing of Lisp-like languages).

![unmatched parenthesis] (http://imgs.xkcd.com/comics/\(.png)

#### Steep learning curve
> A language that doesn't affect the way you think about programming, is not worth knowing.
>  — Alan J. Perlis.

Clojure will really take you outside your comfort zone if you are not used to a functional style of programming. This is not necessarily a bad thing, but what is important is to set the right expectations. So unless you have prior experience in functional programming languages, don’t expect to pick it up over a weekend.

#### Error messages can be cryptic
Although you get used to this after a while, this is one of the most annoying things I felt as a beginner. Some of this difficulty is because Clojure is a hosted language. Hopefully, this will improve in the near future itself.

&nbsp;

If reading this has made you curious, here are some materials that you might want to check out:

* [Clojure tutorial for beginners ]( http://www.braveclojure.come/)
* [The Joy of Clojure](the-joy-of-Clojure-second-edition)
* You should probably watch these irrespective of whether you intend to use Clojure or not
 -  [Rich Hickeys greatest hits](https://changelog.com/posts/rich-hickeys-greatest-hits)
 -  A meta talk about the joy of working with [simple tools](https://www.youtube.com/watch?v=ShEez0JkOFw)
