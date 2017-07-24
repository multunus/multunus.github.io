---
title: Continuous Delivery of iOS apps using Jenkins and TestFlightApp
date: '2012-05-21 11:03:21'
tags:
- cap-leena
- continuous-delivery
- process
link: http://www.multunus.com/blog/2012/05/continuous-delivery-of-ios-apps-using-jenkins-and-testflightapp/
---

As mentioned in [earlier posts](http://www.multunus.com/blog/categories/continuous-delivery/) we’ve been doing Continuous Delivery for both Webapps and Android apps for quite sometime. This post is about setting up Continuous Delivery for iOS apps using Jenkins and 
[TestFlightApp](http://testflightapp.com). TestFlightApp is a free service which helps to do closed beta testing without putting into AppStore. Using their APIs, the process of delivering new versions of the app can be automated.

Setting up Continuous Delivery mainly involves the following steps:

- Setup Mac Machine as Jenkins Node
- Setup Jenkins Xcode plugin
- Configure Distribution profile
- Integrate with TestFlightApp API

Lets see those steps in detail.

## Setup Mac Machine as Jenkins Node**
Setting up a node with Jenkins is very easy . You can either control the slave using SSH or using JWS. Each node will have a label name associated with it, which needs to be mentioned during setting up the job which needs to be run on this node. You can configure the nodes from the Manage Nodes under the Manage Jenkins option. The following screenshot shows how to configure a node using SSH.

![Configure Node using SSH](https://s3.amazonaws.com/multunus-cdimages/jenkins_node.png)

This [link](https://wiki.jenkins-ci.org/display/JENKINS/Step+by+step+guide+to+set+up+master+and+slave+machines) contains step by step instructions on how to configure a node using JavaWebStart.


## Setup Jenkins Xcode plugin
Jenkins XCode plugin abstracts the xcode commands to run for creating packages for distribution. [Jenkins Wiki](https://wiki.jenkins-ci.org/display/JENKINS/Xcode+Plugin) has details about how to configure the same. I encountered one [issue](https://issues.jenkins-ci.org/browse/JENKINQS-12635?focusedCommentId=161518#comment-161518) while configuring the same, i.e. ipa generation was failing when the “Build output directory” was configured with relative path. It got resolved by giving the full path as 
**${WORKSPACE}/build**.

## Configure Distribution profile
For distributing applications, an ad-hoc distribution profile needs to be created using the this [link](https://developer.apple.com/ios/manage/provisioningprofiles/create.action?type=2). The Development Provisioning Profile will not work with TestFlightApp. It took me sometime to figure out the same. The following video gives detailed instructions on how to create the same.

[http://www.youtube.com/watch?v=XVO0tIHmQTg&feature=relmfu](http://www.youtube.com/watch?v=XVO0tIHmQTg&feature=relmfu)

## Integrate with TestFlightApp API

TestFlightApp provides [API](https://testflightapp.com/api/doc/) which can be integrated with Jenkins to upload the IPA after successful build. I used curl command, as given as sample in the document, to upload the IPA. You can create support groups to be notified on each new upload of the app, and installation of the app is very simple i.e. just a click of link in the email. No iTunes and no sharing of IPA through emails.

One issue I was stuck during the setup was the configuration of the profile with the Xcode plugin. The plugin has the option “Embed Profile”, but even if you give the path of the profile file, it was using the wrong profile for the IPA. The problem resolved when the profiles were refreshed in Xcode. You can get the Refresh option in the Organizer menu as shown below.

![Refresh profiles - Xcode](https://s3.amazonaws.com/multunus-cdimages/refresh_profiles_xcode.jpg)

**Note:** This post is mainly about integrating Jenkins with TestflightApp, hence not talking about testing tools. I am planning to cover about the same in my upcoming posts.
