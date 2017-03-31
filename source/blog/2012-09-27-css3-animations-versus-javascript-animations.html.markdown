---
title: CSS3 animations versus Javascript animations
date: '2012-09-27 10:55:05'
tags:
- cap-manoj
- cap-midhun
- technology
wp:post_id: '4149'
link: http://www.multunus.com/blog/2012/09/css3-animations-versus-javascript-animations/
---

**tl; dr;**


Layout engines in major browsers, like gecko, webkit or trident now have many optimization functions for animations. But these will simply cease to function if you’re using jQuery animations because in reality jQuery is not “animating” anything. However, in the case of CSS3, the browser optimizes animations using the GPU’s resources to give a much more polished effect. Go in for CSS3 whenever possible.


**The long version:** jQuery is an excellent js framework to do a lot of things, but is it what you need for blazing fast performance with animations for your website? Lets dig a little bit deeper into the actual implementations, by considering these two examples,


**(a) jQuery animation**


$(".onclick").toggle(
      function(){
$(".children").animate({height:'50'});
      },
      function(){
$(".children").animate({height:'0'});
      }
  );

<iframe style="width: 100%; height: 272px;" src="http://jsfiddle.net/midhun_k/aq9gq/embedded/" height="240" width="320" frameborder="0"></iframe>

In this case the drop down menu is implemented using jquery animate method.


**(b) CSS3 animation**


.children{
   height: 0px;
   border-bottom: 1px solid grey;
   -webkit-transition: height .3s ease-in-out;
}

.children-onhover{
   height: 50px;
}

$(".onclick").click(function(){
    $(".children").toggleClass("children-onhover");
});

<iframe style="width: 100%; height: 272px;" src="http://jsfiddle.net/midhun_k/kANVs/embedded/" height="240" width="320" frameborder="0"></iframe>

In this case the drop down menu is done using css3 transitions using ease-in-out transition effect.

Lets analyze what’s going on with the css3 animation for sliding down the menus. Both of these menus progressively increase the height of each of the containing submenus, but in case of css3, the height is progressively updated from the old value to the new value over time, which is done by the layout engine of the browser internally, as it is described in the "http://www.webkit.org/blog/138/css-animation/">surfin’ safari blog.

In case of jQuery, inside the animate of each property, an fx Object is created.

jQuery.each( prop, function( name, val ) {
  var e = new jQuery.fx( self, opt, name );
}
This return a javascript object instance,

fx: function( elem, options, prop ) {
  this.options = options;
  this.elem = elem;
  this.prop = prop;

  if ( !options.orig ) {
      options.orig = {};
  }
}
After that, the start and end values is set. In our case:

start = 0;
   end = 50;
   unit = 'px';
   e.custom( start, end, unit );
The above snippet calls the custom function:

custom: function( from, to, unit ) {
  this.startTime = now();
  this.start = from;
  this.end = to;
  this.unit = unit || this.unit || "px";
  this.now = this.start;
  this.pos = this.state = 0;

  var self = this;
  function t( gotoEnd ) {
      return self.step(gotoEnd);
  }

  t.elem = this.elem;

  if ( t() && jQuery.timers.push(t) && !timerId ) {
      timerId = setInterval(jQuery.fx.tick, 13);
  }
}
As you can see above, a call to step method is made every every 13 milliseconds. As of jQuery 1.8 this interval is called JQuery.fx.interval.

That is, for a height increase of 50px over a time period of 400ms (default JQuery animation interval), it does 31 steps of 13 ms each.

jQuery.fx.speeds = {

slow: 600,
    fast: 200,
    // Default speed
    _default: 400 
};
As of jQuery 1.8 the step function is replaced, but the same logic is applied:

step: function( gotoEnd ) {
  var t = now();
  var n = t - this.startTime;
  this.state = n / this.options.duration;
  pos = jQuery.easing['swing'](this.state, n, 0, 1, this.options.duration);
  this.now = this.start + ((this.end - this.start) *  this.pos);
  this.update();
}
You can dig deeper into jQuery effects at:
[https://github.com/jquery/jquery/blob/master/src/effects.js#L124](https://github.com/jquery/jquery/blob/master/src/effects.js#L124)

Also make sure to check out the relevant webkit source: 
[https://github.com/WebKit/webkit/tree/master/Source/WebCore](https://github.com/WebKit/webkit/tree/master/Source/WebCore)
