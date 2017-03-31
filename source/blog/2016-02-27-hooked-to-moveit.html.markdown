---
title: Hooked to MoveIt!
date: '2016-02-27 05:01:55'
tags:
- cap-vaidy
- design
---

It’s 8AM on Monday. Time to leave for work. You’re ready to get out of home.

Here’s a bunch of things that you might do until you’re ready to start your day at the office:

*  Getting into your car.

    
*  Driving out in the direction of your workplace.

    
*  Navigating your route while simultaneously also negotiating traffic

    
*  Stopping at red lights.

    
*  Slowing down when you get to your workplace.

    
*  Parking your car.

    
*  Getting to your seat at the office and turning on your laptop.

When was the last time you actually gave any of the above actions a conscious thought? Were any of the above actions the result of analyzing pros and cons and then taking a well thought out decision?

Probably not, unless you were in a new city or at a new job or were taking a new route to work or were very new at driving.

All of these actions are instinctive, in that we don’t make a conscious decision to perform them. They’re “automatic”. Or, what we call “habits”.


###Habits


The brain’s capacity to learn new behaviors and make them available for “unconscious recall”, is what makes this possible. Of course, this is great, because if you had to actually think and analyze each of those actions, you’d be mentally exhausted even before you turned on your laptop.

This feature of the brain is a life-saver. Especially, since most of us are never even aware that it’s learning these “habits” all the time.

But, what if we could tap into this immense potential to make the brain learn other things that we wanted it to?

For example, if you wanted to build a new habit of clearing your desk everyday before you starting your workday - then, all you would need to do is to repeatedly do that activity “consciously” for a couple of weeks - before it becomes an “unconscious” habit.

