---
title: Autonomous RC car using Raspberry Pi and Neural Networks
date: '2016-07-29 19:24:19'
tags:
- cap-vignesh
- cap-vimal
- technology
link: http://www.multunus.com/blog/2016/07/autonomous-rc-car-using-raspberry-pi-and-neural-networks/
---

In this project, we will be building an autonomous rc car using [supervised learning](https://en.wikipedia.org/wiki/Supervised_learning) of a [neural network(https://en.wikipedia.org/wiki/Artificial_neural_network) with a single hidden layer. We will use a remote-controlled car with a [Raspberry Pi](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) and a [Raspberry Pi camera module](https://www.raspberrypi.org/products/camera-module/) mounted on top. In the training mode, the camera module would provide images needed to train the neural network and in the autonomous mode; would provide the images to the trained model to predict the movements and direction of the car. You can find the Github repository for this project [here](https://github.com/multunus/autonomous-rc-car). Here's a video of the car in action.

https://www.youtube.com/watch?v=dCyBvLjW6X0&feature=youtu.be&rel=0&vq=hd1080


## Setup
We will need a remote controlled car, a Raspberry Pi, a power bank, an L293D Motor Driver IC and some jumper wires to connect the circuits. We glued a cardboard to the top of the RC car and fixed the Raspberry Pi and the power bank to it.

[![Autonomous car](http://www.multunus.com/wp-content/uploads/2016/07/IMG_0618-300x225.jpg)](http://www.multunus.com/wp-content/uploads/2016/07/IMG_0618.jpg)

##Take One
Our initial approach was to use the Raspberry Pi as a radio transmitter by figuring out the frequencies for the RC car using [pi-rc](https://github.com/bskari/pi-rc) and replace the remote control. We adopted this approach, and things were progressing well until we developed slightly more complicated circuits. The car would be too fast around the turns, and the natural approach to take would be to reduce the speed around the corners. We would have had to make modifications to control the DC motors of the car or get a geared remote controlled car. We went ahead with the first approach!

##Say no to remote controllers
[![Autonomous car without the remote](http://www.multunus.com/wp-content/uploads/2016/07/IMG_0522-300x225.jpg)](http://www.multunus.com/wp-content/uploads/2016/07/IMG_0522.jpg) The remote controller on the left is disappearing slowly!![/caption]

We will be referring the DC motor controlling the left/right direction as the front motor and the motor controlling the forward/reverse direction as the back motor. An L293D Motor Driver IC will be used to control the motors.

[![Circuit Diagram for the RC car controller](http://www.multunus.com/wp-content/uploads/2016/07/RC-car-driver-IC-3-300x282.png)](http://www.multunus.com/wp-content/uploads/2016/07/RC-car-driver-IC-3.png) Circuit Diagram for the RC car controller[/caption]

We'll connect two GPIO pins( GPIO17 and GPIO27) from the Raspberry Pi to the two Input pins for Motor 1(Input 1, Input 2) of the IC and another GPIO pin(GPIO22) to the Enable pin for Motor 1(Enable 1,2) of the IC. We'll connect the Output pins for Motor 1(Output 1, Output 2) of the IC to the back motor. With this approach, we can control not only the forward/reverse direction of the motor but also the speed of the motor by setting the frequency and duty cycle of the PWM output to the Enable pin. Similarly, two GPIO pins(GPIO19 and GPIO26) from the Raspberry Pi are connected to the two Input pins for Motor 2(Input 3, Input 4) of the IC and the Output pins for Motor 2(Output 3, Output 4) of the IC is connected to the front motor. We have now eliminated the need for any radio transmitter to control the movement of the car.

##Let's mount that camera
The Raspberry Pi camera module mounted on top of the car captures the images required for the training and the autonomous navigation of the car. The camera module was attached to a piece of cardboard which was not sturdy and would change the angle of inclination of the camera. A slight shift in the angle of inclination would cause the model trained on the previous set of images to perform very poorly due to the mismatch between the current viewport and the earlier viewport. We fixed this issue by mounting the camera on a sturdy stand and also ensured that the camera would be centred thus, providing a very broad view.

[![Camera mounted on a sturdy stand atop the autonomous car](http://www.multunus.com/wp-content/uploads/2016/07/146979113190599-225x300.png)](http://www.multunus.com/wp-content/uploads/2016/07/146979113190599.png) Camera mounted on a sturdy stand[/caption]


##With great images come great responsibility
After stabilising the camera, the trained models would give excellent results on the earlier circuit configurations, but it would perform poorly when the circuit configuration changed slightly. The new camera position provided a stabilised set of images, but a large area of the new image set would contain information irrelevant for the navigation of the car. Since portions of the road necessary for the next navigation action would be almost entirely in the lower half of the image, we used this as inputs to the neural network for training and prediction.

[![Image captured by the camera module of the autonomous car](http://www.multunus.com/wp-content/uploads/2016/07/image01-300x225.png)](http://www.multunus.com/wp-content/uploads/2016/07/image01.png) The lower half of the image will be input to the neural network[/caption]


##Training with Neural Networks
The images required for training the neural network can be captured using 
interactive_control_train.py. At the command prompt, run the following command:
```
python interactive_control_train.py
```
The command opens a [Pygame](http://www.pygame.org/) screen where the movements of the car can be controlled using the direction arrows. The images are captured along with the corresponding key press to assist us in their segregation later. We initially used [PiCamera's capture()](http://picamera.readthedocs.io/en/release-1.10/api_camera.html#picamera.camera.PiCamera.capture) method with the filename parameter to capture the images, and could capture only a few but high-quality images. When the use_video_port parameter is not specified, the camera utilises the still mode; the images are obtained using the full area of the sensor and a[slow, powerful denoise algorithm](http://picamera.readthedocs.io/en/release-1.10/fov.html#under-the-hood)processes these images. When set, the use_video_port parameter uses the video port with which we can capture images rapidly but typically appear grainier when compared to those obtained with the still port. We drove the car on various circuit configurations and generated around 2000 images for the training data set. We should clean the data before segregating the images into their respective class folders based on the key press indicated in their filenames.

[![Image captured with the still port (top) and video port (bottom)](http://www.multunus.com/wp-content/uploads/2016/07/image02-300x300.png)](http://www.multunus.com/wp-content/uploads/2016/07/image02.png) Image captured with the still port (top) and video port (bottom)[/caption]

With the images in their respective class folder, we can start training the neural network. We split the image horizontally and convert the lower half into a[numpy](http://www.numpy.org/) 
[ndarray](http://docs.scipy.org/doc/numpy/reference/generated/numpy.ndarray.html)where the colour layers flatten into a single gray-scale layer. The colour information does not provide additional information to identify features and hence the images are gray-scaled. We resize the ndarray according to the dimensions specified in the configuration file and flatten it. The flattened ndarray for each image serves as input to the neural network, and its corresponding class label value is the expected output. We can provide the regularisation parameter(
lambda) and the number of hidden layer nodes(hidden layer size) while training the neural network; default values would be those specified in the configuration file. At the command prompt, run the following command:
```
python train.py 0.1 60
```
The values of lambda and the hidden layer size should be chosen carefully to prevent the network from overfitting/underfitting the data. The network will underfit for large values of lambda and small values of the 
hidden layer size. Similarly, lower values of lambda and large values of the hidden layer size cause the network to overfit the data and will start incorporating noise into the model. We have experimented with various values of lambda and found that values between 0 and 0.1 are adequate in most cases. The rule of the thumb for the number of nodes in the hidden layer is that they are usually between the size of the input layer and the size of the output layer. We collected around 2000 images and used a lambda value of 0.1 and a hidden layer size of 110. The cost function is minimised using the L-BFGS-B algorithm. We'll store the trained model as a pickle file in the optimized-thetas folder.

##Give that car some autonomy
Once we have the trained model, we can run the RC car autonomously using 
autonomous.py. It accepts an optional argument for the trained model; default will use the latest model in the 
optimized_thetas folder. At the command prompt, run the following command:
```
python autonomous.py
```
The lower half of the images captured by the camera module is input to the trained model which predicts the next navigation action. The front and the back motors are set based on the predicted action. We'll save the images with their predicted output for training models in the future.


[![That's all Folks](http://www.multunus.com/wp-content/uploads/2016/07/image05-300x169.png)](http://www.multunus.com/wp-content/uploads/2016/07/image05.png)

We started this project with the intention of making Machine Learning fun and exciting for all ML enthusiasts. We built this during our [20% investment time](http://www.multunus.com/blog/2016/01/20-investment-time-background-story/) and wanted to share our learnings and experiences with you. Special thanks to [Andrew Ng](http://www.andrewng.org/) for his fantastic [Coursera course](http://www.coursera.org/learn/machine-learning) on Machine Learning. Please let us know if you have any queries or suggestions on improving this project. Thank You for going through this post, we hope you find it useful. :)