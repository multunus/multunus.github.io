---
title: Venkat Subramaniam's talk on Code Quality
date: '2011-04-21 09:47:11'
tags:
- cap-shakeeb
- process
wp:post_id: '4176'
link: http://www.multunus.com/blog/2011/04/venkat-subramaniams-talk-on-code-quality/
---

![Venkat_at_yahoo-300x224](http://www.multunus.com/wp-content/uploads/2011/04/Venkat_at_yahoo-300x224.jpg)

We attended [Venkat Subramaniam’s talk on Code Quality](http://http//www.agiledeveloper.com/presentations/caring_about_code_quality.pdf) at Yahoo India a couple of days back.

Venkat is the founder of Agile Developer and the author of several books. Consultant and Adjunct Professor are some of the other hats he wears. It was an inspiring experience. While we were reassured that our current practices are on the right track during most of the talk, there were a some things which caused us to rethink the way we do things.

## Why do we need Code Quality ?
One of the first things Venkat asked us to think about was why code quality was necessary in the first place. Most of the audience had reasons like ‘Easy Maintainence’, ‘To make a better product’, ‘Company’s image’ etc. These were reasons which we had on the top of our mind as well. However his reasoning was quite different:

> We need Code Quality to be truly Agile

What this means is that rapidly adding new features or quickly changing existing features to incorporate feedback is not possible without clean code.

We have been focusing on writing cleaner code for quite some time as well. But our approach to improving in this area has been limited to reading books and online articles about better approaches to write clean code and internal discussions with our team. One essential ingredient that we were missing was using an existing sample, something near perfection which we could look at and learn from or at least be inspired by.

## Pair Programming Vs Code Review
Code Review aims to provide external feedback. But we already do pair programming which tries to achieve nearly the same. The danger lies in the navigator becoming so involved that he is not externalized enough. So the solution is to switch pairs every half a day.

## Additional Action Items
After having a brainstorming session with the entire team here, we decided to include the following suggestions from Venkat’s talk to our existing practices:

### Starting “Perspective” based Peer Reviews
This is mandatory for  projects which have only one pair (and hence cannot switch pairs). The reviewer should have enough familiarity(perspective) with the project to be able to make a judgment on the design and quality. This is also useful for projects which can switch pairs - but not mandatory.


### Dedicated time to pay off technical debt
While our iterations always have time baked in, to clear technical debt, we often spend that time doing something else instead. More disclipine in paying down our technical debt is something we intend to work on.


### Code Quality metrics in the Informative Workspace
While ‘name and shame’ is certainly not something we do, Venkat’s belief in publicising quality metrics as a way to encourage code quality [in our informative workspace] is something we will explore in the coming weeks.
