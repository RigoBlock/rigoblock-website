$(function() {
  'use strict';

  var $window = $(window);
  var $body = $('body');

  var assetsLoaded = 0;
  var assetsToLoad = 1;

  var assetsLoadedComplete = false;
  var waited = false;

  var completeLoader = function() {
    if (waited && assetsLoadedComplete) {
      $body.addClass('assets-loaded');
    }
  };

  var loadedCB = function() {
    assetsLoaded = assetsLoaded + 1;
    if (assetsLoaded === assetsToLoad) {
      $window.trigger('assets-loaded');
      assetsLoadedComplete = true;
      completeLoader();
    }
  };

  var minimumLoadTime = 0;
  var waitMinimumLoadTime = function() {
    waited = true;
    completeLoader();
  };

  setTimeout(waitMinimumLoadTime, minimumLoadTime);

  $body.imagesLoaded( { background: true }, loadedCB);
});
