$(function(){
    $('.feed__slider').slick({
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="feed__slider-arrow feed__slider-arrowleft"><img src="../icons/feed/prew-arrow.png" alt=""></button>',
        nextArrow: '<button type="button" class="feed__slider-arrow feed__slider-arrowright"><img src="../icons/feed/next-arrow.png" alt=""></button>',
    });

    $('.feed__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.slick-slide').removeClass('slick-active-first slick-active-last');
        $('.slick-active').eq(0).addClass('slick-active-first');
        $('.slick-active').eq(2).addClass('slick-active-last');
      }).trigger('afterChange');
  });