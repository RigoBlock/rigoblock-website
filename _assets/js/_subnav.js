$(function() {
  var $window = $(window);
  var scroll = new SmoothScroll('[data-scroll]', {
    offset: function() {
      return 1;
    }
  });
  gumshoe.init({
    offset: 1
  });
});
