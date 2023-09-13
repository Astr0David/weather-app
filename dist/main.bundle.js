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
  padding: 0.5rem 1.5rem;
}
}

@media screen and (max-width: 745px) {
  .upcoming-weather-section__table {
    font-size: 1rem;
  }
}

@media screen and (max-width: 653px) {
  .upcoming-weather-section__table td:last-child {
    display: none;
  }

  .upcoming-weather-section__table th:last-child {
    display: none;
  }
}

@media screen and (max-width: 533px) {
  .upcoming-weather-section__table td:nth-child(5) {
    display: none;
  }

  .upcoming-weather-section__table th:nth-child(5) {
    display: none;
  }
}

@media screen and (max-width: 436px) {
  .upcoming-weather-section__table td:nth-child(2) {
    display: none;
  }

  .upcoming-weather-section__table th:nth-child(2) {
    display: none;
  }

  .upcoming-weather-section__table td {
    padding: 1.5rem 0rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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AS;EACT,kBAAkB;EAClB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,+BAA+B;EAC/B,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gCAAgC;EAChC,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;;EAEE,sBAAsB;EACtB,kDAAkD;AACpD;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,iDAAiD;EACjD,eAAe;EACf,+BAA+B;EAC/B,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,SAAS;IACT,iBAAiB;EACnB;;EAEA;IACE,uBAAuB;IACvB,WAAW;EACb;;EAEA;IACE,uBAAuB;IACvB,WAAW;EACb;AACF;;AAEA;EACE;IACE,WAAW;IACX,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;EACX;;EAEA;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,2DAA2D;EAC7D;EACA;IACE,eAAe;IACf,eAAe;EACjB;AACF;;AAEA;EACE;;EAEA,sBAAsB;AACxB;AACA;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,oBAAoB;EACtB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: 0;\n  font-family: 'Open Sans', sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n  min-height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  min-height: 100%;\n  width: 100%;\n  background: linear-gradient(to bottom, #184e77, #d9ed92);\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  flex-wrap: wrap;\n}\n\n.nav__left-nav {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.left-nav__image-container {\n  width: 100px;\n  height: 100px;\n}\n\n.image-container__weather-logo {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.left-nav__search-bar-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.search-bar-container__search-container {\n  background-color: rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  padding: 0.6rem;\n  border-radius: 4px;\n  gap: 0.5rem;\n}\n\n.search-container__search-bar {\n  background: transparent;\n  border: none;\n  outline: none;\n  color: white;\n  transition: 0.75s;\n  width: 0px;\n  font-size: 1.15rem;\n}\n\n.left-nav__search-bar-container:hover .search-container__search-bar {\n  width: 335px;\n}\n\n.search-container__search-bar::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.search-container__search-icon {\n  margin-left: -0.45rem;\n  align-items: center;\n  display: flex;\n}\n\n.left-nav__search-bar-container:hover .search-container__search-icon {\n  margin: 0rem;\n}\n\n#searchbaricon {\n  font-size: 1.15rem;\n  cursor: pointer;\n  transition: 0.1s ease;\n}\n\n#searchbaricon:hover {\n  transform: scale(1.15);\n}\n\n#searchbaricon:active {\n  transform: scale(1);\n}\n\n#errormessage {\n  color: crimson;\n  font-weight: 600;\n  font-size: 1rem;\n  padding-top: 0.2rem;\n  text-align: center;\n  word-wrap: break-word;\n}\n\n.nav__right-nav {\n  display: flex;\n  align-items: center;\n}\n\n.button-container__unit-button {\n  border: none;\n  outline: none;\n  font-size: 1.25rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  font-weight: 300;\n  transition: 0.1s ease;\n}\n\n.button-container__unit-button:hover {\n  opacity: 50%;\n}\n\n.button-container--celcius-button {\n  background-color: rgba(52, 160, 164, 0.5);\n  border-radius: 4px 0px 0px 4px;\n}\n\n.button-container--fahrenheit-button {\n  background-color: rgba(82, 182, 154, 0.5);\n  border-radius: 0px 4px 4px 0px;\n}\n\n.button-container__unit-button.active-unit-button {\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 400;\n}\n\n.weather-section-container {\n  margin-top: 1rem;\n  display: flex;\n  justify-content: center;\n}\n\n.weather-section-container__weather-section {\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.weather-section__title-container {\n  display: flex;\n  width: 100%;\n  gap: 1rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.title-container__location {\n  color: white;\n  font-weight: 600;\n  font-size: 2rem;\n}\n\n.title-container__date-time {\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  font-size: 1.4rem;\n  padding-top: 0.2rem;\n}\n\n.weather-section__today-weather-section {\n  margin-top: 2rem;\n  width: 80%;\n  display: flex;\n  gap: 5rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 3rem;\n}\n\n.today-weather-section__main-pill {\n  padding: 0.5rem;\n}\n\n.main-pill-top__today-description {\n  text-align: center;\n  font-size: 1.5rem;\n  color: white;\n}\n\n.main-pill-top__today-feels-like {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.main-pill__main-pill-mid {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 0rem;\n  gap: 1rem;\n}\n\n.main-pill-mid__weather-pic {\n  font-size: 5rem;\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.main-pill-mid__current-temp-text {\n  font-size: 4.5rem;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 600;\n}\n\n.main-pill__main-pill-bot {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.main-pill-bot--today-lowhigh-text {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.today-weather-section__hourly-pill {\n  display: flex;\n  align-items: center;\n  overflow-x: auto;\n  white-space: nowrap;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n  user-select: none;\n}\n\n.today-weather-section__hourly-pill::-webkit-scrollbar {\n  width: 0.5rem;\n}\n\n.today-weather-section__hourly-pill::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 5px;\n  width: 0.5rem;\n}\n\n.today-weather-section__hourly-pill::-webkit-scrollbar-track {\n  background-color: transparent;\n  border-radius: 5px;\n}\n\n.hourly-pill__card {\n  flex: 0 0 auto;\n  flex-direction: column;\n  display: flex;\n  width: 125px;\n  padding: 0.5rem;\n  text-align: center;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1.5rem;\n}\n\n.card__time {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1.3rem;\n  font-weight: 300;\n}\n\n.card__icon {\n  font-size: 3rem;\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.card__temperature {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1.3rem;\n  font-weight: 300;\n}\n\n.weather-section__stats-weather-section {\n  display: grid;\n  max-width: 100%;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 4rem;\n}\n\n.stats-weather-section__stat-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 2rem 1rem;\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n\n.stat-card__title {\n  font-size: 1.5rem;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  text-align: center;\n}\n\n.stat-card__stat {\n  font-size: 2rem;\n  color: rgba(255, 255, 255, 0.85);\n  margin-top: -1rem;\n  margin-bottom: 0.5rem;\n  text-align: center;\n}\n\n.stat-card__icon {\n  font-size: 5rem;\n  color: white;\n}\n\n.weather-section__upcoming-weather-section {\n  margin-bottom: 3rem;\n}\n\n.upcoming-weather-section__table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 1.5rem;\n}\n\n.upcoming-weather-section__table th,\n.upcoming-weather-section__table td {\n  padding: 0.5rem 2.5rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.25);\n}\n\n.upcoming-weather-section__table td {\n  color: rgba(255, 255, 255, 1);\n  text-align: center;\n}\n\n.upcoming-weather-section__table tbody > tr:last-child > td{\n  border-bottom: none;\n}\n\n.upcoming-weather-section__table th {\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.5);\n  text-align: center;\n  font-weight: bold;\n}\n\n.upcoming-weather-section__table td:nth-child(2) {\n  text-align: center;\n}\n\n.upcoming-weather-section__table .icon-cell {\n  font-size: 3rem;\n  color: white;\n}\n\n@media screen and (max-width: 725px) {\n  .left-nav__image-container {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 645px) {\n  .left-nav__search-bar-container:hover .search-container__search-bar {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 760px) {\n  .nav {\n    gap: 1rem;\n    padding-top: 1rem;\n  }\n\n  .nav__left-nav {\n    justify-content: center;\n    width: 100%;\n  }\n\n  .nav__right-nav {\n    justify-content: center;\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 970px) {\n  .weather-section__today-weather-section {\n    width: 100%;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n\n  .today-weather-section__hourly-pill {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 549px) {\n  html {\n    height: auto;\n  }\n\n  body {\n    height: 100%;\n  }\n\n  .container {\n    min-height: 100vh;\n  }\n}\n\n@media screen and (max-width: 462px) {\n  .weather-section__stats-weather-section {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  }\n  .today-weather-section__main-pill {\n    padding: 0.5rem;\n    max-width: 100%;\n  }\n}\n\n@media screen and (max-width: 948px) {\n  .upcoming-weather-section__table th,\n.upcoming-weather-section__table td {\n  padding: 0.5rem 1.5rem;\n}\n}\n\n@media screen and (max-width: 745px) {\n  .upcoming-weather-section__table {\n    font-size: 1rem;\n  }\n}\n\n@media screen and (max-width: 653px) {\n  .upcoming-weather-section__table td:last-child {\n    display: none;\n  }\n\n  .upcoming-weather-section__table th:last-child {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 533px) {\n  .upcoming-weather-section__table td:nth-child(5) {\n    display: none;\n  }\n\n  .upcoming-weather-section__table th:nth-child(5) {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 436px) {\n  .upcoming-weather-section__table td:nth-child(2) {\n    display: none;\n  }\n\n  .upcoming-weather-section__table th:nth-child(2) {\n    display: none;\n  }\n\n  .upcoming-weather-section__table td {\n    padding: 1.5rem 0rem;\n  }\n}"],"sourceRoot":""}]);
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

  for (let i = 1; i <= 2; i++) {
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
    `${weatherData.location.name ? `${weatherData.location.name}, ` : ''}${
      weatherData.location.region ? `${weatherData.location.region}, ` : ''
    }${weatherData.location.country ? weatherData.location.country : ''}`,
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
    const preliminaryUrl = `https://api.weatherapi.com/v1/forecast.json?key=f06208e4f62140dd84052920231309&q=${prelimLocation}&days=8&aqi=no&alerts=no`;

    const preliminaryResponse = await fetch(preliminaryUrl);
    const preliminaryData = await preliminaryResponse.json();

    if (preliminaryData.error && preliminaryData.error.code === 1006) {
      addAlertText();
      return null;
    }

    removeAlertText();

    localStorage.setItem('location', prelimLocation);
    const setLocation = localStorage.getItem('location');

    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=f06208e4f62140dd84052920231309&q=${setLocation}&days=8&aqi=no&alerts=no`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlIQUF5SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN6TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFh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d2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGF0ZS1hZGp1c3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RvZGF5LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlcmFwaS1jYWxscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiAwO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE4NGU3NywgI2Q5ZWQ5Mik7XG59XG5cbi5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5uYXZfX2xlZnQtbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ubGVmdC1uYXZfX2ltYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmltYWdlLWNvbnRhaW5lcl9fd2VhdGhlci1sb2dvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGVmdC1uYXZfX3NlYXJjaC1iYXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtYmFyLWNvbnRhaW5lcl9fc2VhcmNoLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC42cmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC43NXM7XG4gIHdpZHRoOiAwcHg7XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbn1cblxuLmxlZnQtbmF2X19zZWFyY2gtYmFyLWNvbnRhaW5lcjpob3ZlciAuc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhciB7XG4gIHdpZHRoOiAzMzVweDtcbn1cblxuLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1iYXI6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cblxuLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IC0wLjQ1cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGVmdC1uYXZfX3NlYXJjaC1iYXItY29udGFpbmVyOmhvdmVyIC5zZWFyY2gtY29udGFpbmVyX19zZWFyY2gtaWNvbiB7XG4gIG1hcmdpbjogMHJlbTtcbn1cblxuI3NlYXJjaGJhcmljb24ge1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xufVxuXG4jc2VhcmNoYmFyaWNvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG59XG5cbiNzZWFyY2hiYXJpY29uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbiNlcnJvcm1lc3NhZ2Uge1xuICBjb2xvcjogY3JpbXNvbjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMC4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLm5hdl9fcmlnaHQtbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1jb250YWluZXJfX3VuaXQtYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XG59XG5cbi5idXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDUwJTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXItLWNlbGNpdXMtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MiwgMTYwLCAxNjQsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwcHggMHB4IDRweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXItLWZhaHJlbmhlaXQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwgMTgyLCAxNTQsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA0cHggNHB4IDBweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXJfX3VuaXQtYnV0dG9uLmFjdGl2ZS11bml0LWJ1dHRvbiB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi53ZWF0aGVyLXNlY3Rpb24tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53ZWF0aGVyLXNlY3Rpb24tY29udGFpbmVyX193ZWF0aGVyLXNlY3Rpb24ge1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud2VhdGhlci1zZWN0aW9uX190aXRsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiAxcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi50aXRsZS1jb250YWluZXJfX2xvY2F0aW9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi50aXRsZS1jb250YWluZXJfX2RhdGUtdGltZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBwYWRkaW5nLXRvcDogMC4ycmVtO1xufVxuXG4ud2VhdGhlci1zZWN0aW9uX190b2RheS13ZWF0aGVyLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi50b2RheS13ZWF0aGVyLXNlY3Rpb25fX21haW4tcGlsbCB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLm1haW4tcGlsbC10b3BfX3RvZGF5LWRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWFpbi1waWxsLXRvcF9fdG9kYXktZmVlbHMtbGlrZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cblxuLm1haW4tcGlsbF9fbWFpbi1waWxsLW1pZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVyZW0gMHJlbTtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ubWFpbi1waWxsLW1pZF9fd2VhdGhlci1waWMge1xuICBmb250LXNpemU6IDVyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG59XG5cbi5tYWluLXBpbGwtbWlkX19jdXJyZW50LXRlbXAtdGV4dCB7XG4gIGZvbnQtc2l6ZTogNC41cmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWFpbi1waWxsX19tYWluLXBpbGwtYm90IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLm1haW4tcGlsbC1ib3QtLXRvZGF5LWxvd2hpZ2gtdGV4dCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5cbi50b2RheS13ZWF0aGVyLXNlY3Rpb25fX2hvdXJseS1waWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9faG91cmx5LXBpbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDAuNXJlbTtcbn1cblxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9faG91cmx5LXBpbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAwLjVyZW07XG59XG5cbi50b2RheS13ZWF0aGVyLXNlY3Rpb25fX2hvdXJseS1waWxsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5ob3VybHktcGlsbF9fY2FyZCB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTI1cHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS41cmVtO1xufVxuXG4uY2FyZF9fdGltZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uY2FyZF9faWNvbiB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbn1cblxuLmNhcmRfX3RlbXBlcmF0dXJlIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi53ZWF0aGVyLXNlY3Rpb25fX3N0YXRzLXdlYXRoZXItc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxuLnN0YXRzLXdlYXRoZXItc2VjdGlvbl9fc3RhdC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zdGF0LWNhcmRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN0YXQtY2FyZF9fc3RhdCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN0YXQtY2FyZF9faWNvbiB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ud2VhdGhlci1zZWN0aW9uX191cGNvbWluZy13ZWF0aGVyLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG4udXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGgsXG4udXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDAuNXJlbSAyLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xufVxuXG4udXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0ZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRib2R5ID4gdHI6bGFzdC1jaGlsZCA+IHRke1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4udXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0aCB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSAuaWNvbi1jZWxsIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyNXB4KSB7XG4gIC5sZWZ0LW5hdl9faW1hZ2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0NXB4KSB7XG4gIC5sZWZ0LW5hdl9fc2VhcmNoLWJhci1jb250YWluZXI6aG92ZXIgLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1iYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5uYXYge1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgfVxuXG4gIC5uYXZfX2xlZnQtbmF2IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5uYXZfX3JpZ2h0LW5hdiB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTcwcHgpIHtcbiAgLndlYXRoZXItc2VjdGlvbl9fdG9kYXktd2VhdGhlci1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gIH1cblxuICAudG9kYXktd2VhdGhlci1zZWN0aW9uX19ob3VybHktcGlsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQ5cHgpIHtcbiAgaHRtbCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYycHgpIHtcbiAgLndlYXRoZXItc2VjdGlvbl9fc3RhdHMtd2VhdGhlci1zZWN0aW9uIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbiAgfVxuICAudG9kYXktd2VhdGhlci1zZWN0aW9uX19tYWluLXBpbGwge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQ4cHgpIHtcbiAgLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGgsXG4udXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG59XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0NXB4KSB7XG4gIC51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUzcHgpIHtcbiAgLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRoOmxhc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMzcHgpIHtcbiAgLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGQ6bnRoLWNoaWxkKDUpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGg6bnRoLWNoaWxkKDUpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzNnB4KSB7XG4gIC51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRkOm50aC1jaGlsZCgyKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRoOm50aC1jaGlsZCgyKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMHJlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHlDQUF5QztFQUN6Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsYUFBYTtFQUNiLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsOENBQThDO0VBQzlDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDJEQUEyRDtFQUMzRCxTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaURBQWlEO0VBQ2pELGVBQWU7RUFDZiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsU0FBUztJQUNULGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDJEQUEyRDtFQUM3RDtFQUNBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFOztFQUVBLHNCQUFzQjtBQUN4QjtBQUNBOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE4NGU3NywgI2Q5ZWQ5Mik7XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm5hdl9fbGVmdC1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5sZWZ0LW5hdl9faW1hZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXJfX3dlYXRoZXItbG9nbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubGVmdC1uYXZfX3NlYXJjaC1iYXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYmFyLWNvbnRhaW5lcl9fc2VhcmNoLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXG4gIHdpZHRoOiAwcHg7XFxuICBmb250LXNpemU6IDEuMTVyZW07XFxufVxcblxcbi5sZWZ0LW5hdl9fc2VhcmNoLWJhci1jb250YWluZXI6aG92ZXIgLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1iYXIge1xcbiAgd2lkdGg6IDMzNXB4O1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhcjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1pY29uIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMC40NXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubGVmdC1uYXZfX3NlYXJjaC1iYXItY29udGFpbmVyOmhvdmVyIC5zZWFyY2gtY29udGFpbmVyX19zZWFyY2gtaWNvbiB7XFxuICBtYXJnaW46IDByZW07XFxufVxcblxcbiNzZWFyY2hiYXJpY29uIHtcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcXG59XFxuXFxuI3NlYXJjaGJhcmljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG59XFxuXFxuI3NlYXJjaGJhcmljb246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbiNlcnJvcm1lc3NhZ2Uge1xcbiAgY29sb3I6IGNyaW1zb247XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZy10b3A6IDAuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLm5hdl9fcmlnaHQtbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lcl9fdW5pdC1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyLS1jZWxjaXVzLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCAxNjAsIDE2NCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwcHggMHB4IDRweDtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXItLWZhaHJlbmhlaXQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDE4MiwgMTU0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lcl9fdW5pdC1idXR0b24uYWN0aXZlLXVuaXQtYnV0dG9uIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ud2VhdGhlci1zZWN0aW9uLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1zZWN0aW9uLWNvbnRhaW5lcl9fd2VhdGhlci1zZWN0aW9uIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLXNlY3Rpb25fX3RpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyX19sb2NhdGlvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyX19kYXRlLXRpbWUge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XFxufVxcblxcbi53ZWF0aGVyLXNlY3Rpb25fX3RvZGF5LXdlYXRoZXItc2VjdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbi50b2RheS13ZWF0aGVyLXNlY3Rpb25fX21haW4tcGlsbCB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5tYWluLXBpbGwtdG9wX190b2RheS1kZXNjcmlwdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW4tcGlsbC10b3BfX3RvZGF5LWZlZWxzLWxpa2Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG59XFxuXFxuLm1haW4tcGlsbF9fbWFpbi1waWxsLW1pZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtIDByZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5tYWluLXBpbGwtbWlkX193ZWF0aGVyLXBpYyB7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbn1cXG5cXG4ubWFpbi1waWxsLW1pZF9fY3VycmVudC10ZW1wLXRleHQge1xcbiAgZm9udC1zaXplOiA0LjVyZW07XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1haW4tcGlsbF9fbWFpbi1waWxsLWJvdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubWFpbi1waWxsLWJvdC0tdG9kYXktbG93aGlnaC10ZXh0IHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbi50b2RheS13ZWF0aGVyLXNlY3Rpb25fX2hvdXJseS1waWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udG9kYXktd2VhdGhlci1zZWN0aW9uX19ob3VybHktcGlsbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDAuNXJlbTtcXG59XFxuXFxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9faG91cmx5LXBpbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAwLjVyZW07XFxufVxcblxcbi50b2RheS13ZWF0aGVyLXNlY3Rpb25fX2hvdXJseS1waWxsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmhvdXJseS1waWxsX19jYXJkIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTI1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5jYXJkX190aW1lIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5jYXJkX19pY29uIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxufVxcblxcbi5jYXJkX190ZW1wZXJhdHVyZSB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4ud2VhdGhlci1zZWN0aW9uX19zdGF0cy13ZWF0aGVyLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXG59XFxuXFxuLnN0YXRzLXdlYXRoZXItc2VjdGlvbl9fc3RhdC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnN0YXQtY2FyZF9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnN0YXQtY2FyZF9fc3RhdCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcXG4gIG1hcmdpbi10b3A6IC0xcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3RhdC1jYXJkX19pY29uIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLndlYXRoZXItc2VjdGlvbl9fdXBjb21pbmctd2VhdGhlci1zZWN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0aCxcXG4udXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0ZCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMi41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XFxufVxcblxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRkIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0Ym9keSA+IHRyOmxhc3QtY2hpbGQgPiB0ZHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRoIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0ZDpudGgtY2hpbGQoMikge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSAuaWNvbi1jZWxsIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzI1cHgpIHtcXG4gIC5sZWZ0LW5hdl9faW1hZ2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ1cHgpIHtcXG4gIC5sZWZ0LW5hdl9fc2VhcmNoLWJhci1jb250YWluZXI6aG92ZXIgLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1iYXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcXG4gIC5uYXYge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgfVxcblxcbiAgLm5hdl9fbGVmdC1uYXYge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubmF2X19yaWdodC1uYXYge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk3MHB4KSB7XFxuICAud2VhdGhlci1zZWN0aW9uX190b2RheS13ZWF0aGVyLXNlY3Rpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgfVxcblxcbiAgLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9faG91cmx5LXBpbGwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQ5cHgpIHtcXG4gIGh0bWwge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjJweCkge1xcbiAgLndlYXRoZXItc2VjdGlvbl9fc3RhdHMtd2VhdGhlci1zZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuICB9XFxuICAudG9kYXktd2VhdGhlci1zZWN0aW9uX19tYWluLXBpbGwge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQ4cHgpIHtcXG4gIC51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRoLFxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRkIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxufVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDVweCkge1xcbiAgLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1M3B4KSB7XFxuICAudXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0ZDpsYXN0LWNoaWxkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRoOmxhc3QtY2hpbGQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzNweCkge1xcbiAgLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGQ6bnRoLWNoaWxkKDUpIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRoOm50aC1jaGlsZCg1KSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzNnB4KSB7XFxuICAudXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0ZDpudGgtY2hpbGQoMikge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGg6bnRoLWNoaWxkKDIpIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRkIHtcXG4gICAgcGFkZGluZzogMS41cmVtIDByZW07XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjdXN0b21Sb3VuZChudW1iZXIpIHtcbiAgaWYgKG51bWJlciA8IDApIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKG51bWJlciAtIDAuNSk7XG4gIH1cbiAgcmV0dXJuIE1hdGguZmxvb3IobnVtYmVyICsgMC41KTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVGltZVpvbmVPZmZzZXQobG9jYWxUaW1lKSB7XG4gIGNvbnN0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKGxvY2FsVGltZSk7XG5cbiAgY29uc3QgY3VycmVudFV0Y1RpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gIGNvbnN0IHllYXIgPSBsb2NhbERhdGUuZ2V0VVRDRnVsbFllYXIoKTtcblxuICBjb25zdCBkc3RTdGFydCA9IG5ldyBEYXRlKHllYXIsIDMsIDI2KTtcbiAgY29uc3QgZHN0RW5kID0gbmV3IERhdGUoeWVhciwgMTAsIDI5KTtcblxuICBpZiAobG9jYWxEYXRlID49IGRzdFN0YXJ0ICYmIGxvY2FsRGF0ZSA8IGRzdEVuZCkge1xuICAgIGNvbnN0IG9mZnNldE1pbnV0ZXMgPSAobG9jYWxEYXRlIC0gY3VycmVudFV0Y1RpbWUpIC8gKDYwICogMTAwMCkgKyA2MDtcbiAgICByZXR1cm4gY3VzdG9tUm91bmQob2Zmc2V0TWludXRlcyAvIDYwKTtcbiAgfVxuXG4gIGNvbnN0IG9mZnNldE1pbnV0ZXMgPSAobG9jYWxEYXRlIC0gY3VycmVudFV0Y1RpbWUpIC8gKDYwICogMTAwMCk7XG4gIHJldHVybiBjdXN0b21Sb3VuZChvZmZzZXRNaW51dGVzIC8gNjApO1xufVxuXG5mdW5jdGlvbiBnZXREYXlTdWZmaXgoZGF5KSB7XG4gIGlmIChkYXkgPj0gMTEgJiYgZGF5IDw9IDEzKSB7XG4gICAgcmV0dXJuICd0aCc7XG4gIH1cbiAgc3dpdGNoIChkYXkgJSAxMCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiAnc3QnO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiAnbmQnO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiAncmQnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ3RoJztcbiAgfVxufVxuXG5mdW5jdGlvbiBwYWQobnVtYmVyKSB7XG4gIHJldHVybiBudW1iZXIudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xufVxuXG5mdW5jdGlvbiBnZXRUaW1lWm9uZUFiYnJldmlhdGlvbihvZmZzZXQpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyAnKycgOiAnJztcbiAgcmV0dXJuIGBHTVQke3NpZ259JHtvZmZzZXR9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGF0ZVRvSHVtYW5SZWFkYWJsZShsb2NhbFRpbWUpIHtcbiAgY29uc3QgdGltZVpvbmVPZmZzZXQgPSBjYWxjdWxhdGVUaW1lWm9uZU9mZnNldChsb2NhbFRpbWUpO1xuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShsb2NhbFRpbWUpO1xuXG4gIGNvbnN0IGRheXNPZldlZWsgPSBbXG4gICAgJ1N1bmRheScsXG4gICAgJ01vbmRheScsXG4gICAgJ1R1ZXNkYXknLFxuICAgICdXZWRuZXNkYXknLFxuICAgICdUaHVyc2RheScsXG4gICAgJ0ZyaWRheScsXG4gICAgJ1NhdHVyZGF5JyxcbiAgXTtcblxuICBjb25zdCBtb250aHMgPSBbXG4gICAgJ0phbnVhcnknLFxuICAgICdGZWJydWFyeScsXG4gICAgJ01hcmNoJyxcbiAgICAnQXByaWwnLFxuICAgICdNYXknLFxuICAgICdKdW5lJyxcbiAgICAnSnVseScsXG4gICAgJ0F1Z3VzdCcsXG4gICAgJ1NlcHRlbWJlcicsXG4gICAgJ09jdG9iZXInLFxuICAgICdOb3ZlbWJlcicsXG4gICAgJ0RlY2VtYmVyJyxcbiAgXTtcblxuICBjb25zdCBkYXlPZldlZWsgPSBkYXlzT2ZXZWVrW2RhdGUuZ2V0RGF5KCldO1xuICBjb25zdCBkYXlPZk1vbnRoID0gZGF0ZS5nZXREYXRlKCk7XG4gIGNvbnN0IG1vbnRoID0gbW9udGhzW2RhdGUuZ2V0TW9udGgoKV07XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuXG4gIGxldCBhbXBtID0gJ0FNJztcbiAgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgYW1wbSA9ICdQTSc7XG4gICAgaWYgKGhvdXJzID4gMTIpIHtcbiAgICAgIGhvdXJzIC09IDEyO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHtkYXlPZldlZWt9LCAke2RheU9mTW9udGh9JHtnZXREYXlTdWZmaXgoXG4gICAgZGF5T2ZNb250aCxcbiAgKX0gJHttb250aH0gJHt5ZWFyfSB8ICR7aG91cnN9OiR7cGFkKFxuICAgIG1pbnV0ZXMsXG4gICl9ICR7YW1wbX0gKCR7Z2V0VGltZVpvbmVBYmJyZXZpYXRpb24odGltZVpvbmVPZmZzZXQpfSlgO1xuXG4gIHJldHVybiBmb3JtYXR0ZWREYXRlO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgb3BlcmF0b3ItbGluZWJyZWFrICovXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjcmVhdGVOYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xuaW1wb3J0IGluaXRpYWxpc2VXZWF0aGVyU2VjdGlvbiBmcm9tICcuL3RvZGF5LXdlYXRoZXInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjcmVhdGVOYXZiYXIoKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmVsaW1sb2NhdGlvbicpID09PSBudWxsKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByZWxpbWxvY2F0aW9uJywgJ2xvbmRvbicpO1xuICB9IGVsc2UgaWYgKFxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhdGlvbicpICE9PVxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByZWxpbWxvY2F0aW9uJykgJiZcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYXRpb24nKSAhPT0gJydcbiAgKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByZWxpbWxvY2F0aW9uJywgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2F0aW9uJykpO1xuICB9XG4gIGluaXRpYWxpc2VXZWF0aGVyU2VjdGlvbigpO1xufSk7XG4iLCJpbXBvcnQgd2VhdGhlckljb24gZnJvbSAnLi9hc3NldHMvd2VhdGhlci1pY29uLnN2Zyc7XG5pbXBvcnQgaW5pdGlhbGlzZVdlYXRoZXJTZWN0aW9uIGZyb20gJy4vdG9kYXktd2VhdGhlcic7XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVVuaXRCdXR0b24oYnV0dG9uKSB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLWNvbnRhaW5lcl9fdW5pdC1idXR0b24nKTtcblxuICBidXR0b25zLmZvckVhY2goKGVhY2hidXR0b24pID0+IHtcbiAgICBpZiAoZWFjaGJ1dHRvbiAhPT0gdGhpcykge1xuICAgICAgZWFjaGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdW5pdC1idXR0b24nKTtcbiAgICB9XG4gIH0pO1xuXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdW5pdC1idXR0b24nKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU2VhcmNoKCkge1xuICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJhcicpO1xuXG4gIGNvbnN0IHNlYXJjaFRlcm0gPSBpbnB1dEVsZW1lbnQudmFsdWUudHJpbSgpO1xuXG4gIGlmIChzZWFyY2hUZXJtICE9PSAnJykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmVsaW1sb2NhdGlvbicsIHNlYXJjaFRlcm0pO1xuICAgIGluaXRpYWxpc2VXZWF0aGVyU2VjdGlvbigpO1xuICAgIGlucHV0RWxlbWVudC52YWx1ZSA9ICcnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU5hdmJhcigpIHtcbiAgY29uc3Qgd2VhdGhlckxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgd2VhdGhlckxvZ28uc3JjID0gd2VhdGhlckljb247XG4gIHdlYXRoZXJMb2dvLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLWNvbnRhaW5lcl9fd2VhdGhlci1sb2dvJyk7XG5cbiAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGVmdC1uYXZfX2ltYWdlLWNvbnRhaW5lcicpO1xuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyTG9nbyk7XG5cbiAgY29uc3QgaWNvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLW1hZ25pZnlpbmctZ2xhc3MnKTtcbiAgaWNvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdzZWFyY2hiYXJpY29uJyk7XG5cbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1jb250YWluZXJfX3NlYXJjaC1pY29uJyk7XG4gIHNlYXJjaEljb24uYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xuICBzZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2VhcmNoKTtcblxuICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1jb250YWluZXJfX3NlYXJjaC1iYXInKTtcbiAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhcmNoLWJhcicpO1xuICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWFyY2ggbG9jYXRpb24uLi4nKTtcbiAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaGFuZGxlU2VhcmNoKCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1iYXItY29udGFpbmVyX19zZWFyY2gtY29udGFpbmVyJyk7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtZW50KTtcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xuXG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1iYXItY29udGFpbmVyX19lcnJvci1tZXNzYWdlJyk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvcGVyYXRvci1saW5lYnJlYWtcbiAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID1cbiAgICAnTG9jYXRpb24gaXMgbm90IHZhbGlkLiBQbGVhc2UgZW50ZXIgYSB2YWxpZCBsb2NhdGlvbi4nO1xuICBlcnJvck1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdlcnJvcm1lc3NhZ2UnKTtcbiAgZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgY29uc3QgZXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZXJyb3JDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJhci1jb250YWluZXJfX2Vycm9yLWNvbnRhaW5lcicpO1xuICBlcnJvckNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xuXG4gIGNvbnN0IHNlYXJjaEJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWFyY2hCYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGVmdC1uYXZfX3NlYXJjaC1iYXItY29udGFpbmVyJyk7XG4gIHNlYXJjaEJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xuICBzZWFyY2hCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JDb250YWluZXIpO1xuXG4gIGNvbnN0IGxlZnROYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGVmdE5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYXZfX2xlZnQtbmF2Jyk7XG4gIGxlZnROYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuICBsZWZ0TmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEJhckNvbnRhaW5lcik7XG5cbiAgY29uc3QgY2VsY2l1c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjZWxjaXVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXG4gICAgJ2J1dHRvbi1jb250YWluZXJfX3VuaXQtYnV0dG9uJyxcbiAgICAnYnV0dG9uLWNvbnRhaW5lci0tY2VsY2l1cy1idXR0b24nLFxuICAgICdhY3RpdmUtdW5pdC1idXR0b24nLFxuICApO1xuICBjZWxjaXVzQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2VsY2l1cycpO1xuICBjZWxjaXVzQnV0dG9uLnRleHRDb250ZW50ID0gJ8KwQyxtbSxrcGgnO1xuICBjZWxjaXVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZVVuaXRCdXR0b24oY2VsY2l1c0J1dHRvbik7XG4gICAgaW5pdGlhbGlzZVdlYXRoZXJTZWN0aW9uKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGZhaHJlbmhlaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZmFocmVuaGVpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFxuICAgICdidXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbicsXG4gICAgJ2J1dHRvbi1jb250YWluZXItLWZhaHJlbmhlaXQtYnV0dG9uJyxcbiAgKTtcbiAgZmFocmVuaGVpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZhaHJlbmhlaXQnKTtcbiAgZmFocmVuaGVpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICfCsEYsaW4sbXBoJztcbiAgZmFocmVuaGVpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBzZXRBY3RpdmVVbml0QnV0dG9uKGZhaHJlbmhlaXRCdXR0b24pO1xuICAgIGluaXRpYWxpc2VXZWF0aGVyU2VjdGlvbigpO1xuICB9KTtcblxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LW5hdl9fYnV0dG9uLWNvbnRhaW5lcicpO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2VsY2l1c0J1dHRvbik7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmYWhyZW5oZWl0QnV0dG9uKTtcblxuICBjb25zdCByaWdodE5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByaWdodE5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYXZfX3JpZ2h0LW5hdicpO1xuICByaWdodE5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG4gIG5hdi5hcHBlbmRDaGlsZChsZWZ0TmF2Q29udGFpbmVyKTtcbiAgbmF2LmFwcGVuZENoaWxkKHJpZ2h0TmF2Q29udGFpbmVyKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCBmZXRjaFdlYXRoZXJEYXRhIGZyb20gJy4vd2VhdGhlcmFwaS1jYWxscyc7XG5pbXBvcnQgZm9ybWF0RGF0ZVRvSHVtYW5SZWFkYWJsZSBmcm9tICcuL2RhdGUtYWRqdXN0JztcblxuZnVuY3Rpb24gY3JlYXRlVGV4dEVsZW1lbnQoY2xhc3NOYW1lLCB0ZXh0Q29udGVudCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSWNvbkVsZW1lbnQoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzTmFtZSk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCB3ZWF0aGVySWNvbnMgPSB7XG4gIFN1bm55OiAnZmEtc29saWQgZmEtc3VuJyxcbiAgQ2xlYXI6ICdmYS1zb2xpZCBmYS1tb29uJyxcbiAgJ1BhcnRseSBjbG91ZHknOiAnZmEtc29saWQgZmEtY2xvdWQnLFxuICBDbG91ZHk6ICdmYS1zb2xpZCBmYS1jbG91ZCcsXG4gIE92ZXJjYXN0OiAnZmEtc29saWQgZmEtY2xvdWQnLFxuICBNaXN0OiAnZmEtc29saWQgZmEtc21vZycsXG4gICdQYXRjaHkgcmFpbiBwb3NzaWJsZSc6ICdmYS1zb2xpZCBmYS1jbG91ZC1yYWluJyxcbiAgJ1BhdGNoeSBzbm93IHBvc3NpYmxlJzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ1BhdGNoeSBzbGVldCBwb3NzaWJsZSc6ICdmYS1yZWd1bGFyIGZhLXNub3dmbGFrZScsXG4gICdQYXRjaHkgZnJlZXppbmcgZHJpenpsZSBwb3NzaWJsZSc6ICdmYS1zb2xpZCBmYS1jbG91ZC1yYWluJyxcbiAgJ1RodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZSc6ICdmYS1zb2xpZCBmYS1jbG91ZC1ib2x0JyxcbiAgJ0Jsb3dpbmcgc25vdyc6ICdmYS1zb2xpZCBmYS13aW5kJyxcbiAgQmxpenphcmQ6ICdmYS1zb2xpZCBmYS13aW5kJyxcbiAgRm9nOiAnZmEtc29saWQgZmEtc21vZycsXG4gICdGcmVlemluZyBmb2cnOiAnZmEtc29saWQgZmEtc21vZycsXG4gICdQYXRjaHkgbGlnaHQgZHJpenpsZSc6ICdmYS1zb2xpZCBmYS1jbG91ZC1yYWluJyxcbiAgJ0xpZ2h0IGRyaXp6bGUnOiAnZmEtc29saWQgZmEtY2xvdWQtcmFpbicsXG4gICdGcmVlemluZyBkcml6emxlJzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ0hlYXZ5IGZyZWV6aW5nIGRyaXp6bGUnOiAnZmEtcmVndWxhciBmYS1zbm93Zmxha2UnLFxuICAnUGF0Y2h5IGxpZ2h0IHJhaW4nOiAnZmEtc29saWQgZmEtY2xvdWQtcmFpbicsXG4gICdMaWdodCByYWluJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXJhaW4nLFxuICAnTW9kZXJhdGUgcmFpbiBhdCB0aW1lcyc6ICdmYS1zb2xpZCBmYS1jbG91ZC1yYWluJyxcbiAgJ01vZGVyYXRlIHJhaW4nOiAnZmEtc29saWQgZmEtY2xvdWQtcmFpbicsXG4gICdIZWF2eSByYWluIGF0IHRpbWVzJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXNob3dlcnMtaGVhdnknLFxuICAnSGVhdnkgcmFpbic6ICdmYS1zb2xpZCBmYS1jbG91ZC1zaG93ZXJzLWhlYXZ5JyxcbiAgJ0xpZ2h0IGZyZWV6aW5nIHJhaW4nOiAnZmEtc29saWQgZmEtY2xvdWQtcmFpbicsXG4gICdNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluJzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ0xpZ2h0IHNsZWV0JzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ01vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0JzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ1BhdGNoeSBsaWdodCBzbm93JzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ0xpZ2h0IHNub3cnOiAnZmEtcmVndWxhciBmYS1zbm93Zmxha2UnLFxuICAnUGF0Y2h5IG1vZGVyYXRlIHNub3cnOiAnZmEtcmVndWxhciBmYS1zbm93Zmxha2UnLFxuICAnTW9kZXJhdGUgc25vdyc6ICdmYS1yZWd1bGFyIGZhLXNub3dmbGFrZScsXG4gICdQYXRjaHkgaGVhdnkgc25vdyc6ICdmYS1zb2xpZCBmYS1jbG91ZC1zaG93ZXJzLWhlYXZ5JyxcbiAgJ0hlYXZ5IHNub3cnOiAnZmEtc29saWQgZmEtY2xvdWQtc2hvd2Vycy1oZWF2eScsXG4gICdJY2UgcGVsbGV0cyc6ICdmYS1zb2xpZCBmYS1zbm93Zmxha2UnLFxuICAnTGlnaHQgcmFpbiBzaG93ZXInOiAnZmEtc29saWQgZmEtY2xvdWQtc2hvd2Vycy1oZWF2eScsXG4gICdNb2RlcmF0ZSBvciBoZWF2eSByYWluIHNob3dlcic6ICdmYS1zb2xpZCBmYS1jbG91ZC1zaG93ZXJzLWhlYXZ5JyxcbiAgJ1RvcnJlbnRpYWwgcmFpbiBzaG93ZXInOiAnZmEtc29saWQgZmEtY2xvdWQtc2hvd2Vycy1oZWF2eScsXG4gICdMaWdodCBzbGVldCBzaG93ZXJzJzogJ2ZhLXNvbGlkIGZhLXNub3dmbGFrZScsXG4gICdNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXNob3dlcnMtaGVhdnknLFxuICAnTGlnaHQgc25vdyBzaG93ZXJzJzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ01vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vycyc6ICdmYS1yZWd1bGFyIGZhLXNub3dmbGFrZScsXG4gICdMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXJhaW4nLFxuICAnTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0cyc6ICdmYS1zb2xpZCBmYS1zaG93ZXJzLWhlYXZ5JyxcbiAgJ1BhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlcic6ICdmYS1zb2xpZCBmYS1jbG91ZC1ib2x0JyxcbiAgJ01vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLWJvbHQnLFxuICAnUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLWJvbHQnLFxuICAnTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXInOiAnZmEtc29saWQgZmEtY2xvdWQtYm9sdCcsXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDYXJkKFxuICB0aW1lV2l0aG91dERhdGUsXG4gIHdlYXRoZXJUZXh0LFxuICB0ZW1wZXJhdHVyZSxcbiAgaXNmYWhyZW5oZWl0LFxuICBpc0NlbGNpdXMsXG4pIHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1waWxsX19jYXJkJyk7XG5cbiAgY29uc3QgdGltZUVsZW1lbnQgPSBjcmVhdGVUZXh0RWxlbWVudCgnY2FyZF9fdGltZScsIHRpbWVXaXRob3V0RGF0ZSk7XG4gIGNvbnN0IGljb25FbGVtZW50ID0gY3JlYXRlSWNvbkVsZW1lbnQod2VhdGhlckljb25zW3dlYXRoZXJUZXh0XSk7XG4gIGljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2ljb24nKTtcbiAgY29uc3QgdGVtcGVyYXR1cmVFbGVtZW50ID0gY3JlYXRlVGV4dEVsZW1lbnQoXG4gICAgJ2NhcmRfX3RlbXBlcmF0dXJlJyxcbiAgICBgJHt0ZW1wZXJhdHVyZX3CsGAsXG4gICk7XG5cbiAgaWYgKGlzZmFocmVuaGVpdCkge1xuICAgIHRlbXBlcmF0dXJlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3RlbXBlcmF0dXJlfcKwRmA7XG4gIH0gZWxzZSBpZiAoaXNDZWxjaXVzKSB7XG4gICAgdGVtcGVyYXR1cmVFbGVtZW50LnRleHRDb250ZW50ID0gYCR7dGVtcGVyYXR1cmV9wrBDYDtcbiAgfVxuXG4gIGNhcmQuYXBwZW5kQ2hpbGQodGltZUVsZW1lbnQpO1xuICBjYXJkLmFwcGVuZENoaWxkKGljb25FbGVtZW50KTtcbiAgY2FyZC5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZUVsZW1lbnQpO1xuXG4gIHJldHVybiBjYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGF0Q2FyZChzdGF0LCB0aXRsZSwgaWNvbiwgYW5nbGUgPSAnJykge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnc3RhdHMtd2VhdGhlci1zZWN0aW9uX19zdGF0LWNhcmQnKTtcblxuICBjb25zdCBzdGF0Q2FyZFRpdGxlID0gY3JlYXRlVGV4dEVsZW1lbnQoJ3N0YXQtY2FyZF9fdGl0bGUnLCB0aXRsZSk7XG5cbiAgY29uc3Qgc3RhdENhcmRTdGF0ID0gY3JlYXRlVGV4dEVsZW1lbnQoJ3N0YXQtY2FyZF9fc3RhdCcsIHN0YXQpO1xuXG4gIGNvbnN0IGljb25FbGVtZW50ID0gY3JlYXRlSWNvbkVsZW1lbnQoaWNvbik7XG4gIGljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YXQtY2FyZF9faWNvbicpO1xuXG4gIGlmIChhbmdsZSAhPT0gJycpIHtcbiAgICBpY29uRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7YW5nbGV9ZGVnKWA7XG4gIH1cblxuICBjYXJkLmFwcGVuZENoaWxkKHN0YXRDYXJkVGl0bGUpO1xuICBjYXJkLmFwcGVuZENoaWxkKHN0YXRDYXJkU3RhdCk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xuXG4gIHJldHVybiBjYXJkO1xufVxuXG5mdW5jdGlvbiBnZXRXZWVrRGF5KGRhdGVTdHJpbmcpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuXG4gIGNvbnN0IGRheU9mV2Vla051bWJlciA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgY29uc3QgZGF5c09mV2VlayA9IFtcbiAgICAnU3VuZGF5JyxcbiAgICAnTW9uZGF5JyxcbiAgICAnVHVlc2RheScsXG4gICAgJ1dlZG5lc2RheScsXG4gICAgJ1RodXJzZGF5JyxcbiAgICAnRnJpZGF5JyxcbiAgICAnU2F0dXJkYXknLFxuICBdO1xuICBjb25zdCBkYXlPZldlZWtOYW1lID0gZGF5c09mV2Vla1tkYXlPZldlZWtOdW1iZXJdO1xuXG4gIHJldHVybiBkYXlPZldlZWtOYW1lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVcGNvbWluZ1RhYmxlKHdlYXRoZXJEYXRhLCBpc0ZhaHJlbmhlaXQpIHtcbiAgY29uc3QgdXBjb21pbmdEYXRhID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSB7XG4gICAgY29uc3QgZm9yZWNhc3QgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXTtcbiAgICBjb25zdCBkYXlEYXRhID0ge1xuICAgICAgZGF5OiBnZXRXZWVrRGF5KGZvcmVjYXN0LmRhdGUpLFxuICAgICAgZGVzY3JpcHRpb246IGZvcmVjYXN0LmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgIG1heFRlbXBlcmF0dXJlOiBpc0ZhaHJlbmhlaXRcbiAgICAgICAgPyBgJHtmb3JlY2FzdC5kYXkubWF4dGVtcF9mfcKwRmBcbiAgICAgICAgOiBgJHtmb3JlY2FzdC5kYXkubWF4dGVtcF9jfcKwQ2AsXG4gICAgICBtaW5UZW1wZXJhdHVyZTogaXNGYWhyZW5oZWl0XG4gICAgICAgID8gYCR7Zm9yZWNhc3QuZGF5Lm1pbnRlbXBfZn3CsEZgXG4gICAgICAgIDogYCR7Zm9yZWNhc3QuZGF5Lm1pbnRlbXBfY33CsENgLFxuICAgICAgY2hhbmNlT2ZSYWluOiBgJHtmb3JlY2FzdC5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW59JWAsXG4gICAgICBodW1pZGl0eTogYCR7Zm9yZWNhc3QuZGF5LmF2Z2h1bWlkaXR5fSVgLFxuICAgIH07XG5cbiAgICB1cGNvbWluZ0RhdGEucHVzaChkYXlEYXRhKTtcbiAgfVxuXG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgdGFibGUuY2xhc3NMaXN0LmFkZCgndXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZScpO1xuXG4gIGNvbnN0IHRhYmxlSGVhZGVyID0gdGFibGUuY3JlYXRlVEhlYWQoKTtcbiAgY29uc3QgaGVhZGVyUm93ID0gdGFibGVIZWFkZXIuaW5zZXJ0Um93KDApO1xuICBjb25zdCBoZWFkZXJzID0gW1xuICAgICdEYXknLFxuICAgICcnLFxuICAgICdNYXggVGVtcCcsXG4gICAgJ01pbiBUZW1wJyxcbiAgICAnQ2hhbmNlIG9mIFJhaW4nLFxuICAgICdIdW1pZGl0eScsXG4gIF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIHRoLnRleHRDb250ZW50ID0gaGVhZGVyc1tpXTtcbiAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQodGgpO1xuICB9XG5cbiAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcblxuICB1cGNvbWluZ0RhdGEuZm9yRWFjaCgoZGF0YSwgaSkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHRhYmxlQm9keS5pbnNlcnRSb3coKTtcbiAgICBjb25zdCByb3dEYXRhID0gW1xuICAgICAgZGF0YS5kYXksXG4gICAgICBjcmVhdGVJY29uRWxlbWVudCh3ZWF0aGVySWNvbnNbZGF0YS5kZXNjcmlwdGlvbl0pLFxuICAgICAgZGF0YS5tYXhUZW1wZXJhdHVyZSxcbiAgICAgIGRhdGEubWluVGVtcGVyYXR1cmUsXG4gICAgICBkYXRhLmNoYW5jZU9mUmFpbixcbiAgICAgIGRhdGEuaHVtaWRpdHksXG4gICAgXTtcblxuICAgIHJvd0RhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMSkge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaWNvbi1jZWxsJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGkgPT09IHVwY29taW5nRGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICByb3cuY2xhc3NMaXN0LmFkZCgnbGFzdC1yb3cnKTtcbiAgICB9XG4gIH0pO1xuXG4gIHRhYmxlLmFwcGVuZENoaWxkKHRhYmxlQm9keSk7XG5cbiAgcmV0dXJuIHRhYmxlO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0MjRIb3Vyc0RhdGEod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgY3VycmVudExhc3RVcGRhdGVkID0gbmV3IERhdGUod2VhdGhlckRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQpO1xuXG4gIGNvbnN0IGZvcmVjYXN0RGF5MCA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXI7XG4gIGNvbnN0IGZvcmVjYXN0RGF5MSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXI7XG5cbiAgY29uc3QgbmV4dDI0SG91cnMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVjYXN0RGF5MC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGhvdXJEYXRhID0gZm9yZWNhc3REYXkwW2ldO1xuICAgIGNvbnN0IHRoZXRpbWVoZXJlID0gbmV3IERhdGUoaG91ckRhdGEudGltZSk7XG5cbiAgICBpZiAodGhldGltZWhlcmUgLSBjdXJyZW50TGFzdFVwZGF0ZWQgPiAtKDM2MDAgKiAxMDAwKSkge1xuICAgICAgbmV4dDI0SG91cnMucHVzaChob3VyRGF0YSk7XG4gICAgfVxuICAgIGlmIChuZXh0MjRIb3Vycy5sZW5ndGggPj0gMjQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChuZXh0MjRIb3Vycy5sZW5ndGggPCAyNCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3REYXkxLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBob3VyRGF0YSA9IGZvcmVjYXN0RGF5MVtpXTtcblxuICAgICAgbmV4dDI0SG91cnMucHVzaChob3VyRGF0YSk7XG5cbiAgICAgIGlmIChuZXh0MjRIb3Vycy5sZW5ndGggPj0gMjQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5leHQyNEhvdXJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyU2VjdGlvbih3ZWF0aGVyRGF0YSwgaXNmYWhyZW5oZWl0LCBpc0NlbGNpdXMpIHtcbiAgY29uc3QgY3VycmVudFdlYXRoZXIgPSB3ZWF0aGVyRGF0YS5jdXJyZW50O1xuICBjb25zdCBmb3JlY2FzdCA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheTtcblxuICBjb25zdCBsb2NhdGlvbkVsZW1lbnQgPSBjcmVhdGVUZXh0RWxlbWVudChcbiAgICAndGl0bGUtY29udGFpbmVyX19sb2NhdGlvbicsXG4gICAgYCR7d2VhdGhlckRhdGEubG9jYXRpb24ubmFtZSA/IGAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWV9LCBgIDogJyd9JHtcbiAgICAgIHdlYXRoZXJEYXRhLmxvY2F0aW9uLnJlZ2lvbiA/IGAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLnJlZ2lvbn0sIGAgOiAnJ1xuICAgIH0ke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnkgPyB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5IDogJyd9YCxcbiAgKTtcblxuICBjb25zdCBkYXRlVGltZUVsZW1lbnQgPSBjcmVhdGVUZXh0RWxlbWVudChcbiAgICAndGl0bGUtY29udGFpbmVyX19kYXRlLXRpbWUnLFxuICAgIGZvcm1hdERhdGVUb0h1bWFuUmVhZGFibGUod2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lKSxcbiAgKTtcblxuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLXNlY3Rpb25fX3RpdGxlLWNvbnRhaW5lcicpO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkVsZW1lbnQpO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlVGltZUVsZW1lbnQpO1xuXG4gIGNvbnN0IHRvZGF5RGVzY3JpcHRpb24gPSBjcmVhdGVUZXh0RWxlbWVudChcbiAgICAnbWFpbi1waWxsLXRvcF9fdG9kYXktZGVzY3JpcHRpb24nLFxuICAgIGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbi50ZXh0LFxuICApO1xuXG4gIGNvbnN0IHRvZGF5RmVlbHNMaWtlID0gY3JlYXRlVGV4dEVsZW1lbnQoXG4gICAgJ21haW4tcGlsbC10b3BfX3RvZGF5LWZlZWxzLWxpa2UnLFxuICAgIGBGZWVscyBsaWtlICR7XG4gICAgICBpc2ZhaHJlbmhlaXQgPyBjdXJyZW50V2VhdGhlci5mZWVsc2xpa2VfZiA6IGN1cnJlbnRXZWF0aGVyLmZlZWxzbGlrZV9jXG4gICAgfcKwYCxcbiAgKTtcblxuICBjb25zdCBtYWluUGlsbFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluUGlsbFRvcC5jbGFzc0xpc3QuYWRkKCdtYWluLXBpbGxfX21haW4tcGlsbC10b3AnKTtcbiAgbWFpblBpbGxUb3AuYXBwZW5kQ2hpbGQodG9kYXlEZXNjcmlwdGlvbik7XG4gIG1haW5QaWxsVG9wLmFwcGVuZENoaWxkKHRvZGF5RmVlbHNMaWtlKTtcblxuICBjb25zdCB3ZWF0aGVyUGljID0gY3JlYXRlSWNvbkVsZW1lbnQoXG4gICAgd2VhdGhlckljb25zW2N1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbi50ZXh0XSxcbiAgKTtcbiAgd2VhdGhlclBpYy5jbGFzc0xpc3QuYWRkKCdtYWluLXBpbGwtbWlkX193ZWF0aGVyLXBpYycpO1xuXG4gIGNvbnN0IGN1cnJlbnRUZW1wVGV4dCA9IGNyZWF0ZVRleHRFbGVtZW50KFxuICAgICdtYWluLXBpbGwtbWlkX19jdXJyZW50LXRlbXAtdGV4dCcsXG4gICAgYCR7aXNmYWhyZW5oZWl0ID8gY3VycmVudFdlYXRoZXIudGVtcF9mIDogY3VycmVudFdlYXRoZXIudGVtcF9jfcKwYCxcbiAgKTtcblxuICBjb25zdCBtYWluUGlsbE1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluUGlsbE1pZC5jbGFzc0xpc3QuYWRkKCdtYWluLXBpbGxfX21haW4tcGlsbC1taWQnKTtcbiAgbWFpblBpbGxNaWQuYXBwZW5kQ2hpbGQod2VhdGhlclBpYyk7XG4gIG1haW5QaWxsTWlkLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wVGV4dCk7XG5cbiAgY29uc3QgdG9kYXlIaWdoVGV4dCA9IGNyZWF0ZVRleHRFbGVtZW50KFxuICAgICdtYWluLXBpbGwtYm90LS10b2RheS1sb3doaWdoLXRleHQnLFxuICAgIGBIaWdoOiAke2lzZmFocmVuaGVpdCA/IGZvcmVjYXN0Lm1heHRlbXBfZiA6IGZvcmVjYXN0Lm1heHRlbXBfY33CsGAsXG4gICk7XG5cbiAgY29uc3QgdG9kYXlMb3dUZXh0ID0gY3JlYXRlVGV4dEVsZW1lbnQoXG4gICAgJ21haW4tcGlsbC1ib3QtLXRvZGF5LWxvd2hpZ2gtdGV4dCcsXG4gICAgYExvdzogJHtpc2ZhaHJlbmhlaXQgPyBmb3JlY2FzdC5taW50ZW1wX2YgOiBmb3JlY2FzdC5taW50ZW1wX2N9wrBgLFxuICApO1xuXG4gIGNvbnN0IG1haW5QaWxsQm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5QaWxsQm90LmNsYXNzTGlzdC5hZGQoJ21haW4tcGlsbF9fbWFpbi1waWxsLWJvdCcpO1xuICBtYWluUGlsbEJvdC5hcHBlbmRDaGlsZCh0b2RheUhpZ2hUZXh0KTtcbiAgbWFpblBpbGxCb3QuYXBwZW5kQ2hpbGQodG9kYXlMb3dUZXh0KTtcblxuICBjb25zdCBtYWluUGlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluUGlsbC5jbGFzc0xpc3QuYWRkKCd0b2RheS13ZWF0aGVyLXNlY3Rpb25fX21haW4tcGlsbCcpO1xuICBtYWluUGlsbC5hcHBlbmRDaGlsZChtYWluUGlsbFRvcCk7XG4gIG1haW5QaWxsLmFwcGVuZENoaWxkKG1haW5QaWxsTWlkKTtcbiAgbWFpblBpbGwuYXBwZW5kQ2hpbGQobWFpblBpbGxCb3QpO1xuXG4gIGNvbnN0IGhvdXJseVBpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG91cmx5UGlsbC5jbGFzc0xpc3QuYWRkKCd0b2RheS13ZWF0aGVyLXNlY3Rpb25fX2hvdXJseS1waWxsJyk7XG5cbiAgY29uc3QgaG91cmx5RGF0YSA9IGdldE5leHQyNEhvdXJzRGF0YSh3ZWF0aGVyRGF0YSk7XG5cbiAgaG91cmx5RGF0YS5mb3JFYWNoKChob3VyRGF0YSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB0aW1lV2l0aG91dERhdGUgPSBob3VyRGF0YS50aW1lLnNwbGl0KCcgJylbMV07XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBpc2ZhaHJlbmhlaXQgPyBob3VyRGF0YS50ZW1wX2YgOiBob3VyRGF0YS50ZW1wX2M7XG4gICAgY29uc3Qgd2VhdGhlclRleHQgPSBob3VyRGF0YS5jb25kaXRpb24udGV4dDtcblxuICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKFxuICAgICAgdGltZVdpdGhvdXREYXRlLFxuICAgICAgd2VhdGhlclRleHQsXG4gICAgICB0ZW1wZXJhdHVyZSxcbiAgICAgIGlzZmFocmVuaGVpdCxcbiAgICAgIGlzQ2VsY2l1cyxcbiAgICApO1xuXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX190aW1lJykuc3R5bGUuZm9udFdlaWdodCA9ICc2MDAnO1xuICAgIH1cblxuICAgIGhvdXJseVBpbGwuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gIH0pO1xuXG4gIGNvbnN0IHRvZGF5V2VhdGhlclNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kYXlXZWF0aGVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLXNlY3Rpb25fX3RvZGF5LXdlYXRoZXItc2VjdGlvbicpO1xuICB0b2RheVdlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKG1haW5QaWxsKTtcbiAgdG9kYXlXZWF0aGVyU2VjdGlvbi5hcHBlbmRDaGlsZChob3VybHlQaWxsKTtcblxuICBjb25zdCBzdW5yaXNlU3RhdCA9IGNyZWF0ZVN0YXRDYXJkKFxuICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2UsXG4gICAgJ1N1bnJpc2UnLFxuICAgICdmYS1zb2xpZCBmYS1jbG91ZC1zdW4nLFxuICApO1xuXG4gIGNvbnN0IHN1bnNldFN0YXQgPSBjcmVhdGVTdGF0Q2FyZChcbiAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXQsXG4gICAgJ1N1bnNldCcsXG4gICAgJ2ZhLXNvbGlkIGZhLWNsb3VkLW1vb24nLFxuICApO1xuXG4gIGNvbnN0IHdpbmRTdGF0ID0gY3JlYXRlU3RhdENhcmQoXG4gICAgYCR7XG4gICAgICBpc2ZhaHJlbmhlaXRcbiAgICAgICAgPyBgJHtjdXJyZW50V2VhdGhlci53aW5kX21waH0gbXBoYFxuICAgICAgICA6IGAke2N1cnJlbnRXZWF0aGVyLndpbmRfa3BofSBrcGhgXG4gICAgfWAsXG4gICAgJ1dpbmQnLFxuICAgICdmYS1zb2xpZCBmYS13aW5kJyxcbiAgKTtcblxuICBjb25zdCB3aW5kRGlyZWN0aW9uU3RhdCA9IGNyZWF0ZVN0YXRDYXJkKFxuICAgIGN1cnJlbnRXZWF0aGVyLndpbmRfZGlyLFxuICAgICdXaW5kIERpcmVjdGlvbicsXG4gICAgJ2ZhLXNvbGlkIGZhLXVwLWxvbmcnLFxuICAgIGN1cnJlbnRXZWF0aGVyLndpbmRfZGVncmVlLFxuICApO1xuXG4gIGNvbnN0IGh1bWlkaXR5U3RhdCA9IGNyZWF0ZVN0YXRDYXJkKFxuICAgIGAke2N1cnJlbnRXZWF0aGVyLmh1bWlkaXR5fSVgLFxuICAgICdIdW1pZGl0eScsXG4gICAgJ2ZhLXNvbGlkIGZhLWRyb3BsZXQnLFxuICApO1xuXG4gIGNvbnN0IHV2U3RhdCA9IGNyZWF0ZVN0YXRDYXJkKGN1cnJlbnRXZWF0aGVyLnV2LCAnVVYnLCAnZmEtcmVndWxhciBmYS1zdW4nKTtcblxuICBjb25zdCBjaGFuY2VPZlJhaW5TdGF0ID0gY3JlYXRlU3RhdENhcmQoXG4gICAgYCR7d2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWlufSVgLFxuICAgICdDaGFuY2Ugb2YgUmFpbicsXG4gICAgJ2ZhLXNvbGlkIGZhLWNsb3VkLXNob3dlcnMtd2F0ZXInLFxuICApO1xuXG4gIGNvbnN0IHByZWNpcGl0YXRpb25TdGF0ID0gY3JlYXRlU3RhdENhcmQoXG4gICAgYCR7XG4gICAgICBpc2ZhaHJlbmhlaXRcbiAgICAgICAgPyBgJHtjdXJyZW50V2VhdGhlci5wcmVjaXBfaW59IGluY2hlc2BcbiAgICAgICAgOiBgJHtjdXJyZW50V2VhdGhlci5wcmVjaXBfbW19IG1tYFxuICAgIH1gLFxuICAgICdQcmVjaXBpdGF0aW9uJyxcbiAgICAnZmEtc29saWQgZmEtd2F0ZXInLFxuICApO1xuXG4gIGNvbnN0IHN0YXRzV2VhdGhlclNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3RhdHNXZWF0aGVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLXNlY3Rpb25fX3N0YXRzLXdlYXRoZXItc2VjdGlvbicpO1xuICBzdGF0c1dlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKHN1bnJpc2VTdGF0KTtcbiAgc3RhdHNXZWF0aGVyU2VjdGlvbi5hcHBlbmRDaGlsZChzdW5zZXRTdGF0KTtcbiAgc3RhdHNXZWF0aGVyU2VjdGlvbi5hcHBlbmRDaGlsZCh3aW5kU3RhdCk7XG4gIHN0YXRzV2VhdGhlclNlY3Rpb24uYXBwZW5kQ2hpbGQod2luZERpcmVjdGlvblN0YXQpO1xuICBzdGF0c1dlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKGh1bWlkaXR5U3RhdCk7XG4gIHN0YXRzV2VhdGhlclNlY3Rpb24uYXBwZW5kQ2hpbGQodXZTdGF0KTtcbiAgc3RhdHNXZWF0aGVyU2VjdGlvbi5hcHBlbmRDaGlsZChjaGFuY2VPZlJhaW5TdGF0KTtcbiAgc3RhdHNXZWF0aGVyU2VjdGlvbi5hcHBlbmRDaGlsZChwcmVjaXBpdGF0aW9uU3RhdCk7XG5cbiAgY29uc3QgdXBjb21pbmdXZWF0aGVyU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB1cGNvbWluZ1dlYXRoZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXG4gICAgJ3dlYXRoZXItc2VjdGlvbl9fdXBjb21pbmctd2VhdGhlci1zZWN0aW9uJyxcbiAgKTtcbiAgdXBjb21pbmdXZWF0aGVyU2VjdGlvbi5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVVcGNvbWluZ1RhYmxlKHdlYXRoZXJEYXRhLCBpc2ZhaHJlbmhlaXQpLFxuICApO1xuXG4gIGNvbnN0IHdlYXRoZXJTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlYXRoZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItc2VjdGlvbi1jb250YWluZXJfX3dlYXRoZXItc2VjdGlvbicpO1xuICB3ZWF0aGVyU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gIHdlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKHRvZGF5V2VhdGhlclNlY3Rpb24pO1xuICB3ZWF0aGVyU2VjdGlvbi5hcHBlbmRDaGlsZChzdGF0c1dlYXRoZXJTZWN0aW9uKTtcbiAgd2VhdGhlclNlY3Rpb24uYXBwZW5kQ2hpbGQodXBjb21pbmdXZWF0aGVyU2VjdGlvbik7XG5cbiAgY29uc3QgZXhpc3RpbmdXZWF0aGVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy53ZWF0aGVyLXNlY3Rpb24tY29udGFpbmVyX193ZWF0aGVyLXNlY3Rpb24nLFxuICApO1xuXG4gIGlmIChleGlzdGluZ1dlYXRoZXJTZWN0aW9uKSB7XG4gICAgZXhpc3RpbmdXZWF0aGVyU2VjdGlvbi5yZW1vdmUoKTtcbiAgfVxuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLXNlY3Rpb24tY29udGFpbmVyJylcbiAgICAuYXBwZW5kQ2hpbGQod2VhdGhlclNlY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyU2VjdGlvbkNvbnRhaW5lcigpIHtcbiAgY29uc3Qgd2VhdGhlclNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHdlYXRoZXJTZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItc2VjdGlvbi1jb250YWluZXInKTtcblxuICBjb25zdCBleGlzdGluZ1dlYXRoZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLndlYXRoZXItc2VjdGlvbi1jb250YWluZXInLFxuICApO1xuXG4gIGlmIChleGlzdGluZ1dlYXRoZXJTZWN0aW9uKSB7XG4gICAgZXhpc3RpbmdXZWF0aGVyU2VjdGlvbi5yZW1vdmUoKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJTZWN0aW9uQ29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGlzZVdlYXRoZXJTZWN0aW9uKCkge1xuICBjcmVhdGVXZWF0aGVyU2VjdGlvbkNvbnRhaW5lcigpO1xuICBsZXQgaXNmYWhyZW5oZWl0ID0gZmFsc2U7XG4gIGxldCBpc0NlbGNpdXMgPSBmYWxzZTtcblxuICBjb25zdCBhY3RpdmVVbml0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS11bml0LWJ1dHRvbicpO1xuXG4gIGlmIChhY3RpdmVVbml0LmlkID09PSAnZmFocmVuaGVpdCcpIHtcbiAgICBpc2ZhaHJlbmhlaXQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGFjdGl2ZVVuaXQuaWQgPT09ICdjZWxjaXVzJykge1xuICAgIGlzQ2VsY2l1cyA9IHRydWU7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoV2VhdGhlckRhdGEoKTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSByZXN1bHQuZGF0YTtcblxuICAgIGNyZWF0ZVdlYXRoZXJTZWN0aW9uKHdlYXRoZXJEYXRhLCBpc2ZhaHJlbmhlaXQsIGlzQ2VsY2l1cyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgd2VhdGhlciBzZWN0aW9uOicsIGVycm9yKTtcbiAgfVxufVxuIiwiZnVuY3Rpb24gYWRkQWxlcnRUZXh0KCkge1xuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JtZXNzYWdlJyk7XG5cbiAgaWYgKGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxlcnRUZXh0KCkge1xuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JtZXNzYWdlJyk7XG5cbiAgaWYgKGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YSgpIHtcbiAgY29uc3QgcHJlbGltTG9jYXRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJlbGltbG9jYXRpb24nKTtcbiAgdHJ5IHtcbiAgICBjb25zdCBwcmVsaW1pbmFyeVVybCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mMDYyMDhlNGY2MjE0MGRkODQwNTI5MjAyMzEzMDkmcT0ke3ByZWxpbUxvY2F0aW9ufSZkYXlzPTgmYXFpPW5vJmFsZXJ0cz1ub2A7XG5cbiAgICBjb25zdCBwcmVsaW1pbmFyeVJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocHJlbGltaW5hcnlVcmwpO1xuICAgIGNvbnN0IHByZWxpbWluYXJ5RGF0YSA9IGF3YWl0IHByZWxpbWluYXJ5UmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKHByZWxpbWluYXJ5RGF0YS5lcnJvciAmJiBwcmVsaW1pbmFyeURhdGEuZXJyb3IuY29kZSA9PT0gMTAwNikge1xuICAgICAgYWRkQWxlcnRUZXh0KCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZW1vdmVBbGVydFRleHQoKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhdGlvbicsIHByZWxpbUxvY2F0aW9uKTtcbiAgICBjb25zdCBzZXRMb2NhdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhdGlvbicpO1xuXG4gICAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYwNjIwOGU0ZjYyMTQwZGQ4NDA1MjkyMDIzMTMwOSZxPSR7c2V0TG9jYXRpb259JmRheXM9OCZhcWk9bm8mYWxlcnRzPW5vYDtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB7IGRhdGEgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhIGZyb20gdGhlIEFQSTonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==