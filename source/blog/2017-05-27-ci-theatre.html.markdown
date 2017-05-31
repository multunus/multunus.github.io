---
title: Are you doing CI or CI Theatre ?
date: '2017-05-27	 9:10:20'
tags: 
- cap-leena
- process
- culture
link: http://www.multunus.com/blog/2017/05/ci-theatre/
---
![How to do Code Review](https://s3.amazonaws.com/multunus-cdimages/theatre.jpg)

There are many Continuous Integrations tools available - Jenkins (the most popular one), and other hosted tools such as Circle CI, Wercker, Codeship, Bitrise to name a few. Does it mean that if we are using any of the tools, we are "*doing CI*?" 

The following is the definition of Continuous Integration as per the Wikipedia:

*Continuous Integration (CI) is the practice of merging all developer working copies to a shared **[mainline](https://en.wikipedia.org/wiki/Trunk_(software)) several times a day**.*

According to the definition above, if you are not integrating ***at least once in a day*** to mainline (aka trunk), then it is not Continuous Integration. Instead, it is called [CI Theatre](https://www.thoughtworks.com/radar/techniques/ci-theatre) which means:

* Running CI against a shared mainline but with infrequent commits, so integration isn't really continuous; 

* Running a build with poor test coverage

* Allowing the build to stay red for long periods; 

* Running CI against feature branches which result in [continuous isolation](http://paulhammant.com/2017/02/14/fake-news-via-continuous-isolation/)


## Commits as communication

CI Theatre gives the developers a good feeling, but sadly it misses out the benefits. 

Commits are the way to communicate between the developers. If we are delaying that for later by not committing or committing to a branch, then it is a problem as it is important to communicate at the right time. 

The Feature Branching popularised by Github Flow makes sense for Open Source where you need a more rigorous way to look at what goes into the codebase, in an organisation where you seem to be knowing or can know each individual who commits code, a very strict commit policy may not be required.

If you believe that your environment totally demands Code Review, do pairing which is the best way to review as it is a continuous review or have short living branches i.e. branches those live for few hours to a day or two. 

![How to do Code Review](https://s3.amazonaws.com/multunus-cdimages/code-review.png)

<sup>***Courtesy:** [Feature Branching is Evil by Thierry de Pauw](https://speakerdeck.com/tdpauw/xp2017-feature-branching-is-evil)*</sup>

And the tooling is not important for doing Continuous Integration. Read [Continuous Integration a Dollar a Day](http://www.jamesshore.com/Blog/Continuous-Integration-on-a-Dollar-a-Day.html), to see how to *"do CI"* with an old machine and a rubber duck.

Once you start *doing CI* [not [*CI Theatre*](https://www.gocd.io/2017/05/16/its-not-CI-its-CI-theatre/)], see whether you pass the [CI certification test](https://martinfowler.com/bliki/ContinuousIntegrationCertification.html). 

![CI Certification](https://s3.amazonaws.com/multunus-cdimages/ci-certification.png)

If it passes, excellent. You are on the right track for Continuous Delivery.

## Wrong branching strategy

![Long Lived Branches](https://s3.amazonaws.com/multunus-cdimages/long-lived-branches.png)

I got a chance to listen to [Alain Hélaïli](https://twitter.com/alainhelaili) about [End to End Agility @ Github](https://xp2017.sched.com/event/91if/end-to-end-agility-at-github) in which he emphasised that the branches are short lived @ Github than the complex long-lived branches as shown above. And they deploy 50 times a day to production. But it is sad to see that many of us ignore "short-lived" from the branching and say we follow Github flow which kills the purpose. 

I also heard about an organisation installing a daemon on every developer machine which deletes uncommitted changes. That will be really fun :)

