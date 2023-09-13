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
    console.log(i);
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
    const preliminaryUrl = `http://api.weatherapi.com/v1/forecast.json?key=f06208e4f62140dd84052920231309&q=${prelimLocation}&days=8&aqi=no&alerts=no`;

    const preliminaryResponse = await fetch(preliminaryUrl);
    const preliminaryData = await preliminaryResponse.json();

    if (preliminaryData.error && preliminaryData.error.code === 1006) {
      addAlertText();
      return null;
    }

    removeAlertText();

    localStorage.setItem('location', prelimLocation);
    const setLocation = localStorage.getItem('location');

    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=f06208e4f62140dd84052920231309&q=${setLocation}&days=8&aqi=no&alerts=no`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlIQUF5SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN6TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFh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Y2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRlLWFkanVzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdG9kYXktd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyYXBpLWNhbGxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTg0ZTc3LCAjZDllZDkyKTtcbn1cblxuLm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLm5hdl9fbGVmdC1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5sZWZ0LW5hdl9faW1hZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyX193ZWF0aGVyLWxvZ28ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5sZWZ0LW5hdl9fc2VhcmNoLWJhci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNlYXJjaC1iYXItY29udGFpbmVyX19zZWFyY2gtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5zZWFyY2gtY29udGFpbmVyX19zZWFyY2gtYmFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjc1cztcbiAgd2lkdGg6IDBweDtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xufVxuXG4ubGVmdC1uYXZfX3NlYXJjaC1iYXItY29udGFpbmVyOmhvdmVyIC5zZWFyY2gtY29udGFpbmVyX19zZWFyY2gtYmFyIHtcbiAgd2lkdGg6IDMzNXB4O1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhcjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWljb24ge1xuICBtYXJnaW4tbGVmdDogLTAuNDVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sZWZ0LW5hdl9fc2VhcmNoLWJhci1jb250YWluZXI6aG92ZXIgLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1pY29uIHtcbiAgbWFyZ2luOiAwcmVtO1xufVxuXG4jc2VhcmNoYmFyaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XG59XG5cbiNzZWFyY2hiYXJpY29uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbn1cblxuI3NlYXJjaGJhcmljb246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuI2Vycm9ybWVzc2FnZSB7XG4gIGNvbG9yOiBjcmltc29uO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4ubmF2X19yaWdodC1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lcl9fdW5pdC1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXJfX3VuaXQtYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogNTAlO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lci0tY2VsY2l1cy1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCAxNjAsIDE2NCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDBweCAwcHggNHB4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lci0tZmFocmVuaGVpdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCAxODIsIDE1NCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lcl9fdW5pdC1idXR0b24uYWN0aXZlLXVuaXQtYnV0dG9uIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLndlYXRoZXItc2VjdGlvbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndlYXRoZXItc2VjdGlvbi1jb250YWluZXJfX3dlYXRoZXItc2VjdGlvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53ZWF0aGVyLXNlY3Rpb25fX3RpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDFyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnRpdGxlLWNvbnRhaW5lcl9fbG9jYXRpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnRpdGxlLWNvbnRhaW5lcl9fZGF0ZS10aW1lIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XG59XG5cbi53ZWF0aGVyLXNlY3Rpb25fX3RvZGF5LXdlYXRoZXItc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9fbWFpbi1waWxsIHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ubWFpbi1waWxsLXRvcF9fdG9kYXktZGVzY3JpcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWluLXBpbGwtdG9wX190b2RheS1mZWVscy1saWtlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG4ubWFpbi1waWxsX19tYWluLXBpbGwtbWlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbSAwcmVtO1xuICBnYXA6IDFyZW07XG59XG5cbi5tYWluLXBpbGwtbWlkX193ZWF0aGVyLXBpYyB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbn1cblxuLm1haW4tcGlsbC1taWRfX2N1cnJlbnQtdGVtcC10ZXh0IHtcbiAgZm9udC1zaXplOiA0LjVyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tYWluLXBpbGxfX21haW4tcGlsbC1ib3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ubWFpbi1waWxsLWJvdC0tdG9kYXktbG93aGlnaC10ZXh0IHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cblxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9faG91cmx5LXBpbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4udG9kYXktd2VhdGhlci1zZWN0aW9uX19ob3VybHktcGlsbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMC41cmVtO1xufVxuXG4udG9kYXktd2VhdGhlci1zZWN0aW9uX19ob3VybHktcGlsbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDAuNXJlbTtcbn1cblxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9faG91cmx5LXBpbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmhvdXJseS1waWxsX19jYXJkIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMjVweDtcbiAgcGFkZGluZzogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjVyZW07XG59XG5cbi5jYXJkX190aW1lIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jYXJkX19pY29uIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xufVxuXG4uY2FyZF9fdGVtcGVyYXR1cmUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLndlYXRoZXItc2VjdGlvbl9fc3RhdHMtd2VhdGhlci1zZWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4uc3RhdHMtd2VhdGhlci1zZWN0aW9uX19zdGF0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnN0YXQtY2FyZF9fdGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RhdC1jYXJkX19zdGF0IHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RhdC1jYXJkX19pY29uIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi53ZWF0aGVyLXNlY3Rpb25fX3VwY29taW5nLXdlYXRoZXItc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0aCxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRkIHtcbiAgcGFkZGluZzogMC41cmVtIDIuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG59XG5cbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGJvZHkgPiB0cjpsYXN0LWNoaWxkID4gdGR7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRoIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0ZDpudGgtY2hpbGQoMikge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIC5pY29uLWNlbGwge1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzI1cHgpIHtcbiAgLmxlZnQtbmF2X19pbWFnZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ1cHgpIHtcbiAgLmxlZnQtbmF2X19zZWFyY2gtYmFyLWNvbnRhaW5lcjpob3ZlciAuc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgLm5hdiB7XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICB9XG5cbiAgLm5hdl9fbGVmdC1uYXYge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm5hdl9fcmlnaHQtbmF2IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NzBweCkge1xuICAud2VhdGhlci1zZWN0aW9uX190b2RheS13ZWF0aGVyLXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbiAgfVxuXG4gIC50b2RheS13ZWF0aGVyLXNlY3Rpb25fX2hvdXJseS1waWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDlweCkge1xuICBodG1sIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjJweCkge1xuICAud2VhdGhlci1zZWN0aW9uX19zdGF0cy13ZWF0aGVyLXNlY3Rpb24ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xuICB9XG4gIC50b2RheS13ZWF0aGVyLXNlY3Rpb25fX21haW4tcGlsbCB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDhweCkge1xuICAudXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0aCxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRkIHtcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbn1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQ1cHgpIHtcbiAgLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTNweCkge1xuICAudXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGg6bGFzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzNweCkge1xuICAudXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0ZDpudGgtY2hpbGQoNSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAudXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0aDpudGgtY2hpbGQoNSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDM2cHgpIHtcbiAgLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGg6bnRoLWNoaWxkKDIpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGQge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsVUFB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b3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IDA7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTg0ZTc3LCAjZDllZDkyKTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubmF2X19sZWZ0LW5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmxlZnQtbmF2X19pbWFnZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lcl9fd2VhdGhlci1sb2dvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5sZWZ0LW5hdl9fc2VhcmNoLWJhci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1iYXItY29udGFpbmVyX19zZWFyY2gtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC42cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyX19zZWFyY2gtYmFyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcbiAgd2lkdGg6IDBweDtcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG59XFxuXFxuLmxlZnQtbmF2X19zZWFyY2gtYmFyLWNvbnRhaW5lcjpob3ZlciAuc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhciB7XFxuICB3aWR0aDogMzM1cHg7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyX19zZWFyY2gtYmFyOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IC0wLjQ1cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5sZWZ0LW5hdl9fc2VhcmNoLWJhci1jb250YWluZXI6aG92ZXIgLnNlYXJjaC1jb250YWluZXJfX3NlYXJjaC1pY29uIHtcXG4gIG1hcmdpbjogMHJlbTtcXG59XFxuXFxuI3NlYXJjaGJhcmljb24ge1xcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xcbn1cXG5cXG4jc2VhcmNoYmFyaWNvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbn1cXG5cXG4jc2VhcmNoYmFyaWNvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuI2Vycm9ybWVzc2FnZSB7XFxuICBjb2xvcjogY3JpbXNvbjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nLXRvcDogMC4ycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4ubmF2X19yaWdodC1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXJfX3VuaXQtYnV0dG9uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXItLWNlbGNpdXMtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTIsIDE2MCwgMTY0LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4IDBweCAwcHggNHB4O1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lci0tZmFocmVuaGVpdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwgMTgyLCAxNTQsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHg7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbi5hY3RpdmUtdW5pdC1idXR0b24ge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi53ZWF0aGVyLXNlY3Rpb24tY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLXNlY3Rpb24tY29udGFpbmVyX193ZWF0aGVyLXNlY3Rpb24ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXItc2VjdGlvbl9fdGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi50aXRsZS1jb250YWluZXJfX2xvY2F0aW9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi50aXRsZS1jb250YWluZXJfX2RhdGUtdGltZSB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgcGFkZGluZy10b3A6IDAuMnJlbTtcXG59XFxuXFxuLndlYXRoZXItc2VjdGlvbl9fdG9kYXktd2VhdGhlci1zZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9fbWFpbi1waWxsIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLm1haW4tcGlsbC10b3BfX3RvZGF5LWRlc2NyaXB0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFpbi1waWxsLXRvcF9fdG9kYXktZmVlbHMtbGlrZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4ubWFpbi1waWxsX19tYWluLXBpbGwtbWlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW0gMHJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm1haW4tcGlsbC1taWRfX3dlYXRoZXItcGljIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxufVxcblxcbi5tYWluLXBpbGwtbWlkX19jdXJyZW50LXRlbXAtdGV4dCB7XFxuICBmb250LXNpemU6IDQuNXJlbTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFpbi1waWxsX19tYWluLXBpbGwtYm90IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5tYWluLXBpbGwtYm90LS10b2RheS1sb3doaWdoLXRleHQge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG59XFxuXFxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9faG91cmx5LXBpbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b2RheS13ZWF0aGVyLXNlY3Rpb25fX2hvdXJseS1waWxsOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMC41cmVtO1xcbn1cXG5cXG4udG9kYXktd2VhdGhlci1zZWN0aW9uX19ob3VybHktcGlsbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDAuNXJlbTtcXG59XFxuXFxuLnRvZGF5LXdlYXRoZXItc2VjdGlvbl9faG91cmx5LXBpbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaG91cmx5LXBpbGxfX2NhcmQge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMjVweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmNhcmRfX3RpbWUge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmNhcmRfX2ljb24ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG59XFxuXFxuLmNhcmRfX3RlbXBlcmF0dXJlIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi53ZWF0aGVyLXNlY3Rpb25fX3N0YXRzLXdlYXRoZXItc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4uc3RhdHMtd2VhdGhlci1zZWN0aW9uX19zdGF0LWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc3RhdC1jYXJkX190aXRsZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3RhdC1jYXJkX19zdGF0IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcbiAgbWFyZ2luLXRvcDogLTFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zdGF0LWNhcmRfX2ljb24ge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ud2VhdGhlci1zZWN0aW9uX191cGNvbWluZy13ZWF0aGVyLXNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRoLFxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRkIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAyLjVyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcXG59XFxuXFxuLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGQge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRib2R5ID4gdHI6bGFzdC1jaGlsZCA+IHRke1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGgge1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRkOm50aC1jaGlsZCgyKSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIC5pY29uLWNlbGwge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjVweCkge1xcbiAgLmxlZnQtbmF2X19pbWFnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDVweCkge1xcbiAgLmxlZnQtbmF2X19zZWFyY2gtYmFyLWNvbnRhaW5lcjpob3ZlciAuc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLm5hdiB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICB9XFxuXFxuICAubmF2X19sZWZ0LW5hdiB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5uYXZfX3JpZ2h0LW5hdiB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTcwcHgpIHtcXG4gIC53ZWF0aGVyLXNlY3Rpb25fX3RvZGF5LXdlYXRoZXItc2VjdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICB9XFxuXFxuICAudG9kYXktd2VhdGhlci1zZWN0aW9uX19ob3VybHktcGlsbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDlweCkge1xcbiAgaHRtbCB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MnB4KSB7XFxuICAud2VhdGhlci1zZWN0aW9uX19zdGF0cy13ZWF0aGVyLXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gIH1cXG4gIC50b2RheS13ZWF0aGVyLXNlY3Rpb25fX21haW4tcGlsbCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDhweCkge1xcbiAgLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGgsXFxuLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGQge1xcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcXG59XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0NXB4KSB7XFxuICAudXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUzcHgpIHtcXG4gIC51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRkOmxhc3QtY2hpbGQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGg6bGFzdC1jaGlsZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzM3B4KSB7XFxuICAudXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0ZDpudGgtY2hpbGQoNSkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGg6bnRoLWNoaWxkKDUpIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDM2cHgpIHtcXG4gIC51cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlIHRkOm50aC1jaGlsZCgyKSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAudXBjb21pbmctd2VhdGhlci1zZWN0aW9uX190YWJsZSB0aDpudGgtY2hpbGQoMikge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnVwY29taW5nLXdlYXRoZXItc2VjdGlvbl9fdGFibGUgdGQge1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMHJlbTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGN1c3RvbVJvdW5kKG51bWJlcikge1xuICBpZiAobnVtYmVyIDwgMCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyIC0gMC41KTtcbiAgfVxuICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIgKyAwLjUpO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVUaW1lWm9uZU9mZnNldChsb2NhbFRpbWUpIHtcbiAgY29uc3QgbG9jYWxEYXRlID0gbmV3IERhdGUobG9jYWxUaW1lKTtcblxuICBjb25zdCBjdXJyZW50VXRjVGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgY29uc3QgeWVhciA9IGxvY2FsRGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGRzdFN0YXJ0ID0gbmV3IERhdGUoeWVhciwgMywgMjYpO1xuICBjb25zdCBkc3RFbmQgPSBuZXcgRGF0ZSh5ZWFyLCAxMCwgMjkpO1xuXG4gIGlmIChsb2NhbERhdGUgPj0gZHN0U3RhcnQgJiYgbG9jYWxEYXRlIDwgZHN0RW5kKSB7XG4gICAgY29uc3Qgb2Zmc2V0TWludXRlcyA9IChsb2NhbERhdGUgLSBjdXJyZW50VXRjVGltZSkgLyAoNjAgKiAxMDAwKSArIDYwO1xuICAgIHJldHVybiBjdXN0b21Sb3VuZChvZmZzZXRNaW51dGVzIC8gNjApO1xuICB9XG5cbiAgY29uc3Qgb2Zmc2V0TWludXRlcyA9IChsb2NhbERhdGUgLSBjdXJyZW50VXRjVGltZSkgLyAoNjAgKiAxMDAwKTtcbiAgcmV0dXJuIGN1c3RvbVJvdW5kKG9mZnNldE1pbnV0ZXMgLyA2MCk7XG59XG5cbmZ1bmN0aW9uIGdldERheVN1ZmZpeChkYXkpIHtcbiAgaWYgKGRheSA+PSAxMSAmJiBkYXkgPD0gMTMpIHtcbiAgICByZXR1cm4gJ3RoJztcbiAgfVxuICBzd2l0Y2ggKGRheSAlIDEwKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuICdzdCc7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuICduZCc7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuICdyZCc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAndGgnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhZChudW1iZXIpIHtcbiAgcmV0dXJuIG51bWJlci50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG59XG5cbmZ1bmN0aW9uIGdldFRpbWVab25lQWJicmV2aWF0aW9uKG9mZnNldCkge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/ICcrJyA6ICcnO1xuICByZXR1cm4gYEdNVCR7c2lnbn0ke29mZnNldH1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREYXRlVG9IdW1hblJlYWRhYmxlKGxvY2FsVGltZSkge1xuICBjb25zdCB0aW1lWm9uZU9mZnNldCA9IGNhbGN1bGF0ZVRpbWVab25lT2Zmc2V0KGxvY2FsVGltZSk7XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGxvY2FsVGltZSk7XG5cbiAgY29uc3QgZGF5c09mV2VlayA9IFtcbiAgICAnU3VuZGF5JyxcbiAgICAnTW9uZGF5JyxcbiAgICAnVHVlc2RheScsXG4gICAgJ1dlZG5lc2RheScsXG4gICAgJ1RodXJzZGF5JyxcbiAgICAnRnJpZGF5JyxcbiAgICAnU2F0dXJkYXknLFxuICBdO1xuXG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICAnSmFudWFyeScsXG4gICAgJ0ZlYnJ1YXJ5JyxcbiAgICAnTWFyY2gnLFxuICAgICdBcHJpbCcsXG4gICAgJ01heScsXG4gICAgJ0p1bmUnLFxuICAgICdKdWx5JyxcbiAgICAnQXVndXN0JyxcbiAgICAnU2VwdGVtYmVyJyxcbiAgICAnT2N0b2JlcicsXG4gICAgJ05vdmVtYmVyJyxcbiAgICAnRGVjZW1iZXInLFxuICBdO1xuXG4gIGNvbnN0IGRheU9mV2VlayA9IGRheXNPZldlZWtbZGF0ZS5nZXREYXkoKV07XG4gIGNvbnN0IGRheU9mTW9udGggPSBkYXRlLmdldERhdGUoKTtcbiAgY29uc3QgbW9udGggPSBtb250aHNbZGF0ZS5nZXRNb250aCgpXTtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG5cbiAgbGV0IGFtcG0gPSAnQU0nO1xuICBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICBhbXBtID0gJ1BNJztcbiAgICBpZiAoaG91cnMgPiAxMikge1xuICAgICAgaG91cnMgLT0gMTI7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke2RheU9mV2Vla30sICR7ZGF5T2ZNb250aH0ke2dldERheVN1ZmZpeChcbiAgICBkYXlPZk1vbnRoLFxuICApfSAke21vbnRofSAke3llYXJ9IHwgJHtob3Vyc306JHtwYWQoXG4gICAgbWludXRlcyxcbiAgKX0gJHthbXBtfSAoJHtnZXRUaW1lWm9uZUFiYnJldmlhdGlvbih0aW1lWm9uZU9mZnNldCl9KWA7XG5cbiAgcmV0dXJuIGZvcm1hdHRlZERhdGU7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBvcGVyYXRvci1saW5lYnJlYWsgKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZU5hdmJhciBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgaW5pdGlhbGlzZVdlYXRoZXJTZWN0aW9uIGZyb20gJy4vdG9kYXktd2VhdGhlcic7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNyZWF0ZU5hdmJhcigpO1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByZWxpbWxvY2F0aW9uJykgPT09IG51bGwpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJlbGltbG9jYXRpb24nLCAnbG9uZG9uJyk7XG4gIH0gZWxzZSBpZiAoXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2F0aW9uJykgIT09XG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJlbGltbG9jYXRpb24nKSAmJlxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhdGlvbicpICE9PSAnJ1xuICApIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJlbGltbG9jYXRpb24nLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYXRpb24nKSk7XG4gIH1cbiAgaW5pdGlhbGlzZVdlYXRoZXJTZWN0aW9uKCk7XG59KTtcbiIsImltcG9ydCB3ZWF0aGVySWNvbiBmcm9tICcuL2Fzc2V0cy93ZWF0aGVyLWljb24uc3ZnJztcbmltcG9ydCBpbml0aWFsaXNlV2VhdGhlclNlY3Rpb24gZnJvbSAnLi90b2RheS13ZWF0aGVyJztcblxuZnVuY3Rpb24gc2V0QWN0aXZlVW5pdEJ1dHRvbihidXR0b24pIHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tY29udGFpbmVyX191bml0LWJ1dHRvbicpO1xuXG4gIGJ1dHRvbnMuZm9yRWFjaCgoZWFjaGJ1dHRvbikgPT4ge1xuICAgIGlmIChlYWNoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICBlYWNoYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS11bml0LWJ1dHRvbicpO1xuICAgIH1cbiAgfSk7XG5cbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS11bml0LWJ1dHRvbicpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTZWFyY2goKSB7XG4gIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyJyk7XG5cbiAgY29uc3Qgc2VhcmNoVGVybSA9IGlucHV0RWxlbWVudC52YWx1ZS50cmltKCk7XG5cbiAgaWYgKHNlYXJjaFRlcm0gIT09ICcnKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByZWxpbWxvY2F0aW9uJywgc2VhcmNoVGVybSk7XG4gICAgaW5pdGlhbGlzZVdlYXRoZXJTZWN0aW9uKCk7XG4gICAgaW5wdXRFbGVtZW50LnZhbHVlID0gJyc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTmF2YmFyKCkge1xuICBjb25zdCB3ZWF0aGVyTG9nbyA9IG5ldyBJbWFnZSgpO1xuICB3ZWF0aGVyTG9nby5zcmMgPSB3ZWF0aGVySWNvbjtcbiAgd2VhdGhlckxvZ28uY2xhc3NMaXN0LmFkZCgnaW1hZ2UtY29udGFpbmVyX193ZWF0aGVyLWxvZ28nKTtcblxuICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsZWZ0LW5hdl9faW1hZ2UtY29udGFpbmVyJyk7XG4gIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJMb2dvKTtcblxuICBjb25zdCBpY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgaWNvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtbWFnbmlmeWluZy1nbGFzcycpO1xuICBpY29uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlYXJjaGJhcmljb24nKTtcblxuICBjb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlYXJjaEljb24uY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWljb24nKTtcbiAgc2VhcmNoSWNvbi5hcHBlbmRDaGlsZChpY29uRWxlbWVudCk7XG4gIHNlYXJjaEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTZWFyY2gpO1xuXG4gIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWNvbnRhaW5lcl9fc2VhcmNoLWJhcicpO1xuICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdzZWFyY2gtYmFyJyk7XG4gIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaCBsb2NhdGlvbi4uLicpO1xuICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBoYW5kbGVTZWFyY2goKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJhci1jb250YWluZXJfX3NlYXJjaC1jb250YWluZXInKTtcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RWxlbWVudCk7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XG5cbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJhci1jb250YWluZXJfX2Vycm9yLW1lc3NhZ2UnKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9wZXJhdG9yLWxpbmVicmVha1xuICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPVxuICAgICdMb2NhdGlvbiBpcyBub3QgdmFsaWQuIFBsZWFzZSBlbnRlciBhIHZhbGlkIGxvY2F0aW9uLic7XG4gIGVycm9yTWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Vycm9ybWVzc2FnZScpO1xuICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBjb25zdCBlcnJvckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYmFyLWNvbnRhaW5lcl9fZXJyb3ItY29udGFpbmVyJyk7XG4gIGVycm9yQ29udGFpbmVyLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7XG5cbiAgY29uc3Qgc2VhcmNoQmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlYXJjaEJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsZWZ0LW5hdl9fc2VhcmNoLWJhci1jb250YWluZXInKTtcbiAgc2VhcmNoQmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XG4gIHNlYXJjaEJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvckNvbnRhaW5lcik7XG5cbiAgY29uc3QgbGVmdE5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZWZ0TmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdl9fbGVmdC1uYXYnKTtcbiAgbGVmdE5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XG4gIGxlZnROYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyQ29udGFpbmVyKTtcblxuICBjb25zdCBjZWxjaXVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNlbGNpdXNCdXR0b24uY2xhc3NMaXN0LmFkZChcbiAgICAnYnV0dG9uLWNvbnRhaW5lcl9fdW5pdC1idXR0b24nLFxuICAgICdidXR0b24tY29udGFpbmVyLS1jZWxjaXVzLWJ1dHRvbicsXG4gICAgJ2FjdGl2ZS11bml0LWJ1dHRvbicsXG4gICk7XG4gIGNlbGNpdXNCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjZWxjaXVzJyk7XG4gIGNlbGNpdXNCdXR0b24udGV4dENvbnRlbnQgPSAnwrBDLG1tLGtwaCc7XG4gIGNlbGNpdXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlVW5pdEJ1dHRvbihjZWxjaXVzQnV0dG9uKTtcbiAgICBpbml0aWFsaXNlV2VhdGhlclNlY3Rpb24oKTtcbiAgfSk7XG5cbiAgY29uc3QgZmFocmVuaGVpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBmYWhyZW5oZWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXG4gICAgJ2J1dHRvbi1jb250YWluZXJfX3VuaXQtYnV0dG9uJyxcbiAgICAnYnV0dG9uLWNvbnRhaW5lci0tZmFocmVuaGVpdC1idXR0b24nLFxuICApO1xuICBmYWhyZW5oZWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZmFocmVuaGVpdCcpO1xuICBmYWhyZW5oZWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ8KwRixpbixtcGgnO1xuICBmYWhyZW5oZWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZVVuaXRCdXR0b24oZmFocmVuaGVpdEJ1dHRvbik7XG4gICAgaW5pdGlhbGlzZVdlYXRoZXJTZWN0aW9uKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncmlnaHQtbmF2X19idXR0b24tY29udGFpbmVyJyk7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxjaXVzQnV0dG9uKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGZhaHJlbmhlaXRCdXR0b24pO1xuXG4gIGNvbnN0IHJpZ2h0TmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJpZ2h0TmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdl9fcmlnaHQtbmF2Jyk7XG4gIHJpZ2h0TmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcbiAgbmF2LmFwcGVuZENoaWxkKGxlZnROYXZDb250YWluZXIpO1xuICBuYXYuYXBwZW5kQ2hpbGQocmlnaHROYXZDb250YWluZXIpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdik7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IGZldGNoV2VhdGhlckRhdGEgZnJvbSAnLi93ZWF0aGVyYXBpLWNhbGxzJztcbmltcG9ydCBmb3JtYXREYXRlVG9IdW1hblJlYWRhYmxlIGZyb20gJy4vZGF0ZS1hZGp1c3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0RWxlbWVudChjbGFzc05hbWUsIHRleHRDb250ZW50KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJY29uRWxlbWVudChjbGFzc05hbWUpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IHdlYXRoZXJJY29ucyA9IHtcbiAgU3Vubnk6ICdmYS1zb2xpZCBmYS1zdW4nLFxuICBDbGVhcjogJ2ZhLXNvbGlkIGZhLW1vb24nLFxuICAnUGFydGx5IGNsb3VkeSc6ICdmYS1zb2xpZCBmYS1jbG91ZCcsXG4gIENsb3VkeTogJ2ZhLXNvbGlkIGZhLWNsb3VkJyxcbiAgT3ZlcmNhc3Q6ICdmYS1zb2xpZCBmYS1jbG91ZCcsXG4gIE1pc3Q6ICdmYS1zb2xpZCBmYS1zbW9nJyxcbiAgJ1BhdGNoeSByYWluIHBvc3NpYmxlJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXJhaW4nLFxuICAnUGF0Y2h5IHNub3cgcG9zc2libGUnOiAnZmEtcmVndWxhciBmYS1zbm93Zmxha2UnLFxuICAnUGF0Y2h5IHNsZWV0IHBvc3NpYmxlJzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ1BhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXJhaW4nLFxuICAnVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLWJvbHQnLFxuICAnQmxvd2luZyBzbm93JzogJ2ZhLXNvbGlkIGZhLXdpbmQnLFxuICBCbGl6emFyZDogJ2ZhLXNvbGlkIGZhLXdpbmQnLFxuICBGb2c6ICdmYS1zb2xpZCBmYS1zbW9nJyxcbiAgJ0ZyZWV6aW5nIGZvZyc6ICdmYS1zb2xpZCBmYS1zbW9nJyxcbiAgJ1BhdGNoeSBsaWdodCBkcml6emxlJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXJhaW4nLFxuICAnTGlnaHQgZHJpenpsZSc6ICdmYS1zb2xpZCBmYS1jbG91ZC1yYWluJyxcbiAgJ0ZyZWV6aW5nIGRyaXp6bGUnOiAnZmEtcmVndWxhciBmYS1zbm93Zmxha2UnLFxuICAnSGVhdnkgZnJlZXppbmcgZHJpenpsZSc6ICdmYS1yZWd1bGFyIGZhLXNub3dmbGFrZScsXG4gICdQYXRjaHkgbGlnaHQgcmFpbic6ICdmYS1zb2xpZCBmYS1jbG91ZC1yYWluJyxcbiAgJ0xpZ2h0IHJhaW4nOiAnZmEtc29saWQgZmEtY2xvdWQtcmFpbicsXG4gICdNb2RlcmF0ZSByYWluIGF0IHRpbWVzJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXJhaW4nLFxuICAnTW9kZXJhdGUgcmFpbic6ICdmYS1zb2xpZCBmYS1jbG91ZC1yYWluJyxcbiAgJ0hlYXZ5IHJhaW4gYXQgdGltZXMnOiAnZmEtc29saWQgZmEtY2xvdWQtc2hvd2Vycy1oZWF2eScsXG4gICdIZWF2eSByYWluJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXNob3dlcnMtaGVhdnknLFxuICAnTGlnaHQgZnJlZXppbmcgcmFpbic6ICdmYS1zb2xpZCBmYS1jbG91ZC1yYWluJyxcbiAgJ01vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW4nOiAnZmEtcmVndWxhciBmYS1zbm93Zmxha2UnLFxuICAnTGlnaHQgc2xlZXQnOiAnZmEtcmVndWxhciBmYS1zbm93Zmxha2UnLFxuICAnTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQnOiAnZmEtcmVndWxhciBmYS1zbm93Zmxha2UnLFxuICAnUGF0Y2h5IGxpZ2h0IHNub3cnOiAnZmEtcmVndWxhciBmYS1zbm93Zmxha2UnLFxuICAnTGlnaHQgc25vdyc6ICdmYS1yZWd1bGFyIGZhLXNub3dmbGFrZScsXG4gICdQYXRjaHkgbW9kZXJhdGUgc25vdyc6ICdmYS1yZWd1bGFyIGZhLXNub3dmbGFrZScsXG4gICdNb2RlcmF0ZSBzbm93JzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ1BhdGNoeSBoZWF2eSBzbm93JzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXNob3dlcnMtaGVhdnknLFxuICAnSGVhdnkgc25vdyc6ICdmYS1zb2xpZCBmYS1jbG91ZC1zaG93ZXJzLWhlYXZ5JyxcbiAgJ0ljZSBwZWxsZXRzJzogJ2ZhLXNvbGlkIGZhLXNub3dmbGFrZScsXG4gICdMaWdodCByYWluIHNob3dlcic6ICdmYS1zb2xpZCBmYS1jbG91ZC1zaG93ZXJzLWhlYXZ5JyxcbiAgJ01vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLXNob3dlcnMtaGVhdnknLFxuICAnVG9ycmVudGlhbCByYWluIHNob3dlcic6ICdmYS1zb2xpZCBmYS1jbG91ZC1zaG93ZXJzLWhlYXZ5JyxcbiAgJ0xpZ2h0IHNsZWV0IHNob3dlcnMnOiAnZmEtc29saWQgZmEtc25vd2ZsYWtlJyxcbiAgJ01vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0IHNob3dlcnMnOiAnZmEtc29saWQgZmEtY2xvdWQtc2hvd2Vycy1oZWF2eScsXG4gICdMaWdodCBzbm93IHNob3dlcnMnOiAnZmEtcmVndWxhciBmYS1zbm93Zmxha2UnLFxuICAnTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzJzogJ2ZhLXJlZ3VsYXIgZmEtc25vd2ZsYWtlJyxcbiAgJ0xpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHMnOiAnZmEtc29saWQgZmEtY2xvdWQtcmFpbicsXG4gICdNb2RlcmF0ZSBvciBoZWF2eSBzaG93ZXJzIG9mIGljZSBwZWxsZXRzJzogJ2ZhLXNvbGlkIGZhLXNob3dlcnMtaGVhdnknLFxuICAnUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyJzogJ2ZhLXNvbGlkIGZhLWNsb3VkLWJvbHQnLFxuICAnTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXInOiAnZmEtc29saWQgZmEtY2xvdWQtYm9sdCcsXG4gICdQYXRjaHkgbGlnaHQgc25vdyB3aXRoIHRodW5kZXInOiAnZmEtc29saWQgZmEtY2xvdWQtYm9sdCcsXG4gICdNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlcic6ICdmYS1zb2xpZCBmYS1jbG91ZC1ib2x0Jyxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoXG4gIHRpbWVXaXRob3V0RGF0ZSxcbiAgd2VhdGhlclRleHQsXG4gIHRlbXBlcmF0dXJlLFxuICBpc2ZhaHJlbmhlaXQsXG4gIGlzQ2VsY2l1cyxcbikge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnaG91cmx5LXBpbGxfX2NhcmQnKTtcblxuICBjb25zdCB0aW1lRWxlbWVudCA9IGNyZWF0ZVRleHRFbGVtZW50KCdjYXJkX190aW1lJywgdGltZVdpdGhvdXREYXRlKTtcbiAgY29uc3QgaWNvbkVsZW1lbnQgPSBjcmVhdGVJY29uRWxlbWVudCh3ZWF0aGVySWNvbnNbd2VhdGhlclRleHRdKTtcbiAgaWNvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2FyZF9faWNvbicpO1xuICBjb25zdCB0ZW1wZXJhdHVyZUVsZW1lbnQgPSBjcmVhdGVUZXh0RWxlbWVudChcbiAgICAnY2FyZF9fdGVtcGVyYXR1cmUnLFxuICAgIGAke3RlbXBlcmF0dXJlfcKwYCxcbiAgKTtcblxuICBpZiAoaXNmYWhyZW5oZWl0KSB7XG4gICAgdGVtcGVyYXR1cmVFbGVtZW50LnRleHRDb250ZW50ID0gYCR7dGVtcGVyYXR1cmV9wrBGYDtcbiAgfSBlbHNlIGlmIChpc0NlbGNpdXMpIHtcbiAgICB0ZW1wZXJhdHVyZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt0ZW1wZXJhdHVyZX3CsENgO1xuICB9XG5cbiAgY2FyZC5hcHBlbmRDaGlsZCh0aW1lRWxlbWVudCk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xuICBjYXJkLmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlRWxlbWVudCk7XG5cbiAgcmV0dXJuIGNhcmQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YXRDYXJkKHN0YXQsIHRpdGxlLCBpY29uLCBhbmdsZSA9ICcnKSB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdzdGF0cy13ZWF0aGVyLXNlY3Rpb25fX3N0YXQtY2FyZCcpO1xuXG4gIGNvbnN0IHN0YXRDYXJkVGl0bGUgPSBjcmVhdGVUZXh0RWxlbWVudCgnc3RhdC1jYXJkX190aXRsZScsIHRpdGxlKTtcblxuICBjb25zdCBzdGF0Q2FyZFN0YXQgPSBjcmVhdGVUZXh0RWxlbWVudCgnc3RhdC1jYXJkX19zdGF0Jywgc3RhdCk7XG5cbiAgY29uc3QgaWNvbkVsZW1lbnQgPSBjcmVhdGVJY29uRWxlbWVudChpY29uKTtcbiAgaWNvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhdC1jYXJkX19pY29uJyk7XG5cbiAgaWYgKGFuZ2xlICE9PSAnJykge1xuICAgIGljb25FbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHthbmdsZX1kZWcpYDtcbiAgfVxuXG4gIGNhcmQuYXBwZW5kQ2hpbGQoc3RhdENhcmRUaXRsZSk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoc3RhdENhcmRTdGF0KTtcbiAgY2FyZC5hcHBlbmRDaGlsZChpY29uRWxlbWVudCk7XG5cbiAgcmV0dXJuIGNhcmQ7XG59XG5cbmZ1bmN0aW9uIGdldFdlZWtEYXkoZGF0ZVN0cmluZykge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG5cbiAgY29uc3QgZGF5T2ZXZWVrTnVtYmVyID0gZGF0ZS5nZXREYXkoKTtcblxuICBjb25zdCBkYXlzT2ZXZWVrID0gW1xuICAgICdTdW5kYXknLFxuICAgICdNb25kYXknLFxuICAgICdUdWVzZGF5JyxcbiAgICAnV2VkbmVzZGF5JyxcbiAgICAnVGh1cnNkYXknLFxuICAgICdGcmlkYXknLFxuICAgICdTYXR1cmRheScsXG4gIF07XG4gIGNvbnN0IGRheU9mV2Vla05hbWUgPSBkYXlzT2ZXZWVrW2RheU9mV2Vla051bWJlcl07XG5cbiAgcmV0dXJuIGRheU9mV2Vla05hbWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVwY29taW5nVGFibGUod2VhdGhlckRhdGEsIGlzRmFocmVuaGVpdCkge1xuICBjb25zdCB1cGNvbWluZ0RhdGEgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIHtcbiAgICBjb25zb2xlLmxvZyhpKTtcbiAgICBjb25zdCBmb3JlY2FzdCA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldO1xuICAgIGNvbnN0IGRheURhdGEgPSB7XG4gICAgICBkYXk6IGdldFdlZWtEYXkoZm9yZWNhc3QuZGF0ZSksXG4gICAgICBkZXNjcmlwdGlvbjogZm9yZWNhc3QuZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgbWF4VGVtcGVyYXR1cmU6IGlzRmFocmVuaGVpdFxuICAgICAgICA/IGAke2ZvcmVjYXN0LmRheS5tYXh0ZW1wX2Z9wrBGYFxuICAgICAgICA6IGAke2ZvcmVjYXN0LmRheS5tYXh0ZW1wX2N9wrBDYCxcbiAgICAgIG1pblRlbXBlcmF0dXJlOiBpc0ZhaHJlbmhlaXRcbiAgICAgICAgPyBgJHtmb3JlY2FzdC5kYXkubWludGVtcF9mfcKwRmBcbiAgICAgICAgOiBgJHtmb3JlY2FzdC5kYXkubWludGVtcF9jfcKwQ2AsXG4gICAgICBjaGFuY2VPZlJhaW46IGAke2ZvcmVjYXN0LmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0lYCxcbiAgICAgIGh1bWlkaXR5OiBgJHtmb3JlY2FzdC5kYXkuYXZnaHVtaWRpdHl9JWAsXG4gICAgfTtcblxuICAgIHVwY29taW5nRGF0YS5wdXNoKGRheURhdGEpO1xuICB9XG5cbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICB0YWJsZS5jbGFzc0xpc3QuYWRkKCd1cGNvbWluZy13ZWF0aGVyLXNlY3Rpb25fX3RhYmxlJyk7XG5cbiAgY29uc3QgdGFibGVIZWFkZXIgPSB0YWJsZS5jcmVhdGVUSGVhZCgpO1xuICBjb25zdCBoZWFkZXJSb3cgPSB0YWJsZUhlYWRlci5pbnNlcnRSb3coMCk7XG4gIGNvbnN0IGhlYWRlcnMgPSBbXG4gICAgJ0RheScsXG4gICAgJycsXG4gICAgJ01heCBUZW1wJyxcbiAgICAnTWluIFRlbXAnLFxuICAgICdDaGFuY2Ugb2YgUmFpbicsXG4gICAgJ0h1bWlkaXR5JyxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgdGgudGV4dENvbnRlbnQgPSBoZWFkZXJzW2ldO1xuICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZCh0aCk7XG4gIH1cblxuICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuXG4gIHVwY29taW5nRGF0YS5mb3JFYWNoKChkYXRhLCBpKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gdGFibGVCb2R5Lmluc2VydFJvdygpO1xuICAgIGNvbnN0IHJvd0RhdGEgPSBbXG4gICAgICBkYXRhLmRheSxcbiAgICAgIGNyZWF0ZUljb25FbGVtZW50KHdlYXRoZXJJY29uc1tkYXRhLmRlc2NyaXB0aW9uXSksXG4gICAgICBkYXRhLm1heFRlbXBlcmF0dXJlLFxuICAgICAgZGF0YS5taW5UZW1wZXJhdHVyZSxcbiAgICAgIGRhdGEuY2hhbmNlT2ZSYWluLFxuICAgICAgZGF0YS5odW1pZGl0eSxcbiAgICBdO1xuXG4gICAgcm93RGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAxKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdpY29uLWNlbGwnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaSA9PT0gdXBjb21pbmdEYXRhLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdsYXN0LXJvdycpO1xuICAgIH1cbiAgfSk7XG5cbiAgdGFibGUuYXBwZW5kQ2hpbGQodGFibGVCb2R5KTtcblxuICByZXR1cm4gdGFibGU7XG59XG5cbmZ1bmN0aW9uIGdldE5leHQyNEhvdXJzRGF0YSh3ZWF0aGVyRGF0YSkge1xuICBjb25zdCBjdXJyZW50TGFzdFVwZGF0ZWQgPSBuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZCk7XG5cbiAgY29uc3QgZm9yZWNhc3REYXkwID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cjtcbiAgY29uc3QgZm9yZWNhc3REYXkxID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cjtcblxuICBjb25zdCBuZXh0MjRIb3VycyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3REYXkwLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaG91ckRhdGEgPSBmb3JlY2FzdERheTBbaV07XG4gICAgY29uc3QgdGhldGltZWhlcmUgPSBuZXcgRGF0ZShob3VyRGF0YS50aW1lKTtcblxuICAgIGlmICh0aGV0aW1laGVyZSAtIGN1cnJlbnRMYXN0VXBkYXRlZCA+IC0oMzYwMCAqIDEwMDApKSB7XG4gICAgICBuZXh0MjRIb3Vycy5wdXNoKGhvdXJEYXRhKTtcbiAgICB9XG4gICAgaWYgKG5leHQyNEhvdXJzLmxlbmd0aCA+PSAyNCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKG5leHQyNEhvdXJzLmxlbmd0aCA8IDI0KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdERheTEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGhvdXJEYXRhID0gZm9yZWNhc3REYXkxW2ldO1xuXG4gICAgICBuZXh0MjRIb3Vycy5wdXNoKGhvdXJEYXRhKTtcblxuICAgICAgaWYgKG5leHQyNEhvdXJzLmxlbmd0aCA+PSAyNCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV4dDI0SG91cnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJTZWN0aW9uKHdlYXRoZXJEYXRhLCBpc2ZhaHJlbmhlaXQsIGlzQ2VsY2l1cykge1xuICBjb25zdCBjdXJyZW50V2VhdGhlciA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gIGNvbnN0IGZvcmVjYXN0ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5O1xuXG4gIGNvbnN0IGxvY2F0aW9uRWxlbWVudCA9IGNyZWF0ZVRleHRFbGVtZW50KFxuICAgICd0aXRsZS1jb250YWluZXJfX2xvY2F0aW9uJyxcbiAgICBgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lID8gYCR7d2VhdGhlckRhdGEubG9jYXRpb24ubmFtZX0sIGAgOiAnJ30ke1xuICAgICAgd2VhdGhlckRhdGEubG9jYXRpb24ucmVnaW9uID8gYCR7d2VhdGhlckRhdGEubG9jYXRpb24ucmVnaW9ufSwgYCA6ICcnXG4gICAgfSR7d2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeSA/IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnkgOiAnJ31gLFxuICApO1xuXG4gIGNvbnN0IGRhdGVUaW1lRWxlbWVudCA9IGNyZWF0ZVRleHRFbGVtZW50KFxuICAgICd0aXRsZS1jb250YWluZXJfX2RhdGUtdGltZScsXG4gICAgZm9ybWF0RGF0ZVRvSHVtYW5SZWFkYWJsZSh3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpLFxuICApO1xuXG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItc2VjdGlvbl9fdGl0bGUtY29udGFpbmVyJyk7XG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uRWxlbWVudCk7XG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVUaW1lRWxlbWVudCk7XG5cbiAgY29uc3QgdG9kYXlEZXNjcmlwdGlvbiA9IGNyZWF0ZVRleHRFbGVtZW50KFxuICAgICdtYWluLXBpbGwtdG9wX190b2RheS1kZXNjcmlwdGlvbicsXG4gICAgY3VycmVudFdlYXRoZXIuY29uZGl0aW9uLnRleHQsXG4gICk7XG5cbiAgY29uc3QgdG9kYXlGZWVsc0xpa2UgPSBjcmVhdGVUZXh0RWxlbWVudChcbiAgICAnbWFpbi1waWxsLXRvcF9fdG9kYXktZmVlbHMtbGlrZScsXG4gICAgYEZlZWxzIGxpa2UgJHtcbiAgICAgIGlzZmFocmVuaGVpdCA/IGN1cnJlbnRXZWF0aGVyLmZlZWxzbGlrZV9mIDogY3VycmVudFdlYXRoZXIuZmVlbHNsaWtlX2NcbiAgICB9wrBgLFxuICApO1xuXG4gIGNvbnN0IG1haW5QaWxsVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5QaWxsVG9wLmNsYXNzTGlzdC5hZGQoJ21haW4tcGlsbF9fbWFpbi1waWxsLXRvcCcpO1xuICBtYWluUGlsbFRvcC5hcHBlbmRDaGlsZCh0b2RheURlc2NyaXB0aW9uKTtcbiAgbWFpblBpbGxUb3AuYXBwZW5kQ2hpbGQodG9kYXlGZWVsc0xpa2UpO1xuXG4gIGNvbnN0IHdlYXRoZXJQaWMgPSBjcmVhdGVJY29uRWxlbWVudChcbiAgICB3ZWF0aGVySWNvbnNbY3VycmVudFdlYXRoZXIuY29uZGl0aW9uLnRleHRdLFxuICApO1xuICB3ZWF0aGVyUGljLmNsYXNzTGlzdC5hZGQoJ21haW4tcGlsbC1taWRfX3dlYXRoZXItcGljJyk7XG5cbiAgY29uc3QgY3VycmVudFRlbXBUZXh0ID0gY3JlYXRlVGV4dEVsZW1lbnQoXG4gICAgJ21haW4tcGlsbC1taWRfX2N1cnJlbnQtdGVtcC10ZXh0JyxcbiAgICBgJHtpc2ZhaHJlbmhlaXQgPyBjdXJyZW50V2VhdGhlci50ZW1wX2YgOiBjdXJyZW50V2VhdGhlci50ZW1wX2N9wrBgLFxuICApO1xuXG4gIGNvbnN0IG1haW5QaWxsTWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5QaWxsTWlkLmNsYXNzTGlzdC5hZGQoJ21haW4tcGlsbF9fbWFpbi1waWxsLW1pZCcpO1xuICBtYWluUGlsbE1pZC5hcHBlbmRDaGlsZCh3ZWF0aGVyUGljKTtcbiAgbWFpblBpbGxNaWQuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBUZXh0KTtcblxuICBjb25zdCB0b2RheUhpZ2hUZXh0ID0gY3JlYXRlVGV4dEVsZW1lbnQoXG4gICAgJ21haW4tcGlsbC1ib3QtLXRvZGF5LWxvd2hpZ2gtdGV4dCcsXG4gICAgYEhpZ2g6ICR7aXNmYWhyZW5oZWl0ID8gZm9yZWNhc3QubWF4dGVtcF9mIDogZm9yZWNhc3QubWF4dGVtcF9jfcKwYCxcbiAgKTtcblxuICBjb25zdCB0b2RheUxvd1RleHQgPSBjcmVhdGVUZXh0RWxlbWVudChcbiAgICAnbWFpbi1waWxsLWJvdC0tdG9kYXktbG93aGlnaC10ZXh0JyxcbiAgICBgTG93OiAke2lzZmFocmVuaGVpdCA/IGZvcmVjYXN0Lm1pbnRlbXBfZiA6IGZvcmVjYXN0Lm1pbnRlbXBfY33CsGAsXG4gICk7XG5cbiAgY29uc3QgbWFpblBpbGxCb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpblBpbGxCb3QuY2xhc3NMaXN0LmFkZCgnbWFpbi1waWxsX19tYWluLXBpbGwtYm90Jyk7XG4gIG1haW5QaWxsQm90LmFwcGVuZENoaWxkKHRvZGF5SGlnaFRleHQpO1xuICBtYWluUGlsbEJvdC5hcHBlbmRDaGlsZCh0b2RheUxvd1RleHQpO1xuXG4gIGNvbnN0IG1haW5QaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5QaWxsLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LXdlYXRoZXItc2VjdGlvbl9fbWFpbi1waWxsJyk7XG4gIG1haW5QaWxsLmFwcGVuZENoaWxkKG1haW5QaWxsVG9wKTtcbiAgbWFpblBpbGwuYXBwZW5kQ2hpbGQobWFpblBpbGxNaWQpO1xuICBtYWluUGlsbC5hcHBlbmRDaGlsZChtYWluUGlsbEJvdCk7XG5cbiAgY29uc3QgaG91cmx5UGlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3VybHlQaWxsLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LXdlYXRoZXItc2VjdGlvbl9faG91cmx5LXBpbGwnKTtcblxuICBjb25zdCBob3VybHlEYXRhID0gZ2V0TmV4dDI0SG91cnNEYXRhKHdlYXRoZXJEYXRhKTtcblxuICBob3VybHlEYXRhLmZvckVhY2goKGhvdXJEYXRhLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHRpbWVXaXRob3V0RGF0ZSA9IGhvdXJEYXRhLnRpbWUuc3BsaXQoJyAnKVsxXTtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGlzZmFocmVuaGVpdCA/IGhvdXJEYXRhLnRlbXBfZiA6IGhvdXJEYXRhLnRlbXBfYztcbiAgICBjb25zdCB3ZWF0aGVyVGV4dCA9IGhvdXJEYXRhLmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQoXG4gICAgICB0aW1lV2l0aG91dERhdGUsXG4gICAgICB3ZWF0aGVyVGV4dCxcbiAgICAgIHRlbXBlcmF0dXJlLFxuICAgICAgaXNmYWhyZW5oZWl0LFxuICAgICAgaXNDZWxjaXVzLFxuICAgICk7XG5cbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX3RpbWUnKS5zdHlsZS5mb250V2VpZ2h0ID0gJzYwMCc7XG4gICAgfVxuXG4gICAgaG91cmx5UGlsbC5hcHBlbmRDaGlsZChjYXJkKTtcbiAgfSk7XG5cbiAgY29uc3QgdG9kYXlXZWF0aGVyU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RheVdlYXRoZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItc2VjdGlvbl9fdG9kYXktd2VhdGhlci1zZWN0aW9uJyk7XG4gIHRvZGF5V2VhdGhlclNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpblBpbGwpO1xuICB0b2RheVdlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKGhvdXJseVBpbGwpO1xuXG4gIGNvbnN0IHN1bnJpc2VTdGF0ID0gY3JlYXRlU3RhdENhcmQoXG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZSxcbiAgICAnU3VucmlzZScsXG4gICAgJ2ZhLXNvbGlkIGZhLWNsb3VkLXN1bicsXG4gICk7XG5cbiAgY29uc3Qgc3Vuc2V0U3RhdCA9IGNyZWF0ZVN0YXRDYXJkKFxuICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldCxcbiAgICAnU3Vuc2V0JyxcbiAgICAnZmEtc29saWQgZmEtY2xvdWQtbW9vbicsXG4gICk7XG5cbiAgY29uc3Qgd2luZFN0YXQgPSBjcmVhdGVTdGF0Q2FyZChcbiAgICBgJHtcbiAgICAgIGlzZmFocmVuaGVpdFxuICAgICAgICA/IGAke2N1cnJlbnRXZWF0aGVyLndpbmRfbXBofSBtcGhgXG4gICAgICAgIDogYCR7Y3VycmVudFdlYXRoZXIud2luZF9rcGh9IGtwaGBcbiAgICB9YCxcbiAgICAnV2luZCcsXG4gICAgJ2ZhLXNvbGlkIGZhLXdpbmQnLFxuICApO1xuXG4gIGNvbnN0IHdpbmREaXJlY3Rpb25TdGF0ID0gY3JlYXRlU3RhdENhcmQoXG4gICAgY3VycmVudFdlYXRoZXIud2luZF9kaXIsXG4gICAgJ1dpbmQgRGlyZWN0aW9uJyxcbiAgICAnZmEtc29saWQgZmEtdXAtbG9uZycsXG4gICAgY3VycmVudFdlYXRoZXIud2luZF9kZWdyZWUsXG4gICk7XG5cbiAgY29uc3QgaHVtaWRpdHlTdGF0ID0gY3JlYXRlU3RhdENhcmQoXG4gICAgYCR7Y3VycmVudFdlYXRoZXIuaHVtaWRpdHl9JWAsXG4gICAgJ0h1bWlkaXR5JyxcbiAgICAnZmEtc29saWQgZmEtZHJvcGxldCcsXG4gICk7XG5cbiAgY29uc3QgdXZTdGF0ID0gY3JlYXRlU3RhdENhcmQoY3VycmVudFdlYXRoZXIudXYsICdVVicsICdmYS1yZWd1bGFyIGZhLXN1bicpO1xuXG4gIGNvbnN0IGNoYW5jZU9mUmFpblN0YXQgPSBjcmVhdGVTdGF0Q2FyZChcbiAgICBgJHt3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW59JWAsXG4gICAgJ0NoYW5jZSBvZiBSYWluJyxcbiAgICAnZmEtc29saWQgZmEtY2xvdWQtc2hvd2Vycy13YXRlcicsXG4gICk7XG5cbiAgY29uc3QgcHJlY2lwaXRhdGlvblN0YXQgPSBjcmVhdGVTdGF0Q2FyZChcbiAgICBgJHtcbiAgICAgIGlzZmFocmVuaGVpdFxuICAgICAgICA/IGAke2N1cnJlbnRXZWF0aGVyLnByZWNpcF9pbn0gaW5jaGVzYFxuICAgICAgICA6IGAke2N1cnJlbnRXZWF0aGVyLnByZWNpcF9tbX0gbW1gXG4gICAgfWAsXG4gICAgJ1ByZWNpcGl0YXRpb24nLFxuICAgICdmYS1zb2xpZCBmYS13YXRlcicsXG4gICk7XG5cbiAgY29uc3Qgc3RhdHNXZWF0aGVyU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0c1dlYXRoZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItc2VjdGlvbl9fc3RhdHMtd2VhdGhlci1zZWN0aW9uJyk7XG4gIHN0YXRzV2VhdGhlclNlY3Rpb24uYXBwZW5kQ2hpbGQoc3VucmlzZVN0YXQpO1xuICBzdGF0c1dlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKHN1bnNldFN0YXQpO1xuICBzdGF0c1dlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKHdpbmRTdGF0KTtcbiAgc3RhdHNXZWF0aGVyU2VjdGlvbi5hcHBlbmRDaGlsZCh3aW5kRGlyZWN0aW9uU3RhdCk7XG4gIHN0YXRzV2VhdGhlclNlY3Rpb24uYXBwZW5kQ2hpbGQoaHVtaWRpdHlTdGF0KTtcbiAgc3RhdHNXZWF0aGVyU2VjdGlvbi5hcHBlbmRDaGlsZCh1dlN0YXQpO1xuICBzdGF0c1dlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKGNoYW5jZU9mUmFpblN0YXQpO1xuICBzdGF0c1dlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKHByZWNpcGl0YXRpb25TdGF0KTtcblxuICBjb25zdCB1cGNvbWluZ1dlYXRoZXJTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVwY29taW5nV2VhdGhlclNlY3Rpb24uY2xhc3NMaXN0LmFkZChcbiAgICAnd2VhdGhlci1zZWN0aW9uX191cGNvbWluZy13ZWF0aGVyLXNlY3Rpb24nLFxuICApO1xuICB1cGNvbWluZ1dlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVVwY29taW5nVGFibGUod2VhdGhlckRhdGEsIGlzZmFocmVuaGVpdCksXG4gICk7XG5cbiAgY29uc3Qgd2VhdGhlclNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1zZWN0aW9uLWNvbnRhaW5lcl9fd2VhdGhlci1zZWN0aW9uJyk7XG4gIHdlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgd2VhdGhlclNlY3Rpb24uYXBwZW5kQ2hpbGQodG9kYXlXZWF0aGVyU2VjdGlvbik7XG4gIHdlYXRoZXJTZWN0aW9uLmFwcGVuZENoaWxkKHN0YXRzV2VhdGhlclNlY3Rpb24pO1xuICB3ZWF0aGVyU2VjdGlvbi5hcHBlbmRDaGlsZCh1cGNvbWluZ1dlYXRoZXJTZWN0aW9uKTtcblxuICBjb25zdCBleGlzdGluZ1dlYXRoZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLndlYXRoZXItc2VjdGlvbi1jb250YWluZXJfX3dlYXRoZXItc2VjdGlvbicsXG4gICk7XG5cbiAgaWYgKGV4aXN0aW5nV2VhdGhlclNlY3Rpb24pIHtcbiAgICBleGlzdGluZ1dlYXRoZXJTZWN0aW9uLnJlbW92ZSgpO1xuICB9XG5cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignLndlYXRoZXItc2VjdGlvbi1jb250YWluZXInKVxuICAgIC5hcHBlbmRDaGlsZCh3ZWF0aGVyU2VjdGlvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJTZWN0aW9uQ29udGFpbmVyKCkge1xuICBjb25zdCB3ZWF0aGVyU2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgd2VhdGhlclNlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1zZWN0aW9uLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGV4aXN0aW5nV2VhdGhlclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcud2VhdGhlci1zZWN0aW9uLWNvbnRhaW5lcicsXG4gICk7XG5cbiAgaWYgKGV4aXN0aW5nV2VhdGhlclNlY3Rpb24pIHtcbiAgICBleGlzdGluZ1dlYXRoZXJTZWN0aW9uLnJlbW92ZSgpO1xuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlclNlY3Rpb25Db250YWluZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXNlV2VhdGhlclNlY3Rpb24oKSB7XG4gIGNyZWF0ZVdlYXRoZXJTZWN0aW9uQ29udGFpbmVyKCk7XG4gIGxldCBpc2ZhaHJlbmhlaXQgPSBmYWxzZTtcbiAgbGV0IGlzQ2VsY2l1cyA9IGZhbHNlO1xuXG4gIGNvbnN0IGFjdGl2ZVVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLXVuaXQtYnV0dG9uJyk7XG5cbiAgaWYgKGFjdGl2ZVVuaXQuaWQgPT09ICdmYWhyZW5oZWl0Jykge1xuICAgIGlzZmFocmVuaGVpdCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoYWN0aXZlVW5pdC5pZCA9PT0gJ2NlbGNpdXMnKSB7XG4gICAgaXNDZWxjaXVzID0gdHJ1ZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YSgpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IHJlc3VsdC5kYXRhO1xuXG4gICAgY3JlYXRlV2VhdGhlclNlY3Rpb24od2VhdGhlckRhdGEsIGlzZmFocmVuaGVpdCwgaXNDZWxjaXVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyB3ZWF0aGVyIHNlY3Rpb246JywgZXJyb3IpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBhZGRBbGVydFRleHQoKSB7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvcm1lc3NhZ2UnKTtcblxuICBpZiAoZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVBbGVydFRleHQoKSB7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvcm1lc3NhZ2UnKTtcblxuICBpZiAoZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKCkge1xuICBjb25zdCBwcmVsaW1Mb2NhdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmVsaW1sb2NhdGlvbicpO1xuICB0cnkge1xuICAgIGNvbnN0IHByZWxpbWluYXJ5VXJsID0gYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjA2MjA4ZTRmNjIxNDBkZDg0MDUyOTIwMjMxMzA5JnE9JHtwcmVsaW1Mb2NhdGlvbn0mZGF5cz04JmFxaT1ubyZhbGVydHM9bm9gO1xuXG4gICAgY29uc3QgcHJlbGltaW5hcnlSZXNwb25zZSA9IGF3YWl0IGZldGNoKHByZWxpbWluYXJ5VXJsKTtcbiAgICBjb25zdCBwcmVsaW1pbmFyeURhdGEgPSBhd2FpdCBwcmVsaW1pbmFyeVJlc3BvbnNlLmpzb24oKTtcblxuICAgIGlmIChwcmVsaW1pbmFyeURhdGEuZXJyb3IgJiYgcHJlbGltaW5hcnlEYXRhLmVycm9yLmNvZGUgPT09IDEwMDYpIHtcbiAgICAgIGFkZEFsZXJ0VGV4dCgpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxlcnRUZXh0KCk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYXRpb24nLCBwcmVsaW1Mb2NhdGlvbik7XG4gICAgY29uc3Qgc2V0TG9jYXRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYXRpb24nKTtcblxuICAgIGNvbnN0IGFwaVVybCA9IGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYwNjIwOGU0ZjYyMTQwZGQ4NDA1MjkyMDIzMTMwOSZxPSR7c2V0TG9jYXRpb259JmRheXM9OCZhcWk9bm8mYWxlcnRzPW5vYDtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB7IGRhdGEgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhIGZyb20gdGhlIEFQSTonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==