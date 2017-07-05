---
title: State of IT
date: '2017-07-05	08:30:29'
tags: 
- leena
- continuous-delivery
- newsletter
link: http://www.multunus.com/blog/2017/07/state-of-it/
---


Continuing with my earlier post about [Operability](http://www.multunus.com/blog/2017/06/operability/), but this one focussing more on the State of DevOps report. [State of DevOps report](https://puppet.com/resources/whitepaper/state-of-devops-report) is a report published by Puppet every year along with [Nicole ](https://devops-research.com/about.html)[Forsgren](https://devops-research.com/about.html), [Jez Humble](https://continuousdelivery.com/), [Gene Kim](http://www.realgenekim.me/), [Nigel Kersten](https://puppet.com/company/leadership/nigel-kersten) by analysing the results of the survey they conduct. 
They received over **_27,000 responses over the last six years_** and found clear evidence that *DevOps practices yield remarkable results for IT teams and organisations*. 

![Continuous Flow](https://s3.amazonaws.com/multunus-cdimages/water-49024_1280.jpg)

The report says by focussing on Continuous Flow of delivering value to the customers, the performance i.e. the individual, the team and the organisation, improves significantly. And this is done by optimising:

* Deployment Frequency

* Lead time [from commit to production]

* Meantime to Recovery (MTTR)

* Change Failure Rate

And the key practices to be followed for improving the above are:

* High level of  automation [build, test and deploy automations]

* [Trunk ](http://www.multunus.com/blog/2016/03/merge-hells-feature-toggles-rescue/)[based](http://www.multunus.com/blog/2016/03/merge-hells-feature-toggles-rescue/)[ development](http://www.multunus.com/blog/2016/03/merge-hells-feature-toggles-rescue/) 

* Loosely coupled architecture

* [Lean product ](https://en.wikipedia.org/wiki/Lean_product_development)[development](https://en.wikipedia.org/wiki/Lean_product_development) [working in small batches with tight feedback cycle]

What is interesting is Trunk based development, the most controversial of the above. The authors of the [DevOps Handbook ](http://itrevolution.com/devops-handbook)mentioned the below in the book:

![Trunk based development](https://s3.amazonaws.com/multunus-cdimages/devops-book-quote.png)

Trunk based development was highlighted in the report for last few years as a key differentiator between the high performing and low performing teams. 

Short-lived branches are aligned with Trunk based development because the focus is on small batches. But how short is Short-lived? The research shows that **_branches_****_ living beyond a day_** slows down the team’s integration and deployment flow and that’s a warning sign to look at the team’s practices and architecture. 

Tapabrata Pal, Director of Engineering at Capital One, [talks ](https://www.youtube.com/watch?v=6Q0mtVnnthQ)[about](https://www.youtube.com/watch?v=6Q0mtVnnthQ) how changing the Branching strategy along with automating the pipeline helped them increase the deployments by 20%. 

[Sam Newman](http://samnewman.io/index.html) in his talk [Feature ](https://www.youtube.com/watch?time_continue=2&v=lqRQYEHAtpk)[Branches](https://www.youtube.com/watch?time_continue=2&v=lqRQYEHAtpk)[ and Toggles in a post Github world](https://www.youtube.com/watch?time_continue=2&v=lqRQYEHAtpk) mentions the formulae for calculating the pain of merging:

![Pain of Merge](https://s3.amazonaws.com/multunus-cdimages/pain-or-merge.png)

He also talks about the Pull Request model popularised by Github and why it makes sense for Open Source and how it becomes a hindrance to Continuous Flow.

Fundamentally the Continuous Flow can be built if the team has clarity [for whom they are building the products for](http://www.multunus.com/blog/2017/03/forgotten-story-whom-are-we-building-it-for/) and [optimising](http://www.multunus.com/blog/2017/04/optimising-for-happiness/)[ for happiness](http://www.multunus.com/blog/2017/04/optimising-for-happiness/).

If you want to know more, please refer the following on the same topic:

* [The Death of ](https://www.infoq.com/presentations/death-continuous-integration)[Continuous](https://www.infoq.com/presentations/death-continuous-integration)[ Integration](https://www.infoq.com/presentations/death-continuous-integration)

* [Continuous](https://martinfowler.com/bliki/ContinuousIntegrationCertification.html)[ Integration](https://martinfowler.com/bliki/ContinuousIntegrationCertification.html)[ Certification](https://martinfowler.com/bliki/ContinuousIntegrationCertification.html)

* [Feature Branching is Evil](https://speakerdeck.com/tdpauw/xp2017-feature-branching-is-evil)

* [Trunk based ](https://trunkbaseddevelopment.com/)[development](https://trunkbaseddevelopment.com/)

* [Long living Feature ](http://www.multunus.com/blog/2017/03/long-living-feature-branches-an-antipattern/)[Branches](http://www.multunus.com/blog/2017/03/long-living-feature-branches-an-antipattern/)[ - An Anti Pattern](http://www.multunus.com/blog/2017/03/long-living-feature-branches-an-antipattern/)

* [Merge hells](https://vimeo.com/210631471)[!! Feature Toggles to the rescue](https://vimeo.com/210631471)

* [GitHub Workflow vs Mainline ](http://www.multunus.com/blog/2013/06/github-workflow-vs-mainline-development/)[development](http://www.multunus.com/blog/2013/06/github-workflow-vs-mainline-development/)

