$(function() {
  var $faqElements = $('.grg-list li');
  var $blockQuotes = $faqElements.find('blockquote');
  var faqCallback = function(e) {
    var $target = $(e.target);
    var $text = $target.next('blockquote');
    $text.slideToggle(500);
    $blockQuotes.not($text).slideUp();
  };
  $faqElements.on('click', 'span', faqCallback);
});
