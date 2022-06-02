let $sliderBlog = $('.blog-wrap');
let $sliderBlogItem = $('.archive-article');

if ($(window).width() < 768) {
    let elWidth = $(window).width() * 0.7 + "px";
    $sliderBlogItem.width(elWidth);
    
    $sliderBlog.not('.slick-initialized').slick({
        dots: false,
        infinite: false,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true
    });
} else {
    $sliderBlog.filter('.slick-initialized').slick('unslick');
}


$(window).on('load resize', function() {
    
    if ($(window).width() < 768) {
        let elWidth = $(window).width() * 0.7 + "px";
        $sliderBlogItem.width(elWidth);
        
        
        $sliderBlog.not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true
        });
    } else {
        $sliderBlog.filter('.slick-initialized').slick('unslick');
        $sliderBlogItem.width('initial');
    }
});