'use strict';
$(document).ready(function() {
  $('#promo-timer').syotimer({
      year: 2015,
      month: 11,
      day: 28,
      hour: 21,
      minute: 34,
      lang: 'rus',
      periodUnit: 'h',
      periodic: true,
      periodInterval: 32,
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
  var popupConfirm = $('.popup-confirm');
  var popupConfirmOverlay = $('.popup-confirm__overlay');
  $('.common-btn').click(function (evt) {
    evt.preventDefault();
    popup.fadeIn(500);
    popupOverlay.fadeIn(500);
  })
  
  
  

  //закрытие попапа при нажатии на крестик или по затемненному фону
  popupOverlay.click(function () {
    openConfirm();
  })
  
  

  //закрытие попапа при нажатии на клавишу esc  
  $(this).keydown(function (eventObject) {
    if (eventObject.which == 27)
      openConfirm();
  });
  
  $('#confirm-yes').click(function(){
    closePopup(popup, popupOverlay);
    closePopup(popupConfirm, popupConfirmOverlay);
  });
  
  $('#confirm-no').click(function(){
    closePopup(popupConfirm, popupConfirmOverlay);
  });
  
  //функция закрытия попапа
  
  function openConfirm() {
    popupConfirm.fadeIn(500);
    popupConfirmOverlay.fadeIn(500);
  }
  
  function closePopup(elem, overlay) {
    elem.fadeOut(500);
    overlay.fadeOut(500);
  }
  
  
  
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
      
    },
    "onKeyValidation": function () {
      hideErrMsg($(this));
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
     hideErrMsg($(this));
    }
  });
  
  $('input[name=email]').inputmask({
    "alias": "email",
    "onincomplete": function () {
     $(this).removeClass('input-completed');
    },
    "oncomplete": function () {
      $(this).addClass('input-completed');
    },
    "onKeyValidation": function () {
     hideErrMsg($(this));
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
  
  //запрет отправки сообщения
  
  function formValid(elem) {
    var submitBtn = $(elem).find('.form__btn');
    var inputs = $(elem).find('input');
    submitBtn.click(function(evt) {
      inputs.each(function() {
        if (!($(this).hasClass('input-completed'))) {
          evt.preventDefault();
        showErrMsg($(this), 'Заполните данное поле', 'form__errorMsg') 

        }
      })
    })
  }
  
  $('.form').each(function() {
    formValid(this);
  })
  /*
  функция добавления сообщения об ошибки
  */
  function showErrMsg(element, msg, className) {
    
    if (!(element.siblings().is('.form__errorMsg'))) {
      var errMsg = $("<span/>", {
        "class": className,
        "html": msg
      });

      errMsg.appendTo(element.parent());
      errMsg.fadeIn(500);
    }
  }
  /*
  функция удаления сообщения об ошибки
  */
  function hideErrMsg(elem) {
    
    if (elem.siblings().is('.form__errorMsg')) {
      elem.parent().find('.form__errorMsg').fadeOut(400, function() {
        elem.parent().find('.form__errorMsg').remove();
      });
    }
  }
  
  
  //плавный скроллинг к разделам
  
  $('.main-nav__item a[href^="#"]').click(function () { 
     var elementClick = $(this).attr("href");
     var destination = $(elementClick).offset().top - 80;
     if($.browser.safari){
       $('body').animate( { scrollTop: destination }, 1100 );
     }else{
       $('html').animate( { scrollTop: destination }, 1100 );
     }
     return false;
   });
  
  //кнопка скролла вверх
  jQuery(function(f){
    var element = f('#up-btn');
	 f(window).scroll(function(){
	   element['fade'+ (f(this).scrollTop() > 1000 ? 'In': 'Out')](500);          
     });
  });
  
  $('#up-btn').click( function() {
    $("body,html").animate({scrollTop:0},800);
  })
  
  //показ страниц  портфолио
  
  $('.portfolio .paginator__item').click(function(evt) {
    evt.preventDefault();
   
    var currentItem = $('[data-tabcontent="' + this.dataset.tablink + '"]');
    var allItems = $('[data-tabcontent]');
    
    allItems.each(function() {
      $(this).hide()
    });
    $('.portfolio .paginator__item').removeClass('paginator__item--current');
    $(this).addClass('paginator__item--current');
    if (currentItem.hasClass('portfolio__item--hidden')) {
        
        
      var currentPhoto = currentItem.find('[data-src]');
      currentPhoto.each(function() {
        console.log($(this))
        var src = $(this).attr("data-src");
        var width = $(this).attr("data-width");
        //создается новый объект img
        var img = new Image();
        //присвается значение src, начинается загрузка
        img.src = src;
        img.setAttribute('alt', '');
        img.setAttribute('width', width);
        img.setAttribute('alt', '298');
        $(this).prepend(img);
      })
    }
    currentItem.show(0, function(){
      $(this).removeClass('portfolio__item--hidden')
    })
  })
  
  
})