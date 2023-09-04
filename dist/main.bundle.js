"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: 0;
  font-family: 'Open Sans', sans-serif;
}

body {
  height: 100vh;
  width: 100%;
}

.container {
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, #184e77, #d9ed92);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  flex-wrap: wrap;
}

.nav__left-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.left-nav__image-container {
  width: 100px;
  height: 100px;
}

.image-container__weather-logo {
  max-width: 100%;
  max-height: 100%;
}

.left-nav__search-bar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.search-bar-container__search-container {
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0.6rem;
  border-radius: 4px;
  gap: 0.5rem;
}

.search-container__search-bar {
  background: transparent;
  border: none;
  outline: none;
  color: white;
  transition: 0.75s;
  width: 0px;
  font-size: 1.15rem;
}

.left-nav__search-bar-container:hover .search-container__search-bar {
  width: 335px;
}

.search-container__search-bar::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.search-container__search-icon {
  margin-left: -0.45rem;
  align-items: center;
  display: flex;
}

.left-nav__search-bar-container:hover .search-container__search-icon {
  margin: 0rem;
}

#searchbaricon {
  font-size: 1.15rem;
  cursor: pointer;
  transition: 0.1s ease;
}

#searchbaricon:hover {
  transform: scale(1.15);
}

#searchbaricon:active {
  transform: scale(1);
}

#errormessage {
  color: crimson;
  font-weight: 600;
  font-size: 1rem;
  padding-top: 0.2rem;
  text-align: center;
  word-wrap: break-word;
}

.nav__right-nav {
  display: flex;
  align-items: center;
}

.button-container__unit-button {
  border: none;
  outline: none;
  font-size: 1.25rem;
  padding: 0.5rem;
  cursor: pointer;
  font-weight: 300;
  transition: 0.1s ease;
}

.button-container__unit-button:hover {
  opacity: 50%;
}

.button-container--celcius-button {
  background-color: rgba(52, 160, 164, 0.5);
  border-radius: 4px 0px 0px 4px;
}

.button-container--fahrenheit-button {
  background-color: rgba(82, 182, 154, 0.5);
  border-radius: 0px 4px 4px 0px;
}

.button-container__unit-button.active-unit-button {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

.weather-section-container {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.weather-section-container__weather-section {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather-section__title-container {
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.title-container__location {
  color: white;
  font-weight: 600;
  font-size: 2rem;
}

.title-container__date-time {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  font-size: 1.4rem;
  padding-top: 0.2rem;
}

.weather-section__today-weather-section {
  margin-top: 2rem;
  width: 80%;
  display: flex;
  gap: 5rem;
  display: flex;
  align-items: center;
}

.today-weather-section__main-pill {
  padding: 0.5rem;
}

.main-pill-top__today-description {
  text-align: center;
  font-size: 1.5rem;
  color: white;
}

.main-pill-top__today-feels-like {
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}

.main-pill__main-pill-mid {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0rem;
  gap: 1rem;
}

.main-pill-mid__weather-pic {
  font-size: 5rem;
  color: rgba(255, 255, 255, 0.9);
}

.main-pill-mid__current-temp-text {
  font-size: 4.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

.main-pill__main-pill-bot {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.main-pill-bot--today-lowhigh-text {
  color: rgba(255, 255, 255, 0.6);
}

.today-weather-section__hourly-pill {
  display: flex;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 400px;
  user-select: none;
}

.today-weather-section__hourly-pill::-webkit-scrollbar {
  width: 0.5rem; 
}

.today-weather-section__hourly-pill::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px; 
  width: 0.5rem;
}

.today-weather-section__hourly-pill::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 5px; 
}

.hourly-pill__card {
  flex: 0 0 auto;
  flex-direction: column;
  display: flex;
  width: 125px;
  padding: 0.5rem;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}

.card__time {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.3rem;
  font-weight: 300;
}

.card__icon {
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.9);
}

.card__temperature {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.3rem;
  font-weight: 300;
}

@media screen and (max-width: 725px) {
  .left-nav__image-container {
    display: none;
  }
}

@media screen and (max-width: 645px) {
  .left-nav__search-bar-container:hover .search-container__search-bar {
    width: 100%;
  }
}

@media screen and (max-width: 760px) {
  .nav {
    gap: 1rem;
    padding-top: 1rem;
  }

  .nav__left-nav {
    justify-content: center;
    width: 100%;
  }

  .nav__right-nav {
    justify-content: center;
    width: 100%;
  }
}

@media screen and (max-width: 970px){
  .weather-section__today-weather-section {
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }


}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: 0;\n  font-family: 'Open Sans', sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100%;\n}\n\n.container {\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(to bottom, #184e77, #d9ed92);\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  flex-wrap: wrap;\n}\n\n.nav__left-nav {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.left-nav__image-container {\n  width: 100px;\n  height: 100px;\n}\n\n.image-container__weather-logo {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.left-nav__search-bar-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.search-bar-container__search-container {\n  background-color: rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  padding: 0.6rem;\n  border-radius: 4px;\n  gap: 0.5rem;\n}\n\n.search-container__search-bar {\n  background: transparent;\n  border: none;\n  outline: none;\n  color: white;\n  transition: 0.75s;\n  width: 0px;\n  font-size: 1.15rem;\n}\n\n.left-nav__search-bar-container:hover .search-container__search-bar {\n  width: 335px;\n}\n\n.search-container__search-bar::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.search-container__search-icon {\n  margin-left: -0.45rem;\n  align-items: center;\n  display: flex;\n}\n\n.left-nav__search-bar-container:hover .search-container__search-icon {\n  margin: 0rem;\n}\n\n#searchbaricon {\n  font-size: 1.15rem;\n  cursor: pointer;\n  transition: 0.1s ease;\n}\n\n#searchbaricon:hover {\n  transform: scale(1.15);\n}\n\n#searchbaricon:active {\n  transform: scale(1);\n}\n\n#errormessage {\n  color: crimson;\n  font-weight: 600;\n  font-size: 1rem;\n  padding-top: 0.2rem;\n  text-align: center;\n  word-wrap: break-word;\n}\n\n.nav__right-nav {\n  display: flex;\n  align-items: center;\n}\n\n.button-container__unit-button {\n  border: none;\n  outline: none;\n  font-size: 1.25rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  font-weight: 300;\n  transition: 0.1s ease;\n}\n\n.button-container__unit-button:hover {\n  opacity: 50%;\n}\n\n.button-container--celcius-button {\n  background-color: rgba(52, 160, 164, 0.5);\n  border-radius: 4px 0px 0px 4px;\n}\n\n.button-container--fahrenheit-button {\n  background-color: rgba(82, 182, 154, 0.5);\n  border-radius: 0px 4px 4px 0px;\n}\n\n.button-container__unit-button.active-unit-button {\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 400;\n}\n\n.weather-section-container {\n  margin-top: 1rem;\n  display: flex;\n  justify-content: center;\n}\n\n.weather-section-container__weather-section {\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.weather-section__title-container {\n  display: flex;\n  width: 100%;\n  gap: 1rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.title-container__location {\n  color: white;\n  font-weight: 600;\n  font-size: 2rem;\n}\n\n.title-container__date-time {\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  font-size: 1.4rem;\n  padding-top: 0.2rem;\n}\n\n.weather-section__today-weather-section {\n  margin-top: 2rem;\n  width: 80%;\n  display: flex;\n  gap: 5rem;\n  display: flex;\n  align-items: center;\n}\n\n.today-weather-section__main-pill {\n  padding: 0.5rem;\n}\n\n.main-pill-top__today-description {\n  text-align: center;\n  font-size: 1.5rem;\n  color: white;\n}\n\n.main-pill-top__today-feels-like {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.main-pill__main-pill-mid {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 0rem;\n  gap: 1rem;\n}\n\n.main-pill-mid__weather-pic {\n  font-size: 5rem;\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.main-pill-mid__current-temp-text {\n  font-size: 4.5rem;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 600;\n}\n\n.main-pill__main-pill-bot {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.main-pill-bot--today-lowhigh-text {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.today-weather-section__hourly-pill {\n  display: flex;\n  align-items: center;\n  overflow-x: auto;\n  white-space: nowrap;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n  min-width: 400px;\n  user-select: none;\n}\n\n.today-weather-section__hourly-pill::-webkit-scrollbar {\n  width: 0.5rem; \n}\n\n.today-weather-section__hourly-pill::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 5px; \n  width: 0.5rem;\n}\n\n.today-weather-section__hourly-pill::-webkit-scrollbar-track {\n  background-color: transparent;\n  border-radius: 5px; \n}\n\n.hourly-pill__card {\n  flex: 0 0 auto;\n  flex-direction: column;\n  display: flex;\n  width: 125px;\n  padding: 0.5rem;\n  text-align: center;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1.5rem;\n}\n\n.card__time {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1.3rem;\n  font-weight: 300;\n}\n\n.card__icon {\n  font-size: 3rem;\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.card__temperature {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1.3rem;\n  font-weight: 300;\n}\n\n@media screen and (max-width: 725px) {\n  .left-nav__image-container {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 645px) {\n  .left-nav__search-bar-container:hover .search-container__search-bar {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 760px) {\n  .nav {\n    gap: 1rem;\n    padding-top: 1rem;\n  }\n\n  .nav__left-nav {\n    justify-content: center;\n    width: 100%;\n  }\n\n  .nav__right-nav {\n    justify-content: center;\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 970px){\n  .weather-section__today-weather-section {\n    width: 100%;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/date-adjust.js":
/*!****************************!*\
  !*** ./src/date-adjust.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDateToHumanReadable)
/* harmony export */ });
function customRound(number) {
  if (number < 0) {
    return Math.ceil(number - 0.5);
  }
  return Math.floor(number + 0.5);
}

function calculateTimeZoneOffset(localTime) {
  const localDate = new Date(localTime);

  const currentUtcTime = new Date();

  const year = localDate.getUTCFullYear();

  const dstStart = new Date(year, 3, 26);
  const dstEnd = new Date(year, 10, 29);

  if (localDate >= dstStart && localDate < dstEnd) {
    const offsetMinutes = (localDate - currentUtcTime) / (60 * 1000) + 60;
    return customRound(offsetMinutes / 60);
  }

  const offsetMinutes = (localDate - currentUtcTime) / (60 * 1000);
  return customRound(offsetMinutes / 60);
}

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

function pad(number) {
  return number.toString().padStart(2, '0');
}

function getTimeZoneAbbreviation(offset) {
  const sign = offset > 0 ? '+' : '';
  return `GMT${sign}${offset}`;
}

function formatDateToHumanReadable(localTime) {
  const timeZoneOffset = calculateTimeZoneOffset(localTime);

  const date = new Date(localTime);

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes();

  let ampm = 'AM';
  if (hours >= 12) {
    ampm = 'PM';
    if (hours > 12) {
      hours -= 12;
    }
  }

  const formattedDate = `${dayOfWeek}, ${dayOfMonth}${getDaySuffix(
    dayOfMonth,
  )} ${month} ${year} | ${hours}:${pad(
    minutes,
  )} ${ampm} (${getTimeZoneAbbreviation(timeZoneOffset)})`;

  return formattedDate;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _today_weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today-weather */ "./src/today-weather.js");
/* eslint-disable operator-linebreak */




document.addEventListener('DOMContentLoaded', () => {
  (0,_navbar__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (localStorage.getItem('prelimlocation') === null) {
    localStorage.setItem('prelimlocation', 'london');
  } else if (
    localStorage.getItem('location') !==
      localStorage.getItem('prelimlocation') &&
    localStorage.getItem('location') !== ''
  ) {
    localStorage.setItem('prelimlocation', localStorage.getItem('location'));
  }
  (0,_today_weather__WEBPACK_IMPORTED_MODULE_2__["default"])();
});


/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNavbar)
/* harmony export */ });
/* harmony import */ var _assets_weather_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/weather-icon.svg */ "./src/assets/weather-icon.svg");
/* harmony import */ var _today_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today-weather */ "./src/today-weather.js");



