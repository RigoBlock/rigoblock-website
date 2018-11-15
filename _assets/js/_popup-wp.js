$(function() {
  var $dataPopupWpLink = $('[data-wp-popup], [data-close-wp-popup]');
  var $popupWpWrapper = $('.popup-wp-wrapper');
  if ($popupWpWrapper.length === 0) {
    return;
  }
  var $body = $('body');
  var showWpPopup = function(e) {
    e.preventDefault();
    $popupWpWrapper.toggleClass('open');
  };

  $dataPopupWpLink.on('click', showWpPopup);
});
