---
title: Options to consider while building an MDM Solution
date: '2015-12-10 07:56:25'
tags:
- cap-leena
- android
- mobile-device-management
- onemdm
- technology
link: http://www.multunus.com/blog/2015/12/options-consider-building-mdm-solution/
---

Let’s assume you have a good [overview of the MDM landscape](http://www.multunus.com/blog/2015/11/overview-mdm-landscape/). You’ve done your “build vs buy” analysis and have chosen to go for “build”.


Let’s now look what options are available to build an MDM solution that potentially solves a business problem. I'll be focusing on Android in this post and will cover the iOS ecosystem in the upcoming parts of the series.


Before I talk about the options, let’s take a look at two key concepts: 
Rooting and Custom ROMs.


##Rooting



Rooting of a device means gaining full control of the device. [Android uses Linux Kernel](http://www.androidcentral.com/android-z-what-kernel), and rooting gives you the super user permission on the device which allows you to do pretty much anything on the device. There are [apps available in the Android Market](https://www.google.co.in/webhp?sourceid=chrome-instant&ion=1&espv=2&es_th=1&ie=UTF-8#q=super+user+app+android), which helps you to managepermission.


###When to use



With rooting, you can install apps as System Apps, those apps which have more privileges than user apps, the apps that we normally install from Play Store. System Apps get installed in thepartition of your device which is read only. Most of the pre-installed apps that we see in the device, especially those from the device manufacturer, are system apps. Users will not be able to uninstall System Apps.


###Pros



*  Install apps as System apps, to restrict the app getting uninstalled.

    
*  Get full control of the device, so can manage the apps silently without any human intervention

    
*  Rooting is required to install Custom ROM on many devices [Custom ROM is covered in detail in the next section]


###Cons



*  Requires flashing, which voids the manufacturer's warranty

    
*  Can potentially brick the device, if something goes wrong while rooting.


##Custom ROMs



A Custom ROM as the name suggests, is a custom built distribution of the stock Android OS or tweaked versions of the Android ROM provided by the device manufacturer. Custom ROMs make the device suited for very specific needs.


###When to use



Custom ROMs make sense when the device is owned by an organization, say an organization providing devices to the field staff. Other use cases include where the device is used as an[Information Kiosk](https://en.wikipedia.org/wiki/Interactive_kiosk), or[POS Systems](https://en.wikipedia.org/wiki/Point_of_sale).


###Pros



*  More control of the device - As the device is rooted, anything can be done on the device, such as removing bloatware, giving root permissions to specific apps etc.

    
*  Cost reduction - A device with lower hardware specifications might be sufficient if only few apps are required to be installed on the device. This might reduce the cost of the device.

    
*  Faster upgrades: Android updates from manufacturers takes a very long time to roll out because of multiple layers of testing and certification. With a Custom ROM you can create your own version of stock Android cutting out the need for waiting for the manufacturer.


###Cons



*  In BYOD scenarios, employees or partners will be wary of installing a Custom ROM on their owned devices, giving away complete control of their devices.

    
*  With a Custom ROM you are responsible for testing and fixing issues in the OS, which is usually done by the manufacturer if you are using a Stock ROM.

    
*  For loading a Custom ROM you have flash the device [many devices require rooting too], which voids manufacturer's warranty.

    
*  As mentioned above, rooting can brick the device if something goes amiss while rooting.


##Our Experience building MDM with Custom ROM



One of[our MDM Customers](http://www.multunus.com/portfolio/end-end-mobile-device-management-solution-health-media-enterprise/)had the requirement to play Adobe Flash video ads on the devices. Adobe had removed[Flash App from Google Playstore](http://in.pcmag.com/apps/82354/news/adobe-removing-flash-for-android-from-google-play)with the release of Android 4.1. We tried to convert the flash videos to HTML5 videos, but hit bottlenecks with animations and annotations in the videos. Many advertising firms still use Adobe Flash for videos, so asking the content distributors to distribute the videos in non-flash format was not a viable option.


That is when we decided to go with Custom ROM which would help us:


*  Pre-install the required apps, eg: the Adobe Flash app, I mentioned above

    
*  Remove unnecessary bloatware

    
*  Pre-configure the device settings eg: WiFi settings, lock settings, volume settings.

    
*  OS and app updates


##How to build MDM without Custom ROM and Rooting



Using Android API, along with a [Push Technology](https://en.wikipedia.org/wiki/Push_technology) [such as[Google Cloud Messaging](https://developers.google.com/cloud-messaging/)],we can create an MDM solution to:


*  Manage apps in the device

    
*  Manage content in the device

    
*  Run apps in Kiosk mode

    
*  Control low-security level features eg: lock/unlock device, control volume, Wifi settings

At Multunus, we have started an [Open Source MDM - OneMDM  ](http://multunus.github.io/onemdm-server/)to help those who need a barebones MDM solution. Please take a look at the 
[Live Demo](http://multunus.github.io/onemdm-server/#live-demo) section if you would like to give a try.

Feel free to contribute to the same by submitting PRs, raising issues.. We are looking forward for comments and/or suggestions.


##Device Administration API



Android also provides[Device Administration API](http://developer.android.com/guide/topics/admin/device-admin.html), which provides device administration features at the system level to create security-aware applications that are useful in enterprise settings. The API supports enabling password policies, storage encryption and disabling camera based on context or time.


The user must explicitly enable the application for the policies to be enforced. If the user chooses not to enable the application it will still be present on the device, without any policies being enforced, and the user will not get any of the application's benefits.


The following is a sample prompt to the user to enable an app as Device Administration app:


![Android Device Administration](http://developer.android.com/images/admin/device-admin-activate-prompt.png)


##Android For Work



[Android for Work](https://www.android.com/work/) is Google’s recent initiative for corporate customers with a simplified BYOD platform. With Lollipop, Android introduced support for multiple profiles on device which in turn allows to separate the personal apps from work apps. The Corporate Profile that is setup on the device can be controlled by the administrators. The administrators can set which apps are available for the corporate profile along with separate storage areas.


For devices running below Lollipop i.e. Ice Cream Sandwich and newer,[Google Play for Work](https://static.googleusercontent.com/media/www.google.co.in/en/IN/work/android/files/android-for-work-apps-guide.pdf), can be installed to get similar functionalities.


If you are a Google Enterprise App (not the legacy free tier) user, Android for Work is a useful solution as it offers a simple device registration and administration features.


To create apps for Android For Work, one needs to be [enrolled as a partner](https://www.google.com/work/android/partners/), which is right now available only on request basis. It is expected that in the immediate future, Android For Work should help many enterprises manage BYOD with app distribution, data management and security management.


##Coming Up



In the upcoming posts, I will be sharing our learnings [both technical and non-technical] we had while building multiple MDM solutions.

I am speaking at the upcoming [DroidCon India](https://droidcon.in/2015/) conference [about MDM](https://droidconin.talkfunnel.com/2015/57-learnings-from-building-custom-mdm). Come and say hi if you are attending the conference.
