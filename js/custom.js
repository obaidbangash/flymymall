$(".acc-list-item > .answer").hide();

$(".acc-list-item").click(function () {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active").find(".answer").slideUp();
    } else {
        $(".acc-list-item.active .answer").slideUp();
        $(".acc-list-item.active").removeClass("active");
        $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
});
$(document).ready(function () {
    $(".menu-btn").click(function () {
        $(this).toggleClass("change");
        $("nav").toggleClass("open");
    });
    $(".tg-brands").click(function () {
        $(".items-wrappre").toggleClass("change");
    });

    $(".flags-dropdown").click(function () {
        $(this).children(".flags-options").slideToggle("");
        console.log("okokokoko");
    });

    $(".country-selector").click(function () {
        $(".country-option").slideToggle("");
    });

    $(".tab-a").click(function () {
        $(".tab").removeClass("tab-active");
        $(".tab[data-id='" + $(this).attr("data-id") + "']").addClass("tab-active");
        $(".tab[data-id='" + $(this).attr("data-id") + "']").addClass(
            "ss-card-slider"
        );
        $(".tab-a").removeClass("active-a");
        $(this).parent().find(".tab-a").addClass("active-a");
    });
    // Sliders
    //// Slider Top
    $(".js-items-slider-container .slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".js-items-slider-container .slider-nav",
    });
    $(".js-items-slider-container .slider-nav").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: ".js-items-slider-container .slider-for",
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: true,
        accessibility: true,

        prevArrow: '<img class="ss-arow" src="images/arrow-left.svg" alt="left">',
        nextArrow: '<img class="ss-arow" src="images/arrow-right.svg" alt="right">',
        onAfterChange: function (slide, index) {
            console.log("slider-nav change");
            console.log(this.$slides.get(index));
            $(".current-slide").removeClass("current-slide");
            $(this.$slides.get(index)).addClass("current-slide");
        },
        onInit: function (slick) {
            $(slick.$slides.get(0)).addClass("current-slide");
        },
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });
    $(".ss-card-slider").slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<img class="ss-arow" src="images/arrow-left.svg" alt="left">',
        nextArrow: '<img class="ss-arow" src="images/arrow-right.svg" alt="right">',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1.6,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    if ($(window).width() < 992) {
        $('.right-side > #signup').hide();
        $('.flex-btw > li#login ').hide();
        $('.mobile-btn').append($('#login').html());
        $('.mobile-btn').append($('#signup').html());
    } else {
        $('.mobile-btn').hide();
    }
});


   
