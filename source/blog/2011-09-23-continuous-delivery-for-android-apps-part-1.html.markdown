---
title: Continuous Delivery for Android Apps - Part 1
date: '2011-09-23 11:15:50'
tags:
- cap-leena
- android
- continuous-delivery
- onemdm
- process
- technology
wp:post_id: '4160'
link: http://www.multunus.com/blog/2011/09/continuous-delivery-for-android-apps-part-1/
---

We’ve set up our CI server for building android apps. We use Jenkins as our CI server, but the same steps can be applied to any CI server.


**Setup Android Environment on CI server**

You need to first install the android SDK and platform tools on the CI server. The steps are well defined 
[here](http://developer.android.com/sdk/installing.html). You can run the command 
android update sdk --no-ui if the CI server is in an headless environment.


**Generate Build script**

Using android SDK tool , you can generate build script for the android project which contains the standard steps for building the app such as clean, compile, release, install etc. The following command will generate the build script, replace <appname>, <target> and <project path> accordingly.android update project -n <appname> -t <target> -p <project directory>

This will create build.xml file under the project directory. You need to create build.properties file with the following contents:


key.store=path-to-keystore
key.alias=[alias]
key.store.password=[pw]
key.alias.password=[pw2]

You can generate the key file using keytoool or you can generate the key file from eclipse. Run the command  ant clean release, which will compile the files, and generate the apk files (it generates signed, unsigned and unaligned files). The signed version can be used for uploading to Android Market or for installing directly on any device. Couple of stuff to be noted here are:


* Ant version has to be 1.8.0 or higher.

    
* Put the external libraries in the libs directory. Build script automatically picks up the libraries put under libs directory, otherwise the script need to be changed to look at a different classpath.

Checkin the build.xml, build.properties and the key file into the repository.


**Setup the CI server**

The CI server has to run the ant script for building the app. One more setting what we’ve done in our Jenkins server was to archive the apks as artifacts (available in the post build action). In upcoming posts, I will cover how to do the following:


* Running android tests

    
* Running code/test coverage tools

    
* Actual deployment

References:
** **
[http://skaug.no/ingvald/2011/09/android-app-with-jenkins/](http://skaug.no/ingvald/2011/09/android-app-with-jenkins/)
