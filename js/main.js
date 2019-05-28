$(function() {
	$("header").each(function() {
		var $window = $(window),
			$header = $(this),
			headerOffsetTop = $header.offset().top;

		$window.on("scroll", function() {
			if ($window.scrollTop() > headerOffsetTop) {
				$header.addClass("sticky");
			} else {
				$header.removeClass("sticky");
			} //스크롤
		});

		$window.trigger("scroll");
	});

	$(".navi__item .ex").on("mouseover", function() {
		$(".navi__item__down").css({ display: "block" });
	});

	$(".navi__item .ex").on("mouseout", function() {
		$(".navi__item__down").css({ display: "none" });
	});

	$(".navi__item__down").on("mouseover", function() {
		$(".navi__item__down").css({ display: "block" });
	});

	$(".navi__item__down").on("mouseout", function() {
		$(".navi__item__down").css({ display: "none" });
	});

	$(".hi").on("click", function() {
		$(".top-wrapper__nav__down li").toggleClass("click");
		$(".top-wrapper__nav__down li").slideToggle(300);
	});
});

// 컨트롤 내릴때 한 영역씩
// window.onload = function () {
//            var elm = ".box";
//            $(elm).each(function (index) {
//                // 개별적으로 Wheel 이벤트 적용
//                $(this).on("mousewheel DOMMouseScroll", function (e) {
//                    e.preventDefault();
//                    var delta = 0;
//                    if (!event) event = window.event;
//                    if (event.wheelDelta) {
//                        delta = event.wheelDelta / 120;
//                        if (window.opera) delta = -delta;
//                    }
//                    else if (event.detail)
//                        delta = -event.detail / 3;
//                    var moveTop = $(window).scrollTop();
//                    var elmSelecter = $(elm).eq(index);
//                    // 마우스휠을 위에서 아래로
//                    if (delta < 0) {
//                        if ($(elmSelecter).next() != undefined) {
//                            try{
//                                moveTop = $(elmSelecter).next().offset().top;
//                            }catch(e){}
//                        }
//                    // 마우스휠을 아래에서 위로
//                    } else {
//                        if ($(elmSelecter).prev() != undefined) {
//                            try{
//                                moveTop = $(elmSelecter).prev().offset().top;
//                            }catch(e){}
//                        }
//                    }
//
//                    // 화면 이동 0.6초(800)
//                    $("html,body").stop().animate({
//                        scrollTop: moveTop + 'px'
//                    }, {
//                        duration: 600, complete: function () {
//                        }
//                    });
//                });
//            });
//        }
