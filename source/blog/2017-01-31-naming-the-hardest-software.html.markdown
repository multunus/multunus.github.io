---
title: Naming - The hardest thing in Software
date: '2017-01-31	 17:20:19'
tags:
- cap-leena
- technology
link: http://www.multunus.com/blog/2017/01/naming-the-hardest-software/
---

*There are only two hard things in Computer Science: cache invalidation and naming things.*

*-- Phil Karlton*

All of us struggle with **_naming_** on a day to day basis. What should we call a class, a field or table in the database or an action in the controller? The fact that it is harder to change it later adds to the complexity too.

Ubiquitous Language

There are techniques that help you arrive at better names. One of them is called Ubiquitous Language - a common, shared language that the developers and the domain experts/users use to communicate. 

The best way to arrive at a common language is through conversation. Let's look at an example of how to use conversations to arrive at Ubiquitous Language.

[Good Karma](https://gk-landingpage.firebaseapp.com/) is a Phone CRM product we are building for Yoga Studios [yes, it is our **_own_** product :)]. The IVR system automates the enquiries the studios receives for different kinds of classes they such as normal yoga classes, ayurvedic classes, yoga teachers training, dietician courses to name a few. 

Here’s an interesting conversation I had with a Yoga studio founder - 

**_Leena:_** Hi Naveen, I had a few questions about different types of yoga classes that we should handle in the system. Can we discuss those now?*

**_Naveen:_** Sure. Did you mean Group class, Teacher’s training etc? We call them Business Lines.

**_Leena:_** Oh ok. Yes, I meant **_Business lines_**. Can you give me examples of how **_bookings_** work for each of them?

**_Naveen:_** For **_Group classes_**, we offer **_Trial classes_** so that the customers can get a feel of the sessions and about the teachers too. Some customers are particular about certain **_Senior teachers_**, so we need to make sure that the system allows the customers to choose a specific teacher in case they prefer so.

**_Leena:_**Do trial classes exist for other business lines too? Say for **_Teacher’s training_** or **_Ayurvedic courses_**?

**_Naveen:_** No, it depends on the business line. For Teachers’ training, usually the customer’s give their details and we get back to them when the course starts. It is not as frequent as Group Classes.

**_Naveen:_** Forgot to mention another thing - these depend on the **_branches_** too. Certain branches don’t offer trial classes.

**_Leena: _**One more question. You mentioned senior teachers; do you have any other kind of roles?

**_Naveen:_** Yes, there are **_Studio_** **_managers_**. In some branches, they could be senior teachers. But not all seniors teachers are managers. Apart from that, we have **_founders_**, i.e. people like me who started the studio.

The advantage of having such conversations is that it will help you identify more than entities and names - even the actions or rules of the system too.

I’ve highlighted the important terminologies that the customer uses and the same should be the used for conversations among the team members. This will get reflected in the code too. For example, in the above conversation, I started off with the term **_Yoga classes_** instead of **_Business lines_**. Had it not been corrected by Naveen, the term services would have shown up in the code too.

After having conversations such as these, we convert them into story maps or flowcharts as given below. This helps us to visualise and create a common understanding within the team.

[![image alt text](https://s3.amazonaws.com/multunus-cdimages/gk-features.png)](https://s3.amazonaws.com/multunus-cdimages/gk-features.png)

Domain-Driven Design

Ubiquitous Language is one of the key parts of Domain-Driven Design, where the premise is **_initiating a creative collaboration between technical and [domain experts](https://en.wikipedia.org/wiki/Domain_expert)_** to iteratively refine a conceptual model that addresses particular domain problems.

It is much deeper, the following mindmap should give you a quick overview and depth of this.

[![image alt text](https://s3.amazonaws.com/multunus-cdimages/domain-driven-design.png)](https://s3.amazonaws.com/multunus-cdimages/domain-driven-design.png)

If done well Domain-driven design helps you move to a [Microservice Architecture](https://www.infoq.com/presentations/ddd-microservices-2016). I will be covering more about domain driven design in the future posts.

 

## Further References

[Ubiquitous Language - By James Shore](http://www.jamesshore.com/Agile-Book/ubiquitous_language.html)

[Domain Driven Design: Tackling Complexity Software in the Heart of Software](https://www.amazon.in/Domain-Driven-Design-Tackling-Complexity-Software-ebook/dp/B00794TAUG)

[Pluralsight Course - Domain Driven Design Fundamentals](https://www.pluralsight.com/courses/domain-driven-design-fundamentals)

[Pluralsight course - Domain Driven Design In Practice](https://www.pluralsight.com/courses/domain-driven-design-in-practice)

[Domain Driven Design By Eric Evans](https://www.youtube.com/watch?v=dnUFEg68ESM)

[Hunting for great names in programming by DHH](https://m.signalvnoise.com/hunting-for-great-names-in-programming-16f624c8fc03)

