const headerLangBtn = document.querySelector('.header-lang__btn');
const headerLangMenu = document.querySelector('.header-lang__menu');

headerLangBtn.addEventListener('focus', () => headerLangMenu.classList.add('header-lang__menu--show'), true) 
headerLangBtn.addEventListener('blur', () => headerLangMenu.classList.remove('header-lang__menu--show'), true);