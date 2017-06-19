---
title: 'Continuous Delivery: Building Android Library project'
date: '2011-11-04 14:55:20'
tags:
- leena
- android
- continuous-delivery
- process
- technology
wp:post_id: '4155'
link: http://www.multunus.com/blog/2011/11/continuous-delivery-building-android-library-project/
---

This post talks about how to build an Android Project using ant which depends on an Android Library project.

- Add default.properties in the library project and add android.library=truein the same.
- Run the command in the main Android Project `android update project –path . –library ../path-to-the-library/` **Note: This always has to be relative path.**
- Now running ant release should build the library project too.

**Note:** The android command mentioned in the second step adds an entry in the default.properties file. If you need to override that in different environments, override that in thelocal.properties. Even there, it has to be relative path, the absolute path will not work.
