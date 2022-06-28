/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const endlessScroll = __webpack_require__(/*! ./module/endless-scroll.js */ \"./src/js/module/endless-scroll.js\");\r\nconst menuPosition = __webpack_require__(/*! ./module/menu-position.js */ \"./src/js/module/menu-position.js\");\r\nconst menu = __webpack_require__(/*! ./module/menu.js */ \"./src/js/module/menu.js\");\r\nconst promoHeight = __webpack_require__(/*! ./module/promo-height.js */ \"./src/js/module/promo-height.js\");\r\nconst sliderTable = __webpack_require__(/*! ./module/slider-table.js */ \"./src/js/module/slider-table.js\");\r\nconst sliderProblemSolve = __webpack_require__(/*! ./module/problem-solve.js */ \"./src/js/module/problem-solve.js\");\r\nconst sliderBlog = __webpack_require__(/*! ./module/slider-blog.js */ \"./src/js/module/slider-blog.js\");\r\nconst faqAccordion = __webpack_require__(/*! ./module/faq-accordion.js */ \"./src/js/module/faq-accordion.js\");\r\nconst runningLine = __webpack_require__(/*! ./module/running-line.js */ \"./src/js/module/running-line.js\");\r\nconst headerLang = __webpack_require__(/*! ./module/header-lang.js */ \"./src/js/module/header-lang.js\");\r\nconst capitalGraph = __webpack_require__(/*! ./module/capital-graph.js */ \"./src/js/module/capital-graph.js\");\n\n//# sourceURL=webpack://y/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/capital-graph.js":
/*!****************************************!*\
  !*** ./src/js/module/capital-graph.js ***!
  \****************************************/
/***/ (function() {

eval("if ( document.querySelector('.capital__list')) {\r\n    const capitalList = document.querySelector('.capital__list');\r\n    const capitalGraph = document.querySelector('.capital__graph');\r\n    const childGraphs = capitalGraph.querySelectorAll('svg path');\r\n    \r\n    capitalList.addEventListener('mouseover', (e) => {\r\n        if(e.target.classList.contains('capital__link')) {\r\n            childGraphs.forEach(element => {\r\n                element.classList.remove('graphLink-show');\r\n                if (e.target.id == element.classList) {\r\n                    element.classList.add('graphLink-show');\r\n                }\r\n            });\r\n        } else {\r\n            childGraphs.forEach(element => {\r\n                element.classList.remove('graphLink-show');\r\n            });\r\n        }\r\n    })\r\n    capitalList.addEventListener('mouseout', () => {\r\n        childGraphs.forEach(element => {\r\n            element.classList.remove('graphLink-show');\r\n        });\r\n    })\r\n}\n\n//# sourceURL=webpack://y/./src/js/module/capital-graph.js?");

/***/ }),

/***/ "./src/js/module/endless-scroll.js":
/*!*****************************************!*\
  !*** ./src/js/module/endless-scroll.js ***!
  \*****************************************/
/***/ (function() {

eval("﻿// By : Codicode.com\r\n// Source : http: //www.codicode.com/art/jquery_endless_div_scroll.aspx\r\n// Licence : Creative Commons Attribution license (http://creativecommons.org/licenses/by/3.0/)\r\n\r\n// You can use this plugin for commercial and personal projects.\r\n// You can distribute, transform and use them into your work,\r\n// but please always give credit to www.codicode.com\r\n\r\n// The above copyright notice and this permission This notice shall be included in\r\n// all copies or substantial portions of the Software.\r\n\r\n(function ($) {\r\n    $.fn.endlessScroll = function (options) {\r\n\r\n        var options = $.extend({ width: \"400px\", height: \"100px\", steps : -2, speed : 40, mousestop : true }, options);\r\n\r\n        var elem = $(this);\r\n        var elemId = $(this).attr(\"id\");\r\n        var istep = options.steps;\r\n\r\n        elem.css({ \"overflow\": \"hidden\", \"width\": options.width, \"height\": options.height, \"position\": \"relative\", \"left\": \"0px\", \"top\": \"0px\" })\r\n        elem.wrapInner(`<nobr class=\"nobr-wrap\" />`);\r\n\r\n        elem.mouseover(function () {\r\n            if (options.mousestop) { istep = 0; }\r\n        })\r\n        elem.mouseout(function () {\r\n            istep = options.steps;\r\n        });\r\n        \r\n        elem.wrapInner(\"<div id='\" + elemId + \"1' />\");\r\n        var e1 = $('#' + elemId + \"1\");\r\n        e1.css({ \"position\": \"absolute\" }).clone().attr('id', elemId + \"2\").insertAfter(e1);\r\n        var e2 = $('#' + elemId + \"2\");\r\n        Repos(e1, e2, options.steps > 0);\r\n\r\n        var refreshId = setInterval(function () {\r\n            e1.css({ \"left\": (parseInt(e1.css(\"left\")) + istep) + \"px\" });\r\n            e2.css({ \"left\": (parseInt(e2.css(\"left\")) + istep) + \"px\" });\r\n            if ((parseInt(e1.css(\"left\")) < 0) || (parseInt(e1.css(\"left\")) > e1.width())) {\r\n                Repos(e1, e2, options.steps > 0);\r\n            }\r\n        }, options.speed);\r\n\r\n\r\n        function Repos(e1, e2, fwd) {\r\n            e1.css({ \"left\": (fwd) ? \"0px\" : e1.width() + \"px\" });\r\n            e2.css({ \"left\": (fwd) ? (-1 * e1.width()) + \"px\" : \"0px\" });\r\n        }\r\n\r\n        return elem;\r\n    }\r\n})(jQuery);\n\n//# sourceURL=webpack://y/./src/js/module/endless-scroll.js?");

/***/ }),

/***/ "./src/js/module/faq-accordion.js":
/*!****************************************!*\
  !*** ./src/js/module/faq-accordion.js ***!
  \****************************************/
/***/ (function() {

eval("$('.faqs__content-title').click(function() {\r\n        \r\n    $(\".faqs__content-answer\").not($(this).next()).slideUp(400);\r\n    $(this).next().slideToggle(400);\r\n\r\n    $(\".faqs__content-item\").not($(this).closest(\".faqs__content-item\")).removeClass(\"open-accordion\");\r\n    $(this).closest(\".faqs__content-item\").toggleClass(\"open-accordion\");\r\n});\n\n//# sourceURL=webpack://y/./src/js/module/faq-accordion.js?");

/***/ }),

/***/ "./src/js/module/header-lang.js":
/*!**************************************!*\
  !*** ./src/js/module/header-lang.js ***!
  \**************************************/
/***/ (function() {

eval("const headerLangBtn = document.querySelector('.header-lang__btn');\r\nconst headerLangMenu = document.querySelector('.header-lang__menu');\r\n\r\nheaderLangBtn.addEventListener('focus', () => headerLangMenu.classList.add('header-lang__menu--show'), true) \r\nheaderLangBtn.addEventListener('blur', () => headerLangMenu.classList.remove('header-lang__menu--show'), true);\n\n//# sourceURL=webpack://y/./src/js/module/header-lang.js?");

/***/ }),

/***/ "./src/js/module/menu-position.js":
/*!****************************************!*\
  !*** ./src/js/module/menu-position.js ***!
  \****************************************/
/***/ (function() {

eval("function submenuShift() {\r\n    const listParents = document.querySelectorAll(\".nav-header__list > li\");\r\n    \r\n    for (let listParent of listParents) {\r\n        let listChild = listParent.querySelector('ul');\r\n        let widthParrent = listParent.offsetWidth;// width parrent\r\n        let widthChild = listChild.offsetWidth;// width child\r\n        let moveChild = (widthChild / 2) - (widthParrent / 2);\r\n    \r\n        listChild.style.left = `-${moveChild}px`;\r\n    }\r\n}\r\nsubmenuShift();\r\n\r\nwindow.addEventListener('resize', () => {\r\n    submenuShift();\r\n}, true);\n\n//# sourceURL=webpack://y/./src/js/module/menu-position.js?");

/***/ }),

/***/ "./src/js/module/menu.js":
/*!*******************************!*\
  !*** ./src/js/module/menu.js ***!
  \*******************************/
/***/ (function() {

eval("const burgerBtn = document.querySelector(\".nav-header-burger\");\r\nconst navHeader = document.querySelector(\".nav-header\");\r\nconst submenuLists = document.querySelectorAll(\".has-submenu\");\r\n\r\nfunction menu() {\r\n\r\n    burgerBtn.addEventListener('click', (el) => {\r\n        el.preventDefault();\r\n        burgerBtn.classList.toggle('active');\r\n        if (burgerBtn.classList.contains('active')) {\r\n            navHeader.classList.add('open');\r\n        } else {\r\n            navHeader.classList.remove('open');\r\n        }\r\n    }) \r\n    \r\n    for (let submenuList of submenuLists) {\r\n        submenuList.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            for (let i = 0; i < submenuLists.length; i++) {\r\n                console.log(submenuLists[i]);\r\n                if (submenuLists[i].classList.contains('open')) {\r\n                    submenuLists[i].classList.remove('open');\r\n                }\r\n            }\r\n            submenuList.classList.add('open');\r\n        })\r\n    }\r\n}\r\nmenu();\n\n//# sourceURL=webpack://y/./src/js/module/menu.js?");

/***/ }),

/***/ "./src/js/module/problem-solve.js":
/*!****************************************!*\
  !*** ./src/js/module/problem-solve.js ***!
  \****************************************/
/***/ (function() {

eval("let $sliderSolve = $('.problem-solve-content');\r\n\r\nif ($(window).width() < 992) {\r\n    $sliderSolve.not('.slick-initialized').slick({\r\n        dots: false,\r\n        infinite: false,\r\n        speed: 100,\r\n        slidesToShow: 1,\r\n        slidesToScroll: 1,\r\n        arrows: false,\r\n        variableWidth: true\r\n    });\r\n} else {\r\n    $sliderSolve.filter('.slick-initialized').slick('unslick');\r\n}\r\n\r\n\r\n$(window).on('load resize', function() {\r\n\r\n    if ($(window).width() < 992) {\r\n        $sliderSolve.not('.slick-initialized').slick({\r\n            dots: false,\r\n            infinite: false,\r\n            speed: 100,\r\n            slidesToShow: 1,\r\n            slidesToScroll: 1,\r\n            arrows: false,\r\n            variableWidth: true\r\n        });\r\n    } else {\r\n        $sliderSolve.filter('.slick-initialized').slick('unslick');\r\n    }\r\n});\n\n//# sourceURL=webpack://y/./src/js/module/problem-solve.js?");

/***/ }),

/***/ "./src/js/module/promo-height.js":
/*!***************************************!*\
  !*** ./src/js/module/promo-height.js ***!
  \***************************************/
/***/ (function() {

eval("if ( document.querySelector('.promo')) {\r\n    function promoHeight() {\r\n        let headerHight = document.getElementById('header').offsetHeight;\r\n        const mainSection = document.querySelector('.promo');\r\n        const heightWindow = document.documentElement.clientHeight;\r\n    \r\n        let mainSectionHeight = heightWindow - headerHight;\r\n    \r\n        if( window.innerWidth >= 1080 ){\r\n            mainSection.style.height = mainSectionHeight + \"px\";\r\n        } else {\r\n            mainSection.style.height = 'initial';\r\n        }\r\n    }\r\n    window.addEventListener('resize', promoHeight);\r\n    \r\n    if( window.innerWidth >= 1080 ){\r\n        promoHeight();\r\n    }\r\n}\n\n//# sourceURL=webpack://y/./src/js/module/promo-height.js?");

/***/ }),

/***/ "./src/js/module/running-line.js":
/*!***************************************!*\
  !*** ./src/js/module/running-line.js ***!
  \***************************************/
/***/ (function() {

eval("$(\".running-line__inner\").endlessScroll({ \r\n    width: \"100%\", // Ширина строки\r\n    height: \"56px\", // Высота строки\r\n    steps: 2, // Шаг анимации в пикселях. Если число отрицательное - движение влево, положительное - вправо\r\n    speed: 15, // Скорость анимации (0 - максимальная)\r\n    mousestop: false // Останавливать ли полосу при наведении мыши (да - true, нет - false)\r\n});\n\n//# sourceURL=webpack://y/./src/js/module/running-line.js?");

/***/ }),

/***/ "./src/js/module/slider-blog.js":
/*!**************************************!*\
  !*** ./src/js/module/slider-blog.js ***!
  \**************************************/
/***/ (function() {

eval("let $sliderBlog = $('.blog-wrap');\r\nlet $sliderBlogItem = $('.archive-article');\r\n\r\nif ($(window).width() < 768) {\r\n    let elWidth = $(window).width() * 0.7 + \"px\";\r\n    $sliderBlogItem.width(elWidth);\r\n    \r\n    $sliderBlog.not('.slick-initialized').slick({\r\n        dots: false,\r\n        infinite: false,\r\n        speed: 100,\r\n        slidesToShow: 1,\r\n        slidesToScroll: 1,\r\n        arrows: false,\r\n        variableWidth: true\r\n    });\r\n} else {\r\n    $sliderBlog.filter('.slick-initialized').slick('unslick');\r\n}\r\n\r\n\r\n$(window).on('load resize', function() {\r\n    \r\n    if ($(window).width() < 768) {\r\n        let elWidth = $(window).width() * 0.7 + \"px\";\r\n        $sliderBlogItem.width(elWidth);\r\n        \r\n        \r\n        $sliderBlog.not('.slick-initialized').slick({\r\n            dots: false,\r\n            infinite: false,\r\n            speed: 100,\r\n            slidesToShow: 1,\r\n            slidesToScroll: 1,\r\n            arrows: false,\r\n            variableWidth: true\r\n        });\r\n    } else {\r\n        $sliderBlog.filter('.slick-initialized').slick('unslick');\r\n        $sliderBlogItem.width('initial');\r\n    }\r\n});\n\n//# sourceURL=webpack://y/./src/js/module/slider-blog.js?");

/***/ }),

/***/ "./src/js/module/slider-table.js":
/*!***************************************!*\
  !*** ./src/js/module/slider-table.js ***!
  \***************************************/
/***/ (function() {

eval("let sliderComparing = $('.slider-comparing');\r\nlet sliderComparingProgress = $('.slider-comparing__progress-bar');\r\n\r\nsliderComparing.slick({\r\n    slidesToShow: 1,\r\n    slidesToScroll: 1,\r\n    arrows: false,\r\n    variableWidth: true,\r\n    infinite: false,\r\n});\r\n\r\nsliderComparing.on(\"afterChange\", function(event, slick, currentSlide, nextSlide) {\r\n    let progressWidth = (currentSlide + 1) * 33.33 + \"%\";\r\n    sliderComparingProgress.width(progressWidth);\r\n});\n\n//# sourceURL=webpack://y/./src/js/module/slider-table.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;