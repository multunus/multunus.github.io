---
title: Setting up Development Environment using Vagrant
date: '2012-10-03 10:55:05'
tags:
- cap-abhilash
- cap-vimal
- technology
wp:post_id: '4148'
link: http://www.multunus.com/blog/2012/10/setting-up-development-environment-using-vagrant/
---

**Problem**


We have some projects which takes lot of effort to set up. As with every projects setting up development environment includes installing git, curl, apache, mysql-server, ruby, rvm, ruby-gems for the app, etc. and also the project specific configurations.

Doing all these every time when you need to setup the development environment will be time consuming and takes a lot of effort.


**Solution**


Setting up the development environment in VM using Vagrant.

Vagrant helps to build development environment for projects and rebuild them when needed. And this environment can be shared among the team easily.


**How?**


Vagrant is primarily a driver for Oracle VirtualBox virtual machines. You can download and install Vagrant from 
[here](http://downloads.vagrantup.com/) or you can install it as a ruby gem for the rails projects. Vagrant uses a “base box” which is a base install (an OS) for the system you are going to use.

Different flavours of base boxes can be downloaded from 
[http://www.vagrantbox.es/](http://www.vagrantbox.es/).

First step is to mark the root directory and setup the basic required files using the following command:

vagrant init
This will create a file called 
**Vagrantfile** this will contain the configuration details for the VM.

After the project initailization you can download Vagrant boxes from 
[http://www.vagrantbox.es/](http://www.vagrantbox.es/) and add it to your project:

vagrant box add lucid64 lucid64.box
You can also add the box from a remote server using:

vagrant box add lucid64 http://files.vagrantup.com/lucid64.box
To list the boxes that you added you can use:

vagrant box list
Now you have to edit the Vagrantfile to use the base box that you have added.

Vagrant::Config.run do |config|
config.vm.box = "lucid64" 
end
Now we can start our new VM:

vagrant up
This will start a fully functional VM.

To access the VM you have to do ssh:

vagrant ssh
This will log you into the virtual machine.

Now you can start setting up the development environment. Once everything is ready we can package this VM to a box. This will help us to share the virtual environment that we created with the other team members.

vagrant package
This will create a vagrant box with the entire dev environment setup.

Now to use this any machine, you have to install Virtualbox and Vagrant. Then add this box using:

vagrant box add lucid64_with_dev_setup package.box
You can create a VM with this box and all the dev environment setup will be available with this VM.
