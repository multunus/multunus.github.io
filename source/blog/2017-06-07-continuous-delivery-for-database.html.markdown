---
title: Continuous Delivery for Database
date: '2017-06-07	 9:10:20'
tags: 
- cap-leena
- process
- culture
link: http://www.multunus.com/blog/2017/06/continuous-delivery-for-database/
---

In my previous posts, I touched upon [Branch by Abstraction](https://paulhammant.com/blog/branch_by_abstraction.html) and [Strangler Pattern](https://www.martinfowler.com/bliki/StranglerApplication.html) which can be used as a technique for long refactorings or rewrites of the application. I also wrote about how to approach [emergent design](http://www.multunus.com/blog/2013/09/what-is-agile-design/) instead of [Big Upfront Design](http://c2.com/cgi/wiki?BigDesignUpFront).

What about Database changes? Can it be done in a continuous delivery manner?

Evolutionary Database or Refactoring Database is a concept that came out through the Book - [Refactoring Databases](https://martinfowler.com/books/refactoringDatabases.html) published a decade back. The book talks many patterns that can be applied for Evolutionary Design of databases which is key for Continuous Delivery. 

Most of ORMs support migrations which allow database versioning. But how do you take care of porting data when refactoring a big table to multiple smaller ones or handling deletion of columns etc. This is where the [expand contract pattern](https://martinfowler.com/bliki/ParallelChange.html) can be applied, which is somewhat similar to the Branch by abstraction where you keep the old and new implementation in parallel for some time.

Let me explain that with an example, one of the database changes that we made for our product.

The application receives enquiries through the IVR system to automate the customer support calls. Depending upon the option selected through the IVR, an SMS is sent to the customer which they can use for further interaction with the system.

When we started off, we had the following fields for the enquiries table:

* customer_contact_number

* call_start_time

* call_end_time

* extension

* customer_name

* customer_email

We added the *name* and *email* of the customer later down the line to the enquiries table. But we realised that it’s time to move out customer related data to another table so that we can reference it throughout the application.

It required the following steps:

* Add the *customers* table

* Change the code to use *customers* table

* Port the existing data to the *customers* table

* Delete the fields from *enquiries* table

All of us know that rollback of database migrations is hard when it comes to deleting of table or fields. So it is always recommended to do the migrations, port the data and watch it for some time and then delete the unwanted fields. 

This means we need to have both the earlier and current implementation running in parallel for some time. And that is what is called the expand-contract pattern.

!["DB - Expand Collapse Pattern"](https://s3.amazonaws.com/multunus-cdimages/db-cd.png)

This is also known as [Parallel Change](https://martinfowler.com/bliki/ParallelChange.html), which can be applied for other refactorings which require backward compatibility [eg: API changes]. Branch by Abstraction also follows parallel change to support long-term refactoring.

Following are some references about Database Refactorings and how to support Continuous Delivery of Databases.

[Enabling Continuous Delivery with Database Practices](https://www.youtube.com/watch?v=ViXMER7RlVU)

[Parallel Change](https://martinfowler.com/bliki/ParallelChange.html)

[Evolutionary Database Design](https://martinfowler.com/articles/evodb.html)

 

