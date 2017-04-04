---
title: Lessons learned from Agile Bengaluru 2010
date: '2010-02-14 09:55:48'
tags:
- cap-leena
- process
wp:post_id: '4185'
link: http://www.multunus.com/blog/2010/02/lessons-learned-from-agile-bengaluru-2010/
---

It was a great feeling after attending the [Agile Bengaluru Conf 2010](http://www.agileindia.org/agilebengaluru2010). The theme for this Agile Conference was **Post-Modern Agile** i.e. what’s next after Agile. Most of the sessions were talking mainly on what needs to be done to make a product a success. Just following agile practices will not make any product a success. The team needs to get out of their circle and think outside the coding level to understand their customers. The main takeaway points of the session are:

- **Frequent Validation** - Always validate with actual customers. Talk directly to them, take their feedback, implement it and soon release it. This cycle has to continue. If we don’t do this, there is no meaning in building any product with BDD/TDD, Automated tests etc.
- **Limiting WIP** [Work-In-Progress] - Never leave too many things untested or unreleased. Get your QA team to test as soon as the dev team is done. Release to production as soon as QA is done. When we make frequent releases, you can also get frequent validation.
- **Checking vs Testing** - If you’re not sure what the difference is, there’s an [article on InfoQ](http://www.infoq.com/news/2009/12/testing-or-checking) that explains this well. The bottom line is, use automated tests for mundane tasks [“checking”] and use manual testing for exploratory testing.

There was an [interesting session](http://www.agileindia.org/agilebengaluru2010/agile-bengaluru-2010-a-startup-journey.htm) by 
**Siddhartha Govindaraj**, who is the founder of Silver Stripe Software. He talked about how they evolved from ad-hoc to Agile and from Agile to [Kanban](http://en.wikipedia.org/wiki/Kanban). The points I felt interesting and which are worth trying out are:

1. **No iterations/sprint** - Always take top items from backlog - What usually happens during an iteration is, either you might finish all the items in an iteration and as there is still more time left you might have to pull some item from the backlog. The other case can be, you are not fully done with some tasks you might have to push some items to next sprint. Instead of this, always take items from backlog. The developers are supposed to work on the top items in the backlog and QA will be testing as soon as the development is done. QA need not have to wait for a certain period to test.
1. **Limiting WIP (Work In Progress)** - Don’t pile up stuff, never leave anything untested/unreleased. If WIP goes beyond a specific number, then change the plan like stop development make devs to test. And don’t keep tested stuff unreleased. Alway keep a maximum number of items that needs to be part of released. So even if the release is planned weekly, there can be multiple releases during the week if a lot of features are implemented during a certain week. Another advantage with this approach is, when dev team gets a chance to sit with QA, they also learn about exploratory testing.
1. **Single backlog for multiple projects** - This is an interesting point. He had multiple projects say A & B, both in maintenance stage. He has a team of 5. So rather than splitting the team into 2 across these 2 projects, they kept a single backlog of both projects. They prioritize the backlog and take items from that. This way both projects move in parallel more smoothly.
1. **Checking vs testing** - Checking should always be automated while  Manual testing effort should be reserved for exploratory testing only.

He also suggests avoiding a daily Scrum meeting. The point he had was, the team should be interacting so closely throughout the day, which avoids the need for a stand-up . But if there is an issue that needs to be discussed or if there is a requirement for having a discussion within teams, then such a stand-up is called for. I heard the same being discussed by many people - that Scrum is not really mandatory but am not sure about the same as of now. At Multunus, we still get quite a lot of value out of the stand- ups, because 
[we do it a little differently](http://www.multunus.com/2010/01/our-pragmatic-processes/).

It was a pretty simple presentation in which he was talking about how their company has evolved. As it was about his own experience, he had concrete examples for validating his points. There were questions from the audience like, how velocity is calculated if there were no sprints, how the team would get adjusted to context switching in case of single backlog etc. His answer was that, they are a small team - so these were mostly non-issues for them. And about velocity, productivity etc, those really will come into picture only if there is not enough trust in the team. If the team trusts the management and the management also trusts the team, then these productivity/burn down charts etc are meaningless. That point really made a lot of sense to me. If the team always perform/deliver well and if the management has trust on the team, why should they look at the burn down charts etc to see the team’s performance ?.
