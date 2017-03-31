---
title: Do you really need Usability Testing?
date: '2014-11-12 11:26:45'
tags:
- cap-manishrc
- design
- lean-startup
- lean-ux
- usability
- ux
link: http://www.multunus.com/blog/2014/11/do-you-really-need-usability-testing/
---

![Should you do usability testing on a perfect design?](http://www.multunus.com/wp-content/uploads/2014/11/1.jpg)

One of our customers is the [IntersectFund](http://intersectfund.org). They are a nonprofit microlender who have trained, coached and financed hundreds of New Jersey's emerging entrepreneurs from lower income groups.


![The Intersect Fund Logo](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2014/11/IF_logo_small.jpg)

Given that they’ve been doing it for 7 years, our customer was already very comfortable with the needs and the workflow of the the Loan Officers - who are the primary users of the system.

Considering this, we felt confident on the designs too. But eating our own dog-food, we forced ourselves to conduct a Usability Test anyway. Read along to find out what we found. Let’s just say, Steve Krug wouldn’t be surprised.

##A Quick Intro to The Product


The first product we’re building for the IntersectFund is called Closer. The goal of Closer is to make the process of Closing a loan much more efficient:


*  Reduce Communication Overhead

    
*  Reduce Manual Errors

    
*  Reduce Dependency on Single Person

    
*  Build a system that can scale.


##Persona - The Loan Officer

The Loan Officer is the primary user of Closer. Her role involves meeting Loan Applicants, understand their needs, and help get their loan approved.

![Jane Doe - Example Image](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2014/11/1984_Davie_JaneDoe_Reconstruction_004b-150x150.jpg){: style="float:left"}

Jane Johnsons

Age: 30

Location: **NJ**

Speaks Spanish

Behaviour

*  Works out of Intersect office. But spend about 90% time on the go.

    
*  Loan Officer meets with the Borrower to discuss about the loans.

    
*  Work Long hours - mostly in the evening as that's when borrowers are available.

    
*  Fairly tech savvy. Troubleshooting is difficult, though.

    
*  Carries iPhone, MacBook Air & a Portable Scanner.

    
*  Access to Internet is through the iPhone.

Problems

*  Having to drive long distances to do small tasks is painful.

    
*  Lot of Phone calls. (Phone call every 5 minutes)

    
*  Has to deal with complaints from the applicants.

    
*  Not having access to all information is a problem. (Ex. not having balances on active loans.)

    
*  Waiting for approval of loan applications.

    
*  Declining to people is difficult. Has to figure how to translate what document are needed to what the borrower can provide.

    
*  Has to deal with borrowers lacking documents.

Goals

*  Reduce communication overhead times.

    
*  Get loan approved and disbursed as soon as possible.

    
*  Spend time talking to more Borrowers.

    
*  Be able to answer queries from borrowers quickly - without relying on other people from Intersect.


##How We Did The Usability Test


Since the IntersectFund Team is based out of NJ, we decided to do remote usability testing with two Loan Officers. We used [Google Hangouts on Air](http://www.multunus.com/blog/2014/09/using-google-hangouts-air-remote-usability-testing/) for conducting and recording the test for later use - Everybody already has it installed, automatically saves the video to youtube, and easy to share the video privately with multiple people.


##Here’s What We Found


    
*  **Merge before Uploading**

Closer required them to upload single bank statements for 3 months. What we found though was that each month was stored in a separate scanned document. That meant they had to combine them before uploading.


*  **Switching back and forth**

After the Collateral Documents are uploaded, the loan officer is supposed to enter a few details from the document such as validity of the document. This is to ensure that the validity of the documents are checked soon after the upload. During the usability test, we found the Loan Officer constantly switching windows between the new system and the document to fill all the fields. Since the fields were important, she did that frequently with smaller chunks of data.


*  **Less keystrokes is more keystrokes**
The date fields had * auto*  addition of '/' to save on a few keystrokes. But, since they were used to filling dates with separate input fields or including the ‘/’ manually, they ended by making a lot of corrections. It was irksome!


*  **No Aid for Explanation**

During the process of closing a loan, there’s a step when the Loan Officer explains how things will work out, to the Borrower. We have a page which is supposed to help her explain. What we found out though was that the interface was hardly used during explanation.


*  **Webcam Permission**

The browser vendors aren’t doing a great job with making the Webcam Permissions apparent. In this case, they Loan Officers were using chrome. It’s the same color as the address/bookmarks bar and the buttons aren’t highlighted either. Complete amiss.

![webcam permission - chrome browser](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2014/11/Screen_Shot_2014-10-20_at_12_02_43_PM.jpg)


*  **Help-Text-Don’t-Read [HTDR]**

With so much information overload these days, it doesn’t matter how good intentions you have and how short you try to keep it. Nobody reads the help-text. They may come back to it when they face any error. But, don’t expect them to read it in the first pass.


*  **Mandatory Address Line 2**

For some reason, the address line 2 was made mandatory. Since we tested with some real data though, we figured that address line 2 was hardly used which we later made optional.


*  **To Err is human**

We discovered that the current way of highlighting the fields with errors is too subtle and not very intuitive.


*  **“Enter Your Email Address” - Yours or Mine?**

One of the pages is supposed to collect the details the Loan Borrower. At the end of the page are the email and phone fields which would be used to send reminds to the borrower. We saw that the browser would auto-fill the Loan Officer’s details and since the Loan Officer would be filling it up for the borrower, she perceived it to be her details instead of the borrowers.


*  **In the Logo they trust**

We also found that there wasn’t any place where IntersectFund logo was displayed. The Loan officer thought that it would be essential to maintain the trust with the borrowers.



##How We Prioritized


With all these insights from the usability test at hand and the constraints of time we decided to prioritize 
 related issues over first time user experience issues for the following reasons:


    
*  It’s the same persons using the app everyday.


*  The risk of the users abandoning doesn’t exist.

* All this just goes to say that, even if you are very confident about your designs, there will always be a few things Usability Testing will uncover. Plan to spend a few hours every month and make your design better.* 


**If you are facing difficulty getting insights to make your products better, feel free to reach out to me on 
[SoHelpful.me/manishrc](http://sohelpful.me/manishrc)**



Photo Credit: 
[http://startupstockphotos.com/post/78227111700/download](http://startupstockphotos.com/post/78227111700/download)
