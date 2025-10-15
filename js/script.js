$(document).ready(function () {
  $(window).scroll(function () {
    var header = $("header");
    if ($(window).scrollTop() > 100) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  });
});
