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
	});

	// 캐러셀 슬라이드
	const firstSlide = document.querySelector(".slide-items");
	const leftBtn = document.getElementById("left");
	const rightBtn = document.getElementById("right");
	const lastSlide = document.getElementById("lastSlide");
	let stopCarousel;

	function carousel() {
		const beforeSlide = document.querySelector(".showing");
		if (beforeSlide) {
			beforeSlide.classList.remove("showing");
			const nextSlide = beforeSlide.nextElementSibling;
			if (nextSlide) {
				nextSlide.classList.add("showing");
			} else {
				firstSlide.classList.add("showing");
			}
		} else {
			firstSlide.classList.add("showing");
		}
	}
	carousel();
	stopCarousel = setInterval(carousel, 7000);

	function leftBtnHandle() {
		clearInterval(stopCarousel);
		const currentSlide = document.querySelector(".showing");
		const previousSlide = currentSlide.previousElementSibling;
		currentSlide.classList.remove("showing");
		if (previousSlide) {
			previousSlide.classList.add("showing");
		} else {
			lastSlide.classList.add("showing");
		}
		stopCarousel = setInterval(carousel, 7000);
	}

	function rightBtnHandle() {
		clearInterval(stopCarousel);
		const currentSlide = document.querySelector(".showing");
		const nextSlide = currentSlide.nextElementSibling;

		currentSlide.classList.remove("showing");
		if (nextSlide) {
			nextSlide.classList.add("showing");
		} else {
			firstSlide.classList.add("showing");
		}
		stopCarousel = setInterval(carousel, 7000);
	}

	leftBtn.addEventListener("click", leftBtnHandle);
	rightBtn.addEventListener("click", rightBtnHandle);
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
