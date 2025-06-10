
$(document).ready(function(){
  
$('.hero-container').slick({
  autoplay: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
/*   cssEase: 'linear', */
  fade: true,
  dots: true,
  arrows: false,
/*   nextArrow: '<i class="right"></i>',
  prevArrow: '<i class="left"></i>', */
/*     responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ] */
});
});

