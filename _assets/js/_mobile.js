$(function() {
  'use strict';
  var $mobileNav = $('.mobile-header .icon-nav, .mobile-fake-bkg');
  var $communityTab = $('.community-tab');
  var $body = $('body');
  var $window = $(window);

  var activateNav = function() {
    $body.toggleClass('mobile-nav-open');
    if (!$body.hasClass('mobile-nav-open')) {
      $communityTab.removeClass('open');
      $body.removeClass('community-open');
    }
  };

  $mobileNav.on('click', activateNav);
  $window.on('close-nav', activateNav);
});
