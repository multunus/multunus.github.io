---
title: Beyond Unit Tests
date: '2017-07-24	08:30:29'
tags: 
- cap-leena
- cap-sreenath
- continuous-delivery
- newsletter
link: http://www.multunus.com/blog/2017/07/beyond-unit-tests/
---

For [our product](https://gk-landingpage.firebaseapp.com/), we use SMS as the notification mechanism as we felt it is the most reliable mechanism in our context. We use [TextLocal](https://www.textlocal.in/) to send out these SMSs. 

For each of the SMS that goes out of the system, we need to add a template. These templates are approved after verifying that there is no promotional content in the message. The promotional SMS, as the name suggests, is used for promoting a product a service and has to follow guidelines such as [DND policy](https://support.exotel.in/support/solutions/articles/38688-what-is-the-difference-between-a-transactional-sms-and-a-promotional-sms).

The message template can have placeholders which are replaced with actual content while sending out the SMS. For example, we've an automated booking module through IVR i.e. the customer can book a trial class in Yoga Studios through the IVR system. The system sends a reminder message to the customer 90 minutes before the class along with address, time etc. The template for the message is as follows:

![SMS template](https://s3.amazonaws.com/multunus-cdimages/sms-template.png)

You can see certain parts embedded in %%, which is used as variables and gets replaced with the provided data while sending out the SMS. The section defines two things: *the type of the data and the maximum length of the data.*

## Testing

A slight change in the message resulted in failures because of template mismatch. And we faced issues with the data length too. For eg: In the above case the length of Studio name is given as 20 and there can be cases where it can be longer than 20. The message gets rejected and it results in the SMS not getting delivered to the user. And we needed to update the template when we face such issues. 

We followed TDD and even then we couldn’t capture the above cases with the same. As Michael Nygard [quoted in his post](http://thinkrelevance.com/blog/2013/11/26/better-than-unit-tests):

>_The key problem with testing is that a test (of any kind) that uses one particular set of inputs tells you nothing at all about the behaviour of the system or component when it is given a different set of inputs. The huge number of different possible inputs usually rules out the possibility of testing them all, hence the unavoidable concern with testing will always be, "have you performed the right tests?" The only certain answer you will ever get to this question is an answer in the negative --- when the system breaks._

We usually write few input criteria for Unit tests good enough number to cover the edge cases. Too many will make the unit tests unmaintainable or unreadable. So how do we test these kinds of scenarios?

## Property based testing

Property based testing takes a different approach. It enables us to test our code against all possible inputs(or at least large enough inputs). It randomly generates a vast number of test cases to exercise the system. 

Instead of looking for success, property-based testing looks for failures. The failures are those input values which couldn't match the expected output or states. And in this way, property based testing complements the unit tests by generating a good enough number for edge cases.

![Property based testing](http://thinkrelevance.com/media/BAhbBlsHOgZmSSIrMjAxMy8xMS8yNi8yMC8xNy80OS82OTAvcXVpY2tjaGVjay5wbmcGOgZFVA/quickcheck.png?sha=7c512d79)

[Qucikcheck](https://hackage.haskell.org/package/QuickCheck), referred above, is a testing tool for Haskell which generates a lot of cases against the specification that was provided to it. Later it was adopted by Zach Tellman in [Test.Check](http://yellerapp.com/posts/2015-04-13-effective-test-check.html) a similar tool written in Clojure.

There are [tools available](https://gist.github.com/npryce/4147916) in almost all the languages for writing Property based testing.

In the upcoming post(s), I will explain how to write property based tests. 

## Further Readings

* ["The Mess We're In" by Joe Armstrong](https://www.youtube.com/watch?v=lKXe3HUG2l4)

* [Hammock Driven Development by Rich Hickey](https://www.youtube.com/watch?v=f84n5oFoZBc)

* [Property-Based Testing by Rob Howard (Railscamp, 2015)](https://vimeo.com/130847897)

* [Property-based Testing for Better Code by Jessica Kerr](http://www.infoq.com/presentations/property-based-testing)


