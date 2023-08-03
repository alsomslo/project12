$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');


    })

    $('.meun_bar').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');

    });

    $('.mainslide').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    })

    $('.left_slide').on('init afterChange', function (e, s, c) {
        const current = $('.mainroom .slick-current');
        current.addClass('on').siblings().removeClass('on');

        $('.mainroom .slide_num span').text(c ? (c + 1) : 1);
        $('.mainroom .slide_num strong').text(s.slideCount);

        console.log(s.slideCount)


    });

    $('.left_slide').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        asNavFor: ".right_slide",
        arrows: false,
        cssEase: 'linear'


    });
    $('.right_slide').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        asNavFor: ".left_slide",
        arrows: false,
        cssEase: 'linear'

    });

    $('.event_slide').slick({
        infinite: true,
        speed: 500,
        fade: true,

        asNavFor: ".tit_slide",
        arrows: false,
        cssEase: 'linear'

    })

    $('.tit_slide').slick({
        infinite: true,
        speed: 500,
        fade: true,
        asNavFor: ".event_slide",
        cssEase: 'linear',
        arrows: false,

    })


    $('.mainevent .tit_btn .prev').on('click', function () {
        $('.event_slide').slick('slickPrev')
    });
    $('.mainevent .tit_btn .next').on('click', function () {
        $('.event_slide').slick('slickNext')
    });


    $('.mainroom .slide_btn .prev').on('click', function () {
        $('.left_slide').slick('slickPrev')
    });
    $('.mainroom .slide_btn .next').on('click', function () {
        $('.left_slide').slick('slickNext')
    });
})