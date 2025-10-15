// tittle: Navbar Sticky
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

// Tittle: Hamburger Menu
$(document).ready(function () {
  // (Kode Scroll Sticky yang sudah ada di sini)
  $(window).scroll(function () {
    var header = $("header");
    if ($(window).scrollTop() > 100) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  });


  // note: Program Hamburger Menu
  $("#hamburger-icon").click(function () {
    $("#mobile-menu").toggleClass("active");
  });

  // note: Tutup menu saat link diklik
  $("#mobile-menu a").click(function () {
    $("#mobile-menu").removeClass("active");
  });
});
