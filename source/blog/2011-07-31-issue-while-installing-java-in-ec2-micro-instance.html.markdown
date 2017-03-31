---
title: Issue while installing Java in EC2 Micro instance
date: '2011-07-31 14:22:30'
tags:
- cap-leena
- technology
wp:post_id: '4168'
link: http://www.multunus.com/blog/2011/07/issue-while-installing-java-in-ec2-micro-instance/
---

When I tried to install Java in our 
[EC2 micro instance](http://aws.amazon.com/ec2/instance-types/), it stopped responding. There was no luck even after restarting the instance. I thought it might be a specific issue with that particular instance, so tried it again by bringing up a new micro instance and every time it was the same behaviour. I then googled and discovered it as a known 
[issue](https://bugs.launchpad.net/ubuntu/+source/linux/+bug/634487) reported back in September 2010. The suggested workaround is:* Bring up a small instance

	
* Install Java

	
* Convert it into micro instance.
Converting of the instance can be done using 
[API tools](http://aws.amazon.com/developertools/351), or from the 
[AWS Console](http://www.kinlane.com/2011/03/easier-scalability-with-aws/). But for me this option was never enabled from the console. I don’t know why. Of course, the API option would still work, I suppose.

But after looking at the bug in detail, I could see a solution which uses the linux 
[nice](http://linux.about.com/library/cmd/blcmdl1_nice.htm) command, and that did the trick for me. You can see the script as the last comment. The script is as follows:

#!/bin/bash
sudo add-apt-repository "deb 
[http://archive.canonical.com/](http://archive.canonical.com/) natty partner"
sudo apt-get update
#Accept the Java license.
for i in bin jdk jre; do
echo "sun-java6-$i shared/accepted-sun-dlj-v1-1 select true" | sudo debconf-set-selections
done
# convoluted way to install java. this seems to only work some times! Race condition?
# 
[https://forums.aws.amazon.com/message.jspa?messageID=199841#199841](https://forums.aws.amazon.com/message.jspa?messageID=199841#199841)
sudo nice --adjustment=19 apt-get install -y sun-java6-jre
