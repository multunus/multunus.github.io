---
title: A Noob's Walkthrough of a re-frame Application
date: '2016-02-05 12:13:06'
tags:
- cap-jerry
- clojurescript
- re-frame
- react
- technology
---

Are you keen on learning how to build next-gen apps using
[re-frame](https://github.com/Day8/re-frame)? Are you also the type of person that learns best by observing a fully functional prototype purring on the side? Look no further! You have arrived at your destination. Well, you've probably arrived at the first step...

##So what exactly is re-frame?


re-frame is a very simple but expressive library for writing single-page applications (SPAs) in
[Clojurescript](https://github.com/clojure/clojurescript) using
[Reagent](http://reagent-project.github.io/). Why re-frame, you ask. Because Clojurescriiiipt and Reaaaaaact!!! No really, when functional programming meets reactive programming, it's a new world of possibilities. You'll soon see why. I really recommend going through the brilliant
[readme](https://github.com/Day8/re-frame/blob/master/README.md) that has been put together for the re-frame repo once you're comfortable with the basic aspects that are explained here.

This walkthrough is an attempt at simplifying as much as possible the working of a re-frame application. It does not delve into the depths of how re-frame works, but gives you enough information to take that dive by the end. Of course it is necessary that you be familiar with Clojurescript and Reagent (and hence
[React](https://facebook.github.io/react/) - duh!). While you need not have written any applications using either, you should at the least know the basic syntax of both.

Well then, assuming that's in order, let's jump in!


##And what are we doing today?


This is a walkthrough and so we need something to, you know, walk through. I thought we could build something together, but
[Sreenath](https://github.com/tacticiankerala) has built a
[nice little app](http://tacticiankerala.github.io/re-frame-sample-app/resources/public/index.html) that we can use. Go on, have a look at it. Use the app and see what it does.


![re-frame-sample-app-screenshot](https://s3.amazonaws.com/multunus-website/uploads/2016/02/screenshot-2.png)

You would probably also be interested in going through
[the codebase](https://github.com/tacticiankerala/re-frame-sample-app). If you're keen on getting the app running locally, the readme in the repo section explains how to do so.

Now, we're going to see how data and control flows through a re-frame app through this example.


##The Bare Necessities


No, this is not a sing-along of The Jungle Book!

Let's start by having a look at the core constituents of every re-frame app:


*  **Router:**
 Our app needs to be capable of redirecting the various events triggered by a user to the right places. We'll see soon where and how these events are sent and who processes them.


*  **Data store:**
 Every app out there is in charge of manipulating and storing data. And since we're talking about a React app, we want a reactive data store - one that tells us when there are changes.


*  **Views:**
 This is where we add the visual components of our app. I'm talking of course about the Reagent components.


*  **Handlers:**
 We need agents in the field to manage the events that occur on the DOM. Once an event occurs, it gets dispatched to the handler, which then takes some action. But for this to happen, we need to register the events against their handlers in the router (we'll get there).


*  **Subscriptions:**
 Once a handler does its thing, there are likely to be changes in the data store. A reactive system is expected to update its view automatically when this happens. We'll see how this happens.

So at a high level, here's how it rolls.
View components get rendered onto the DOM that the user can interact with. These interactions trigger
events which are dispatched to
handlers. The handlers in turn usually end up mutating
data in the data store causing components that have
subscribed to those data entries to trigger updation of the DOM. And the cycle repeats. Piece of cake, ain't it?


![re-frame-flowchart](www.multunus.com/wp-content/uploads/2016/02/img1.png)


##The Directory Structure


Before diving into further details, there's one more thing we need to know. There are two main sources of code to be aware of. One comprises the Clojurescript files that we'll be writing to power the application logic behind our SPA. These files are located in `app_root/src/cljs/app_name/`. In our example, it becomes `re-frame-sample-app/src/cljs/github_profile/`.

The second is the static assets such as styles and the HTML template files. These are located in `app_root/resources/public/`. You should check out what is available in these folders. You'll notice that there's a folder containing Javascript in the second folder. This is where the JS files generated after compiling our Clojurescript code are stored.


##Where It All Starts


Now, to set things in motion, we need a root page to be displayed in our app. This is where every user lands the first time. This stuff is coded in the `core.cljs` file. If you look at it, you'll find the following block of code:

    (defn ^:export init []
      (routes/app-routes)
      (re-frame/dispatch-sync [:initialize-db])
      (mount-root))

Let's ignore how we got to this point for the time being. What matters more is that we're here and now we want to know what's going to happen. The first two lines initialize the router and data store (don't worry about these, you'll get them shortly). Our focal point at the moment is the last line of this method, which invokes a method called
mount-root:

    (defn mount-root []
      (reagent/render [views/main-panel]
              (.getElementById js/document "app")))

This method goes through the DOM hunting for an element with the id app. If you look at the index.html file in the static source directory mentioned above, you'll find a
div with this id. Once it finds this element, it renders what we're calling the main panel.


![re-frame-flowchart](https://s3.amazonaws.com/multunus-website/uploads/2016/02/img2.png)


##Our First View


We've now asked for a render of the main panel, which is essentially a Reagent component. In our views.cljs file, this can be found in the method
main-panel:


    (defn main-panel []
      (let [active-panel (re-frame/subscribe [:active-panel])]
        (fn []
          [:div
          [loading-throbber]
          [user-name-and-avatar]
          (panels @active-panel)
          ])))

This seems quite straightforward, doesn't it? Well, let's go through it line by line. The first line of the method is a subscription. Yes, the same one we were talking about earlier. What that line does is that it triggers a 'listener' for changes to an entry in the data store called `active-panel`.


![re-frame-flowchart](https://s3.amazonaws.com/multunus-website/uploads/2016/02/img3.png)

But where's the data store? If you noticed, there's a file called `db.cljs`. This however does not contain an entry called `active-panel`. Wait, so where did that now come from? Jeez!

Remember that we're still at the root view of our application. The root path is at the `/` location. Just like any other framework, when you visit a particular path/route, there's a couple of things that need to happen. Have a look at the routes in `routes.cljs`. You'll find the following block of code, which does exactly that:


    (defroute "/" []
      (re-frame/dispatch [:set-active-panel :home-panel]))

Something ring a bell? When we visit this path, an event is dispatched. Events are simply vectors that hold nothing but pure data. In our case, the event has information about the name of the event `:set-active-panel` and a parameter to support the event, `:home-panel`. So now what?


![re-frame-flowchart](https://s3.amazonaws.com/multunus-website/uploads/2016/02/img5.png?w=1133)

At the beginning, we briefly touched upon the fact that events need to be registered against their handlers in the router. When an event occurs, it reaches the router first. The router then checks against the registered handlers and conveys the event to the matching handlers. One thing to note is that there need not be a one-to-one mapping between events and handlers. Handler registration in our example is done in `handlers.cljs`. The following snippet is from that file:


    (re-frame/register-handler
    :set-active-panel
    (fn [db [_ active-panel]]
      (assoc db :active-panel active-panel)))

This dictates that once the event `:set-active-panel` is dispatched, set the `:active-panel` entry in the data store to the parameter that got sent in with the event. In our case, the parameter is `:home-panel`. Hence a new entry gets added in the data store called active-panel with the value `:home-panel`.


![re-frame-flowchart](https://s3.amazonaws.com/multunus-website/uploads/2016/02/img6.png?w=1125)

Since the initialization is a one-time activity, let's leave it out from our flowchart and simplify the rest to:


![re-frame-flowchart](https://s3.amazonaws.com/multunus-website/uploads/2016/02/img7.png?w=845)

Rewinding to our original `main-panel` method, you'll see that the subscription we have queries this very data attribute (`active-panel`) in the data store. Visiting the root path caused a change around this attribute. The subscriber is a Reagent component. It picks up the change, resulting in the triggering of the process to update the DOM.


![re-frame-flowchart](https://s3.amazonaws.com/multunus-website/uploads/2016/02/img8.png?w=841)

In the same `main-panel` method, notice the following line:


    (panels @active-panel)

Just above that method, there is another line:


    (defmethod panels :home-panel [] [home-panel])

Needless to say, the method `panels` is invoked with the `:home-panel` argument resulting in the calling of the method `home-panel`, which can be found in the same file. This returns a Reagent component responsible for rendering the elements we see in the root page. Note that this component is constituted by two other components, namely `github-id-input` and `user-repos-list`, both of which are now in the DOM.

Phew! So let's have a recap of what happened. The user visited the root path, resulting in the setting of the data attribute `active-panel` to
:home-panel in the data store. The
mount-root method invoked at the end of the initialization triggers the rendering of the main panel in the DOM. The main panel component is subscribed to the
active-panel data entry and hence ends up rendering the
home-panel component.


##Click Me!


So far, we've seen how a user action of navigating to the root path of a re-frame app is handled all the way until the DOM is updated. Now let's ramp things up a bit and have a look at what happens when a user interaction like a click occurs.

You must have already tried using the app and noticed that it displays a list of Github repositories that a Github user has. So how exactly does that work? Well, to be honest, it's quite similar to what we've already seen.

You must have noticed that the div containing the elements to accept a Github username and the button to list the repos for that user was rendered by the component
`github-id-input`. There are a couple of things going on in there, but our main interest is with the button and how a click is handled. Check out the following lines in that method:


    on-click (fn [_]
      (when-not (empty? @github-id)
        (re-frame/dispatch [:set-github-id @github-id])
        (reset! github-id "")))]
    ...
    [:button.btn.btn-default {:type "button"
                      :on-click #(when-not @loading? (on-click %))}

While there are other important parts in that method, these excerpts are the primary drivers of the click. As you can see, once a Github id is entered and the button clicked, there is an `:on-click` handler waiting to pick up the event. This calls the method `on-click` which dispatches an event named `:set-github-id` with the parameter `@github-id`. That parameter is set when a change is made to the input field (you can find the logic for this in the same method).

From here, it's the same drill. The event that gets dispatched is handled by the registered handler. It triggers the process to fetch the entered user's Github profile and list of repos, the end result being that the data store gets updated with the newly fetched details, causing subscription handlers to trigger updation of the DOM.


**Activity For You:**
 Try mapping out the process that happens when this dispatched event generated on click reaches the corresponding handler and how the DOM gets updated at the end of it.


##Let's Wrap It Up


We've seen the various constituents of a re-frame app. We've also seen how these units interact with each other to respond to user events and update the DOM. This is of course a very simplified version of things. You should definitely go and read more on the readme on the re-frame Github page. Equipped with the information you have now, you should find it quite easy to understand all that is explained over there.

If you have any questions or comments, please write them in the section below.
