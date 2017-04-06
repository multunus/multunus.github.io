---
title: Build super fast MVP's without programmers - Part 3
date: '2015-12-11 11:01:53'
tags:
- cap-vaidy
- lean-startup
- mvp
- process
- tools
link: http://www.multunus.com/blog/2015/12/build-super-fast-mvps-without-programmers-part-3/
---

MVP’s and Prototypes. There’s multiple ways to build them. You can start with [just paper](https://www.youtube.com/watch?v=GrV2SZuRPv0), use Keynote or Powerpoint or create interactive prototypes with tools such as [Marvel](https://marvelapp.com/).


If you wanted to create aprototype, you could hack together a mobile app or web app fairly quickly these days to test out your hypotheses. We’re big fans of working prototypes - since you can learn a ton by observing user behavior while they interact with the app.


The downside to building working web and mobile apps though, is that iterating them is not a super fast process. Code changes need to made and tested.


After trying a bunch of different techniques, we thought we’d finally found our sweet spot: Google Spreadsheets [Affectionately referred to as “GoogleSpread” from this point on]. GoogleSpread MVP's are both quick to launch 
and iterate.


If you think I’m delusional, you probably haven’t read the the [first](http://www.multunus.com/blog/2015/11/super-fast-mvps-using-just-google-docs-part-1/) 
[two](http://www.multunus.com/blog/2015/12/super-fast-mvps-just-google-docs-part-2/) parts of this series.


Or you’ve actually read both of them (thank you!), but you’re still skeptical. And I wouldn’t blame you. We could probably get away with just GoogleSpread for simple applications but what about more serious stuff?


For example, could it handle workflows? How about something where users of the system needed to communicate with each other? Could we build something with it to help us make important decisions involving budgets and expensive purchases?


I’ll have to admit. GoogleSpread had finally met its match. We’d squeezed every last bit of its “MVP Prototyping capacity”.


###BuyIt!


Our purchasing system was broken. Whether you wanted to get a book or a new laptop, it took forever for someone in the company to pull out their credit and buy it.


On closer inspection, there were 2 key reasons for this:


1. What’s the exact item that needs to be purchased? Where should it be bought from? How much does it cost? How many of the item were needed? More often than not, we’d find that at least a few of these questions were not answered. And if they were answered, they were unclear.

    
2. We had our quarterly budgets in place, along with a breakdown of the budget across various purchase categories. The problem? It wasn’t synced with our payables and purchases. That made it very difficult to answer the nagging question:


The solution for the above problems?


1. Create a [guiding structure](https://personalmba.com/guiding-structure/) that would make it hard to omit important information. And for those situations where additional clarifications were needed, allow for quick and effective communication between the the purchase requestor and the approver.

    
2. Ensure real time updates of the budget as new purchases were being approved.


We’d christen the new system: BuyIt! - to reflect the alacrity that it bring into our erstwhile inefficient purchase system.


###Google Forms and Trello



Our key requirements:


1. A workflow system, that also ideally had a great communication module built in

    
2. Online forms that would allow our team to request and approve purchases quickly.

*  **NOTE**: For this to work well, the forms would need to provide real-time status on our budgets

    
3.A scripting system that would allow us to tie up the above modules together


As mentioned earlier, it was clear that GoogleSpread couldn’t handle all these requirements.


We looked up and looked around. What other awesome free tools were we already using at work, that would also work here? Tools that we could tweak so they worked to work well together?


We were already using Google Forms and [Trello](http://www.multunus.com/blog/2013/03/how-we-chose-our-kanban-tool/) at Multunus for various other purposes. And we could use App Scripts and Trello’s API to make them work together.


Our budgeting system was already on GoogleSpread. As you probably expect, all of the Google Apps work well together.


###Hypotheses



Now that question was: could we build a prototype that would combine Google Forms, Trello and GoogleSpread into a seamless way? Probably not. Even if we could get them to work with each other well, there would still be two significant user experience problems:


*  Each of these systems would need to be accessed through different URL’s

    
*  Each of them has completely different user interfaces.


So, “seamless” it definitely was not going to be. :(


Would we now have to build an expensive mobile or web app? And give up our dreams of building one more MVP sans programmers?  


Hey, hold on a minute. What were our hypotheses for the MVP?


Here’s what we’d come up with:


*  Approvers in the purchasing system workflow would be able to make more confident approvals - using real-time budgets

    
*  Efficiency of the purchasing system would be improved significantly - because of quicker decision making. This would be because, the approver would not need to escalate purchasing approvals because they could now use real-time data to make more objective buying decisions.

    
*  Anyone in the company would be able to create a purchasing request within less than 10min.

    
*  Anyone in the company would be able to easily find out how our budgets were getting utilized, and this would lead to higher transparency and trust across the team.


Now the question. Was a seamless sexy system required to test the above hypotheses?


Probably not. We could perhaps tweak the system to make it usableand still validate our hypotheses.


###The MVP



Here’s a diagram that shows how the whole system works together:


![BuyIt_workflow](https://s3.amazonaws.com/multunus-website/uploads/2015/12/BuyIt_workflow.png)


1. The requester fills up the purchase request using a Google Form. We use the Google Spreadsheet API to fetch the remaining budgets across all categories. This shows up in the Google Form - and allows the requester to ensure that their purchase (if approved), will not go over budget.

   *  One of the key pieces of input at this stage is also choosing the approver. This is done automatically, when the category of the purchase is chosen.

    
2. As soon as the requester submits the form, a card is created in the BuyIt Trello board. It has all of the details from the form, of course. But it also automatically assigns the card to the Approver in question. Trello in turn automatically notifies the approver that a new card has been assigned to them.


The approver then opens up the Trello card (which contains the purchase request) and then uses Trello’s (awesome!) commenting system to get any questions clarified about the request.


1. The approver then opens up a second form - and fills up additional details for approving the request. This includes the mode of payment being used (We use this information for reconciliation during accounting)

    
2.When the approval form is submitted, the budget spreadsheet is updated with the latest purchase details and the budget for the corresponding category is updated to reflect the lower amount now available. The corresponding Trello card also moves automatically to the “Approved” status.


Screenshot of the form


![Approver_Form_censored](https://s3.amazonaws.com/multunus-website/uploads/2015/12/Approver_Form_censored.jpg)

Screenshot of the trello board


![Trello_board_censored](https://s3.amazonaws.com/multunus-website/uploads/2015/12/Trello_board_censored.jpg)


###Iterations - doing ’em right!



As you’d expect it took multiple iterations and incremental improvements to get it working as we’d wanted it to. But we had the first version available for the team in about a week after we started to build the


And that was fantastic because from that point on, after the first release - we were following the classical Lean Startup cycle:


![buildmeasurelearn](https://s3.amazonaws.com/multunus-website/uploads/2015/12/buildmeasurelearn.jpg)


Credit: LeanStack.com


Admittedly, this was much easier and faster in our case. Since our “customers” were our own team.


Here’s a few of the key surprises/insights/learnings that we had while going through those iterations:


*  In the very first version of the system, there was no form for the requestors. That was added later when we discovered inconsistencies in the Trello cards.

    
*  In the initial version, we did not have the Approvers’ names listed alongside the budget categories they were responsible for. But while testing, we realized that requestors found it easier to find the category they were looking for, by first zooming in on the Approver.

    
*  We added a second level approver for certain higher ticket purchases. This was easily done by putting in an amount limit against each category, that the primary approver could easily use to determine whether it was within their limits or not.

    
*  We found that the approvers would forget to move the Trello cards from “Requested” to “Approved” after they’d okayed a certain purchase request. We then made this automatic as well.


###Sans Programmers



Are you’re thinking, “Did they actually build this whole thing without professional programmers?”, I’d blame you for being skeptical.


It was a more complex system than what we’d built earlier. But here’s the thing - more than 80% of this was actually done sans programmers.


Our programmers were too busy on client work. But here’s the thing - Google Scripts is simple enough to pick up for almost anyone. Our business analysts who had spare time on their hands learned the basics quickly enough and coded the prototype.


If you ask me, given a few more days to complete the project, we probably could have pulled this whole thing without relying on professional programmers.


So, if you’ve been delaying building your MVP because you don’t have programming skills,  fear not. You can build almost anything these days with just the tools we’ve covered in this post.


###Impact



We’ve been using BuyIt in “production” across the company for more than 4 months now and here’s the impact:


*  Budget spillover: * Reduced from 15% to 3% [approx.]* 

    
*  Average time taken to fulfill a purchase request: * Reduced from 8-10 days to 3-4 days* 

    
*  Average time invested by people in requesting purchases: * Reduced from **3-5 days to less than an hour!***

    
*  Average time invested by people to approve purchases:* Reduced from about 45 minutes to less than 15 minutes* 


I believe this is a great example of how constraints (such as not having access to programmers, in this example) can actually lead to some pretty great solutions eventually.


###Key Learnings


*  Theis not really the software product. It’s in the key process change decisions that we make. And the best process changes focus on[reducing waste](https://en.wikipedia.org/wiki/Muda_(Japanese_term).

    
*  A Super Fast MVP - is not just something where the first version gets released quickly. It’s something that can be used to learn from your target customers and be  iterated upon at high speedsthe initial release.

*  Needless to say, the lower the fidelity of the prototype, the faster it is to iterate after the initial release.

    
*  User interface design takes a long time to get right. So, whenever it’s possible, rely on products that have already gotten this right. In our case, we found both Trello and Google Tools to be very good from a UX standpoint

*  Not only is this great from a working prototype standpoint. Its also great in terms of inspiring a very good user experience if and when a new custom user interface is built later down the line.


###Open Source


Here's our 
[open source version](https://github.com/multunus/BuyIt) of this system. If you’re keen on getting your hands on it first, then please do tell us in the comments.
