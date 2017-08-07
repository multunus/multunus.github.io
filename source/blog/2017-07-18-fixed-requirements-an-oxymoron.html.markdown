---
title: Fixed Requirements - An Oxymoron?
date: '2017-07-18	08:30:29'
tags: 
- cap-leena
- continuous-delivery
- newsletter
link: http://www.multunus.com/blog/2017/07/requirements-an-oxymoron/
---

![](https://s3.amazonaws.com/multunus-cdimages/build-cycle.png)

One issue with the software industry is the belief *we know **exactly **what **needs to **be built*. It is wrong to assume that we’ve all these cool technologies with us and anything that we build will be *perfect*.

I’ve reminded this many times to *myself*, the team including the non-software/engineering people I interact with: *we will never know what the users want*. Sometimes we’ve a feel or an intuition for it. And it can be right depending on your proximity to the users. And the way to confirm that is through conversations with the users and keeping a close watch on how they use our software. 

## A simple migration tool

I was working with a customer to deliver a product to migrate documents from one system to another. Our customer has a workflow management system targeting specific domains. They needed a tool to migrate documents from different document management systems [like Sharepoint, Documentum etc.] to acquire customers who were already using these tools. This would help make their onboarding process to our system much faster.

The tool description is simple, **_copy documents from one system to another_**. Yes, the document has metadata such as who created it, how many versions exist, when those versions got created and by whom, a unique ref that each of the tools maintains to identify the document, etc. These metadata needs to be mapped to different fields using a mapping file provided to the tool.

We built a prototype to help the sales team demo the idea to their customers and it worked. Customers got the idea quickly enough. 

However, to make the tool ready for deployment, we needed more testing and polish, such as:

* Making sure the tool is intuitive enough to understand which documents had synced successfully  and which ones had  failed - along with the reasons for failures

* Handling customisations of these document management systems in a smooth manner

* Handling varying numbers of documents 

* Handling varying document sizes

* Handling intermittent connections

We didn’t follow a good enough system to convert the prototype to  "useable" software and to convey to the stakeholders why it requires effort. The rest of the post is a retrospective of the same and what could have been done differently.

## Three Cs

User stories, as per Extreme Programming, have [three ](http://ronjeffries.com/xprog/articles/expcardconversationconfirmation/)[critical](http://ronjeffries.com/xprog/articles/expcardconversationconfirmation/)[ elements](http://ronjeffries.com/xprog/articles/expcardconversationconfirmation/), called the three Cs:

* **Card** - A 1 or 2 lines line "definition" of what needs to be implemented

* **Conversation** - The conversation among the stakeholders and the team around what needs to be built in a way that both parties share their opinions, thoughts and feelings. The stronger the collaboration and the communication, better the quality of the product. 

* **Confirmation** - Arrive at an understanding among the stakeholders and the team about what needs to be built. At this stage, our *assumption* is that if we build in a certain way, it will be valuable to the users. 

We didn’t follow a disciplined way for all the three Cs. Even though we had stories "card", our conversations and confirmation were not good enough and that resulted in a less than optimal quality of the final product. 

It happened because of various reasons such as the lack of time from the end users, stakeholders having different processes being followed for building software and our lack of persistence in influencing others.

## Domain Knowledge

Related to above, the conversations should help us in arriving at [Ubiquitous](http://www.multunus.com/blog/2017/01/naming-the-hardest-software/)[ Language](http://www.multunus.com/blog/2017/01/naming-the-hardest-software/) and also for gaining domain knowledge because interactions with the expert users help to improve the understanding of the space.

## Respecting the logs

As Dan North mentioned in his talk [Ops and ](https://vimeo.com/209681251)[Operability](https://vimeo.com/209681251), _A log is an **append-only, read-only, user interface**_. It should allow one to answer the below:

* What happened?

* Who is impacted?

* How do we fix it?

 

We learned this the hard way :)

## Exceptions need to be exceptions

Somewhat related to logging, we need to respect exceptions too and should be handled whenever required by making sure that no information is lost. Many know how much it pains when you’ve a block like this:

![](https://s3.amazonaws.com/multunus-cdimages/eating-exceptions.png)

We didn’t have the above one. But there were cases which needed to be considered as exceptions but were not. For e.g.: handling non 2XX response code when making API calls. 

## What worked well

In spite of the above issues, certain things we did, worked in our favour.

### TDD

We had enough coverage for the tool which helped us in multiple ways:

* Better extensibility. We could add integrations with other document management systems without too much difficulty

* We had to refactor the code multiple times. One time we had to move from one persistence layer to another and we could do that because of good abstraction layer and decent test coverage.

* Hardly any regression issues. We were confident when the tests passed.

### Continuous Delivery

We continuously delivered, never waited for fixed length iterations to deliver what we accomplished. This meant that we were slicing features in small chunks. 

The tool was deployed in-house. We were given a test instance, simulating the production setup. Continuously delivering to this environment helped users to test the tool against their document management tools. 

### Communication with actual users

![Dev watching usability test](https://s.tmimgcdn.com/blog/wp-content/uploads/2011/09/DevWatchingUsabilityTest.png?x47994)

*Image source: [Templatemonster](http://blog.templatemonster.com/2011/09/14/usability-testing-basics/)*

Those who have watched how users use the software you built, agree that there is no better learning experience than the same. Others who haven’t experienced it, I highly recommend setting apart time, even though it can be embarrassing. 

We have been conversing with the end users and we could see them using the product, struggling with it and watch their emotions. That is when we realised that we need to improve our domain knowledge and need to improve the conversations and bring in confirmations. Ideally, we should have had two levels of communication:

* One during the development to understand and confirm what needs to be built by communicating through quick prototypes for different scenarios

* Then feedback session with the working software to confirm that what we envisioned with the prototype is "usable" enough

When we realised that we are missing the first point above [because the prototype was already built], we took baby steps to bring in changes and improve the same.

There were constraints which made it difficult for us to implement certain changes. These constraints were imposed due to the contracts and working agreement among different parties. I will be covering those aspects in a separate post.

## Finally!!!

Over a period of time, we brought in some rhythm and discipline to improve the situation. And finally did a decent job of delivering it, which was way beyond expected timelines. But in the end, the users were happy. They saw value in the tool. Even though it took a lot longer for us to reach that stage, we felt good that we delivered something that is useful.

Of course, we could have reached there a lot earlier, if we had the right focus and persistence.

## Summary

The fundamental reason for failure was being unclear about the users and to accept that it is really difficult to spec out exactly what needs to be built, as the requirement evolves over a period of time. Rarely we build the exact same software multiple times. There will be similarities in, but it will have differences too. 

And this is what differentiates software industry from any other engineering streams like construction. While building a bridge, it is easier to spec out the steps and requirements somewhat closer. But in software things, can change significantly during the development because of its discovery process. I recommend you to watch [Deliberate](https://www.infoq.com/presentations/Deliberate-Discovery)[ Discovery](https://www.infoq.com/presentations/Deliberate-Discovery)[ by Dan North](https://www.infoq.com/presentations/Deliberate-Discovery) which explains about how to design this discovery process.

And the only way to understand what needs to be built is through constant communication and observation. It is the responsibility of every software professionals to [understand the feelings of our users](http://www.multunus.com/blog/2017/03/forgotten-story-whom-are-we-building-it-for/) and everything that we do should be to optimise for delivering value for them. Any time the focus shifts to something else, the quality of the product dips. 

![Reckless job](https://s3.amazonaws.com/multunus-cdimages/broken-bridge.jpg)

If we don’t expect a reckless job from other engineering streams [as shown above], why should we be different? Let us be more prudent to our jobs. 

