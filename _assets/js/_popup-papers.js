$(function() {
  var $dataPopupPapersLink = $(
    "[data-papers-popup], [data-close-popup-papers]"
  );
  var $popupPapersWrapper = $(".popup-wrapper-papers");
  if ($popupPapersWrapper.length === 0) {
    console.log("error");
    return;
  }
  var $body = $("body");
  var showPopup = function(e) {
    console.log("close");
    e.preventDefault();
    $popupPapersWrapper.toggleClass("open");
  };

  $dataPopupPapersLink.on("click", showPopup);
});
