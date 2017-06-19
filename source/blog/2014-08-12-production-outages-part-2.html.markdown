---
title: Production Outages - Part 2
date: '2014-08-12 11:14:23'
tags:
- leena
- vaidy
- continuous-delivery
- culture
link: http://www.multunus.com/blog/2014/08/production-outages-part-2/
---

Read the previous part of this post [here.](http://www.multunus.com/blog/2014/07/production-outages-part1/)

Anyone who has spent sometime in the software industry knows, there is no way to prevent outages completely. What we can do is to keep reducing the probability of outages happening, with better monitoring. The rest of this post talks about methods to equip teams to handle an outage better (in those unfortunate times) when it happens in spite of the prevention mechanisms already put in place.

As mentioned in my previous post, outages have a human aspect too and it’s critical that we look at that as well, for curing the situation.

Before jumping into the details, I would like to share an experience we had during an outage that we had a few months back.

Throughout the outage, which spanned 3 days (thankfully, most of it over a weekend), it was amazing to see the commitment of the team. At Multunus, we believe in the power of self-propelling teams - especially during more trying times such as when outages happen.

There were no blame games, everyone acted as a team and backed up each other. Many decisions had to be made on the go and team collaborated well together and brainstormed whenever appropriate. That was nice to see. And I’m glad to be leading such an awesome team.

##Resilience Engineering


Resilience, as per the dictionary, is the capacity to recover quickly from difficult situations. Resilience Engineering “* is the intrinsic ability of a system to adjust its functioning prior to, during, or following changes and disturbances, so that it can sustain required operations under both expected and unexpected conditions* ”[](http://www.amazon.com/Resilience-Engineering-Practice-Ashgate-Studies/dp/1409410358). This is matured engineering where the team continues to do “right things” even under difficult situations.

Let’s see why this concept is important. Most of the time you find that, human error is the cause of an outage. And in many organisations the Root Cause Analysis ends with blaming humans. These so called “post mortem meetings” make people uncomfortable and demotivated. Ideally the root cause should start from where the human error was made, to find out that how and why the “system” allowed that to happen. And doing that can help make the system more resilient and efficient with these incidents.

Resilience Engineering was originally introduced in industries such as aviation and healthcare - where human lives are at stake. But it makes sense to apply the same concept in a software failure scenario as well. If you want to read more about Resilience Engineering, do check out 
[John Allspaw’s blog post](http://www.kitchensoap.com/2012/06/18/resilience-engineering-part-ii-lenses/).

I also found the following presentation videos and blog posts useful:


1. [10 deploys per day dev and ops cooperation at Flickr](https://www.youtube.com/watch?v=LdOe18KhtT4) [Presentation, 46min]

    
2. [Outages, Post Mortems, and Human Error 101](https://www.youtube.com/watch?v=tZ2wj2pxO6Q) [Presentation, 50min]

    
3. [Blameless Postmortems](http://codeascraft.com/2012/05/22/blameless-postmortems/)


##An unexpected benefit of Continuous Delivery


This is debatable, but one of the interesting things we’ve noticed on our team is the link between practicing Continuous Delivery [CD] and building Resilience in the team. This is probably because a team practicing CD is always in a “state of unease” and also has the “awareness of failure” - this kind of mental toughness is especially useful to face difficult situations such as outage much better. The corollary is also probably true: Practicing Continuous Delivery also * requires*  an environment where its “safe to fail” in the first place.


##Something to try


A useful exercise: Secretly schedule a “trial by fire” session - to test the resilience of the team. We’re yet to try this out ourselves, but you can read how 
[Googles and the Amazons of the world do it here](http://queue.acm.org/detail.cfm?id=2371297).
