---
title: Forgotten Story - Whom are we building it for
date: '2017-03-30	 22:32:19'
tags:
- leena
- continuous-delivery
- newsletter
link: http://www.multunus.com/blog/2017/03/forgotten-story-whom-are-we-buildint-it-for/
---

Recently, during a conference I was listening to a talk on how a team rewrote the product for better scalability. The product is well known and been existing in the market for some time now.

I thought it’s good to understand their reasoning and strategy behind rewrite. The speaker mentioned about why rewrite, the standard reasons i.e. hard to add more features or make improvements because:

* Spaghetti code

* Bugs cropping up

* Redundant code, hard to refactor

It seems they modularised the code for better maintainability and testability which justifies the rewrite. But the highlighted success metric was *we produced 100K lines of code in 180 days or so — after which the code was released to production*.

More surprisingly, when asked a question *what is the feedback*, the answer was — *It looks great we are confident to add more features into the codebase now*.

I felt like crying and was about to ask "*what about your poor customers who has been waiting for product improvements and what is the ROI for the business who invested many months without getting anything in return*"?

Someone else asked the question before me, and this is the response:

*We released it to 20% of the users and it will eventually get deployed to more in the coming weeks or so.*

Hardly any advantage of the rewrite was highlighted from the end users’ perspective. Again the emphasis is the code, the design and the architecture.

* * *


I respect the speaker. He seemed a pretty, mature software engineer. But the situation highlights the state of the industry where we love our code so much and forget the end users, for whom we are writing the code for.

During this age of Continuous Delivery/Deployment with the emphasis to *improve the flow for delivering value continuously, *it is sad to see the success being defined by the code we write — how well we organise it, what framework(s) we use, and the number of lines of code. On top of all, it is completely fine to do all these in a vacuum without releasing anything to the end users.

* * *


I heard a similar story from another team too, but the difference here is that the team realised the mistake. Quoting the team member:

*We thought we knew everything about the product, identified the features that we need to get rid of, the areas of improvements and the new features to be added. We wrote down everything in detail, drew wireframes, involved the business people before starting the development. This time we added unit testing to increase our confidence in the code and also automated the deployment. We created a deployment pipeline, which kicks off a build for every commit and automatically deploys to staging if the build and tests and successful.*

*We estimated the release to happen within X months as we were very confident about the requirements, but it took double the time. The business had to continue the investment in this team without any return for many months. Parallelly there was another team to maintain the existing product until the new one reached the entire user base.*

*We learned the hard lesson, there is nothing called requirement in Software and what needs to be built gets evolved depending upon how the customers interact with your software. So delivering continuously to get feedback is really important.*

The good side of the second story is that they learned the lesson in a hard way. But the first team still believes that they did the right thing.

* * *


I know each team is different, the context, the business, the skillset, everything differs. But one thing that should be constant is that every business exists for serving customers better. And every team member, regardless of their role, should be working towards achieving that continuously.

The below article talks about the techniques one can apply to rewrite a legacy application, while delivering value continuously. Please apply those if you are thinking of rewriting. Deploy it in a planned phased manner rather than a big-bang release.

[http://paulhammant.com/2013/07/14/legacy-application-strangulation-case-studies/](http://paulhammant.com/2013/07/14/legacy-application-strangulation-case-studies/)

Another one by [Joel Spolsky](https://en.wikipedia.org/wiki/Joel_Spolsky) on the similar lines, written almost seventeen years back.

[https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/)

This was earlier published under Medium with the same title - [Forgotten story — Whom are we building it for](https://medium.com/@leenasn/forgotten-story-whom-are-we-building-it-for-af167062a546)

