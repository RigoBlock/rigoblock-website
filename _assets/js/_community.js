$(function() {
  'use strict';
  var $dataCommunity = $('[data-community] a, .fake-bkg, .community-icon-nav');
  var $communityTab = $('.community-tab');
  var $body = $('body');
  var activate = function(e) {
    e.preventDefault();
    $communityTab.toggleClass('open');
    $body.toggleClass('community-open');
  };

  $dataCommunity.on('click', activate);
});
