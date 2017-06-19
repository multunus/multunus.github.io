---
title: Polymorphism - Ruby vs Clojure
date: '2016-11-16	 11:54:19'
tags:
- kp
- technology
link: http://www.multunus.com/blog/2016/11/polymorphism-functional-vs-object-oriented/
---

One advantage of learning Clojure is that it gives you a different perspective for looking at well-known programming idioms. Polymorphism is one such example.

Roughly speaking Polymorphism is a pattern where a common interface exists for different implementations of the same functionality. The decision as to which one of these implementations is selected usually decided (automatically without any plumbing code) based on the type of the object.

Let's take a look at a more concrete example.

## Ruby

Let's consider a superficially simple program which exports resumes into different formats like CSV, PDF etc.


~~~ruby
Class Resume
 attr_accessor :name, :highest_qualification, :dob
end
~~~

A simple solution without using polymorphism would be the below

~~~ruby
Class ResumeExporter
  def initialize(format)
    @format = format
  end
  def export(resume)
    case format
    when :csv
       export_to_csv(resume)
    when :pdf
       export_to_csv(resume)
    end
  end
end
~~~


The downsides to this approach are:


* It does not follow [open/closed principle](https://en.wikipedia.org/wiki/Open/closed_principle) - You need to modify an existing method for adding support for new formats.
* Duplication -  if there is some another functionality similar to export that is different for different formats we will have to repeat the same switch statement there.


A better solution


~~~Ruby
class ResumeExporter
  def initialize(format)
    @exporter = Exporters.for(format)
  end
  def export(resume)
    @exporter.export(resume)
  end
end
~~~


~~~Ruby
module Exporters
   def self.for(format)
      lookup_exporter(format)
   end

   class CsvExporter
     def export(resume)
       # create csv
     end
   end

   class PdfExporter
     def export(resume)
       # create PDF
     end
   end
end
~~~


There is nothing novel about this, this is a very common pattern in object-oriented languages.


The interesting bit is the export method.
~~~ruby
 @exporter.export(resume)
~~~

We are using a common interface "export" and depending on the type the right implementation gets called. The idea of polymorphism and Object orientation seems very intermixed.


How would you achieve the same in a programming language without objects and classes? Let's look at an example in Clojure

## Clojure

~~~clojure  
(ns resume-exporter.core)


(defn export
  [resume format]
  (case format
    :csv (export-csv resume)
    :pdf (export-pdf resume)))

~~~


This solution is very similar to the first Ruby solution and this has all the similar downsides as well. The second solution is where the approaches start to diverge a lot.

In Ruby polymorphism was entirely based around creating separate classes for different exporters. That approach does not translate very well to Clojure because there are no classes in Clojure in the first place.


Let's take a relook at what the Ruby polymorphic approach is doing a little more closely.


* We call the export method on an instance of the exporter without really caring about what the actual concrete type of the exporter.
* There are different implementation of the export method for each different type of format
* Ruby's object oriented system correctly picks the right implementation based on the objects. In other words, Ruby's object system act as a dispatcher which dispatches a method call to the right implementation based on the type.


If we look at our first Clojure solution actually all these traits already exist. The only thing that missing is the method dispatch based on the type. Clojure multi-methods provide the same functionality. Let's try rewriting our solution using multi-methods


~~~clojure  
(ns resume-exporter.core)


(defmulti export-resume (fn [_ format] format))


(defmethod export-resume :csv [resume _]
  (csv-impl))
(defmethod export-resume :pdf [resume _]
  (pdf-impl))




(defn export
  [resume format]
  (export-resume resume format))

~~~


what does "defmulti" do here?

It takes two arguments. The first one is the function name "export-resume". The second one is a function which just returns the value of the second argument.

It essentially creates a dispatching function (The common interface similar to the export function in the ruby implementation) which will dispatch a function call to a matching implementation.

~~~ruby
(defmulti export-resume (fn [_ format] format))
~~~

How do you decide what is matching? This is where the second argument to "defmulti" comes into the picture.

The second argument is a function which will be called by the dispatching function with the arguments and return value of this function is matched against values mentioned as the second argument to "defmethod".

## Conclusion

Functional and objectOriented languages tackle the [expression problem](http://wiki.c2.com/?ExpressionProblem) differently.

The approach that ruby takes is a common pattern among the object-oriented languages.

The advantage of the Clojure solution is that it enables run-time polymorphism without having to create object hierarchies.

Another advantage of the Clojure solution is that here the dispatch is not limited to the type of the object, it can be based any arbitrary attributes of the input argument.
