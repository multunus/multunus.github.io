---
title: Build super fast MVP's without programmers - Part 2
date: '2015-12-01 10:07:05'
tags:
- vaidy
- google-docs
- lean-startup
- mvp
- process
- tools
link: http://www.multunus.com/blog/2015/12/super-fast-mvps-just-google-docs-part-2/
---

This is the second post in our “[MVP’s](https://en.wikipedia.org/wiki/Minimum_viable_product)without programmers” series.[Here’s the first post](http://www.multunus.com/blog/2015/11/super-fast-mvps-using-just-google-docs-part-1/).


Here’s a screenshot of the “app” we created:


![MVP with Google Docs - Part 2](https://s3.amazonaws.com/multunus-website/uploads/2015/11/MVP-with-Google-Docs-Part-2.png)


I’m not gonna blame you, if you wanna stop reading now. Yes, it’s a timesheet. That bane of a consultant’s existence.


But here’s the thing: We had more fun building this banal timesheet than we’d ever expected. Hypotheses, experiments, prototypes, testing..oh my!


###YATS



I’ll be the first to admit it. Until recently, every invoice we sent to our customers had an ad-hoc timesheet attached with it.


Ad-hoc timesheets. Manually prepared by each team member. Yep. Guilty as charged.


Anyways, our conscience got the better of us. It was time to set things straight. We were gonna standardize timesheets across the organization and become more professional. It was time to build an application that we could all log into, enter our hours and generate professional reports.


Wait!


Aren’t there’s like hundreds of these kinds of products already out there? Were we out of our minds to invest expensive programmer hours in building YATS? [Yet Another Time Sheet]


Take a look at the following goals across our types of users:

***For each consultant:***

*  Enter daily time spent on various projects

*  Get reports on how many hours they’ve spent and on what activity


***For each team of consultants (working on a certain account):***



*  Help the team react quickly if the specified number of target monthly hours (as mentioned in the contract with our customers) is unlikely to be met

*  This is important for us, because we don’t have fixed hours,[we allow for remote work](http://www.multunus.com/blog/2015/11/work-remotely-or-together-thats-wrong-question/)and[we’re moving to significant levels of autonomy across the organization](http://www.multunus.com/blog/2015/09/our-autonomous-salary-system-the-background-story-part-1/).

    
*  Allow for even more autonomy in decision making with respect to how they choose to split up their time between Client Work, Time Off and[20% time](http://blog.codinghorror.com/today-is-goof-off-at-work-day/). [We’ve just introduced 20% time at Multunus. More on this soon.]


***For customers:***


*  Allow them to see real time timesheet entries. Some of our customers asked for this to help them project their expenses more accurately.


***Across the organization:***



*  Track projected vs actual revenues throughout the month with a “real time dashboard”

    
*  See patterns/trends across the company - are we working too much or too little?

    
*  Help everyone across the company to realize where our time is being spent - and to encourage everyone to be more mindful.


We’re yet to find an off-the-shelf solution that gives us all of those things.


###Constraints. You gotta love ’em!



With stretch goals like those, the whole project was now starting to inspire our programmers.  To the point they volunteered to build this thing on evenings and weekends.


Yeah, like anyone’s gonna believe that. A timesheet with stretch goals is still a timesheet :-| .


Back to ground reality. We needed someone who could learn to code fast, but also deliver working software from Day 1.


Oh, and we also needed this thing to be online, interactive, have database persistence, allow for concurrent user access, have an intuitive user interface, allow for easy extensibility and maintenance.


, you say., you say., you say.


But what if, we could do this whole thing just using Google Spreadsheets and Google Doc Scripts?


Here’s the hypotheses in more detail:


*  Problem Hypotheses:


*  Our consultants are not able to plan their time offs and their investment time well because they don’t have a tool that tells them the financial impact of making those choices

    
*  Our people are not able towith our consulting business because they’re not able to see how they’re contributing to the “big” picture
    
*  Solution Hypotheses:

*  It’s possible to build an online solution just using Google Docs and[Google Apps Scripts](https://developers.google.com/apps-script/?hl=en).

    
*  We would be able to build this solution without the help of professional programmers

    
*  The solution would be good enough for us to use at least for a couple of months - while we made programmers available for building an actual web app.

    
*  The solution would be easy enough to iterate on and would hence, allow us to discover and fix problems quickly.


###The Google Docs Community. Great, but...



Since the intention was to use Google Docs, we looked for existing “timesheet”[templates in the public GDoc library](https://drive.google.com/a/multunus.com/templates?q=timesheets&sort=rating&view=public).


*  What we found were mostly “decorated” versions of a standard spreadsheet. This is sufficient if all you need is a pre-defined template to log/change and aggregate timesheet entries.

    
*  But what we needed was this:

*  A “database” of all the timesheet data that we could run custom reports on

    
*  An easy to use interface for our consultants to enter and change their timesheet entries

    
*  A sample of reports that demonstrated the capabilities of the tool


So, what we now needed was to build an online database backed web application. Except, we had to do it, just using Google Docs and Google Apps Script.


Here’s what we came up with:


![TimeIt Demo - Animated GIF](https://s3.amazonaws.com/multunus-website/uploads/2015/11/timeit_optim.gif)



[Here’s an online template of the spreadsheet.](https://docs.google.com/spreadsheets/d/1YgeKOYqwNarJJwVfAN52lRSC4dFY3JhNK5rJgh4LkyM/edit#gid=14693585&vpid=A1)[The App Script is accessible from within the template. Checkout the instructions.]


###That’s a nice prototype. What about the real app?



Once we’d got the basic infrastructure built, the rest was quite easy. We incrementally added all of the reports that we wanted also to the system. And we’re now in the process of building our financial dashboard - that connects our quarterly budgets, revenue targets, accrued revenue and projected revenue all in one place.


And you guessed it - all with just Google Docs.


The funny thing we discovered was this: Piggybacking on Google’s massive infrastructure actually makes more sense in more situations that you’d expect.


We’ve now been using our “prototype” timesheet for over 3 months now - and by the looks of it, it doesn’t seem like we’d want to move to anything else, any time soon. It works just fine.


###So there’s no downsides at all?



Of course, there are trade-offs. That is, if you think of them as tradeoffs. For example, if you’re averse to keeping the timesheet data across the company open for everyone - then, yeah, this isn’t for you.


If you’re paranoid about people making stupid mistakes - by say accidentally deleting important data, then, yeah, this isn’t for you. No, scratch that. This is still for you. Use the protect sheet feature to avoid accidental updates by your team.


###Learnings



So, what did we learn from this experience?


*  Google Docs is a very powerful platform - especially if you’re ready to invest a little bit of time in learning the scripting language. Which is actually, quite simple as well.

    
*  Programming (or at least GDocs scripting!) can be learned fairly quickly by non-programmers very quickly. In our case, almost all of the coding was done by one of our business analysts - who hadbefore this.

    
*  [Constraints enforce creativity](http://scottberkun.com/2008/do-constraints-help-creative-thinking/)

    
*  Taking a methodical approach helps us to stay on track. We knew what problems we wanted to solve, so we created hypotheses for them and that helped us to stick to just those problems.


###Your Turn



What kinds of MVP experiments have you been trying out? Would love to hear your stories in the comments below :).