The science of creating new habits is well researched. 
[Pick up this book](http://www.amazon.com/The-Power-Habit-What-Business/dp/081298160X),if you want to learn more about it.

The rest of this post is how you as a Product Designer can use this power of the brain to build successful consumer products.


###Leveraging the brain's magic


A key goal of a Consumer product is to get users to habitually (or “unconsciously”) use the product - multiple times a day.

Are you rolling your eyes thinking this post is kind of a sinister method to help you manipulate people? Products like Facebook and Twitter are doing exactly this.

If you've ever opened these products on your phone without much forethought (because you were ‘bored’), wanting to just take a quick peek at your newsfeed or your tweet stream for a few minutes and then perhaps suddenly realized that you just spent the last 30 minutes mindlessly wading through random content, that's your brain’s unconscious “habit” learning capability working right there.

These products are designed to pass Larry Page’s 
[“toothbrush test”](http://versionone.vc/does-your-product-pass-the-toothbrush-test/) - if your users use it at least twice a day, then you’re good.”

Here’s some key motivations to design products this way: :


*  Revenue from “sticky” users: When you have significant amounts of user attention, that means more potential revenue for your business. Even if it’s through more targeted ads.


*  Significant long term value for your users - You may have noticed that the more you use Facebook or Twitter, the more interesting it becomes to use them. This is natural because each time you use these products, you create more connections and interactions - which in turn leads to a more interesting Newsfeed or Timeline.

    
*  Higher Lifetime Value: The more long term value you create for your customers, the more difficult it gets for them to switch to a competitive product. This in turn means more repeat revenue from the same user.

    
*  Achieving altruistic goals - If your product has truly altruistic goals, for example, in terms of helping the user gain new skills in certain areas such as programming or music, then you would need to design your product to help users stay on track until they’re able to build those skills.

[If you’re still skeptical that all this sounds manipulative and underhanded, 
[then please refer to this](http://www.nirandfar.com/2012/07/the-art-of-manipulation.html)]

Here’s a few more products that pass the “toothbrush test”: WhatsApp, StackOverflow, and YouTube. And here’s an Enterprise product to add to that list: “Slack”.


###Hooked!


Is there a common “design pattern” among these products? Is there a way to reliably replicate this kind of habitual behaviour in the users of your product?

Yes, and it’s called the “The Hooked Model”. It’s a pattern that can help build habit forming products. It was first introduced 
[in this book by Nir Eyal](http://www.amazon.com/Hooked-How-Build-Habit-Forming-Products-ebook/dp/B00HJ4A43S).

Here’s the components of the model:


*  Trigger: An event that spurs the user to perform an activity on the app

    
*  Action: Interaction with a certain feature of the app

    
*  Variable Reward: Usually points or some kind of status improvement for the user. More generally, something that triggers secretion of the happy hormone (dopamine) in the system.

    
*  Investment: An additional task performed by the user to help them get more value from the product. For example, following more people on Twitter or making more friends on Facebook.


![the_hook.1png](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/02/t_the_hook.png)

The Hooked model makes it easier for us to stay on track with respect to our goal of increasing engagement in our apps. This avoids the temptation to build a bunch of features which may be interesting but not focused on the goal of increasing activity and time spent on the app.

So, how can you put this kind of idea into action? I’ll walk you through an app that we’ve been building here at Multunus, using the Hooked model. The app is called MoveIt.


[NOTE: MoveIt is still in Private Beta, so it’s not available on the app store, yet.]


###MoveIt


The idea is simple - get people to exercise regularly. Using two techniques:


*  Help users keep a log of how consistently they’re exercising

    
*  Create a supportive community of exercisers that helps keep everyone on track


![leaderboard.png](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/02/t_leaderboard.png)
![entry.png](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/02/t_entry.png)

The harder of the two goals is of course the second one - to create a supportive community.

Here’s what that means for MoveIt:


*  We need multiple people engaged in some common activity

    
*  We need these people to be sharing the progress they’re making

    
*  We need as many of these people to motivate everyone else to make progress

    
*  We need these people to celebrate the progress they’re making and the progress others are making

    
*  We need for the whole community to celebrate together.

We’ll look at how we tried to solve each of the above problems, using the Hooked model. We’ll also talk about the gaps in the current product - and how we intend to fix them, going forward.


###The MoveIt Community


Here’s how we’ve tackled each of the above points so far:


**We need multiple people engaged in some common activity**

A key feature of the app is tracking exercise minutes. So, that’s the common activity here.


![entry.png](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/02/t_entry1.png)


**We need these people to be sharing the progress they’re making**

While most exercise trackers allow for tracking your progress privately and then sharing your progress if you choose to, we’ve made all tracking public by default. So, any updates you put in the app, is seen by everyone else.

We have both a timeline (of everyone who’s been exercising - with as much detail as they care to share) along with a “points” leaderboard (With the most consistent exercisers bubbling to the top of the list everyday).


![leaderboard.png](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/02/t_leaderboard1.png)
![entries.png](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/02/t_entries.png)]


**We need as many of these people to motivate everyone else to make progress**

We introduced a tiny feature to make it super easy to “nudge” folks who’ve not been exercising regularly. Its super easy because the app prompts the user on who needs the “nudging”. Also it’s a simple swipe action.


![nudge.png](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/02/t_nudge.png)


**We need these people to celebrate the progress they’re making and the progress others are making**

To celebrate one’s own progress, we added a tiny animation that shows the points earned soon after entering in the exercise minutes.


![modal.png](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/02/t_modal.png)

To celebrate other’s progress, we’ve got the “bump” feature, which is basically the flip side of “nudge”. Once again, super easy for a user to bump each other to celebrate each other’s consistency in exercising.


![bump.png](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/02/t_bump.png)


**We need for the whole community to celebrate together**

To make this happen, we introduced two things:


*  A monthly goal for the whole community to achieve together - which is basically a monthly target for the grand total of the number of exercise minutes


![leaderboard.png](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/02/t_leaderboard2.png)


*  A charity component - where we donate to a charity of the community’s choice an amount of money proportional to the grand total of the community’s exercise minutes.


![charity.png](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/02/t_charity.png)


###MoveIt, through the “Hooked” Lens


Let’s now look at each of the above features through the “Hooked” lens. We’ll take each of the parts of the framework and see how we’ve tried to implement it:


**Trigger:**
  Prompts and notifications are common triggers in apps. We’ve got two triggers in our app:


*  An automatic one: That shows up as a notification at the same time everyday, if you haven’t exercised, for say more than 24 hours. Sort of like a reminder to get you back on track.


*  A community triggered one: This is where the “nudge” feature comes in. I can get nudged by another user, if I’ve been slacking and haven’t exercised for the last 24 hours. I get a summary of all the nudges that I got the previous day from other users, once again prompting to get back on track.”


**Action:**
 This is the core activity that you do in the app. For the MoveIt app, it’s simply logging in your exercise minutes each day.


**Variable Reward:**
 This is the instant gratification that the user gets as soon as they complete their 
![kaBlPjBZPIiZ2](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/02/kaBlPjBZPIiZ21.gif)

We have two rewards at this point, for our users. But only, the second one below is actually a 
variable reward:


*  An animation showing the number of points earned

    
*  Revealing the updated position on the leaderboard to the user”

 

 


**Investment**
: This is the last part of the Hooked cycle. These are actions that the user takes, with an anticipation of a future reward. Here’s a couple of features that we implemented for investment:


*  Adding a description and uploading an image of your exercise routine


*  This serves as a “diary” of sorts that can be reviewed say, every week.


*  “Bumping” and “Nudging” other users


*  When I “bump” or “nudge” another user, I also expect a reciprocal behaviour from other users.


###Did it work?


So, how well did we “hook” our users?

Here’s what worked well:


*  The regular exercisers on our team who were earlier using other exercise tracking apps such as Nike Plus have now moved to MoveIt.

    
*  We were also successful in encouraging new users to exercise

    
*  We hit our monthly targets of total exercise minutes at least half a dozen times over the last 12 months

    
*  Our monthly charity contributions have now (almost) become a standard part of our company operations.

And here’s what hasn’t worked so well:


*  The number of regular exercisers has not increased. We would have new people motivated to exercise for a month or two, but they would then fall off track. And then the same thing would happen with another set of users. It continues to be a revolving door.”


###Increasing engagement


Before you start to doubt the “Hooked” model, here’s a few places where our implementation needs significant improvement:


*  **Variable Reward**
: If you’ve been lost in the Facebook’s newsfeed or Twitter’s timeline - that’s because of the infinite amounts of variability in those features. This is because what you consume with these features, is created by the people you’ve friended or followed. And what they choose to post is not something you can predict. So, the “newness” of the content is always maintained - making you ask for even more each time.

*  Our task is to figure out how we can create a similar experience in MoveIt - to inject infinite variability.

    
*  **Trigger**
: The trigger needs to be fired at the most optimal moment, when our users can actually go ahead and perform the action without interrupting or pausing something else that they’re doing.

    
*  **Action**
: The better we can apply 
[BJ Fogg’s “B=MAT” formula](http://www.behaviormodel.org/), the higher the probability that the action is going to be performed. Here’s a quick explanation:

*  B: Behaviour (or Action), M: Motivation, A: Ability, T: Trigger

    
*  The idea is that even if you have good amount of motivation to perform a certain action, if it’s too hard (or if the “Ability” is low) - you’re still not going to perform it.

    
*  And if you’ve got Motivation and Ability figured out, you’d still need a Trigger to get you to perform the task. The Trigger is already taken care of in the Hooked model separately, so we’re good there.

    
*  The question then is this: 
How can we increase motivation while also making it easier to perform the action?

    
*  **Investment**
: The additional notes and images that users can add (after they enter their exercise minutes) is an “investment”. As the user continues to add more of this info, the product becomes more and more personalized for the user. The questions here are the following:

*  How can we make it easier for the user to make that investment? We can apply the “B=MAT” formula here as well, to help increase investment.

    
*  What other methods of investment can we create?


###MoveIt 2.0


We’re now working on a newer version of the product to help build a stronger community within the product. And as indicated above, we think that relying on the Hooked model is the easiest and most straightforward way to get there.

Have you tried the Hooked model already? How successful have you been with it?

[If you want to give MoveIt a try, leave a comment below. We'd love feedback on it.]

 
