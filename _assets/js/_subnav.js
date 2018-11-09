$(function() {
  var $window = $(window);
  var throttleTime = 1000;

  var currentRoute = "";
  var gaRoute = "";
  var gaThrottle;

  var throttledGaSend = function() {
    /* Skip execution if we already waiting and execution */
    if (!gaThrottle) {
      gaThrottle = setTimeout(function() {
        sendGa();
        gaThrottle = null;
      }, throttleTime);
    }
  };

  var sendGa = function() {
    /* Send ga if currentRoute is referred to subnav elements. */
    if (currentRoute) {
      /*
        Trigger ga only if current gaRoute (the previous route sent to ga)
        has changed.
      */
      if (gaRoute != currentRoute) {
        if (ga) {
          var cleanRoute = $(currentRoute.nav)
            .attr("href")
            .split("#");
          if (cleanRoute.length > 1) {
            ga("send", "pageview", cleanRoute[1]);
          }
        }
        gaRoute = currentRoute;
      }
    }
  };

  // var scroll = new SmoothScroll('[data-scroll]', {
  //   offset: function() {
  //     return 1;
  //   }
  // });

  gumshoe.init({
    offset: 1,
    callback: function(route) {
      /* Trigger throttled ga only if currentRoute has changed */
      if (currentRoute != route) {
        currentRoute = route;
        throttledGaSend();
      }
    }
  });
});
