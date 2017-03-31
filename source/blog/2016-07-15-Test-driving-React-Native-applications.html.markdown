---
title: Test driving React Native applications
date: '2016-07-15 12:13:48'
tags:
- cap-jayakrishnan
- cap-roshanjossey
- enzyme
- mocha
- react
- react-native
- tdd
- technology
- ui-testing
- unit-testing
link: http://www.multunus.com/blog/2016/07/test-driving-react-native-applications/
---

React Native is a game changing mobile app development framework that concentrates on fast development. Based on the philosophy“Learn once, write anywhere”, it makes it possible to build IOS, Android and Windows mobile apps just using Javascript.


So React Native helps you to build awesome applications across multiple platforms. Now you have one question lingering in your head and that is the reason you are reading this post. How am I going to test these ? We also had the same question while working on React Native and couldn’t find a hands-on tutorial that helps a beginner get started on writing tests for React Native applications. Read on this post and once you finish it, you will feel much more confident in testing React Native applications.

This tutorial assumes you are comfortable working with React Native, basic concepts of React, and testing of Javascript code. If not, feel free to checkout the following links.


*[https://facebook.github.io/react/](https://facebook.github.io/react/)

    
*[https://facebook.github.io/react-native/](https://facebook.github.io/react-native/)

    
*[https://www.sitepoint.com/unit-test-javascript-mocha-chai/](https://www.sitepoint.com/unit-test-javascript-mocha-chai/)

 

After completing this tutorial you will be able to


*Write unit tests for your component logic.

    
*Test behaviour of components on various user interactions like press and scroll.

    
*Easily test defaultProps, propTypes, state transitions and similar aspects of React components.  

    
*Appreciate how TDD encourages you to follow idioms in react.

 

Before we actually jump into the code, let us take a brief walkthrough over our test setup. We will be using the following libraries for testing.


*[Babel](https://babeljs.io/): A Javascript compiler to transpile our javascript code so that it is compatible everywhere.

    
*[Mocha](https://mochajs.org/): A Javascript testing framework running on[node.js](https://nodejs.org/en/)to run our tests.

    
*[Chai](http://chaijs.com/): A library that provides us with interfaces to write assertions in our test.

    
*[Sinon](http://sinonjs.org/): A library that provides us with spies, stubs and mocks which are used extensively while testing.

    
*[React Native Mock](https://github.com/lelandrichardson/react-native-mock): Library that provides a completely mocked version of react-native that is easily testable.

    
*[Enzyme](http://airbnb.io/enzyme/): A React test utility that helps us to write painless tests for react components.JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components.


Setting all these up is a pain, but we have done that for you. Checkout our[react native boiler plate](https://github.com/multunus/react-native-boilerplate)that helps you kickstart your application development with all the setup done for state model, testing, continuous integration etc. Go to your console and type the following commands.


git clone https://github.com/multunus/react-native-boilerplate ReactNativeBoilerplate
cd ReactNativeBoilerplate
npm install

Rename 
config.example.json to 
config.json and modify it as required.

The app is setup to use the 
[NodeJS JWT Authentication sample server](https://github.com/auth0/nodejs-jwt-authentication-sample), follow the instructions and update the baseURL in 
config.json to a valid url say 
http://localhost.


That’s it. Time for coding!


It’s time to rewind back a little bit and refresh the first tutorial you ever did on[React](https://facebook.github.io/react/). The simple Comment Box. If you haven’t gone through it, you can take a look at it[here](https://facebook.github.io/react/docs/tutorial.html). We will build the same application in React Native using[TDD](https://en.wikipedia.org/wiki/Test-driven_development). We will be replacing the react components used in the tutorial by native components for android and using[Async Storage](https://facebook.github.io/react-native/docs/asyncstorage.html)provided by react native to store our data instead of a server with a database. If you are not comfortable with Test Driven Development, you may choose to write your code and then write tests for it. But we feel TDD improves the quality of your code and especially while working on React, this is more evident as the components you build will be simple, testable and you will refrain yourselves from writing too much of logic into your components.

We are going to build the app in Android platform. But don’t worry if you are using react native for IOS or Windows mobile app development, the testing techniques you learn here is independent of the platform and can be applied across platforms.


We shall use the same component structure as in the react tutorial for our app.


*A view of all of the comments

    
*A form to submit a comment


We will have the following component hierarchy


- 
CommentBox: The root component    - 
CommentList : To display a list of all components       - 
Comment : To display a single comment    - 
CommentForm : A form for user to write a comment


Our first test

Okay, now it’s time for coding. Let us write our first test. The components for the app are written in 
src/components directory and the corresponding  tests for components are written in 
src/components/__specs__ directory. Open a new file 
src/components/__specs__/Comment.spec.js and write the following code.


import React, { View } from 'react-native';

import { shallow } from 'enzyme';

import { expect } from 'chai';

import Comment from '../Comment.js';
 

describe('<Comment />', () => {

 it('should be a view component', () => {

   const wrapper = shallow(<Comment></Comment>);

   
    expect(wrapper.type()).to.equal(View);

 });

});


That is a simple test to begin with. Let’s checkout what is going on here. We are using[shallow rendering API](http://airbnb.io/enzyme/docs/api/shallow.html)of enzyme here. It is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behaviour of child components. 
shallow() method returns a shallow wrapper object around the component that is to be tested. Enzyme provides a rich set of methods that can be called on the wrapper instance, for testing various aspects of a component. Check out the[docs](http://airbnb.io/enzyme/docs/api/shallow.html). In this spec we are just checking the type of the component.


We must appreciate the work of Leland Richardson for building[Enzyme](https://github.com/airbnb/enzyme)( JS testing utility which helps us write tests for react “web” components) and[React Native Mock](https://github.com/lelandrichardson/react-native-mock)( fully mocked and test-friendly version of react native, which makes enzyme compatible with react native). The result of this effort is painless testing of react native components.

Now save the file and run 
npm test from console and watch your tests fail. Now we build the 
Comment component. Open 
src/components/Comment.js and write the following code.


import React, {Component, View } from 'react-native';

export default class Comment extends React.Component {

 render() {

   return(

     <View>

     </View>

   );

 }

}


Now run 
npm test from console and see your tests pass. Bingo! Now we will be progressively writing tests and code to build the complete app. We’ll be following the same procedure for the rest of our tutorial. Write tests, watch it fail, write code, see it passing, refactor if necessary. You can read more about[Red Green Refactor here](http://www.jamesshore.com/Blog/Red-Green-Refactor.html).

Now that we're all good to go, let's start with the topmost component in the component structure.


src/components/__specs__/CommentBox.spec.js


import 
React, 
{ 
View, 
Text 
} 
from 
'react-native';

import 
{shallow} 
from 
'enzyme';

import 
{expect} 
from 
'chai';

import 
CommentBox 
from 
'../CommentBox.js';

describe('<CommentBox />', () => {

 beforeEach(function() {

   wrapper = shallow(<CommentBox/>);

 });

 it('should be a view component', () => {

   expect(wrapper.type()).to.equal(View);

 });

 it('should have a title Comment It', () => {

   expect(wrapper.contains(<Text>Comment It</Text>)).to.equal(true);});

});

These tests describe CommentBox to be a View component and have a Text component inside it. We’ll write minimal amount of code to make this test pass. and a Text component with the text “Comment It” in it.
Now the actual code.


src/components/CommentBox.js


import 
React, 
{Component,Text, 
View 
} 
from 
'react-native';


export 
default 
class 
CommentBox 
extends 
React.Component{

 render(){

   return(

       <View>

         <Text>Comment It</Text>

       </View>

   );

 }

}


We need a CommentList and CommentForm component inside our CommentBox.

We’ll just define these components without working logic just for now, and come back to these components and complete them later.


src/components/__specs__/CommentForm.spec.js


import 
React, 
{ 
View 
} 
from 
'react-native';

import 
{shallow} 
from 
'enzyme';

import 
{expect} 
from 
'chai';

import 
CommentForm 
from 
'../CommentForm.js';
 

describe('<CommentForm />', () => {  

 it('should be a view component', () => {

   wrapper = shallow(<CommentForm />);

   
    expect(wrapper.type()).to.equal(View);

 });  

});


src/components/CommentForm.js


import 
React, 
{Component, 
View} 
from 
'react-native';


export 
default 
class 
CommentForm 
extends 
React.Component{

 render(){

   return(

       <View>

       </View>

   );

 }

}


src/components/__specs__/CommentList.spec.js


import React, { ListView } from 'react-native';


import { shallow } from 'enzyme';

import { expect } from 'chai';

import CommentList from '../CommentList.js';

 

describe('<CommentList />', () => {

 it('should be a ListView component', () => {

   const wrapper = shallow(<CommentList />);

   
    expect(wrapper.type()).to.equal(ListView);

 });

});


src/components/CommentList.js


import React, {Component, ListView} from 'react-native';


export default class CommentList extends React.Component {

 render() {

   return(

       <ListView />

   );

 }

}


Let's add them to CommentBox component. Add a couple of specs to CommentBox.spec.js as follows


src/components/__specs__/CommentBox.spec.js


import React, { View, Text } from 'react-native';

import { shallow } from 'enzyme';

import { expect } from 'chai';



import CommentBox from '../CommentBox.js';

import CommentList from '../CommentList.js';

import CommentForm from '../CommentForm.js';


describe('<CommentBox />', () => {

 beforeEach(function() {

   wrapper = shallow(<CommentBox />);

 });

 

 it('should be a view component', () => {

   expect(wrapper.type()).to.equal(View);

 });
 

 it('should have a title Comment It', () => {

   expect(wrapper.contains(<Text>Comment It</Text>)).to.equal(true);

 });
 

 it('should render CommentList component', () => {

   expect(wrapper.find(CommentList)).to.have.length(1);

 });
 

 it('should render CommentForm component', () => {

   expect(wrapper.find(CommentForm)).to.have.length(1);

 });

});


src/components/CommentBox.js


import 
React, 
{Component,Text, 
View} 
from 
'react-native';


import 
CommentList 
from 
'./CommentList.js';

import 
CommentForm 
from 
'./CommentForm.js';


export 
default 
class 
CommentBox 
extends 
React.Component 
{

 render() 
{

   return(

       <View>

       <Text>Comment 
It</Text>

       <CommentList />

       <CommentForm 
/>

       </View>

   );

 }

}


Now that we have the whole structure in place, we’ll implement with the functionality starting with Comment component.


For each comment we’ll pass author name of the comment and the actual comment as props. Comment component should take these props and render both the author name and actual comment.


src/components/__specs__/Comment.spec.js


import React, { View, Text } from 'react-native';

import { shallow } from 'enzyme';

import { expect } from 'chai';


import Comment from '../Comment.js';


describe('<Comment />', () => {

 it('should be a view component', () => {

   const wrapper = shallow(<Comment></Comment>);

   
    expect(wrapper.type()).to.equal(View);

 });


 it('should render 2 text components', () => {

   const wrapper = shallow(<Comment />);

   
    expect(wrapper.find(Text)).to.have.length(2);

 });



 it('should render the given comment', () => {

   const wrapper = shallow(<Comment> This is a comment </Comment>);

   expect(wrapper.contains(<Text> This is a comment </Text>)).to.equal(true);

 });


 it('should render the given author name', () => {

   const wrapper = shallow(<Comment author="Author"></Comment>);

   
    expect(wrapper.contains(<Text>Author</Text>)).to.equal(true);

 });

});


src/components/Comment.js


import React, {Component, View, Text} from 'react-native';

export default class Comment extends React.Component {

 render() {

   return(

       <View>

        <Text>

          {this.props.author}

         </Text>

         <Text>

          {this.props.children}

         </Text>

       </View>

   );

 }

}


Aha! We have successfully test-driven our first React Native component.

 


Since we have comments now, let’s list them out in our CommentList component. The CommentList component takes all the comment data as an array of JSONs and render each comment.
Feel free to refer docs if you have any questions on usage of 
[ListView](https://facebook.github.io/react-native/docs/listview.html) .


src/components/__specs__/CommentList.spec.js


import React, { View, ListView } from 'react-native';

import { shallow } from 'enzyme';

import { expect } from 'chai';


import CommentList from '../CommentList.js';

import Comment from '../Comment.js';


describe('<CommentList />', () => {

 beforeEach(function() {

   data = [

     { author: "Pete Hunt", text: "This is one comment"},

     { author: "Jordan Walke", text: "This is a super comment"},

     { author: "Jordan Walkerr", text: "This is an ordinary comment"}

   ];

 });


 it('should define its propTypes', () => {

   expect(CommentList.propTypes.data).to.be.an('function');

 });


 it('should be a ListView component', () => {

   const wrapper = shallow(<CommentList data={data} />);

   
    expect(wrapper.type()).to.equal(ListView);

 });


 it('should have correct datasource in state', () => {

   const wrapper = shallow(<CommentList data={data} />);

   
    expect(wrapper.state('dataSource')._dataBlob).to.equal(data);

 });

});


src/components/CommentList.js


import React, {Component, View, ListView} from 'react-native';

import Comment from './Comment.js';

export default class CommentList extends React.Component {

 static propTypes =  {

   data: React.PropTypes.array

 };

 

 constructor(props) {

   super(props);

   this.state =  {

     dataSource: new ListView.DataSource({rowHasChanged:

(r1, r2) => r1 !== r2}).cloneWithRows(this.props.data)

   };

 }

 

 componentWillReceiveProps(){

   this.setState({

     dataSource: this.state.dataSource.cloneWithRows(this.props.data)

   });

 }

 

 render() {

   return (

       <ListView

         dataSource={this.state.dataSource}

         renderRow={this.renderComment.bind(this)}

       />

   );

 }

 renderComment(row) {

   return (

       <Comment author={row.author} >{row.text}</Comment>

   );

 }

}


Every time the CommentList component gets re-rendered, we need to update the dataSource state of the component to display newly added comment to the CommentList. We are just doing that in 
componentWillReceiveProps method.

Note that we wrote a spec to ensure that the propTypes of the component is defined. Read more about propTypes 
[here](https://facebook.github.io/react/docs/reusable-components.html) .


We can list comments but cannot add a new one. For that let us build the CommentForm component. It has two text input fields to input author name and actual comment and a submit button to submit the comment. Let’s build the basic UI of this component and then build the functionality.


src/components/__specs__/CommentForm.spec.js


import React, { View, TouchableNativeFeedback, TextInput, Text } from 'react-native';

import { shallow } from 'enzyme';

import { expect } from 'chai';

import CommentForm from '../CommentForm.js';

describe('<CommentForm />', () => {

beforeEach(function() {

wrapper = shallow(<CommentForm />);

});


it('should be a view component', () => {

expect(wrapper.type()).to.equal(View);

});
  

it('should have 2 TextInput components', () => {

expect(wrapper.find(TextInput)).to.have.length(2);

});


it('should have a submit button', () => {

expect(wrapper.find(TouchableNativeFeedback)).to.have.length(1);

expect(wrapper.find(TouchableNativeFeedback).containsMatchingElement(<Text>Submit</Text>)).to.equal(true);

});

});


src/components/CommentForm.js


import React, {Component, View, TouchableNativeFeedback, Text, TextInput} from 'react-native';

export default class CommentForm extends React.Component {  

render() {

return(

<View>

<TextInput

placeholder="name"

style={{height: 40, borderColor: 'gray', borderWidth: 1}}

/>

<TextInput

placeholder="comment"

style={{height: 40, borderColor: 'gray', borderWidth: 1}}

/>

<TouchableNativeFeedback>

<View style={{width: 150, height: 100, backgroundColor: 'red'}}>

<Text style={{margin: 30}}>Submit</Text>

</View>

</TouchableNativeFeedback>

</View>

);

}

}


The functionality of the CommentForm component is as follows.


*The input value of two TextInput components for entering author and comment should depend on state of the CommentForm component.

    
*When user enters text and the text in the input field changes, update the state to corresponding value

    
*On clicking the submit button, it should invoke `handleCommentSubmit` method of CommentBox component, which is passed as props to the CommentForm component and it should also set the author and comment state to initial blank string.


For time- being let us define an empty method in CommentBox component.


src/components/CommentBox.js


import React, {Component,Text, View} from 'react-native';

import CommentList from './CommentList.js';

import CommentForm from './CommentForm.js';

export default class CommentBox extends React.Component {

handleCommentSubmit(comment_data) {    

}

render() {

return(

<View>
  <Text>Comment It</Text>
  <CommentList />
  <CommentForm />
</View>

);

}

}


Now lets make sure that state of the CommentForm component changes with data in the input fields and the value of the input components are dependent on state.


src/components/__specs__/CommentForm.spec.js


import React, { View, TouchableNativeFeedback, TextInput, Text} from 'react-native';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import CommentForm from '../CommentForm.js';

describe('<CommentForm />', () => {
  beforeEach(function() {
    wrapper = shallow(<CommentForm />);
  });
 
  it('should be a view component', () => {
    expect(wrapper.type()).to.equal(View);
  });

  it('should have an initial state', () => {
    expect(wrapper.state('name')).to.equal("");
    expect(wrapper.state('comment')).to.equal("");
  });

  it('should have 2 TextInput components', () => {
    expect(wrapper.find(TextInput)).to.have.length(2);
  });

  it('should have a submit button', () => {
    expect(wrapper.find(TouchableNativeFeedback)).to.have.length(1);
    expect(wrapper.find(TouchableNativeFeedback).containsMatchingElement(<Text>Submit</Text>)).to.equal(true);
  });

  it('should have author input component with value dependent on state', () => {
    wrapper.setState({name: 'JK'});
  
    expect(wrapper.find(TextInput).first().props().value).to.equal('JK');
  });

  it('should have the comment input component with value dependent on state', () => {
    wrapper.setState({comment: 'An awesome comment'});
  
    expect(wrapper.find(TextInput).at(1).props().value).to.equal('An awesome comment');
  });

  it('should change state when the text of author input component changes', () => {
    const authorInputComponent = wrapper.find('TextInput').first();
 
    authorInputComponent.simulate('ChangeText','wenger');
    expect(wrapper.state('name')).to.equal('wenger');
  });

  it('should change state when the text of comment input component changes', () => {
    const commentInputComponent = wrapper.find('TextInput').at(1);
  
    commentInputComponent.simulate('ChangeText','arsenal');
  
    expect(wrapper.state('comment')).to.equal('arsenal');
  });
});


src/components/CommentForm.js


import React, {Component, View, TouchableNativeFeedback, Text, TextInput} from 'react-native';


export default class CommentForm extends React.Component {

constructor(props) {

super(props);

this.state = {name: '', comment: ''};

}


render() {

return(

<View>

<TextInput

placeholder="name"

style={{height: 40, borderColor: 'gray', borderWidth: 1}}

onChangeText={(text) => this.setState({name: text})}

value={this.state.name}

/>

<TextInput

placeholder="comment"

style={{height: 40, borderColor: 'gray', borderWidth: 1}}

onChangeText={(content) => this.setState({comment: content})}

value={this.state.comment}

/>

<TouchableNativeFeedback>

<View style={{width: 150, height: 100, backgroundColor: 'red'}}>

<Text style={{margin: 30}}>Submit</Text>

</View>

</TouchableNativeFeedback>

</View>

);

}
}


Now that that's done we'll wire up submission of form on clicking submit button. We must ensure that the submit button click should restore the state of two input components to initial state.


src/components/__specs__/CommentForm.spec.js


import React, { View, TouchableNativeFeedback, TextInput, Text} from 'react-native';

import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import CommentForm from '../CommentForm.js';
import CommentBox from '../CommentBox.js';

describe('<CommentForm />', () => {
  beforeEach(function() {
    wrapper = shallow(<CommentForm />);
  });
 
  it('should be a view component', () => {
    expect(wrapper.type()).to.equal(View);
  });

  it('should have an initial state', () => {
    expect(wrapper.state('name')).to.equal("");
    expect(wrapper.state('comment')).to.equal("");
  });

  it('should have 2 TextInput components', () => {
    expect(wrapper.find(TextInput)).to.have.length(2);
  });

  it('should have a submit button', () => {
    expect(wrapper.find(TouchableNativeFeedback)).to.have.length(1);
    expect(wrapper.find(TouchableNativeFeedback).containsMatchingElement(<Text>Submit</Text>)).to.equal(true);
  });

  it('should have author input component with value dependent on state', () => {
    wrapper.setState({name: 'JK'});
    expect(wrapper.find(TextInput).first().props().value).to.equal('JK');
  });

  it('should have the comment input component with value dependent on state', () => {
    wrapper.setState({comment: 'An awesome comment'});
    expect(wrapper.find(TextInput).at(1).props().value).to.equal('An awesome comment');
  });

  it('should change state when the text of author input component changes', () => {
    const authorInputComponent = wrapper.find('TextInput').first();
 
    authorInputComponent.simulate('ChangeText','wenger');
  
    expect(wrapper.state('name')).to.equal('wenger');
  });

  it('should change state when the text of comment input component changes', () => {
    const commentInputComponent = wrapper.find('TextInput').at(1);
  
    commentInputComponent.simulate('ChangeText','arsenal');
  
    expect(wrapper.state('comment')).to.equal('arsenal');
  });

  it('invokes handleCommitSubmit method of CommentBox with author and comment', () => {
    sinon.stub(CommentBox.prototype, "handleCommentSubmit");

    const wrapper = shallow(<CommentForm onCommentSubmit={CommentBox.prototype.handleCommentSubmit}/>);
    const submitButton = wrapper.find('TouchableNativeFeedback').first();
    wrapper.setState({name: 'JK '});
    wrapper.setState({comment: ' Arsenal is the best'});

    submitButton.simulate('press');
 
    expect(CommentBox.prototype.handleCommentSubmit.calledWith({author: 'JK', text: 'Arsenal is the best'})).to.be.true;
    CommentBox.prototype.handleCommentSubmit.restore();
  });

  it('sets the state of two input fields to the initial state on press', () => {
    sinon.stub(CommentBox.prototype, "handleCommentSubmit");
  
    const wrapper = shallow(<CommentForm onCommentSubmit={CommentBox.prototype.handleCommentSubmit}/>);
    const submitButton = wrapper.find('TouchableNativeFeedback').first();
    wrapper.setState({name: 'JK'});
    wrapper.setState({comment: 'Arsenal is the best'});
 
    submitButton.simulate('press');
 
    expect(wrapper.state('name')).to.equal("");
    expect(wrapper.state('comment')).to.equal("");
  
    CommentBox.prototype.handleCommentSubmit.restore();
  });
});


src/components/CommentForm.js


import React, {Component, View, TouchableNativeFeedback, Text, TextInput} from 'react-native';
export default class CommentForm extends React.Component {

 constructor(props) {
  super(props);
  this.state = {name: '', comment: ''};
 }
 static propTypes = {
  onCommentSubmit: React.PropTypes.func
 };

 
 render() {
  return(
  <View>
   <TextInput
    placeholder="name"
    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    onChangeText={(text) => this.setState({name: text})}
    value={this.state.name}
   />
  <TextInput
   placeholder="comment"
   style={{height: 40, borderColor: 'gray', borderWidth: 1}}
   onChangeText={(content) => this.setState({comment: content})}
   value={this.state.comment}
  />
  <TouchableNativeFeedback
   onPress={() => this.onPressButton()}>
   <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
    <Text style={{margin: 30}}>Submit</Text>
   </View>
  </TouchableNativeFeedback>
 </View>
 );
 }

 onPressButton() {
  var author = this.state.name.trim();
  var comment = this.state.comment.trim();
  this.state = {name: '', comment: ''};
  this.props.onCommentSubmit({author: author, text: comment});
 }

}

Observe how we test the behaviour of components on user interaction. We use 
[simulate()](http://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html)method provided by shallow rendering API of enzyme to simulate the 
press event here. This method can be used to test other types of user interactions as well.


CommentBox component  is where everything is wired up together. It should pass a list of comment data to CommentList as props and also handle storing the comments when submitted from CommentForm.

We’ll use  [Asyncstorage](https://facebook.github.io/react-native/docs/asyncstorage.html)of React-Native to store and retrieve comments. We’ll start with getting the comments and passing them to CommentList. The key for AsyncStorage data collection will be passed as props to CommentBox from app’s root component. Let us take care of submitting of a comment first .


src/components/__specs__/CommentBox.spec.js


import React, { View, Text, AsyncStorage } from 'react-native';

import { shallow } from 'enzyme';

import { expect } from 'chai';

import sinon from 'sinon';


import CommentBox from '../CommentBox.js';

import CommentList from '../CommentList.js';

import CommentForm from '../CommentForm.js';



describe('<CommentBox />', () => {

beforeEach(function() {

wrapper = shallow(<CommentBox asyncStorageKey={'comments'} />);

});

 it('should be a view component', () => {
   expect(wrapper.type()).to.equal(View);
 });

 it('should have a title Comment It', () => {
   expect(wrapper.contains(<Text>Comment It</Text>)).to.equal(true);
 });

 it('should render comment list component', () => {
   expect(wrapper.find(CommentList)).to.have.length(1);
 });
 
 it('should render comment form component', () => {
   expect(wrapper.find(CommentForm)).to.have.length(1);
 });

it('should have an initial state', () => {

expect(wrapper.state('data').length).to.equal(0);

});

it('should pass its state data as props to commentlist component', () => {

expect(wrapper.find(CommentList).props().data).to.eql(wrapper.state('data'));

});


it('should pass its handleCommentSubmit method as props to CommentForm component', () => {

commentBox = new CommentBox();

var definedMethod = commentBox.handleCommentSubmit;

var passedMethod = wrapper.find(CommentForm).props().onCommentSubmit;

expect(definedMethod.toString()).to.equal(passedMethod.toString());

});


describe('handleCommentSubmit', () => {

it('stores comment data using asyncstorage on comment submit', () => {

var data = [

{ author: "Pete Hunt", text: "This is one comment"},

{ author: "Jordan Walke", text: "This is a super comment"},

{ author: "Jordan Walkerr", text: "This is an ordinary comment"}

];

commentBox = new CommentBox({asyncStorageKey: 'comments'});

commentBox.state.data = data;

var commentData = {author: 'JK', text: 'Arsenal is the best'};

data.push(commentData);

var spy = sinon.spy(AsyncStorage, "setItem");

commentBox.handleCommentSubmit(commentData);

expect(spy.calledOnce).to.be.true;

expect(spy.calledWith('comments', JSON.stringify(data))).to.be.true;});});});


src/components/CommentBox.js


import React, {Component, Text, View, AsyncStorage } from 'react-native';

import CommentList from './CommentList.js';

import CommentForm from './CommentForm.js';


export default class CommentBox extends React.Component {

constructor(props) {

super(props);

this.state = {data: []};

this.handleCommentSubmit = this.handleCommentSubmit.bind(this);

}


static propTypes =  {

asyncStorageKey: React.PropTypes.string

};
  

handleCommentSubmit(comment_data) {

var comments = this.state.data;

comments.push(comment_data);

AsyncStorage.setItem(this.props.asyncStorageKey, JSON.stringify(comments));

}
  

render() {

return(

<View>

<Text>Comment It</Text>

<CommentList data={this.state.data}/>

<CommentForm onCommentSubmit={this.handleCommentSubmit}/>

</View>

);

}

}

That takes care of submitting comment part. Now lets do the comment loading part


src/components/__specs__/CommentBox.spec.js


import React, { View, Text, AsyncStorage } from 'react-native';

import { shallow } from 'enzyme';

import { expect } from 'chai';

import sinon from 'sinon';


import CommentBox from '../CommentBox.js';

import CommentList from '../CommentList.js';

import CommentForm from '../CommentForm.js';


describe('<CommentBox />', () => { describe('handleCommentSubmit', () => {
   it('stores comment data using asyncstorage on comment submit', () => {
     var data = [
      { author: "Pete Hunt", text: "This is one comment"},
      { author: "Jordan Walke", text: "This is a super comment"},
      { author: "Jordan Walkerr", text: "This is an ordinary comment"}
    ];

    commentBox = new CommentBox({asyncStorageKey: 'comments'});
    commentBox.state.data = data;
    var commentData = {author: 'JK', text: 'Arsenal is the best'};
    data.push(commentData);
    var spy = sinon.spy(AsyncStorage, "setItem");
   
    commentBox.handleCommentSubmit(commentData);
    
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('comments', JSON.stringify(data))).to.be.true;
 });

 it('invokes the getComments method', () => {
   var data = [
     { author: "Pete Hunt", text: "This is one comment"},
     { author: "Jordan Walke", text: "This is a super comment"},
     { author: "Jordan Walkerr", text: "This is an ordinary comment"}
   ];

   commentBox = new CommentBox({asyncStorageKey: 'comments'});
   sinon.stub(commentBox, "getComments");
   var commentData = {author: 'JK', text: 'Arsenal is the best'};
   
   commentBox.handleCommentSubmit(commentData);
   
   expect(commentBox.getComments.calledOnce).to.be.true;
   });
  });

});


src/components/CommentBox.js


import React, {Component,Text, View, AsyncStorage } from 'react-native';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';

export default class CommentBox extends React.Component {
 constructor(props) {
   super(props);
   this.state = {data: []};
   this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
   this.getComments = this.getComments.bind(this);
 }

 static propTypes = {
   asyncStorageKey: React.PropTypes.string
 };
 
 getComments() {
   AsyncStorage.getItem(this.props.asyncStorageKey)
     .then((comments) => {
       comments = JSON.parse(comments);
       this.setState({ data: comments });
     })
    .catch(() => {
    });
 }
 
 handleCommentSubmit(comment_data) {
   var comments = this.state.data;
   comments.push(comment_data);
   AsyncStorage.setItem(this.props.asyncStorageKey, JSON.stringify(comments));
   this.getComments();
 }
 
 render() {
   return(
     <View>
       <Text>Comment It</Text>
       <CommentList data={this.state.data}/>
       <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
     </View>
  );
 }
}


To get the app up and running we need to have a root component and register it in the App registry

Let us create a component called App and render CommentBox component inside it. While rendering the CommentBox component, we pass in the AsyncStorage key as props.


src/__specs__/app.spec.js


import React from 'react-native';

import { shallow } from 'enzyme';

import { expect } from 'chai';


import CommentBox from '../components/CommentBox.js';

import App from '../app.js';

describe('<App />', () => {

it('should render a commentBox component', () => {

const wrapper = shallow(<App />);

expect(wrapper.find(CommentBox)).to.have.length(1);

});


it('should pass data as props on rendering CommentBox component', () => {

const wrapper = shallow(<App/>);

expect(wrapper.find(CommentBox).props().asyncStorageKey).to.eql('comments');

});

});


src/components/app.js


import React, { Component } from 'react-native';

import CommentBox from './components/CommentBox.js';


export default class App extends Component {

render() {
    

return (

<CommentBox asyncStorageKey={'comments'}/>

);

}

}

Now register the component in the app registry and that’s it.


index.android.js


import { AppRegistry } from 'react-native';

import App from './src/app';

AppRegistry.registerComponent('ReactNativeBoilerplate', () => App);


You can view the entire codebase[here](https://github.com/multunus/React-Native-TDD-Tutorial).


****



**Finally**



Phew!  That was a long exercise. We’re proud that you completed it and happy for your learnings. That was mostly about UI testing. We also have sample tests for asynchronous JS code, redux, authentication etc. in our boilerplate. Do check them out.  


TDD provides a tight feedback loop that cranks up our development workflow and improves quality and maintainability of code. TDD is one among many engineering practises that we follow here at Multunus. There are other practises that we follow, like[Continous Integration](https://www.thoughtworks.com/continuous-integration)and guess what. We’ve started integrating these concepts into our boilerplate too. Do checkout our blogpost about[Automated environment management in React Native – iOS](http://www.multunus.com/blog/2016/06/automated-environment-management-react-native-ios/).
