---
title: Disabling callbacks in Rails 3
date: '2011-05-01 02:10:17'
tags:
- cap-leena
- rails
- technology
wp:post_id: '4174'
link: http://www.multunus.com/blog/2011/05/disabling-callbacks-in-rails-3/
---

It is common requirement to disable the callbacks like `after_save`, `after_create` etc while importing/migrating data. One way to avoid this is by directly importing the data into DB using a command like `mysqlimport`. But by doing that, the Rails validations etc will not work. We can disable the callbacks using the `skip_callback` method.  For eg:

```
User.skip_callback("create",:after,:send_confirmation_email)
```

The above will skip the `send_confirmation_email` callback fired on after_create.

To set the callback back:

```
User.set_callback("create",:after,:send_confirmation_email)
```