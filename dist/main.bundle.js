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
}

.weather-section__title-container {
  display: flex;
  gap: 1.5rem;
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


@media screen and (max-width: 725px) {
  .left-nav__image-container {
    display: none;
  }
}

@media screen and (max-width: 645px) {
  .left-nav__search-bar-container:hover .search-bar-container__search-bar {
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,SAAS;EACT,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,wDAAwD;AAC1D;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,yCAAyC;EACzC,8BAA8B;AAChC;;AAEA;EACE,yCAAyC;EACzC,8BAA8B;AAChC;;AAEA;EACE,+BAA+B;EAC/B,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,+BAA+B;EAC/B,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;AACrB;;;AAGA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,SAAS;IACT,iBAAiB;EACnB;;EAEA;IACE,uBAAuB;IACvB,WAAW;EACb;;EAEA;IACE,uBAAuB;IACvB,WAAW;EACb;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: 0;\n  font-family: 'Open Sans', sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100%;\n}\n\n.container {\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(to bottom, #184e77, #d9ed92);\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  flex-wrap: wrap;\n}\n\n.nav__left-nav {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.left-nav__image-container {\n  width: 100px;\n  height: 100px;\n}\n\n.image-container__weather-logo {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.left-nav__search-bar-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.search-bar-container__search-container {\n  background-color: rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  padding: 0.6rem;\n  border-radius: 4px;\n  gap: 0.5rem;\n}\n\n.search-container__search-bar {\n  background: transparent;\n  border: none;\n  outline: none;\n  color: white;\n  transition: 0.75s;\n  width: 0px;\n  font-size: 1.15rem;\n}\n\n.left-nav__search-bar-container:hover .search-container__search-bar {\n  width: 335px;\n}\n\n.search-container__search-bar::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.search-container__search-icon {\n  margin-left: -0.45rem;\n  align-items: center;\n  display: flex;\n}\n\n.left-nav__search-bar-container:hover .search-container__search-icon {\n  margin: 0rem;\n}\n\n#searchbaricon {\n  font-size: 1.15rem;\n  cursor: pointer;\n  transition: 0.1s ease;\n}\n\n#searchbaricon:hover {\n  transform: scale(1.15);\n}\n\n#searchbaricon:active {\n  transform: scale(1);\n}\n\n#errormessage {\n  color: crimson;\n  font-weight: 600;\n  font-size: 1rem;\n  padding-top: 0.2rem;\n  text-align: center;\n  word-wrap: break-word;\n}\n\n.nav__right-nav {\n  display: flex;\n  align-items: center;\n}\n\n.button-container__unit-button {\n  border: none;\n  outline: none;\n  font-size: 1.25rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  font-weight: 300;\n  transition: 0.1s ease;\n}\n\n.button-container__unit-button:hover {\n  opacity: 50%;\n}\n\n.button-container--celcius-button {\n  background-color: rgba(52, 160, 164, 0.5);\n  border-radius: 4px 0px 0px 4px;\n}\n\n.button-container--fahrenheit-button {\n  background-color: rgba(82, 182, 154, 0.5);\n  border-radius: 0px 4px 4px 0px;\n}\n\n.button-container__unit-button.active-unit-button {\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 400;\n}\n\n.weather-section-container {\n  margin-top: 1rem;\n  display: flex;\n  justify-content: center;\n}\n\n.weather-section-container__weather-section {\n  width: 90%;\n}\n\n.weather-section__title-container {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.title-container__location {\n  color: white;\n  font-weight: 600;\n  font-size: 2rem;\n}\n\n.title-container__date-time {\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  font-size: 1.4rem;\n  padding-top: 0.2rem;\n}\n\n\n@media screen and (max-width: 725px) {\n  .left-nav__image-container {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 645px) {\n  .left-nav__search-bar-container:hover .search-bar-container__search-bar {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 760px) {\n  .nav {\n    gap: 1rem;\n    padding-top: 1rem;\n  }\n\n  .nav__left-nav {\n    justify-content: center;\n    width: 100%;\n  }\n\n  .nav__right-nav {\n    justify-content: center;\n    width: 100%;\n  }\n}\n"],"sourceRoot":""}]);
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
  celciusButton.textContent = '°C,mm,kph';
  celciusButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveUnitButton(celciusButton);
  });

  const fahrenheitButton = document.createElement('button');
  fahrenheitButton.classList.add(
    'button-container__unit-button',
    'button-container--fahrenheit-button',
  );
  fahrenheitButton.textContent = '°F,in,mph';
  fahrenheitButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveUnitButton(fahrenheitButton);
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

  const container = document.querySelector('.container');
  container.appendChild(weatherSectionContainer);
}

async function createWeatherSection() {
  createWeatherSectionContainer();
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

    const weatherSection = document.createElement('div');
    weatherSection.classList.add('weather-section-container__weather-section');
    weatherSection.appendChild(titleContainer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlIQUF5SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN6TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLEtBQUssVUFB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QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxhQUFhO0FBQ2IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGF0ZS1hZGp1c3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RvZGF5LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlcmFwaS1jYWxscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiAwO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxODRlNzcsICNkOWVkOTIpO1xufVxuXG4ubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ubmF2X19sZWZ0LW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLmxlZnQtbmF2X19pbWFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5pbWFnZS1jb250YWluZXJfX3dlYXRoZXItbG9nbyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmxlZnQtbmF2X19zZWFyY2gtYmFyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2VhcmNoLWJhci1jb250YWluZXJfX3NlYXJjaC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1iYXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuNzVzO1xuICB3aWR0aDogMHB4O1xuICBmb250LXNpemU6IDEuMTVyZW07XG59XG5cbi5sZWZ0LW5hdl9fc2VhcmNoLWJhci1jb250YWluZXI6aG92ZXIgLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1iYXIge1xuICB3aWR0aDogMzM1cHg7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyX19zZWFyY2gtYmFyOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyX19zZWFyY2gtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAtMC40NXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmxlZnQtbmF2X19zZWFyY2gtYmFyLWNvbnRhaW5lcjpob3ZlciAuc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWljb24ge1xuICBtYXJnaW46IDByZW07XG59XG5cbiNzZWFyY2hiYXJpY29uIHtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcbn1cblxuI3NlYXJjaGJhcmljb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xufVxuXG4jc2VhcmNoYmFyaWNvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4jZXJyb3JtZXNzYWdlIHtcbiAgY29sb3I6IGNyaW1zb247XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZy10b3A6IDAuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5uYXZfX3JpZ2h0LW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lcl9fdW5pdC1idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiA1MCU7XG59XG5cbi5idXR0b24tY29udGFpbmVyLS1jZWxjaXVzLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTIsIDE2MCwgMTY0LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA0cHggMHB4IDBweCA0cHg7XG59XG5cbi5idXR0b24tY29udGFpbmVyLS1mYWhyZW5oZWl0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDE4MiwgMTU0LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHg7XG59XG5cbi5idXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbi5hY3RpdmUtdW5pdC1idXR0b24ge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ud2VhdGhlci1zZWN0aW9uLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud2VhdGhlci1zZWN0aW9uLWNvbnRhaW5lcl9fd2VhdGhlci1zZWN0aW9uIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLndlYXRoZXItc2VjdGlvbl9fdGl0bGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnRpdGxlLWNvbnRhaW5lcl9fbG9jYXRpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnRpdGxlLWNvbnRhaW5lcl9fZGF0ZS10aW1lIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzI1cHgpIHtcbiAgLmxlZnQtbmF2X19pbWFnZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ1cHgpIHtcbiAgLmxlZnQtbmF2X19zZWFyY2gtYmFyLWNvbnRhaW5lcjpob3ZlciAuc2VhcmNoLWJhci1jb250YWluZXJfX3NlYXJjaC1iYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5uYXYge1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgfVxuXG4gIC5uYXZfX2xlZnQtbmF2IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5uYXZfX3JpZ2h0LW5hdiB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHlDQUF5QztFQUN6Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IDA7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE4NGU3NywgI2Q5ZWQ5Mik7XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm5hdl9fbGVmdC1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5sZWZ0LW5hdl9faW1hZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXJfX3dlYXRoZXItbG9nbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubGVmdC1uYXZfX3NlYXJjaC1iYXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYmFyLWNvbnRhaW5lcl9fc2VhcmNoLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXG4gIHdpZHRoOiAwcHg7XFxuICBmb250LXNpemU6IDEuMTVyZW07XFxufVxcblxcbi5sZWZ0LW5hdl9fc2VhcmNoLWJhci1jb250YWluZXI6aG92ZXIgLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1iYXIge1xcbiAgd2lkdGg6IDMzNXB4O1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhcjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1pY29uIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMC40NXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubGVmdC1uYXZfX3NlYXJjaC1iYXItY29udGFpbmVyOmhvdmVyIC5zZWFyY2gtY29udGFpbmVyX19zZWFyY2gtaWNvbiB7XFxuICBtYXJnaW46IDByZW07XFxufVxcblxcbiNzZWFyY2hiYXJpY29uIHtcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcXG59XFxuXFxuI3NlYXJjaGJhcmljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG59XFxuXFxuI3NlYXJjaGJhcmljb246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbiNlcnJvcm1lc3NhZ2Uge1xcbiAgY29sb3I6IGNyaW1zb247XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZy10b3A6IDAuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLm5hdl9fcmlnaHQtbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lcl9fdW5pdC1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyLS1jZWxjaXVzLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCAxNjAsIDE2NCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwcHggMHB4IDRweDtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXItLWZhaHJlbmhlaXQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDE4MiwgMTU0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lcl9fdW5pdC1idXR0b24uYWN0aXZlLXVuaXQtYnV0dG9uIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ud2VhdGhlci1zZWN0aW9uLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1zZWN0aW9uLWNvbnRhaW5lcl9fd2VhdGhlci1zZWN0aW9uIHtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi53ZWF0aGVyLXNlY3Rpb25fX3RpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyX19sb2NhdGlvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyX19kYXRlLXRpbWUge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyNXB4KSB7XFxuICAubGVmdC1uYXZfX2ltYWdlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0NXB4KSB7XFxuICAubGVmdC1uYXZfX3NlYXJjaC1iYXItY29udGFpbmVyOmhvdmVyIC5zZWFyY2gtYmFyLWNvbnRhaW5lcl9fc2VhcmNoLWJhciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLm5hdiB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICB9XFxuXFxuICAubmF2X19sZWZ0LW5hdiB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5uYXZfX3JpZ2h0LW5hdiB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGN1c3RvbVJvdW5kKG51bWJlcikge1xuICBpZiAobnVtYmVyIDwgMCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyIC0gMC41KTtcbiAgfVxuICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIgKyAwLjUpO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVUaW1lWm9uZU9mZnNldChsb2NhbFRpbWUpIHtcbiAgY29uc3QgbG9jYWxEYXRlID0gbmV3IERhdGUobG9jYWxUaW1lKTtcblxuICBjb25zdCBjdXJyZW50VXRjVGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgY29uc3QgeWVhciA9IGxvY2FsRGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGRzdFN0YXJ0ID0gbmV3IERhdGUoeWVhciwgMywgMjYpO1xuICBjb25zdCBkc3RFbmQgPSBuZXcgRGF0ZSh5ZWFyLCAxMCwgMjkpO1xuXG4gIGlmIChsb2NhbERhdGUgPj0gZHN0U3RhcnQgJiYgbG9jYWxEYXRlIDwgZHN0RW5kKSB7XG4gICAgY29uc3Qgb2Zmc2V0TWludXRlcyA9IChsb2NhbERhdGUgLSBjdXJyZW50VXRjVGltZSkgLyAoNjAgKiAxMDAwKSArIDYwO1xuICAgIHJldHVybiBjdXN0b21Sb3VuZChvZmZzZXRNaW51dGVzIC8gNjApO1xuICB9XG5cbiAgY29uc3Qgb2Zmc2V0TWludXRlcyA9IChsb2NhbERhdGUgLSBjdXJyZW50VXRjVGltZSkgLyAoNjAgKiAxMDAwKTtcbiAgcmV0dXJuIGN1c3RvbVJvdW5kKG9mZnNldE1pbnV0ZXMgLyA2MCk7XG59XG5cbmZ1bmN0aW9uIGdldERheVN1ZmZpeChkYXkpIHtcbiAgaWYgKGRheSA+PSAxMSAmJiBkYXkgPD0gMTMpIHtcbiAgICByZXR1cm4gJ3RoJztcbiAgfVxuICBzd2l0Y2ggKGRheSAlIDEwKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuICdzdCc7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuICduZCc7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuICdyZCc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAndGgnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhZChudW1iZXIpIHtcbiAgcmV0dXJuIG51bWJlci50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG59XG5cbmZ1bmN0aW9uIGdldFRpbWVab25lQWJicmV2aWF0aW9uKG9mZnNldCkge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/ICcrJyA6ICcnO1xuICByZXR1cm4gYEdNVCR7c2lnbn0ke29mZnNldH1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREYXRlVG9IdW1hblJlYWRhYmxlKGxvY2FsVGltZSkge1xuICBjb25zdCB0aW1lWm9uZU9mZnNldCA9IGNhbGN1bGF0ZVRpbWVab25lT2Zmc2V0KGxvY2FsVGltZSk7XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGxvY2FsVGltZSk7XG5cbiAgY29uc3QgZGF5c09mV2VlayA9IFtcbiAgICAnU3VuZGF5JyxcbiAgICAnTW9uZGF5JyxcbiAgICAnVHVlc2RheScsXG4gICAgJ1dlZG5lc2RheScsXG4gICAgJ1RodXJzZGF5JyxcbiAgICAnRnJpZGF5JyxcbiAgICAnU2F0dXJkYXknLFxuICBdO1xuXG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICAnSmFudWFyeScsXG4gICAgJ0ZlYnJ1YXJ5JyxcbiAgICAnTWFyY2gnLFxuICAgICdBcHJpbCcsXG4gICAgJ01heScsXG4gICAgJ0p1bmUnLFxuICAgICdKdWx5JyxcbiAgICAnQXVndXN0JyxcbiAgICAnU2VwdGVtYmVyJyxcbiAgICAnT2N0b2JlcicsXG4gICAgJ05vdmVtYmVyJyxcbiAgICAnRGVjZW1iZXInLFxuICBdO1xuXG4gIGNvbnN0IGRheU9mV2VlayA9IGRheXNPZldlZWtbZGF0ZS5nZXREYXkoKV07XG4gIGNvbnN0IGRheU9mTW9udGggPSBkYXRlLmdldERhdGUoKTtcbiAgY29uc3QgbW9udGggPSBtb250aHNbZGF0ZS5nZXRNb250aCgpXTtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG5cbiAgbGV0IGFtcG0gPSAnQU0nO1xuICBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICBhbXBtID0gJ1BNJztcbiAgICBpZiAoaG91cnMgPiAxMikge1xuICAgICAgaG91cnMgLT0gMTI7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke2RheU9mV2Vla30sICR7ZGF5T2ZNb250aH0ke2dldERheVN1ZmZpeChcbiAgICBkYXlPZk1vbnRoLFxuICApfSAke21vbnRofSAke3llYXJ9IHwgJHtob3Vyc306JHtwYWQoXG4gICAgbWludXRlcyxcbiAgKX0gJHthbXBtfSAoJHtnZXRUaW1lWm9uZUFiYnJldmlhdGlvbih0aW1lWm9uZU9mZnNldCl9KWA7XG5cbiAgcmV0dXJuIGZvcm1hdHRlZERhdGU7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBvcGVyYXRvci1saW5lYnJlYWsgKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZU5hdmJhciBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgY3JlYXRlV2VhdGhlclNlY3Rpb24gZnJvbSAnLi90b2RheS13ZWF0aGVyJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY3JlYXRlTmF2YmFyKCk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJlbGltbG9jYXRpb24nKSA9PT0gbnVsbCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmVsaW1sb2NhdGlvbicsICdsb25kb24nKTtcbiAgfSBlbHNlIGlmIChcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYXRpb24nKSAhPT1cbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmVsaW1sb2NhdGlvbicpICYmXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2F0aW9uJykgIT09ICcnXG4gICkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmVsaW1sb2NhdGlvbicsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhdGlvbicpKTtcbiAgfVxuICBjcmVhdGVXZWF0aGVyU2VjdGlvbigpO1xufSk7XG4iLCJpbXBvcnQgd2VhdGhlckljb24gZnJvbSAnLi9hc3NldHMvd2VhdGhlci1pY29uLnN2Zyc7XG5pbXBvcnQgY3JlYXRlV2VhdGhlclNlY3Rpb24gZnJvbSAnLi90b2RheS13ZWF0aGVyJztcblxuZnVuY3Rpb24gc2V0QWN0aXZlVW5pdEJ1dHRvbihidXR0b24pIHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbicpO1xuXG4gIGJ1dHRvbnMuZm9yRWFjaCgoZWFjaGJ1dHRvbikgPT4ge1xuICAgIGlmIChlYWNoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICBlYWNoYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS11bml0LWJ1dHRvbicpO1xuICAgIH1cbiAgfSk7XG5cbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS11bml0LWJ1dHRvbicpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTZWFyY2goKSB7XG4gIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyJyk7XG5cbiAgY29uc3Qgc2VhcmNoVGVybSA9IGlucHV0RWxlbWVudC52YWx1ZS50cmltKCk7XG5cbiAgaWYgKHNlYXJjaFRlcm0gIT09ICcnKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByZWxpbWxvY2F0aW9uJywgc2VhcmNoVGVybSk7XG4gICAgY3JlYXRlV2VhdGhlclNlY3Rpb24oKTtcbiAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSAnJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVOYXZiYXIoKSB7XG4gIGNvbnN0IHdlYXRoZXJMb2dvID0gbmV3IEltYWdlKCk7XG4gIHdlYXRoZXJMb2dvLnNyYyA9IHdlYXRoZXJJY29uO1xuICB3ZWF0aGVyTG9nby5jbGFzc0xpc3QuYWRkKCdpbWFnZS1jb250YWluZXJfX3dlYXRoZXItbG9nbycpO1xuXG4gIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xlZnQtbmF2X19pbWFnZS1jb250YWluZXInKTtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckxvZ28pO1xuXG4gIGNvbnN0IGljb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBpY29uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1tYWduaWZ5aW5nLWdsYXNzJyk7XG4gIGljb25FbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhcmNoYmFyaWNvbicpO1xuXG4gIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoSWNvbi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtY29udGFpbmVyX19zZWFyY2gtaWNvbicpO1xuICBzZWFyY2hJY29uLmFwcGVuZENoaWxkKGljb25FbGVtZW50KTtcbiAgc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNlYXJjaCk7XG5cbiAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtY29udGFpbmVyX19zZWFyY2gtYmFyJyk7XG4gIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlYXJjaC1iYXInKTtcbiAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VhcmNoIGxvY2F0aW9uLi4uJyk7XG4gIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGhhbmRsZVNlYXJjaCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYmFyLWNvbnRhaW5lcl9fc2VhcmNoLWNvbnRhaW5lcicpO1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtZW50KTtcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RWxlbWVudCk7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcblxuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYmFyLWNvbnRhaW5lcl9fZXJyb3ItbWVzc2FnZScpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb3BlcmF0b3ItbGluZWJyZWFrXG4gIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9XG4gICAgJ0xvY2F0aW9uIGlzIG5vdCB2YWxpZC4gUGxlYXNlIGVudGVyIGEgdmFsaWQgbG9jYXRpb24uJztcbiAgZXJyb3JNZXNzYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXJyb3JtZXNzYWdlJyk7XG4gIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIGNvbnN0IGVycm9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1iYXItY29udGFpbmVyX19lcnJvci1jb250YWluZXInKTtcbiAgZXJyb3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JNZXNzYWdlKTtcblxuICBjb25zdCBzZWFyY2hCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoQmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xlZnQtbmF2X19zZWFyY2gtYmFyLWNvbnRhaW5lcicpO1xuICBzZWFyY2hCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyKTtcbiAgc2VhcmNoQmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGVycm9yQ29udGFpbmVyKTtcblxuICBjb25zdCBsZWZ0TmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxlZnROYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2X19sZWZ0LW5hdicpO1xuICBsZWZ0TmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcbiAgbGVmdE5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hCYXJDb250YWluZXIpO1xuXG4gIGNvbnN0IGNlbGNpdXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2VsY2l1c0J1dHRvbi5jbGFzc0xpc3QuYWRkKFxuICAgICdidXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbicsXG4gICAgJ2J1dHRvbi1jb250YWluZXItLWNlbGNpdXMtYnV0dG9uJyxcbiAgICAnYWN0aXZlLXVuaXQtYnV0dG9uJyxcbiAgKTtcbiAgY2VsY2l1c0J1dHRvbi50ZXh0Q29udGVudCA9ICfCsEMsbW0sa3BoJztcbiAgY2VsY2l1c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBzZXRBY3RpdmVVbml0QnV0dG9uKGNlbGNpdXNCdXR0b24pO1xuICB9KTtcblxuICBjb25zdCBmYWhyZW5oZWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGZhaHJlbmhlaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcbiAgICAnYnV0dG9uLWNvbnRhaW5lcl9fdW5pdC1idXR0b24nLFxuICAgICdidXR0b24tY29udGFpbmVyLS1mYWhyZW5oZWl0LWJ1dHRvbicsXG4gICk7XG4gIGZhaHJlbmhlaXRCdXR0b24udGV4dENvbnRlbnQgPSAnwrBGLGluLG1waCc7XG4gIGZhaHJlbmhlaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlVW5pdEJ1dHRvbihmYWhyZW5oZWl0QnV0dG9uKTtcbiAgfSk7XG5cbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyaWdodC1uYXZfX2J1dHRvbi1jb250YWluZXInKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGNpdXNCdXR0b24pO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZmFocmVuaGVpdEJ1dHRvbik7XG5cbiAgY29uc3QgcmlnaHROYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmlnaHROYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2X19yaWdodC1uYXYnKTtcbiAgcmlnaHROYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuICBuYXYuYXBwZW5kQ2hpbGQobGVmdE5hdkNvbnRhaW5lcik7XG4gIG5hdi5hcHBlbmRDaGlsZChyaWdodE5hdkNvbnRhaW5lcik7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2KTtcbn1cbiIsImltcG9ydCBmZXRjaFdlYXRoZXJEYXRhIGZyb20gJy4vd2VhdGhlcmFwaS1jYWxscyc7XG5pbXBvcnQgZm9ybWF0RGF0ZVRvSHVtYW5SZWFkYWJsZSBmcm9tICcuL2RhdGUtYWRqdXN0JztcblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb25FbGVtZW50KGxvY2F0aW9uRGF0YSkge1xuICBjb25zdCBsb2NhdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxvY2F0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1jb250YWluZXJfX2xvY2F0aW9uJyk7XG4gIGNvbnN0IG5hbWUgPSBsb2NhdGlvbkRhdGEubmFtZSB8fCAnJztcbiAgY29uc3QgcmVnaW9uID0gbG9jYXRpb25EYXRhLnJlZ2lvbiB8fCAnJztcbiAgY29uc3QgY291bnRyeSA9IGxvY2F0aW9uRGF0YS5jb3VudHJ5IHx8ICcnO1xuXG4gIGNvbnN0IGxvY2F0aW9uVGV4dCA9IFtuYW1lLCByZWdpb24sIGNvdW50cnldLmZpbHRlcihCb29sZWFuKS5qb2luKCcsICcpO1xuXG4gIGxvY2F0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGxvY2F0aW9uVGV4dDtcblxuICByZXR1cm4gbG9jYXRpb25FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXRlVGltZUVsZW1lbnQobG9jYXRpb25EYXRhKSB7XG4gIGNvbnN0IGRhdGVUaW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF0ZVRpbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWNvbnRhaW5lcl9fZGF0ZS10aW1lJyk7XG4gIGRhdGVUaW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2Zvcm1hdERhdGVUb0h1bWFuUmVhZGFibGUoXG4gICAgbG9jYXRpb25EYXRhLmxvY2FsdGltZSxcbiAgKX1gO1xuICByZXR1cm4gZGF0ZVRpbWVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyU2VjdGlvbkNvbnRhaW5lcigpIHtcbiAgY29uc3Qgd2VhdGhlclNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHdlYXRoZXJTZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItc2VjdGlvbi1jb250YWluZXInKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyU2VjdGlvbkNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJTZWN0aW9uKCkge1xuICBjcmVhdGVXZWF0aGVyU2VjdGlvbkNvbnRhaW5lcigpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoV2VhdGhlckRhdGEoKTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gcmVzdWx0LmRhdGE7XG5cbiAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbjtcblxuICAgIGNvbnN0IGxvY2F0aW9uRWxlbWVudCA9IGNyZWF0ZUxvY2F0aW9uRWxlbWVudChsb2NhdGlvbkRhdGEpO1xuICAgIGNvbnN0IGRhdGVUaW1lRWxlbWVudCA9IGNyZWF0ZURhdGVUaW1lRWxlbWVudChsb2NhdGlvbkRhdGEpO1xuXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLXNlY3Rpb25fX3RpdGxlLWNvbnRhaW5lcicpO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uRWxlbWVudCk7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVRpbWVFbGVtZW50KTtcblxuICAgIGNvbnN0IHdlYXRoZXJTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VhdGhlclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1zZWN0aW9uLWNvbnRhaW5lcl9fd2VhdGhlci1zZWN0aW9uJyk7XG4gICAgd2VhdGhlclNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuXG4gICAgY29uc3QgZXhpc3RpbmdXZWF0aGVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLndlYXRoZXItc2VjdGlvbi1jb250YWluZXJfX3dlYXRoZXItc2VjdGlvbicsXG4gICAgKTtcblxuICAgIGlmIChleGlzdGluZ1dlYXRoZXJTZWN0aW9uKSB7XG4gICAgICBleGlzdGluZ1dlYXRoZXJTZWN0aW9uLnJlbW92ZSgpO1xuICAgIH1cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLXNlY3Rpb24tY29udGFpbmVyJylcbiAgICAgIC5hcHBlbmRDaGlsZCh3ZWF0aGVyU2VjdGlvbik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgd2VhdGhlciBzZWN0aW9uOicsIGVycm9yKTtcbiAgfVxufVxuIiwiZnVuY3Rpb24gYWRkQWxlcnRUZXh0KCkge1xuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JtZXNzYWdlJyk7XG5cbiAgaWYgKGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxlcnRUZXh0KCkge1xuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JtZXNzYWdlJyk7XG5cbiAgaWYgKGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YSgpIHtcbiAgY29uc3QgcHJlbGltTG9jYXRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJlbGltbG9jYXRpb24nKTtcbiAgdHJ5IHtcbiAgICBjb25zdCBwcmVsaW1pbmFyeVVybCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PWM1OWZlY2FiZmU5ZTQ1ZTk5MTMxMTQ0MDcyMzAyMDkmcT0ke3ByZWxpbUxvY2F0aW9ufSZkYXlzPTcmYXFpPW5vJmFsZXJ0cz1ub2A7XG5cbiAgICBjb25zdCBwcmVsaW1pbmFyeVJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocHJlbGltaW5hcnlVcmwpO1xuICAgIGNvbnN0IHByZWxpbWluYXJ5RGF0YSA9IGF3YWl0IHByZWxpbWluYXJ5UmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKHByZWxpbWluYXJ5RGF0YS5lcnJvciAmJiBwcmVsaW1pbmFyeURhdGEuZXJyb3IuY29kZSA9PT0gMTAwNikge1xuICAgICAgYWRkQWxlcnRUZXh0KCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZW1vdmVBbGVydFRleHQoKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhdGlvbicsIHByZWxpbUxvY2F0aW9uKTtcbiAgICBjb25zdCBzZXRMb2NhdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhdGlvbicpO1xuXG4gICAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWM1OWZlY2FiZmU5ZTQ1ZTk5MTMxMTQ0MDcyMzAyMDkmcT0ke3NldExvY2F0aW9ufSZkYXlzPTcmYXFpPW5vJmFsZXJ0cz1ub2A7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4geyBkYXRhIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YSBmcm9tIHRoZSBBUEk6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=