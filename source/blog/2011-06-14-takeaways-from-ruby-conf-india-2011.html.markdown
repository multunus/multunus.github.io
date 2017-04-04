---
title: Takeaways from Ruby Conf India 2011
date: '2011-06-14 13:58:56'
tags:
- cap-leena
- process
- rails
- technology
wp:post_id: '4173'
link: http://www.multunus.com/blog/2011/06/takeaways-from-ruby-conf-india-2011/
---

I know its been almost two weeks since its all over, things may not be fresh in mind. And all of us were very busy with “go live” for one of our client projects. But as its “better later than never”, I am putting my thoughts about the recently concluded RubyConf held in Bangalore on 28th and 29th of May 2011.

There were quite a few presentations this year which I felt were very useful for me. Those are:
- [Ruby Plus Rails Plus Your Application Minus Rails](http://rubyconfindia.org/2011/presentations/brianGuthrie-RubyPlusRailsPlusAppMinusRails.key) by Brian Guthrie
- [Test Load Balancer: Rocket Booster for your Build](http://rubyconfindia.org/2011/presentations/janmejay-TLB-rocketBoosterForYourBuild.pdf) by Janmejay Singh and Pavan
- [Continuous Delivery](http://rubyconfindia.org/2011/presentations/brianGuthrie-ContinuousDelivery.key) in Ruby by Srushti Ambekallu and Brian Guthrie

And its needless to say that the keynotes by Yehuda Katz, Chad Fowler, Nick Sieger and Ola Bini were awesome too. Especially
[ Chad Fowler’s session](http://rubyconfindia.org/2011/presentations/chadFowler-service.key) gave a new perspective on “Service” and who should be considered as a “Customer”. And Nick Sieger’s closing note gave a different perspective on how to contribute back to the community by conducting workshops and with [Kidsruby](http://kidsruby.com/).

So whats next? Yes, implement the stuff we learned. So these are the immediate action items for us:

- More automation for the entire release mechanism. We do have a CI server and do have a Cap script for deployment. But we do not have a “one click deployment” process. A ”[Build pipeline](http://www.google.com/url?sa=D&q=http://code.google.com/p/build-pipeline-plugin/)” plugin for Hudson should help us achieve that.
- Tools like [Chef](http://wiki.opscode.com/display/chef/Home)/[Puppet](http://www.puppetlabs.com/puppet/introduction/) for server configuration management. We’ve tried [rubber](https://github.com/wr0ngway/rubber/wiki), but are yet to use it for any production setup.
- Use [TLB](http://test-load-balancer.github.com/) to run tests in parallel.  Setup seem to be pretty straightforward. This will be a huge help when you are doing many deployment in a day.

**Update:** One talk I missed in the list was [Designing High Throughput Web Service Clients](http://rubyconfindia.org/2011/presentations/sherinC-DesigningHighThroughputWebServiceClients.key) by Sherin. He was able to convey the problems he faced and how he went ahead and solved those.