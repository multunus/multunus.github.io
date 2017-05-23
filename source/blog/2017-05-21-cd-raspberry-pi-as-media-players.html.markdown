---
title: Conitnuous delivery - Raspberry Pi as Media Players
date: '2017-05-21	 4:00:20'
tags: 
- cap-leena
- process
- culture
link: http://www.multunus.com/blog/2017/05/cd-raspberry-pi-as-media-players/
---

<img src="https://s3.amazonaws.com/multunus-images/vamsee.jpg" alt="Vamsee" style="width:200px;float: left;padding-right:10px;"/>

This is a continuation of the previous post, in which [Vamsee Kanakala](https://twitter.com/vamsee) shared his journey and thoughts about Continuous Delivery. 

In this post, he is sharing his experience while working with one of the customers. 

* * *

This is an outdoor advertising company which uses Raspberry Pi & Linux to power their outdoor TV units which stream advertisements in highly-trafficked public places like railway stations and airports.

The main problem they had was that any changes to the software which runs the media controllers (Linux boxes) running the TV were cumbersome. They were contemplating shifting to the cheaper Raspberry Pi platform to power their media controllers instead of earlier Fedora running on regular PC units. There was practically no release management too.

Since there was already a Proof of Concept for Raspberry Pi ready and it needed to be operationalized on the field, I started on that. We made the software field-ready, ran several tests across multiple railway stations, and rolled out to outstation locations.  I also upgraded the existing Linux boxes to Debian installation and brought them up to speed with the software running on the [Raspbian](https://www.raspbian.org/) platform.

***

The Raspberry Pi release of the media controller, after about 6 months of initial development and intensive testing on the field, turned out to be stable and the client started rolling out the new platform across all the stations across Karnataka, eventually Tamil Nadu, AP, Maharashtra and Delhi NCR over the next couple of years. Last I heard, they’re crossing 2K units of Raspberry Pi installations across India. Also, we added the capability to roll out releases on the fly after the initial installation, so rolling out releases also became very simple (OTA - over the air) rather than the earlier method of manually replacing all the USB drives attached to each PC unit. 

## The bottlenecks faced

One of the main bottlenecks of the existing team of sysadmins not being exposed to proper release management and software development practices. The earlier procedure was to mount and open a bootable .iso image, modify the required files, and repack the iso file and copy it over to other USB drives, so and so forth. Needless to say, this was time-consuming, error-prone and highly inconvenient. 

So we planned a system that once installed, will handle upgrades over the air (OTA) along with the media files that are being updated over the air anyways. But to enable this, I had to train the team on good git workflows, how to do 2-week releases and how to roll them out onto the field.  

Next, instead of just repacking modified iso files, we moved to a disk-image creation framework (Debian LiveCD project) so we could check in everything into git, make changes and build the release-ready golden image with just one command. I also had to do some hands-on mentoring as well as clear documentation on how to commit, how to tag releases, how to build pre-release and release images, how to clearly communicate with on-field teams for upcoming releases, etc. Since we had to handle two different image formats (for Raspberry Pi units and regular PCs) it took careful planning on syncing new features between two different platforms and making sure they are released almost simultaneously.

We also had some problems like proper reporting of the issues faced on the field, triaging of the bugs reported, etc. There were a lot of issues that would show up only on the field, so we had to create a test bay of Raspberry Pis and PCs with similar setup as that on the field, that runs continuously in the lab and we log metrics on important features with each new release so we don’t have any regressions in performance. 

Additionally, I setup a system for reporting the issues in the field and triaging of the same. I also setup a weekly meeting call with all the stakeholders including field managers to plan what’s coming up in the next release and how to roll it out onto the field. Eventually, this team became self-sufficient and are now able to run the release management by themselves.

##Summary

As Vamsee shared in the experience above, optimising the build pipeline is the way to improve continuous delivery. It can be done for any team, for any platform given a good amount of focus and investment.

If you are convinced about the value of Continuous Delivery, what are you waiting for? 
Follow the steps in [Getting Started section of the previous post](/blog/2016/11/tryst-continuous-delivery#get-started) if you need guidance in getting started.
