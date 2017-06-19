---
title: API Versioning using Versionist
date: '2014-04-15 00:21:10'
tags:
- sandeep
- rails
- technology
link: http://www.multunus.com/blog/2014/04/api-versioning-using-versionist/
---
A couple of months back, we implemented versioning in one of our projects. There are many tools available for versioning APIs like [grape](https://github.com/intridea/grape "grape"), [acts_as_api](https://github.com/fabrik42/acts_as_api "acts_as_api"), [rocket_pants](https://github.com/Sutto/rocket_pants "rocket_pants") and of course [versionist](https://github.com/bploetz/versionist "versionist"). After a bit of research, we went ahead with versionist and so far its been working well for us.

## Why do you need Versioning?

The reasoning behind API versioning is simple - to avoid breaking existing clients. Once you publish your API, people are going to start writing software that depends on your API. And every time you make a change in your API, there is a chance of breaking their software. For example, consider an API which gives user profile details. Let's say it has an attribute called `created_on` which returns the date on which the profile was created. Suppose you have to also return the time along with the date, and hence you rename the column to `created_at`. This will break any application that uses this API, especially if it uses the `created_on` attribute. Hence, once an API is published, it’s frozen. You can’t change that code, or else you’ll mess up the working of all those who are using that API. The solution for the above problem is to create new versions of API and introduce your changes there and not in the already published ones. Hence there will be two versions of the API say v1 and v2, where v1 is the original API and v2 is the new API where the latest changes are made. But you may have to do some tweaks in the old APIs in order to ensure that they still function the same way. For instance in the above example, after renaming the column to `created_at`, it will break the old api. So you need to tweak your old api to support the `created_on` attribute.

## Versioning using Versionist

Versionist is a Rails plugin for versioning Rails-based APIs. After installing the Versionist gem, you can version your current API and set it as the default by using the Versionist generators. **_Versionist supports 3 versioning strategies:_** 1) HTTP header - This strategy uses an HTTP header to request a specific version of your API.

<pre>Accept: application/vnd.mycompany.com; version=1,application/jsonGET /foos</pre>

2) Request parameter - here request parameter is used to request a specific version of your API.

<pre>GET /foos?version=v2</pre>

3) Path - This uses a URL path prefix to request a specific version of your API.

<pre>GET /v3/foos</pre>

In this post, I'll go through the _path based method of _versioning of APIs using Versionist. **STEPS to version your current API using the path based versioning strategy:** _STEP 1_

<pre>rails generate versionist:new_api_version v1 V1 --path=value:v1 --default</pre>

This will create all the necessary directory structures. _STEP 2_ Now, move all the controller files into the new folder and do not copy the application controller. For specs, only the controller specs need to be moved, there will already be a new folder for the specs in the controller directory. _ STEP 3_ Manually create a folder with the same version (v1) for  the views and  move all the files related to the controllers into that folder. _ STEP 4_ Modify all the controller class names to use namespacing and to reference the respective base controllers.

<pre>#Controller:
class V1::MyController < V1::BaseController
	...
end</pre>

## Subsequent Versioning

Now if you want create version 2 from version1: _STEP 1_

<pre>rails generate versionist:copy_api_version v1 V1 v2 V2</pre>

**IMPORTANT:** This will duplicate the existing version to create the starting point for the next version. There is one thing that gets duplicated which shouldn't be i.e the default version setting `{:default => true}` in `config/routes`. So we have to remove this as there cannot be two default versions. _STEP 2_ The views will not be duplicated by this command, so create a copy of the folder and name it appropriately

## Further Steps

API versioning is a nice way to introduce changes in your application without affecting existing clients. However, an API is not going to be completely stable, inevitable changes will always come in your way. Hence, it is very important you are prepared for such changes. Below are a couple of best practices that helps you in that direction:

1.  Document your APIs
2.  Have a deprecation schedule i.e give sufficient time for the users of your API to migrate to new version.

## References

*   [http://railscasts.com/episodes/350-rest-api-versioning](http://railscasts.com/episodes/350-rest-api-versioning)
*   [https://github.com/bploetz/versionist](https://github.com/bploetz/versionist)
