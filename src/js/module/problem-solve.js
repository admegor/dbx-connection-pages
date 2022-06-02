let $sliderSolve = $('.problem-solve-content');

if ($(window).width() < 992) {
    $sliderSolve.not('.slick-initialized').slick({
        dots: false,
        infinite: false,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true
    });
} else {
    $sliderSolve.filter('.slick-initialized').slick('unslick');
}


$(window).on('load resize', function() {

    if ($(window).width() < 992) {
        $sliderSolve.not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true
        });
    } else {
        $sliderSolve.filter('.slick-initialized').slick('unslick');
    }
});