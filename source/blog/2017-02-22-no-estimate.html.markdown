---
title: Why we don't estimate
date: '2017-02-22	04:00:29'
tags: 
- leena
- continuous-delivery
- newsletter
link: http://www.multunus.com/blog/2017/02/no-estimate/
---

Estimations are predictions. Unfortunately, they end up being perceived as *commitments*. And the team in question starts getting unduly pressured when the estimates go wrong. At Multunus this has happened many times in the past.

We learnt a lot of things from [Art of Agile Development [by James Shore]](http://www.jamesshore.com/Agile-Book/). We found it tremendously useful for learning how to get started with Extreme Programming - and making the "prevention rather than cure" mental shift. This, in turn, resulted in much less waste - and higher efficiency across the team.

But we were still struggling with estimating. We tried the story points and velocity approach suggested by XP. But we were still unable to deliver things at a predictable pace.

We realised there was no point in trying any harder to come up with better estimates. It was time to look at things from a different perspective, time to look beyond XP’s default practices.

During our search for alternative approaches [see references below], we discovered multiple presentations and blog posts - all suggesting the same thing: Estimating can never be accurate *enough*.

The rest of the post is how we avoid estimates as much as possible, instead follow the below steps to deliver software:

* First release/milestone to be done within 6-8 weeks

* And further major milestones need to be done in every few weeks

* Every story we sliced into stories which can be done in two days

We continuously deliver code to production and features which take longer will be delivered with Feature Toggles so that it can be turned on/off.

**Note**: When we say story, we are referring to [Agile Stories](http://www.jamesshore.com/Agile-Book/stories.html). 

##No Estimates

As a first step towards to avoid estimating, we started slicing the stories/tasks to the same size. Instead of asking "how big is this", we slice them and make sure that all the stories are of somewhat same size. We further sliced the bigger ones to smaller ones, to make them equal size. This brought up some more predictability and more importantly, the stress of estimation was brought down significantly. 

Further, we started seeing a pattern i.e. we are somewhat becoming more comfortable and predictable with **delivering once in two days** or say slicing stories which can be done within two days.

##Identifying what to deliver

The key to achieving this is to continuously prioritise and deliver what is more valuable to the customer. We use certain techniques to achieve the same. 

The simplest of the technique is drawing the Story Map [as recommended by [Jobs to be done Framework](https://blog.intercom.com/using-job-stories-design-features-ui-ux/)], which helps us to visualise the user interactions of the system and prioritise what is important and what can come late.

Here is a simple Story Map we created for an application where the requirement was to create an application to sync two different kinds of Document Management Systems like Sharepoint, HP Records Manager, Documentum etc. to each other. 

![Story Map](https://s3.amazonaws.com/multunus-cdimages/story-map.png)

There are too many things to be implemented for the system, the above is the simplest flow. 

We drew the user journey as shown above and highlighted the ones which are minimum enough for the customer to start using the system. So the ones highlighted with stars (*) went for the first milestone, which we delivered in the first 4-6 weeks.

We de-prioritised certain tasks during the development phase too, as it is difficult to think of everything initially. What remained constant was "deliver a useable product as quickly as possible". The idea is to deliver value to the customer as early as possible and continuously and also learn more about the customer through each milestone. 

All of you know that a product usually changes once customers/users start using it. So the idea is to deliver the product early so that we can adopt the changes early.

There are more tools like [Impact Mapping](http://www.multunus.com/blog/2016/02/introduction-impact-mapping-creating-impact-map-ecommerce-product/) and [Design Sprint](http://www.gv.com/sprint/), which along with the Jobs To be Done framework, helps to bring in better understanding and clarity across team members.

## No Estimates - 100% of the time?

Timeboxing helps us to create a sense of urgency which in turn helps us to be more creative. Yes, we would still need to have ballpark estimates to the customer when they engage with us. 

We try not to plan anything beyond a couple of months, which has helped us to make the estimate somewhat successful. We politely refuse their request to estimate beyond a few months, by explaining them why.

We try to arrive at the first 2-3 milestones as mentioned above and restricting the overall estimate to a few months than committing to an engagement for many months.

## References

* [http://neilkillick.com/2012/04/12/do-not-estimate-software-projects-at-all/](http://neilkillick.com/2012/04/12/do-not-estimate-software-projects-at-all)

* [http://softwaredevelopmenttoday.blogspot.com.au/2012/01/story-points-considered-harmful-or-why.html](http://softwaredevelopmenttoday.blogspot.com.au/2012/01/story-points-considered-harmful-or-why.html)

* [http://www.infoq.com/presentations/Want-Better-Estimates-Stop-Estimating](http://www.infoq.com/presentations/Want-Better-Estimates-Stop-Estimating)

* [http://www.industriallogic.com/blog/stop-using-story-points/](http://www.industriallogic.com/blog/stop-using-story-points/)

* [http://dannorth.net/2009/07/01/the-perils-of-estimation/](http://dannorth.net/2009/07/01/the-perils-of-estimation/)

This is an updated version of my earlier post - **_[Estimating to Timeboxing - Our Journey](http://www.multunus.com/blog/2013/04/estimating-to-timeboxing-our-journey/)_**

