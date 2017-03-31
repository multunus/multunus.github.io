---
title: Continuous Delivery for Android Apps – Part 2
date: '2011-10-06 06:51:57'
tags:
- cap-leena
- android
- continuous-delivery
- onemdm
- process
- technology
wp:post_id: '4158'
link: http://www.multunus.com/blog/2011/10/continuous-delivery-for-android-apps-part-2/
---

This post talks about how to run tests for the build setup as mentioned in 
[Part 1](http://www.multunus.com/2011/09/continuous-delivery-for-android-apps-part-1/).


**Generate the build script for test**

The suggested practice is to have 2 separate projects for android, one the source and the other for the tests. The following command will generate a build.xml for the test project. Replace the with the path of the source path.

android update test-project -m ../<project-path> -p .

One problem I’ve seen is that, it does not break the build even if there are failures in the test. Issue is reported here:


[http://code.google.com/p/android/issues/detail?id=14241](http://code.google.com/p/android/issues/detail?id=14241)

I had to override the run-tests target as mentioned below to fix this issue:<target name="run-tests" depends="-install-tested-project, install"
description="Runs tests from the package defined in test.package property">
    <echo>Running tests ...</echo>
    <exec executable="${adb}" failonerror="true" outputproperty="tests.output">
<arg value="shell" />
<arg value="am" />
<arg value="instrument" />
<arg value="-w" />
<arg value="-e" />
<arg value="coverage" />
<arg value="@{emma.enabled}" />
<arg value="${manifest.package}/${test.runner}" />
    </exec>
    <echo message="${tests.output}"/>
    <fail message="Tests failed!!!">
<condition>
    <or>
    <contains string="${tests.output}" substring="Error" />
    <contains string="${tests.output}" substring="Fail" />
    </or>
</condition>
     </fail>
</target>

You can change the ant commands to 
clean run-tests releasein Jenkins to run the tests as part of packaging.

Next I will be writing about how to start emulator from Jenkins while running the tests.
