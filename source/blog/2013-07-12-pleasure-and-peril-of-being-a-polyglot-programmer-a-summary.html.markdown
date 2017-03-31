---
title: Pleasure And Peril Of Being A Polyglot Programmer - A Summary
date: '2013-07-12 02:33:00'
tags:
- cap-sandeep
- cap-manoj
- process
- technology
wp:post_id: '4139'
link: http://www.multunus.com/blog/2013/07/pleasure-and-peril-of-being-a-polyglot-programmer-a-summary/
---

Recently, we happened to watch a couple of videos from this year’s 
[Agile India Conference](http://http://2013.agileindia.org/). The 
[Agile India Conference](http://http://2013.agileindia.org/) is presenting 50GB of HD quality video recordings of all 95 Sessions packed in 13 DVDs. That’s a lot of great content waiting to be consumed!!
So we decided to write a series of blog posts covering some select topics, where we will be giving the summary of the video/talk. This is the first of those. Below is the summary of the talk given by 
[Dr.Venkat Subramaniam](http://www.nofluffjuststuff.com/conference/speaker/venkat_subramaniam) founder of 
[Agile Developer Inc.](http://www.agiledeveloper.com/) and the one who has trained and mentored thousands of software developers around the world.

One of the best ways to write better code is to read better code, not just the code but also books, articles, blogs and even hanging out with like-minded geeks. All these would influence our minds. So what we read is really something to think about.

Our thoughts are influenced by the languages we use. One important thing to think about is how many languages you use on a daily basis. The reason as to why this is important can be explained based on the sapir-whorf hypothesis which says that “Whatever you think is influenced by the language you speak” which is counter-intuitive to our thought that “We express what we think through our language”.

But as it turns out languages are deeply tied to cultures and cultures lead to idioms. Idioms are formed by connotations, history and some stories in the past. When you work with people speaking in that particular language they have an idiomatic style of using that language. It is the same in the case of Programming Languages as well.

Programming languages are not general-purpose anymore. We need to use different languages to solve different problems.

For example:* files => use xml

    
* data => use big data

    
* concurrency => many languages support

Nowadays, all the machines come with multi-cores. So in order to fully utilize these, the programming languages should support concurrency.

There is another side to concurrent programs, that is, handling shared mutability of resources. We tend to use or create objects in most languages. However, to support concurrency, we should use objects which are mutable, sharable or shared-mutable. But shared mutability is an evil when you have threads since the resultant errors are hard to track as compilers do not throw any errors or warnings. These programs first behave and then misbehave in most unpredictable ways, which is very hard to track or reproduce. So be careful and think twice before using shared mutability.

There is a myth where all corporate programmers believe that their language of choice can solve all kinds of problems, that is the heights of optimism they have! Let’s take the example of Java. How did the Java language come into existence? Everyone said it is “simple”. It is actually simpler than C++ language. They said there are no pointers in Java, but it had references. So Java language is actually a subset of C++. So it is better not stick to with one language and keep the option to use the right languages to solve problems in a simpler way.

There has been an explosion of new languages in the recent years. We have to choose or pick languages that make sense, but why? They give productivity and flexibility and they are fun! How are they fun? For example, creating a class and initializing its attributes needs separate getter and setter methods in Java, which will automatically be taken care of in Scala. Less typing, less code, but still getting the same job done.

It seems very restricted or limited if we are using only one language for everything we do. But what are the benefits of programming in multiple languages? Neal Ford coined the term “Polyglot Programmer”. The idea behind this is to use the sharpest tool that is available for doing what we do.

But why we want to use different tools is better explained by Ola Bini. He says we should use different languages for different levels of programs to achieve different results. In Lower Levels where you need infrastructure code or when you are writing a server or a service which requires very tight coupling and integration, you want languages that are “Statically typed”. In Middle Levels, where you need a little flexibility, “Dynamically typed” languages are your choice.

Below are a few examples that illustrate the Productivity Gain in different languages:


**1. Delegation**



Java


public class Manager {
    private Worker worker = new Worker();
    public void work() {
worker.work();
    }
    public void document() {
worker.document();
    }       
}


Groovy


class Manager {
    @Delegate Worker worker = new Worker()  
}
def bob = new Manager()
bob.work()
bob.document()


**2. Reading a File**



Java


private static String readFromFile(String filePath) {
    StringBuilder  builder = new  StringBuilder();
    try {
BufferedReader reader = new BufferedReader(
    new FileReader(filePath));
String aLine = null;
try {
    while((aLine = reader.readLine()) != null) {
        builder.append(aLine + System.getProperty(“line.separator”));
    }
} catch(IOException e) {
    e.printStackTrace();
}       
    } catch(FileNotFoundException e) {
e.printStackTrace();
    }   
    return builder.toString();
}


Ruby


File.open(file_path).read


**3. Running a System Process**



Groovy


println “svn help”.execute().text


**4. Working with Lists**


Suppose you have a list of names and you want to print them with comma separated, this is how it can be done in


Java


var names = [“John”, “Smith”, “Michael”];
for(int i =0; i < names.size; i++) {
    var lastElement = names.size;
    if(i != lastElement) {
System.out.print(names[i] + “, ”);
    }   
}


Ruby

This is as easy as


names.join(“, ”)


**CONCLUSION**


But it could turn into hell as well. Why would this be so, even though these languages support lots of cool stuff? Well, now comes the reality of the world we live in. Content with their present organisation, most programmers never feel the need to learn new languages.

Even if they do learn, they fail to convince their boss. Here, the problem is we programmers need to get convinced by the language first. The solution is to build lots of prototypes which will show the business value we derive by using these new languages. One should follow this disciplined approach of learning.
