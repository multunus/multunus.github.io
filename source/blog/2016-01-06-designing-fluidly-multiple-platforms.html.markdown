---
title: Designing Fluidly for Multiple Platforms
date: '2016-01-06 18:32:43'
tags:
- cap-akshayb
- android
- app-design
- design
- design-pattern
- design-practices
- ios
- similar-design
- ui-design
---

Have you ever run across a situation where you download a new app from the store that looks beautiful but is awkward to use? You can’t seem to find your familiar navigation controls and it takes a while before you figure out what, how and where of a seemingly simple IM application? These are signs of poor app design (in most cases), where user needs, and platform guidelines have not been given as much thought as they deserve.

Consider the Instagram app.

![Instagram Android](https://s3.amazonaws.com/multunus-website/uploads/2016/01/image04_1.png "Instagram Android")

Instagram Android

![Instagram iOS](https://s3.amazonaws.com/multunus-website/uploads/2016/01/image07.jpg "Instagram iOS")

Instagram iOS

These images clearly show the lack of differentiation in the navigation pattern on both the platforms - using a bottom tab bar. Since most android phones have a system navigation at the bottom, having the app navigation at the bottom feels clumsy. Also, people are used to switching between tabs by swiping horizontally on Android.

Another example could be the Gmail app: both the platforms use side menu for navigation.


![Gmail Android](https://s3.amazonaws.com/multunus-website/uploads/2016/01/image00_1.png)

Gmail Android

![Gmail iOS](https://s3.amazonaws.com/multunus-website/uploads/2016/01/image03.jpg)

Gmail iOS

Though in compliance with material design, a common iOS user would not be intuitively looking for a ‘hamburger menu icon’. The iOS users are used to navigating ‘Back’ using the top left navigation button.


##Why are such designs becoming a common practice?


When a new, multi-platform project is incubated, the tendency is to dive right into code. This is because of urgency from the project stakeholders to ship working software. Getting delayed because of designs feels like a terrible (seemingly shameful too) issue and to avoid it, designers are coaxed to come up with a design which would ‘look good on all the platforms‘.

The designs may tend to overlook or deviate from general practices and guidelines specified for the platforms in order to make things work as fast as they can and to avoid rework.


###Why may this seem like a good idea?



*  Less time spent on designs saves on overall time required


*  Cheaper than getting platform-specific / platform-oriented designs


*  Consistent branding


*  Consistency in navigation across platforms


*  Retention of users who switch platform


###Why is this a bad idea?


A single design for all platforms has deeper repercussions. What needs to be understood is that having great UX can make a difference between hitting top charts and remaining as yet another application in a long list of similar me-too applications. Tradeoffs being made in initial phases for capturing market or to improve time efficiency are acceptable to a certain limit. A concept of ‘UI/UX design debt’ similar to that of ‘[technical debt](http://c2.com/cgi/wiki?WardExplainsDebtMetaphor)’ should be introduced, and made sure that the backlog in this area is cleared by think-make-check improvement cycles. Deprioritizing UI/UX impacts not only the app development but also on user engagement, retention, reviews, referrals, etc. The perceived benefits of the common design approach start waning away.

Let’s analyze this problem from different viewpoints:


###Business



###How it happens


Businesses work under constraints of limited time and budget (Development, Design, Marketing), while trying to amplify brand value and targeting an early launch.

They consider that a product should have consistency across platforms and to reach an audience as diverse as possible, they decide for the app to look the **same** on all platforms.


Yes, this is how most businesses have come to think of app usability and branding. Instead of leaving this task to the UI/UX designers, businesses go to designers with the task of creating an app for a single platform. The designers do their jobs well at designing an app for the said platform, say iOS. But the designs are distributed to Android as well as iOS developers.


###How it should be


The focus of design (as well as business) should be on creating value and delivering an experience that impacts the user. The real value of your product lies not in visuals but what you offer the end user - be it a social platform, a service or simply an aggregator.

A very good example I would like to refer here is WhatsApp.


![WhatsApp Android](https://s3.amazonaws.com/multunus-website/uploads/2016/01/image06_1.png)

WhatsApp Android

![WhatsApp iOS](https://s3.amazonaws.com/multunus-website/uploads/2016/01/image01_1.jpg)

WhatsApp iOS

![WhatsApp Windows](https://s3.amazonaws.com/multunus-website/uploads/2016/01/image05.jpg)

WhatsApp Windows

Vastly differing UI, tailored UX and top of charts on all mobile platform stores - how did WhatsApp achieve such a feat? The answer is simple - they offer a service worth user’s time to explore and get used to it. Also, they conform to known guidelines for each specific platform. Certainly, a good recipe for successful user engagement.


###UI/UX Designs



###How it happens


If the decision has already been made at the Business level, there’s not much a designer can do. If not, then things could go pretty wrong here too.

The aim of designs should be to keep in mind the brand and focus on crafting delightful experiences. But new app designs are required to be built under the constraints of time and cost. Hence, they come up with a design which is ‘acceptable’ on multiple platforms. Just acceptable, not specifically adapted for each platform.

Also, sometimes new ideas or design experiments may overlook all rational argument.


###How it should be


At times, the choices are unconscious choices. But a designer **should know** about the different UI patterns, guidelines and possibilities on several platforms (otherwise you might need to look into your choice of designer :P). Consciously steering away from known baselines does not always signify innovation, it may also be a sign of lousiness. While experimenting with new patterns, the risk involved should be taken into account and communicated to the concerned business team. There is a very thin line between trying to stand out and aiming too high. When you start compromising on other aspects like usability and complicating a simple navigation experience, stop and take a moment to think whether it’s worth the risk.


![Zomato Android](https://s3.amazonaws.com/multunus-website/uploads/2016/01/image02_1.png)

Zomato Android

![Zomato iOS](https://s3.amazonaws.com/multunus-website/uploads/2016/01/image10.jpg)

Zomato iOS

Zomato app, for instance, used * similar*  but more of a platform oriented UI and platform specific icons. This resulted in similar UI, consistent flow across platforms and great branding. This is the not best or de-facto but is definitely a good lesson to learn.


> At the time of writing, Zomato’s android app shifted to a bottom nav bar and iOS style controls. I as a user get disoriented navigating through app now. Not their best decision in my opinion.


###Tech Team



###How it happens


The previous decisions might have been made under pressure but technicians are generally not even allowed an opinion in such matters. Generally, a design change in standard components translates to a different technical implementation too. This could be a good chance for developers to learn something new, but we should consider whether the learning would be worth the risk associated with the limited resources (time, the number of developers, etc.) at hand. In the end, will the learnings benefit the project and/or the executor(s) with the existing constraints already in place?

Limited platforms, like a mobile OS, do not allow much deviation. Deviating from guidelines specified for such platforms require a lot of extra effort and knowledge about combinations of feasible options. For people who are relatively new or uncomfortable with it, one of the possible (and more likely than other) outcomes is bad code. Tradeoffs will have to take place - a big one being making a choice among speed, quality and cost - even when using Lean methods from Agile model. What started out as a bad business decision or an overlooked design aspect, ultimately results in a product with bad code practices or smelly code base behind it. The technical debts of this design approach could be huge. The developers might lose interest in creating the beautiful, user-oriented application it was supposed to be and shift their focus towards just getting it done anyway. Is that how you want your business to be shaped?


###How it should be


Involving them in the process since the beginning and letting them weigh your decisions against the technical aspects might not seem like a popular or mainstream idea, but it works the best considering the situations above. Also, it lets you have a better control on the time and cost of the technical implementation.


###User


This is the segment about which the most hype is created, because, after all, users are the ones who all 3 segments mentioned above target. And say what you may, users are very unpredictable. At times, a user may complain of no creativity in the app, that it simply looks like the design has been copied from other popular apps. Others times, he may complain about not being able to find the options at their usual places. And yet, sometimes he wants it aligned with the design of their system apps so that your app feels like it belongs there.


> * Oh man, what do you want?*

The truth is your audience wouldn’t know that either. With new ideas and innovations each day, only the sky feels like the limit (not to Elon Musk, though). But what users do notice is when something feels out of place or out of the regular flow which they are accustomed to. Some of the largest factors affecting a user’s perception are not only gender, age, income, education level, geographic boundaries, the frequency of use, and mood but also very often their familiarity and usage of technology in their day-to-day lives.


##Okay, What Do I Do?


The same user who loves your app otherwise may get irritated on a bad day, fumbling through those options and may end up giving a bad rating or becoming a detractor. Designing a product is not just about creating an appealing UI, but also provide a great User Experience. While it is true that there is nothing that will satisfy all users at all times, you may want to set your priority and focus on the larger group - the group bringing you business. But again, this group and its preference cannot be determined without
[interacting with actual people](http://www.talkingtohumans.com/). Here are some points to ponder upon:


*  **Ask yourself - why do I need an app with same designs all across?** You may come up with various answers related to your app’s workflow and the real life problem you are trying to solve. These could be genuine reasons. Consider this screen from Flipboard. It presents a simple article.


![Flipboard Android](https://s3.amazonaws.com/multunus-website/uploads/2016/01/image08_1.png)

Flipboard Android

![Flipboard iOS](https://s3.amazonaws.com/multunus-website/uploads/2016/01/image09.jpg)

Flipboard iOS

This view does not need to leverage any specific, platform-dependent UI or features. The screens look the same and focus on what they provide - readable content. This is a good example of when you would want your app to look the same across platforms. But notice the subtle difference in the icons and placement of content lines - platform specific.


*  **Try to prevent dissonance** by following * platform guidelines, brand guidelines and preferring popular UI patterns.*  


*  **Improve continuously**.Set up Analytics and A/B testing and gather insights independently for each platform. Conduct Usability Tests to point out usability issues. This results in knowing not just where the problem is, but also what and why it is so.


*  **Consider a website** (preferably mobile-first but it could also be mobile-specific) instead of an app. Web sites are platform independent and present the same UI across similar platforms. This will end up in saving you on designs, time & costs, project size, etc. But in such case, your software would not be able to leverage the benefits enjoyed by a native app. This should be more of a conscious, well-thought business decision, weighing all possible pros and cons.


##End Note


It largely depends on your constraints and your target audience - rely on user’s knowledge of the platform as well as the genre of your product. Users are exposed to certain patterns and they gradually become habituated to them. Piggy back on these habits to build a good user experience. Following the guidelines will be worth the effort. It's not about not being an innovator and a disruptor, it's about making people comfortable with what your technology does, making their lives easier. Wasn't it your initial problem statement when you set out on this journey to create a great product?
