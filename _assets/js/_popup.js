$(function() {
  var $dataPopupLink = $('[data-token-popup], [data-close-popup]');
  var $popupWrapper = $('.popup-wrapper');
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
