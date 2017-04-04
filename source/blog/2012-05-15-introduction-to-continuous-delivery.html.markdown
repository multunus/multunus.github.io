---
title: Introduction to Continuous Delivery
date: '2012-05-15 14:49:16'
tags:
- cap-leena
- continuous-delivery
- process
- technology
wp:post_id: '4151'
link: http://www.multunus.com/blog/2012/05/introduction-to-continuous-delivery/
---

We’ve been doing Continuous Delivery for sometime and also been writing about how to implement the same. This post is about why Continuous Delivery is required and what problems does it solve.

## What is Continuous Delivery
Continuous Delivery is the process of being able to continuously deliver new versions of a software product to create a tight feedback loop between users and the project team—including the customer or product owner.

This helps to test new ideas and changes in the product and also measure the effect of changes in the revenue. Continuous Delivery means releasing software very frequently, i.e. multiple times a day, rather than once in months.

## Bottlenecks for Continuous Delivery
Lets see the usual challenges for releases. The following are the challenges that we faced before moving to Continuous Delivery. Let me put it in this way i.e. the following are the challenges which got us thinking on how to make releases more predictable and pain free. We already had a Continuous Integration setup at our end, but that was not enough to ease the process.

- No tracking on which version was deployed, when and to which environment
- Different people working on different branches, code merge hell when its ready for deployment.
- When an urgent bug needs to be fixed, the fix need to be replicated in multiple branches along with the mainline branch
- No easy way to revert back to the previous stable version

We’ve seen even more challenges in teams which do not have a Continuous Integration setup yet. They are:

- Adhoc build processes
- Too much time spent on manual testing
- Integration of code happens only during deployment
- Complexity of build and deployment increases, depending on the complexity of the app.
- For clustered environments, the deployment needs to be updated to all slaves

Thats when we stumbled upon ”[Continuous Delivery](http://www.informit.com/store/product.aspx?isbn=0321601912&WT.DCSext.w_ptgrevartcl=Continuous+Delivery%3a+Reliable+Software+Releases+through+Build%2c+Test%2c+and+Deployment+Automation_1641923_ISBNTopCover)” book by Jez Humble and Dave Farley and extended our Continuous Integration setup to Continuous Delivery.


## Continuous Delivery to the rescue

One of the key principle of Continuous Delivery is **To create a repeatable and reliable process for releasing software.**. It solves problems by providing fast automated feedback on the **production readiness** of the application - every time there is a change to the code, infrastructure or the configuration. So in Continuous Delivery, **Done means Released.**

A central pattern of Continuous Delivery is called the **Deployment pipeline - **an automated implementation of the application’s build, deploy, test and release process. The following shows a sample deployment pipeline:


![Deployment Pipeline](https://s3.amazonaws.com/multunus-cdimages/pipeline.png)


The deployment pipeline includes the following build and deployment process:

- Creates executable code to verify that the syntax of the source code is valid.
- Runs the unit tests to check that the code behaves as expected.
- Runs the acceptance tests to check that the application conforms to its business acceptance criteria—that it delivers the business value that was intended.
- Run nonfunctional tests which checks that the application performs sufficiently well in terms of capacity, availability, security, and so on to meet its users’ needs.
- Runs tools which check that the expected code quality criteria such as test coverage and other technology-specific metrics are met.
- Then in the manual testing environment, exploratory testing is done. In parallel a demonstration to the customer and a selection of users can also be done. This helps the product owner to decide whether there are missing features, or find bugs that require fixing.
- If any of the above fails, the deployment should be stopped because it is a clear indication that the application is not production ready.

I will write about the Benefits of Continuous Delivery in the next post.

## References

-  [https://docs.google.com/a/multunus.com/present/edit?id=0AQj1177vtu0MZHRoM2dmN180NzRneGp2bXRndw](https://docs.google.com/a/multunus.com/present/edit?id=0AQj1177vtu0MZHRoM2dmN180NzRneGp2bXRndw)
- [http://www.informit.com/articles/article.aspx?p=1829417](http://www.informit.com/articles/article.aspx?p=1829417)
- [http://continousdelivery.com](http://continousdelivery.com/)
