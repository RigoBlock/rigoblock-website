$(function() {
  'use strict';

  var $body = $('body');

  var $lang = $('.social-links-wrapper .languages');
  var $languages = $lang.find('ul');
  var $current = $lang.find('.current-lang');

  var $tabletCurrent = $('.header-wrapper > .current-lang, .languages-icon-nav');
  var $tabletLanguages = $('header.site-header > .languages');

  var showLanguages = function(e) {
    e.preventDefault();
    $languages.slideToggle();
    $lang.toggleClass('open');
  };

  $current.on('click', showLanguages);

  var showTabletLanguages = function(e) {
    e.preventDefault();
    $tabletLanguages.toggleClass('open');
    $body.toggleClass('languages-open');
  };

  $tabletCurrent.on('click', showTabletLanguages);
});
