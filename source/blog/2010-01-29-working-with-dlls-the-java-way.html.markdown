---
title: Working with DLLs, the Java way
date: '2010-01-29 12:20:51'
tags:
- jeevan
- technology
wp:post_id: '4189'
link: http://www.multunus.com/blog/2010/01/working-with-dlls-the-java-way/
---

We had a very simple requirement, to invoke my DLLs using Java code for couple of reasons:

1. We want to reuse application code built for a .NET application
1. We want to integrate the DLLs with a Java based sever technology
1.  Should be simple enough to maintain the code by .NET professionals

There are couple of Java-COM bridging solutions I came across.

- [Java Native Interface (JNI)](http://en.wikipedia.org/wiki/Java_Native_Interface)
- [JACOB](http://sourceforge.net/projects/jacob-project/)
- [Scriptom (Groovy - COM Scripting)](http://groovy.codehaus.org/COM+Scripting)
- [Java Native Access (JNA)](https://jna.dev.java.net/)
- [JNBridge](http://www.jnbridge.com/)

In this post, we’ll see how Scriptom can be used to access DLLs.

Scriptom is a module in Groovy (A Java VM based scripting language) which wraps the JACOB classes to make it more usable. Scriptom’s syntax looks like VB.NET code.

Lets jump in to the sample application.

Assume that we have a VB class named TimerState in the TestDLL VB.NET project, exposes the COM, signed and generates the DLLs.

Following is the TimerState VB class. In this class, we have an event
UpdateTime which raises an event when to notify updated time.

```
Public Event UpdateTime(ByVal Jump As Double)
    Public Sub TimerTask(ByVal Duration As Double)
        Dim Start As Double
        Dim Second As Double
        Dim SoFar As Double
        Start = Timer
        SoFar = Start
        Do While Timer < Start + Duration
            If Timer - SoFar >= 0.1 Then
                SoFar = SoFar + 0.1
                RaiseEvent UpdateTime(Timer - Start)
            End If
        Loop
    End Sub
End Class
```

We want to use this logic in the Scriptom code and do something whenever a UpdateTime event is raised. Here are the steps:

1. Register the DLLs (this is required step for the Java Virtual Machine to get meta data about the DLLs)
1. Download Scriptom
1. Copy the jacob-`* .dll to any system PATH`
1. Have all the JARS from Scriptom jar folder available in the CLASSPATH

Following is the sample code for invoking
```
import org.codehaus.groovy.scriptom.ActiveXObject // Imports the ActiveX object class which holds the reference to the class in DLL
def timer = new ActiveXObject("TestDLL.TimerState") // Looks for the meta data in the registry with "TestDLL.TimerState" name and creates a reference to that class
def time = 1.00
timer.events.UpdateTime = { variants -> // event registration for UpdateTime event in the VB class. Variants holds the data passed from the event. In this case, it is Jump value.
    println "UpdateTime: " + variants[0] // We're just printing the upated time
}
timer.TimerTask(time) // starting the timer task in TimerState class
while(true) { // keeping itself alive to respond when timer events are raised
}
```

Please refer  [COM Data Types in Scriptom](http://groovy.codehaus.org/COM+Data+Types+in+Scriptom) for the .NET data types supported in Scriptom.

In the next post, we’ll discuss about JNBridge, a comercial solution.
