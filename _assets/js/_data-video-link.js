$(function() {
  var $dataVideoLink = $('[data-video-link]');
  var $body = $('body');
  var $root = $('html, body');
  var showVideo = function(e) {
    e.preventDefault();
    var $target = $(e.delegateTarget);
    var videoId = getVideoId($target.attr('href'));
    var $div = $('<div/>').addClass('video-wrapper');
    var iframeMarkup = '<div class="iframe-wrapper"><div class="grid"><div class="responsive-wrapper"><iframe width="560" height="315" src="//www.youtube.com/embed/'
    + videoId + '?autoplay=1&rel=0&showinfo=0&modestbranding=1&controls=0" frameborder="0" allowfullscreen></iframe><div data-close-video class="close"></div></div></div></div>';
    $div.html(iframeMarkup);
    $body.append($div);
    var scrollTop = $('#project-01-what').offset().top;
    $root.animate({
      scrollTop: scrollTop
    }, 500);
    $('[data-close-video]').on('click', function() {
      $div.remove();
    });

  };

  var getVideoId = function(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return 'error';
    }
  }

  $dataVideoLink.on('click', showVideo);
});
