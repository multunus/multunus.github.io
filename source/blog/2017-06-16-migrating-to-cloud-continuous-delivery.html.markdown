---
title: Migrating to Cloud - In a Continuous Delivery manner
date: '2017-06-16	04:00:29'
tags: 
- leena
- continuous-delivery
- newsletter
link: http://www.multunus.com/blog/2017/06/migrating-to-cloud-continuous-delivery/
---

<img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/074/19e/017c499.jpg" alt="Akshay Surve" style="width:250px;float: left;padding-right:10px;"/>
Recently during [a meetup](https://www.meetup.com/SoftwareArchitectsBangalore/events/237117024/), I got a chance to listen to [Akshay Surve](https://www.linkedin.com/in/akshaysurve/), co-founder of DeltaX. 

[DeltaX](http://www.deltax.com/) is a platform which provides analytics around Social Media Marketing. 

Akshay shared an interesting story about how DeltaX moved to cloud over a period of six months in a continuous delivery manner. 

Quoting Akshay, as he wrote in [his blog](https://dxrecursion.aerobatic.io/articles/2017-04/migration-to-azure):

>*In the second half of 2016 - we decided to migrate our multi-tenant app from bare-metal servers to Azure. While you can find numerous benchmarks for various cloud platforms - there are very few relatable drill downs on the thought process as part of such migrations to the cloud as is. More importantly, this was not just a migration - it was literally a war with all hands on the deck; keeping the existing usage, client data and growth intact we were able to migration over 1.4TB data and existing clients to the cloud successfully.*

They had a multi-tenant database, so they moved tenant by tenant to the cloud instead of the entire migration. It took them around six months for the same, but taking it slowly helped them to plan better. 

![Migration Timeline](https://s3.amazonaws.com/multunus-cdimages/deltaX-migration.png)

The most interesting part for me in the talk is the way they sliced the huge mountain to small batches rather than doing it in a single big-batch. The small batch allowed them to observe, and optimise further and also allowed them to switch back as they had both the systems running parallel. I know small is relative here, but you get the point :)

Continuous Delivery is about delivering small batches of changes in a repeatable and sustainable manner. It is less risky because it will mostly be automated and mostly it will be reversible steps. 

Database is one place where usually Continuous Delivery is considered to be difficult. In my previous post, I wrote about how to approach database refactoring using [Expand and Contract Pattern](http://www.multunus.com/blog/2017/06/continuous-delivery-for-database/). And Akshay and team have shown an example of how it can be done for migrating to cloud too. They analysed, developed and deployed in small chunks which gave them confidence about the system over time.

You can watch the video of his talk in the below link:

[https://www.youtube.com/watch?v=niwLpGuaAiU](https://www.youtube.com/watch?v=niwLpGuaAiU)

Recently I read about how Capital One, one of the leading banks of US, [moved their customer facing app to AWS](https://medium.com/capital-one-developers/moving-one-of-capital-ones-largest-customer-facing-apps-to-aws-668d797af6fc?imm_mid=0f2918&cmp=em-webops-na-na-newsltr_20170609), which has an active user base of tens of millions of customers.

