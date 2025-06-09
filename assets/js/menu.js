jQuery(document).ready(function ($) {
  $("#hamburguer").click(function () {
    if ($("#hamburguer").attr("class") == "mobile") {
      $("#hamburguer").addClass("close-hamburguer");
      $(".full-menu").css({ opacity: "1", display: "flex"});
    } else {
      $("#hamburguer").removeClass("close-hamburguer");
      $(".full-menu").css({ opacity: "0", display: "none"});
    }

  });
});


