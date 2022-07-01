$(document).ready(function() {
  
    // The window
    let $window = $(window);
    
    // As we scroll
    $window.scroll(function() {
    if ($window.width() >= 993) {
        // Each horizontal scrolling div
      $('.jsHorizontalScroll').each(function(index, value) {

        
        // Our element
        let $el = $(this);
        // Element content and width – .js class can be added to relevant element
        let $elContent = $(this).find(".jsHorizontalScrollContent");
        let $elContentWidth = $elContent.width();
        // Top and bottom of the element
        let $offsetTop = $(this).offset().top;
        let $offsetBottom = $(this).offset().top + $(this).height();
        // Window scroll position
        let $windowScroll = $window.scrollTop();
        // Class for when the element content is scrolling
        let $scrollingClass = 'is-scrolling-horizontally'
        
        // Set the wrapper height to be the same as the inner content width
        $(this).css({
          height: $elContentWidth
        });
  
        // When item IS in view
        if ( $windowScroll >= $offsetTop && $windowScroll <= $offsetBottom - $window.height() ) {
          
          // Add class
          $(this).addClass($scrollingClass);
          
          // How far down we have scrolled inside element
          let $elPos = $el.offset().top - $(window).scrollTop();
          // Height of element
          let $elHeight = $el.height();
          // Element content height
          let $elContentHeight = $elContent.height();
          
          // Scroll position (0 is 0% and 1 is 100%)
          $scrollPercent = $elPos / ($elHeight - $elContentHeight);
          
          // Scroll position in pixels based on percentage scrolled
          let position = $scrollPercent * ( $elContent.width() - $el.width());
          
          // Move the element content left/right based on scroll position
          $elContent.css({
            transform: "translateX(" + position + "px)"
          });
          
        }
        
        // When item IS NOT in view
        else {
          // Remove class
          $(this).removeClass($scrollingClass);
        }
  
      });
    }
      
      
    });
  });