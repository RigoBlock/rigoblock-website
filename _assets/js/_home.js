$(function() {
  'use strict';
  var $home = $('body.home');
  if ($home.length === 0) {
    return;
  }

  var $window = $(window);
  var $nav = $('header');
  var windowHeight;
  var sticky = false;
  var $root = $('html, body');
  var $subnav = $nav.find('ul li ul');
  var $discover = $('.discover-more');

  var setSizes = function() {
    windowHeight = $window.height();
  };

  var scrollCB = function() {
    var currentScroll = $window.scrollTop();
    var newSticky = (currentScroll >= windowHeight);
    if (newSticky != sticky) {
      if (newSticky) {
        $nav.addClass('sticky');
        $subnav.slideDown();
      } else {
        $nav.removeClass('sticky');
        $subnav.slideUp();
      }
      sticky = newSticky;
    }
  };

  var discoverMore = function(e) {
    e.preventDefault();
    var scrollTop = $('#project-01-what').offset().top;
    $root.animate({
      scrollTop: scrollTop
    }, 500);
  }

  $window.on('assets-loaded', function() {
    setSizes();
    $window.on('scroll', scrollCB);
    $window.on('resize', setSizes);
    $discover.on('click', discoverMore);
    scrollCB();
  });
});
