---
title: Long living feature branches - An Anti Pattern
date: '2017-03-14	 13:32:19'
tags:
- leena
- technology
- process
link: http://www.multunus.com/blog/2017/03/long-living-feature-branches-an-anti-pattern/
---
A few years back, we were working on a Javascript heavy web application which had built using [backbone.js](http://backbonejs.org/). We found that we were loading all the Javascripts at once than applying lazy loading. This affected the user experience because of the high page load time and wanted to fix that.

We decide to use [Require.js’s AMD](http://requirejs.org/docs/whyamd.html) [Asynchronous Module Definition] to implement lazy loading. We had to change our own Javascript files and also needed to apply certain techniques to the external JS [like JQuery] to support AMD. We started on that and realized that we are getting into a black hole as we had to literally change the entire JS code. We didn’t react to our learning and it took around two weeks to completely support AMD. 

We saw changes in the application performance, but the as a team we felt bad because We couldn’t work on anything else during this time because:

* It was taking longer than expected so the entire team jumped on trying to finish it faster

* During this time, the application was somewhat broken, so deploying something to production was not possible

We thought we were doing continuous delivery i.e. every commit can go to production, but it was broken this time. We needed to find out how to handle long running rewriting in a "continuous delivery" manner.

## Learning from experience

We came across a similar situation in the recent past. This was for an application which allowed the user to create custom designs, which they can print in their T-Shirts or hoodies. We were using RGhost for creating the designs in PDF but later realised that because of certain constraints with RGhost it’s better to use LaTex. 

We didn’t want to repeat the earlier mistake, we want to do the rewrite in small batches. We had an abstraction layer for the PDF Generation somewhat like as follows:


~~~ ruby
class PDFGenerator

  def generate_pdf_from_text(text,font_attributes)
    #Call the RGhost’s implementation
  end

  def generate_pdf_from_image(image_path,image_attributes)
    #Call the LaTex’s implementation
  end

  #other methods

end
~~~

And we change one function by function to the new implementation. We added feature toggle too so that we can switch to old implementation in case we find a problem in production. 

~~~ ruby
  def generate_pdf_from_image(image_path,image_attributes)

    if USE_LATEX
      #new implementation
    else
     #old implementation
    end
  end
~~~


The approach was really great, because we could fine tune the new implementation with the learnings from production and as it was in small batches and it was completely fine to complete the port in few weeks time as there was no dependency on this.

## Branch by Abstraction

The above technique is similar to the technique called [Branch by Abstraction](https://martinfowler.com/bliki/BranchByAbstraction.html), i.e. introduce an abstraction layer and route it to the existing implementation.

![image alt text](https://s3.amazonaws.com/multunus-website/uploads/2017/03/branch_by_abstraction1.png)

Let the abstraction layer redirect to newer implementation as an when it is ready.

![image alt text](https://s3.amazonaws.com/multunus-website/uploads/2017/03/branch_by_abstraction2.png)

You can visualise Branch by Abstraction with the following example given by Paul Hammant i.e consider it as changing the wheels of a car with the conditions:

* Mechanics must be able to simultaneously work on the upholstery, engine, etc. 

* The car must be drivable after every change.

![image alt text](https://s3.amazonaws.com/multunus-website/uploads/2017/03/branch_by_abstraction3.png)

It works in large scale too. [This case study](https://continuousdelivery.com/2011/05/make-large-scale-changes-incrementally-with-branch-by-abstraction/) talks about two major changes implemented using Branch by Abstraction i.e.:

* Moving from iBatis to Hibernate [famous ORMs in the Java world]

* Moving from Velocity and JsTemplate to JRuby on Rails

## Every commit should be ready for deployment

[Mainline Development and Feature toggles](http://www.multunus.com/blog/2016/03/merge-hells-feature-toggles-rescue/) help you to achieve this mantra to a great extend, but the question is how do you handle major refactorings or rewritings? Use Branch by Abstraction. 

Yes, it requires the discipline to use abstractions appropriately. But why not, if the same helps for better maintenance.

