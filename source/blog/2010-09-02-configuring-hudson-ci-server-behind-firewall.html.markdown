---
title: Configuring Hudson CI server behind firewall
date: '2010-09-02 14:44:17'
tags:
- cap-leena
- continuous-delivery
- process
- technology
wp:post_id: '4183'
link: http://www.multunus.com/blog/2010/09/configuring-hudson-ci-server-behind-firewall/
---

When firewall was introduced within our local network, the Hudson server stopped working with the error:

```
javax.jmdns.impl.tasks.Prober run
WARNING: run() exception
java.io.IOException: Operation not permitted
at java.net.PlainDatagramSocketImpl.send(Native Method)
at java.net.DatagramSocket.send(DatagramSocket.java:625)
at javax.jmdns.impl.JmDNSImpl.send(JmDNSImpl.java:1200)
at javax.jmdns.impl.tasks.Prober.run(Prober.java:163)
at java.util.TimerThread.mainLoop(Timer.java:512)
at java.util.TimerThread.run(Timer.java:462)
```

And when you access hudson in browser, it stays with the message **“Please wait while Hudson is getting ready to work….”** forever.

Initially I thought the problem might be because the ports which are required by the Hudson server i.e. 8080 and 5353, were not opened in the Firewall. I opened those, but the error remained.

After googling for sometime, I could find similar issues being reported here:
[http://issues.hudson-ci.org/browse/HUDSON-7129?page=com.atlassian.streams.streams-jira-plugin:activity-stream-issue-tab](http://issues.hudson-ci.org/browse/HUDSON-7129?page=com.atlassian.streams.streams-jira-plugin:activity-stream-issue-tab)

And the issue got fixed by adding

```
-Dhudson.DNSMultiCast.disabled=true
```

to the java command as follows:

```
java -Dhudson.DNSMultiCast.disabled=true -jar hudson.war --httpPort=8080
```