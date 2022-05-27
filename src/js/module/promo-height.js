function promoHeight() {
    let headerHight = document.getElementById('header').offsetHeight;
    const mainSection = document.querySelector('.promo');
    const heightWindow = document.documentElement.clientHeight;

    let mainSectionHeight = heightWindow - headerHight;

    if( window.innerWidth >= 769 ){
        mainSection.style.height = mainSectionHeight + "px";
    } else {
        mainSection.style.height = 'initial';
    }
}
window.addEventListener('resize', promoHeight);

if( window.innerWidth >= 769 ){
    promoHeight();
}