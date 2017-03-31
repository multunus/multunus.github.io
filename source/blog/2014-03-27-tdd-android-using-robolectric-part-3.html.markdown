---
title: TDD in Android using Robolectric Part.3
date: '2014-03-27 17:41:32'
tags:
- cap-sandeep
- android
- onemdm
- technology
wp:post_id: '4656'
link: http://www.multunus.com/blog/2014/03/tdd-android-using-robolectric-part-3/
---

This is the final part of the 3-part series [ 
[Part 1](http://www.multunus.com/blog/2014/02/tdd-using-roboelectric/), 
[Part 2](http://www.multunus.com/blog/2014/03/tdd-android-robolectric-part-2/) ] on Robolectric. In Part 2, I had gone through the Robolectric set up and a simple example showing how to write unit test using Robolectric.

In this post, I'll go through a couple of  tests, where with the help of Shadows we can test certain use cases which otherwise wouldn't have been possible.


**Why do you need Shadows in your tests?**


Shadows exist to add additional methods that can be used in tests to inspect the state of the underlying Android object. For example, many Android objects have setters for certain values, but no getters. We can add getters to the shadows and use them in test to assert on the underlying object. 


**Robolectric built-in Shadows**

Robolectric  has defined many shadow classes, which modify or extend the behavior of classes in the Android OS. When an Android class is instantiated, Robolectric looks for a corresponding shadow class, and if it finds one it creates a shadow object to associate with it. Every time a method is invoked on an Android class, Robolectric ensures that the method corresponding to the shadow class is invoked first (if there is one), so that it can work its magic.

Robolectric has provided 
Shadows for most of the Android classes, but it lets you create your own 
Shadows as well just in case you need a Shadow that is not there in the Shadows provided by Robolectric.


**Examples using Robolectric's built-in Shadows**

1) To test whether the next 
Activity has started using Intent object@RunWith(RobolectricTestRunner.class)
public class MyActivityTest {
    @Test
    public void shouldShowLogoWhenButtonIsPressed() throws Exception {
Activity activity = new MyActivity();
activity.onCreate(null);
Button button = (Button) activity.findViewById(R.id.button);
button.performClick();
Intent intent = Robolectric.shadowOf(activity).peekNextStartedActivity();
assertEquals(SecondActivity.class.getCanonicalName(), intent.getComponent().getClassName());
    }


The tests starts from line 5, where we are creating an instance of our activity class MyActivity. It is followed by the lines 6 and 7 where basically we are setting up the test. We are performing the click action on the button in line 8. In line 9, we are getting hold of the instance of next activity using the peekNextStartedActivity method of ShadowActivity class. And finally in the last line we are asserting that the next activity - SecondActivity, is started on click of the button.

2) To test our application code which uses Android system services like Alarm


public class ResetAlarm {
    AlarmManager alarmManager;
    public ResetAlarm(Context context) {
    setupAlarmManager(context);
    }

    private void setupAlarmManager(Context context) {
    Intent intent = new Intent("com.cmh.RESET_ALARM");
    PendingIntent sender = PendingIntent.getBroadcast(context, 0, intent, PendingIntent.FLAG_CANCEL_CURRENT);
    alarmManager = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);
alarmManager.setRepeating(AlarmManager.ELAPSED_REALTIME_WAKEUP, SystemClock.elapsedRealtime() + 1000 , checkFrequency(), sender);
    }

    private int checkFrequency() {
    return 1000 *  60 *  30;
    }
}

In the above example the application code uses the Android class AlarmManager which provides access to system alarm services and 
[schedules a repeating alarm](http://developer.android.com/training/scheduling/alarms.html). When the alarm fires the pending intent is triggered. We can test this using one of Robolectric's 
Shadows - ShadowAlarmManager. Below is the corresponding test:


@RunWith(RobolectricTestRunner.class)
public class ResetAlarmTest {
    ShadowAlarmManager shadowAlarmManager;
    AlarmManager alarmManager;

    @Before
    public void setUp() {
       alarmManager = (AlarmManager) Robolectric.application.getSystemService(Context.ALARM_SERVICE);
       shadowAlarmManager = Robolectric.shadowOf(alarmManager);
    }

    @Test
    public void start_shouldSetRepeatedAlarmWithAlarmManager() {
Assert.assertNull(shadowAlarmManager.getNextScheduledAlarm());
    new ResetAlarm(Robolectric.application.getApplicationContext());
    ScheduledAlarm repeatingAlarm = shadowAlarmManager.getNextScheduledAlarm();
    Assert.assertNotNull(repeatingAlarm);
    }
}

The setup for this test is straight forward and has just two lines - lines 8 and 9. In the first line, through Robolectric's magic we are getting handle to an instance of AlarmManager which is an Android class. In the second line, we are getting hold of the Shadow of the AlarmManager through Robolectric's static method.

In the test - line 14 to 18, first we make sure that no alarm is scheduled, then we instantiate the actual class - ResetAlarm which schedules the alarm. In line 16, we get hold of the scheduled alarm by using the shadow - ShadowAlarmManager. And finally, we assert that the scheduled alarm that we got from the shadow is not null.


**Conclusion**

The above examples will just get you a glimpse of what kind of tests you can write using Robolectric's 
Shadows. There are many more use cases where these Shadows come in very handy. For example, you can use Shadows to test the resource id in an ImageView, to test whether audio file is present in raw folder and others. Also, you can create your own Shadows as well, to cover use cases where you cannot use Robolectric's built-in ones or it is not sufficient.
