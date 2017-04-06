---
title: Tryst With Continuous Delivery
date: '2016-11-14 11:54:19'
tags:
- cap-leena
- technology
link: http://www.multunus.com/blog/2016/11/tryst-continuous-delivery/
---

The first time I heard about Continuous Delivery was @ [Ruby Conf India '11,](http://rubyconfindia.org/rci2011/) during the talk by [Srushti Ambekallu and Brian Guthrie](https://vimeo.com/25410072). I've been using [Jenkins](https://jenkins.io/) as a Continuous Integration tool, but the talk exposed me to **Deployment Pipeline**, a pipeline to push the code to next stage either automatically or manually.

My research led me to the [Continuous Delivery](https://www.amazon.com/Continuous-Delivery-Deployment-Automation-Addison-Wesley/dp/0321601912/ref=sr_1_1?ie=UTF8&qid=1478767846&sr=8-1&keywords=continuous+delivery) book. I also found Jenkin's [Build Pipeline Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Build+Pipeline+Plugin), implemented as prescribed in the book.

[![cd-pipeline](http://www.multunus.com/wp-content/uploads/2016/11/cd-pipeline.png)](http://www.multunus.com/wp-content/uploads/2016/11/cd-pipeline.png)[\
](http://www.multunus.com/wp-content/uploads/2016/11/cd-pipeline.jpg)Further research on this topic showed me that the concept is not new and many companies are doing it already.

[10+ Deploys Per Day: Dev and Ops Cooperation at Flickr](https://www.youtube.com/watch?v=LdOe18KhtT4)

[Commit to Production in 8 minutes - Continuous Delivery @ Google,](https://air.mozilla.org/continuous-delivery-at-google/)

[Continuous Deployment at IMVU: Doing the impossible fifty times a day](http://timothyfitz.com/2009/02/10/continuous-deployment-at-imvu-doing-the-impossible-fifty-times-a-day/)

[Continuous Deployment for Downloadable Client Software](http://timothyfitz.com/2009/03/09/cd-for-client-software/)

And that was the start of our Continuous Delivery Journey. I implemented Continuous Delivery @ Multunus and spoke about the same @ [DevOpsDays '11](http://www.slideshare.net/leenasn/push-button-deployment-using-jenkins), [DroidCon India '11](https://prezi.com/56ueprf0mkql/continuous-delivery-on-android/), and [Agile India '12](https://docs.google.com/presentation/d/1C4Q4anw5E45TvIu397Vl3xCOmhrDSdP9yVQDhDbJ5So/present?slide=id.i0).

I listened to a lot of talks in this space and spoke to people like [Jez Humble](https://continuousdelivery.com/about/talks/) and [Fred George](http://www.slideshare.net/fredgeorge) during a few occasions. These conversations were inspirational and informative and helped me to get new perspectives.

The First Big Show
------------------

The real power of Continuous Delivery was visible to me when we worked with a Media Company. They deployed Android Tablets and Linux Media Players as Kiosk Devices in clinics across the US to air informative content relevant to the patients visiting the clinics.

We built both the kiosk-mode application and also the application that the support team can use for controlling these devices remotely.

This client leveraged Continuous Delivery to their business growth. The following graph shows the growth of devices during the engagement.

[![](http://www.multunus.com/wp-content/uploads/2016/11/if-stats.jpg)](http://www.multunus.com/portfolio/end-end-mobile-device-management-solution-health-media-enterprise/)

[The journey through the Continuous Delivery](http://www.slideshare.net/leenasn/continuous-delivery-from-the-trenches-67506790) helped me to understand [lean thinking](https://en.wikipedia.org/wiki/Lean_thinking) better, got more clarity by reading more books in this area, especially:

-   [Lean Mindset](https://www.amazon.com/Lean-Mindset-Ask-Right-Questions/dp/0321896904/ref=sr_1_1?ie=UTF8&qid=1478768773&sr=8-1&keywords=lean+mindset)
-   [Lean Enterprise](https://www.amazon.com/Lean-Enterprise-Performance-Organizations-Innovate/dp/1449368425/ref=sr_1_1?ie=UTF8&qid=1478768790&sr=8-1&keywords=lean+enterprise)
-   [Lean Startup](https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898/ref=sr_1_1?ie=UTF8&qid=1478768805&sr=8-1&keywords=lean+start)

Spreading The Bug
-----------------

Continuous Delivery is both good and simple. It's a perfect tool to achieve business success. The question, in that case, is why isn't everyone doing it?

When something is simple, it doesn't equate to being easy. Quite the opposite. Simple things are harder to implement.

We noticed this pattern more when collaborating with other teams during our consulting engagements or during meetups or conferences. These are teams who are maintaining  products in production for many years.

Most of these teams have:

-   Automated tests
-   Automated Deployments
-   Continuous Integration setup

But the  comments from these teams are:

-   Not sure when my code gets merged to master because it is awaiting review
-   When will my commit go to production, I don't know
-   If the business wants to deploy now, it is not as simple as running a single command. It involves:
    -   Merging branches together
    -   Do manual testing because of lack of confidence in the test suite
    -   Dependency on the OPs team for infra setup even though the script exists

The problems are:

-   Lack of flow from commit to production
-   Manual testing, because of lack of confidence in the test suite
-   Deployments being Coupled with releases

Our Framework
-------------

The usual question that comes up during the conversation about Continuous Delivery, A*ll these makes sense, but how do I get started?*

Most of the times, the changes required to be implemented are across the organisation and needs to be planned in such a way that:

-   No, or  little negative Impact on the BAU
-   Have small, but visible wins at the early stage itself
-   The team that is involved are the early adopters of the change

Following is our proposed framework. These 4 steps which will help the teams to take steps based on available data rather than just moving forward with practices:

-   **Understand** - to understand the current situation, where are we now
-   **Define** - Define the destination, where we want to be
-   **Deliver** - The next step which will move us towards the destination
-   **Improve** - Reflect consistently to analyse both the short term and long term goals

![CD Implementation Process](http://www.multunus.com/wp-content/uploads/2016/11/CD-Implementation-Process-1.png)

This framework is  based on the below mentioned books and concepts:

-   [DevOps Handbook](https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002/ref=sr_1_1?ie=UTF8&qid=1478769340&sr=8-1&keywords=devops+handbook)
-   [Toyota Kata](https://www.amazon.com/Toyota-Kata-Managing-Improvement-Adaptiveness/dp/0071635238/ref=sr_1_1?ie=UTF8&qid=1478769361&sr=8-1&keywords=Toyota+Kata)
-   [Design Thinking](https://designthinking.ideo.com/)
-   [Theory of Constraints](https://en.wikipedia.org/wiki/Theory_of_constraints)
-   [Deming Cycle](https://en.wikipedia.org/wiki/PDCA)

DIY
---

So you are convinced to improve your software delivery process.  Do a test drive of the framework with the following steps. 

-   Draw the entire set of actions that happens from the point of identifying what needs to be delivered to the point of deploying it to production. 

[![value_stream_1](http://www.multunus.com/wp-content/uploads/2016/11/value_stream_1-8.png)](http://www.multunus.com/wp-content/uploads/2016/11/value_stream_1-8.png)[\
](http://www.multunus.com/wp-content/uploads/2016/11/value-stream-1.png)

-   Below each step, note  the time it stays at each stage, including the waiting time

[![Value Stream ](http://www.multunus.com/wp-content/uploads/2016/11/value_stream_1-1-1-1024x143.png)](http://www.multunus.com/wp-content/uploads/2016/11/value_stream_1-1-1.png)

-   Identify 2-3 burning problems which slow down the delivery flow. Prioritise them. Identify the root cause using [5 ](https://en.wikipedia.org/wiki/5_Whys)[Whys](https://en.wikipedia.org/wiki/5_Whys).

[![Value Stream ](http://www.multunus.com/wp-content/uploads/2016/11/value_stream_1-2-1-1024x233.png)](http://www.multunus.com/wp-content/uploads/2016/11/value_stream_1-2-1.png)

-   Brainstorm and write 3-4 action items, prioritise and pick up one. Apply the [Diverge-Converge approach of Design Thinking](https://en.wikipedia.org/wiki/Design_thinking#Divergent_thinking_versus_convergent_thinking), to arrive at creative ways to solve the problem.

[![Action Items](http://www.multunus.com/wp-content/uploads/2016/11/value_stream_1-7.png)](http://www.multunus.com/wp-content/uploads/2016/11/value_stream_1-7.png)

-   Implement it, do frequent reviews and repeat the process

Repeating the above, persistently for few iterations should help you to improve things little by little. Try and let us know your experiences.

Want to know more about the framework? Read our [next post](http://www.multunus.com/blog/2016/11/continuous-delivery-consulting-framework/).

If you've read this far, only makes sense for you to try this out in your organisation.

We'd love to hear your experiences. Please add them as comments.
