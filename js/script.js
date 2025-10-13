$(document).ready(function () {
  $(window).scroll(function () {
    var header = $("header");
    // Navbar akan berubah setelah scroll sejauh 200px dari atas
    // Anda bisa mengubah angka 200 ini jika dirasa terlalu cepat/lambat
    if ($(window).scrollTop() > 100) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  });
});
