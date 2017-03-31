---
title: An overview of the MDM landscape
date: '2015-11-25 08:15:29'
tags:
- cap-leena
- android
- continuous-delivery
- mobile-device-management
- onemdm
- technology
link: http://www.multunus.com/blog/2015/11/overview-mdm-landscape/
---

In the recent past, we had the opportunity to work with multiple MDM solutions and this post is to share how the MDM landscape looks currently,  and what options exist today for someone looking for an MDM solution.


##What is MDM?



**MDM, Mobile Device Management**, means the ability to manage devices from a centralised location. Enterprises uses this for securing emails and corporate documents on device, enforcing corporate policies, etc. With the increased use  of mobile apps in the field, MDM is becoming a necessity in many industries. MDM is also gaining traction where the devices will require very little interactions once installed.


##What can be managed?


Now lets look at what can be managed with the MDM solution. If you look at the above examples it includes:


*  **Managing applications** remotely installing/deleting/updating apps

    
*  **Restricting the access or enforcing policies** on the device, such as Securing content on the device, Configuring WiFi access etc.

    
*  **Remote management of the device** itself, such as wiping content, turning screen off/on etc.

    
*  And lastly, **content** **management,** Pushing files to device, deleting files etc.


##What is BYOD?



One popular term in the MDM world is **BYOD i.e. Bring Your Own Device.**


More and more enterprises are opening up their firewalls to let users carry their personal mobile devices into the corporate network. In some cases, companies give out devices to employees that are used for official as well as personal use. These bring in challenges of data privacy and malware protection.


The fragmented nature of the Android world BYOD makes MDM more complex.


##Available Solutions



There are a lot of MDM solutions available and you need to choose the one which matches the requirement. Some of the popular solutions are:


*  Airwatch

    
*  MobileIron

    
*  Apperian

    
*  Dell EMM

    
*  Citrix XenMobile


When you use the remote management console that comes with the above products, the experience is more of a typical [COTS application](https://en.wikipedia.org/wiki/Commercial_off-the-shelf), than the modern SaaS products. If you’ve used the standard enterprise applications such as email applications or word processing applications, you might be able to relate to what I am talking about here.


There are a number of other solutions coming up targeting specific problems such as Content Management, Data Security, Remote Control etc.


##OneMDM



At Multunus, we’ve created several MDM solutions for our customers, each solving a different problem.


Recently we’ve started on [OneMDM](http://multunus.github.io/onemdm-server/),  an Open Source Solution, which extracts out the most common features that we’ve seen across the MDM solutions that we’ve built. Right now it supports only Android devices [running Kitkat and beyond].  


It is in its early stages,  and we will be adding more features in the coming weeks and months. The source can be found at:


[https://github.com/multunus/onemdm-server](https://github.com/multunus/onemdm-server)


[https://github.com/multunus/onemdm-client](https://github.com/multunus/onemdm-client)


**Note:** [Read this post](http://www.multunus.com/blog/2015/12/options-consider-building-mdm-solution/), if you'd like to know different options once need to consider while building an MDM product.


###Further References



[https://en.wikipedia.org/wiki/Mobile_device_management](https://en.wikipedia.org/wiki/Mobile_device_management)


[http://searchmobilecomputing.techtarget.com/definition/mobile-device-management](http://searchmobilecomputing.techtarget.com/definition/mobile-device-management)

The below video talks about [The](http://www.multunus.com/portfolio/end-end-mobile-device-management-solution-health-media-enterprise/)[Custom MDM solution for Android Tablets and Linux Media Players](http://www.multunus.com/portfolio/end-end-mobile-device-management-solution-health-media-enterprise/) that we built for one of our customers. These devices are deployed in clinics across US delivering educational content to the patients.

<iframe width="1280" height="720" src="http://www.multunus.com/wp-content/uploads/2014/01/Enterprise-Mobile-and-MDM-Health-and-Media-space.mp4"></iframe>
