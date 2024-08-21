/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 816:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/mountains1.jpg";

/***/ }),

/***/ 311:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/mountains2.jpg";

/***/ }),

/***/ 506:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/mountains3.jpg";

/***/ }),

/***/ 249:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/mountains4.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/

;// CONCATENATED MODULE: ./src/index.html
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(816), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(311), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(506), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(249), __webpack_require__.b);
// Module
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"/> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/> <title>Tabs</title> </head> <body> <div class=\"tabs\"> <div class=\"container\"> <div class=\"tabs__container\"> <div class=\"tabs__content\"> <img src=\"" + ___HTML_LOADER_IMPORT_0___ + "\" alt=\"mountains\"/> <div class=\"tabs__descr\"> Mountain 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus facilis, tenetur magni, molestias voluptas tempore magnam ad a iste accusantium cumque at, vitae repellat neque ducimus nam sit in? </div> </div> <div class=\"tabs__content\"> <img src=\"" + ___HTML_LOADER_IMPORT_1___ + "\" alt=\"mountains\"/> <div class=\"tabs__descr\"> Mountain 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus facilis, tenetur magni, molestias voluptas tempore magnam ad a iste accusantium cumque at, vitae repellat neque ducimus nam sit in? </div> </div> <div class=\"tabs__content\"> <img src=\"" + ___HTML_LOADER_IMPORT_2___ + "\" alt=\"mountains\"/> <div class=\"tabs__descr\"> Mountain 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus facilis, tenetur magni, molestias voluptas tempore magnam ad a iste accusantium cumque at, vitae repellat neque ducimus nam sit in? </div> </div> <div class=\"tabs__content\"> <img src=\"" + ___HTML_LOADER_IMPORT_3___ + "\" alt=\"mountains\"/> <div class=\"tabs__descr\"> Mountain 4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus facilis, tenetur magni, molestias voluptas tempore magnam ad a iste accusantium cumque at, vitae repellat neque ducimus nam sit in? </div> </div> <div class=\"tabs__header\"> <h3>Select a mountain</h3> <div class=\"tabs__items\"> <div class=\"tabs__item tabs__item_active\">Mountain 1</div> <div class=\"tabs__item\">Mountain 2</div> <div class=\"tabs__item\">Mountain 3</div> <div class=\"tabs__item\">Mountain 4</div> </div> </div> </div> </div> </div> </body> </html> ";
// Exports
/* harmony default export */ var src = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./src/index.js


document.addEventListener('DOMContentLoaded', () => {
  const getTabsItem = document.querySelectorAll('.tabs__item');
  const getTabsContent = document.querySelectorAll('.tabs__content');
  const getParentTabs = document.querySelector('.tabs__items');
  const hideTabsContent = () => {
    getTabsContent.forEach(tab => {
      tab.classList.add('hide');
      tab.classList.remove('show', 'fade');
    });
    getTabsItem.forEach(tab => {
      tab.classList.remove('tabs__item_active');
    });
  };
  const showTabsContent = function () {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    getTabsContent[i].classList.add('show', 'fade');
    getTabsContent[i].classList.remove('hide');
    getTabsItem[i].classList.add('tabs__item_active');
  };
  const parentTabsItems = () => {
    getParentTabs.addEventListener('click', e => {
      const target = e.target;
      if (target && target.classList.contains('tabs__item')) {
        getTabsItem.forEach((item, i) => {
          if (target == item) {
            hideTabsContent();
            showTabsContent(i);
          }
        });
      }
    });
  };
  hideTabsContent();
  showTabsContent();
  parentTabsItems();
});
/******/ })()
;