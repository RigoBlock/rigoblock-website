$(function() {
  'use strict';
  var $socialActivator = $('.social-activator');
  var $socialLinks = $('.social-links-wrapper');

  var activate = function() {
    $socialActivator.toggleClass('open');
    $socialLinks.slideToggle();
  };

  $socialActivator.on('click', activate);
});
