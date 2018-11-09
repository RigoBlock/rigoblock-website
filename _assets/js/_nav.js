$(function() {
  var $mainNav = $(".main-nav");
  var $genericA = $mainNav.find("li:not([data-community]) > a");
  var $navElements = $mainNav.find("li.parent > a");
  var $subNavElements = $mainNav.find("[data-scroll-to]");
  var $window = $(window);
  var $root = $("html, body");
  var mainClickCallback = function(e) {
    var $target = $(e.target);
    var linkTarget = $target.attr("href").split("#");
    var currentUrl = window.location.href.split("#")[0];
    if (linkTarget[0] === currentUrl) {
      e.preventDefault();
      if (linkTarget[1] === "project-01-what") {
        var $subnav = $target.next("ul");
        var scrollTop = $("#project-01-what").offset().top;
        $root.animate(
          {
            scrollTop: scrollTop
          },
          250
        );
        // $subnav.slideToggle(500);
      }
      if (linkTarget[1] === "grgtoken-01-scope") {
        var $subnav = $target.next("ul");
        var scrollTop = $("#grgtoken-01-scope").offset().top;
        $root.animate(
          {
            scrollTop: scrollTop
          },
          250
        );
        // $subnav.slideToggle(500);
      }
    }
  };
  $genericA.on("click", function() {
    if (window.isMobile) {
      $window.trigger("close-nav");
    }
  });
  $navElements.on("click", mainClickCallback);
});
