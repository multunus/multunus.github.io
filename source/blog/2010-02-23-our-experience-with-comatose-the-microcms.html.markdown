---
title: Our experience with Comatose - the MicroCMS
date: '2010-02-23 13:46:44'
tags:
- vaidy
- rails
- technology
wp:post_id: '4184'
link: http://www.multunus.com/blog/2010/02/our-experience-with-comatose-the-microcms/
---
In one of our projects which is primarily a web application, the client had asked that we go ahead and make as much of the copy available across the site, editable. This included not just copy in static pages such as “About Us”, but also copy in dynamic pages. I mean things like tooltips for fields in forms, for example.

We first looked at [RadiantCMS](http://radiantcms.org/), with the intention of building our web application on top of it. But then decided to instead build our web app from scratch and then make parts of it editable using [Comatose](http://github.com/darthapo/comatose) [which is a “MicroCMS”]. This way, we have more flexibility to add features to the web app using the Rails API and available plugins, rather than being constrained by RadiantCMS system.

### Things we liked about Comatose:

- Its implemented as a Rails plugin - which makes it a breeze to install  
- Implementing Single Sign On is also simple. Because it works well with the 
[restful_authentication plugin](http://agilewebdevelopment.com/plugins/restful_authentication).  
- Comatose allows rendering of pages inline from your application view - just like rendering a partial in a Rails app. To include an “editable” tool tip within a form, something as simple as the following is enough:
- [ror]<%= render :comatose=>’about’ %>[/ror]

There’s of course a lot more you can do with this plugin. Check it out.

### Now for the bad part :-(

- The main issue is font inconsistency. There are some options for setting the font size, but they don’t work as expected - because the CSS styles are inherited from our app.
- In production mode, there is a noticeable delay between making changes in the CMS and the updated content showing up on the main site. Not sure why this is the case.
