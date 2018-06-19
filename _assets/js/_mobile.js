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

  var mobileAndTabletBreakpoint = 1025;
  var tabletBreakpoint = 767;

  var resizeHandler = function () {
    var windowWidth = $(window).width();
    var isMobile = (windowWidth < mobileAndTabletBreakpoint);
    if (window.isMobile !== isMobile) {
      window.isMobile = isMobile;
      deviceChanged();
    }
    var isTablet = ((windowWidth < mobileAndTabletBreakpoint) && (windowWidth > tabletBreakpoint));
    if (window.isTablet !== isTablet) {
      window.isTablet = isTablet;
      tabletChanged();
    }
  };

  var deviceChanged = function() {
    $window.trigger('deviceChanged');
  };

  var tabletChanged = function() {
    $window.trigger('tabletChanged');
  };

  $(window).on('resize', resizeHandler);
  resizeHandler();

  $mobileNav.on('click', activateNav);
  $window.on('close-nav', activateNav);
});
