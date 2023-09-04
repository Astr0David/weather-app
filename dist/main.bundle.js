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

html,
body {
  height: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
}

.container {
  min-height: 100%;
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
  margin-bottom: 3rem;
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

.weather-section__stats-weather-section {
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 4rem;
}

.stats-weather-section__stat-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.stat-card__title {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  text-align: center;
}

.stat-card__stat {
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.85);
  margin-top: -1rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

.stat-card__icon {
  font-size: 5rem;
  color: white;
}

.weather-section__upcoming-weather-section {
  margin-bottom: 3rem;
}

.upcoming-weather-section__table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.5rem;
}

.upcoming-weather-section__table th,
.upcoming-weather-section__table td {
  padding: 0.5rem 2.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}

.upcoming-weather-section__table td {
  color: rgba(255, 255, 255, 1);
  text-align: center;
}

.upcoming-weather-section__table tbody > tr:last-child > td{
  border-bottom: none;
}

.upcoming-weather-section__table th {
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-weight: bold;
}

.upcoming-weather-section__table td:nth-child(2) {
  text-align: center;
}

.upcoming-weather-section__table .icon-cell {
  font-size: 3rem;
  color: white;
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

@media screen and (max-width: 970px) {
  .weather-section__today-weather-section {
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .today-weather-section__hourly-pill {
    width: 100%;
  }
}

@media screen and (max-width: 549px) {
  html {
    height: auto;
  }

  body {
    height: 100%;
  }

  .container {
    min-height: 100vh;
  }
}

@media screen and (max-width: 462px) {
  .weather-section__stats-weather-section {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  .today-weather-section__main-pill {
    padding: 0.5rem;
    max-width: 100%;
  }
}

@media screen and (max-width: 948px) {
  .upcoming-weather-section__table th,
.upcoming-weather-section__table td {
  padding: 0.5rem 2.5rem;
}
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: 0;\n  font-family: 'Open Sans', sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n  min-height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  min-height: 100%;\n  width: 100%;\n  background: linear-gradient(to bottom, #184e77, #d9ed92);\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  flex-wrap: wrap;\n}\n\n.nav__left-nav {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.left-nav__image-container {\n  width: 100px;\n  height: 100px;\n}\n\n.image-container__weather-logo {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.left-nav__search-bar-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.search-bar-container__search-container {\n  background-color: rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  padding: 0.6rem;\n  border-radius: 4px;\n  gap: 0.5rem;\n}\n\n.search-container__search-bar {\n  background: transparent;\n  border: none;\n  outline: none;\n  color: white;\n  transition: 0.75s;\n  width: 0px;\n  font-size: 1.15rem;\n}\n\n.left-nav__search-bar-container:hover .search-container__search-bar {\n  width: 335px;\n}\n\n.search-container__search-bar::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.search-container__search-icon {\n  margin-left: -0.45rem;\n  align-items: center;\n  display: flex;\n}\n\n.left-nav__search-bar-container:hover .search-container__search-icon {\n  margin: 0rem;\n}\n\n#searchbaricon {\n  font-size: 1.15rem;\n  cursor: pointer;\n  transition: 0.1s ease;\n}\n\n#searchbaricon:hover {\n  transform: scale(1.15);\n}\n\n#searchbaricon:active {\n  transform: scale(1);\n}\n\n#errormessage {\n  color: crimson;\n  font-weight: 600;\n  font-size: 1rem;\n  padding-top: 0.2rem;\n  text-align: center;\n  word-wrap: break-word;\n}\n\n.nav__right-nav {\n  display: flex;\n  align-items: center;\n}\n\n.button-container__unit-button {\n  border: none;\n  outline: none;\n  font-size: 1.25rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  font-weight: 300;\n  transition: 0.1s ease;\n}\n\n.button-container__unit-button:hover {\n  opacity: 50%;\n}\n\n.button-container--celcius-button {\n  background-color: rgba(52, 160, 164, 0.5);\n  border-radius: 4px 0px 0px 4px;\n}\n\n.button-container--fahrenheit-button {\n  background-color: rgba(82, 182, 154, 0.5);\n  border-radius: 0px 4px 4px 0px;\n}\n\n.button-container__unit-button.active-unit-button {\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 400;\n}\n\n.weather-section-container {\n  margin-top: 1rem;\n  display: flex;\n  justify-content: center;\n}\n\n.weather-section-container__weather-section {\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.weather-section__title-container {\n  display: flex;\n  width: 100%;\n  gap: 1rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.title-container__location {\n  color: white;\n  font-weight: 600;\n  font-size: 2rem;\n}\n\n.title-container__date-time {\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  font-size: 1.4rem;\n  padding-top: 0.2rem;\n}\n\n.weather-section__today-weather-section {\n  margin-top: 2rem;\n  width: 80%;\n  display: flex;\n  gap: 5rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 3rem;\n}\n\n.today-weather-section__main-pill {\n  padding: 0.5rem;\n}\n\n.main-pill-top__today-description {\n  text-align: center;\n  font-size: 1.5rem;\n  color: white;\n}\n\n.main-pill-top__today-feels-like {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.main-pill__main-pill-mid {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 0rem;\n  gap: 1rem;\n}\n\n.main-pill-mid__weather-pic {\n  font-size: 5rem;\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.main-pill-mid__current-temp-text {\n  font-size: 4.5rem;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 600;\n}\n\n.main-pill__main-pill-bot {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.main-pill-bot--today-lowhigh-text {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.today-weather-section__hourly-pill {\n  display: flex;\n  align-items: center;\n  overflow-x: auto;\n  white-space: nowrap;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n  user-select: none;\n}\n\n.today-weather-section__hourly-pill::-webkit-scrollbar {\n  width: 0.5rem;\n}\n\n.today-weather-section__hourly-pill::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 5px;\n  width: 0.5rem;\n}\n\n.today-weather-section__hourly-pill::-webkit-scrollbar-track {\n  background-color: transparent;\n  border-radius: 5px;\n}\n\n.hourly-pill__card {\n  flex: 0 0 auto;\n  flex-direction: column;\n  display: flex;\n  width: 125px;\n  padding: 0.5rem;\n  text-align: center;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1.5rem;\n}\n\n.card__time {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1.3rem;\n  font-weight: 300;\n}\n\n.card__icon {\n  font-size: 3rem;\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.card__temperature {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1.3rem;\n  font-weight: 300;\n}\n\n.weather-section__stats-weather-section {\n  display: grid;\n  max-width: 100%;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 4rem;\n}\n\n.stats-weather-section__stat-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 2rem 1rem;\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n\n.stat-card__title {\n  font-size: 1.5rem;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  text-align: center;\n}\n\n.stat-card__stat {\n  font-size: 2rem;\n  color: rgba(255, 255, 255, 0.85);\n  margin-top: -1rem;\n  margin-bottom: 0.5rem;\n  text-align: center;\n}\n\n.stat-card__icon {\n  font-size: 5rem;\n  color: white;\n}\n\n.weather-section__upcoming-weather-section {\n  margin-bottom: 3rem;\n}\n\n.upcoming-weather-section__table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 1.5rem;\n}\n\n.upcoming-weather-section__table th,\n.upcoming-weather-section__table td {\n  padding: 0.5rem 2.5rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.25);\n}\n\n.upcoming-weather-section__table td {\n  color: rgba(255, 255, 255, 1);\n  text-align: center;\n}\n\n.upcoming-weather-section__table tbody > tr:last-child > td{\n  border-bottom: none;\n}\n\n.upcoming-weather-section__table th {\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.5);\n  text-align: center;\n  font-weight: bold;\n}\n\n.upcoming-weather-section__table td:nth-child(2) {\n  text-align: center;\n}\n\n.upcoming-weather-section__table .icon-cell {\n  font-size: 3rem;\n  color: white;\n}\n\n@media screen and (max-width: 725px) {\n  .left-nav__image-container {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 645px) {\n  .left-nav__search-bar-container:hover .search-container__search-bar {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 760px) {\n  .nav {\n    gap: 1rem;\n    padding-top: 1rem;\n  }\n\n  .nav__left-nav {\n    justify-content: center;\n    width: 100%;\n  }\n\n  .nav__right-nav {\n    justify-content: center;\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 970px) {\n  .weather-section__today-weather-section {\n    width: 100%;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n\n  .today-weather-section__hourly-pill {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 549px) {\n  html {\n    height: auto;\n  }\n\n  body {\n    height: 100%;\n  }\n\n  .container {\n    min-height: 100vh;\n  }\n}\n\n@media screen and (max-width: 462px) {\n  .weather-section__stats-weather-section {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  }\n  .today-weather-section__main-pill {\n    padding: 0.5rem;\n    max-width: 100%;\n  }\n}\n\n@media screen and (max-width: 948px) {\n  .upcoming-weather-section__table th,\n.upcoming-weather-section__table td {\n  padding: 0.5rem 2.5rem;\n}\n}"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (/* binding */ initialiseWeatherSection)
/* harmony export */ });
/* harmony import */ var _weatherapi_calls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherapi-calls */ "./src/weatherapi-calls.js");
/* harmony import */ var _date_adjust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-adjust */ "./src/date-adjust.js");
/* eslint-disable no-plusplus */



function createTextElement(className, textContent) {
  const element = document.createElement('p');
  element.classList.add(className);
  element.textContent = textContent;
  return element;
}

function createIconElement(className) {
  const element = document.createElement('i');
  element.setAttribute('class', className);
  return element;
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

function createCard(
  timeWithoutDate,
  weatherText,
  temperature,
  isfahrenheit,
  isCelcius,
) {
  const card = document.createElement('div');
  card.classList.add('hourly-pill__card');

  const timeElement = createTextElement('card__time', timeWithoutDate);
  const iconElement = createIconElement(weatherIcons[weatherText]);
  iconElement.classList.add('card__icon');
  const temperatureElement = createTextElement(
    'card__temperature',
    `${temperature}°`,
  );

  if (isfahrenheit) {
    temperatureElement.textContent = `${temperature}°F`;
  } else if (isCelcius) {
    temperatureElement.textContent = `${temperature}°C`;
  }

  card.appendChild(timeElement);
  card.appendChild(iconElement);
  card.appendChild(temperatureElement);

  return card;
}

function createStatCard(stat, title, icon, angle = '') {
  const card = document.createElement('div');
  card.classList.add('stats-weather-section__stat-card');

  const statCardTitle = createTextElement('stat-card__title', title);

  const statCardStat = createTextElement('stat-card__stat', stat);

  const iconElement = createIconElement(icon);
  iconElement.classList.add('stat-card__icon');

  if (angle !== '') {
    iconElement.style.transform = `rotate(${angle}deg)`;
  }

  card.appendChild(statCardTitle);
  card.appendChild(statCardStat);
  card.appendChild(iconElement);

  return card;
}

function getWeekDay(dateString) {
  const date = new Date(dateString);

  const dayOfWeekNumber = date.getDay();

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayOfWeekName = daysOfWeek[dayOfWeekNumber];

  return dayOfWeekName;
}

function createUpcomingTable(weatherData, isFahrenheit) {
  const upcomingData = [];

  for (let i = 1; i <= 7; i++) {
    const forecast = weatherData.forecast.forecastday[i];
    const dayData = {
      day: getWeekDay(forecast.date),
      description: forecast.day.condition.text,
      maxTemperature: isFahrenheit
        ? `${forecast.day.maxtemp_f}°F`
        : `${forecast.day.maxtemp_c}°C`,
      minTemperature: isFahrenheit
        ? `${forecast.day.mintemp_f}°F`
        : `${forecast.day.mintemp_c}°C`,
      chanceOfRain: `${forecast.day.daily_chance_of_rain}%`,
      humidity: `${forecast.day.avghumidity}%`,
    };

    upcomingData.push(dayData);
  }

  const table = document.createElement('table');
  table.classList.add('upcoming-weather-section__table');

  const tableHeader = table.createTHead();
  const headerRow = tableHeader.insertRow(0);
  const headers = [
    'Day',
    '',
    'Max Temp',
    'Min Temp',
    'Chance of Rain',
    'Humidity',
  ];

  for (let i = 0; i < headers.length; i++) {
    const th = document.createElement('th');
    th.textContent = headers[i];
    headerRow.appendChild(th);
  }

  const tableBody = document.createElement('tbody');

  upcomingData.forEach((data, i) => {
    const row = tableBody.insertRow();
    const rowData = [
      data.day,
      createIconElement(weatherIcons[data.description]),
      data.maxTemperature,
      data.minTemperature,
      data.chanceOfRain,
      data.humidity,
    ];

    rowData.forEach((item, index) => {
      const cell = row.insertCell();
      if (item instanceof Element) {
        cell.appendChild(item);
        if (index === 1) {
          cell.classList.add('icon-cell');
        }
      } else {
        cell.textContent = item;
      }
    });

    if (i === upcomingData.length - 1) {
      row.classList.add('last-row');
    }
  });

  table.appendChild(tableBody);

  return table;
}

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

function createWeatherSection(weatherData, isfahrenheit, isCelcius) {
  const currentWeather = weatherData.current;
  const forecast = weatherData.forecast.forecastday[0].day;

  const locationElement = createTextElement(
    'title-container__location',
    `${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`,
  );

  const dateTimeElement = createTextElement(
    'title-container__date-time',
    (0,_date_adjust__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData.location.localtime),
  );

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('weather-section__title-container');
  titleContainer.appendChild(locationElement);
  titleContainer.appendChild(dateTimeElement);

  const todayDescription = createTextElement(
    'main-pill-top__today-description',
    currentWeather.condition.text,
  );

  const todayFeelsLike = createTextElement(
    'main-pill-top__today-feels-like',
    `Feels like ${
      isfahrenheit ? currentWeather.feelslike_f : currentWeather.feelslike_c
    }°`,
  );

  const mainPillTop = document.createElement('div');
  mainPillTop.classList.add('main-pill__main-pill-top');
  mainPillTop.appendChild(todayDescription);
  mainPillTop.appendChild(todayFeelsLike);

  const weatherPic = createIconElement(
    weatherIcons[currentWeather.condition.text],
  );
  weatherPic.classList.add('main-pill-mid__weather-pic');

  const currentTempText = createTextElement(
    'main-pill-mid__current-temp-text',
    `${isfahrenheit ? currentWeather.temp_f : currentWeather.temp_c}°`,
  );

  const mainPillMid = document.createElement('div');
  mainPillMid.classList.add('main-pill__main-pill-mid');
  mainPillMid.appendChild(weatherPic);
  mainPillMid.appendChild(currentTempText);

  const todayHighText = createTextElement(
    'main-pill-bot--today-lowhigh-text',
    `High: ${isfahrenheit ? forecast.maxtemp_f : forecast.maxtemp_c}°`,
  );

  const todayLowText = createTextElement(
    'main-pill-bot--today-lowhigh-text',
    `Low: ${isfahrenheit ? forecast.mintemp_f : forecast.mintemp_c}°`,
  );

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

  hourlyData.forEach((hourData, index) => {
    const timeWithoutDate = hourData.time.split(' ')[1];
    const temperature = isfahrenheit ? hourData.temp_f : hourData.temp_c;
    const weatherText = hourData.condition.text;

    const card = createCard(
      timeWithoutDate,
      weatherText,
      temperature,
      isfahrenheit,
      isCelcius,
    );

    if (index === 0) {
      card.querySelector('.card__time').style.fontWeight = '600';
    }

    hourlyPill.appendChild(card);
  });

  const todayWeatherSection = document.createElement('div');
  todayWeatherSection.classList.add('weather-section__today-weather-section');
  todayWeatherSection.appendChild(mainPill);
  todayWeatherSection.appendChild(hourlyPill);

  const sunriseStat = createStatCard(
    weatherData.forecast.forecastday[0].astro.sunrise,
    'Sunrise',
    'fa-solid fa-cloud-sun',
  );

  const sunsetStat = createStatCard(
    weatherData.forecast.forecastday[0].astro.sunset,
    'Sunset',
    'fa-solid fa-cloud-moon',
  );

  const windStat = createStatCard(
    `${
      isfahrenheit
        ? `${currentWeather.wind_mph} mph`
        : `${currentWeather.wind_kph} kph`
    }`,
    'Wind',
    'fa-solid fa-wind',
  );

  const windDirectionStat = createStatCard(
    currentWeather.wind_dir,
    'Wind Direction',
    'fa-solid fa-up-long',
    currentWeather.wind_degree,
  );

  const humidityStat = createStatCard(
    `${currentWeather.humidity}%`,
    'Humidity',
    'fa-solid fa-droplet',
  );

  const uvStat = createStatCard(currentWeather.uv, 'UV', 'fa-regular fa-sun');

  const chanceOfRainStat = createStatCard(
    `${weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`,
    'Chance of Rain',
    'fa-solid fa-cloud-showers-water',
  );

  const precipitationStat = createStatCard(
    `${
      isfahrenheit
        ? `${currentWeather.precip_in} inches`
        : `${currentWeather.precip_mm} mm`
    }`,
    'Precipitation',
    'fa-solid fa-water',
  );

  const statsWeatherSection = document.createElement('div');
  statsWeatherSection.classList.add('weather-section__stats-weather-section');
  statsWeatherSection.appendChild(sunriseStat);
  statsWeatherSection.appendChild(sunsetStat);
  statsWeatherSection.appendChild(windStat);
  statsWeatherSection.appendChild(windDirectionStat);
  statsWeatherSection.appendChild(humidityStat);
  statsWeatherSection.appendChild(uvStat);
  statsWeatherSection.appendChild(chanceOfRainStat);
  statsWeatherSection.appendChild(precipitationStat);

  const upcomingWeatherSection = document.createElement('div');
  upcomingWeatherSection.classList.add(
    'weather-section__upcoming-weather-section',
  );
  upcomingWeatherSection.appendChild(
    createUpcomingTable(weatherData, isfahrenheit),
  );

  const weatherSection = document.createElement('div');
  weatherSection.classList.add('weather-section-container__weather-section');
  weatherSection.appendChild(titleContainer);
  weatherSection.appendChild(todayWeatherSection);
  weatherSection.appendChild(statsWeatherSection);
  weatherSection.appendChild(upcomingWeatherSection);

  const existingWeatherSection = document.querySelector(
    '.weather-section-container__weather-section',
  );

  if (existingWeatherSection) {
    existingWeatherSection.remove();
  }

  document
    .querySelector('.weather-section-container')
    .appendChild(weatherSection);
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

async function initialiseWeatherSection() {
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

    createWeatherSection(weatherData, isfahrenheit, isCelcius);
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
    const preliminaryUrl = `https://api.weatherapi.com/v1/current.json?key=c59fecabfe9e45e9913114407230209&q=${prelimLocation}&days=8&aqi=no&alerts=no`;

    const preliminaryResponse = await fetch(preliminaryUrl);
    const preliminaryData = await preliminaryResponse.json();

    if (preliminaryData.error && preliminaryData.error.code === 1006) {
      addAlertText();
      return null;
    }

    removeAlertText();

    localStorage.setItem('location', prelimLocation);
    const setLocation = localStorage.getItem('location');

    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=c59fecabfe9e45e9913114407230209&q=${setLocation}&days=8&aqi=no&alerts=no`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlIQUF5SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN6TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9B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O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hlQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsK0dBQStHLGVBQWU7O0FBRTlIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx3R0FBd0csWUFBWTs7QUFFcEg7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBLGFBQWE7QUFDYixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRlLWFkanVzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdG9kYXktd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyYXBpLWNhbGxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTg0ZTc3LCAjZDllZDkyKTtcbn1cblxuLm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLm5hdl9fbGVmdC1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5sZWZ0LW5hdl9faW1hZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyX193ZWF0aGVyLWxvZ28ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5sZWZ0LW5hdl9fc2VhcmNoLWJhci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNlYXJjaC1iYXItY29udGFpbmVyX19zZWFyY2gtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5zZWFyY2gtY29udGFpbmVyX19zZWFyY2gtYmFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjc1cztcbiAgd2lkdGg6IDBweDtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xufVxuXG4ubGVmdC1uYXZfX3NlYXJjaC1iYXItY29udGFpbmVyOmhvdmVyIC5zZWFyY2gtY29udGFpbmVyX19zZWFyY2gtYmFyIHtcbiAgd2lkdGg6IDMzNXB4O1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhcjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWljb24ge1xuICBtYXJnaW4tbGVmdDogLTAuNDVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sZWZ0LW5hdl9fc2VhcmNoLWJhci1jb250YWluZXI6aG92ZXIgLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1pY29uIHtcbiAgbWFyZ2luOiAwcmVtO1xufVxuXG4jc2VhcmNoYmFyaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XG59XG5cbiNzZWFyY2hiYXJpY29uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbn1cblxuI3NlYXJjaGJhcmljb246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuI2Vycm9ybWVzc2FnZSB7XG4gIGNvbG9yOiBjcmltc29uO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4ubmF2X19yaWdodC1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lcl9fdW5pdC1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXJfX3VuaXQtYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogNTAlO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lci0tY2VsY2l1cy1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCAxNjAsIDE2NCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDBweCAwcHggNHB4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lci0tZmFocmVuaGVpdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCAxODIsIDE1NCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lcl9fdW5pdC1idXR0b24uYWN0aXZlLXVuaXQtYnV0dG9uIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLndlYXRoZXItc2VjdGlvbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndlYXRoZXItc2VjdGlvbi1jb250YWluZXJfX3dlYXRoZXItc2VjdGlvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53ZWF0aGVyLXNlY3Rpb25fX3RpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDFyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnRpdGxlLWNvbnRhaW5lcl9fbG9jYXRpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnRpdGxlLWNvbnRhaW5lcl9fZGF0ZS10aW1lIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XG59XG5cbi53ZWF0aGVyLXNlY3Rpb25fX3RvZGF5LXdlYXRoZXItc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9fbWFpbi1waWxsIHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ubWFpbi1waWxsLXRvcF9fdG9kYXktZGVzY3JpcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWluLXBpbGwtdG9wX190b2RheS1mZWVscy1saWtlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG4ubWFpbi1waWxsX19tYWluLXBpbGwtbWlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbSAwcmVtO1xuICBnYXA6IDFyZW07XG59XG5cbi5tYWluLXBpbGwtbWlkX193ZWF0aGVyLXBpYyB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbn1cblxuLm1haW4tcGlsbC1taWRfX2N1cnJlbnQtdGVtcC10ZXh0IHtcbiAgZm9udC1zaXplOiA0LjVyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tYWluLXBpbGxfX21haW4tcGlsbC1ib3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ubWFpbi1waWxsLWJvdC0tdG9kYXktbG93aGlnaC10ZXh0IHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cblxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9faG91cmx5LXBpbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4udG9kYXktd2VhdGhlci1zZWN0aW9uX19ob3VybHktcGlsbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMC41cmVtO1xufVxuXG4udG9kYXktd2VhdGhlci1zZWN0aW9uX19ob3VybHktcGlsbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDAuNXJlbTtcbn1cblxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9faG91cmx5LXBpbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmhvdXJseS1waWxsX19jYXJkIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMjVweDtcbiAgcGFkZGluZzogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjVyZW07XG59XG5cbi5jYXJkX190aW1lIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jYXJkX19pY29uIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xufVxuXG4uY2FyZF9fdGVtcGVyYXR1cmUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLndlYXRoZXItc2VjdGlvbl9fc3RhdHMtd2VhdGhlci1zZWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4uc3RhdHMtd2VhdGhlci1zZWN0aW9uX19zdGF0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnN0YXQtY2FyZF9fdGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RhdC1jYXJkX19zdGF0IHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RhdC1jYXJkX19pY29uIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi53ZWF0aGVyLXNlY3Rpb25fX3VwY29taW5nLXdlYXRoZXItc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0aCxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRkIHtcbiAgcGFkZGluZzogMC41cmVtIDIuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG59XG5cbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGJvZHkgPiB0cjpsYXN0LWNoaWxkID4gdGR7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRoIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0ZDpudGgtY2hpbGQoMikge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIC5pY29uLWNlbGwge1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzI1cHgpIHtcbiAgLmxlZnQtbmF2X19pbWFnZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ1cHgpIHtcbiAgLmxlZnQtbmF2X19zZWFyY2gtYmFyLWNvbnRhaW5lcjpob3ZlciAuc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgLm5hdiB7XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICB9XG5cbiAgLm5hdl9fbGVmdC1uYXYge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm5hdl9fcmlnaHQtbmF2IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NzBweCkge1xuICAud2VhdGhlci1zZWN0aW9uX190b2RheS13ZWF0aGVyLXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbiAgfVxuXG4gIC50b2RheS13ZWF0aGVyLXNlY3Rpb25fX2hvdXJseS1waWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDlweCkge1xuICBodG1sIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjJweCkge1xuICAud2VhdGhlci1zZWN0aW9uX19zdGF0cy13ZWF0aGVyLXNlY3Rpb24ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xuICB9XG4gIC50b2RheS13ZWF0aGVyLXNlY3Rpb25fX21haW4tcGlsbCB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDhweCkge1xuICAudXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0aCxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRkIHtcbiAgcGFkZGluZzogMC41cmVtIDIuNXJlbTtcbn1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Us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QUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwyREFBMkQ7RUFDN0Q7RUFDQTtJQUNFLGVBQWU7SUFDZixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTs7RUFFQSxzQkFBc0I7QUFDeEI7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IDA7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTg0ZTc3LCAjZDllZDkyKTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubmF2X19sZWZ0LW5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmxlZnQtbmF2X19pbWFnZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lcl9fd2VhdGhlci1sb2dvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5sZWZ0LW5hdl9fc2VhcmNoLWJhci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1iYXItY29udGFpbmVyX19zZWFyY2gtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC42cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyX19zZWFyY2gtYmFyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcbiAgd2lkdGg6IDBweDtcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG59XFxuXFxuLmxlZnQtbmF2X19zZWFyY2gtYmFyLWNvbnRhaW5lcjpob3ZlciAuc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhciB7XFxuICB3aWR0aDogMzM1cHg7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyX19zZWFyY2gtYmFyOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IC0wLjQ1cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5sZWZ0LW5hdl9fc2VhcmNoLWJhci1jb250YWluZXI6aG92ZXIgLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1pY29uIHtcXG4gIG1hcmdpbjogMHJlbTtcXG59XFxuXFxuI3NlYXJjaGJhcmljb24ge1xcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xcbn1cXG5cXG4jc2VhcmNoYmFyaWNvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbn1cXG5cXG4jc2VhcmNoYmFyaWNvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuI2Vycm9ybWVzc2FnZSB7XFxuICBjb2xvcjogY3JpbXNvbjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nLXRvcDogMC4ycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4ubmF2X19yaWdodC1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXJfX3VuaXQtYnV0dG9uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXItLWNlbGNpdXMtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTIsIDE2MCwgMTY0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4IDBweCAwcHggNHB4O1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lci0tZmFocmVuaGVpdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwgMTgyLCAxNTQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHg7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbi5hY3RpdmUtdW5pdC1idXR0b24ge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi53ZWF0aGVyLXNlY3Rpb24tY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLXNlY3Rpb24tY29udGFpbmVyX193ZWF0aGVyLXNlY3Rpb24ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXItc2VjdGlvbl9fdGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi50aXRsZS1jb250YWluZXJfX2xvY2F0aW9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi50aXRsZS1jb250YWluZXJfX2RhdGUtdGltZSB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgcGFkZGluZy10b3A6IDAuMnJlbTtcXG59XFxuXFxuLndlYXRoZXItc2VjdGlvbl9fdG9kYXktd2VhdGhlci1zZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9fbWFpbi1waWxsIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLm1haW4tcGlsbC10b3BfX3RvZGF5LWRlc2NyaXB0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFpbi1waWxsLXRvcF9fdG9kYXktZmVlbHMtbGlrZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4ubWFpbi1waWxsX19tYWluLXBpbGwtbWlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW0gMHJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm1haW4tcGlsbC1taWRfX3dlYXRoZXItcGljIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxufVxcblxcbi5tYWluLXBpbGwtbWlkX19jdXJyZW50LXRlbXAtdGV4dCB7XFxuICBmb250LXNpemU6IDQuNXJlbTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFpbi1waWxsX19tYWluLXBpbGwtYm90IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5tYWluLXBpbGwtYm90LS10b2RheS1sb3doaWdoLXRleHQge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG59XFxuXFxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9faG91cmx5LXBpbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b2RheS13ZWF0aGVyLXNlY3Rpb25fX2hvdXJseS1waWxsOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMC41cmVtO1xcbn1cXG5cXG4udG9kYXktd2VhdGhlci1zZWN0aW9uX19ob3VybHktcGlsbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDAuNXJlbTtcXG59XFxuXFxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9faG91cmx5LXBpbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaG91cmx5LXBpbGxfX2NhcmQge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMjVweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmNhcmRfX3RpbWUge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmNhcmRfX2ljb24ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG59XFxuXFxuLmNhcmRfX3RlbXBlcmF0dXJlIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi53ZWF0aGVyLXNlY3Rpb25fX3N0YXRzLXdlYXRoZXItc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4uc3RhdHMtd2VhdGhlci1zZWN0aW9uX19zdGF0LWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc3RhdC1jYXJkX190aXRsZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3RhdC1jYXJkX19zdGF0IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcbiAgbWFyZ2luLXRvcDogLTFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zdGF0LWNhcmRfX2ljb24ge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ud2VhdGhlci1zZWN0aW9uX191cGNvbWluZy13ZWF0aGVyLXNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRoLFxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRkIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAyLjVyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcXG59XFxuXFxuLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGQge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRib2R5ID4gdHI6bGFzdC1jaGlsZCA+IHRke1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGgge1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRkOm50aC1jaGlsZCgyKSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIC5pY29uLWNlbGwge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjVweCkge1xcbiAgLmxlZnQtbmF2X19pbWFnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDVweCkge1xcbiAgLmxlZnQtbmF2X19zZWFyY2gtYmFyLWNvbnRhaW5lcjpob3ZlciAuc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLm5hdiB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICB9XFxuXFxuICAubmF2X19sZWZ0LW5hdiB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5uYXZfX3JpZ2h0LW5hdiB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTcwcHgpIHtcXG4gIC53ZWF0aGVyLXNlY3Rpb25fX3RvZGF5LXdlYXRoZXItc2VjdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICB9XFxuXFxuICAudG9kYXktd2VhdGhlci1zZWN0aW9uX19ob3VybHktcGlsbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDlweCkge1xcbiAgaHRtbCB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MnB4KSB7XFxuICAud2VhdGhlci1zZWN0aW9uX19zdGF0cy13ZWF0aGVyLXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gIH1cXG4gIC50b2RheS13ZWF0aGVyLXNlY3Rpb25fX21haW4tcGlsbCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDhweCkge1xcbiAgLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGgsXFxuLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGQge1xcbiAgcGFkZGluZzogMC41cmVtIDIuNXJlbTtcXG59XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjdXN0b21Sb3VuZChudW1iZXIpIHtcbiAgaWYgKG51bWJlciA8IDApIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKG51bWJlciAtIDAuNSk7XG4gIH1cbiAgcmV0dXJuIE1hdGguZmxvb3IobnVtYmVyICsgMC41KTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVGltZVpvbmVPZmZzZXQobG9jYWxUaW1lKSB7XG4gIGNvbnN0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKGxvY2FsVGltZSk7XG5cbiAgY29uc3QgY3VycmVudFV0Y1RpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gIGNvbnN0IHllYXIgPSBsb2NhbERhdGUuZ2V0VVRDRnVsbFllYXIoKTtcblxuICBjb25zdCBkc3RTdGFydCA9IG5ldyBEYXRlKHllYXIsIDMsIDI2KTtcbiAgY29uc3QgZHN0RW5kID0gbmV3IERhdGUoeWVhciwgMTAsIDI5KTtcblxuICBpZiAobG9jYWxEYXRlID49IGRzdFN0YXJ0ICYmIGxvY2FsRGF0ZSA8IGRzdEVuZCkge1xuICAgIGNvbnN0IG9mZnNldE1pbnV0ZXMgPSAobG9jYWxEYXRlIC0gY3VycmVudFV0Y1RpbWUpIC8gKDYwICogMTAwMCkgKyA2MDtcbiAgICByZXR1cm4gY3VzdG9tUm91bmQob2Zmc2V0TWludXRlcyAvIDYwKTtcbiAgfVxuXG4gIGNvbnN0IG9mZnNldE1pbnV0ZXMgPSAobG9jYWxEYXRlIC0gY3VycmVudFV0Y1RpbWUpIC8gKDYwICogMTAwMCk7XG4gIHJldHVybiBjdXN0b21Sb3VuZChvZmZzZXRNaW51dGVzIC8gNjApO1xufVxuXG5mdW5jdGlvbiBnZXREYXlTdWZmaXgoZGF5KSB7XG4gIGlmIChkYXkgPj0gMTEgJiYgZGF5IDw9IDEzKSB7XG4gICAgcmV0dXJuICd0aCc7XG4gIH1cbiAgc3dpdGNoIChkYXkgJSAxMCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiAnc3QnO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiAnbmQnO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiAncmQnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ3RoJztcbiAgfVxufVxuXG5mdW5jdGlvbiBwYWQobnVtYmVyKSB7XG4gIHJldHVybiBudW1iZXIudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xufVxuXG5mdW5jdGlvbiBnZXRUaW1lWm9uZUFiYnJldmlhdGlvbihvZmZzZXQpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyAnKycgOiAnJztcbiAgcmV0dXJuIGBHTVQke3NpZ259JHtvZmZzZXR9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGF0ZVRvSHVtYW5SZWFkYWJsZShsb2NhbFRpbWUpIHtcbiAgY29uc3QgdGltZVpvbmVPZmZzZXQgPSBjYWxjdWxhdGVUaW1lWm9uZU9mZnNldChsb2NhbFRpbWUpO1xuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShsb2NhbFRpbWUpO1xuXG4gIGNvbnN0IGRheXNPZldlZWsgPSBbXG4gICAgJ1N1bmRheScsXG4gICAgJ01vbmRheScsXG4gICAgJ1R1ZXNkYXknLFxuICAgICdXZWRuZXNkYXknLFxuICAgICdUaHVyc2RheScsXG4gICAgJ0ZyaWRheScsXG4gICAgJ1NhdHVyZGF5JyxcbiAgXTtcblxuICBjb25zdCBtb250aHMgPSBbXG4gICAgJ0phbnVhcnknLFxuICAgICdGZWJydWFyeScsXG4gICAgJ01hcmNoJyxcbiAgICAnQXByaWwnLFxuICAgICdNYXknLFxuICAgICdKdW5lJyxcbiAgICAnSnVseScsXG4gICAgJ0F1Z3VzdCcsXG4gICAgJ1NlcHRlbWJlcicsXG4gICAgJ09jdG9iZXInLFxuICAgICdOb3ZlbWJlcicsXG4gICAgJ0RlY2VtYmVyJyxcbiAgXTtcblxuICBjb25zdCBkYXlPZldlZWsgPSBkYXlzT2ZXZWVrW2RhdGUuZ2V0RGF5KCldO1xuICBjb25zdCBkYXlPZk1vbnRoID0gZGF0ZS5nZXREYXRlKCk7XG4gIGNvbnN0IG1vbnRoID0gbW9udGhzW2RhdGUuZ2V0TW9udGgoKV07XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuXG4gIGxldCBhbXBtID0gJ0FNJztcbiAgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgYW1wbSA9ICdQTSc7XG4gICAgaWYgKGhvdXJzID4gMTIpIHtcbiAgICAgIGhvdXJzIC09IDEyO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHtkYXlPZldlZWt9LCAke2RheU9mTW9udGh9JHtnZXREYXlTdWZmaXgoXG4gICAgZGF5T2ZNb250aCxcbiAgKX0gJHttb250aH0gJHt5ZWFyfSB8ICR7aG91cnN9OiR7cGFkKFxuICAgIG1pbnV0ZXMsXG4gICl9ICR7YW1wbX0gKCR7Z2V0VGltZVpvbmVBYmJyZXZpYXRpb24odGltZVpvbmVPZmZzZXQpfSlgO1xuXG4gIHJldHVybiBmb3JtYXR0ZWREYXRlO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgb3BlcmF0b3ItbGluZWJyZWFrICovXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjcmVhdGVOYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xuaW1wb3J0IGluaXRpYWxpc2VXZWF0aGVyU2VjdGlvbiBmcm9tICcuL3RvZGF5LXdlYXRoZXInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjcmVhdGVOYXZiYXIoKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmVsaW1sb2NhdGlvbicpID09PSBudWxsKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByZWxpbWxvY2F0aW9uJywgJ2xvbmRvbicpO1xuICB9IGVsc2UgaWYgKFxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhdGlvbicpICE9PVxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByZWxpbWxvY2F0aW9uJykgJiZcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYXRpb24nKSAhPT0gJydcbiAgKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByZWxpbWxvY2F0aW9uJywgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2F0aW9uJykpO1xuICB9XG4gIGluaXRpYWxpc2VXZWF0aGVyU2VjdGlvbigpO1xufSk7XG4iLCJpbXBvcnQgd2VhdGhlckljb24gZnJvbSAnLi9hc3NldHMvd2VhdGhlci1pY29uLnN2Zyc7XG5pbXBvcnQgaW5pdGlhbGlzZVdlYXRoZXJTZWN0aW9uIGZyb20gJy4vdG9kYXktd2VhdGhlcic7XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVVuaXRCdXR0b24oYnV0dG9uKSB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLWNvbnRhaW5lcl9fdW5pdC1idXR0b24nKTtcblxuICBidXR0b25zLmZvckVhY2goKGVhY2hidXR0b24pID0+IHtcbiAgICBpZiAoZWFjaGJ1dHRvbiAhPT0gdGhpcykge1xuICAgICAgZWFjaGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdW5pdC1idXR0b24nKTtcbiAgICB9XG4gIH0pO1xuXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdW5pdC1idXR0b24nKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU2VhcmNoKCkge1xuICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJhcicpO1xuXG4gIGNvbnN0IHNlYXJjaFRlcm0gPSBpbnB1dEVsZW1lbnQudmFsdWUudHJpbSgpO1xuXG4gIGlmIChzZWFyY2hUZXJtICE9PSAnJykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmVsaW1sb2NhdGlvbicsIHNlYXJjaFRlcm0pO1xuICAgIGluaXRpYWxpc2VXZWF0aGVyU2VjdGlvbigpO1xuICAgIGlucHV0RWxlbWVudC52YWx1ZSA9ICcnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU5hdmJhcigpIHtcbiAgY29uc3Qgd2VhdGhlckxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgd2VhdGhlckxvZ28uc3JjID0gd2VhdGhlckljb247XG4gIHdlYXRoZXJMb2dvLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLWNvbnRhaW5lcl9fd2VhdGhlci1sb2dvJyk7XG5cbiAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGVmdC1uYXZfX2ltYWdlLWNvbnRhaW5lcicpO1xuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyTG9nbyk7XG5cbiAgY29uc3QgaWNvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLW1hZ25pZnlpbmctZ2xhc3MnKTtcbiAgaWNvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdzZWFyY2hiYXJpY29uJyk7XG5cbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1jb250YWluZXJfX3NlYXJjaC1pY29uJyk7XG4gIHNlYXJjaEljb24uYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xuICBzZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2VhcmNoKTtcblxuICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1jb250YWluZXJfX3NlYXJjaC1iYXInKTtcbiAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhcmNoLWJhcicpO1xuICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWFyY2ggbG9jYXRpb24uLi4nKTtcbiAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaGFuZGxlU2VhcmNoKCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1iYXItY29udGFpbmVyX19zZWFyY2gtY29udGFpbmVyJyk7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtZW50KTtcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xuXG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1iYXItY29udGFpbmVyX19lcnJvci1tZXNzYWdlJyk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvcGVyYXRvci1saW5lYnJlYWtcbiAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID1cbiAgICAnTG9jYXRpb24gaXMgbm90IHZhbGlkLiBQbGVhc2UgZW50ZXIgYSB2YWxpZCBsb2NhdGlvbi4nO1xuICBlcnJvck1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdlcnJvcm1lc3NhZ2UnKTtcbiAgZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgY29uc3QgZXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZXJyb3JDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJhci1jb250YWluZXJfX2Vycm9yLWNvbnRhaW5lcicpO1xuICBlcnJvckNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xuXG4gIGNvbnN0IHNlYXJjaEJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWFyY2hCYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGVmdC1uYXZfX3NlYXJjaC1iYXItY29udGFpbmVyJyk7XG4gIHNlYXJjaEJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xuICBzZWFyY2hCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JDb250YWluZXIpO1xuXG4gIGNvbnN0IGxlZnROYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGVmdE5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYXZfX2xlZnQtbmF2Jyk7XG4gIGxlZnROYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuICBsZWZ0TmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEJhckNvbnRhaW5lcik7XG5cbiAgY29uc3QgY2VsY2l1c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjZWxjaXVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXG4gICAgJ2J1dHRvbi1jb250YWluZXJfX3VuaXQtYnV0dG9uJyxcbiAgICAnYnV0dG9uLWNvbnRhaW5lci0tY2VsY2l1cy1idXR0b24nLFxuICAgICdhY3RpdmUtdW5pdC1idXR0b24nLFxuICApO1xuICBjZWxjaXVzQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2VsY2l1cycpO1xuICBjZWxjaXVzQnV0dG9uLnRleHRDb250ZW50ID0gJ8KwQyxtbSxrcGgnO1xuICBjZWxjaXVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZVVuaXRCdXR0b24oY2VsY2l1c0J1dHRvbik7XG4gICAgaW5pdGlhbGlzZVdlYXRoZXJTZWN0aW9uKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGZhaHJlbmhlaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZmFocmVuaGVpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFxuICAgICdidXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbicsXG4gICAgJ2J1dHRvbi1jb250YWluZXItLWZhaHJlbmhlaXQtYnV0dG9uJyxcbiAgKTtcbiAgZmFocmVuaGVpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZhaHJlbmhlaXQnKTtcbiAgZmFocmVuaGVpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICfCsEYsaW4sbXBoJztcbiAgZmFocmVuaGVpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBzZXRBY3RpdmVVbml0QnV0dG9uKGZhaHJlbmhlaXRCdXR0b24pO1xuICAgIGluaXRpYWxpc2VXZWF0aGVyU2VjdGlvbigpO1xuICB9KTtcblxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LW5hdl9fYnV0dG9uLWNvbnRhaW5lcicpO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2VsY2l1c0J1dHRvbik7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmYWhyZW5oZWl0QnV0dG9uKTtcblxuICBjb25zdCByaWdodE5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByaWdodE5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYXZfX3JpZ2h0LW5hdicpO1xuICByaWdodE5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG4gIG5hdi5hcHBlbmRDaGlsZChsZWZ0TmF2Q29udGFpbmVyKTtcbiAgbmF2LmFwcGVuZENoaWxkKHJpZ2h0TmF2Q29udGFpbmVyKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCBmZXRjaFdlYXRoZXJEYXRhIGZyb20gJy4vd2VhdGhlcmFwaS1jYWxscyc7XG5pbXBvcnQgZm9ybWF0RGF0ZVRvSHVtYW5SZWFkYWJsZSBmcm9tICcuL2RhdGUtYWRqdXN0JztcblxuZnVuY3Rpb24gY3JlYXRlVGV4dEVsZW1lbnQoY2xhc3NOYW1lLCB0ZXh0Q29udGVudCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSWNvbkVsZW1lbnQoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzTmFtZSk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCB3ZWF0aGVySWNvbnMgPSB7XG4gIFN1bm55OiAnZmEtc29saWQgZmEtc3VuJyxcbiAgQ2xlYXI6ICdmYS1zb2xpZCBmYS1tb29uJyxcbiAgJ1BhcnRseSBjbG91ZHknOiAnZmEtc29saWQgZmEtY2xvdWQnLFxuICBDbG91ZHk6ICdmYS1zb2xpZCBmYS1jbG91ZCcsXG4gIE92ZXJjYXN0OiAnZmEtc29saWQgZmEtY2xvdWQnLFxuICBNaXN0OiAnZmEtc29saWQgZmEtc21vZycsXG4gICdQYXRjaHkgcmFpbiBwb3NzaWJsZSc6ICdmYS1zb2xpZCBmYS1jbG91ZC1yYWluJyxcbiAgJ1BhdGNoeSBzbm93IHBvc3NpYmxlJzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ1BhdGNoeSBzbGVldCBwb3NzaWJsZSc6ICdmYS1yZWd1bGFyIGZhLXNub3dmbGFrZScsXG4gICdQYXRjaHkgZnJlZXppbmcgZHJpenpsZSBwb3NzaWJsZSc6ICdmYS1zb2xpZCBmYS1jbG91ZC1yYWluJyxcbiAgJ1RodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZSc6ICdmYS1zb2xpZCBmYS1jbG91ZC1ib2x0JyxcbiAgJ0Jsb3dpbmcgc25vdyc6ICdmYS1zb2xpZCBmYS13aW5kJyxcbiAgQmxpenphcmQ6ICdmYS1zb2xpZCBmYS13aW5kJyxcbiAgRm9nOiAnZmEtc29saWQgZmEtc21vZycsXG4gICdGcmVlemluZyBmb2cnOiAnZmEtc29saWQgZmEtc21vZycsXG4gICdQYXRjaHkgbGlnaHQgZHJpenpsZSc6ICdmYS1zb2xpZCBmYS1jbG91ZC1yYWluJyxcbiAgJ0xpZ2h0IGRyaXp6bGUnOiAnZmEtc29saWQgZmEtY2xvdWQtcmFpbicsXG4gICdGcmVlemluZyBkcml6emxlJzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ0hlYXZ5IGZyZWV6aW5nIGRyaXp6bGUnOiAnZmEtcmVndWxhciBmYS1zbm93Zmxha2UnLFxuICAnUGF0Y2h5IGxpZ2h0IHJhaW4nOiAnZmEtc29saWQgZmEtY2xvdWQtcmFpbicsXG4gICdMaWdodCByYWluJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXJhaW4nLFxuICAnTW9kZXJhdGUgcmFpbiBhdCB0aW1lcyc6ICdmYS1zb2xpZCBmYS1jbG91ZC1yYWluJyxcbiAgJ01vZGVyYXRlIHJhaW4nOiAnZmEtc29saWQgZmEtY2xvdWQtcmFpbicsXG4gICdIZWF2eSByYWluIGF0IHRpbWVzJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXNob3dlcnMtaGVhdnknLFxuICAnSGVhdnkgcmFpbic6ICdmYS1zb2xpZCBmYS1jbG91ZC1zaG93ZXJzLWhlYXZ5JyxcbiAgJ0xpZ2h0IGZyZWV6aW5nIHJhaW4nOiAnZmEtc29saWQgZmEtY2xvdWQtcmFpbicsXG4gICdNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluJzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ0xpZ2h0IHNsZWV0JzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ01vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0JzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ1BhdGNoeSBsaWdodCBzbm93JzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ0xpZ2h0IHNub3cnOiAnZmEtcmVndWxhciBmYS1zbm93Zmxha2UnLFxuICAnUGF0Y2h5IG1vZGVyYXRlIHNub3cnOiAnZmEtcmVndWxhciBmYS1zbm93Zmxha2UnLFxuICAnTW9kZXJhdGUgc25vdyc6ICdmYS1yZWd1bGFyIGZhLXNub3dmbGFrZScsXG4gICdQYXRjaHkgaGVhdnkgc25vdyc6ICdmYS1zb2xpZCBmYS1jbG91ZC1zaG93ZXJzLWhlYXZ5JyxcbiAgJ0hlYXZ5IHNub3cnOiAnZmEtc29saWQgZmEtY2xvdWQtc2hvd2Vycy1oZWF2eScsXG4gICdJY2UgcGVsbGV0cyc6ICdmYS1zb2xpZCBmYS1zbm93Zmxha2UnLFxuICAnTGlnaHQgcmFpbiBzaG93ZXInOiAnZmEtc29saWQgZmEtY2xvdWQtc2hvd2Vycy1oZWF2eScsXG4gICdNb2RlcmF0ZSBvciBoZWF2eSByYWluIHNob3dlcic6ICdmYS1zb2xpZCBmYS1jbG91ZC1zaG93ZXJzLWhlYXZ5JyxcbiAgJ1RvcnJlbnRpYWwgcmFpbiBzaG93ZXInOiAnZmEtc29saWQgZmEtY2xvdWQtc2hvd2Vycy1oZWF2eScsXG4gICdMaWdodCBzbGVldCBzaG93ZXJzJzogJ2ZhLXNvbGlkIGZhLXNub3dmbGFrZScsXG4gICdNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXNob3dlcnMtaGVhdnknLFxuICAnTGlnaHQgc25vdyBzaG93ZXJzJzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ01vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vycyc6ICdmYS1yZWd1bGFyIGZhLXNub3dmbGFrZScsXG4gICdMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXJhaW4nLFxuICAnTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0cyc6ICdmYS1zb2xpZCBmYS1zaG93ZXJzLWhlYXZ5JyxcbiAgJ1BhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlcic6ICdmYS1zb2xpZCBmYS1jbG91ZC1ib2x0JyxcbiAgJ01vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLWJvbHQnLFxuICAnUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLWJvbHQnLFxuICAnTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXInOiAnZmEtc29saWQgZmEtY2xvdWQtYm9sdCcsXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDYXJkKFxuICB0aW1lV2l0aG91dERhdGUsXG4gIHdlYXRoZXJUZXh0LFxuICB0ZW1wZXJhdHVyZSxcbiAgaXNmYWhyZW5oZWl0LFxuICBpc0NlbGNpdXMsXG4pIHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1waWxsX19jYXJkJyk7XG5cbiAgY29uc3QgdGltZUVsZW1lbnQgPSBjcmVhdGVUZXh0RWxlbWVudCgnY2FyZF9fdGltZScsIHRpbWVXaXRob3V0RGF0ZSk7XG4gIGNvbnN0IGljb25FbGVtZW50ID0gY3JlYXRlSWNvbkVsZW1lbnQod2VhdGhlckljb25zW3dlYXRoZXJUZXh0XSk7XG4gIGljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2ljb24nKTtcbiAgY29uc3QgdGVtcGVyYXR1cmVFbGVtZW50ID0gY3JlYXRlVGV4dEVsZW1lbnQoXG4gICAgJ2NhcmRfX3RlbXBlcmF0dXJlJyxcbiAgICBgJHt0ZW1wZXJhdHVyZX3CsGAsXG4gICk7XG5cbiAgaWYgKGlzZmFocmVuaGVpdCkge1xuICAgIHRlbXBlcmF0dXJlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3RlbXBlcmF0dXJlfcKwRmA7XG4gIH0gZWxzZSBpZiAoaXNDZWxjaXVzKSB7XG4gICAgdGVtcGVyYXR1cmVFbGVtZW50LnRleHRDb250ZW50ID0gYCR7dGVtcGVyYXR1cmV9wrBDYDtcbiAgfVxuXG4gIGNhcmQuYXBwZW5kQ2hpbGQodGltZUVsZW1lbnQpO1xuICBjYXJkLmFwcGVuZENoaWxkKGljb25FbGVtZW50KTtcbiAgY2FyZC5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZUVsZW1lbnQpO1xuXG4gIHJldHVybiBjYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGF0Q2FyZChzdGF0LCB0aXRsZSwgaWNvbiwgYW5nbGUgPSAnJykge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnc3RhdHMtd2VhdGhlci1zZWN0aW9uX19zdGF0LWNhcmQnKTtcblxuICBjb25zdCBzdGF0Q2FyZFRpdGxlID0gY3JlYXRlVGV4dEVsZW1lbnQoJ3N0YXQtY2FyZF9fdGl0bGUnLCB0aXRsZSk7XG5cbiAgY29uc3Qgc3RhdENhcmRTdGF0ID0gY3JlYXRlVGV4dEVsZW1lbnQoJ3N0YXQtY2FyZF9fc3RhdCcsIHN0YXQpO1xuXG4gIGNvbnN0IGljb25FbGVtZW50ID0gY3JlYXRlSWNvbkVsZW1lbnQoaWNvbik7XG4gIGljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YXQtY2FyZF9faWNvbicpO1xuXG4gIGlmIChhbmdsZSAhPT0gJycpIHtcbiAgICBpY29uRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7YW5nbGV9ZGVnKWA7XG4gIH1cblxuICBjYXJkLmFwcGVuZENoaWxkKHN0YXRDYXJkVGl0bGUpO1xuICBjYXJkLmFwcGVuZENoaWxkKHN0YXRDYXJkU3RhdCk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xuXG4gIHJldHVybiBjYXJkO1xufVxuXG5mdW5jdGlvbiBnZXRXZWVrRGF5KGRhdGVTdHJpbmcpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuXG4gIGNvbnN0IGRheU9mV2Vla051bWJlciA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgY29uc3QgZGF5c09mV2VlayA9IFtcbiAgICAnU3VuZGF5JyxcbiAgICAnTW9uZGF5JyxcbiAgICAnVHVlc2RheScsXG4gICAgJ1dlZG5lc2RheScsXG4gICAgJ1RodXJzZGF5JyxcbiAgICAnRnJpZGF5JyxcbiAgICAnU2F0dXJkYXknLFxuICBdO1xuICBjb25zdCBkYXlPZldlZWtOYW1lID0gZGF5c09mV2Vla1tkYXlPZldlZWtOdW1iZXJdO1xuXG4gIHJldHVybiBkYXlPZldlZWtOYW1lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVcGNvbWluZ1RhYmxlKHdlYXRoZXJEYXRhLCBpc0ZhaHJlbmhlaXQpIHtcbiAgY29uc3QgdXBjb21pbmdEYXRhID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgY29uc3QgZm9yZWNhc3QgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXTtcbiAgICBjb25zdCBkYXlEYXRhID0ge1xuICAgICAgZGF5OiBnZXRXZWVrRGF5KGZvcmVjYXN0LmRhdGUpLFxuICAgICAgZGVzY3JpcHRpb246IGZvcmVjYXN0LmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgIG1heFRlbXBlcmF0dXJlOiBpc0ZhaHJlbmhlaXRcbiAgICAgICAgPyBgJHtmb3JlY2FzdC5kYXkubWF4dGVtcF9mfcKwRmBcbiAgICAgICAgOiBgJHtmb3JlY2FzdC5kYXkubWF4dGVtcF9jfcKwQ2AsXG4gICAgICBtaW5UZW1wZXJhdHVyZTogaXNGYWhyZW5oZWl0XG4gICAgICAgID8gYCR7Zm9yZWNhc3QuZGF5Lm1pbnRlbXBfZn3CsEZgXG4gICAgICAgIDogYCR7Zm9yZWNhc3QuZGF5Lm1pbnRlbXBfY33CsENgLFxuICAgICAgY2hhbmNlT2ZSYWluOiBgJHtmb3JlY2FzdC5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW59JWAsXG4gICAgICBodW1pZGl0eTogYCR7Zm9yZWNhc3QuZGF5LmF2Z2h1bWlkaXR5fSVgLFxuICAgIH07XG5cbiAgICB1cGNvbWluZ0RhdGEucHVzaChkYXlEYXRhKTtcbiAgfVxuXG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgdGFibGUuY2xhc3NMaXN0LmFkZCgndXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZScpO1xuXG4gIGNvbnN0IHRhYmxlSGVhZGVyID0gdGFibGUuY3JlYXRlVEhlYWQoKTtcbiAgY29uc3QgaGVhZGVyUm93ID0gdGFibGVIZWFkZXIuaW5zZXJ0Um93KDApO1xuICBjb25zdCBoZWFkZXJzID0gW1xuICAgICdEYXknLFxuICAgICcnLFxuICAgICdNYXggVGVtcCcsXG4gICAgJ01pbiBUZW1wJyxcbiAgICAnQ2hhbmNlIG9mIFJhaW4nLFxuICAgICdIdW1pZGl0eScsXG4gIF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIHRoLnRleHRDb250ZW50ID0gaGVhZGVyc1tpXTtcbiAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQodGgpO1xuICB9XG5cbiAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcblxuICB1cGNvbWluZ0RhdGEuZm9yRWFjaCgoZGF0YSwgaSkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHRhYmxlQm9keS5pbnNlcnRSb3coKTtcbiAgICBjb25zdCByb3dEYXRhID0gW1xuICAgICAgZGF0YS5kYXksXG4gICAgICBjcmVhdGVJY29uRWxlbWVudCh3ZWF0aGVySWNvbnNbZGF0YS5kZXNjcmlwdGlvbl0pLFxuICAgICAgZGF0YS5tYXhUZW1wZXJhdHVyZSxcbiAgICAgIGRhdGEubWluVGVtcGVyYXR1cmUsXG4gICAgICBkYXRhLmNoYW5jZU9mUmFpbixcbiAgICAgIGRhdGEuaHVtaWRpdHksXG4gICAgXTtcblxuICAgIHJvd0RhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMSkge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaWNvbi1jZWxsJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGkgPT09IHVwY29taW5nRGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICByb3cuY2xhc3NMaXN0LmFkZCgnbGFzdC1yb3cnKTtcbiAgICB9XG4gIH0pO1xuXG4gIHRhYmxlLmFwcGVuZENoaWxkKHRhYmxlQm9keSk7XG5cbiAgcmV0dXJuIHRhYmxlO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0MjRIb3Vyc0RhdGEod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgY3VycmVudExhc3RVcGRhdGVkID0gbmV3IERhdGUod2VhdGhlckRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQpO1xuXG4gIGNvbnN0IGZvcmVjYXN0RGF5MCA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXI7XG4gIGNvbnN0IGZvcmVjYXN0RGF5MSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXI7XG5cbiAgY29uc3QgbmV4dDI0SG91cnMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVjYXN0RGF5MC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGhvdXJEYXRhID0gZm9yZWNhc3REYXkwW2ldO1xuICAgIGNvbnN0IHRoZXRpbWVoZXJlID0gbmV3IERhdGUoaG91ckRhdGEudGltZSk7XG5cbiAgICBpZiAodGhldGltZWhlcmUgLSBjdXJyZW50TGFzdFVwZGF0ZWQgPiAtKDM2MDAgKiAxMDAwKSkge1xuICAgICAgbmV4dDI0SG91cnMucHVzaChob3VyRGF0YSk7XG4gICAgfVxuICAgIGlmIChuZXh0MjRIb3Vycy5sZW5ndGggPj0gMjQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChuZXh0MjRIb3Vycy5sZW5ndGggPCAyNCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3REYXkxLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBob3VyRGF0YSA9IGZvcmVjYXN0RGF5MVtpXTtcblxuICAgICAgbmV4dDI0SG91cnMucHVzaChob3VyRGF0YSk7XG5cbiAgICAgIGlmIChuZXh0MjRIb3Vycy5sZW5ndGggPj0gMjQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5leHQyNEhvdXJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyU2VjdGlvbih3ZWF0aGVyRGF0YSwgaXNmYWhyZW5oZWl0LCBpc0NlbGNpdXMpIHtcbiAgY29uc3QgY3VycmVudFdlYXRoZXIgPSB3ZWF0aGVyRGF0YS5jdXJyZW50O1xuICBjb25zdCBmb3JlY2FzdCA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheTtcblxuICBjb25zdCBsb2NhdGlvbkVsZW1lbnQgPSBjcmVhdGVUZXh0RWxlbWVudChcbiAgICAndGl0bGUtY29udGFpbmVyX19sb2NhdGlvbicsXG4gICAgYCR7d2VhdGhlckRhdGEubG9jYXRpb24ubmFtZX0sICR7d2VhdGhlckRhdGEubG9jYXRpb24ucmVnaW9ufSwgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5fWAsXG4gICk7XG5cbiAgY29uc3QgZGF0ZVRpbWVFbGVtZW50ID0gY3JlYXRlVGV4dEVsZW1lbnQoXG4gICAgJ3RpdGxlLWNvbnRhaW5lcl9fZGF0ZS10aW1lJyxcbiAgICBmb3JtYXREYXRlVG9IdW1hblJlYWRhYmxlKHdlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZSksXG4gICk7XG5cbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1zZWN0aW9uX190aXRsZS1jb250YWluZXInKTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25FbGVtZW50KTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVRpbWVFbGVtZW50KTtcblxuICBjb25zdCB0b2RheURlc2NyaXB0aW9uID0gY3JlYXRlVGV4dEVsZW1lbnQoXG4gICAgJ21haW4tcGlsbC10b3BfX3RvZGF5LWRlc2NyaXB0aW9uJyxcbiAgICBjdXJyZW50V2VhdGhlci5jb25kaXRpb24udGV4dCxcbiAgKTtcblxuICBjb25zdCB0b2RheUZlZWxzTGlrZSA9IGNyZWF0ZVRleHRFbGVtZW50KFxuICAgICdtYWluLXBpbGwtdG9wX190b2RheS1mZWVscy1saWtlJyxcbiAgICBgRmVlbHMgbGlrZSAke1xuICAgICAgaXNmYWhyZW5oZWl0ID8gY3VycmVudFdlYXRoZXIuZmVlbHNsaWtlX2YgOiBjdXJyZW50V2VhdGhlci5mZWVsc2xpa2VfY1xuICAgIH3CsGAsXG4gICk7XG5cbiAgY29uc3QgbWFpblBpbGxUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpblBpbGxUb3AuY2xhc3NMaXN0LmFkZCgnbWFpbi1waWxsX19tYWluLXBpbGwtdG9wJyk7XG4gIG1haW5QaWxsVG9wLmFwcGVuZENoaWxkKHRvZGF5RGVzY3JpcHRpb24pO1xuICBtYWluUGlsbFRvcC5hcHBlbmRDaGlsZCh0b2RheUZlZWxzTGlrZSk7XG5cbiAgY29uc3Qgd2VhdGhlclBpYyA9IGNyZWF0ZUljb25FbGVtZW50KFxuICAgIHdlYXRoZXJJY29uc1tjdXJyZW50V2VhdGhlci5jb25kaXRpb24udGV4dF0sXG4gICk7XG4gIHdlYXRoZXJQaWMuY2xhc3NMaXN0LmFkZCgnbWFpbi1waWxsLW1pZF9fd2VhdGhlci1waWMnKTtcblxuICBjb25zdCBjdXJyZW50VGVtcFRleHQgPSBjcmVhdGVUZXh0RWxlbWVudChcbiAgICAnbWFpbi1waWxsLW1pZF9fY3VycmVudC10ZW1wLXRleHQnLFxuICAgIGAke2lzZmFocmVuaGVpdCA/IGN1cnJlbnRXZWF0aGVyLnRlbXBfZiA6IGN1cnJlbnRXZWF0aGVyLnRlbXBfY33CsGAsXG4gICk7XG5cbiAgY29uc3QgbWFpblBpbGxNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpblBpbGxNaWQuY2xhc3NMaXN0LmFkZCgnbWFpbi1waWxsX19tYWluLXBpbGwtbWlkJyk7XG4gIG1haW5QaWxsTWlkLmFwcGVuZENoaWxkKHdlYXRoZXJQaWMpO1xuICBtYWluUGlsbE1pZC5hcHBlbmRDaGlsZChjdXJyZW50VGVtcFRleHQpO1xuXG4gIGNvbnN0IHRvZGF5SGlnaFRleHQgPSBjcmVhdGVUZXh0RWxlbWVudChcbiAgICAnbWFpbi1waWxsLWJvdC0tdG9kYXktbG93aGlnaC10ZXh0JyxcbiAgICBgSGlnaDogJHtpc2ZhaHJlbmhlaXQgPyBmb3JlY2FzdC5tYXh0ZW1wX2YgOiBmb3JlY2FzdC5tYXh0ZW1wX2N9wrBgLFxuICApO1xuXG4gIGNvbnN0IHRvZGF5TG93VGV4dCA9IGNyZWF0ZVRleHRFbGVtZW50KFxuICAgICdtYWluLXBpbGwtYm90LS10b2RheS1sb3doaWdoLXRleHQnLFxuICAgIGBMb3c6ICR7aXNmYWhyZW5oZWl0ID8gZm9yZWNhc3QubWludGVtcF9mIDogZm9yZWNhc3QubWludGVtcF9jfcKwYCxcbiAgKTtcblxuICBjb25zdCBtYWluUGlsbEJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluUGlsbEJvdC5jbGFzc0xpc3QuYWRkKCdtYWluLXBpbGxfX21haW4tcGlsbC1ib3QnKTtcbiAgbWFpblBpbGxCb3QuYXBwZW5kQ2hpbGQodG9kYXlIaWdoVGV4dCk7XG4gIG1haW5QaWxsQm90LmFwcGVuZENoaWxkKHRvZGF5TG93VGV4dCk7XG5cbiAgY29uc3QgbWFpblBpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpblBpbGwuY2xhc3NMaXN0LmFkZCgndG9kYXktd2VhdGhlci1zZWN0aW9uX19tYWluLXBpbGwnKTtcbiAgbWFpblBpbGwuYXBwZW5kQ2hpbGQobWFpblBpbGxUb3ApO1xuICBtYWluUGlsbC5hcHBlbmRDaGlsZChtYWluUGlsbE1pZCk7XG4gIG1haW5QaWxsLmFwcGVuZENoaWxkKG1haW5QaWxsQm90KTtcblxuICBjb25zdCBob3VybHlQaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvdXJseVBpbGwuY2xhc3NMaXN0LmFkZCgndG9kYXktd2VhdGhlci1zZWN0aW9uX19ob3VybHktcGlsbCcpO1xuXG4gIGNvbnN0IGhvdXJseURhdGEgPSBnZXROZXh0MjRIb3Vyc0RhdGEod2VhdGhlckRhdGEpO1xuXG4gIGhvdXJseURhdGEuZm9yRWFjaCgoaG91ckRhdGEsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgdGltZVdpdGhvdXREYXRlID0gaG91ckRhdGEudGltZS5zcGxpdCgnICcpWzFdO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gaXNmYWhyZW5oZWl0ID8gaG91ckRhdGEudGVtcF9mIDogaG91ckRhdGEudGVtcF9jO1xuICAgIGNvbnN0IHdlYXRoZXJUZXh0ID0gaG91ckRhdGEuY29uZGl0aW9uLnRleHQ7XG5cbiAgICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZChcbiAgICAgIHRpbWVXaXRob3V0RGF0ZSxcbiAgICAgIHdlYXRoZXJUZXh0LFxuICAgICAgdGVtcGVyYXR1cmUsXG4gICAgICBpc2ZhaHJlbmhlaXQsXG4gICAgICBpc0NlbGNpdXMsXG4gICAgKTtcblxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fdGltZScpLnN0eWxlLmZvbnRXZWlnaHQgPSAnNjAwJztcbiAgICB9XG5cbiAgICBob3VybHlQaWxsLmFwcGVuZENoaWxkKGNhcmQpO1xuICB9KTtcblxuICBjb25zdCB0b2RheVdlYXRoZXJTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZGF5V2VhdGhlclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1zZWN0aW9uX190b2RheS13ZWF0aGVyLXNlY3Rpb24nKTtcbiAgdG9kYXlXZWF0aGVyU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluUGlsbCk7XG4gIHRvZGF5V2VhdGhlclNlY3Rpb24uYXBwZW5kQ2hpbGQoaG91cmx5UGlsbCk7XG5cbiAgY29uc3Qgc3VucmlzZVN0YXQgPSBjcmVhdGVTdGF0Q2FyZChcbiAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5yaXNlLFxuICAgICdTdW5yaXNlJyxcbiAgICAnZmEtc29saWQgZmEtY2xvdWQtc3VuJyxcbiAgKTtcblxuICBjb25zdCBzdW5zZXRTdGF0ID0gY3JlYXRlU3RhdENhcmQoXG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0LFxuICAgICdTdW5zZXQnLFxuICAgICdmYS1zb2xpZCBmYS1jbG91ZC1tb29uJyxcbiAgKTtcblxuICBjb25zdCB3aW5kU3RhdCA9IGNyZWF0ZVN0YXRDYXJkKFxuICAgIGAke1xuICAgICAgaXNmYWhyZW5oZWl0XG4gICAgICAgID8gYCR7Y3VycmVudFdlYXRoZXIud2luZF9tcGh9IG1waGBcbiAgICAgICAgOiBgJHtjdXJyZW50V2VhdGhlci53aW5kX2twaH0ga3BoYFxuICAgIH1gLFxuICAgICdXaW5kJyxcbiAgICAnZmEtc29saWQgZmEtd2luZCcsXG4gICk7XG5cbiAgY29uc3Qgd2luZERpcmVjdGlvblN0YXQgPSBjcmVhdGVTdGF0Q2FyZChcbiAgICBjdXJyZW50V2VhdGhlci53aW5kX2RpcixcbiAgICAnV2luZCBEaXJlY3Rpb24nLFxuICAgICdmYS1zb2xpZCBmYS11cC1sb25nJyxcbiAgICBjdXJyZW50V2VhdGhlci53aW5kX2RlZ3JlZSxcbiAgKTtcblxuICBjb25zdCBodW1pZGl0eVN0YXQgPSBjcmVhdGVTdGF0Q2FyZChcbiAgICBgJHtjdXJyZW50V2VhdGhlci5odW1pZGl0eX0lYCxcbiAgICAnSHVtaWRpdHknLFxuICAgICdmYS1zb2xpZCBmYS1kcm9wbGV0JyxcbiAgKTtcblxuICBjb25zdCB1dlN0YXQgPSBjcmVhdGVTdGF0Q2FyZChjdXJyZW50V2VhdGhlci51diwgJ1VWJywgJ2ZhLXJlZ3VsYXIgZmEtc3VuJyk7XG5cbiAgY29uc3QgY2hhbmNlT2ZSYWluU3RhdCA9IGNyZWF0ZVN0YXRDYXJkKFxuICAgIGAke3dlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0lYCxcbiAgICAnQ2hhbmNlIG9mIFJhaW4nLFxuICAgICdmYS1zb2xpZCBmYS1jbG91ZC1zaG93ZXJzLXdhdGVyJyxcbiAgKTtcblxuICBjb25zdCBwcmVjaXBpdGF0aW9uU3RhdCA9IGNyZWF0ZVN0YXRDYXJkKFxuICAgIGAke1xuICAgICAgaXNmYWhyZW5oZWl0XG4gICAgICAgID8gYCR7Y3VycmVudFdlYXRoZXIucHJlY2lwX2lufSBpbmNoZXNgXG4gICAgICAgIDogYCR7Y3VycmVudFdlYXRoZXIucHJlY2lwX21tfSBtbWBcbiAgICB9YCxcbiAgICAnUHJlY2lwaXRhdGlvbicsXG4gICAgJ2ZhLXNvbGlkIGZhLXdhdGVyJyxcbiAgKTtcblxuICBjb25zdCBzdGF0c1dlYXRoZXJTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN0YXRzV2VhdGhlclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1zZWN0aW9uX19zdGF0cy13ZWF0aGVyLXNlY3Rpb24nKTtcbiAgc3RhdHNXZWF0aGVyU2VjdGlvbi5hcHBlbmRDaGlsZChzdW5yaXNlU3RhdCk7XG4gIHN0YXRzV2VhdGhlclNlY3Rpb24uYXBwZW5kQ2hpbGQoc3Vuc2V0U3RhdCk7XG4gIHN0YXRzV2VhdGhlclNlY3Rpb24uYXBwZW5kQ2hpbGQod2luZFN0YXQpO1xuICBzdGF0c1dlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKHdpbmREaXJlY3Rpb25TdGF0KTtcbiAgc3RhdHNXZWF0aGVyU2VjdGlvbi5hcHBlbmRDaGlsZChodW1pZGl0eVN0YXQpO1xuICBzdGF0c1dlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKHV2U3RhdCk7XG4gIHN0YXRzV2VhdGhlclNlY3Rpb24uYXBwZW5kQ2hpbGQoY2hhbmNlT2ZSYWluU3RhdCk7XG4gIHN0YXRzV2VhdGhlclNlY3Rpb24uYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvblN0YXQpO1xuXG4gIGNvbnN0IHVwY29taW5nV2VhdGhlclNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdXBjb21pbmdXZWF0aGVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFxuICAgICd3ZWF0aGVyLXNlY3Rpb25fX3VwY29taW5nLXdlYXRoZXItc2VjdGlvbicsXG4gICk7XG4gIHVwY29taW5nV2VhdGhlclNlY3Rpb24uYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVXBjb21pbmdUYWJsZSh3ZWF0aGVyRGF0YSwgaXNmYWhyZW5oZWl0KSxcbiAgKTtcblxuICBjb25zdCB3ZWF0aGVyU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLXNlY3Rpb24tY29udGFpbmVyX193ZWF0aGVyLXNlY3Rpb24nKTtcbiAgd2VhdGhlclNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICB3ZWF0aGVyU2VjdGlvbi5hcHBlbmRDaGlsZCh0b2RheVdlYXRoZXJTZWN0aW9uKTtcbiAgd2VhdGhlclNlY3Rpb24uYXBwZW5kQ2hpbGQoc3RhdHNXZWF0aGVyU2VjdGlvbik7XG4gIHdlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKHVwY29taW5nV2VhdGhlclNlY3Rpb24pO1xuXG4gIGNvbnN0IGV4aXN0aW5nV2VhdGhlclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcud2VhdGhlci1zZWN0aW9uLWNvbnRhaW5lcl9fd2VhdGhlci1zZWN0aW9uJyxcbiAgKTtcblxuICBpZiAoZXhpc3RpbmdXZWF0aGVyU2VjdGlvbikge1xuICAgIGV4aXN0aW5nV2VhdGhlclNlY3Rpb24ucmVtb3ZlKCk7XG4gIH1cblxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1zZWN0aW9uLWNvbnRhaW5lcicpXG4gICAgLmFwcGVuZENoaWxkKHdlYXRoZXJTZWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlclNlY3Rpb25Db250YWluZXIoKSB7XG4gIGNvbnN0IHdlYXRoZXJTZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICB3ZWF0aGVyU2VjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLXNlY3Rpb24tY29udGFpbmVyJyk7XG5cbiAgY29uc3QgZXhpc3RpbmdXZWF0aGVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy53ZWF0aGVyLXNlY3Rpb24tY29udGFpbmVyJyxcbiAgKTtcblxuICBpZiAoZXhpc3RpbmdXZWF0aGVyU2VjdGlvbikge1xuICAgIGV4aXN0aW5nV2VhdGhlclNlY3Rpb24ucmVtb3ZlKCk7XG4gIH1cblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyU2VjdGlvbkNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpc2VXZWF0aGVyU2VjdGlvbigpIHtcbiAgY3JlYXRlV2VhdGhlclNlY3Rpb25Db250YWluZXIoKTtcbiAgbGV0IGlzZmFocmVuaGVpdCA9IGZhbHNlO1xuICBsZXQgaXNDZWxjaXVzID0gZmFsc2U7XG5cbiAgY29uc3QgYWN0aXZlVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtdW5pdC1idXR0b24nKTtcblxuICBpZiAoYWN0aXZlVW5pdC5pZCA9PT0gJ2ZhaHJlbmhlaXQnKSB7XG4gICAgaXNmYWhyZW5oZWl0ID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChhY3RpdmVVbml0LmlkID09PSAnY2VsY2l1cycpIHtcbiAgICBpc0NlbGNpdXMgPSB0cnVlO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gcmVzdWx0LmRhdGE7XG5cbiAgICBjcmVhdGVXZWF0aGVyU2VjdGlvbih3ZWF0aGVyRGF0YSwgaXNmYWhyZW5oZWl0LCBpc0NlbGNpdXMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHdlYXRoZXIgc2VjdGlvbjonLCBlcnJvcik7XG4gIH1cbn1cbiIsImZ1bmN0aW9uIGFkZEFsZXJ0VGV4dCgpIHtcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9ybWVzc2FnZScpO1xuXG4gIGlmIChlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFsZXJ0VGV4dCgpIHtcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9ybWVzc2FnZScpO1xuXG4gIGlmIChlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEoKSB7XG4gIGNvbnN0IHByZWxpbUxvY2F0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByZWxpbWxvY2F0aW9uJyk7XG4gIHRyeSB7XG4gICAgY29uc3QgcHJlbGltaW5hcnlVcmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT1jNTlmZWNhYmZlOWU0NWU5OTEzMTE0NDA3MjMwMjA5JnE9JHtwcmVsaW1Mb2NhdGlvbn0mZGF5cz04JmFxaT1ubyZhbGVydHM9bm9gO1xuXG4gICAgY29uc3QgcHJlbGltaW5hcnlSZXNwb25zZSA9IGF3YWl0IGZldGNoKHByZWxpbWluYXJ5VXJsKTtcbiAgICBjb25zdCBwcmVsaW1pbmFyeURhdGEgPSBhd2FpdCBwcmVsaW1pbmFyeVJlc3BvbnNlLmpzb24oKTtcblxuICAgIGlmIChwcmVsaW1pbmFyeURhdGEuZXJyb3IgJiYgcHJlbGltaW5hcnlEYXRhLmVycm9yLmNvZGUgPT09IDEwMDYpIHtcbiAgICAgIGFkZEFsZXJ0VGV4dCgpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxlcnRUZXh0KCk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYXRpb24nLCBwcmVsaW1Mb2NhdGlvbik7XG4gICAgY29uc3Qgc2V0TG9jYXRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYXRpb24nKTtcblxuICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1jNTlmZWNhYmZlOWU0NWU5OTEzMTE0NDA3MjMwMjA5JnE9JHtzZXRMb2NhdGlvbn0mZGF5cz04JmFxaT1ubyZhbGVydHM9bm9gO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIHsgZGF0YSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGEgZnJvbSB0aGUgQVBJOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9