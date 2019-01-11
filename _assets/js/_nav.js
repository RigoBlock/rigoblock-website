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
      if (linkTarget[1] === "project-01-concept") {
        var $subnav = $target.next("ul");
        var scrollTop = $("#project-01-concept").offset().top;
        $root.animate(
          {
            scrollTop: scrollTop
          },
          250
        );
        // $subnav.slideToggle(500);
      }
      if (linkTarget[1] === "grgtoken-07-grgtoken") {
        var $subnav = $target.next("ul");
        var scrollTop = $("#grgtoken-07-grgtoken").offset().top;
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
