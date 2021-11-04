/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_popups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/popups */ "./src/js/modules/popups.js");


 // function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("progress-bar").style.width = scrolled + "%";
// }
// window.addEventListener("load", () => {
//   document.body.classList.add("loaded_hiding");
//   window.setTimeout(() => {
//     document.body.classList.add("loaded");
//     document.body.classList.remove("loaded_hiding");
//   }, 3000);
//   // let iframeName = document.getElementById("leeloo-form-iframe-subhwp-0");
//   // const leelooWrap = document.querySelector(".leeloo-hash-subhwp").childNodes;
//   // console.log(leelooWrap);
//   // console.dir(iframeName);
// });
// window.onscroll = function () {
//   myFunction();
// };
// window.addEventListener("DOMContentLoaded", function () {
//   const page = document.querySelector(".page");
//   const header = page.querySelector(".header");
//   const hero = document.querySelector(".hero");
//   const heroHeight = hero.scrollHeight;
//   let menuStatus = false;
//   window.addEventListener("scroll", headerFixed);
//   function headerFixed() {
//     if (window.pageYOffset >= heroHeight && menuStatus === false) {
//       header.classList.add("header_fixed");
//       menuStatus = true;
//     } else if (window.pageYOffset < 100 && menuStatus === true) {
//       menuStatus = false;
//       header.classList.remove("header_fixed");
//     }
//   }
//   const btns = document.querySelectorAll(".btn");
//   btns.forEach((btn) => {
//     if (btn.getAttribute("data-modal") == "")
//       btn.addEventListener("click", () => {
//         openModal(".popup");
//       });
//   });
//   const popup = document.querySelector(".popup");
//   popup.addEventListener("click", (e) => {
//     if (e.target === popup || e.target.getAttribute("data-close") == "") {
//       closeModal(".popup");
//     }
//   });
//   // let iframeName = document.getElementById("leeloo-form-iframe-subhwp-0");
//   // console.dir(document.querySelector('.leeloo-lgt-form-wrapper'))
//   // console.dir(iframeName);
//   // window.onload = () => {
//   // let iframeContent = iframeName.contentDocument;
//   // iframeContent.body.innerHTML = iframeContent.body.innerHTML + '<style>.iframe-css{color: #d92909}</style>';
//   // };
// });

/***/ }),

/***/ "./src/js/modules/popups.js":
/*!**********************************!*\
  !*** ./src/js/modules/popups.js ***!
  \**********************************/
/*! exports provided: closeModal, openModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
function closeModal(modalSelector) {
  var modal = document.querySelector(modalSelector);
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.classList.remove("active");
}

function openModal(modalSelector) {
  var modal = document.querySelector(modalSelector);
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.classList.add("active");
}




/***/ })

/******/ });
//# sourceMappingURL=script.js.map