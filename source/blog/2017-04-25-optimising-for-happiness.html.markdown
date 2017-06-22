---
title: Optimising for Happiness
date: '2017-04-25	 09:50:19'
tags:
- leena
- continuous-delivery
- newsletter
link: http://www.multunus.com/blog/2017/04/optimising-for-happiness/
---

![image alt text](http://cdn.loc.gov/service/pnp/fsac/1a34000/1a34900/1a34931r.jpg)

Following is a story, a real incident, that [Peter Drucker](https://en.wikipedia.org/wiki/Peter_Drucker) mentions in his book [Concept of the Corporation](https://en.wikipedia.org/wiki/Concept_of_the_Corporation).

*During the World War II, workers in an aircraft plant were displaying "bad morale" and doing “slipshod work”, as workers had never seen any of the planes they were producing, had never found out where the part they worked on fitted, and had never been told how important this part was to the total functioning of the place.”*

*So a big bomber got brought in for employees to see. The workers were invited to inspect it, to sit in it and to bring their wives and children along. When finally they were shown the part they were making in the bomber, and its importance was explained to them by a crew member, the bad morale and unrest disappeared at once.*

*In other words, these workers suddenly got the benefits of clarity, concreteness and purpose—all of which are essential to provide if you want something from someone.*

Chad Dickenson, CEO of Etsy, talks about how they [Optimise for Developer Happiness at Etsy](https://www.youtube.com/watch?v=22EECFEk9Xs) by "making it easier to ship". In the same talk, he mentions how Continuous Deployment helps them to achieve the same.

## The biggest puzzle - Connecting the dots

In one of my earlier posts, I mentioned about the trap of [forgetting the poor users](http://www.multunus.com/blog/2017/03/forgotten-story-whom-are-we-building-it-for/) in the journey of using the latest, cool frameworks or technologies. By creating a system for the developers to connect to the end users, this trap can be avoided. 

It is good to ask these questions to ourselves:

* How do our users feel when they use the product or feature we built? What emotions do they go through?

* How can we make them happy by making it easier to use?

* How can we continually make the users happier?

By optimising for developer happiness [by making it easier to ship], the software developers should be able to concentrate on the above questions and improve the product further. In the end, the only thing that matters is the value we deliver to the users.

**Deployment Pipeline**

So how do you optimise for developer happiness? We need a system for the easy flow of code from development to production. You can visualise it as a pipeline.

Deployment Pipeline aka Build Pipeline or Continuous Delivery Pipeline is a way to define different stages in the software delivery to get faster and frequent feedback.

![image alt text](https://s3.amazonaws.com/multunus-cdimages/deployment-pipeline.png)

It kicks in when someone commits to the repository. The feedback required are:

* The code can be compiled and build

* Automated testing to capture regression issues, if any

* Deploy it to necessary environment(s)

The stages in the pipeline changes depending upon the team. Say for eg: some teams might have staging environments. Others may have automated security or performance tests so and so forth.

Needless to say, it should be optimised for free flow rather than getting stuck every once in awhile.

The bottlenecks for this free flow are:

* Branching strategy - merging of multiple branches for deployment

* Lack of automated tests

* Lack of automation for deployments

The right [Continuous Integration setup with Mainline development](http://www.multunus.com/blog/2016/03/merge-hells-feature-toggles-rescue/) takes care of the first. The rest are simple enough to understand i.e. test and deployment automation.

For a green field project, it might be easier to get started in this way. But implementing this for a brown field is not easy. So the question is where to start? 

The first thing is to have a visualisation of the pipeline even before implementing it. Lookout areas where the flow gets interrupted. It usually gets stuck where there is no automation. 

You cannot automate everything on day 1. And don’t expect to fix all the problems over night. It takes time and needs to be balanced with the product delivery too. It is not easy, but take small steps and eventually, it will reach a much more automated pipeline. If it brings in happiness, why not invest in the same? 

Start with automating critical paths. For eg: use tools like [Diffy](https://github.com/twitter/diffy) while parallelly adding unit tests for the newly added code. 

Applying the [Boy Scout Rule](http://wiki.c2.com/?BoyScoutRule) helps to bring in improvements continuously which will result in significant improvements over a period of time.

Having a deployment pipeline gives the developers enough time as the releases/deployments are painless. It also creates enough base for a team to have an environment to interact with the end users. 

As mentioned in the beginning of the post, extending this pipeline to connect to the end users brings in the happiness to the full cycle as *clarity, concreteness and purpose—all of which are essential to provide if you want something from someone.*

![image alt text](https://s3.amazonaws.com/multunus-cdimages/before-after-cd.png)

##References

* [Mastering Motivation](http://www.druckerinstitute.com/2012/04/master-motivation/)
* [Optimise for Developer Happiness](https://www.youtube.com/watch?v=22EECFEk9Xs)
* [Continuous Deployment](https://blog.leanstack.com/continuous-deployment-startup-lessons-learned-conference-4-23-2010-def20ca345e0)
