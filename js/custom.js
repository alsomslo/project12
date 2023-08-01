$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');


    })

    $('.mainslide').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    })

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
        arrows: true,
        cssEase: 'linear'



    });
})