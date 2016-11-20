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
  
  $('.portfolio__photo').find('a').colorbox({
    'rel': 'gallery',
    'maxWidth': '90%',
    'transition': 'fade',
    'current': ''
  });
  
  //открытие попапа
  
  //окрытие попапа при нажатии на ссылку
  var popup = $('.popup');
  var popupOverlay = $('.popup__overlay');
 
  $('.common-btn').click(function (evt) {
    evt.preventDefault();
    popup.fadeIn(500);
    popupOverlay.fadeIn(500);
  })
  
  //функция закрытия попапа
  
  function closePopup(elem, overlay) {
    elem.fadeOut(500);
    overlay.fadeOut(500);
  }

  //закрытие попапа при нажатии на крестик или по затемненному фону
  
  popupOverlay.click(function () {
    closePopup(popup, popupOverlay);
  })

  //закрытие попапа при нажатии на клавишу esc  
  $(this).keydown(function (eventObject) {
    if (eventObject.which == 27)
      closePopup(popup, popupOverlay);
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
  
  
  //маска на поля 
  $('input[name=name]').inputmask("a{2,20} [aa{2,20}]", {
    "onincomplete": function () {
      $(this).removeClass('input-completed');
      
    },
    
    "oncomplete": function () {
      
      $(this).addClass('input-completed');
      //removeErr('input-name', 'call-master__errorMsg');
    },
    "onKeyValidation": function () {
      //removeErr('input-name', 'call-master__errorMsg');
    },
    "placeholder": " ",
    "showMaskOnHover": false
  });
  
  $('input[name=phone]').inputmask("+7 (999) 999-9999", {
    "onincomplete": function () {
      $(this).removeClass('input-completed');

    },
    "oncomplete": function () {
      $(this).addClass('input-completed');
      
    },
    "onKeyValidation": function () {
     
    }
  });
  
  $('input[name=email]').inputmask({
    "alias": "email",
    "onincomplete": function () {
     $(this).removeClass('input-completed');
    },
    "oncomplete": function () {
      $(this).addClass('input-completed');
    }

  })
  
  //проверка сохраненных значений
  
  function checkValid() {
    $('input[name=name]').each(function() {
      if (Inputmask.isValid($(this).val(), {
        alias: "a{2,20} [aa{2,20}]"
        })) {
        $(this).addClass('input-completed');
      };
    });
    
    $('input[name=email]').each(function() {
      if (Inputmask.isValid($(this).val(), {
        alias: "email"
        })) {
        $(this).addClass('input-completed');
      };
    });
    
    $('input[name=phone]').each(function() {
    if (Inputmask.isValid($(this).val(), {
      alias: "+7 (999) 999-9999"
      })) {
    
        $(this).addClass('input-completed');
      };
    });
  }
  
  checkValid();
  
  
})