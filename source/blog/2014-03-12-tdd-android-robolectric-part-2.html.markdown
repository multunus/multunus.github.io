---
title: TDD in Android with Robolectric Part.2
date: '2014-03-12 20:04:52'
tags:
- cap-sandeep
- android
- onemdm
- technology
wp:post_id: '4592'
link: http://www.multunus.com/blog/2014/03/tdd-android-robolectric-part-2/
---

In Part 1 of this three-part series [ 
[Part 1](http://www.multunus.com/blog/2014/02/tdd-using-roboelectric/), 
[Part 3](http://www.multunus.com/blog/2014/03/tdd-android-using-robolectric-part-3/) ], I had talked about problems involved in doing TDD when developing Android applications, and how 
[Robolectric](http://robolectric.org/) helps you overcome those problems. In this post, I will go into the details of Robolectric framework along with an example.


**Installation & setup**

Robolectric setup requires the 
[robolectric (with its dependencies](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.robolectric%22)) JAR and the 
[JUnit 4](http://sourceforge.net/projects/junit/files/junit/) JAR in the classpath. You also need to add the 
android.jar from your Android SDK installation directory to the classpath of the test project. You will find a very detailed description of Robolectric setup here: 
[Robolectric Installation for Unit Testing](https://github.com/thecodepath/android_guides/wiki/Robolectric-Installation-for-Unit-Testing)


**Writing Tests**   
****

Once Robolectric setup is done, you can start writing your tests. Let's take a look at a Robolectric test sample:@RunWith(RobolectricTestRunner.class)
public class MyActivityTest {
  @Test
  public void shouldShowLogoWhenButtonIsPressed() throws Exception {
      Activity activity = new MyActivity();
      activity.onCreate(null);
      ImageView logo = (ImageView) activity.findViewById(R.id.logo);
      Button button = (Button) activity.findViewById(R.id.button);
      assertThat(logo.getVisibility(), equalTo(View.GONE));   
      button.performClick();
      assertThat(logo.getVisibility(), equalTo(View.VISIBLE));      
  }
}


In line 1, the test class MyActivityTest is annotated with a JUnit annotation called 
[@RunWith](http://junit.sourceforge.net/javadoc_40/org/junit/runner/RunWith.html), it invokes the class it references to run the tests in that class instead of the runner built into JUnit. Since Android code is used in the test, we need to use Robolectric as the test runner which is achieved using the above annotation. This is the starting point of a Robolectric test.


Setup


Next, let's go through the each of the lines in the test . The test code starts at line 5, and here the MyActivity class is instantiated which is an Android activity, so the test would have thrown an exception right here if Robolectric was not used. Just a reminder!


In line 6, one of the life cycle methods of any Android activity "onCreate" is called and this will set the user interface layout for this Activity. So, if our layout had a logo or a button on it we could use 
findViewById method and get references to these objects, which is done in lines 7 and 8. In line 9, it is asserted that the logo is not there in the layout, this is just to ensure that the test is in correct state before and with this setup for the test is completed.


Action & Assertion


In line 10, a click action is performed on the button using Android's 
performClick method, this will cause the click listeners registered on the button to fire and that will cause the application code to run. Lastly, the visibility of the logo is asserted to be true in line 11.


Next Steps

The above example will get you started on doing Unit Testing with Robolectric, but Robolectric framework has many other features which help you to test most of the use cases you come across in unit testing Android applications. For example, we can use
Shadow objects in our tests. Shadows are like mocks or stubs, but not quite the same.


Shadows exist to add additional methods that can be used in tests to inspect the state of the underlying Android object. For example, many Android objects have setters for certain values, but no getters. We can add getters to the shadows and use them in test to assert on the underlying object.

I will share some examples on using Shadows in tests in my next post.
