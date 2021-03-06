/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/libs/menu.js":
/*!************************************!*\
  !*** ./src/assets/js/libs/menu.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  // DOM取得
  var menuToggle = document.getElementById('js-menuToggle');
  var globalMenu = document.getElementById('js-globalMenu');
  var globalOverlay = document.getElementById('js-globalOverlay');
  var globalContainer = document.getElementById('js-globalContainer');
  var globalLinks = document.getElementsByClassName('globalMenu__link'); // メニューボタンにイベント追加

  menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('is-active');
    globalMenu.classList.toggle('is-open');
  }); // オーバーレイにイベント追加

  globalOverlay.addEventListener('click', function () {
    menuClose();
  }); // コンテナにイベント追加

  globalContainer.addEventListener('click', function (e) {
    // 伝播を防止
    e.stopPropagation();
  }); // リンクにイベント追加

  for (var i = 0; i < globalLinks.length; i++) {
    var globalLink = globalLinks[i];
    globalLink.addEventListener('click', function (e) {
      var target = e.target; // トップページにいる状態でAboutを参照した場合

      if (location.pathname === '/' && target.dataset.type === 'about') {
        menuClose();
      }
    });
  } // メニュークローズ


  function menuClose() {
    menuToggle.classList.remove('is-active');
    globalMenu.classList.remove('is-open');
  }
}

/***/ }),

/***/ "./src/assets/js/libs/polyfills.js":
/*!*****************************************!*\
  !*** ./src/assets/js/libs/polyfills.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iosPolyfill": function() { return /* binding */ iosPolyfill; }
/* harmony export */ });
/*
 * iOS polyfill
 */
function iosPolyfill() {
  // :activeの機能化
  document.body.addEventListener('touchstart', function () {}, false);
}

/***/ }),

/***/ "./src/assets/js/libs/viewportUtil.js":
/*!********************************************!*\
  !*** ./src/assets/js/libs/viewportUtil.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getViewport": function() { return /* binding */ getViewport; },
/* harmony export */   "overrideViewport": function() { return /* binding */ overrideViewport; }
/* harmony export */ });
/**
 * viewport取得
 */
function getViewport() {
  var metalist = document.getElementsByTagName('meta');

  for (var i = 0; i < metalist.length; i++) {
    var name = metalist[i].getAttribute('name');

    if (name && name.toLowerCase() === 'viewport') {
      return metalist[i];
    }
  }
} ////////////////////////////////////////////////////////////////////////////////

/**
 * viewportを引数の値で上書き
 * @param {string} widthVal 上書きする値
 */

function overrideViewport(widthVal) {
  var viewport = getViewport();
  viewport.setAttribute('content', "width=".concat(widthVal));
}

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! picturefill */ "./node_modules/picturefill/dist/picturefill.js");
/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(picturefill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_polyfills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/polyfills */ "./src/assets/js/libs/polyfills.js");
/* harmony import */ var _libs_viewportUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./libs/viewportUtil */ "./src/assets/js/libs/viewportUtil.js");
/* harmony import */ var _libs_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./libs/menu */ "./src/assets/js/libs/menu.js");







