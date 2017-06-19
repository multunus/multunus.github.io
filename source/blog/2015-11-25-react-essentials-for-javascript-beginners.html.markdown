---
title: React Essentials for JavaScript Beginners
date: '2015-11-25 16:27:05'
synopsis: React is awesome is the only thing I wanna say
tags:
- peter-l
- javascript
- react
- technology
- featured
link: http://www.multunus.com/blog/2015/11/react-essentials-for-javascript-beginners/
---

> React has made working on frontend fun again.


You know JavaScript, you might have played around with AngularJS or Node.js. You've been hearing about [React](https://facebook.github.io/react/) and your curiosity has been piqued. You're at the right place, this post will cover the essentials of React with simple code snippets.

Unless you’ve been living under a rock for the past year, you would know that React is a [**View**](https://facebook.github.io/react/blog/2013/06/05/why-react.html) library released by Facebook. In its infancy, people had mixed reactions on its weird looking syntax of HTML inside JavaScript (called [JSX](https://facebook.github.io/react/docs/displaying-data.html)). All that weirdness is now invisible with frontend developers considering React as the de-facto standard for creating UIs.

You can use the latest features from the ES6 and ES7 standards in your React app today, thanks to transpilers like Babel. In short React has made working on frontend fun again!

All the code snippets I use here follows the ES6/ES2015 syntax. JS Bin seems to act up occasionally, but as usual, refreshing it seems to fix it.


##React Components


Let's get started. We'll start by defining a couple of components that we'll use throughout.


Text

Here’s a component that displays the venerable “Hello, World!”


[Check out the code on JS Bin](http://jsbin.com/vusuje/1/edit)


    class Text extends React.Component {
      render() {
        return (
          <div>
    Hello, World!
          </div>
        );
      }
    }

    React.render(<Text />, document.getElementById('container'));

     


![Text Component - Output](https://s3.amazonaws.com/multunus-website/uploads/2015/11/text-1024x522.gif)

In line 1, we are defining a class called `Text` which extends the component class of React. Text has a `render` method which returns a React element, in this case, a div tag with the text “Hello, World!”. Remember that only a single React element should be returned by the render method. However, there may be nested elements within that element.
The last line is telling React to render the `Text` React Element as a child of the DOM node with the id `container`.


###Spinner

This component will display a spinner. I will not go into the implementation of it, it's mostly css.


[Check out the code on JS Bin](http://jsbin.com/vusuje/4/edit)


    class Spinner extends React.Component {
      render() {
          return (
      <div className="spinner-component">
        <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
      </div>
    )
      }
    }

    React.render(<Spinner />, document.getElementById('container'));

 


![Spinner Component](https://s3.amazonaws.com/multunus-website/uploads/2015/11/spinner-1024x553.gif)
The only thing this component does new, as far as React is concerned, is to apply css class names to HTML tags. JSX requires you to use the keyword `className` for applying css classes, since `class` is a JavaScript keyword.


###App

We will now define a `App` component which will behave as the parent component.


[Check out the code on JS Bin](http://jsbin.com/vusuje/7/edit)


    class App extends React.Component {
      render() {
        return (
          <div>
    <Text />
    <Spinner />
          </div>
        )
      }
    }

    React.render(<App />, document.getElementById('container'));

 


![App Component](https://s3.amazonaws.com/multunus-website/uploads/2015/11/App-1024x553.gif)

I will include only the relevant portion of the code for the sake of brevity, you can follow the [JS Bin]((http://jsbin.com/vusuje/7/edit)) link to see the whole code.


`App` is the parent component and it's child components are `Text` and `Spinner`. We will modify these components throughout the course of this post.

You might be wondering what the fuss is all about. Things don't look exciting right now? Wait for it - the magic happens when the components use **props** and **state**.


##Props


The * props*  (short for properties) are a component’s **configuration**. They are received from a component above it in the component hierarchy. Props are treated as **immutable**in the component receiving them. This means data flow should be top-down.

It sounds confusing I know, but it's really intuitive once you think about it. Props are passed down to a child component from it's parent component. As far as the child is concerned, the prop is owned by the parent and only the parent should modify it.

Therefore, a component is not supposed to change its props, in other words **never write** to props. It is also the responsibility of a component to pass down any required props to its child components.


[Check out the code on JS Bin](http://jsbin.com/vusuje/9/edit)


    class Text extends React.Component {
      render() {
        <div>
          {this.props.content}
        </div>
      }
    }

    class App extends React.Component {

      render() {
        return (
          <div>
    <Text content="I am React"/>
    <Spinner/>
          </div>
        );
      }
    };

    React.render(<App name="React"/>, document.getElementById('container'));

 


![Props Example](https://s3.amazonaws.com/multunus-website/uploads/2015/11/Prop-1024x553.gif)

No points for guessing what the above code snippet does! It’s mostly the same code as before, but with a slight modification. The `Text` component inside `App` takes an attribute called `content` with the value “I am React”. This is how we transfer data into a component:


*  The attribute `content` is pushed to the props object of the current instance of the `Text` component.


*  Within the component, this attribute is now accessible as `this.props.name`.


*  The handlebars(`{ }`) lets the JSX transformer know that it’s contents should be evaluated and replaced.

The parent, in this case, is `App` and the child is `Text`, as mentioned previously, parent provides the child component with the necessary props.

Follow this [post](http://www.sitepoint.com/video-using-props-to-pass-data-in-react/) to learn more about props.


##State


State is what you use when you want your application to be interactive. The * state*  is initialized with a default value when a component is mounted in the DOM. It then undergoes **mutations** as time passes. These mutations are usually triggered from user events or client-server interaction. It is the representation of a component at a given point of time.

A component takes care of its state internally, but it should not mess with the state of its children. Most of the time, state of the parent is passed down as a prop to the child.

React components can hold state information within them. Each instance of a component maintains a separate state. This quickly proves to be very useful. Let us see how state works:


[Check out the code on JS Bin](http://jsbin.com/vusuje/11/edit)


    class Spinner extends React.Component {
      render() {
        if(this.props.show) {
          return (
      <div className="spinner-component">
        <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
      </div>
    )
        } else {
      return (<div></div>);
        }
      }
    }
    class App extends React.Component {
      constructor(props) {
        super(props);
        this.state = {showSpinner: false};
      }

      render() {
        return (
          <div>
    <Text content="I am React"/>
    <Spinner show={this.state.showSpinner}/>
          </div>
        );
      }
    };

    React.render(<App name="React"/>, document.getElementById('container'));

 


![State Example](https://s3.amazonaws.com/multunus-website/uploads/2015/11/state-1024x553.gif)
We have modified Spinner component to be able to use the `show` prop. Spinner will now return an empty `div` tag if the value of `show` is false.

Let's see what changes we have made to `App` component.
*  It calls super with props to prepare the component for rendering
*  It initializes the state. In this case, `showSpinner` is set to `false`.
*  `Spinner` component is given a prop called `show` which takes the value of the `showSpinner` state element.

By now you have probably guessed what we are trying to do, we are passing in the state `showSpinner` as a prop to `Spinner`. `Spinner` will now use this prop to determine whether it should display a spinner or not.

There are certain things you should take care of when using state in your app:


*  State reduces predictability and increases the complexity of your application


*  Try to use as few components with state as possible.


*  Stateful components are mainly used for handling user events, client-server communication etc.

This excellent 
[post](https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html) will give you more information about when to use state.


##Dynamic UI


Alright, state is no fun if we can’t mutate it. Let’s see a small example of how state can be mutated through a user event. Go on to the JS Bin link and try clicking on 
* Toggle Spinner* 


[Check out this code on JS Bin](http://jsbin.com/vusuje/15/edit)


    class App extends React.Component {
      constructor(props) {
        super(props);
        this.state = {showSpinner: false};
      }

      toggleShowSpinner() {
        this.setState({
          showSpinner: !this.state.showSpinner
        });
      }

      handleClick() {
        this.toggleShowSpinner();
      }

      render() {
        return (
          <div>
    <Text content="I am React"/>
    <button onClick={(e) => {this.handleClick(e)}}>Toggle Spinner</button>
    <Spinner show={this.state.showSpinner}/>
          </div>
        );
      }
    }

    React.render(<App name="React"/>, document.getElementById('container'));

 


![Dynamic UI Example](https://s3.amazonaws.com/multunus-website/uploads/2015/11/dynamic-ui-1024x522.gif)
The code above looks slightly more complicated, but it’s a no-brainer.

We have created an HTML `button` and passed in an `onClick` event handler as a prop. The strange looking 
[syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) is from ES2015. When you click on the button, `handleClick()` is invoked.

When `handleClick()` method is invoked it invokes `toggleShowSpinner()`. This is where the magic happens. The [`setState()`](https://facebook.github.io/react/docs/component-api.html) method is used to mutate the state. In this case, `showSpinner` is toggled. As soon as the state is mutated, React performs a set of steps. One of these is calling the render method. Pressing the button again toggles the state and the spinner is disabled.

Now you know enough about react to get started with it. If you get stuck in between, dig through the
[React Docs](https://facebook.github.io/react/docs/getting-started.html) or comment here. Stay tuned for the next post which talks about what exactly happens when state is mutated among other things.

Leave your thoughts and suggestions below and make sure to [follow us](https://twitter.com/multunus) to receive even more posts :)


###Further Reading



*  [How I learned to stop worrying and love React](http://firstdoit.com/react-1/)


*  [React on ES6+](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/)


*  [React Koans](https://github.com/arkency/reactjs_koans)


*  [How to communicate between React Components](http://ctheu.com/2015/02/12/how-to-communicate-between-react-components/)


*  [Curated list of React resources](https://github.com/enaqx/awesome-react)
