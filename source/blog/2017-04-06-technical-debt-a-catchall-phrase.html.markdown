---
title: Technical Debt - A catchall phrase?
date: '2017-04-06	 22:50:19'
tags:
- cap-leena
- continuous-delivery
- newsletter
link: http://www.multunus.com/blog/2017/04/technical-debt-a-catchall-phrase/
---

Those who have driven in Bangalore know that how much tough it is to drive here especially during the peak hours @ signals like Silk Board. Everyone tries to get out of the signal as quickly as possible, not giving much importance to the shortcuts we take, like the wrong side, overtaking from left etc.

We complain about how tough it is to drive in Bangalore and the question that can be asked is _how much we contribute to it_ or _how much we try to correct it_?

This is similar to the excuse we&#39;ve for Technical Debt. The code is anyways messy, adding one more is not going to make any different. It was like this when I joined the project. We had time pressures so had to release it faster.

And this thought process ends up creating the Vicious cycle as follows:


![image alt text](https://s3.amazonaws.com/multunus-website/uploads/2017/04/vicious-circle-code.png)

And this is the beginning of the so-called Technical Debt.

![image alt text](https://s3.amazonaws.com/multunus-website/uploads/2017/04/technical-debt-a-mess.png)

And there is one more term that we all like to complain - Legacy Code. Below is one of the best definitions of legacy code I&#39;ve ever seen.

![image alt text](https://s3.amazonaws.com/multunus-website/uploads/2017/04/legacy-code.png)

Let&#39;s look at some examples of what we call as Technical Debt.

![image alt text](https://s3.amazonaws.com/multunus-website/uploads/2017/04/example1.png)

![image alt text](https://s3.amazonaws.com/multunus-website/uploads/2017/04/example2.png)

_Credit:_ [_http://thedailywtf.com/articles/the-refactoring_](http://thedailywtf.com/articles/the-refactoring)



The following is commonly seen - _Ignoring Exceptions_

![image alt text](https://s3.amazonaws.com/multunus-website/uploads/2017/04/example3.png)

![image alt text](https://s3.amazonaws.com/multunus-website/uploads/2017/04/example4.png)

And other common examples which I&#39;ve not covered are:

- Code duplication
- Mismatching names
- Longer methods and/or classes

I am sure all of us seen variations of all these.

# What is Technical Debt

Let&#39;s take a step back and look at what Wikipedia has to say about Technical debt:

_Technical debt can be compared to monetary debt. Unaddressed technical debt increases software entropy. Technical debt is not necessarily a bad thing, and sometimes (e.g., as a proof-of-concept) technical debt is required to move projects forward._

And this is what Ward Cunningham, the person who coined the metaphor, also seemed to have in mind while he coined the term.

To summarise, it is not a license to create an architecture as follows, nor [the license to create crappy code](https://sites.google.com/site/unclebobconsultingllc/a-mess-is-not-a-technical-debt).

![image alt text](https://s3.amazonaws.com/multunus-website/uploads/2017/04/messy-architecture.png)

If we all agree that the above flaw is not considered as professional in other engineering streams, the same rule is applicable to Software Engineering too.

As prudent professionals, it is our responsibility to follow [the four rules of simple design](https://martinfowler.com/bliki/BeckDesignRules.html):

- Passes all the tests
- Expresses every idea that we need to express
- No Duplication
- Minimal methods, classes and modules

And this includes the following:

- [Frequent activity of renaming classes, modules, methods, variables](https://blog.codinghorror.com/i-shall-call-it-somethingmanager/)
- Applying [Boy scout rule](http://wiki.c2.com/?BoyScoutRule) i.e. Leave the campground cleaner than you found it
- [Delete the unused code courageously](http://blog.8thcolor.com/en/2013/04/dead-code-is-rotting-your-codebase/)

# Technical Debt Quadrant

Going back to the definition of Technical Debt by Wikipedia, it should be a result of a  conscious, thoughtful and prudent decision than that of an unconscious one. 

Martin Fowler uses a quadrant to explain similar concepts where he points out that it is not useful to discuss whether something is a debt or not, better ask whether it is reckless or prudent. The more the issues/flows are in the Prudent section, better it is. 

![image alt text](https://s3.amazonaws.com/multunus-website/uploads/2017/04/technical-debt-quadrant.png)

# Paying down Technical Debt

Every team will have technical debt, and it is normal because we learn with our products continuously so it is ideal to have prudent debts.

Another thing is that not all of them needs-pay off. Some of them might be in those areas where we hardly make changes.

So how to identify what needs-payoff? I would like to quote Henrik Kniberg here:

_What is technical debt anyway? Anything about your code &amp; development environment that slows you down. For example:_

- _Unclear, unreadable code._
- _Lack of test automation, build automation, deployment automation, and anything else that could be automated that you do manually today._
- _Duplicate code._
- _Tangled architecture &amp; unnecessarily complex dependencies._
- _Slow, ineffective tools._
- _Uncommitted code &amp; long-lived branches (hides problems that will slow you down later)._
- _Important technical documentation that is missing or out-of-date._
- _Unnecessary technical documentation that is being maintained and kept up-to-date._
- _Lack of test environments._
- _Long build-test cycle &amp; lack of continuous integration._

And pay off them with:

- Continuous refactoring, applying [Boy Scout Rule](http://wiki.c2.com/?BoyScoutRule)
- [Use constant communications to improve namings](http://www.multunus.com/blog/2017/01/naming-hardest-thing-software/)
- Setup Continuous Integration, Follow Mainline Development
- Setup Deployment Pipeline [Automated Testing and Deployment]
- For long running rewrites or major design/architectural changes, use:
  - [Branch by abstraction](https://trunkbaseddevelopment.com/branch-by-abstraction/)
  - [Strangler Pattern](https://trunkbaseddevelopment.com/strangulation/)

# References

Following are some of the highly recommend books for improving the code quality and cleanliness:

[Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)

[Refactoring](https://www.amazon.in/Refactoring-Improving-Existing-Addison-Wesley-Technology-ebook/dp/B007WTFWJ6?_encoding=UTF8&amp;btkr=1&amp;ref_=dp-kindle-redirect)

[Growing Object Oriented Software - Guided by Tests [known as the GOOS book]](https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627)



The following are some of the articles/talks on the same subject:

[Building a Culture of Code Quality - Bryan Helmkamp](https://www.youtube.com/watch?v=IadcIkBeBuI)

[The Technical Debt Trap - Doc Norton](https://www.youtube.com/watch?v=SfWCRl75Kas)

[Why do teams fail to sustain code quality?](http://blog.davidpeterson.co.uk/2011/04/why-do-agile-projects-fail-so-often.html)

[A mess is not a technical debt - Uncle Bob](https://sites.google.com/site/unclebobconsultingllc/a-mess-is-not-a-technical-debt)

[Debt Metaphor - Ward Cunningham](https://www.youtube.com/watch?v=pqeJFYwnkjE)

[Technical Debt Quadrant - Martin Fowler](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html)

[Sacrificial Architecture - Martin Fowler](https://martinfowler.com/bliki/SacrificialArchitecture.html)

[The solution to technical debt - Henrik Kniberg](http://blog.crisp.se/2013/07/12/henrikkniberg/the-solution-to-technical-debt)

[I Shall Call It.. SomethingManager - Jeff Atwood](https://blog.codinghorror.com/i-shall-call-it-somethingmanager/)
