$(function() {
  var $dataPopupLink = $('[data-wp-popup], [data-close-popup]');
  var $popupWrapper = $('.popup-wp-wrapper');
  if ($popupWrapper.length === 0) {
    return;
  }
  var $body = $('body');
  var showPopup = function(e) {
    e.preventDefault();
    $popupWrapper.toggleClass('open');
  };

  $dataPopupLink.on('click', showPopup);
});
