$(function() {
  'use strict';

  var $showOnScroll = $('[data-show-on-scroll]');
  var $window = $(window);

  var setSpy = function() {
    $showOnScroll.each(function() {
      var $this = $(this);
      var initialPosition = $this.offset();
      if ($(window).scrollTop() > (initialPosition.top - $(window).height())) {
        $this.addClass('scrolled');
      }
      $this.scrollspy({
        min: function() {
          var position = $this.offset();
          return (position.top - $(window).height());
        },
        max: function() {
          return 100000;
        },
        onEnter: function() {
          var animData = $this.data('customAnimation');
          if (animData) {
            animData.goToAndPlay(0);
          } else {
            $this.addClass('scrolled');
          }
        }
      });
    });
  };

  $window.on('assets-loaded', function() {
    setSpy();
    $window.on('refreshSpy', setSpy);
  });

});
