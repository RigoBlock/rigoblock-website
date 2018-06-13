$(function() {
  'use strict';
  var $animatedElements = $('[data-animation]');
  $animatedElements.each(function(i, el) {
    var $el = $(el);
    var animationData = $el.attr('data-animation');
    var animation = bodymovin.loadAnimation({
      container: el,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: animationData + '/data.json'
    })﻿;
    // animation.play();
    $el.data('customAnimation', animation);
  });
});
