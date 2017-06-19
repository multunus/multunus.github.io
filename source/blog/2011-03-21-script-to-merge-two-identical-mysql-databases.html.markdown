---
title: Script to merge two identical MySQL Databases
date: '2011-03-21 07:43:51'
tags:
- leena
- technology
wp:post_id: '4177'
link: http://www.multunus.com/blog/2011/03/script-to-merge-two-identical-mysql-databases/
---

For one of the applications what we’re working on, we had a requirement to merge two DBs which have the same structure.

As tables in both DBs can hold same value for primary keys, we had to offset all the ID fields (including foreign key references). If the data from DB_2 has to be imported to DB_1, the steps we had to follow were as follows.

- Increment the ID field value (including the foreign keys). This has to be done across all the tables.
- Import the Data

It is tough to write the script manually especially if you have lot of tables and foreign key references. We used MySQL’s information schema to give us info about the tables and dynamically generated the script to do it across all the tables.

[Here](http://gist.github.com/875796) is the SQL script we wrote for the same.

It worked like charm and saved a lot of time for us.

**NOTE:** This will **not** take care of clashes for unique fields. Luckily though in our case there were no clashes for unique fields.
