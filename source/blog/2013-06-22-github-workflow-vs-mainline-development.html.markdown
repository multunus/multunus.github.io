---
title: GitHub Workflow vs Mainline Development
date: '2013-06-22 13:30:00'
synopsis: 'Git is awesome'
tags:
- cap-leena
- cap-vaidy
- continuous-delivery
- process
- technology
- featured
wp:post_id: '4140'
link: http://www.multunus.com/blog/2013/06/github-workflow-vs-mainline-development/
---

As mentioned in an 
[earlier post](http://www.multunus.com/2012/05/introduction-to-continuous-delivery/), Continuous Delivery means:* Fast, automated feedback on the production readiness of the application - any time the team makes a change to code, infrastructure or the configuration of the application

    
* Repeatable and reliable process for releasing software using one step (and perhaps push-button) deployments

To achieve the above we need extensive automation of all possible stages of the delivery process, using something called as 
[Deployment Pipeline](http://martinfowler.com/bliki/DeploymentPipeline.html).

The image below should explain the workflow of continuous delivery:


![Continuous Delivery Workflow](https://s3.amazonaws.com/multunus-images/cd_workflow.png)

To achieve the above, the following are mandatory:


* Automated Tests

    
* Continuous Integration (which should run all the automated tests whenever any change is made to the codebase)

    
* Mainline/Trunk based development - to avoid Merge Issues and Continuous Integration

    
* Feature Toggling - ability to turn a feature on/off on a specified environment

    
* Automated Deployment Scripts

    
* Automated Provisioning of Servers

This blog post is a comparison of GitHub style workflow with Mainline development and how the Review process in the GitHub style workflow affects Continuous Delivery.


**GitHub Workflow**


The following is the normal GitHub workflow:


![Github Workflow](http://farm5.staticflickr.com/4012/4702060815_b21642330a_o.jpg)

Image Credit: 
[ginatrapani on Flickr.com](http://www.flickr.com/photos/ginatrapani/4702060815/)

The above workflow ensures the following:


* The master is always deployable

    
* The Code Review happens for every change

But inhibits Continuous Delivery because:


* Apart from setting up Continuous Integration for master, we will have to set it up for each branch, otherwise the “feedback” will not be received.

    
* This does not guarantee “production-readiness” of the application because the commits happen to multiple branches in isolation

    
* The “review and approval” process can not be automated and will affect the frequency of the deployment if there is a manual dependency.

    
* Merge clashes can be more if branch and master does not get merged frequently and these can result in merge “hells”

    
* Deployment Pipeline becomes complicated to design because we need to have multiple jobs depending upon how many branches we have

Does that mean that code review is an anti-pattern for Continuous Delivery? Not Really. Code review is good. Its so good that we should be doing it 
**continuously**
. The following can help you to achieve that:


* Pair Programming - the code gets reviewed constantly

    
* TDD (Test Driven Development which is also called as Test Driven Design) - Tests forces the developers to “Refactor” the code which helps in better code design and more maintainable code

    
* Code Quality Analysis Tools - To get feedback on code quality and “Refactor” accordingly. Tests give the confidence for developers to Refactor the code.

    
* Review commits by a senior developer. If she finds a bad commit, pair with the person who committed it to help them clean the code up.

The above is aligned with the principle 
[Build Quality In](http://java.dzone.com/articles/8-principles-continuous), which emphasises that “Every team member is responsible for Quality”.


**Feature Toggles**


One reason for using Branches is to avoid dependencies on work-in-progress items - when there are expedites, for example. But this problem can also be solved without Branches using what is called 
[Feature Toggling](http://martinfowler.com/bliki/FeatureToggle.html).

We’ll go one step further at this point and say that that Feature Toggling is a much better to solve the problem of dependencies - because the toggles can also be used in production - for testing new features with a smaller audience of users - and rolling out the features to a larger audience once the initial feedback has been processed.


**Final Note**


The GitHub style workflow makes perfect sense for Open Source projects - to bring in some amount of rigor to the 
[bazaar](http://www.catb.org/esr/writings/homesteading/cathedral-bazaar/). But in a more controlled environment, relying on interdependence within the team itself for code reviews (with pair programming and TDD) makes more sense.


**References**



* [Continuous Delivery and Code Review](https://groups.google.com/forum/?fromgroups#!topic/continuousdelivery/LIJ1nva9Oas)

    
* [Continuous Delivery and Feature Branches](http://continuousdelivery.com/2011/07/on-dvcs-continuous-integration-and-feature-branches/)

    
* [Trunk Based Development](http://paulhammant.com/2013/04/05/what-is-trunk-based-development/)
