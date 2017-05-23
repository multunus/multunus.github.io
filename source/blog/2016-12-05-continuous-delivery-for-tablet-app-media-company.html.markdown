---
title: Continuous Delivery for Tablet app
date: '2016-12-05	 11:54:19'
tags:
- cap-leena
- technology
- process
link: http://www.multunus.com/blog/2016/12/continuous-delivery-for-tablet-app/
---

In my [earlier post](http://www.multunus.com/blog/2016/11/tryst-continuous-delivery/), I mentioned the product we developed for a Media Company, where we deployed Android Tablets and Linux Media Players as Kiosk Devices in clinics across the US. These devices air informative content relevant to the patients visiting the clinics.

We deployed the first kiosk mode tablet within 6 weeks. We received excellent feedback from both the patients and the doctors. 

I think the below comment from one of the senior doctors at the clinic summarises it well:

*"A longtime dream come true!  It is exciting to be able to educate patients while they wait in the exam room. They select and view topics of their choice.  The presentations are engaging and free of commercial bias. This ***_is_*** the future". *

Below is the stats about the number of devices field in a span of two years.

![image alt text](https://s3.amazonaws.com/multunus-website/uploads/2016/11/if-stats.jpg)

As mentioned in the above, we automated the setup of the devices using [Custom ROM](http://www.androidpolice.com/2010/05/01/custom-roms-for-android-explained-and-why-you-want-them/), which increased the number of installations drastically.

Further down the line, we also extended similar functionality to Linux Media Players.

## **Speed, Discipline and Quality - Not a paradox**

*Without the speed of the Multunus team and the ability to show real live tablets, we would not be in the position. So, thank you and congrats.*

The above are the comments we heard from our customer when we kept delivering the product. Delivering on the business cadence wouldn’t have been possible without Continuous Delivery.

It is not easy to bring in that cadence. There was always pressure to deliver faster with compromises, especially on the code quality.

It is the business policy to hustle, and that is where the great engineering culture comes into the picture. A culture that balances discipline, quality and speed. Many consider Speed and Discipline don’t go together. But if you practice Continuous Delivery well, you see that it can be done.

To take one instance, one of the major struggles for us was to [Test Drive Android Code](http://www.multunus.com/blog/2014/02/tdd-using-roboelectric/). Because of the way the Android Framework was designed and also because of the device dependency to run the test suite, the unit tests were slower which has affected the pace of development. We moved to [Robolectric](http://robolectric.org/), but learning Robolectric while writing the production code was a challenge which we balanced and overcame over a period of time.

If you are convinced about the value of Continuous Delivery, what are you waiting for? 
Follow the steps in [Getting Started section of the previous post](/blog/2016/11/tryst-continuous-delivery#get-started) if you need guidance in getting started.

Try and let us know your experiences. Feel free to reply if you’ve questions. I will be glad to answer those.


