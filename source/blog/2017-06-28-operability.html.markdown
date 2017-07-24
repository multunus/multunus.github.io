---
title: Operability
date: '2017-06-28	04:00:29'
tags: 
- cap-leena
- continuous-delivery
- newsletter
link: http://www.multunus.com/blog/2017/06/migrating-to-cloud-continuous-delivery/
---

![Operability](https://s3.amazonaws.com/multunus-cdimages/operability+-+meme.jpg)

*Operability is the ability to keep an equipment, a system or a whole industrial installation in a safe and reliable functioning condition, according to predefined operational requirements.*
~*__[https://en.wikipedia.org/wiki/Operability](https://en.wikipedia.org/wiki/Operability])__*

The term Operability caught my attention during [Dan North’s keynote titled Ops and Operability @ Pipeline Conference](https://web.pipelineconf.info/programme/speakers/#Dan+North). I had heard this term many times in the past, especially as part of ["ilities"](https://en.wikipedia.org/wiki/Non-functional_requirement). But this talk was different, about the importance of developers asking and experiencing the answers for the below questions:

![Ops and Operability](https://s3.amazonaws.com/multunus-cdimages/ops-and-operability.png)

So how do you measure Operability? How do you need to know what needs to be improved?

## State of DevOps Report ‘17

Every year, Puppet along with [Nicole Forsgren](https://devops-research.com/about.html), [Jez Humble](https://continuousdelivery.com/), [Gene Kim](http://www.realgenekim.me/), [Nigel Kersten](https://puppet.com/company/leadership/nigel-kersten) publishes this report by analysing the results of a survey that they conduct. 
They have received more than 27,000 responses over the last six years and found clear evidence that DevOps practices yield remarkable results for IT teams and organisations.

The report measures the performance of various teams using the following four metrics and categorises them as **High**, **Medium** and **Low** performers.

* Deployment Frequency

* Lead time [from commit to production]

* Mean Time to Recovery 

* Change Failure Rate [% of changes resulting in impairment or service outage requiring hotfix or patch]

The analysis shows that the high performing teams always outplay the rest on all the above metrics by:

* **_On Demand deployment_** over deployments once per week or month

* **_Less than an hour of Lead time_** than once in a week to a month

* **_Less than an hour of Mean time to Recovery_** than once in a week to a month

* **_0-15% Change Failure Rate_** than 30-45%

The reasons the high performance teams outplay others are due to:

* High level of Automation [build, test and deploy automations]

* [Trunk Based Development](http://www.multunus.com/blog/2016/03/merge-hells-feature-toggles-rescue/) 

* Loosely coupled Architecture

* [Lean product development](https://en.wikipedia.org/wiki/Lean_product_development) [working in small batches with tight feedback cycle]

To summarise, Continuous Delivery, DevOps along with Lean product development helps the team to be high performant.

The report covers in detail about each aspect of the above. You can download the report from the below link. 

[https://puppet.com/resources/whitepaper/state-of-devops-report](https://puppet.com/resources/whitepaper/state-of-devops-report)

## Aim for Operability

Coming back to Operability, the topic of this post, Continuous Delivery focuses on Operational Excellence. As Steve Smith has mentioned in the post [Aim for Operability, not DevOps as a cult](http://www.alwaysagileconsulting.com/articles/aim-for-operability-not-devops-as-a-cult/):

>**_Operability_** *is of critical importance to Continuous Delivery, as throughput is dependent upon the ability of the organisation to maintain safe and reliable systems according to its operational requirements.*

  

And focusing on improving the four metrics mentioned above - Deployment Frequency, Lead Time, [Mean time to Recovery (MTTR)](https://www.thoughtworks.com/radar/techniques/focus-on-mean-time-to-recovery), Change Failure Rate - helps you to improve Operability. These metrics are for improving the flow - a continuous flow of value to the customers.

Key for this, IMO, is [building resilience](http://www.multunus.com/blog/2014/08/production-outages-part-2/) - resilient teams, resilient management and leadership and resilient systems. And that is where the culture comes into the picture, a culture where there are blameless postmortems to learn from incidents and take appropriate measures in the future.

I had written briefly about [how to get started with Continuous Delivery](http://www.multunus.com/blog/2016/11/tryst-continuous-delivery/#get-started) at a very high level. If you are really keen on taking it forward, please read [DevOps Handbook](http://itrevolution.com/devops-handbook) by Gene Kim, Jez Humble, Patrick Debois, and John Willis.

