---
title: Web Application Security
date: '2012-10-11 09:55:05'
tags:
- sreenath
- leena
- technology
wp:post_id: '4147'
link: http://www.multunus.com/blog/2012/10/web-application-security/
---

Now a days we, programmers are really obsessed with test driving our application and automating. We automate our unit tests and integration tests. We do continuous integration. But what about security testing ? Many organization hire security professionals to test the web application security when the complete product is built and most often to test production environment. But most of the vulnerabilities that is present in the system could have fixed very easily and cheaply when found during the development phase. Also since the application is in the production environment hired security consultants will not be able to conduct an attack against the system and verify the vulnerability. Hiring a security consultant is very costly as well as :

- We will not be supplied with a security test suit.
- We will not have list of passing test cases and failing tests instead we get a list of vulnerabilities
- After fixing the vulnerabilities we might have to hire them again to make sure that all the vulnerabilities are fixed.

The truth is developers can identify and fix many of such vulnerabilities during the development itself. Moreover we can write automated security testing with the help of integration testing tools. There are two approaches for testing our web application security

- Black box testing.
- White box testing.

In black box testing we analyse the security of our application through the web  front-end of our application. Vulnerability scanners is an example for black box scanning. In white box testing we use static code analysis to find the vulnerabilities in the system. 
For automated security analysis many tools are available. ROR developers can use any of the following.

- [Brakeman](http://brakemanscanner.org/) for White box testing.
- [Zed Attack Proxy](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project) for Black box testing.

Brakeman is a static code analyzer whereas ZAP is a vulnerability scanning tool. Both serves different functionalities. Note that ZAP is not dependent on any programming language. Now regarding which method to follow for security testing I would like to quote the following from this [blog](http://jeremiahgrossman.blogspot.in/2009/10/black-box-vs-white-box-you-are-doing-it.html) : “Black box vulnerability assessments measure the hackability of a website given an attacker with a certain amount of resources, skill, and scope. We know that bad guys will attack essentially all publicly facing websites at some point in time, so it makes sense for us to learn about the defects before they do.

As such, black box vulnerability assessments are best defined as an outcome based metric for measuring the security of a system with all security safeguards in place. White box source code reviews, on the other hand, measure and/or help reduce the number of security defects in an application resulting from the current software development life-cycle. In the immortal words of Michael Howard regarding Microsoft’s SDL mantra, “Reduce the number of vulnerabilities and reduce the severity of the bugs you miss.” Software has bugs, and that will continue to be the case.

Therefore it is best to minimize them to the extent we can in effort to increase software assurance.” We can run Brakeman against our application and after assessing the written code Brakeman will report the possible vulnerabilities. It will help us improve our code. But the downside is, it  may not be zen percentage in finding the possible vulnerabilities because it checks for typical coding errors which opens the doors for security breaches. ZAP is a really good web app security analysis tool. It is a proxy which sits between the web application and the web browser constantly analysing all the HTTP traffic. But for the same reason, we need to walk through all the web features so that ZAP can analyse the traffic.

We were thinking we  should try to  automate this process and once we find any issue, write a test to reproduce the same issue and go ahead and fix the problem. This will help us in making sure that the problem got fixed. If you want to automate the security testing using ZAP, it can be used done by integrating it with Web application testing tools such as [Selenium](http://seleniumhq.org/). Regarding how to configure ZAP and analyze the security vulnerabilities, I will cover it in a separate blog post. I also will be writing about how to integrate it with Selenium for creating automated security testing suite.
