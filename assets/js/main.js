

$(document).ready(function() {
  /*  magnific pop up active */
    $('.project-popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
          }
    });
    /* counter up active */
    $('.counterit').counterUp();

    /* slick slider active */
    $('.myslider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      autoplay: true,
    });
  });

  $(window).load(function(){
    $(window).scroll(function () {
      if($(window).scrollTop() > 20) {
        $(".header-area").addClass('sticky');
      } else {
        $(".header-area").removeClass('sticky');
      }
    });
  })