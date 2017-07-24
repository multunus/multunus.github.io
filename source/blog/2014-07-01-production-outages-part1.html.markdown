---
title: Production Outages - Part 1
date: '2014-07-01 22:23:27'
tags:
- cap-leena
- continuous-delivery
- newsletter
link: http://www.multunus.com/blog/2014/07/production-outages-part1/
---

Couple of months back, we had a significant outage in one of the products we are consulting on. This is an application which remotely manages Linux media players which are installed in many cities across the US.

There was a bug in a library that we were using, which resulted in LOT of exceptions being written to the log file. Adding to the woes, we also had a misconfiguration in our log rotation. Both the above put together resulted in bloating the disk space in the devices.

The bug affected around 40% of devices in production. Using the remote script execution feature in the remote management service we had built, we ran the scripts to delete the files. We also fixed the log rotation issue.

That brought back around 50-60% of the devices, but the rest of the devices became completely inaccessible. We created bootable USBs, and sent technicians to the locations where the devices were deployed to bring those back.

Needless to say, the entire experience was very stressful. Since then, we’ve been doing a lot of thinking and research - to help us to both:


*  Prevent this kind of situation going forward, and also

    
*  To handle the situation better in future - when we’re unable to prevent them


##Prevention - the feedback systems


Feedback systems are important and common feedback systems for programmers are:


*  Test Driven Development [TDD] to get feedback about the correctness while adding, modifying or refactoring code during development.

    
*  Continuous Integration [CI] gives you feedback about the correctness of the application whenever a commit is made to the repository.

But once the application is deployed, we need to get feedback about the entire application i.e. how the code, architecture and infrastructure works together. There is a normal tendency to de-prioritise setting up of these feedback systems over new features and thats what exactly happened to us too.

We had [Monit](http://mmonit.com/monit/) and [New Relic](http://newrelic.com/) setup for monitoring our server infrastructure. But because of timeline pressures, the common tendency to give more importance to feature development over monitoring systems is the mistake that we did for the client application [the application deployed to Linux Media Players], and we paid the price for the same. To further highlight the danger of wrong prioritisation, here's another fact that makes us cringe: The outage happened just the week before we were scheduled the set up of Monitoring systems.

Needless to say, the first thing that we did after the stressful long hours of outage was to setup monitoring and alerting. We evaluated [Nagios](http://www.nagios.org/), [Sensu](http://sensuapp.org/) and [CollectD](https://collectd.org/) which are the most popular monitoring tools, and opted Sensu because of the following reasons:


*  Its written in Ruby

    
*  Can be easily extended with custom plugins

    
*  Good scalable modern Architecture, built on top of AMQP with RabbitMQ

    
*  Great community support

    
*  Has APIs, to create custom reports

    
*  Was strongly recommended by couple of experts in the industry

We setup Sensu Server and also deployed Sensu Client [with basic System Resource threshold checks] to all the devices along with email alerts. Later we added more checks such as  [Keepalives](http://sensuapp.org/docs/0.12/keepalives), [Process checks](https://github.com/sensu/sensu-community-plugins) etc.

Apart from the technical aspect, the outage also has a non-technical or rather a psychological aspect. We have recently posted 
[Part 2](http://www.multunus.com/blog/2014/08/production-outages-part-2/) of Production Outages, reading which you can know our thoughts on the psychological aspect of the outage.
