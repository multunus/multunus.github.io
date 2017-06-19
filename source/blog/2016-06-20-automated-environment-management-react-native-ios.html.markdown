---
title: Automated environment management in React Native - iOS
date: '2016-06-20 22:54:07'
tags:
- akshay
- technology
link: http://www.multunus.com/blog/2016/06/automated-environment-management-react-native-ios/
---

One of the mundane error prone tasks while developing mobile apps, is switching between different versions (say dev and production) of the app for testing. If not automated, this often involves manually changing environment specific configurations back and forth. You know what we programmers do - comment out certain parts of the code and uncomment them back again later. And of course, sometimes we forget to do the latter :)

At Multunus, we started researching and using React Native about 6 months ago. One of the problems we faced early on was switching between development, staging and production environments for our RN app. This included server URLs, keys to third party services like
[CodePush](https://microsoft.github.io/code-push/) and feature toggles! And we had to use these environment specific config in our JS code. Ideally, we wanted to be able to build different versions (i.e., dev, staging, production) of the app instead of switching the environment configuration each time you build.

This post is going to walk you through a solution to this problem on iOS and probably also introduce some idioms of iOS development (assuming you are new to iOS development).

To start with, let us try and break this problem down a little further. What we need is

1. Be able to build different versions of the app for each environment.
2. Identify which version the app is built and use the appropriate config (on the JS side)

One strategy for this would be

1. Store the config of all environments in a JSON file
2. On the native side, use different XCode configurations to build different versions of the app
3. Expose a configuration specific environment name (Eg., staging) to the JS side using native modules
4. On the JS side, import the native module to get the environment name. Then using the JSON file mentioned above get the appropriate config

Let’s look at step one.


##The JSON config file


Let’s start by creating a `config.json` in the root directory of the project. This will store our config for all the environments.

~~~ json
// config.json
{
  "development": {
    "codePushKey": "",
    "appServerRootURL": "http://localhost:3000"
  },
  "staging": {
    "codePushKey": "STAGING CODE PUSH KEY",
    "appServerRootURL": "STAGING ROOT URL"
   },
  "production": {
    "codePushKey": "PRODUCTION CODE PUSH KEY",
    "appServerRootURL": "PRODUCTION ROOT URL"
  }
}
~~~
Note that the top level keys contain the different environment names and all we need is to figure out which of these keys to access the config from.


##Build different versions of the app


Let us say, we need development, staging and production versions of the app. Now if you have used the
react-native-cli to generate the app for the first time, you would have two configurations set up in your XCode project -
**Debug** and **Release**.

![xcode_configurations_1](https://s3.amazonaws.com/multunus-website/uploads/2016/06/xcode_configurations_1.png?w=1024)

Going forward we shall use
**Debug** for our development app and **Release**
 for our production app. That means we’ll need one more for our staging app. So, let’s create a duplicate of the **Release**
 configuration and name it  **Staging**.

![xcode_configurations_2](https://s3.amazonaws.com/multunus-website/uploads/2016/06/xcode_configurations_2.png)

Why not rename those configurations to
**Development** and **Production**
 and be more consistent in our naming? The React Native code is heavily dependent on those configuration names to make certain optimisations to **Release** builds.

XCode schemes are a convenient way to use different configurations while building an app both from the command line and the XCode GUI. Quoting Apple’s developer docs, *An Xcode scheme defines a collection of targets to build, a configuration to use when building, and a collection of tests to execute.* So in our case, we need to have three schemes to build using each of those three configurations. So let’s create them! XCode projects usually start with one scheme per target.

To start with, let us create a scheme for development builds. Duplicate the existing scheme (the name is usually the same as that of the project) and give it an appropriate name.


![xcode_schemes_1](https://s3.amazonaws.com/multunus-website/uploads/2016/06/xcode_schemes_1.png)


![xcode_schemes_2](https://s3.amazonaws.com/multunus-website/uploads/2016/06/xcode_schemes_2.png?w=1024)

Choose
**Debug**as the build configuration for the **Run** and **Archive**
 actions. Similarly, create a scheme for the staging app and choose **Staging** as the build configuration for the **Run** and **Archive**
 actions. Now you can choose the new schemes from the top left corner while running / archiving the app from the XCode GUI or while archiving it from the command line.


![xcode_schemes_3](https://s3.amazonaws.com/multunus-website/uploads/2016/06/xcode_schemes_3.png?w=1024)


![xcode_schemes_4](https://s3.amazonaws.com/multunus-website/uploads/2016/06/xcode_schemes_4.png)




##The native module


We are now able to build different versions of the app. What we need next is a way to identify which version was built. We will use a User-Defined setting on XCode to accomplish this. Let’s create a User-Defined setting called `BUILD_ENV` . Now user defined settings can have different values for each configuration. So let’s set the values as
**Development**, **Staging** and **Production** for **Debug**,**Staging** and **Release** respectively.


![user_defined_setting_1](https://s3.amazonaws.com/multunus-website/uploads/2016/06/user_defined_setting_1.png?w=1024)




![user_defined_setting_2](https://s3.amazonaws.com/multunus-website/uploads/2016/06/Screen-Shot-2016-11-03-at-7.54.03-AM.png?w=1024)

User-Defined settings are not accessible from the code directly. Instead they have to be stored in the `Info.plist` to be accessed from the application code. So we now add a new property key-value to the `Info.plist` file. Let’s call the key `BuildEnvironment` and set the value to `$(BUILD_ENV)`. This will set the value from the user defined setting.


![user_defined_setting_3](https://s3.amazonaws.com/multunus-website/uploads/2016/06/Screen-Shot-2016-11-03-at-7.54.03-AM.png?w=1024)

Now that `buildEnvironment` is accessible, let’s create our native module! We’ll call this `RNConfig.` Let’s create a header file `RNConfig.h` and an Objective-C class file `RNConfig.m`


![native_module_1](https://s3.amazonaws.com/multunus-website/uploads/2016/06/native_module_1.png?w=1454)

As mentioned in the docs for native modules, our class should implement the
RCTBridgeModule protocol.


    // RNConfig.h
    #import "RCTBridgeModule.h"

    @interface RNConfig : NSObject
    @end

    // RNConfig.m
    #import "RNConfig.h"

    @implementation RNConfig

    RCT_EXPORT_MODULE();

    - (NSDictionary *)constantsToExport
    {
      NSString* buildEnvironment = [[[NSBundle mainBundle] infoDictionary] valueForKey:@"BuildEnvironment"];
      return @{ @"buildEnvironment": buildEnvironment };
    }

    @end%

Note the line

    NSString* buildEnvironment = [[[NSBundle mainBundle] infoDictionary] valueForKey:@"BuildEnvironment"];

This is the bit that reads the
buildEnvironment from `Info.plist.` The next line returns a dictionary with the`buildEnvironment` value. So here we are! The native side of the app can now expose to the JS side the environment’s name the app was built for.


##Get the appropriate config in JS


Now that the native module is created, we just need to import it in our JS code and we will have the environment name. A convenient way of accessing the configuration data in our application code is to create an abstraction on top of the `envConfig.json` and the `RNConfig` native module. This will be a JS module which will get the environment name from the native module and use that to get the appropriate config from the JSON file.

So, let’s create a file `appConfig.js` in the root directory (the main project directory, not the ios/YOUR_PROJECT_NAME directory)


    // appConfig.js
    import { RNConfig } from 'NativeModules';
    import EnvConfig from './envConfig.json';

    let environment = RNConfig.buildEnvironment;

    let getAppServerRootURL = function() {
      return EnvConfig[environment].appServerRootURL;
    }

    export default {
      appServerRootURL: getAppServerRootURL()
    }

It’s now quite straightforward to access the server root URL in our application code. We just import the
appConfig module and use it like so


    import AppConfig from './appConfig';

    let appServerRootURL = AppConfig.appServerRootURL;

As simple as that! Clearly any environment specific configuration like CodePush keys, GA tracking code and feature toggles depending on your necessity.


##Final thoughts


We have built a boilerplate app with React Native -
[https://github.com/multunus/react-native-boilerplate](https://github.com/multunus/react-native-boilerplate). It’s still quite young but it includes some sensible choices already made for things like environment management, state management in JS, etc. So the stuff that is explained in this post has already been taken care of in the boilerplate. All that needs to be done is to change the app name and the scheme names.

Also, another blog post for tackling the same problem in Android is coming up. So stay tuned!

Before ending, I would like to point out one little shortcoming of the approach explained in this post. We are yet to figure out a good way to access the environment specific config on the native side. While I haven’t really found a need for that yet, it is not hard to imagine situations where it will be needed. So, if you’ve figured that out, let us know!
