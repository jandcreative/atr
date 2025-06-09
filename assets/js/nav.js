// Scrolling Effect
jQuery(document).ready(function ($) {
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $('#header').addClass('nav-up');
    }
    else {
      $('#header').removeClass('nav-up');
    }
  })
});

