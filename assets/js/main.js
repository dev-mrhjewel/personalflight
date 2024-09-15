(function($) {
    "user strict";

    // preloader
    $(".preloader").delay(800).animate({
        "opacity": "0"
    }, 800, function() {
        $(".preloader").css("display", "none");
    });

    $("select").niceSelect(),

        // aos
        // AOS.init();
        AOS.init({
            once: true,
        })

    $('.video-icon').lightcase();

    $('.package-video > a').lightcase();

    //Create Background Image
    (function background() {
        let img = $('.bg_img');
        img.css('background-image', function() {
            var bg = ('url(' + $(this).data('background') + ')');
            return bg;
        });
    })();

    // navbar-click
    // $(".menu_has_children a").on("mouseover", function () {
    //   var element = $(this).parent("li");
    //   if (element.hasClass("show")) {
    //     element.removeClass("show");
    //     element.find("li").removeClass("show");
    //   }
    //   else {
    //     element.addClass("show");
    //     element.siblings("li").removeClass("show");
    //     element.siblings("li").find("li").removeClass("show");
    //   }
    // });

    // $(".has-sub > a").on("click", function () {
    //   var element = $(this).parent("li");
    //   if (element.hasClass("active")) {
    //     element.removeClass("active");
    //     element.children("ul").slideUp(500);
    //   }
    //   else {
    //     element.siblings("li").removeClass('active');
    //     element.addClass("active");
    //     element.siblings("li").find("ul").slideUp(500);
    //     element.children('ul').slideDown(500);
    //   }
    // });

    // navbar-click
    $(".navbar li a").on("click", function() {
        var element = $(this).parent("li");
        if (element.hasClass("show")) {
            element.removeClass("show");
            element.find("li").removeClass("show");
        } else {
            element.addClass("show");
            element.siblings("li").removeClass("show");
            element.siblings("li").find("li").removeClass("show");
        }
    });

    // scroll-to-top
    var ScrollTop = $(".scrollToTop");
    $(window).on('scroll', function() {
        if ($(this).scrollTop() < 100) {
            ScrollTop.removeClass("active");
        } else {
            ScrollTop.addClass("active");
        }
    });

    //Odometer
    if ($(".statistics-item").length) {
        $(".statistics-item").each(function() {
            $(this).isInViewport(function(status) {
                if (status === "entered") {
                    for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                        var el = document.querySelectorAll('.odometer')[i];
                        el.innerHTML = el.getAttribute("data-odometer-final");
                    }
                }
            });
        });
    }

    //Search
    $(".search-bar a").on('click', function() {
        $('.header-top-search-area').toggleClass('active');
    });

    // faq
    $('.faq-wrapper .faq-title').on('click', function(e) {
        var element = $(this).parent('.faq-item');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('.faq-content').removeClass('open');
            element.find('.faq-content').slideUp(300, "swing");
        } else {
            element.addClass('open');
            element.children('.faq-content').slideDown(300, "swing");
            element.siblings('.faq-item').children('.faq-content').slideUp(300, "swing");
            element.siblings('.faq-item').removeClass('open');
            element.siblings('.faq-item').find('.faq-title').removeClass('open');
            element.siblings('.taq-item').find('.faq-content').slideUp(300, "swing");
        }
    });

    // slider
    var swiper = new Swiper('.feature-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.course-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.charter-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.package-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.client-slider', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.client-slider-two', {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            1240: {
                slidesPerView: 3,
            },
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.gallery-slider', {
        slidesPerView: 2,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.gallery-slider-two', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.team-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.blog-slider', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.brand-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 4,
            },
            767: {
                slidesPerView: 3,
            },
            575: {
                slidesPerView: 2,
            },
            420: {
                slidesPerView: 1,
            },
        }
    });

    //sidebar Menu
    $(document).on('click', '.header-toggle-area', function() {
        $('.page-wrapper').toggleClass('show');
    });

    //Cross Menu
    $('.nav-menu-close').on('click', function() {
        $('.page-wrapper').removeClass('show');
    });

    //Call Widget
    $('.call-widget-btn').on('click', function() {
        $('.call-widget-wrapper').toggleClass('open');
    });

    // book + - start here
    $(function() {
        $(".qtybutton").on("click", function() {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() === "+") {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 1) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 1;
                }
            }
            $button.parent().find("input").val(newVal);
        });
    });

    // skill circle progress bar
    var skillLevel1 = $(".skill-item .first").data("skill-level");
    var skillLevel2 = $(".skill-item .second").data("skill-level");
    var skillLevel3 = $(".skill-item .third").data("skill-level");
    var skillLevel4 = $(".skill-item .fourth").data("skill-level");
    //first.circle
    $(".first.circle").circleProgress({
        value: "0." + skillLevel1,
        size: 110,
        strokeWidth: 10,
        duration: 1400,
        delay: 2500,
        trailWidth: 10,
        emptyFill: "transparent",
        fill: {
            color: "#dcbb87"
        }
    }).on("circle-animation-progress", function(event, progress) {
        $(this).find("strong").html(Math.round(96 * progress) + "<span>%</span>");
    });

    //second.circle
    $(".second.circle").circleProgress({
        value: "0." + skillLevel2,
        size: 110,
        emptyFill: "transparent",
        fill: {
            color: "#dcbb87"
        }
    }).on("circle-animation-progress", function(event, progress) {
        $(this).find("strong").html(Math.round(skillLevel2 * progress) + "<i>%</i>");
    });

    //third.circle
    $(".third.circle").circleProgress({
        value: "0." + skillLevel3,
        size: 110,
        emptyFill: "transparent",
        fill: {
            color: "#dcbb87"
        }
    }).on("circle-animation-progress", function(event, progress) {
        $(this).find("strong").html(Math.round(70 * progress) + "<span>%</span>");
    });

    //fourth.circle
    $(".fourth.circle").circleProgress({
        value: "0." + skillLevel4,
        size: 110,
        emptyFill: "transparent",
        fill: {
            color: "#dcbb87"
        }
    }).on("circle-animation-progress", function(event, progress) {
        $(this).find("strong").html(Math.round(90 * progress) + "<span>%</span>");
    });

    // progress bar
    $(".progressbar").each(function() {
        $(this).find(".bar").animate({
            "width": $(this).attr("data-perc")
        }, 8000);
        $(this).find(".label").animate({
            "left": $(this).attr("data-perc")
        }, 8000);
    });

    // ratings form
    $('.ratings-form-text').on('click', function() {
        $('.ratings-form').toggleClass('open');
    });


})(jQuery);