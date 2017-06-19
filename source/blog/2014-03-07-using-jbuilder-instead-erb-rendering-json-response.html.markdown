---
title: Rendering JSON responses using Jbuilder
date: '2014-03-07 14:26:15'
tags:
- sandeep
- rails
- technology
wp:post_id: '4635'
link: http://www.multunus.com/blog/2014/03/using-jbuilder-instead-erb-rendering-json-response/
---

When building JSON APIs for Rails applications, we used to build it using the following methods:


* respond_toblock and 
as_json in the controller or model

    
* By hand crafting the JSON response in our ERB view templates


But as these applications grew, the JSON APIs used in these applications became complex and we found these methods to be inefficient. Hence we started looking for alternatives and that is when we considered [Jbuilder](https://github.com/rails/jbuilder).


In this post, I have shed some light on the problems involved in these methods and how Jbuilder can help you overcome those problems.


**Problems in rendering JSON**


1) using respond_to block and as_json

This is probably the simplest way to build JSON APIs, all you have to do here is to use 
respond_to block in the controller action and render the appropriate model. For example, if your application has many articles and you want a JSON representation of a particular article, then you would probably have this code in the 
show action of articles controller:


def show
  @article = Article.find(params[:id])
  respond_to do |format|
    format.html
    format.json { render json: @article }
  end
end

But the JSON returned includes all of the article's attributes and you cannot customize it. This is where 
as_json comes in - 
as_json is used to create the structure of the JSON as a hash, and the rendering of that hash into a JSON string is left up to 
[ActiveSupport::json.encode](http://api.rubyonrails.org/classes/ActiveSupport/JSON/Encoding/Encoder.html).

You can use
as_json on the article and customize the response. So if you wanted only 
id, 
name and 
content fields from the article, you can do something like this:


def show
  @article = Article.find(params[:id])
  respond_to do |format|
    format.html
    format.json { render json: @article.as_json(only: [:id, :name, :content]) }
  end
end

This is still fine but the moment the complexity of your customization increases, the code starts getting ugly. For example, apart from the three fields shown in the above example, if you also wanted the author of the article and three fields from comments of the article to be included in the JSON response, you could do something as follows:


def show
  @article = Article.find(params[:id])
  respond_to do |format|
    format.html
    format.json { render json: @article.as_json(only: [:id, :name, :content], include: [:author, {comments: {only:[:id, :name, :content]}}]) }
  end
end

You can use 
as_json in the model instead of controller but it wouldn't be much better there either. It's like trasferring the ugly code from controller to model.


2) using ERB templates


Here, we have to manually create or craft the JSON in the ERB template to be rendered and it becomes pretty hard to manage it when the structures are huge. When there are conditionals involved while rendering then also it becomes difficult to maintain. Also, when you are looping a collection you have to ensure that there is no comma after the last element. And certainly, you don't want to be doing things like these.


**Using Jbuilder**


[Jbuilder](https://github.com/rails/jbuilder) is a template engine for rendering JSON responses. It gives you a simple DSL for declaring JSON structures that simplifies managing giant hash structures. You can have Jbuilder in your applications through its 
[gem](http://rubygems.org/gems/jbuilder).

Just to demonstrate how Jbuilder helps solve the problems discussed so far:

In the 
articles controller you can remove the 
respond_to call and revert to the default behavior which is to look for a template of the requested format. In this case it will look for a template named 
show.json.jbuilder, and the show action in the 
articles controller becomes:


def show
  @article = Article.find(params[:id])
end

Next, you can create the view template 
show.json.jbuilder. In this view template, you can use Ruby code to define the JSON output. You will have access to the json object on which you can define attributes.


json.id @article.id
json.name @article.name
json.name @article.content

Instead of listing out each attribute separately, we can call 
extract! on the JSON object and pass in the object and a list of the methods or attributes we want to call against it:


json.extract! @article, :id, :name, :content


There's also an alternative syntax which works in Ruby 1.9 or later:


json.(@article, :id, :name, :content)


Now, in order to include author of the article and comments of articles, it is as simple as:


json.(@article, :id, :name, :content)
json.(@article.author, :id, :name)
json.comments @article.comments, :id, :name, :content

Jbuilder allows you to do more complex things than just listing down the attributes. For example if you want to assign a URL to the author, you can just pass a block to the author and call helper methods inside the block:


json.(@article, :id, :name, :content)
json.author do |json|
    json.(@article.author, :id, :name)
    json.url author_url(@article.author)
end
json.comments @article.comments, :id, :name, :content

That's not all - some of the other useful features of Jbuilder are as follows: rendering partials, rendering collection of partials, 
[Fragment caching](http://guides.rubyonrails.org/caching_with_rails.html) and Key formatting. Key formatting can be used to convert keynames from the standard ruby format to camel case.

All these make Jbuilder a very good alternative to some of the traditional methods especially if the JSON representation in your APIs are complex. i.e, it involves a high degree of customization, it has a lot conditionals or nesting.


**References**


* [https://github.com/rails/jbuilder](https://github.com/rails/jbuilder)

    
* [http://railscasts.com/episodes/320-jbuilder?view=asciicast](http://railscasts.com/episodes/320-jbuilder?view=asciicast)
