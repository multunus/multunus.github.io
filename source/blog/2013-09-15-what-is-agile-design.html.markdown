---
title: What is Agile Design
date: '2013-09-15 20:33:00'
tags:
- leena
- continuous-delivery
- process
- technology
wp:post_id: '4138'
link: http://www.multunus.com/blog/2013/09/what-is-agile-design/
---

Agile recommends to do design continuously and emerge your design instead of doing a [Big Design UpFront](http://c2.com/cgi/wiki?BigDesignUpFront) (BDUF). This post is an attempt to explain how to achieve the same.

## Start with Simple Design
Extreme Programming recommends you to [Do The Simplest Thing That Could Possibly Work](http://www.xprogramming.com/Practices/PracSimplest.html), known with the acronym (DTSTTCPW). 

[As mentioned by Ron Jeffries](http://xprogramming.com/classics/expemergentdesign/), the code is simple if it:

- Run all the tests
- Contain no duplicate code
- Express all the ideas the author wants to express
- Minimize classes and methods

The first 3 rules are self explanatory but the fourth one is confusing and contradictory especially with related to SOLID principles and design patterns. But it conveys the principles [YAGNI](http://en.wikipedia.org/wiki/You_aren't_gonna_need_it) and [Last Responsible Moment](http://www.codinghorror.com/blog/2006/10/the-last-responsible-moment.html) i.e. don’t do anything assuming that it might be required in future.

## Design Incrementally
The following is the excerpt from XP Explained Book by Kent Beck on Incremental Design.

> XP teams can meet their human need for immediate and frequent success as well as their economic need to defer investment to the last responsible moment. Some of the teams who read and applied the first edition of this book didn’t get the part of the message about the last responsible moment. They piled story on story as quickly as possible with the least possible investment in design. Without daily attention to design, the cost of changes does skyrocket. The result is poorly designed, brittle, hard-to-change systems.

The question is not whether or not to design, the question is when to design. Incremental design suggests that the most effective time to design is in the light of experience.

If small, safe steps are how to design, the next question is where in the system to improve the design. The simple heuristic I have found helpful is to eliminate duplication. If I have the same logic in two places, I work with the design to understand how I can have only one copy.

## Emergent Design and Continuous Design
Emergent Design, popularised by Neal Ford the design emerges by following Last Responsible Moment and Idiomatic Patterns. Refer to his 
[15 article series](http://www.ibm.com/developerworks/java/library/j-eaed1/index.html), which talks about the same. I will write about the same, especially about the Idiomatic Patterns, in another post.

[Continuous Design](http://www.martinfowler.com/ieeeSoftware/continuousDesign.pdf) was the term given by James Shore. He explains the same as:

> I prefer the term continuous design because it emphasizes the core of the process: continuously taking advantage of opportunities to improve your design. When you discover a design flaw, you fix it. When a new feature doesn’t fit, you update the design.

## Summary
Instead of doing a big bang Design phase initially, refactor the code meticulously by applying the principles [DRY](http://www.artima.com/intv/dry.html) and [Once and Only Once](http://c2.com/xp/OnceAndOnlyOnce.html). Improve the code further by using tools to identify
[Cyclomatic Complexity](http://c2.com/cgi/wiki?AbcMetric) and [Afferent Coupling](http://www.ibm.com/developerworks/library/j-eaed6/). Follow Test Driven Development which helps to do enough design required for the current requirement. Test coverage gives confidence to re factor the code without fear.

## References
- [http://c2.com/cgi/wiki?XpSimplicityRules](http://c2.com/cgi/wiki?XpSimplicityRules)
- [http://c2.com/cgi/wiki?DoTheSimplestThingThatCouldPossiblyWork](http://c2.com/cgi/wiki?DoTheSimplestThingThatCouldPossiblyWork)
- [http://www.netobjectives.com/blogs/primer-emergent-design](http://www.netobjectives.com/blogs/primer-emergent-design)  
- [http://martinfowler.com/articles/designDead.html](http://martinfowler.com/articles/designDead.html)
- [http://wirfs-brock.com/blog/2011/01/18/agile-architecture-myths-2-architecture-decisions-should-be-made-at-the-last-responsible-moment/](http://wirfs-brock.com/blog/2011/01/18/agile-architecture-myths-2-architecture-decisions-should-be-made-at-the-last-responsible-moment/)
- [http://www.codinghorror.com/blog/2007/03/curlys-law-do-one-thing.html](http://www.codinghorror.com/blog/2007/03/curlys-law-do-one-thing.html)
- [http://tobeagile.com/2012/10/16/seven-strategies-for-doing-emergent-design/](http://tobeagile.com/2012/10/16/seven-strategies-for-doing-emergent-design/)
