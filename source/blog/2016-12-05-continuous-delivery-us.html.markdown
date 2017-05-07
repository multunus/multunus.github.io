---
title: Continuous Delivery – Is it for everyone?
date: '2016-12-05	 11:54:19'
tags:
- cap-leena
- technology
- process
link: http://www.multunus.com/blog/2016/12/continuous-delivery-us/
---
During the meetups or conferences related to Continuous Delivery, I've seen many raising the below concerns about Continuous Delivery:

-   I think it works only for technology companies. Does it work in high-security environments like banks and insurance companies?
-   It works for high performing companies like Amazon, Facebook and Netflix. Our project is unique so it may not work
-   Our business is not ready for Continuous Delivery
-   The investment required is too big which, our business can't afford
-   We'd invested the time, but got little returns.

All of us know stories and experiences are the most effective way to learn. Let me share a few of my experiences with Continuous Delivery and how it impacted great business outcomes and team performance.

Dream come true
===============

*"A longtime dream come true!  It is exciting to **be able to **educate patients while they wait in the exam room. They select and view topics of their choice.  The presentations are engaging and free of commercial bias. This ****is**** the future**"**. ~ Feedback from the senior doctor at the clinic*

In my [earlier post](http://www.multunus.com/blog/2016/11/tryst-continuous-delivery/), I mentioned the product we developed for a Media Company, where we deployed Android Tablets and Linux Media Players as Kiosk Devices in clinics across the US. These devices air informative content relevant to the patients visiting the clinics.

We deployed the first kiosk mode tablet within 6 weeks. We received excellent feedback from both the patients and the doctors. The content improved the relationship between the patients, doctors and the clinic as patients became more curious and optimistic about being cured.

The Constraints
---------------

Once the number of devices increased in the field, we identified that the "initial setup of the device" was the most time-consuming process. We automated the same using Custom ROM, which increased the number of installations drastically.

For remote control of the devices, we were using a commercial software - a well known Mobile Device Management Software. The software was costly and had reliability issues. But the focus was on acquiring customers, and the cost was manageable until the customer base reached a certain threshold.

But later it became a constraint as the reliability of the software affected the revenues. We had to make frequent updates to the devices to learn faster from the field, but because of unreliable nature of the off-the-shelf software, we couldn't deploy as frequently we expected.

We invested on porting it to own custom solution over a period of time through continuous delivery and got rid of the commercial software once we got enough confidence on our own solution.

[![if-stats](https://s3.amazonaws.com/multunus-website/uploads/2016/11/if-stats.jpg)](https://s3.amazonaws.com/multunus-website/uploads/2016/11/if-stats.jpg)

*"**Without the speed of the **Multunus** team and the ability to show real live tablets, we **would** not be in the position. So, thank you and congrats."*

Speed, Discipline and Quality - Not a paradox
---------------------------------------------

Delivering on the business cadence wouldn't have been possible without Continuous Delivery - delivering software continuously in a sustainable and predictable manner.

It is not simple to bring in that cadence. There was always pressure to deliver faster with compromises, especially on the code quality.

It is the business policy to hustle, and that is where the great engineering culture comes into the picture. A culture that balances discipline, quality and speed. Many consider Speed and Discipline don't go together. But if you practice Continuous Delivery well, you see that it can be done.

To take one instance, one of the major struggles for us was to [Test Drive Android Code](http://www.multunus.com/blog/2014/02/tdd-using-roboelectric/). Because of the way the Android Framework was designed and also because of the device dependency to run the test suite, the unit tests were slower which has affected the pace of development. We moved to [Robolectric](http://robolectric.org/), but learning Robolectric while writing the production code was a challenge which we balanced and overcame over a period of time.

The outage
----------

Continuous Delivery is good but requires investment too. When invested well, it gives you continuous and sustainable delivery of high-quality software. We learned that hard lesson.

The business decided to move away from the off-the-shelf mobile device management software to the custom built one. They arrived at a deadline without planning much about the smooth transition from one system to the other for the production devices. With large devices on the field, with hardly any human access, deploying a new system needs to be done in small batches of rollouts along with enough monitoring and alerting systems to help us quickly react.

The deployment of monitoring systems got deprioritized with the other features. A small configuration issue resulted in an outage for 80% of the field devices. Something that was least expected and became very costly.

[We pulled off the situation](http://www.multunus.com/blog/2014/07/production-outages-part1/) both emotionally and technically using the same agility practices. It was really stressful and high pressure, but the practices helped us to maintain calm and take control as quickly as possible.

Christmas every week
====================

*"We consider Every Tuesday meeting [the lending meeting] as Christmas  every Tuesday**"**. ~ Feedback from a loan officer **about** the weekly production updates*

A few years back a Micro-Finance institute approached us to build end-to-end loan processing application. They were managing the entire cycle through Zoho and Google Docs integrated with 3rd party APIs.

When the number of manual steps  became a bottleneck for scaling to more users, they approached us to build an end to end solution.

Weakest link in the chain
-------------------------

[![closer](https://s3.amazonaws.com/multunus-website/uploads/2016/12/closer.png)](http://www.multunus.com/portfolio/micro-loan-processing-platform/)

The weakest link was the loan closing module. The loans are requested for different reasons or purposes  - an individual to start a business, a group of people starting a business as partners, a small business taking a loan to expand their business - as examples.

So we need to slice entire the loan processing system into multiple modules and automate one by one. We identified the workflow to be automated, agreed on the UX considering that this needs to be used by non-tech savvy people and built the first version in eight weeks.

Handling Resistance
-------------------

The first version was basic - support for only one type of loan - just enough to get early feedback. The customer was embarrassed to release it to his loan officers. We were very persistent because we value Continuous learning and experimenting, so told him "let's try this once, and later if you think release early is not working let's not do that anymore".

Once it went to production, he and his colleagues saw the value of the same and got the power of "Done means Released" and "Iterative Development".

Our customer was a programmer too, and the build pipeline gave him the confidence to change the code and deploy. Feature Toggles gave him the power of turning features on/off according to his discretion with no dependency on us.

All these were possible because of the investment we'd put in for a build pipeline to make the codebase ready to deploy anytime.

[![](https://s3.amazonaws.com/multunus-website/uploads/2016/12/Continuous-Delivery-Case-Studies-Part-1.png)](https://s3.amazonaws.com/multunus-website/uploads/2016/12/Continuous-Delivery-Case-Studies-Part-1.png)

Iterative and Incremental
=========================

The above case studies show how Continuous Delivery can result in positive business outcomes. The focus is on the discipline of delivery, to become predictable and sustainable through iterative and incremental development.

[![iterative-development](https://s3.amazonaws.com/multunus-website/uploads/2016/12/iterative-development.png)](https://s3.amazonaws.com/multunus-website/uploads/2016/12/iterative-development.png)

I can write a set of tools we used for Test Driven Development, Continuous Integration, Configuration Management etc. Those are important, but the easier bit too. The tools will help you be efficient, the process of iterations is what helps in being predictable.

So what is the iteration? It is a four steps process:

Understand
----------

The key here is understanding the end users, understanding the business. The important questions to ask are: What are the problems? What are the constraints? This improves Empathy - the empathy for end users, empathy for the team - the key for any product's success.

During the onsite trip, we visited and spoke to the end users , watched their challenges and their constraints. This helped us to understand "why are we building what we are building".

Define
------

In this step, we defined what are the milestones to be achieved. The team has a good understanding of the goals and the constraints, this step is solving those in a way that the business gets the value as quickly as possible.

We did quick prototypes and ran it through the end users. This helped us to build the right things which users will potentially use. These prototypes become the basis for what needs to be built and the focus is to have the first usable version within 4-6 weeks or earlier.

We use [Design Sprints](http://www.gv.com/sprint/) and [Impact Mapping](http://impactmapping.org/) to define the milestones which rely heavily on [Design Thinking Principles](https://en.wikipedia.org/wiki/Design_thinking).

Deliver
-------

This is the step to convert the ideas into working software in small steps in a sustainable and repeatable way. The focus in this step is to make the software demoable throughout so that the deployment can be done anytime.

The standard Extreme Programming and Continuous Delivery Practices are followed here such as:

-   [Test Driven Development](https://github.com/multunus/engineering-handbook/blob/master/tdd.md)
-   [Pair Programming](https://github.com/multunus/engineering-handbook/blob/master/pair-programming.md)
-   [Continuous Integration](https://continuousdelivery.com/foundations/continuous-integration/)
-   [Feature Toggles](http://www.multunus.com/blog/2016/03/merge-hells-feature-toggles-rescue/)
-   [Automated Deployment](https://continuousdelivery.com/foundations/configuration-management/)
-   [Build Pipeline](http://martinfowler.com/bliki/DeploymentPipeline.html)

Improve
-------

Nothing is perfect, that is why Continuous Improvement is important. In this step you look back and ahead and see what needs to be changed to improve the value stream. Here look at the business metrics to see what has changed and what needs to be improved. 

[Retrospectives](http://www.jamesshore.com/Agile-Book/retrospectives.html) and [Cause-Effect Analysis](http://blog.crisp.se/2009/09/29/henrikkniberg/1254176460000) help the team to reflect and improve continuously.  

And finally, ***rinse and repeat*** the process continuously throughout the software delivery.

Keen to give a try?
-------------------

[Checkout our detailed write-up](http://www.multunus.com/blog/2016/11/continuous-delivery-consulting-framework/) to know more about a step by stepprocess of implementing Continuous Delivery.

Let's know your thoughts/questions/comments/suggestions. We will be glad to talk more.

More Stories
============

The above are the highlights of our experiences with Continuous Delivery.

If you want to hear more stories about Continuous Delivery check out the following links. It talks in detail about implementing Continuous Delivery across different domains, the challenges faced and how the teams overcame the same.

[Banking on Innovation & DevOps - Capital One](https://www.youtube.com/watch?v=bbWFCKGhxOs)

[Fighting the #fintech Wave with DevOps](https://www.infoq.com/presentations/financial-services-devops)

[DevOps for Telegraph Companies - Western Union](https://www.youtube.com/watch?v=bAPyI0Js5pE)

[Continuous Delivery @ Comcast Interactive Media](https://www.infoq.com/presentations/CIM-continuous-delivery)
