let sliderComparing = $('.slider-comparing');
let sliderComparingProgress = $('.slider-comparing__progress-bar');

sliderComparing.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    infinite: false,
});

sliderComparing.on("afterChange", function(event, slick, currentSlide, nextSlide) {
    let progressWidth = (currentSlide + 1) * 33.33 + "%";
    sliderComparingProgress.width(progressWidth);
});