$(document).ready(function () {
    $(".recent-works__slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["", ""],
        dots: true,
        items: 1,
        responsive: {
            320: {
                nav: false
            },
            576: {
                nav: true
            }
        }
    });

    $(".our-team__slider").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        // navText: ["", ""],
        dots: false,
        responsive: {
            850: {
                items: 3
            },
            576: {
                items: 2,
                nav: false
            },
            320: {
                items: 1,
                nav: false,
                margin: 0
            }
        }
    });

    $('.checkbox').click(function() {
        $('.navbar__menu').toggleClass('visual-opacity');
    });
    $('.navbar__menu__item').click(function () {
        $('.checkbox').trigger("click");
    });

    $('.navbar__menu__item--home').click(function () {
        $('html, body').animate({ scrollTop: $('#home').position().top }, 1000);
    });
    $('.navbar__menu__item--works').click(function () {
        $('html, body').animate({ scrollTop: $('#works').position().top }, 1000);
    });
    $('.navbar__menu__item--services').click(function () {
        $('html, body').animate({ scrollTop: $('#services').position().top }, 1000);
    });
    $('.navbar__menu__item--about').click(function () {
        $('html, body').animate({ scrollTop: $('#about').position().top }, 1000);
    });
    $('.contacts__back').click(function () {
        $('html, body').animate({ scrollTop: $('#home').position().top }, 1000);
    });
});