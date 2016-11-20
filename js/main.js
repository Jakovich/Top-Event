'use strict';
$(document).ready(function() {
  $('#promo-timer').syotimer({
      year: 2016,
      month: 11,
      day: 25,
      hour: 20,
      minute: 30,
      lang: 'rus',
      dayVisible: false
    });
  
  $('.portfolio__item').find('a').colorbox({
    'rel': 'gallery',
    'maxWidth': '90%',
    'transition': 'fade',
    'current': '{current} отзыв из {total}'
  });
  
  //слайдер
   $('.slider__jcarousel').jcarousel({
      wrap: 'circular' // Прокрутка по кругу
    }).jcarouselAutoscroll({
      interval: (10 * 1000), // 60 * 100 = 1 минута в милисекундах
      target: '+=1', // На сколько кадров прокручивать за один раз
      autostart: true
    });
  
  $('.slider__prev')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '-=1'
      });

    $('.slider__next')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '+=1'
      });

    $('.slider__jcarousel').hover(function () {
      $(this).jcarouselAutoscroll('stop');
    }, function () {
      $(this).jcarouselAutoscroll('start');
    });

  
  
  
})