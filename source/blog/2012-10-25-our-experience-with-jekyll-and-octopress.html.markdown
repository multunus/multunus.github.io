---
title: Our experience with Jekyll and Octopress
date: '2012-10-25 08:30:05'
tags:
- cap-leena
- technology
wp:post_id: '4146'
link: http://www.multunus.com/blog/2012/10/our-experience-with-jekyll-and-octopress/
---

We recently moved from Wordpress to Jekyll for our website because we found it harder to maintain our site with Wordpress. We also hit performance bottlenecks with Wordpress and were clueless on how to fix those. Jekyll made a lot more sense as it uses Ruby, which we are very comfortable with as compared to PHP. And hardly any performance bottlenecks because the entire site is static, and so no DB tuning required :)

## What is Jekyll?
Jekyll is a simple, blog aware, static site generator created by 
[Tom Preston-Werner](http://tom.preston-werner.com/), founder of GitHub. It takes a template directory (representing the raw form of a website), runs it through Textile or Markdown and Liquid converters, and spits out a complete, static website suitable for serving with any of your favorite web server. This is also the engine behind GitHub Pages, which you can use to host your website from GitHub source. We chose to use 
[Octopress](http://octopress.org/), a framework built on top of Jekyll. It comes with lot of features such as:

- A semantic HTML5 template
- A Mobile first responsive layout (rotate, or resize your browser and see)
- Built in 3rd party support for Twitter, Google Plus One, Disqus Comments, Pinboard, Delicious, and Google Analytics
- An easy deployment strategy using Github pages or Rsync
- Built in support for Rack servers
There are lot of 
[3rd party themes](https://github.com/imathis/octopress/wiki/3rd-Party-Octopress-Themes) available with Octopress which you can chose. This helped us to convert the existing Wordpress site to Jekyll.

## How does it work?

Every page that you create in Jekyll will have the following sections:
- [YAML frontmatter](https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter) on top of every file which will contain data in the YAML format which is processed by Jekyll. The mandatory ones are “title” and “layout” which decides the title and layout of the page respectively.
- [Liquid](https://github.com/Shopify/liquid) markup for the templating with the in markdown format or HTML format. There is support for 
[Mustache](https://github.com/plusjade/mustache-with-jekyll) too.	
- Layouts for the pages.
- Plugins - this is for customizing the content. You can see more details about how to write plugins 
[here](https://github.com/mojombo/jekyll/wiki/Plugins).

## “Aha” Moments
There were many “Aha” moments throughout the migration, I am putting those top ones which came to my mind while writing.

### Responsiveness
Bootstrap makes it so much easier to do the regular stuff - modals, navigation bar, tooltips, etc. And with a little more effort you get responsiveness for free.

### Asides for Featured posts
Asides are the way you can add sidebar to your pages in Octopress. So if you want something to be displayed on the navbar, add a new aside file and include it in your layout. We had the requirement to display certain posts as “featured” and needed to be shown them in all pages. The only thing to do was to add ‘featured: true’ in the YAML front matter of the corresponding posts and create an aside as follows and include it in your layout.

### Integrating with comments
It was as simple adding “comments: true” in the posts which you want the comments to be displayed for.

### Keeping the blogs as unpublished
Keep “published: false” in the YAML frontmatter of the post. It won’t show up in the post list.

### Permanent Links for Posts
Need to change the way the URL for blogs are being displayed? Just change the permlink in _config.yml

## Where things can take time


### Figuring out how Jekyll does the magic
It took a while for us to figure out how Jekyll does the “magic”. Getting a hang of the layouts, YAML Front matter, Liquid Templating, Asides in Octopress can take time. If you need to customize, writing the plugins and what type of plugin to write can also take little time initially.

### Learning curve for Sass and Twitter bootstrap
As mentioned earlier, Octopress uses [Sass](http://sass-lang.com/) and we chose a theme which uses 
[Bootstrap](http://twitter.github.com/bootstrap/). There would be a learning curve if you are new to both.

### Migrating content from Wordpress
There are quiet a few plugins written to [migrate](https://github.com/mojombo/jekyll/wiki/Blog-Migrations) data from other blogging platforms including Wordpress. This worked well for blogs, but will not take care of downloading the related images and also the pages other than blogs. We used the tool [exitwp](https://github.com/thomasf/exitwp), which will try to migrate as much data as possible including downloading of images. But it does not take care of updating the posts with the new URL for the images, so that was a task that we had to take up manually.

### Contact Us Form
There are Wordpress plugins that can help you create a contact us form or a suggestion box. But how can you do that for a static website? You’ve two options:

- Create an app with an API for saving the contact details
- Use some existing services which can persist form data
We went with the second option and after a lot of shopping around, we finally settled for none other than 
[Google Forms](http://www.google.com/google-d-s/forms/). This automatically took care of getting an email notification for every form submission. Some of the issues that we fixed or workarounds we had done are:
- We followed the instructions mentioned 
[here](http://morning.am/tutorials/how-to-style-google-forms/) to customize the look and feel of the form.
- Added a hidden iframe to not to show the page from google form on submit
- Added front end validations for mandatory fields, to ensure that if and when the form is submitted, the submission would be successful.

### Team Page
As any company’s website, we also needed a team page - A visual index of people and also separate pages of individual profiles. We found an excellent [plugin](https://github.com/flatterline/jekyll-plugins#company-team), that seemed to do just what we wanted. But since we had used Octopress, the directory structure was slightly different from what the plugin had expected. So we had to fiddle around with the plugin to understand how it worked and modify it to work for us. In the end, adding a new person to the team was as easy as adding a new yml file for that person.

## Our contribution back
[We’ve created a plugin](https://github.com/multunus/jekyll-author-plugin) for listing posts by a certain author.

## Things, I felt, missing

- Debugging - I found it extremely tough to debug Jekyll. Tried both 
[ruby-debug](http://bashdb.sourceforge.net/ruby-debug.html) and 
[pry](http://pryrepl.org/), but somehow both does not seem to be working. The tough part I found was how it suppresses exceptions. If there is an error in any generator, it just continues without even logging it.
- Live Editor for Octopress using which you can write the blog and automatically publish it. If you are using only Jekyll with GitHub pages, 
[prose.io](http://prose.io/) would work for you.

## Summary
I would highly recommend Jekyll and/or Octopress for creating a company website especially if you are a software development firm comfortable with Ruby. It combines the power of Ruby, Templating and YAML using which it generates a static web site for you. Octopress helps you to quickly layout the foundation for your website on top of which you can easily build. A huge thanks to the awesome Ruby community and GitHub community without whom the entire project might not have been possible.

## References
[http://vitobotta.com/how-to-migrate-from-wordpress-to-jekyll/](http://vitobotta.com/how-to-migrate-from-wordpress-to-jekyll/ )

**Update:** I’ve written [another post](http://www.multunus.com/blog/2013/05/continuous-deployment-of-octopress-website-with-prose-io-and-jenkins/) about how to use Prose.io and Jenkins for Live Editing and Continuous Deployment.
