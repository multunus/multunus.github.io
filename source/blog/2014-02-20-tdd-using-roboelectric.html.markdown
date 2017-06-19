---
title: TDD in Android with Robolectric Part.1
date: '2014-02-20 15:02:34'
tags:
- sandeep
- android
- onemdm
- technology
wp:post_id: '4589'
link: http://www.multunus.com/blog/2014/02/tdd-using-roboelectric/
---

In the recently concluded 
[Droidcon India 2013](https://droidcon.in/2013/home), 
[Leena](https://twitter.com/leenasn) and 
[KP](https://twitter.com/krikrn) did a 
[workshop on Robolectric](https://funnel.hasgeek.com/droidcon2013/886-unit-test-your-android-application-using-robolectr). But if you missed that, then this post should help to get you started.


We have been test-driving our Android development using 
[Robolectric](http://robolectric.org/) for over three months. I will be sharing our experience with Robolectric in a three-part blog post [ 
[Part 2](http://www.multunus.com/blog/2014/03/tdd-android-robolectric-part-2/), 
[Part 3](http://www.multunus.com/blog/2014/03/tdd-android-using-robolectric-part-3/) ]. In this post, which is Part 1 of this series, I will be giving a summary on why we chose Robolectric and how it helps in test-driving Android applications.


**Problems In Unit Testing Android Applications**


1) Android framework code has to run on the emulator or on the device


The android.jar file that you get with the Android SDK does not contain the Android framework code. It just has method stubs that throw a run time exception. The actual implementation lies on the device or on the emulator.


As a result, tests have to be run on the device or emulator. So, every time you run a test it has go through steps like dexing, packaging and installing on the emulator or device. Needless to say that it will be SLOW!


2) Mocking the Android framework code is Hard


One of the approaches to solving the first problem is to mock out the Android classes so that you can run the code in JVM. But the problem with that is this - many methods in the Android framework are declared as final, making them impossible to mock through sub-classing. It also has many utilities that are static methods, which are also difficult to mock.


Frameworks such as 
[PowerMock](http://code.google.com/p/powermock/) or 
[jmockit](https://code.google.com/p/jmockit/) can solve the above problems for you but this will lead to tests that are harder to read and maintain.


**Roboelectric to the rescue**


[Robolectric](http://robolectric.org/) is a unit test framework that allows you to test-drive the development of your Android app. Robolectric has replaced all Android classes by so-called shadow objects. Robolectric sits between your code and the Android OS code intercepting calls and redirecting them to shadow objects, making it possible to run your tests inside a regular JVM.


This effectively means you can run your tests on your desktop, without having to wait for steps like dexing, packaging etc as previously mentioned. This significantly reduces the cycle time for a test and helps you iterate faster and refactor your code with confidence.


This also means you don't have to take the approach of mocking the Android framework code as discussed previously. This way Robolectric solves both of our problems.


**How it works**


Shadow objects


Robolectric intercepts the loading of Android classes under test. It rewrites the method bodies of Android classes using 
[javassist](http://www.csg.ci.i.u-tokyo.ac.jp/~chiba/javassist/). It binds the new shadow objects to new Android objects. Any method calls to the Android object are forwarded to the shadow object's method of same signature, if it exists.


View and Resource Loading


Robolectric handles inflation of views, resource loading, and others that have been  implemented in native C code on Android devices. This allows tests to do most things you could do on a real device.


For example, it parses all the files that are under the resources directory like layout files, and builds a view object tree made of Android view objects and of course their shadows. This allows you to test your code that uses these resources.


**What’s New in 2.0**


[Robolectric 2.0](http://corner.squareup.com/2013/05/robolectric-two-point-oh.html) is dramatically better at emulating the Android OS, because it uses real Android code ( modified so it can run on a JVM ) behind the scenes. Styles and themes are now supported, and system resources are available. The startup time for tests is significantly improved from the 1.x releases.


With Robolectric getting better with each release you don't have many excuses not to do TDD. Start test-driving your Android applications using Roboelectric. In Part 2 of this series, we will have a much closer look at the Robolectric framework.


**References**


* [http://www.slideshare.net/leenasn](http://www.slideshare.net/leenasn)

    
* [http://robolectric.org/](http://robolectric.org/)

    
* [http://www.slideshare.net/tylerschultz/robolectric-android-unit-testing-framework](http://www.slideshare.net/tylerschultz/robolectric-android-unit-testing-framework)

    
* [https://sites.google.com/site/androiddevtesting/](https://sites.google.com/site/androiddevtesting/)