function setActiveUnitButton(button) {
  const buttons = document.querySelectorAll('.button-container__unit-button');

  buttons.forEach((eachbutton) => {
    if (eachbutton !== this) {
      eachbutton.classList.remove('active-unit-button');
    }
  });

  button.classList.add('active-unit-button');
}

function handleSearch() {
  const inputElement = document.getElementById('search-bar');

  const searchTerm = inputElement.value.trim();

  if (searchTerm !== '') {
    localStorage.setItem('prelimlocation', searchTerm);
    (0,_today_weather__WEBPACK_IMPORTED_MODULE_1__["default"])();
    inputElement.value = '';
  }
}

function createNavbar() {
  const weatherLogo = new Image();
  weatherLogo.src = _assets_weather_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
  weatherLogo.classList.add('image-container__weather-logo');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('left-nav__image-container');
  imageContainer.appendChild(weatherLogo);

  const iconElement = document.createElement('i');
  iconElement.classList.add('fa-solid', 'fa-magnifying-glass');
  iconElement.setAttribute('id', 'searchbaricon');

  const searchIcon = document.createElement('div');
  searchIcon.classList.add('search-container__search-icon');
  searchIcon.appendChild(iconElement);
  searchIcon.addEventListener('click', handleSearch);

  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'text');
  inputElement.classList.add('search-container__search-bar');
  inputElement.setAttribute('id', 'search-bar');
  inputElement.setAttribute('placeholder', 'Search location...');
  inputElement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });

  const searchContainer = document.createElement('div');
  searchContainer.classList.add('search-bar-container__search-container');
  searchContainer.appendChild(inputElement);
  searchContainer.appendChild(inputElement);
  searchContainer.appendChild(searchIcon);

  const errorMessage = document.createElement('p');
  errorMessage.classList.add('search-bar-container__error-message');
  // eslint-disable-next-line operator-linebreak
  errorMessage.textContent =
    'Location is not valid. Please enter a valid location.';
  errorMessage.setAttribute('id', 'errormessage');
  errorMessage.style.display = 'none';

  const errorContainer = document.createElement('div');
  errorContainer.classList.add('search-bar-container__error-container');
  errorContainer.appendChild(errorMessage);

  const searchBarContainer = document.createElement('div');
  searchBarContainer.classList.add('left-nav__search-bar-container');
  searchBarContainer.appendChild(searchContainer);
  searchBarContainer.appendChild(errorContainer);

  const leftNavContainer = document.createElement('div');
  leftNavContainer.classList.add('nav__left-nav');
  leftNavContainer.appendChild(imageContainer);
  leftNavContainer.appendChild(searchBarContainer);

  const celciusButton = document.createElement('button');
  celciusButton.classList.add(
    'button-container__unit-button',
    'button-container--celcius-button',
    'active-unit-button',
  );
  celciusButton.setAttribute('id', 'celcius');
  celciusButton.textContent = '°C,mm,kph';
  celciusButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveUnitButton(celciusButton);
    (0,_today_weather__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  const fahrenheitButton = document.createElement('button');
  fahrenheitButton.classList.add(
    'button-container__unit-button',
    'button-container--fahrenheit-button',
  );
  fahrenheitButton.setAttribute('id', 'fahrenheit');
  fahrenheitButton.textContent = '°F,in,mph';
  fahrenheitButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveUnitButton(fahrenheitButton);
    (0,_today_weather__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('right-nav__button-container');
  buttonContainer.appendChild(celciusButton);
  buttonContainer.appendChild(fahrenheitButton);

  const rightNavContainer = document.createElement('div');
  rightNavContainer.classList.add('nav__right-nav');
  rightNavContainer.appendChild(buttonContainer);

  const nav = document.createElement('nav');
  nav.classList.add('nav');
  nav.appendChild(leftNavContainer);
  nav.appendChild(rightNavContainer);

  const container = document.querySelector('.container');
  container.appendChild(nav);
}


/***/ }),

/***/ "./src/today-weather.js":
/*!******************************!*\
  !*** ./src/today-weather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createWeatherSection)
/* harmony export */ });
/* harmony import */ var _weatherapi_calls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherapi-calls */ "./src/weatherapi-calls.js");
/* harmony import */ var _date_adjust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-adjust */ "./src/date-adjust.js");
/* eslint-disable no-plusplus */



function createLocationElement(locationData) {
  const locationElement = document.createElement('p');
  locationElement.classList.add('title-container__location');
  const name = locationData.name || '';
  const region = locationData.region || '';
  const country = locationData.country || '';

  const locationText = [name, region, country].filter(Boolean).join(', ');

  locationElement.textContent = locationText;

  return locationElement;
}

function createDateTimeElement(locationData) {
  const dateTimeElement = document.createElement('p');
  dateTimeElement.classList.add('title-container__date-time');
  dateTimeElement.textContent = `${(0,_date_adjust__WEBPACK_IMPORTED_MODULE_1__["default"])(
    locationData.localtime,
  )}`;
  return dateTimeElement;
}

function createWeatherSectionContainer() {
  const weatherSectionContainer = document.createElement('section');
  weatherSectionContainer.classList.add('weather-section-container');

  const existingWeatherSection = document.querySelector(
    '.weather-section-container',
  );

  if (existingWeatherSection) {
    existingWeatherSection.remove();
  }

  const container = document.querySelector('.container');
  container.appendChild(weatherSectionContainer);
}

