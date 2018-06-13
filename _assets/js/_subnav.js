$(function() {
  var $window = $(window);
  var scroll = new SmoothScroll('[data-scroll]', {
    offset: function() {
      return -$window.height();
    }
  });
  gumshoe.init({
    offset: -$window.height()
  });
});
