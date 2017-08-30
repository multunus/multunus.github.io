---
title: Have Your Cake and Eat it Too
date: '2017-08-30	09:30:29'
tags: 
- cap-leena
- continuous-delivery
- newsletter
link: http://www.multunus.com/blog/2017/08/have-your-cake-and-eat-it-too/
---

One of the problems the teams face, especially those following a fixed length iterations or sprint as Scrum recommends, is not having enough "stuff" built at the end of an iteration. Usually, this is what happens:

* A product team prioritises a set of items for the backlog

* The team estimates the stories at the beginning of the iteration

* The team’s optimism comes down towards the end of the iteration

* The iteration ends with a retrospective where team feels lack of achievement

As [Joshua Kerievsky mentions](https://vimeo.com/176856933), the team goes through the following emotions during the iteration:

<img src="https://s3.amazonaws.com/multunus-cdimages/fixed-iterations.gif" alt="Emotions during fixed iterations" style="display:block;width:380px;"/>


We had gone through similar phases multiple times in the past. We followed Mainline/Trunk Based Development along with feature toggles. And also had enough automated tests to give us the confidence to release to production. But still, we had this issue of not achieving enough at the end of the iteration.

That is when we started moving away from fixed iterations to variable length iterations and tried with [time boxing instead of estimating](http://www.multunus.com/blog/2017/02/no-estimate/). This was a huge enabler for Continuous Delivery by having small batches. And slicing the features to really small helped us to get quick feedback and change course depending upon what we learn. 

Sprints are still good, from the perspective of zooming in and zooming out, but [decoupling deployments from releases](http://www.informit.com/articles/article.aspx?p=1833567&seqNum=2) was a big step forward. Manier times we decided **not** to implement certain things because of our learnings from deployments. This makes products simpler as per [Agile Manifesto](http://agilemanifesto.org/principles.html),  *Simplicity - the art of maximising the work **not done** - is essential*.

## Small Batches

Small batch is a concept that comes from lean manufacturing and is key for Continuous Delivery. It is based on the saying **[if it hurts, do it more often](https://martinfowler.com/bliki/FrequencyReducesDifficulty.html)**. 

![Agile is iterative and incremental](https://s3.amazonaws.com/multunus-cdimages/iterative+-+incremental.jpg)

It feels counter intuitive that a team who were not able to release anything at the end of a week or two weeks iteration but were able to get many stuff done when it was done on a daily basis. Surprisingly, this is what fundamentally mainline development enables. 

Apart from giving instant gratification to the team, as [Paul Hammant mentions](https://trunkbaseddevelopment.com/observed-habits/), a team who is committing to trunk on a continuous manner builds the below habits:

* No code freeze, every day is the same

* Quick reviews

* Always release ready

* Thin vertical slices

There are a lot of case studies around how small batches help teams to achieve awesome results. You can read the below articles to know more:

* [The small batches principle](http://queue.acm.org/detail.cfm?id=2945077)

* [The Amazing DevOps Transformation Of The HP LaserJet Firmware Team](https://itrevolution.com/the-amazing-devops-transformation-of-the-hp-laserjet-firmware-team-gary-gruver/)

But the question is, how do you enable small batches. There are only guidelines for doing this i.e. [INVEST in good stories and SMART tasks](http://xp123.com/articles/invest-in-good-stories-and-smart-tasks/). [Better User stories](http://www.scruminc.com/wp-content/uploads/2015/06/User-Stories-2.0.pdf) cover a lot of techniques on this. 

I will be covering a few examples on this in the upcoming weeks. 

