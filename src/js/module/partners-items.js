let partnersListItems = document.querySelectorAll('.partners__item');

function calcWidthImages(windowWindth) {
    // partnersListItems.forEach(elem => {
    //     const currentWidthImg = elem.querySelector('.partners__image');
    //     let newWidth;
    //     if (windowWindth < 1024) {
    //         newWidth = elem.clientWidth * 0.7;
    //         console.log(newWidth);
    //     } else if (windowWindth < 768) {
    //         newWidth = elem.clientWidth * 0.5;
    //     } else {
    //         newWidth = elem.clientWidth * 1;
    //     }
    //     currentWidthImg.style.width = newWidth + "px";
    // })
}

let partnersList = document.querySelector('.partners__list');

function scrollHorizontally(e) {
    e = window.event || e;
    let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    partnersList.scrollLeft -= (delta * 40); // Multiplied by 40
    e.preventDefault();
}
if (partnersList.addEventListener) {
    // IE9, Chrome, Safari, Opera
    partnersList.addEventListener('mousewheel', scrollHorizontally, false);
    // Firefox
    partnersList.addEventListener('DOMMouseScroll', scrollHorizontally, false);
} else {
    // IE 6/7/8
    partnersList.attachEvent('onmousewheel', scrollHorizontally);
}

calcWidthImages(window.innerWidth);

window.addEventListener('resize', function(event) {
    calcWidthImages(window.innerWidth);
}, true);


