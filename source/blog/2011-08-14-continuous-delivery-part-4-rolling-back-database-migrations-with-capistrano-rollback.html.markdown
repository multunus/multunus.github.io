---
title: 'Continuous Delivery - Part 4: Rolling back database migrations with Capistrano rollback'
date: '2011-08-14 08:22:40'
tags:
- cap-leena
- continuous-delivery
- process
- technology
link: http://www.multunus.com/blog/2011/08/continuous-delivery-part-4-rolling-back-database-migrations-with-capistrano-rollback/
---

According to the book [Continuous Delivery](http://www.amazon.com/gp/product/0321601912?tag=contindelive-20), the database also should be under version control, and Rails allows us to achieve this with ActiveRecord Migrations. Even though [Capistrano](http://www.capify.org/)  can run the migrations automatically with its `deploy` command, its `deploy:rollback` task does not rollback the DB migrations automatically. I’ve created a small capistrano [recipe](https://github.com/multunus/capistrano-db-rollback) which can take care of rolling back migrations. The assumptions made are:

- All the migrations have the down method defined properly. You can check for this by running `rake db:migrate:redo`
- The schema.rb exists in the repository. This is one of the [suggested practices](http://guides.rubyonrails.org/migrations.html#schema-dumps-and-source-control) for Rails.

The script is very simple, it extracts the version from the `schema.rb` and runs the `rake db:migrate` with the same version. The task gets run automatically along with `deploy:rollback`. This approach should work for most small and medium complexity Rails apps.

Continued..

- [Continuous Delivery – Part 1: Our Jenkins Build Pipeline setup](http://www.multunus.com/2011/07/continuous-delivery-using-jenkins-build-pipeline/)
- [Continuous Delivery – Part 2: Code metrics with metrical](http://www.multunus.com/2011/07/continuous-delivery-code-metrics-with-metrical/)
- [Continuous Delivery – Part 3: Running custom rake tasks during deployment](http://www.multunus.com/2011/07/continuous-delivery-contd/)
