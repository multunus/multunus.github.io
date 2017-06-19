---
title: CoffeeScript and Rails 3.0 - Quick setup
date: '2011-06-23 14:10:58'
tags:
- manoj
- rails
- technology
wp:post_id: '4172'
link: http://www.multunus.com/blog/2011/06/coffeescript-and-rails-3-0-quick-setup/
---

I have been hearing a lot about CoffeeScript nowadays as you must have as well. Yes, it is built into Rails 3.1 by default. However I’m still working on a Rails 3.0 project, where I’m thinking of starting to use CoffeeScript. So, this blog post concentrates on how to quickly setup CoffeeScript into your existing Rails 3.0 project. For more details refer to the links at the bottom of this post.

**Step 1:** Add these to Gemfilegem 'therubyracer', :require => false

```
gem 'barista'
```

‘barista’ gem takes care of installing coffee-script gem and its dependencies. ‘therubyracer’ is the javascript engine for ruby.

**Step 2:** Run Bundle Install to install coffee-script gem and other required gems

```
bundle install
```

**Step 3:** Generate Barista initializer file config/initializers/barista_config.rb

```
rails generate barista:install
```

**Step 4(optional):** Lets configure barista to compile all coffeescript code into public/javascripts/coffeescripts/ folder (this is optional, if not configured compiled code will be placed under public/javascripts folder) config/initializers/barista_config.rb, line 7.

```
#Change the output root, causing Barista to compile into public/coffeescripts
c.output_root = Rails.root.join("public", "javascripts", "coffeescripts")
```

**Step 5:** Create a folder ‘coffeescripts’ under app/ to have all your coffeescripts. All file names should end with .coffee
Example: app/coffeescripts/user.coffee

```
jQuery ->
 $('form').validate()
```

**Step 6:** Above code will be complied to JS file under public/javascripts/coffeescripts/user.js. Example code:

```
/*  DO NOT MODIFY. This file was compiled Thu, 23 Jun 2011 07:13:34 GMT from
 *  /home/manoj/my_rails_app/app/coffeescripts/user.coffee
 * /
 (function() {
  jQuery(function() {
   return $('form').validate();
  });
}).call(this);
```

**Step 7:** Include these coffeescript js files in your view/layouts using include tag.

```
<%= javascript_include_tag 'application', 'coffeescripts/user'>
```

And you’re done with setup. As the complied code is neat JS code, your page should continue to work fine :) Going forward you can start using CoffeeScript for writing JS code.

For deployment we can use the `barista:brew rake` task in the Capistrano script using an “after” hook


### References used to create above steps

- [http://jashkenas.github.com/coffee-script/](http://jashkenas.github.com/coffee-script/)
- [http://blog.nicolasblanco.fr/2010/12/13/you-should-already-use-coffeescript-in-your-rails-app/](http://blog.nicolasblanco.fr/2010/12/13/you-should-already-use-coffeescript-in-your-rails-app/)


### Convert existing JS to coffeescript

- [http://ricostacruz.com/js2coffee/](http://ricostacruz.com/js2coffee/)


### Setting up Emacs with coffee-mode

- [http://ozmm.org/posts/coffee_mode.html](http://ozmm.org/posts/coffee_mode.html)
