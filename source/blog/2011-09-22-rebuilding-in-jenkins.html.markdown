---
title: Rebuilding in Jenkins
date: '2011-09-22 14:32:49'
tags:
- leena
- continuous-delivery
- technology
wp:post_id: '4162'
link: http://www.multunus.com/blog/2011/09/rebuilding-in-jenkins/
---

One option that might be required after setting up a [build pipeline](http://www.multunus.com/2011/07/continuous-delivery-using-jenkins-build-pipeline/) is the provision to redeploy an earlier version by click of a button. This can become handy when we find a bug in the production and want to see when the bug got introduced. For that we will have to redeploy the earlier version to the staging/UAT environment and test the same. Jenkins by default does not allow to rerun any of the earlier jobs. But you can achieve this by the [Rebuild](https://wiki.jenkins-ci.org/display/JENKINS/Rebuild+Plugin) plugin. It allows you to rebuild any job provided its parameterized build. It also allows you override the parameters. It will show the “Rebuild” button at the left side as shown below when you go to specific build page:

[![rebuild](https://s3.amazonaws.com/multunus-website/uploads/2014/01/rebuild.png)](https://s3.amazonaws.com/multunus-website/uploads/2014/01/rebuild.png)

This is not a replacement for revert build, because it does not take care of reverting DB. But this can be extended to do the same. Note: It will show the Rebuild button only for those builds which occurred after installing the plugin. I took some time to realize this and it is not very clear in the documentation.
