$('.faqs__content-title').click(function() {
        
    $(".faqs__content-answer").not($(this).next()).slideUp(400);
    $(this).next().slideToggle(400);

    $(".faqs__content-item").not($(this).closest(".faqs__content-item")).removeClass("open-accordion");
    $(this).closest(".faqs__content-item").toggleClass("open-accordion");
});