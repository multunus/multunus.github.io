---
title: Blueprint - reverse engineering your server configuration
date: '2011-07-31 15:35:16'
tags:
- cap-leena
- continuous-delivery
- process
wp:post_id: '4166'
link: http://www.multunus.com/blog/2011/07/blueprint-reverse-engineering-your-server-configuration/
---

There are many tools like [Chef](http://wiki.opscode.com/display/chef/Home), [Puppet](http://projects.puppetlabs.com/projects/puppet) etc. to manage the server configuration, but there are not many which do the reverse i.e. create a configuration from an existing server. [Blueprint](https://github.com/devstructure/blueprint) does exactly the latter.

Its a set of python scripts which reverse engineer your server configuration. It stores the configuration locally in its own repository, but you can also:

- Create Puppet/Chef scripts
- Convert into a normal shell script
- Using [Blueprint I/O](https://github.com/devstructure/blueprint-io), store the configuration in remote server and pull it when required

It scans all the packages installed on the machine and adds those into the configuration. According to the [tutorial](https://devstructure.com/docs/tutorial.html), you can do this on a dedicated server or on virtual servers created using [VirtualBox](http://www.virtualbox.org/)etc, or on cloud servers like [Amazon EC2](http://aws.amazon.com/ec2), [Rackspace](http://www.rackspacecloud.com/cloud_hosting_products/servers) etc.

I’ve tried it on a dedicated server (i.e. our CI server) as well as on an EC2 server. I faced a couple of issues, but with their help (see issues [71](https://github.com/devstructure/blueprint/issues/71) and [63](https://github.com/devstructure/blueprint/issues/63)), got those fixed.

While bringing up the EC2 instance, you can give the shell script created by Blueprint as user data, provided the size of the script is below 16384 bytes.

Its really an awesome tool. I got the reference to it from [Ruby5](http://ruby5.envylabs.com/episodes/189-episode-186-june-24-2011/stories/1668-blueprint).
