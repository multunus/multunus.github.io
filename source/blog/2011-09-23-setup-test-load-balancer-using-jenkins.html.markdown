---
title: Setup Test Load Balancer using Jenkins
date: '2011-09-23 09:40:07'
tags:
- cap-kp
- continuous-delivery
- technology
wp:post_id: '4161'
link: http://www.multunus.com/blog/2011/09/setup-test-load-balancer-using-jenkins/
---

The main purpose of a test suite is to give fast feedback about the changes being made to the developer. Ideally the test suite should be really fast and should take no more than 10 mins to complete. But there are times when you end up with a test suit that takes 30 - 40 mins to complete. This can be really frustrating for the developers because they have to wait for 40 mins after checking in his changes to know if he broke something.

For this problem there are two possible solutions. Take some time from your project schedule to rewrite some part of your test suite. Although this is the ideal solution to the problem, this might not always be an option for you because of delivery deadlines. The other alternative is to throw more hardware at the problem and this is where 
[TLB](http://test-load-balancer.github.com/)comes in to picture.

One approach to solving the problem is to partition your spec suite in to different sets and then run them paralley in different machines. The problem with this approach is that it will take a lot of trial and error before you end up with partitions that takes almost equal time to finish. Also mainting these partition as you add more tests become a head ache. This is the exact problem the 
[TLB](http://test-load-balancer.github.com/) fixes.

A detailed description of how to setup the test load balancer is available 
[here](http://test-load-balancer.github.com/doc-0_3_2/getting_started_with_tlb.html). It should give you a very good idea about how TLB works and also about how do add load balancing to your build.

We are using jenkins as our CI server, so we will be concentrating on how to setup TLB on Jenkins. I am assuming that you already have the job [ to which you want to add load balancing ] configured in Jenkins.

The TLB setup has two main two components* TLB server

    
* Balancer


**Setup TLB server**


Download the TLB server and install it on your CI server host [ again for detailed instruction 
[look here](http://test-load-balancer.github.com/doc-0_3_2/getting_started_with_tlb.html) ]. Optionally add a service startup script so that the TLB server starts up each time you restart the server.


**Add balancing to your build**


For Rspec TLB distribution comes with a ruby gem you can install this. Also the balancer requires a hook in to you build invocation process this too is available as a rake task in TLB docs, add this to your project.


**Create Job Partitions**


The setup for the jobs which run in different partitions are exactly same, only difference between the partitions are only the subset of test executed in each partition.

Create as many copies of the existing job as the number of