window.addEventListener('DOMContentLoaded', function () {
  /**********************
   * 閲覧環境が幅374以下の場合、
   * 375でviewport幅を固定する
   *********************/
  var minWidthMedia = window.matchMedia("(max-width: 374px)");

  if (minWidthMedia.matches) {
    (0,_libs_viewportUtil__WEBPACK_IMPORTED_MODULE_5__.overrideViewport)(375);
  }
  /**********************
   * 閲覧環境別環境ポリフィル
   * 環境判定はbowserを使用
   * https://github.com/lancedikson/bowser
   *********************/


  var bowser = bowser__WEBPACK_IMPORTED_MODULE_3___default().getParser(window.navigator.userAgent);

  if (bowser.getOSName() === 'iOS') {
    (0,_libs_polyfills__WEBPACK_IMPORTED_MODULE_4__.iosPolyfill)();
  } // Menu


  (0,_libs_menu__WEBPACK_IMPORTED_MODULE_6__.default)();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = function() {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"js/main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/assets/js/main.js","js/vendor"]
/******/ 		];
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
/******/ 		var checkDeferredModules = function() {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfrontend_boilerplate_pug"] = self["webpackChunkfrontend_boilerplate_pug"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (function() {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC1ib2lsZXJwbGF0ZS1wdWcvLi9zcmMvYXNzZXRzL2pzL2xpYnMvbWVudS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1ib2lsZXJwbGF0ZS1wdWcvLi9zcmMvYXNzZXRzL2pzL2xpYnMvcG9seWZpbGxzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWJvaWxlcnBsYXRlLXB1Zy8uL3NyYy9hc3NldHMvanMvbGlicy92aWV3cG9ydFV0aWwuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYm9pbGVycGxhdGUtcHVnLy4vc3JjL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWJvaWxlcnBsYXRlLXB1Zy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mcm9udGVuZC1ib2lsZXJwbGF0ZS1wdWcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYm9pbGVycGxhdGUtcHVnL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mcm9udGVuZC1ib2lsZXJwbGF0ZS1wdWcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9mcm9udGVuZC1ib2lsZXJwbGF0ZS1wdWcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mcm9udGVuZC1ib2lsZXJwbGF0ZS1wdWcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mcm9udGVuZC1ib2lsZXJwbGF0ZS1wdWcvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYm9pbGVycGxhdGUtcHVnL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJtZW51VG9nZ2xlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdsb2JhbE1lbnUiLCJnbG9iYWxPdmVybGF5IiwiZ2xvYmFsQ29udGFpbmVyIiwiZ2xvYmFsTGlua3MiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm1lbnVDbG9zZSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJpIiwibGVuZ3RoIiwiZ2xvYmFsTGluayIsInRhcmdldCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJkYXRhc2V0IiwidHlwZSIsInJlbW92ZSIsImlvc1BvbHlmaWxsIiwiYm9keSIsImdldFZpZXdwb3J0IiwibWV0YWxpc3QiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJ0b0xvd2VyQ2FzZSIsIm92ZXJyaWRlVmlld3BvcnQiLCJ3aWR0aFZhbCIsInZpZXdwb3J0Iiwic2V0QXR0cmlidXRlIiwid2luZG93IiwibWluV2lkdGhNZWRpYSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYm93c2VyIiwiQm93c2VyIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZ2V0T1NOYW1lIiwiTWVudSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBZSxzQ0FBWTtBQUN6QjtBQUNBLE1BQU1BLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQW5CO0FBQ0EsTUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBbkI7QUFDQSxNQUFNRSxhQUFhLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBdEI7QUFDQSxNQUFNRyxlQUFlLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsQ0FBeEI7QUFDQSxNQUFNSSxXQUFXLEdBQUdMLFFBQVEsQ0FBQ00sc0JBQVQsQ0FBZ0Msa0JBQWhDLENBQXBCLENBTnlCLENBUXpCOztBQUNBUCxZQUFVLENBQUNRLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFlB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QUNBO1dBQ0EsZ0JBQWdCLDJCQUEyQjtXQUMzQztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0RBQWtEO1dBQ2xEO1dBQ0EsRTs7Ozs7VUN2RkE7VUFDQSIsImZpbGUiOiJqcy9tYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgLy8gRE9N5Y+W5b6XXG4gIGNvbnN0IG1lbnVUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbWVudVRvZ2dsZScpO1xuICBjb25zdCBnbG9iYWxNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWdsb2JhbE1lbnUnKTtcbiAgY29uc3QgZ2xvYmFsT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1nbG9iYWxPdmVybGF5Jyk7XG4gIGNvbnN0IGdsb2JhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1nbG9iYWxDb250YWluZXInKTtcbiAgY29uc3QgZ2xvYmFsTGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnbG9iYWxNZW51X19saW5rJyk7XG5cbiAgLy8g44Oh44OL44Ol44O844Oc44K/44Oz44Gr44Kk44OZ44Oz44OI6L+95YqgXG4gIG1lbnVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWVudVRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICBnbG9iYWxNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcbiAgfSk7XG4gIC8vIOOCquODvOODkOODvOODrOOCpOOBq+OCpOODmeODs+ODiOi/veWKoFxuICBnbG9iYWxPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1lbnVDbG9zZSgpO1xuICB9KTtcbiAgLy8g44Kz44Oz44OG44OK44Gr44Kk44OZ44Oz44OI6L+95YqgXG4gIGdsb2JhbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8g5Lyd5pKt44KS6Ziy5q2iXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG4gIC8vIOODquODs+OCr+OBq+OCpOODmeODs+ODiOi/veWKoFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdsb2JhbExpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZ2xvYmFsTGluayA9IGdsb2JhbExpbmtzW2ldO1xuICAgIGdsb2JhbExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAvLyDjg4jjg4Pjg5fjg5rjg7zjgrjjgavjgYTjgovnirbmhYvjgadBYm91dOOCkuWPgueFp+OBl+OBn+WgtOWQiFxuICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSAnLycgJiYgdGFyZ2V0LmRhdGFzZXQudHlwZSA9PT0gJ2Fib3V0Jykge1xuICAgICAgICBtZW51Q2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvLyDjg6Hjg4vjg6Xjg7zjgq/jg63jg7zjgrpcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCkge1xuICAgIG1lbnVUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgZ2xvYmFsTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG4gIH1cbn1cbiIsIi8qXG4gKiBpT1MgcG9seWZpbGxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlvc1BvbHlmaWxsKCkge1xuICAvLyA6YWN0aXZl44Gu5qmf6IO95YyWXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHt9LCBmYWxzZSk7XG59XG4iLCIvKipcbiAqIHZpZXdwb3J05Y+W5b6XXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3cG9ydCgpIHtcbiAgY29uc3QgbWV0YWxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWV0YScpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1ldGFsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG5hbWUgPSBtZXRhbGlzdFtpXS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICBpZiAobmFtZSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgIHJldHVybiBtZXRhbGlzdFtpXTtcbiAgICB9XG4gIH1cbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiB2aWV3cG9ydOOCkuW8leaVsOOBruWApOOBp+S4iuabuOOBjVxuICogQHBhcmFtIHtzdHJpbmd9IHdpZHRoVmFsIOS4iuabuOOBjeOBmeOCi+WApFxuICovXG5leHBvcnQgZnVuY3Rpb24gb3ZlcnJpZGVWaWV3cG9ydCh3aWR0aFZhbCkge1xuICBjb25zdCB2aWV3cG9ydCA9IGdldFZpZXdwb3J0KCk7XG4gIHZpZXdwb3J0LnNldEF0dHJpYnV0ZSgnY29udGVudCcsIGB3aWR0aD0ke3dpZHRoVmFsfWApO1xufVxuIiwiaW1wb3J0ICdjb3JlLWpzL3N0YWJsZSc7XG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5pbXBvcnQgJ3BpY3R1cmVmaWxsJztcbmltcG9ydCBCb3dzZXIgZnJvbSAnYm93c2VyJztcbmltcG9ydCB7IGlvc1BvbHlmaWxsIH0gZnJvbSAnLi9saWJzL3BvbHlmaWxscyc7XG5pbXBvcnQgeyBvdmVycmlkZVZpZXdwb3J0IH0gZnJvbSAnLi9saWJzL3ZpZXdwb3J0VXRpbCc7XG5pbXBvcnQgTWVudSBmcm9tICcuL2xpYnMvbWVudSc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAvKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiDplrLopqfnkrDlooPjgYzluYUzNzTku6XkuIvjga7loLTlkIjjgIFcbiAgICogMzc144Gndmlld3BvcnTluYXjgpLlm7rlrprjgZnjgotcbiAgICoqKioqKioqKioqKioqKioqKioqKi9cbiAgY29uc3QgbWluV2lkdGhNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAzNzRweClgKTtcbiAgaWYgKG1pbldpZHRoTWVkaWEubWF0Y2hlcykge1xuICAgIG92ZXJyaWRlVmlld3BvcnQoMzc1KTtcbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqXG4gICAqIOmWsuimp+eSsOWig+WIpeeSsOWig+ODneODquODleOCo+ODq1xuICAgKiDnkrDlooPliKTlrprjga9ib3dzZXLjgpLkvb/nlKhcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2xhbmNlZGlrc29uL2Jvd3NlclxuICAgKioqKioqKioqKioqKioqKioqKioqL1xuICBjb25zdCBib3dzZXIgPSBCb3dzZXIuZ2V0UGFyc2VyKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgaWYgKGJvd3Nlci5nZXRPU05hbWUoKSA9PT0gJ2lPUycpIHtcbiAgICBpb3NQb2x5ZmlsbCgpO1xuICB9XG5cbiAgLy8gTWVudVxuICBNZW51KCk7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIHRoZSBzdGFydHVwIGZ1bmN0aW9uXG4vLyBJdCdzIGVtcHR5IGFzIHNvbWUgcnVudGltZSBtb2R1bGUgaGFuZGxlcyB0aGUgZGVmYXVsdCBiZWhhdmlvclxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gZnVuY3Rpb24oKSB7fTtcbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJqcy9tYWluXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vc3JjL2Fzc2V0cy9qcy9tYWluLmpzXCIsXCJqcy92ZW5kb3JcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBmdW5jdGlvbigpIHt9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVszXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcblx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cdH1cblxuXHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG5cdGlmKGV4ZWN1dGVNb2R1bGVzKSBkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcblxuXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcblx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZnJvbnRlbmRfYm9pbGVycGxhdGVfcHVnXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Zyb250ZW5kX2JvaWxlcnBsYXRlX3B1Z1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7XG5cbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSBmdW5jdGlvbigpIHt9O1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG52YXIgc3RhcnR1cCA9IF9fd2VicGFja19yZXF1aXJlX18ueDtcbl9fd2VicGFja19yZXF1aXJlX18ueCA9IGZ1bmN0aW9uKCkge1xuXHQvLyByZXNldCBzdGFydHVwIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2hlbiBtb3JlIHN0YXJ0dXAgY29kZSBpcyBhZGRlZFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSBzdGFydHVwIHx8IChmdW5jdGlvbigpIHt9KTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07IiwiLy8gcnVuIHN0YXJ0dXBcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9