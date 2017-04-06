---
title: Abstractions in Ruby and Clojure
date: '2016-12-22	 11:52:19'
tags:
- cap-kp
- technology
link: http://www.multunus.com/blog/2016/12/abstractions-ruby-clojure/
---
One of the primary reasons I find it much easier to write Clojure is just the fact that you get to model your problems just using simple functions and values. This method seems to naturally fit my mental model of solutions to programming problems.

One of the questions that usually comes up when the discussing the above with someone who is relatively new to functional programming (Clojure or otherwise) is how can you even have good abstractions without Objects. In Object Oriented programming the idea of abstractions seems strongly dependent on objects which encapsulate a certain state and behavior into a single entity.

Before we go into the details of how or whether it is even possible to create abstractions in Clojure. Let's come up with a definition of what do we even mean by an abstraction in the context of programming.

### Define Abstraction

From Wikipedia:

~~~
In software engineering and computer science, abstraction is a technique for arranging complexity of computer systems. It works by establishing a level of complexity on which a person interacts with the system, suppressing the most complex details below the current level
~~~
Another definition from Uncle Bob ( Robert C. Martin):

~~~
Abstraction is the elimination of the irrelevant  and the amplification of essential.
~~~

Something that is tangential to our current discussion is the fact that there are times when we unknowingly confuse abstraction with indirection and complicate things without no actual benefit. [This is good discussion on this subject](https://zedshaw.com/archive/indirection-is-not-abstraction/)


One good way to internalize and understand how the ability to create abstractions does not necessarily require objects or classes is to compare a common and simple abstraction that is implemented in Ruby and Clojure. Although we use these specific programming languages, most of this should apply to a lot of functional and object-oriented languages combinations. As an example, we pick the abstraction of a Collection


### Collection

A Collection is one of the most common abstractions we tend to use. Most programming languages support multiple collections like things Arrays, Lists, HashMaps, Vectors etc.

Depending on our use case we will have to select one of these types to store our data. What we don't want is for the code which operates at a higher level to actually have the need to know the specific type of collection they are working with.

Before we go into the details as to how this is achieved in Clojure or Ruby. Let's take a look at what is the collection abstraction about. The collection abstraction is mostly about, well a collection of things. This is most essential aspects of a collection, everything else is a detail that is not very important from the context of a general collection abstraction. Things like how the collection is stored, whether they have linear or random access to access to their elements. What is the algorithmic complexity of adding or removing an element from them? etc.

### Ruby

Ruby provides a lot of collection like classes such as Array, Set, Hash etc. A common collection abstraction ruby supports is mostly based on the [enumerable module](https://ruby-doc.org/core-2.3.3/Enumerable.html). To act like a collection a new collection like class needs to do is implement the "each" function and include the enumerable interface.

~~~Ruby
a = [1, 2, 3]
b = Set.new [1, 2, 3]
c =  {:a => 1, :b => 2}

# one of the methods supported by the enumerable interface is the take method. It returns n number of elements from the collection the order of the elements depends on the specific collection implementation.
2.3.0 :021 > a.take(2)
 => [1, 2]

2.3.0 :030 > b.take(2)
 => [1, 2]

2.3.0 :032 > c.take(2)
 => [[:a, 1], [:b, 2]]



~~~

This seems fairly straight forward we have different classes for each collection they can provide a custom implementation of the each method and that makes them compatible with any code that expects a collection.


### Clojure

Clojure too implements a bunch of Collection types like Lists, Vectors, Maps, Set etc. The common abstraction that Clojure provides for these types is the sequence abstraction(seqs). A seq is a logical list. Clojure uses the ISeq interface to allow many data structures to provide access to their elements as sequences. The seq function yields an implementation of ISeq appropriate to the collection.

The seq interface consists of the following functions
* (first coll) - return the first element.
* (rest coll) - returns a logical collection of the rest of elements (not necessarily a seq). Never returns nil
* (next coll) - returns a seq of the rest of the elements, which will be nil if no elements remain.
*(cons item seq) - construct a new sequence with the item prepended to seq

Just like the methods in the enumerable class in Ruby there are lot functions in the clojure.core [package which works on the sequence abstraction](http://clojure.org/reference/sequences). These functions call the seq function to get a sequence view of the particular collection. Most of these functions automatically call the seq function before doing anything else with them.

~~~Clojure
(def a [ 1 2 3])

(def b { :a 1 :b 2 :c 3})

(def c #{1 2 3})

(take 2 a)
;; (1,2)

(take 2 b)
;;([:a 1] [:b 2])

(take 2 c)
;;(1 3)
~~~




### Summary
Although in Clojure you don't package state and behavior as you would in a typical object-oriented language. It provides tools for implementing polymorphic behavior where you can specify how a method in an abstract interface is implemented for a specific data type. One interesting observation here is that the core process of creating abstraction is somewhat programming language independent. An abstraction is an artifact of how the programmer(s) models the problem.
