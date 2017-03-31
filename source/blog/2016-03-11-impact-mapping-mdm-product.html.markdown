---
title: Impact Mapping for MDM product
date: '2016-03-11 10:39:15'
tags:
- cap-leena
- business
- process
---

* “Diversity and independence are important because the best collective decisions are the product of disagreement and contest, not consensus or compromise.”* 

―[James Surowiecki](https://en.wikipedia.org/wiki/James_Surowiecki),[The Wisdom of Crowds](http://www.amazon.com/The-Wisdom-Crowds-James-Surowiecki/dp/0385721706)


In [my earlier post,](http://www.multunus.com/blog/2016/02/introduction-impact-mapping-creating-impact-map-ecommerce-product/) I gave a brief introduction to Impact Mapping using an eCommerce product as an example.


To recap, an Impact map leverages the wisdom of crowds.This also brings in the additional benefit of **shared understanding of goals and assumptions among the team**. This shared understanding helps the team to plan and prioritise effectively, especially during unforeseen events.


In this post, I will explain how we created an impact map for a product that we are building in the Mobile Device Management [MDM] space. The high-level structure of the post is the two-session  approach of Impact Mapping i.e.


*  Session 1: Preparation

  *  Step 1: Discover real goals

    
  *  Step 2: Define good measurements

    
  *  Step 3: Plan your first milestone.


*   Session 2: Mapping

  *  Step 1: Draw the Map Skeleton

    
  *  Step 2: Find Alternatives

    
  *  Step 3: Identify Key Priorities

    
  *  Step 4: Earn or Learn


I am not going into the details about Mobile Device Management [MDM].[Read this post on the same](http://www.multunus.com/blog/2015/11/overview-mdm-landscape/), if you are keen to know more about MDM.


##Preparation Step 1: Discover the real goals



Our customer,[The district development officer @ Sabarkantha, Gujarat](http://sabarkanthadp.gujarat.gov.in/sabarkantha/english/), approached us to develop an MDM solution to control the Android devices which their health workers are using for collecting data.


These Android devices, which are distributed to the health workers, contain educational content [mainly Videos and Presentations] to create awareness among the villagers about:


*  Malnutrition

    
*  Child Mortality

    
*  Women Mortality

    
*  Vaccinations


Along with showing these content to the villagers, the health workers collect the health data using “data collection apps”, which are installed on the device. The data later gets synced to the cloud for further analysis by medical officers within the Health Department.


Apart from the impact on the villagers, the non-tech savvy health workers too get benefitted with these devices. The devices provided them access to the internet and opportunities to explore the same which would not have been possible otherwise.


But as the number of devices increased, the officers started facing issues with managing devices in the field, so approached us for providing an MDM solution.


The MDM space is so vast and has a set of predefined features for remote management of devices which includes:


*  Installing/Updating apps

    
*  Managing the content

    
*  Enable Security policies [Pin, Lock timeout etc.]

    
*  Whitelisting of applications

    
*  Tracking App usage

    
*  Location Tracking

    
*  Resource monitoring of the apps


To understand which of these needs to be built first, we started asking the questions [the recommended[5 Whys](https://en.wikipedia.org/wiki/5_Whys)technique] and we learned many things which are very important.


###The MDM Case Study


Let’s see an example conversation.

*  **Nagarajan**: We need to have a registry of devices

**Me**: Why?

**Nagarajan**: Right now there is no way we know about the devices in the field

**Me**: Why? I thought you had a register maintained for the same

**Nagarajan**: Oh that one. That won’t tell us whether the devices are actually being used or connected. Some devices go into repair too because of battery issues

**Me**: So what you need is whether a device is there in the field. How do you know that?

**Nagarajan**: The health workers are supposed to come to the office at least once in two days for syncing the data. They also update the content, if there are any updates, during the same time.

**Me**: Oh ok. So what you are saying is that we need to know whether devices are being connected to the internet at least once in two days.


These conversations helped us to understand that the biggest problem is that **not enough data gets synced to the cloud**for analysis and with ~500 devices in the field it’s becoming a huge problem for them to managing and tracking the devices. To be precise the major problems are:


*  **Track device usage**: No system for tracking of device status

    
*  **Track app usage**: No system to know whether the “data collection apps” are indeed used by the workers

    
*  **Instant Content Update**: Content update on the device is very time-consuming

    
*  **Remote App Management**: Process to install / update apps is time-consuming


##Preparation Step 2: Define good measurements



Once you identify the goals, you need to define good measurements to have clarity on what we are targeting.


[Gojko Adzic](https://gojko.net/), the author, refers to a good milestone as the one which answers the questions below:


*  What we’ll measure [**Scale**]

    
*  How we’ll measure [**Meter**]

    
*  What is the situation right now [**Benchmark**]

    
*  The investment [**Constraint**]

    
*  The desired value [**Target**]


[Credit:](http://www.amazon.com/Competitive-Engineering-Handbook-Requirements-Planguage/dp/0750665076)[Competitive Engineering, Tom Glib](https://en.wikipedia.org/wiki/Tom_Gilb)


It is ideal to have all the numbers, but don’t worry if you don’t have enough. Start with the numbers you’ve and add the rest later. 


###The MDM Case Study



As mentioned above, these workers are “non-tech savvy” people. Even though training has been provided to them on how to use the app and why it is important, one of the problems the health departments found was that not enough data gets collected.  The workers complain the lack of connectivity, devices being slow and then get hung, battery drains frequently etc. as the reasons for the same.


But the medical officers felt that even in areas with decent connectivity, data collection was not sufficient. They had multiple assumptions:


*  The workers install too many apps on the device, which drains the battery and makes the device slow.

    
*  Because of some UX issues with the apps, some workers get confused and don’t use the same as expected.


Keeping the above in mind, we created the following measurements:


![Measurements](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/03/Screenshot-2016-03-10-23.56.33-1024x350.png)]


##Preparation Step 3: Plan your first milestone



Once you identify the milestones for the goals, the next step is to identify the first milestone you want to achieve. Use the techniques such as[dot-voting](http://martinfowler.com/bliki/DotVoting.html)or[virtual money](https://www.scrumalliance.org/community/articles/2009/february/priority-markets)for prioritising these goals.


Give more votes or cash to the key business people in the room, to arrive at the right business goals.


It is recommended to concentrate on one goal at a time rather than partially concentrating on many.


###The MDM Case Study



As mentioned above, the priority is among the two categories of problems:


*  Tracking:Tracking device and app usage in the device

    
*  Remote Control:Managing the device remotely [eg: installing Apps, updating content remotely]


So we felt that it’s good to concentrate on Tracking problem first and **learn the usage pattern** before bringing in any kind of remote control. This data can help us to implement the right kind of remote management system.


For example, if the tracking data shows low usage for the apps, then we can start further conversations or conduct further training sessions for the workers. Instead if it’s a connectivity issue, then actions should be to improve the connectivity.


So we decided to concentrate on two goals, which would help us understand the device and app usage.


![First Milestone](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/03/Screenshot-2016-03-10-23.59.08-1024x287.png)]


Instead of targeting all the devices [there are ~300 devices], we decided to do it on a smaller set and we came up with the first milestone i.e. **Learn usage pattern of 100 devices**.


##Mapping Step 1: Draw the Map Skeleton



Once you identify the first milestone, it becomes the center of the impact map.


Usually, every team will have a backlog of features, which[Gojko Adzic](https://gojko.net/)refers to as the **shopping list**. This section of the Impact Map is for **connecting the shopping list back to the milestone.** 


In this section, we will be mainly answering the below questions.


*  **Why**
 are we doing this?

    
*  **Who**
 will help or disrupt us from achieving it?

    
*  **How**
 will they help?

    
*  **What**
 can they do to help?


My first post talks in detail about how to go about[the 4 step process of Impact Mapping](http://www.multunus.com/blog/2016/02/introduction-impact-mapping-creating-impact-map-ecommerce-product/). But I will cover the same for our MDM application here.


###The MDM Case Study



**Who**



As the next step, we identified the “Who” of the impact map, which is the first level of the Map.[](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/03/image02.png)


![Map 1](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/03/image02.png)


We answered the below questions:


*  Who can produce the desired effect?

*  Health Workers - by using the device and the apps

    
*  Medical Officers - By providing the Health Workers appropriate training

    
*  Who can obstruct it?

*  Network Providers - through bad network

    
*  App Developers - Through bad UX

    
*  Who will be impacted with it?

*  The villagers - Better awareness for them about health


**How**


Every impact should result in behavior change of the users. The next level is to answer what is the impact we are going to create by achieving this goal. The specific questions we answered were:


*  How should the goal change the actors’ behavior?

    
*  How can actors’ help us in achieving the goal?

    
*  How can actors’ prevent us from achieving the goal?


[![How ](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/03/image05-1024x390.png)](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/03/image05.png)


##Mapping Step 2: Find Alternatives



Once you’ve a skeleton map, use the[Diverge and Converge of the design thinking](http://sloanreview.mit.edu/article/diverge-before-you-converge-tips-for-creative-brainstorming/)to get as many ideas as possible. Ask the below questions to help the team focus on the actors and the impacts.


*  What else could the actors do for us?

    
*  Who else can help us and how?

    
*  Who can obstruct us?


Timebox this session to 20 minutes.


###The MDM Case Study



This is the updated map with the ideas we brainstormed.


[![image00](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/03/image00-1024x586.png)](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/03/image00.png)


###Mapping Step 3: Identify the key priorities



Once you’ve as many alternates identified, now it’s time for prioritising the same. Use the below questions for having discussions among the members:


*  What are the possible obstructions which can stop us before we start?

    
*  Are there any high-value long-hanging impacts?

    
*  What are the key assumptions to test?


If it becomes harder to decide, use the techniques [dot-voting](http://martinfowler.com/bliki/DotVoting.html) or [virtual cash](https://www.scrumalliance.org/community/articles/2009/february/priority-markets) for making decisions.


Usecolor codingto differentiate among different categories eg: red for obstructions and green for low-hanging fruits.


###The MDM Case Study



We used the voting mechanism for prioritisation as follows:

![Alternatives](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/03/image04-1024x740.png) [Note: *  represents the votes]


##Mapping Step 4: Earn or Learn



In this step, start discussing the deliverables. Define the budget which can be either the maximum budget or length of the tasks. Come up with creative ways to validate the assumptions. Ask the following questions:


*  What is the simplest way to test this?

    
*  Could we test it without software?

    
*  Could we start earning with a partially manual process?


Try using [Jeff Patton’s User story mapping](http://www.amazon.com/User-Story-Mapping-Discover-Product/dp/1491904909) to slice the deliverables in an iterative way.


###The MDM Case Study



The above questions helped us to prioritise better. We decided to have two releases:


*  First enrol the devices into the MDM system

    
*  Then start tracking the app usage


![Earn or Learn](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/03/image03-1024x639.png)


Apart from that, we decided that the app tracking will be supported only on devices with Android 4.4 as Android has changed the APIs from 5.0, which require some extra time to implement. We also confirmed that most of the devices in the field are with version 4.4, from that way it’s not going to affect the learnings.


We decided to hold on alerts for low usage and decided that for starters, one of us will take a screenshot of the report and share the same in WhatsApp with Medical Officers or other stakeholders.


##Fitting the metrics into the Map



To use impact map as a delivery roadmap, you will need to include the metrics too into the map so that all the key information are available at a single place. You can try any of the below ways to fit the metrics into the map.


*  Add the metrics as bullet points

    
*  Rephrase the nodes to include the metrics

    
*  Separate metrics table - This will be outside of the map. You can divide the white table into two sections, one for the map and another for the metrics

    
*  Add metrics as additional nodes


Note that in the example above, I’ve 
used the techniqueincluded the metrics 
in the node[100 devices].


Separate metrics table [as shown below] is useful when you have to share the reports with external people.


![Metrics Table](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/03/Screenshot-2016-03-11-10.36.14.png)


#Conclusion


![Impact Map](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/03/impact_map-1024x479.png)


Mind map of Impact Mapping


As I mentioned in the beginning of the post, Impact Mapping is a strategic planning tool which focuses on collaboration and shared understanding. It uses the [Lean Management](https://www.lean.org/shook/DisplayObject.cfm?o=1447) concept of “Asking the right questions” to arrive at the right goal.


Use it for creating a shared goal among the team members, both business and technical members, and feel the power of wisdom of crowds. During unforeseen events, the shared goal helps the team to make the right decisions which will have a positive impact on the business.


Happy Impact Mapping!


![Presenting @ Agile India](https://s3.amazonaws.com/next.multunus.com/wp-content/uploads/2016/03/image06.png)

 
