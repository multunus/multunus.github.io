---
title: The Requirements Pit
date: '2017-08-23	23:10:29'
tags: 
- cap-leena
- continuous-delivery
- newsletter
link: http://www.multunus.com/blog/2017/08/the-requirements-pit/
---

[The Pragmatic Programmer: From Journeyman to Master](https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X/ref=sr_1_1?s=books&ie=UTF8&qid=1503455788&sr=1-1&keywords=pragmatic+programmer), is a classic book and must be read by every programmer, maybe again and again. Published by Dave Thomas and Andy Hunt in 1999 as the first in the series The Pragmatic Bookshelf label, the book has a lot of tips on how software should be created and maintained. 

The book uses analogies to communicate the ideas. The [broken window theory](https://en.wikipedia.org/wiki/Broken_windows_theory), [the stone soup](https://en.wikipedia.org/wiki/Stone_Soup) and [boiling frog](https://en.wikipedia.org/wiki/Boiling_frog) are popular analogies from the book. 
Jeff Atwood's post [A Pragmatic Quick Reference](https://blog.codinghorror.com/a-pragmatic-quick-reference/) covers a quick reference of the entire book.

The book describes the experience Brian Eno [the famous producer and musician] had while designing an ultimate mixing board. Quoting from the book:

>
>**_Sometimes the Interface Is the System_** 
>
>*In an article in Wired magazine (January 1999, page 176), producer and musician Brian Eno described an incredible piece of technology—the ultimate mixing board. It does anything to sound that can be done. And yet, instead of letting musicians make better music, or produce a recording faster or less expensively, it gets in the way; it disrupts the creative process.*

>*To see why, you have to look at how recording engineers work. They balance sounds intuitively. Over the years, they develop an innate feedback loop between their ears and their fingertips—sliding faders, rotating knobs, and so on. However, the interface to the new mixer didn't leverage off those abilities. Instead, it forced its users to type on a keyboard or click a mouse. The functions it provided were comprehensive, but they were packaged in unfamiliar and exotic ways. The functions the engineers needed were sometimes hidden behind obscure names, or were achieved with non intuitive combinations of basic facilities.*

>*That environment has a requirement to leverage existing skill sets. While slavishly duplicating what already exists doesn't allow for progress, we must be able to provide a transition to the future.*

>*For example, the recording engineers may have been better served by some sort of touchscreen interface—still tactile, still mounted as a traditional mixing board might be, yet allowing the software to go beyond the realm of fixed knobs and switches. Providing a comfortable transition through familiar metaphors is one way to help get buy-in.*

>*This example also illustrates our belief that successful tools adapt to the hands that use them. In this case, it is the tools that you build for others that must be adaptable.*

Refer to the original Wired magazine article - [The revenge of the intuitive](https://www.wired.com/1999/01/eno/)

So the summary is ***Work with a User to Think Like a User.***

## Documenting Requirements
Like a good codebase, the requirements should also be abstract because none, including the end users, know the requirements well enough. These abstractions, help the software to be flexible. Let's look at an example:

>*"An employee record may be viewed only by a nominated group of people"*

The above conveys in a generic manner that there should be restrictions on who can view what. Compare that with:

>*"Only an employee's supervisors and the personnel department may view that employee's records"*

While this is more specific, it can (or will) change tomorrow because of an addition of new role or change in the privileges for an existing role. 

There is a high probability that the system becomes more rigid when requirements are mentioned in more specific way vs when mentioned in a generic way. Documenting them as use cases, as [Ivar Jacobson recommends](https://www.ivarjacobson.com/publications/white-papers/use-case-ebook) with the focus on the goal to be achieved helps it to be more abstract. 

## Project Glossary
Also maintain a Project Glossary to bring in common and consistent vocabulary across the team i.e., the domain experts, end users, developers because:

>*It's very hard to succeed on a project where the users and developers refer to the same thing by different names or, even worse, refer to different things by the same name.*

My friend Yedhu has written a short and crisp summary about The Pragmatic Programmer. You can read them [here](www.yedhukrishnan.blogspot.com/search/label/Pragmatic).

