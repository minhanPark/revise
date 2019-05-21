$(function () {

    $('header').each(function () {
        var $window = $(window),
            $header = $(this),

            headerOffsetTop = $header.offset().top;


        $window.on('scroll', function () {

            if ($window.scrollTop() > headerOffsetTop) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }; //스크롤

        });

            $window.trigger('scroll');
    });

    $('.navi__item .ex')
      .on('mouseover', function(){
        $('.navi__item__down').css({"opacity":"1"});

    })

    $('.navi__item .ex').on('mouseout', function(){
      $('.navi__item__down').css({"opacity":"0"});
    });

    $('.navi__item__down')
      .on('mouseover', function(){
        $('.navi__item__down').css({"opacity":"1"});

    })

    $('.navi__item__down').on('mouseout', function(){
      $('.navi__item__down').css({"opacity":"0"});
    });

});

window.onload = function () {
           var elm = ".box";
           $(elm).each(function (index) {
               // 개별적으로 Wheel 이벤트 적용
               $(this).on("mousewheel DOMMouseScroll", function (e) {
                   e.preventDefault();
                   var delta = 0;
                   if (!event) event = window.event;
                   if (event.wheelDelta) {
                       delta = event.wheelDelta / 120;
                       if (window.opera) delta = -delta;
                   }
                   else if (event.detail)
                       delta = -event.detail / 3;
                   var moveTop = $(window).scrollTop();
                   var elmSelecter = $(elm).eq(index);
                   // 마우스휠을 위에서 아래로
                   if (delta < 0) {
                       if ($(elmSelecter).next() != undefined) {
                           try{
                               moveTop = $(elmSelecter).next().offset().top;
                           }catch(e){}
                       }
                   // 마우스휠을 아래에서 위로
                   } else {
                       if ($(elmSelecter).prev() != undefined) {
                           try{
                               moveTop = $(elmSelecter).prev().offset().top;
                           }catch(e){}
                       }
                   }

                   // 화면 이동 0.8초(800)
                   $("html,body").stop().animate({
                       scrollTop: moveTop + 'px'
                   }, {
                       duration: 800, complete: function () {
                       }
                   });
               });
           });
       }
