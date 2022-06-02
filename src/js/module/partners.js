(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector('.partners__list').scrollLeft -= (delta * 40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.querySelector('.partners__list').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.querySelector('.partners__list').addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.querySelector('.partners__list').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.querySelector('.partners__list').attachEvent('onmousewheel', scrollHorizontally);
    }
})();