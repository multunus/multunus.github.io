---
title: Estimating to Timeboxing - Our Journey
date: '2013-04-11 02:33:00'
tags:
- cap-leena
- cap-vaidy
- continuous-delivery
- newsletter
wp:post_id: '4143'
link: http://www.multunus.com/blog/2013/04/estimating-to-timeboxing-our-journey/
---

Estimations are predictions. Unfortunately though, they end up being perceived as 
commitments. And the team in question starts getting unduly pressured when the estimates go wrong. At Multunus this has happened many times in the past.

Sometime last year we realized there was no point in trying any harder to come up with better estimates - just by relying on our past experience and gut instincts. It was time to look at things from a different perspective.

We learnt a lot of things from [Art of Agile Development [by James Shore]](http://www.jamesshore.com/Agile-Book/). We found it tremendously useful for learning how to get started with Extreme Programming - and making the “prevention rather than cure” mental shift. This in turn resulted in much less waste - and higher efficiency across the team.

But we were still struggling with estimating. We tried the story points and velocity approach suggested by XP. But we were still unable to deliver things at a predictable pace.

It was time to look beyond XP’s default practices.

## First set of changes

- Keep both [MMFs and Stories](http://www.jamesshore.com/Agile-Book/release_planning.html) as small as possible.
- Slice down all stories to the same size. This reduces the margin of error that creeps in during story size estimation.
- The velocity, then, is simply the number of stories delivered in an iteration.

The above changes worked well on projects which already had some kind of rhythm. We’d been working with these customer for at least 3 months - so, our knowledge of the system and the customer’s requirements were good.

However, things still fell apart for new projects and customers. The level of uncertainty is obviously much higher in these cases - and the above modified approach was not sufficient for us to remain predictable enough.


## Second set of changes
During our search for alternative approaches [see references below], we discovered multiple presentations and blog posts - all suggesting the same thing: Estimating can never be accurate 
enough.

We watched the [Deliberate Discovery video [by Dan North]](http://www.infoq.com/presentations/Embracing-Uncertainty) - and that hit us. We might be more successful if we flipped things around - and **timeboxed** the stories and MMF’s.

Instead of asking the question “How long will it take to build this Feature?”, we instead ask the question “What is the maximum time that should allocate for this feature?”. In addition, we’re also documenting what it is that we’re trying to discover/learn by building that particular feature.

**NOTE:** This is subtly different from the “validated learning” approach in the Lean Startup world - because at this stage, we’re only speaking of engineering related risks.

This is useful to overcome [Parkinson’s Law](http://en.wikipedia.org/wiki/Parkinson's_law) [“Work expands so as to fill the time available for its completion”]. There’s an additional sense of urgency that prevails on the team. This sense of urgency in turn results in reacting faster when we find ourselves going down “inevitable” rabbit holes.

We’re also noticing a more ready acceptance of the “fail early” mantra - after shifting to the timeboxing mode.

We’ve tried the timeboxing approach on two different projects - and in both cases, have found remarkably better results. We were close enough to the original estimates that we’d provided - in terms of both cost and time.

## Kanban
As mentioned in my [earlier post](http://www.multunus.com/2013/03/how-we-chose-our-kanban-tool/), we’ve moved to Kanban, so we’re no longer doing fixed weekly iterations. And hence no calculations of velocity either.

Instead the focus is on reducing the cycle time for stories - by constantly identifying and eliminating waste in the workflow.

Of course, tracking the original project plan is still necessary - and allows for an additional level of feedback on how well the team is progressing.


## References
- [http://neilkillick.com/2012/04/12/do-not-estimate-software-projects-at-all/](http://neilkillick.com/2012/04/12/do-not-estimate-software-projects-at-all)
- [http://softwaredevelopmenttoday.blogspot.com.au/2012/01/story-points-considered-harmful-or-why.html](http://softwaredevelopmenttoday.blogspot.com.au/2012/01/story-points-considered-harmful-or-why.html)
- [http://www.infoq.com/presentations/Want-Better-Estimates-Stop-Estimating](http://www.infoq.com/presentations/Want-Better-Estimates-Stop-Estimating)
- [http://www.industriallogic.com/blog/stop-using-story-points/](http://www.industriallogic.com/blog/stop-using-story-points/)
- [http://dannorth.net/2009/07/01/the-perils-of-estimation/](http://dannorth.net/2009/07/01/the-perils-of-estimation/)
