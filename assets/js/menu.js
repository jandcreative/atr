jQuery(document).ready(function ($) {
  $("#hamburguer").click(function () {
    if ($("#hamburguer").attr("class") == "mobile") {
      $("#hamburguer").addClass("close-hamburguer");
      $(".full-menu").css({ opacity: "0.95", display: "flex"});
    } else {
      $("#hamburguer").removeClass("close-hamburguer");
      $(".full-menu").css({ opacity: "0", display: "none"});
    }
    
    });

    $('.empresa a').click(function() {

        $('#hamburguer').removeClass('close-hamburguer');
        $('.full-menu').css({ opacity: "0", display: "none"});

    });

    $('.servicios a').click(function() {

        $('#hamburguer').removeClass('close-hamburguer');
        $('.full-menu').css({ opacity: "0", display: "none"});

    });

    $('.sostenibilidad a').click(function() {

        $('#hamburguer').removeClass('close-hamburguer');
        $('.full-menu').css({ opacity: "0", display: "none"});

    });

    $('.equipo a').click(function() {

      $('#hamburguer').removeClass('close-hamburguer');
      $('.full-menu').css({ opacity: "0", display: "none"});
  });

  $('.contactar a').click(function() {

      $('#hamburguer').removeClass('close-hamburguer');
      $('.full-menu').css({ opacity: "0", display: "none"});


  });
});