const weatherIcons = {
  Sunny: 'fa-solid fa-sun',
  Clear: 'fa-solid fa-moon',
  'Partly cloudy': 'fa-solid fa-cloud',
  Cloudy: 'fa-solid fa-cloud',
  Overcast: 'fa-solid fa-cloud',
  Mist: 'fa-solid fa-smog',
  'Patchy rain possible': 'fa-solid fa-cloud-rain',
  'Patchy snow possible': 'fa-regular fa-snowflake',
  'Patchy sleet possible': 'fa-regular fa-snowflake',
  'Patchy freezing drizzle possible': 'fa-solid fa-cloud-rain',
  'Thundery outbreaks possible': 'fa-solid fa-cloud-bolt',
  'Blowing snow': 'fa-solid fa-wind',
  Blizzard: 'fa-solid fa-wind',
  Fog: 'fa-solid fa-smog',
  'Freezing fog': 'fa-solid fa-smog',
  'Patchy light drizzle': 'fa-solid fa-cloud-rain',
  'Light drizzle': 'fa-solid fa-cloud-rain',
  'Freezing drizzle': 'fa-regular fa-snowflake',
  'Heavy freezing drizzle': 'fa-regular fa-snowflake',
  'Patchy light rain': 'fa-solid fa-cloud-rain',
  'Light rain': 'fa-solid fa-cloud-rain',
  'Moderate rain at times': 'fa-solid fa-cloud-rain',
  'Moderate rain': 'fa-solid fa-cloud-rain',
  'Heavy rain at times': 'fa-solid fa-cloud-showers-heavy',
  'Heavy rain': 'fa-solid fa-cloud-showers-heavy',
  'Light freezing rain': 'fa-solid fa-cloud-rain',
  'Moderate or heavy freezing rain': 'fa-regular fa-snowflake',
  'Light sleet': 'fa-regular fa-snowflake',
  'Moderate or heavy sleet': 'fa-regular fa-snowflake',
  'Patchy light snow': 'fa-regular fa-snowflake',
  'Light snow': 'fa-regular fa-snowflake',
  'Patchy moderate snow': 'fa-regular fa-snowflake',
  'Moderate snow': 'fa-regular fa-snowflake',
  'Patchy heavy snow': 'fa-solid fa-cloud-showers-heavy',
  'Heavy snow': 'fa-solid fa-cloud-showers-heavy',
  'Ice pellets': 'fa-solid fa-snowflake',
  'Light rain shower': 'fa-solid fa-cloud-showers-heavy',
  'Moderate or heavy rain shower': 'fa-solid fa-cloud-showers-heavy',
  'Torrential rain shower': 'fa-solid fa-cloud-showers-heavy',
  'Light sleet showers': 'fa-solid fa-snowflake',
  'Moderate or heavy sleet showers': 'fa-solid fa-cloud-showers-heavy',
  'Light snow showers': 'fa-regular fa-snowflake',
  'Moderate or heavy snow showers': 'fa-regular fa-snowflake',
  'Light showers of ice pellets': 'fa-solid fa-cloud-rain',
  'Moderate or heavy showers of ice pellets': 'fa-solid fa-showers-heavy',
  'Patchy light rain with thunder': 'fa-solid fa-cloud-bolt',
  'Moderate or heavy rain with thunder': 'fa-solid fa-cloud-bolt',
  'Patchy light snow with thunder': 'fa-solid fa-cloud-bolt',
  'Moderate or heavy snow with thunder': 'fa-solid fa-cloud-bolt',
};

function getNext24HoursData(weatherData) {
  const currentLastUpdated = new Date(weatherData.current.last_updated);

  const forecastDay0 = weatherData.forecast.forecastday[0].hour;
  const forecastDay1 = weatherData.forecast.forecastday[1].hour;

  const next24Hours = [];

  for (let i = 0; i < forecastDay0.length; i++) {
    const hourData = forecastDay0[i];
    const thetimehere = new Date(hourData.time);

    if (thetimehere - currentLastUpdated > -(3600 * 1000)) {
      next24Hours.push(hourData);
    }
    if (next24Hours.length >= 24) {
      break;
    }
  }

  if (next24Hours.length < 24) {
    for (let i = 0; i < forecastDay1.length; i++) {
      const hourData = forecastDay1[i];

      next24Hours.push(hourData);

      if (next24Hours.length >= 24) {
        break;
      }
    }
  }

  return next24Hours;
}

async function createWeatherSection() {
  createWeatherSectionContainer();
  let isfahrenheit = false;
  let isCelcius = false;

  const activeUnit = document.querySelector('.active-unit-button');

  if (activeUnit.id === 'fahrenheit') {
    isfahrenheit = true;
  } else if (activeUnit.id === 'celcius') {
    isCelcius = true;
  }

  try {
    const result = await (0,_weatherapi_calls__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (!result) {
      return;
    }

    const weatherData = result.data;

    const locationData = weatherData.location;

    const locationElement = createLocationElement(locationData);
    const dateTimeElement = createDateTimeElement(locationData);

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('weather-section__title-container');
    titleContainer.appendChild(locationElement);
    titleContainer.appendChild(dateTimeElement);

    const todayDescription = document.createElement('p');
    todayDescription.classList.add('main-pill-top__today-description');
    todayDescription.textContent = `${weatherData.current.condition.text}`;

    const todayFeelsLike = document.createElement('p');
    todayFeelsLike.classList.add('main-pill-top__today-feels-like');
    let feelsliketext = '';
    if (isfahrenheit) {
      feelsliketext = `Feels like ${weatherData.current.feelslike_f}°F`;
    } else if (isCelcius) {
      feelsliketext = `Feels like ${weatherData.current.feelslike_c}°C`;
    }
    todayFeelsLike.textContent = feelsliketext;

    const mainPillTop = document.createElement('div');
    mainPillTop.classList.add('main-pill__main-pill-top');
    mainPillTop.appendChild(todayDescription);
    mainPillTop.appendChild(todayFeelsLike);

    const weatherPic = document.createElement('i');
    weatherPic.setAttribute(
      'class',
      weatherIcons[weatherData.current.condition.text],
    );
    weatherPic.classList.add('main-pill-mid__weather-pic');

    const currentTempText = document.createElement('p');
    currentTempText.classList.add('main-pill-mid__current-temp-text');
    let nowtemptext = '';
    if (isfahrenheit) {
      nowtemptext = `${weatherData.current.temp_f}°`;
    } else if (isCelcius) {
      nowtemptext = `${weatherData.current.temp_c}°`;
    }
    currentTempText.textContent = nowtemptext;

    const mainPillMid = document.createElement('div');
    mainPillMid.classList.add('main-pill__main-pill-mid');
    mainPillMid.appendChild(weatherPic);
    mainPillMid.appendChild(currentTempText);

    const todayHighText = document.createElement('p');
    todayHighText.classList.add('main-pill-bot--today-lowhigh-text');
    let hightemptext = '';
    if (isfahrenheit) {
      hightemptext = `High: ${weatherData.forecast.forecastday[0].day.maxtemp_f}°F`;
    } else if (isCelcius) {
      hightemptext = `High: ${weatherData.forecast.forecastday[0].day.maxtemp_c}°C`;
    }
    todayHighText.textContent = hightemptext;

    const todayLowText = document.createElement('p');
    todayLowText.classList.add('main-pill-bot--today-lowhigh-text');
    let lowtemptext = '';
    if (isfahrenheit) {
      lowtemptext = `Low: ${weatherData.forecast.forecastday[0].day.mintemp_f}°F`;
    } else if (isCelcius) {
      lowtemptext = `Low: ${weatherData.forecast.forecastday[0].day.mintemp_c}°C`;
    }
    todayLowText.textContent = lowtemptext;

    const mainPillBot = document.createElement('div');
    mainPillBot.classList.add('main-pill__main-pill-bot');
    mainPillBot.appendChild(todayHighText);
    mainPillBot.appendChild(todayLowText);

    const mainPill = document.createElement('div');
    mainPill.classList.add('today-weather-section__main-pill');
    mainPill.appendChild(mainPillTop);
    mainPill.appendChild(mainPillMid);
    mainPill.appendChild(mainPillBot);

    const hourlyPill = document.createElement('div');
    hourlyPill.classList.add('today-weather-section__hourly-pill');

    const hourlyData = getNext24HoursData(weatherData);
    console.log(hourlyData);
    let firstbold = true;

    for (let i = 0; i < hourlyData.length; i++) {
      const hourData = hourlyData[i];
      const timeWithoutDate = hourData.time.split(' ')[1];
      const temperatureCelsius = hourData.temp_c;
      const temperatureFarenheit = hourData.temp_f;
      const weatherText = hourData.condition.text;

      const card = document.createElement('div');
      card.classList.add('hourly-pill__card');

      const timeElement = document.createElement('div');
      timeElement.classList.add('card__time');
      timeElement.textContent = timeWithoutDate;
      if (firstbold) {
        timeElement.style.fontWeight = '600';
        firstbold = false;
      }

      const iconElement = document.createElement('i');
      iconElement.setAttribute('class', weatherIcons[weatherText]);
      iconElement.classList.add('card__icon');

      const temperatureElement = document.createElement('div');
      temperatureElement.classList.add('card__temperature');
      if (isfahrenheit) {
        temperatureElement.textContent = `${temperatureFarenheit}°`;
      } else if (isCelcius) {
        temperatureElement.textContent = `${temperatureCelsius}°`;
      }

      card.appendChild(timeElement);
      card.appendChild(iconElement);
      card.appendChild(temperatureElement);

      hourlyPill.appendChild(card);
    }

    const todayWeatherSection = document.createElement('div');
    todayWeatherSection.classList.add('weather-section__today-weather-section');
    todayWeatherSection.appendChild(mainPill);
    todayWeatherSection.appendChild(hourlyPill);

    const weatherSection = document.createElement('div');
    weatherSection.classList.add('weather-section-container__weather-section');
    weatherSection.appendChild(titleContainer);
    weatherSection.appendChild(todayWeatherSection);

    const existingWeatherSection = document.querySelector(
      '.weather-section-container__weather-section',
    );

    if (existingWeatherSection) {
      existingWeatherSection.remove();
    }
    document
      .querySelector('.weather-section-container')
      .appendChild(weatherSection);
  } catch (error) {
    console.error('Error creating weather section:', error);
  }
}


/***/ }),

/***/ "./src/weatherapi-calls.js":
/*!*********************************!*\
  !*** ./src/weatherapi-calls.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchWeatherData)
/* harmony export */ });
function addAlertText() {
  const errorMessage = document.getElementById('errormessage');

  if (errorMessage.style.display === 'none') {
    errorMessage.style.display = 'block';
  }
}

function removeAlertText() {
  const errorMessage = document.getElementById('errormessage');

  if (errorMessage.style.display === 'block') {
    errorMessage.style.display = 'none';
  }
}

async function fetchWeatherData() {
  const prelimLocation = localStorage.getItem('prelimlocation');
  try {
    const preliminaryUrl = `https://api.weatherapi.com/v1/current.json?key=c59fecabfe9e45e9913114407230209&q=${prelimLocation}&days=7&aqi=no&alerts=no`;

    const preliminaryResponse = await fetch(preliminaryUrl);
    const preliminaryData = await preliminaryResponse.json();

    if (preliminaryData.error && preliminaryData.error.code === 1006) {
      addAlertText();
      return null;
    }

    removeAlertText();

    localStorage.setItem('location', prelimLocation);
    const setLocation = localStorage.getItem('location');

    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=c59fecabfe9e45e9913114407230209&q=${setLocation}&days=7&aqi=no&alerts=no`;

    const response = await fetch(apiUrl, {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return { data };
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    throw error;
  }
}


/***/ }),

/***/ "./src/assets/weather-icon.svg":
/*!*************************************!*\
  !*** ./src/assets/weather-icon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c17e50d35caa21261b7.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlIQUF5SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN6TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFL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akUsUUFBUTtBQUNSLDRDQUE0QyxtQkFBbUI7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdTQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsK0dBQStHLGVBQWU7O0FBRTlIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx3R0FBd0csWUFBWTs7QUFFcEg7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBLGFBQWE7QUFDYixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRlLWFkanVzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdG9kYXktd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyYXBpLWNhbGxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE4NGU3NywgI2Q5ZWQ5Mik7XG59XG5cbi5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5uYXZfX2xlZnQtbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ubGVmdC1uYXZfX2ltYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmltYWdlLWNvbnRhaW5lcl9fd2VhdGhlci1sb2dvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGVmdC1uYXZfX3NlYXJjaC1iYXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtYmFyLWNvbnRhaW5lcl9fc2VhcmNoLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC42cmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC43NXM7XG4gIHdpZHRoOiAwcHg7XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbn1cblxuLmxlZnQtbmF2X19zZWFyY2gtYmFyLWNvbnRhaW5lcjpob3ZlciAuc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhciB7XG4gIHdpZHRoOiAzMzVweDtcbn1cblxuLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1iYXI6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cblxuLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IC0wLjQ1cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGVmdC1uYXZfX3NlYXJjaC1iYXItY29udGFpbmVyOmhvdmVyIC5zZWFyY2gtY29udGFpbmVyX19zZWFyY2gtaWNvbiB7XG4gIG1hcmdpbjogMHJlbTtcbn1cblxuI3NlYXJjaGJhcmljb24ge1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xufVxuXG4jc2VhcmNoYmFyaWNvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG59XG5cbiNzZWFyY2hiYXJpY29uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbiNlcnJvcm1lc3NhZ2Uge1xuICBjb2xvcjogY3JpbXNvbjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMC4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLm5hdl9fcmlnaHQtbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1jb250YWluZXJfX3VuaXQtYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XG59XG5cbi5idXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDUwJTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXItLWNlbGNpdXMtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MiwgMTYwLCAxNjQsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwcHggMHB4IDRweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXItLWZhaHJlbmhlaXQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwgMTgyLCAxNTQsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA0cHggNHB4IDBweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXJfX3VuaXQtYnV0dG9uLmFjdGl2ZS11bml0LWJ1dHRvbiB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi53ZWF0aGVyLXNlY3Rpb24tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53ZWF0aGVyLXNlY3Rpb24tY29udGFpbmVyX193ZWF0aGVyLXNlY3Rpb24ge1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud2VhdGhlci1zZWN0aW9uX190aXRsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiAxcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi50aXRsZS1jb250YWluZXJfX2xvY2F0aW9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi50aXRsZS1jb250YWluZXJfX2RhdGUtdGltZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBwYWRkaW5nLXRvcDogMC4ycmVtO1xufVxuXG4ud2VhdGhlci1zZWN0aW9uX190b2RheS13ZWF0aGVyLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b2RheS13ZWF0aGVyLXNlY3Rpb25fX21haW4tcGlsbCB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLm1haW4tcGlsbC10b3BfX3RvZGF5LWRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWFpbi1waWxsLXRvcF9fdG9kYXktZmVlbHMtbGlrZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cblxuLm1haW4tcGlsbF9fbWFpbi1waWxsLW1pZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVyZW0gMHJlbTtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ubWFpbi1waWxsLW1pZF9fd2VhdGhlci1waWMge1xuICBmb250LXNpemU6IDVyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG59XG5cbi5tYWluLXBpbGwtbWlkX19jdXJyZW50LXRlbXAtdGV4dCB7XG4gIGZvbnQtc2l6ZTogNC41cmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWFpbi1waWxsX19tYWluLXBpbGwtYm90IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLm1haW4tcGlsbC1ib3QtLXRvZGF5LWxvd2hpZ2gtdGV4dCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5cbi50b2RheS13ZWF0aGVyLXNlY3Rpb25fX2hvdXJseS1waWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9faG91cmx5LXBpbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDAuNXJlbTsgXG59XG5cbi50b2RheS13ZWF0aGVyLXNlY3Rpb25fX2hvdXJseS1waWxsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgd2lkdGg6IDAuNXJlbTtcbn1cblxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9faG91cmx5LXBpbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDsgXG59XG5cbi5ob3VybHktcGlsbF9fY2FyZCB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTI1cHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS41cmVtO1xufVxuXG4uY2FyZF9fdGltZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uY2FyZF9faWNvbiB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbn1cblxuLmNhcmRfX3RlbXBlcmF0dXJlIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyNXB4KSB7XG4gIC5sZWZ0LW5hdl9faW1hZ2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0NXB4KSB7XG4gIC5sZWZ0LW5hdl9fc2VhcmNoLWJhci1jb250YWluZXI6aG92ZXIgLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1iYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5uYXYge1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgfVxuXG4gIC5uYXZfX2xlZnQtbmF2IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5uYXZfX3JpZ2h0LW5hdiB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTcwcHgpe1xuICAud2VhdGhlci1zZWN0aW9uX190b2RheS13ZWF0aGVyLXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbiAgfVxuXG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFD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QixvQkFBb0I7RUFDcEIsOENBQThDO0VBQzlDLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztFQUNiOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztFQUNYOzs7QUFHRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IDA7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE4NGU3NywgI2Q5ZWQ5Mik7XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm5hdl9fbGVmdC1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5sZWZ0LW5hdl9faW1hZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXJfX3dlYXRoZXItbG9nbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubGVmdC1uYXZfX3NlYXJjaC1iYXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYmFyLWNvbnRhaW5lcl9fc2VhcmNoLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXG4gIHdpZHRoOiAwcHg7XFxuICBmb250LXNpemU6IDEuMTVyZW07XFxufVxcblxcbi5sZWZ0LW5hdl9fc2VhcmNoLWJhci1jb250YWluZXI6aG92ZXIgLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1iYXIge1xcbiAgd2lkdGg6IDMzNXB4O1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhcjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1pY29uIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMC40NXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubGVmdC1uYXZfX3NlYXJjaC1iYXItY29udGFpbmVyOmhvdmVyIC5zZWFyY2gtY29udGFpbmVyX19zZWFyY2gtaWNvbiB7XFxuICBtYXJnaW46IDByZW07XFxufVxcblxcbiNzZWFyY2hiYXJpY29uIHtcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcXG59XFxuXFxuI3NlYXJjaGJhcmljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG59XFxuXFxuI3NlYXJjaGJhcmljb246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbiNlcnJvcm1lc3NhZ2Uge1xcbiAgY29sb3I6IGNyaW1zb247XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZy10b3A6IDAuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLm5hdl9fcmlnaHQtbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lcl9fdW5pdC1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyLS1jZWxjaXVzLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCAxNjAsIDE2NCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwcHggMHB4IDRweDtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXItLWZhaHJlbmhlaXQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDE4MiwgMTU0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lcl9fdW5pdC1idXR0b24uYWN0aXZlLXVuaXQtYnV0dG9uIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ud2VhdGhlci1zZWN0aW9uLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1zZWN0aW9uLWNvbnRhaW5lcl9fd2VhdGhlci1zZWN0aW9uIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLXNlY3Rpb25fX3RpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyX19sb2NhdGlvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyX19kYXRlLXRpbWUge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XFxufVxcblxcbi53ZWF0aGVyLXNlY3Rpb25fX3RvZGF5LXdlYXRoZXItc2VjdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9fbWFpbi1waWxsIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLm1haW4tcGlsbC10b3BfX3RvZGF5LWRlc2NyaXB0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFpbi1waWxsLXRvcF9fdG9kYXktZmVlbHMtbGlrZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4ubWFpbi1waWxsX19tYWluLXBpbGwtbWlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW0gMHJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm1haW4tcGlsbC1taWRfX3dlYXRoZXItcGljIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxufVxcblxcbi5tYWluLXBpbGwtbWlkX19jdXJyZW50LXRlbXAtdGV4dCB7XFxuICBmb250LXNpemU6IDQuNXJlbTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFpbi1waWxsX19tYWluLXBpbGwtYm90IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5tYWluLXBpbGwtYm90LS10b2RheS1sb3doaWdoLXRleHQge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG59XFxuXFxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9faG91cmx5LXBpbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udG9kYXktd2VhdGhlci1zZWN0aW9uX19ob3VybHktcGlsbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDAuNXJlbTsgXFxufVxcblxcbi50b2RheS13ZWF0aGVyLXNlY3Rpb25fX2hvdXJseS1waWxsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IFxcbiAgd2lkdGg6IDAuNXJlbTtcXG59XFxuXFxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9faG91cmx5LXBpbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyBcXG59XFxuXFxuLmhvdXJseS1waWxsX19jYXJkIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTI1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5jYXJkX190aW1lIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5jYXJkX19pY29uIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxufVxcblxcbi5jYXJkX190ZW1wZXJhdHVyZSB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjVweCkge1xcbiAgLmxlZnQtbmF2X19pbWFnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDVweCkge1xcbiAgLmxlZnQtbmF2X19zZWFyY2gtYmFyLWNvbnRhaW5lcjpob3ZlciAuc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLm5hdiB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICB9XFxuXFxuICAubmF2X19sZWZ0LW5hdiB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5uYXZfX3JpZ2h0LW5hdiB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTcwcHgpe1xcbiAgLndlYXRoZXItc2VjdGlvbl9fdG9kYXktd2VhdGhlci1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gIH1cXG5cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGN1c3RvbVJvdW5kKG51bWJlcikge1xuICBpZiAobnVtYmVyIDwgMCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyIC0gMC41KTtcbiAgfVxuICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIgKyAwLjUpO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVUaW1lWm9uZU9mZnNldChsb2NhbFRpbWUpIHtcbiAgY29uc3QgbG9jYWxEYXRlID0gbmV3IERhdGUobG9jYWxUaW1lKTtcblxuICBjb25zdCBjdXJyZW50VXRjVGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgY29uc3QgeWVhciA9IGxvY2FsRGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGRzdFN0YXJ0ID0gbmV3IERhdGUoeWVhciwgMywgMjYpO1xuICBjb25zdCBkc3RFbmQgPSBuZXcgRGF0ZSh5ZWFyLCAxMCwgMjkpO1xuXG4gIGlmIChsb2NhbERhdGUgPj0gZHN0U3RhcnQgJiYgbG9jYWxEYXRlIDwgZHN0RW5kKSB7XG4gICAgY29uc3Qgb2Zmc2V0TWludXRlcyA9IChsb2NhbERhdGUgLSBjdXJyZW50VXRjVGltZSkgLyAoNjAgKiAxMDAwKSArIDYwO1xuICAgIHJldHVybiBjdXN0b21Sb3VuZChvZmZzZXRNaW51dGVzIC8gNjApO1xuICB9XG5cbiAgY29uc3Qgb2Zmc2V0TWludXRlcyA9IChsb2NhbERhdGUgLSBjdXJyZW50VXRjVGltZSkgLyAoNjAgKiAxMDAwKTtcbiAgcmV0dXJuIGN1c3RvbVJvdW5kKG9mZnNldE1pbnV0ZXMgLyA2MCk7XG59XG5cbmZ1bmN0aW9uIGdldERheVN1ZmZpeChkYXkpIHtcbiAgaWYgKGRheSA+PSAxMSAmJiBkYXkgPD0gMTMpIHtcbiAgICByZXR1cm4gJ3RoJztcbiAgfVxuICBzd2l0Y2ggKGRheSAlIDEwKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuICdzdCc7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuICduZCc7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuICdyZCc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAndGgnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhZChudW1iZXIpIHtcbiAgcmV0dXJuIG51bWJlci50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG59XG5cbmZ1bmN0aW9uIGdldFRpbWVab25lQWJicmV2aWF0aW9uKG9mZnNldCkge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/ICcrJyA6ICcnO1xuICByZXR1cm4gYEdNVCR7c2lnbn0ke29mZnNldH1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREYXRlVG9IdW1hblJlYWRhYmxlKGxvY2FsVGltZSkge1xuICBjb25zdCB0aW1lWm9uZU9mZnNldCA9IGNhbGN1bGF0ZVRpbWVab25lT2Zmc2V0KGxvY2FsVGltZSk7XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGxvY2FsVGltZSk7XG5cbiAgY29uc3QgZGF5c09mV2VlayA9IFtcbiAgICAnU3VuZGF5JyxcbiAgICAnTW9uZGF5JyxcbiAgICAnVHVlc2RheScsXG4gICAgJ1dlZG5lc2RheScsXG4gICAgJ1RodXJzZGF5JyxcbiAgICAnRnJpZGF5JyxcbiAgICAnU2F0dXJkYXknLFxuICBdO1xuXG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICAnSmFudWFyeScsXG4gICAgJ0ZlYnJ1YXJ5JyxcbiAgICAnTWFyY2gnLFxuICAgICdBcHJpbCcsXG4gICAgJ01heScsXG4gICAgJ0p1bmUnLFxuICAgICdKdWx5JyxcbiAgICAnQXVndXN0JyxcbiAgICAnU2VwdGVtYmVyJyxcbiAgICAnT2N0b2JlcicsXG4gICAgJ05vdmVtYmVyJyxcbiAgICAnRGVjZW1iZXInLFxuICBdO1xuXG4gIGNvbnN0IGRheU9mV2VlayA9IGRheXNPZldlZWtbZGF0ZS5nZXREYXkoKV07XG4gIGNvbnN0IGRheU9mTW9udGggPSBkYXRlLmdldERhdGUoKTtcbiAgY29uc3QgbW9udGggPSBtb250aHNbZGF0ZS5nZXRNb250aCgpXTtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG5cbiAgbGV0IGFtcG0gPSAnQU0nO1xuICBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICBhbXBtID0gJ1BNJztcbiAgICBpZiAoaG91cnMgPiAxMikge1xuICAgICAgaG91cnMgLT0gMTI7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke2RheU9mV2Vla30sICR7ZGF5T2ZNb250aH0ke2dldERheVN1ZmZpeChcbiAgICBkYXlPZk1vbnRoLFxuICApfSAke21vbnRofSAke3llYXJ9IHwgJHtob3Vyc306JHtwYWQoXG4gICAgbWludXRlcyxcbiAgKX0gJHthbXBtfSAoJHtnZXRUaW1lWm9uZUFiYnJldmlhdGlvbih0aW1lWm9uZU9mZnNldCl9KWA7XG5cbiAgcmV0dXJuIGZvcm1hdHRlZERhdGU7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBvcGVyYXRvci1saW5lYnJlYWsgKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZU5hdmJhciBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgY3JlYXRlV2VhdGhlclNlY3Rpb24gZnJvbSAnLi90b2RheS13ZWF0aGVyJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY3JlYXRlTmF2YmFyKCk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJlbGltbG9jYXRpb24nKSA9PT0gbnVsbCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmVsaW1sb2NhdGlvbicsICdsb25kb24nKTtcbiAgfSBlbHNlIGlmIChcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYXRpb24nKSAhPT1cbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmVsaW1sb2NhdGlvbicpICYmXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2F0aW9uJykgIT09ICcnXG4gICkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmVsaW1sb2NhdGlvbicsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhdGlvbicpKTtcbiAgfVxuICBjcmVhdGVXZWF0aGVyU2VjdGlvbigpO1xufSk7XG4iLCJpbXBvcnQgd2VhdGhlckljb24gZnJvbSAnLi9hc3NldHMvd2VhdGhlci1pY29uLnN2Zyc7XG5pbXBvcnQgY3JlYXRlV2VhdGhlclNlY3Rpb24gZnJvbSAnLi90b2RheS13ZWF0aGVyJztcblxuZnVuY3Rpb24gc2V0QWN0aXZlVW5pdEJ1dHRvbihidXR0b24pIHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbicpO1xuXG4gIGJ1dHRvbnMuZm9yRWFjaCgoZWFjaGJ1dHRvbikgPT4ge1xuICAgIGlmIChlYWNoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICBlYWNoYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS11bml0LWJ1dHRvbicpO1xuICAgIH1cbiAgfSk7XG5cbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS11bml0LWJ1dHRvbicpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTZWFyY2goKSB7XG4gIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyJyk7XG5cbiAgY29uc3Qgc2VhcmNoVGVybSA9IGlucHV0RWxlbWVudC52YWx1ZS50cmltKCk7XG5cbiAgaWYgKHNlYXJjaFRlcm0gIT09ICcnKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByZWxpbWxvY2F0aW9uJywgc2VhcmNoVGVybSk7XG4gICAgY3JlYXRlV2VhdGhlclNlY3Rpb24oKTtcbiAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSAnJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVOYXZiYXIoKSB7XG4gIGNvbnN0IHdlYXRoZXJMb2dvID0gbmV3IEltYWdlKCk7XG4gIHdlYXRoZXJMb2dvLnNyYyA9IHdlYXRoZXJJY29uO1xuICB3ZWF0aGVyTG9nby5jbGFzc0xpc3QuYWRkKCdpbWFnZS1jb250YWluZXJfX3dlYXRoZXItbG9nbycpO1xuXG4gIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xlZnQtbmF2X19pbWFnZS1jb250YWluZXInKTtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckxvZ28pO1xuXG4gIGNvbnN0IGljb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBpY29uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1tYWduaWZ5aW5nLWdsYXNzJyk7XG4gIGljb25FbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhcmNoYmFyaWNvbicpO1xuXG4gIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoSWNvbi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtY29udGFpbmVyX19zZWFyY2gtaWNvbicpO1xuICBzZWFyY2hJY29uLmFwcGVuZENoaWxkKGljb25FbGVtZW50KTtcbiAgc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNlYXJjaCk7XG5cbiAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtY29udGFpbmVyX19zZWFyY2gtYmFyJyk7XG4gIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlYXJjaC1iYXInKTtcbiAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VhcmNoIGxvY2F0aW9uLi4uJyk7XG4gIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGhhbmRsZVNlYXJjaCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYmFyLWNvbnRhaW5lcl9fc2VhcmNoLWNvbnRhaW5lcicpO1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtZW50KTtcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RWxlbWVudCk7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcblxuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYmFyLWNvbnRhaW5lcl9fZXJyb3ItbWVzc2FnZScpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb3BlcmF0b3ItbGluZWJyZWFrXG4gIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9XG4gICAgJ0xvY2F0aW9uIGlzIG5vdCB2YWxpZC4gUGxlYXNlIGVudGVyIGEgdmFsaWQgbG9jYXRpb24uJztcbiAgZXJyb3JNZXNzYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXJyb3JtZXNzYWdlJyk7XG4gIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIGNvbnN0IGVycm9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1iYXItY29udGFpbmVyX19lcnJvci1jb250YWluZXInKTtcbiAgZXJyb3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JNZXNzYWdlKTtcblxuICBjb25zdCBzZWFyY2hCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoQmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xlZnQtbmF2X19zZWFyY2gtYmFyLWNvbnRhaW5lcicpO1xuICBzZWFyY2hCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyKTtcbiAgc2VhcmNoQmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGVycm9yQ29udGFpbmVyKTtcblxuICBjb25zdCBsZWZ0TmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxlZnROYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2X19sZWZ0LW5hdicpO1xuICBsZWZ0TmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcbiAgbGVmdE5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hCYXJDb250YWluZXIpO1xuXG4gIGNvbnN0IGNlbGNpdXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2VsY2l1c0J1dHRvbi5jbGFzc0xpc3QuYWRkKFxuICAgICdidXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbicsXG4gICAgJ2J1dHRvbi1jb250YWluZXItLWNlbGNpdXMtYnV0dG9uJyxcbiAgICAnYWN0aXZlLXVuaXQtYnV0dG9uJyxcbiAgKTtcbiAgY2VsY2l1c0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NlbGNpdXMnKTtcbiAgY2VsY2l1c0J1dHRvbi50ZXh0Q29udGVudCA9ICfCsEMsbW0sa3BoJztcbiAgY2VsY2l1c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBzZXRBY3RpdmVVbml0QnV0dG9uKGNlbGNpdXNCdXR0b24pO1xuICAgIGNyZWF0ZVdlYXRoZXJTZWN0aW9uKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGZhaHJlbmhlaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZmFocmVuaGVpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFxuICAgICdidXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbicsXG4gICAgJ2J1dHRvbi1jb250YWluZXItLWZhaHJlbmhlaXQtYnV0dG9uJyxcbiAgKTtcbiAgZmFocmVuaGVpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZhaHJlbmhlaXQnKTtcbiAgZmFocmVuaGVpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICfCsEYsaW4sbXBoJztcbiAgZmFocmVuaGVpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBzZXRBY3RpdmVVbml0QnV0dG9uKGZhaHJlbmhlaXRCdXR0b24pO1xuICAgIGNyZWF0ZVdlYXRoZXJTZWN0aW9uKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncmlnaHQtbmF2X19idXR0b24tY29udGFpbmVyJyk7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxjaXVzQnV0dG9uKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGZhaHJlbmhlaXRCdXR0b24pO1xuXG4gIGNvbnN0IHJpZ2h0TmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJpZ2h0TmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdl9fcmlnaHQtbmF2Jyk7XG4gIHJpZ2h0TmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcbiAgbmF2LmFwcGVuZENoaWxkKGxlZnROYXZDb250YWluZXIpO1xuICBuYXYuYXBwZW5kQ2hpbGQocmlnaHROYXZDb250YWluZXIpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdik7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IGZldGNoV2VhdGhlckRhdGEgZnJvbSAnLi93ZWF0aGVyYXBpLWNhbGxzJztcbmltcG9ydCBmb3JtYXREYXRlVG9IdW1hblJlYWRhYmxlIGZyb20gJy4vZGF0ZS1hZGp1c3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbkVsZW1lbnQobG9jYXRpb25EYXRhKSB7XG4gIGNvbnN0IGxvY2F0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbG9jYXRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWNvbnRhaW5lcl9fbG9jYXRpb24nKTtcbiAgY29uc3QgbmFtZSA9IGxvY2F0aW9uRGF0YS5uYW1lIHx8ICcnO1xuICBjb25zdCByZWdpb24gPSBsb2NhdGlvbkRhdGEucmVnaW9uIHx8ICcnO1xuICBjb25zdCBjb3VudHJ5ID0gbG9jYXRpb25EYXRhLmNvdW50cnkgfHwgJyc7XG5cbiAgY29uc3QgbG9jYXRpb25UZXh0ID0gW25hbWUsIHJlZ2lvbiwgY291bnRyeV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJywgJyk7XG5cbiAgbG9jYXRpb25FbGVtZW50LnRleHRDb250ZW50ID0gbG9jYXRpb25UZXh0O1xuXG4gIHJldHVybiBsb2NhdGlvbkVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGVUaW1lRWxlbWVudChsb2NhdGlvbkRhdGEpIHtcbiAgY29uc3QgZGF0ZVRpbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXRlVGltZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGl0bGUtY29udGFpbmVyX19kYXRlLXRpbWUnKTtcbiAgZGF0ZVRpbWVFbGVtZW50LnRleHRDb250ZW50ID0gYCR7Zm9ybWF0RGF0ZVRvSHVtYW5SZWFkYWJsZShcbiAgICBsb2NhdGlvbkRhdGEubG9jYWx0aW1lLFxuICApfWA7XG4gIHJldHVybiBkYXRlVGltZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJTZWN0aW9uQ29udGFpbmVyKCkge1xuICBjb25zdCB3ZWF0aGVyU2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgd2VhdGhlclNlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1zZWN0aW9uLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGV4aXN0aW5nV2VhdGhlclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcud2VhdGhlci1zZWN0aW9uLWNvbnRhaW5lcicsXG4gICk7XG5cbiAgaWYgKGV4aXN0aW5nV2VhdGhlclNlY3Rpb24pIHtcbiAgICBleGlzdGluZ1dlYXRoZXJTZWN0aW9uLnJlbW92ZSgpO1xuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlclNlY3Rpb25Db250YWluZXIpO1xufVxuXG5jb25zdCB3ZWF0aGVySWNvbnMgPSB7XG4gIFN1bm55OiAnZmEtc29saWQgZmEtc3VuJyxcbiAgQ2xlYXI6ICdmYS1zb2xpZCBmYS1tb29uJyxcbiAgJ1BhcnRseSBjbG91ZHknOiAnZmEtc29saWQgZmEtY2xvdWQnLFxuICBDbG91ZHk6ICdmYS1zb2xpZCBmYS1jbG91ZCcsXG4gIE92ZXJjYXN0OiAnZmEtc29saWQgZmEtY2xvdWQnLFxuICBNaXN0OiAnZmEtc29saWQgZmEtc21vZycsXG4gICdQYXRjaHkgcmFpbiBwb3NzaWJsZSc6ICdmYS1zb2xpZCBmYS1jbG91ZC1yYWluJyxcbiAgJ1BhdGNoeSBzbm93IHBvc3NpYmxlJzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ1BhdGNoeSBzbGVldCBwb3NzaWJsZSc6ICdmYS1yZWd1bGFyIGZhLXNub3dmbGFrZScsXG4gICdQYXRjaHkgZnJlZXppbmcgZHJpenpsZSBwb3NzaWJsZSc6ICdmYS1zb2xpZCBmYS1jbG91ZC1yYWluJyxcbiAgJ1RodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZSc6ICdmYS1zb2xpZCBmYS1jbG91ZC1ib2x0JyxcbiAgJ0Jsb3dpbmcgc25vdyc6ICdmYS1zb2xpZCBmYS13aW5kJyxcbiAgQmxpenphcmQ6ICdmYS1zb2xpZCBmYS13aW5kJyxcbiAgRm9nOiAnZmEtc29saWQgZmEtc21vZycsXG4gICdGcmVlemluZyBmb2cnOiAnZmEtc29saWQgZmEtc21vZycsXG4gICdQYXRjaHkgbGlnaHQgZHJpenpsZSc6ICdmYS1zb2xpZCBmYS1jbG91ZC1yYWluJyxcbiAgJ0xpZ2h0IGRyaXp6bGUnOiAnZmEtc29saWQgZmEtY2xvdWQtcmFpbicsXG4gICdGcmVlemluZyBkcml6emxlJzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ0hlYXZ5IGZyZWV6aW5nIGRyaXp6bGUnOiAnZmEtcmVndWxhciBmYS1zbm93Zmxha2UnLFxuICAnUGF0Y2h5IGxpZ2h0IHJhaW4nOiAnZmEtc29saWQgZmEtY2xvdWQtcmFpbicsXG4gICdMaWdodCByYWluJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXJhaW4nLFxuICAnTW9kZXJhdGUgcmFpbiBhdCB0aW1lcyc6ICdmYS1zb2xpZCBmYS1jbG91ZC1yYWluJyxcbiAgJ01vZGVyYXRlIHJhaW4nOiAnZmEtc29saWQgZmEtY2xvdWQtcmFpbicsXG4gICdIZWF2eSByYWluIGF0IHRpbWVzJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXNob3dlcnMtaGVhdnknLFxuICAnSGVhdnkgcmFpbic6ICdmYS1zb2xpZCBmYS1jbG91ZC1zaG93ZXJzLWhlYXZ5JyxcbiAgJ0xpZ2h0IGZyZWV6aW5nIHJhaW4nOiAnZmEtc29saWQgZmEtY2xvdWQtcmFpbicsXG4gICdNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluJzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ0xpZ2h0IHNsZWV0JzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ01vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0JzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ1BhdGNoeSBsaWdodCBzbm93JzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ0xpZ2h0IHNub3cnOiAnZmEtcmVndWxhciBmYS1zbm93Zmxha2UnLFxuICAnUGF0Y2h5IG1vZGVyYXRlIHNub3cnOiAnZmEtcmVndWxhciBmYS1zbm93Zmxha2UnLFxuICAnTW9kZXJhdGUgc25vdyc6ICdmYS1yZWd1bGFyIGZhLXNub3dmbGFrZScsXG4gICdQYXRjaHkgaGVhdnkgc25vdyc6ICdmYS1zb2xpZCBmYS1jbG91ZC1zaG93ZXJzLWhlYXZ5JyxcbiAgJ0hlYXZ5IHNub3cnOiAnZmEtc29saWQgZmEtY2xvdWQtc2hvd2Vycy1oZWF2eScsXG4gICdJY2UgcGVsbGV0cyc6ICdmYS1zb2xpZCBmYS1zbm93Zmxha2UnLFxuICAnTGlnaHQgcmFpbiBzaG93ZXInOiAnZmEtc29saWQgZmEtY2xvdWQtc2hvd2Vycy1oZWF2eScsXG4gICdNb2RlcmF0ZSBvciBoZWF2eSByYWluIHNob3dlcic6ICdmYS1zb2xpZCBmYS1jbG91ZC1zaG93ZXJzLWhlYXZ5JyxcbiAgJ1RvcnJlbnRpYWwgcmFpbiBzaG93ZXInOiAnZmEtc29saWQgZmEtY2xvdWQtc2hvd2Vycy1oZWF2eScsXG4gICdMaWdodCBzbGVldCBzaG93ZXJzJzogJ2ZhLXNvbGlkIGZhLXNub3dmbGFrZScsXG4gICdNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXNob3dlcnMtaGVhdnknLFxuICAnTGlnaHQgc25vdyBzaG93ZXJzJzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ01vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vycyc6ICdmYS1yZWd1bGFyIGZhLXNub3dmbGFrZScsXG4gICdMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXJhaW4nLFxuICAnTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0cyc6ICdmYS1zb2xpZCBmYS1zaG93ZXJzLWhlYXZ5JyxcbiAgJ1BhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlcic6ICdmYS1zb2xpZCBmYS1jbG91ZC1ib2x0JyxcbiAgJ01vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLWJvbHQnLFxuICAnUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLWJvbHQnLFxuICAnTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXInOiAnZmEtc29saWQgZmEtY2xvdWQtYm9sdCcsXG59O1xuXG5mdW5jdGlvbiBnZXROZXh0MjRIb3Vyc0RhdGEod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgY3VycmVudExhc3RVcGRhdGVkID0gbmV3IERhdGUod2VhdGhlckRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQpO1xuXG4gIGNvbnN0IGZvcmVjYXN0RGF5MCA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXI7XG4gIGNvbnN0IGZvcmVjYXN0RGF5MSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXI7XG5cbiAgY29uc3QgbmV4dDI0SG91cnMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVjYXN0RGF5MC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGhvdXJEYXRhID0gZm9yZWNhc3REYXkwW2ldO1xuICAgIGNvbnN0IHRoZXRpbWVoZXJlID0gbmV3IERhdGUoaG91ckRhdGEudGltZSk7XG5cbiAgICBpZiAodGhldGltZWhlcmUgLSBjdXJyZW50TGFzdFVwZGF0ZWQgPiAtKDM2MDAgKiAxMDAwKSkge1xuICAgICAgbmV4dDI0SG91cnMucHVzaChob3VyRGF0YSk7XG4gICAgfVxuICAgIGlmIChuZXh0MjRIb3Vycy5sZW5ndGggPj0gMjQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChuZXh0MjRIb3Vycy5sZW5ndGggPCAyNCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3REYXkxLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBob3VyRGF0YSA9IGZvcmVjYXN0RGF5MVtpXTtcblxuICAgICAgbmV4dDI0SG91cnMucHVzaChob3VyRGF0YSk7XG5cbiAgICAgIGlmIChuZXh0MjRIb3Vycy5sZW5ndGggPj0gMjQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5leHQyNEhvdXJzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXZWF0aGVyU2VjdGlvbigpIHtcbiAgY3JlYXRlV2VhdGhlclNlY3Rpb25Db250YWluZXIoKTtcbiAgbGV0IGlzZmFocmVuaGVpdCA9IGZhbHNlO1xuICBsZXQgaXNDZWxjaXVzID0gZmFsc2U7XG5cbiAgY29uc3QgYWN0aXZlVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtdW5pdC1idXR0b24nKTtcblxuICBpZiAoYWN0aXZlVW5pdC5pZCA9PT0gJ2ZhaHJlbmhlaXQnKSB7XG4gICAgaXNmYWhyZW5oZWl0ID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChhY3RpdmVVbml0LmlkID09PSAnY2VsY2l1cycpIHtcbiAgICBpc0NlbGNpdXMgPSB0cnVlO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gcmVzdWx0LmRhdGE7XG5cbiAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbjtcblxuICAgIGNvbnN0IGxvY2F0aW9uRWxlbWVudCA9IGNyZWF0ZUxvY2F0aW9uRWxlbWVudChsb2NhdGlvbkRhdGEpO1xuICAgIGNvbnN0IGRhdGVUaW1lRWxlbWVudCA9IGNyZWF0ZURhdGVUaW1lRWxlbWVudChsb2NhdGlvbkRhdGEpO1xuXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLXNlY3Rpb25fX3RpdGxlLWNvbnRhaW5lcicpO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uRWxlbWVudCk7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVRpbWVFbGVtZW50KTtcblxuICAgIGNvbnN0IHRvZGF5RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9kYXlEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtYWluLXBpbGwtdG9wX190b2RheS1kZXNjcmlwdGlvbicpO1xuICAgIHRvZGF5RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0fWA7XG5cbiAgICBjb25zdCB0b2RheUZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b2RheUZlZWxzTGlrZS5jbGFzc0xpc3QuYWRkKCdtYWluLXBpbGwtdG9wX190b2RheS1mZWVscy1saWtlJyk7XG4gICAgbGV0IGZlZWxzbGlrZXRleHQgPSAnJztcbiAgICBpZiAoaXNmYWhyZW5oZWl0KSB7XG4gICAgICBmZWVsc2xpa2V0ZXh0ID0gYEZlZWxzIGxpa2UgJHt3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mfcKwRmA7XG4gICAgfSBlbHNlIGlmIChpc0NlbGNpdXMpIHtcbiAgICAgIGZlZWxzbGlrZXRleHQgPSBgRmVlbHMgbGlrZSAke3dlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2N9wrBDYDtcbiAgICB9XG4gICAgdG9kYXlGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBmZWVsc2xpa2V0ZXh0O1xuXG4gICAgY29uc3QgbWFpblBpbGxUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluUGlsbFRvcC5jbGFzc0xpc3QuYWRkKCdtYWluLXBpbGxfX21haW4tcGlsbC10b3AnKTtcbiAgICBtYWluUGlsbFRvcC5hcHBlbmRDaGlsZCh0b2RheURlc2NyaXB0aW9uKTtcbiAgICBtYWluUGlsbFRvcC5hcHBlbmRDaGlsZCh0b2RheUZlZWxzTGlrZSk7XG5cbiAgICBjb25zdCB3ZWF0aGVyUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIHdlYXRoZXJQaWMuc2V0QXR0cmlidXRlKFxuICAgICAgJ2NsYXNzJyxcbiAgICAgIHdlYXRoZXJJY29uc1t3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0XSxcbiAgICApO1xuICAgIHdlYXRoZXJQaWMuY2xhc3NMaXN0LmFkZCgnbWFpbi1waWxsLW1pZF9fd2VhdGhlci1waWMnKTtcblxuICAgIGNvbnN0IGN1cnJlbnRUZW1wVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjdXJyZW50VGVtcFRleHQuY2xhc3NMaXN0LmFkZCgnbWFpbi1waWxsLW1pZF9fY3VycmVudC10ZW1wLXRleHQnKTtcbiAgICBsZXQgbm93dGVtcHRleHQgPSAnJztcbiAgICBpZiAoaXNmYWhyZW5oZWl0KSB7XG4gICAgICBub3d0ZW1wdGV4dCA9IGAke3dlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mfcKwYDtcbiAgICB9IGVsc2UgaWYgKGlzQ2VsY2l1cykge1xuICAgICAgbm93dGVtcHRleHQgPSBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfY33CsGA7XG4gICAgfVxuICAgIGN1cnJlbnRUZW1wVGV4dC50ZXh0Q29udGVudCA9IG5vd3RlbXB0ZXh0O1xuXG4gICAgY29uc3QgbWFpblBpbGxNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluUGlsbE1pZC5jbGFzc0xpc3QuYWRkKCdtYWluLXBpbGxfX21haW4tcGlsbC1taWQnKTtcbiAgICBtYWluUGlsbE1pZC5hcHBlbmRDaGlsZCh3ZWF0aGVyUGljKTtcbiAgICBtYWluUGlsbE1pZC5hcHBlbmRDaGlsZChjdXJyZW50VGVtcFRleHQpO1xuXG4gICAgY29uc3QgdG9kYXlIaWdoVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b2RheUhpZ2hUZXh0LmNsYXNzTGlzdC5hZGQoJ21haW4tcGlsbC1ib3QtLXRvZGF5LWxvd2hpZ2gtdGV4dCcpO1xuICAgIGxldCBoaWdodGVtcHRleHQgPSAnJztcbiAgICBpZiAoaXNmYWhyZW5oZWl0KSB7XG4gICAgICBoaWdodGVtcHRleHQgPSBgSGlnaDogJHt3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mfcKwRmA7XG4gICAgfSBlbHNlIGlmIChpc0NlbGNpdXMpIHtcbiAgICAgIGhpZ2h0ZW1wdGV4dCA9IGBIaWdoOiAke3dlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2N9wrBDYDtcbiAgICB9XG4gICAgdG9kYXlIaWdoVGV4dC50ZXh0Q29udGVudCA9IGhpZ2h0ZW1wdGV4dDtcblxuICAgIGNvbnN0IHRvZGF5TG93VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b2RheUxvd1RleHQuY2xhc3NMaXN0LmFkZCgnbWFpbi1waWxsLWJvdC0tdG9kYXktbG93aGlnaC10ZXh0Jyk7XG4gICAgbGV0IGxvd3RlbXB0ZXh0ID0gJyc7XG4gICAgaWYgKGlzZmFocmVuaGVpdCkge1xuICAgICAgbG93dGVtcHRleHQgPSBgTG93OiAke3dlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2Z9wrBGYDtcbiAgICB9IGVsc2UgaWYgKGlzQ2VsY2l1cykge1xuICAgICAgbG93dGVtcHRleHQgPSBgTG93OiAke3dlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2N9wrBDYDtcbiAgICB9XG4gICAgdG9kYXlMb3dUZXh0LnRleHRDb250ZW50ID0gbG93dGVtcHRleHQ7XG5cbiAgICBjb25zdCBtYWluUGlsbEJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5QaWxsQm90LmNsYXNzTGlzdC5hZGQoJ21haW4tcGlsbF9fbWFpbi1waWxsLWJvdCcpO1xuICAgIG1haW5QaWxsQm90LmFwcGVuZENoaWxkKHRvZGF5SGlnaFRleHQpO1xuICAgIG1haW5QaWxsQm90LmFwcGVuZENoaWxkKHRvZGF5TG93VGV4dCk7XG5cbiAgICBjb25zdCBtYWluUGlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5QaWxsLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LXdlYXRoZXItc2VjdGlvbl9fbWFpbi1waWxsJyk7XG4gICAgbWFpblBpbGwuYXBwZW5kQ2hpbGQobWFpblBpbGxUb3ApO1xuICAgIG1haW5QaWxsLmFwcGVuZENoaWxkKG1haW5QaWxsTWlkKTtcbiAgICBtYWluUGlsbC5hcHBlbmRDaGlsZChtYWluUGlsbEJvdCk7XG5cbiAgICBjb25zdCBob3VybHlQaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cmx5UGlsbC5jbGFzc0xpc3QuYWRkKCd0b2RheS13ZWF0aGVyLXNlY3Rpb25fX2hvdXJseS1waWxsJyk7XG5cbiAgICBjb25zdCBob3VybHlEYXRhID0gZ2V0TmV4dDI0SG91cnNEYXRhKHdlYXRoZXJEYXRhKTtcbiAgICBjb25zb2xlLmxvZyhob3VybHlEYXRhKTtcbiAgICBsZXQgZmlyc3Rib2xkID0gdHJ1ZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG91cmx5RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaG91ckRhdGEgPSBob3VybHlEYXRhW2ldO1xuICAgICAgY29uc3QgdGltZVdpdGhvdXREYXRlID0gaG91ckRhdGEudGltZS5zcGxpdCgnICcpWzFdO1xuICAgICAgY29uc3QgdGVtcGVyYXR1cmVDZWxzaXVzID0gaG91ckRhdGEudGVtcF9jO1xuICAgICAgY29uc3QgdGVtcGVyYXR1cmVGYXJlbmhlaXQgPSBob3VyRGF0YS50ZW1wX2Y7XG4gICAgICBjb25zdCB3ZWF0aGVyVGV4dCA9IGhvdXJEYXRhLmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1waWxsX19jYXJkJyk7XG5cbiAgICAgIGNvbnN0IHRpbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXJkX190aW1lJyk7XG4gICAgICB0aW1lRWxlbWVudC50ZXh0Q29udGVudCA9IHRpbWVXaXRob3V0RGF0ZTtcbiAgICAgIGlmIChmaXJzdGJvbGQpIHtcbiAgICAgICAgdGltZUVsZW1lbnQuc3R5bGUuZm9udFdlaWdodCA9ICc2MDAnO1xuICAgICAgICBmaXJzdGJvbGQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaWNvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICBpY29uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgd2VhdGhlckljb25zW3dlYXRoZXJUZXh0XSk7XG4gICAgICBpY29uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXJkX19pY29uJyk7XG5cbiAgICAgIGNvbnN0IHRlbXBlcmF0dXJlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVtcGVyYXR1cmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX3RlbXBlcmF0dXJlJyk7XG4gICAgICBpZiAoaXNmYWhyZW5oZWl0KSB7XG4gICAgICAgIHRlbXBlcmF0dXJlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3RlbXBlcmF0dXJlRmFyZW5oZWl0fcKwYDtcbiAgICAgIH0gZWxzZSBpZiAoaXNDZWxjaXVzKSB7XG4gICAgICAgIHRlbXBlcmF0dXJlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3RlbXBlcmF0dXJlQ2Vsc2l1c33CsGA7XG4gICAgICB9XG5cbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGltZUVsZW1lbnQpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChpY29uRWxlbWVudCk7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlRWxlbWVudCk7XG5cbiAgICAgIGhvdXJseVBpbGwuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9kYXlXZWF0aGVyU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5V2VhdGhlclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1zZWN0aW9uX190b2RheS13ZWF0aGVyLXNlY3Rpb24nKTtcbiAgICB0b2RheVdlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKG1haW5QaWxsKTtcbiAgICB0b2RheVdlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKGhvdXJseVBpbGwpO1xuXG4gICAgY29uc3Qgd2VhdGhlclNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWF0aGVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLXNlY3Rpb24tY29udGFpbmVyX193ZWF0aGVyLXNlY3Rpb24nKTtcbiAgICB3ZWF0aGVyU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gICAgd2VhdGhlclNlY3Rpb24uYXBwZW5kQ2hpbGQodG9kYXlXZWF0aGVyU2VjdGlvbik7XG5cbiAgICBjb25zdCBleGlzdGluZ1dlYXRoZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcud2VhdGhlci1zZWN0aW9uLWNvbnRhaW5lcl9fd2VhdGhlci1zZWN0aW9uJyxcbiAgICApO1xuXG4gICAgaWYgKGV4aXN0aW5nV2VhdGhlclNlY3Rpb24pIHtcbiAgICAgIGV4aXN0aW5nV2VhdGhlclNlY3Rpb24ucmVtb3ZlKCk7XG4gICAgfVxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLndlYXRoZXItc2VjdGlvbi1jb250YWluZXInKVxuICAgICAgLmFwcGVuZENoaWxkKHdlYXRoZXJTZWN0aW9uKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyB3ZWF0aGVyIHNlY3Rpb246JywgZXJyb3IpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBhZGRBbGVydFRleHQoKSB7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvcm1lc3NhZ2UnKTtcblxuICBpZiAoZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVBbGVydFRleHQoKSB7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvcm1lc3NhZ2UnKTtcblxuICBpZiAoZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKCkge1xuICBjb25zdCBwcmVsaW1Mb2NhdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmVsaW1sb2NhdGlvbicpO1xuICB0cnkge1xuICAgIGNvbnN0IHByZWxpbWluYXJ5VXJsID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9YzU5ZmVjYWJmZTllNDVlOTkxMzExNDQwNzIzMDIwOSZxPSR7cHJlbGltTG9jYXRpb259JmRheXM9NyZhcWk9bm8mYWxlcnRzPW5vYDtcblxuICAgIGNvbnN0IHByZWxpbWluYXJ5UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwcmVsaW1pbmFyeVVybCk7XG4gICAgY29uc3QgcHJlbGltaW5hcnlEYXRhID0gYXdhaXQgcHJlbGltaW5hcnlSZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAocHJlbGltaW5hcnlEYXRhLmVycm9yICYmIHByZWxpbWluYXJ5RGF0YS5lcnJvci5jb2RlID09PSAxMDA2KSB7XG4gICAgICBhZGRBbGVydFRleHQoKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJlbW92ZUFsZXJ0VGV4dCgpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2F0aW9uJywgcHJlbGltTG9jYXRpb24pO1xuICAgIGNvbnN0IHNldExvY2F0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2F0aW9uJyk7XG5cbiAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YzU5ZmVjYWJmZTllNDVlOTkxMzExNDQwNzIzMDIwOSZxPSR7c2V0TG9jYXRpb259JmRheXM9NyZhcWk9bm8mYWxlcnRzPW5vYDtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB7IGRhdGEgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhIGZyb20gdGhlIEFQSTonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==