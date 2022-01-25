/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/app.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/app.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg.jpg */ \"./src/assets/bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  text-decoration: none;\\n  border: 0;\\n  list-style: none;\\n  font-size: 16px;\\n  line-height: 1;\\n}\\n\\nbody {\\n  background-color: #fff;\\n  color: #fff;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Open Sans\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Helvetica Neue\\\", sans-serif;\\n  width: 100%;\\n  height: 100vh;\\n}\\n\\ninput:focus,\\ntextarea:focus,\\nbutton:focus {\\n  outline: none;\\n}\\n\\n.btn {\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Open Sans\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 0.8rem;\\n  padding: 0.4rem 1rem;\\n  cursor: pointer;\\n  background-color: transparent;\\n  border: 1px solid #b3b3b3;\\n  color: #b3b3b3;\\n  transition: 0.3s;\\n  border-radius: 2px;\\n}\\n\\n.btn:hover {\\n  color: #fff;\\n  border: 1px solid #fff;\\n}\\n\\n.btn:focus {\\n  outline: 1px solid #fff;\\n  outline-offset: -1px;\\n}\\n\\n.menu {\\n  outline: none;\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n  padding: 0.4rem 0.4rem 0.3rem;\\n  background-color: #0d0e0e;\\n  display: none;\\n}\\n.menu svg {\\n  fill: #ccc;\\n  position: none;\\n}\\n\\n.menu:hover {\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n}\\n\\n.menu:focus {\\n  outline: 0;\\n}\\n\\n@media (max-width: 700px) {\\n  .menu {\\n    display: block;\\n  }\\n}\\n.overlay {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.9);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  z-index: 1;\\n  border-radius: 0.25rem;\\n  animation: fade-in 0.3s;\\n}\\n\\n.form-wrapper {\\n  overflow-y: auto;\\n  display: flex;\\n  flex-direction: column-reverse;\\n  width: 90%;\\n  max-width: 650px;\\n  max-height: 90%;\\n  animation: zoom-out 0.3s;\\n}\\n\\n.form {\\n  background-color: #0d0e0e;\\n  padding: 1.5rem 1rem;\\n  border-radius: 0.25rem;\\n  max-height: 90%;\\n  z-index: 2;\\n  position: relative;\\n}\\n.form p {\\n  margin-bottom: 0.5rem;\\n  font-weight: 600;\\n}\\n\\n#btn-close-form {\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  background-color: transparent;\\n  padding: 1rem 1rem 0.25rem 1rem;\\n  border: 0;\\n  outline: none;\\n}\\n#btn-close-form svg {\\n  fill: #fff;\\n  width: 15px;\\n  height: 15px;\\n  pointer-events: none;\\n}\\n\\n.form-item {\\n  display: block;\\n}\\n.form-item label {\\n  display: block;\\n  margin-bottom: 0.5rem;\\n  font-weight: 600;\\n}\\n.form-item input {\\n  width: 100%;\\n  margin-bottom: 1rem;\\n  padding: 0.5rem;\\n  background-color: rgba(255, 255, 255, 0.05);\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n  color: #fff;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Open Sans\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Helvetica Neue\\\", sans-serif;\\n}\\n.form-item input:focus {\\n  border: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n\\n#form-item--notes {\\n  min-width: 100%;\\n  max-width: 100%;\\n  min-height: 80px;\\n  margin-bottom: 1rem;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Open Sans\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Helvetica Neue\\\", sans-serif;\\n  padding: 0.5rem;\\n  background-color: rgba(255, 255, 255, 0.05);\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n  color: #fff;\\n  line-height: 1.4;\\n}\\n\\n#form-item--notes:focus {\\n  border: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n\\n.form-group {\\n  display: flex;\\n  flex-wrap: wrap;\\n  column-gap: 2rem;\\n}\\n\\n.left {\\n  flex-grow: 1;\\n}\\n\\n.radio-wrapper {\\n  display: flex;\\n  justify-content: left;\\n  align-items: center;\\n  gap: 1rem;\\n}\\n\\n.radio-item {\\n  display: flex;\\n  align-items: center;\\n  line-height: 1.8;\\n  padding-right: 2rem;\\n}\\n.radio-item input {\\n  width: auto;\\n  margin-top: 0.65rem;\\n  margin-right: 0.3rem;\\n}\\n\\n.checklist {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.checklist input:not(:first-child) {\\n  border-top: 0;\\n  margin-bottom: 0;\\n}\\n\\n.checklist-item {\\n  display: flex;\\n}\\n.checklist-item input {\\n  margin-bottom: 0;\\n}\\n\\n#btn-new-checklist-item {\\n  height: 41px;\\n  aspect-ratio: 1;\\n  font-size: 2rem;\\n  font-weight: 300;\\n  display: flex;\\n  justify-content: center;\\n  align-items: flex-end;\\n  border-radius: 0 0.25rem 0.25rem 0;\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n  padding: 0.4rem 0 0.45rem;\\n  border-left: 0;\\n}\\n#btn-new-checklist-item svg {\\n  pointer-events: none;\\n  fill: #ccc;\\n  width: 15px;\\n  transition: 0.3s;\\n}\\n\\n#btn-new-checklist-item:hover {\\n  border: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n#btn-new-checklist-item:hover svg {\\n  fill: #fff;\\n}\\n\\n#btn-submit-form {\\n  margin: 1rem 0 0;\\n}\\n\\n@keyframes zoom-out {\\n  0% {\\n    opacity: 0;\\n    transform: scale(1.2);\\n  }\\n  100% {\\n    opacity: 1;\\n    transform: scale(1);\\n  }\\n}\\n@keyframes fade-in {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n#header {\\n  padding: 2rem 2rem;\\n  border-bottom: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n\\n.header-title {\\n  display: flex;\\n  flex-wrap: wrap;\\n  position: relative;\\n  width: max-content;\\n  max-width: 60%;\\n  transition: width 0.5s ease-in-out;\\n}\\n\\nh1 {\\n  font-weight: 400;\\n  font-size: 1.8rem;\\n  padding-bottom: 0.5rem;\\n  overflow: hidden;\\n}\\n\\n.tip {\\n  position: absolute;\\n  left: 0;\\n  bottom: -0.8rem;\\n  font-size: 0.8rem;\\n  display: none;\\n  color: #b3b3b3;\\n}\\n\\n#btn-edit-project {\\n  border: 0;\\n  outline: none;\\n  position: absolute;\\n  top: 50%;\\n  transform: translateY(-50%);\\n  right: -3rem;\\n}\\n#btn-edit-project svg {\\n  width: 15px;\\n  fill: #b3b3b3;\\n  padding-bottom: 0.2rem;\\n  transition: 0.3s;\\n}\\n\\n#btn-edit-project:hover {\\n  border: 0;\\n}\\n#btn-edit-project:hover svg {\\n  fill: #fff;\\n  pointer-events: none;\\n}\\n\\n#btn-new-todo {\\n  position: absolute;\\n  right: 2rem;\\n  top: 2rem;\\n  display: flex;\\n  align-items: center;\\n  gap: 0.5rem;\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n  background-color: #000;\\n}\\n#btn-new-todo svg {\\n  fill: #ccc;\\n  width: 10px;\\n  transition: 0.3s;\\n}\\n#btn-new-todo span {\\n  font-size: 1rem;\\n  padding-bottom: 0.1rem;\\n}\\n\\n#btn-new-todo:hover {\\n  background-color: rgba(255, 255, 255, 0.05);\\n  border: 1px solid rgba(179, 179, 179, 0.3);\\n}\\n#btn-new-todo:hover svg {\\n  fill: #fff;\\n}\\n\\n#project-edit-title {\\n  position: absolute;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  font-weight: 400;\\n  font-size: 1.8rem;\\n  padding-bottom: 0.5rem;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Open Sans\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Helvetica Neue\\\", sans-serif;\\n  background-color: transparent;\\n  color: #fff;\\n}\\n\\n.expanded-title {\\n  width: 100%;\\n}\\n\\n#content {\\n  width: 100%;\\n  height: 100%;\\n  min-height: 600px;\\n  padding: 1rem;\\n  display: flex;\\n  gap: 0.5rem;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat;\\n  background-size: cover;\\n  overflow: hidden;\\n}\\n\\n#projects {\\n  width: 320px;\\n  box-shadow: 0 0 5px #080808;\\n  background-color: rgba(13, 14, 14, 0.94);\\n  border-radius: 0.25rem;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.projects--header {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 1.5rem 1rem 1.5rem 1rem;\\n  border-bottom: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n.projects--header h2 {\\n  font-size: 1.5rem;\\n  font-weight: 300;\\n}\\n\\n#btn-new-project {\\n  border: 0;\\n  outline: none;\\n  padding: 0.2rem 0.5rem 0 0;\\n}\\n#btn-new-project svg {\\n  width: 15px;\\n  fill: #b3b3b3;\\n  transition: 0.3s;\\n}\\n\\n#btn-new-project:hover svg {\\n  fill: #fff;\\n}\\n\\n#btn-new-project:focus {\\n  outline: none;\\n}\\n\\n.projects--list {\\n  overflow-y: auto;\\n}\\n\\n.project-item {\\n  display: block;\\n  padding: 0.8rem 1rem;\\n  color: #b3b3b3;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Open Sans\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Helvetica Neue\\\", sans-serif;\\n  z-index: 1000;\\n  word-wrap: break-word;\\n}\\n\\n.project-item:hover {\\n  color: #fff;\\n  transition: 0.3s;\\n}\\n\\n.project-item--active {\\n  background-color: rgba(255, 255, 255, 0.05);\\n  color: #fff;\\n}\\n\\n#new-project-input {\\n  width: 100%;\\n  display: block;\\n  padding: 0.8rem 1rem;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Open Sans\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Helvetica Neue\\\", sans-serif;\\n  animation: slide-down 0.3s;\\n}\\n\\n@keyframes slide-down {\\n  0% {\\n    transform: translateY(-50%);\\n  }\\n  100% {\\n    transform: unset;\\n  }\\n}\\n#todo {\\n  position: relative;\\n  width: calc(100% - 320px);\\n  box-shadow: 0 0 10px #000;\\n  background-color: rgba(13, 14, 14, 0.94);\\n  border-radius: 0.25rem;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.list-container {\\n  overflow-y: auto;\\n}\\n\\n.list-item {\\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\\n  transition: 0.3s;\\n}\\n\\n.basic-info {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-wrap: wrap;\\n  padding: 1rem 2rem 1rem 3rem;\\n  cursor: pointer;\\n}\\n.basic-info div {\\n  display: flex;\\n  flex-direction: column;\\n  min-width: 70%;\\n}\\n.basic-info span {\\n  display: inline-block;\\n}\\n\\n.list-item--title {\\n  line-height: 1.3;\\n  position: relative;\\n}\\n\\n.list-item--priority {\\n  position: absolute;\\n  left: -2rem;\\n  top: 0.3rem;\\n  width: 0.8rem;\\n  aspect-ratio: 1;\\n  border-radius: 100%;\\n}\\n\\n.low-priority {\\n  background-color: #63dd2c;\\n}\\n\\n.normal-priority {\\n  background-color: #ddd22c;\\n}\\n\\n.high-priority {\\n  background-color: #dd2c2c;\\n}\\n\\n.list-item--description {\\n  font-size: 0.8rem;\\n  color: #b3b3b3;\\n  margin: 0.5rem 0;\\n  line-height: 1.3;\\n}\\n\\n.full-info {\\n  padding-left: 3rem;\\n  padding-right: 2rem;\\n  max-height: 0px;\\n  transition: max-height 0.3s ease-in-out;\\n  overflow: hidden;\\n}\\n\\n.list-item__notes--title {\\n  font-weight: 600;\\n  margin-bottom: 0.5rem;\\n}\\n\\n.list-item__notes--text {\\n  line-height: 1.3rem;\\n  font-size: 0.95rem;\\n}\\n\\n.list-item--checklist {\\n  display: flex;\\n  flex-direction: column;\\n  font-size: 0.95rem;\\n  margin: 1rem 0;\\n}\\n.list-item--checklist p {\\n  font-weight: 600;\\n  margin-bottom: 0.5rem;\\n}\\n\\n.list-item__checklist--icon {\\n  min-width: 20px;\\n  max-width: 20px;\\n  aspect-ratio: 1;\\n  background-size: contain;\\n  display: block;\\n  margin-right: 0.5rem;\\n  fill: rgba(255, 255, 255, 0.48);\\n}\\n\\n.list-item__checklist--item {\\n  margin-bottom: 0.5rem;\\n  display: flex;\\n  align-items: center;\\n  position: relative;\\n  font-size: 0.9rem;\\n  line-height: 1.3;\\n}\\n\\n.expanded {\\n  background: #0a0a0a;\\n}\\n\\n@media (max-width: 700px) {\\n  #content {\\n    padding: 0;\\n    flex-wrap: wrap;\\n    position: relative;\\n  }\\n\\n  #projects {\\n    position: absolute;\\n    width: calc(100% - 2rem);\\n    height: calc(100% - 2rem);\\n    z-index: 1;\\n    background: #0d0e0e;\\n    left: -100%;\\n    transition: 0.3s;\\n    border-radius: 0;\\n  }\\n\\n  .projects--header {\\n    padding-top: 1.3rem;\\n    padding-left: 5rem;\\n  }\\n\\n  .hidden {\\n    transform: translateX(calc(100% + 2rem));\\n  }\\n\\n  #todo {\\n    width: 100%;\\n    border-radius: 0;\\n  }\\n\\n  #header {\\n    padding-top: 5rem;\\n    padding-bottom: 1.5rem;\\n  }\\n\\n  .menu {\\n    position: absolute;\\n    top: 1rem;\\n    left: 1rem;\\n  }\\n\\n  #btn-new-todo {\\n    right: 1rem;\\n    top: 1rem;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/app.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/app.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/Form/Form.js":
/*!*************************************!*\
  !*** ./src/components/Form/Form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Form = function () {\n  return `\n    <div class=\"overlay\">\n      <div class=\"form-wrapper\">\n        <form class=\"form\">\n          <div class=\"form-item\">\n            <label for=\"form-item--title\">Title</label>\n            <input type=\"text\" id=\"form-item--title\" name=\"title\" />\n          </div>\n\n          <div class=\"form-item\">\n            <label for=\"form-item--description\">Description</label>\n            <input type=\"text\" id=\"form-item--description\" name=\"description\" />\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-item left\">\n              <label for=\"form-item--date\">Due Date</label>\n              <input type=\"text\" id=\"form-item--date\" name=\"date\" />\n            </div>\n\n            <div class=\"form-item right\">\n              <p>Priority</p>\n              <div class=\"radio-wrapper\">\n                <div class=\"radio-item\">\n                  <input\n                    type=\"radio\"\n                    id=\"form-item--priority-low\"\n                    name=\"priority\"\n                    value=\"low\"\n                  />\n                  <label for=\"form-item--priority-low\">Low</label>\n                </div>\n                <div class=\"radio-item\">\n                  <input\n                    type=\"radio\"\n                    id=\"form-item--priority-normal\"\n                    name=\"priority\"\n                    value=\"normal\"\n                    checked\n                  />\n                  <label for=\"form-item--priority-normal\">Normal</label>\n                </div>\n                <div class=\"radio-item\">\n                  <input\n                    type=\"radio\"\n                    id=\"form-item--priority-high\"\n                    name=\"priority\"\n                    value=\"high\"\n                  />\n                  <label for=\"form-item--priority-high\">High</label>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-item\">\n            <label for=\"form-item--notes\">Notes</label>\n            <textarea id=\"form-item--notes\" name=\"notes\"></textarea>\n          </div>\n\n          <p>Checklist</p>\n          <div class=\"form-item checklist\">\n            <div class=\"checklist-item\">\n              <input type=\"text\" name=\"checklist\" />\n              <button id=\"btn-new-checklist-item\" type=\"button\" class=\"btn\">\n                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  width=\"24\"\n                  height=\"24\"\n                  viewBox=\"0 0 24 24\"\n                >\n                  <path d=\"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z\" />\n                </svg>\n              </button>\n            </div>\n          </div>\n\n          <div class=\"form-item\">\n            <button id=\"btn-submit-form\" type=\"submit\" class=\"btn\">Done</button>\n          </div>\n          <button id=\"btn-close-form\" class=\"btn\">\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n            >\n              <path\n                d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"\n              />\n            </svg>\n          </button>\n        </form>\n      </div>\n    </div>\n  `;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n\n//# sourceURL=webpack://todo-list/./src/components/Form/Form.js?");

/***/ }),

/***/ "./src/components/Form/index.js":
/*!**************************************!*\
  !*** ./src/components/Form/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ \"./src/components/Form/Form.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Form__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://todo-list/./src/components/Form/index.js?");

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Header = function () {\n  return `\n    <header id=\"header\">\n      <button class=\"btn menu\">\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          width=\"24\"\n          height=\"24\"\n          viewBox=\"0 0 24 24\"\n        >\n          <path d=\"M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z\" />\n        </svg>\n      </button>\n      <div class=\"header-title\">\n        <h1></h1>\n        <button id=\"btn-edit-project\" class=\"btn\">\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"24\"\n            height=\"24\"\n            viewBox=\"0 0 24 24\"\n          >\n            <path\n              d=\"M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z\"\n            />\n          </svg>\n        </button>\n        <span class=\"tip\">Enter to save</span>\n      </div>\n      <button type=\"button\" id=\"btn-new-todo\" class=\"btn\">\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          width=\"24\"\n          height=\"24\"\n          viewBox=\"0 0 24 24\"\n        >\n          <path d=\"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z\" />\n        </svg>\n        <span>New Item</span>\n      </button>\n    </header>\n  `;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n\n//# sourceURL=webpack://todo-list/./src/components/Header/Header.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/components/Header/Header.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://todo-list/./src/components/Header/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ \"./src/styles/app.scss\");\n/* harmony import */ var _utils_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/DOM */ \"./src/utils/DOM/index.js\");\n/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Project */ \"./src/models/Project/index.js\");\n/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Todo */ \"./src/models/Todo/index.js\");\n/* harmony import */ var _sections_ProjectSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/ProjectSection */ \"./src/sections/ProjectSection/index.js\");\n/* harmony import */ var _views_ProjectList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/ProjectList */ \"./src/views/ProjectList/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header/index.js\");\n/* harmony import */ var _views_TodoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/TodoList */ \"./src/views/TodoList/index.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Form */ \"./src/components/Form/index.js\");\n\n\n\n\n\n\n\n\n\n\nconst ListController = (function () {\n  const add = (project, item) => {\n    project.addItem(item.getInfo());\n  };\n\n  const load = (item) => {\n    const id = item.id.substring(5);\n    _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject().classList.remove('project-item--active');\n    item.classList.add('project-item--active');\n    _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listContainer().remove();\n    _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList().insertAdjacentHTML(\n      'beforeend',\n      (0,_views_TodoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(projects[id].getInfo())\n    );\n    _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1().innerText = _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject().innerText;\n  };\n\n  // Read from local storage\n  const read = () => {\n    projects = JSON.parse(localStorage.getItem('projects'));\n    if (projects === null) {\n      projects = [];\n      let defaultProject = (0,_models_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projects.length, 'Untitled');\n      projects.push(defaultProject);\n    } else {\n      for (let i in projects) {\n        projects[i] = (0,_models_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(i, projects[i].title, projects[i].items);\n      }\n      _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList().remove();\n      _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projects().insertAdjacentHTML(\n        'beforeend',\n        `<section class=\"projects--list\"></section>`\n      );\n    }\n\n    _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList().insertAdjacentHTML('beforeend', (0,_views_ProjectList__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(projects));\n    _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].firstProject().classList.add('project-item--active');\n\n    if (_utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listContainer() !== null) {\n      _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listContainer().remove();\n    }\n    _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList().insertAdjacentHTML(\n      'beforeend',\n      (0,_views_TodoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(projects[0].getInfo())\n    );\n  };\n\n  const save = () => {\n    let userData = [];\n    for (let i in projects) {\n      userData.push(projects[i].getInfo());\n    }\n    localStorage.setItem('projects', JSON.stringify(userData));\n  };\n\n  return { add, load, read, save };\n})();\n\nlet projects = [];\n\n_utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].content().insertAdjacentHTML('afterbegin', (0,_sections_ProjectSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\nListController.read();\n_utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList().insertAdjacentHTML('afterbegin', (0,_components_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n_utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1().innerText = _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject().innerText;\n\n// Event Listener Handler\nfunction addGlobalEventListener(type, selector, callback) {\n  document.addEventListener(type, (e) => {\n    if (e.target.closest(selector)) callback(e);\n  });\n}\n\n// Mobile: Show/Hide Projects Section\naddGlobalEventListener('click', '.menu', (e) => {\n  _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projects().classList.toggle('hidden');\n});\n\n// Display project form\naddGlobalEventListener('click', '#btn-new-project', () => {\n  const textBox = _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectInput();\n  if (textBox) {\n    textBox.focus();\n    return;\n  }\n  const list = _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList();\n  const input = `<input\n    id=\"new-project-input\"\n    type=\"text\"\n    placeholder=\"New Project\"\n  />`;\n  list.insertAdjacentHTML('beforeend', input);\n  list.scrollTo(0, list.scrollHeight);\n  _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectInput().focus();\n});\n\n// Add new project\naddGlobalEventListener('keydown', '#new-project-input', (event) => {\n  let name = event.target.value;\n  if (event.key === 'Enter') {\n    if (name === '') {\n      name = 'Untitled';\n    }\n    projects.push((0,_models_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projects.length, name));\n    event.target.remove();\n    ListController.save();\n    ListController.read();\n    ListController.load(_utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].lastProject());\n    const list = _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList();\n    list.scrollTo(0, list.scrollHeight);\n  }\n  if (event.key === 'Escape') {\n    _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectInput().remove();\n  }\n});\n\n// Edit Project Name\nfunction removeProjectEditing() {\n  _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1().style.opacity = 1;\n  _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].headerInput().remove();\n  _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].headerTip().style.display = 'none';\n  _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].headerTitle().classList.remove('expanded-title');\n}\n\naddGlobalEventListener('click', '#btn-edit-project', () => {\n  if (_utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].headerInput()) {\n    removeProjectEditing();\n    return;\n  }\n  const input = `<input\n    id=\"project-edit-title\"\n    type=\"text\"\n    placeholder=\"${_utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1().innerText}\"\n  />`;\n  _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1().style.opacity = 0;\n  _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].headerTitle().insertAdjacentHTML('beforeend', input);\n  _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].headerTip().style.display = 'block';\n  _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].headerTitle().classList.add('expanded-title');\n  _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].headerInput().focus();\n});\n\n// Save New Project Name\naddGlobalEventListener('keydown', '#project-edit-title', (event) => {\n  const key = event.key;\n  if (key !== 'Enter' && key !== 'Escape') {\n    return;\n  }\n  const name = event.target.value;\n  if (key === 'Enter') {\n    if (name === '' || name === _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1().innerText) {\n      removeProjectEditing();\n      return;\n    }\n    const id = _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject().id.substring(5);\n    projects[id].setTitle(name);\n    ListController.save();\n    _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject().innerText = name;\n    ListController.load(_utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject());\n  }\n  removeProjectEditing();\n});\n\n// Display Todo Form\naddGlobalEventListener('click', '#btn-new-todo', () => {\n  _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList().insertAdjacentHTML('beforeend', (0,_components_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"])());\n  _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].formTitleInput().focus();\n});\n\n// Close Todo Form\naddGlobalEventListener('click', '#btn-close-form', () => {\n  _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].overlay().remove();\n});\n\n// Submit Todo Form\naddGlobalEventListener('submit', '.form-wrapper', (event) => {\n  event.preventDefault();\n  const input = _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getFormInput();\n  if (input.title === '') {\n    return;\n  }\n  const newItem = (0,_models_Todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n    input.title,\n    input.description,\n    input.date,\n    input.priority,\n    input.notes,\n    input.checklist\n  );\n  const id = _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject().id.substring(5);\n  ListController.add(projects[id], newItem);\n  ListController.save();\n  ListController.load(_utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject());\n  _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].overlay().remove();\n});\n\n// Switch between projects\naddGlobalEventListener('click', '.project-item', (event) => {\n  ListController.load(event.target);\n});\n\n// Add new checklist item\naddGlobalEventListener('click', '#btn-new-checklist-item', (event) => {\n  const input = document.createElement('input');\n  input.type = 'text';\n  input.name = 'checklist';\n  const wrapper = document.createElement('div');\n  wrapper.classList.add('checklist-item');\n  wrapper.appendChild(input);\n  const btn = event.target;\n  wrapper.appendChild(btn);\n  _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].formChecklist().insertAdjacentElement('beforeend', wrapper);\n  _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].lastChecklistItem().focus();\n});\n\n// Display full todo info\naddGlobalEventListener('click', '.basic-info', (event) => {\n  const item = event.target.closest('.list-item');\n  const info = _utils_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].itemFullInfo(item);\n  if (item.classList.contains('expanded')) {\n    info.style.maxHeight = '0';\n    item.classList.remove('expanded');\n    return;\n  }\n  const infoHeight = info.scrollHeight;\n  info.style.maxHeight = infoHeight + 'px';\n  item.classList.add('expanded');\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/models/Project/Project.js":
/*!***************************************!*\
  !*** ./src/models/Project/Project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Project(id, title, items) {\n  const _id = parseInt(id);\n  let _title = title;\n  const _items = items || [];\n\n  const getInfo = () => {\n    return { id: _id, title: _title, items: _items };\n  };\n  const getItems = () => _items;\n  const addItem = (item) => _items.push(item);\n  const setTitle = (title) => (_title = title);\n\n  return { getInfo, setTitle, getItems, addItem };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://todo-list/./src/models/Project/Project.js?");

/***/ }),

/***/ "./src/models/Project/index.js":
/*!*************************************!*\
  !*** ./src/models/Project/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/models/Project/Project.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://todo-list/./src/models/Project/index.js?");

/***/ }),

/***/ "./src/models/Todo/Todo.js":
/*!*********************************!*\
  !*** ./src/models/Todo/Todo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Todo = (title, description, dueDate, priority, notes, checklist) => {\n  let _title = title;\n  let _description = description;\n  let _dueDate = dueDate;\n  let _priority = priority;\n  let _notes = notes;\n  let _checklist = checklist;\n\n  const getInfo = () => {\n    return {\n      title: _title,\n      description: _description,\n      dueDate: _dueDate,\n      priority: _priority,\n      notes: _notes,\n      checklist: _checklist,\n    };\n  };\n\n  return { getInfo };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n\n//# sourceURL=webpack://todo-list/./src/models/Todo/Todo.js?");

/***/ }),

/***/ "./src/models/Todo/index.js":
/*!**********************************!*\
  !*** ./src/models/Todo/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ \"./src/models/Todo/Todo.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://todo-list/./src/models/Todo/index.js?");

/***/ }),

/***/ "./src/sections/ProjectSection/ProjectSection.js":
/*!*******************************************************!*\
  !*** ./src/sections/ProjectSection/ProjectSection.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Projects = function () {\n  return `\n    <nav id=\"projects\">\n      <header class=\"projects--header\">\n        <button class=\"btn menu\">\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"24\"\n            height=\"24\"\n            viewBox=\"0 0 24 24\"\n          >\n            <path d=\"M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z\" />\n          </svg>\n        </button>\n        <h2>Projects</h2>\n        <button id=\"btn-new-project\" class=\"btn\" type=\"button\">\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"24\"\n            height=\"24\"\n            viewBox=\"0 0 24 24\"\n          >\n            <path d=\"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z\"></path>\n          </svg>\n        </button>\n      </header>\n\n      <section class=\"projects--list\"></section>\n    </nav>\n  `;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\n\n\n//# sourceURL=webpack://todo-list/./src/sections/ProjectSection/ProjectSection.js?");

/***/ }),

/***/ "./src/sections/ProjectSection/index.js":
/*!**********************************************!*\
  !*** ./src/sections/ProjectSection/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ProjectSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectSection */ \"./src/sections/ProjectSection/ProjectSection.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProjectSection__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://todo-list/./src/sections/ProjectSection/index.js?");

/***/ }),

/***/ "./src/utils/DOM/DOM.js":
/*!******************************!*\
  !*** ./src/utils/DOM/DOM.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst DOM = (() => {\n  // Page Container\n  const content = () => document.querySelector('#content');\n  const menu = () => document.querySelector('.menu');\n\n  // Projects Section\n  const projects = () => document.querySelector('#projects');\n  const newProjectBtn = () => document.querySelector('#btn-new-project');\n  const newProjectInput = () => document.querySelector('#new-project-input');\n  const projectList = () => document.querySelector('.projects--list');\n  const currentProject = () => document.querySelector('.project-item--active');\n  const firstProject = () => document.querySelector('.project-item');\n\n  const lastProject = () => {\n    const nodes = document.querySelectorAll('.project-item');\n    const last = nodes[nodes.length - 1];\n    if (last !== null) {\n      return last;\n    }\n  };\n\n  // Todo List Section\n  const headerTitle = () => document.querySelector('.header-title');\n  const headerInput = () => document.querySelector('#project-edit-title');\n  const headerTip = () => document.querySelector('.tip');\n  const todoList = () => document.querySelector('#todo');\n  const h1 = () => document.querySelector('h1');\n  const listContainer = () => document.querySelector('.list-container');\n  const itemFullInfo = (item) =>\n    document.querySelector(`#${item.id} .full-info`);\n  const newTodoBtn = () => document.querySelector('#btn-new-todo');\n\n  // Todo Form\n  const overlay = () => document.querySelector('.overlay');\n  const _form = () => document.querySelector('.form');\n  const formTitleInput = () => document.querySelector('#form-item--title');\n  const formRadio = () => document.querySelector('input[type=radio]:checked');\n  const formChecklist = () => document.querySelector('.checklist');\n  const lastChecklistItem = () =>\n    document.querySelector('.checklist-item:last-child input');\n  const formSubmitBtn = () => document.querySelector('#btn-submit-form');\n\n  // Todo Form Input Handling\n  const getFormInput = () => {\n    let checklist = [];\n    const input = Object.values(_form()).reduce((obj, field) => {\n      if (field.type === 'radio') {\n        obj[field.name] = formRadio().value;\n      } else if (field.name === 'checklist') {\n        checklist.push(field.value);\n        obj[field.name] = checklist;\n      } else {\n        obj[field.name] = field.value;\n      }\n      return obj;\n    }, {});\n\n    delete input[''];\n    return input;\n  };\n\n  return {\n    content,\n    currentProject,\n    firstProject,\n    formChecklist,\n    formRadio,\n    formSubmitBtn,\n    formTitleInput,\n    getFormInput,\n    h1,\n    headerInput,\n    headerTip,\n    headerTitle,\n    itemFullInfo,\n    lastChecklistItem,\n    lastProject,\n    listContainer,\n    menu,\n    newProjectBtn,\n    newProjectInput,\n    newTodoBtn,\n    overlay,\n    projectList,\n    projects,\n    todoList,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);\n\n\n//# sourceURL=webpack://todo-list/./src/utils/DOM/DOM.js?");

/***/ }),

/***/ "./src/utils/DOM/index.js":
/*!********************************!*\
  !*** ./src/utils/DOM/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/utils/DOM/DOM.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://todo-list/./src/utils/DOM/index.js?");

/***/ }),

/***/ "./src/views/ProjectList/ProjectList.js":
/*!**********************************************!*\
  !*** ./src/views/ProjectList/ProjectList.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ProjectList = function (projects) {\n  let projectList = '';\n  for (let i in projects) {\n    projectList += `<a class=\"project-item\" id=\"proj-${i}\" href=\"#\">${\n      projects[i].getInfo().title\n    }</a>`;\n  }\n\n  const content = `\n    ${projectList}\n  `;\n\n  return content;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList);\n\n\n//# sourceURL=webpack://todo-list/./src/views/ProjectList/ProjectList.js?");

/***/ }),

/***/ "./src/views/ProjectList/index.js":
/*!****************************************!*\
  !*** ./src/views/ProjectList/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList */ \"./src/views/ProjectList/ProjectList.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProjectList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://todo-list/./src/views/ProjectList/index.js?");

/***/ }),

/***/ "./src/views/TodoList/TodoList.js":
/*!****************************************!*\
  !*** ./src/views/TodoList/TodoList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst TodoList = function (project) {\n  let listContainer = '';\n  for (let i in project.items) {\n    listContainer += objectToHTML(project.id, i, project.items[i]);\n  }\n  const content = `\n    <div class=\"list-container\">\n      ${listContainer}\n    </div>\n  `;\n\n  return content;\n};\n\nfunction objectToHTML(projectId, itemId, item) {\n  let description;\n  if (item.description === '') {\n    description = '';\n  } else {\n    description = `<span class=\"list-item--description\">${item.description}</span>`;\n  }\n\n  let notes;\n  if (item.notes === '') {\n    notes = '-';\n  } else {\n    notes = item.notes;\n  }\n\n  let checklist = '';\n  if (item.checklist.length === 1 && item.checklist[0] === '') {\n    checklist = '-';\n  } else {\n    for (let i = 0; i < item.checklist.length; i++) {\n      checklist += `<li class=\"list-item__checklist--item\">\n        <svg\n          class=\"list-item__checklist--icon\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n          width=\"24\"\n          height=\"24\"\n          viewBox=\"0 0 24 24\"\n        >\n          <path\n            d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z\"\n          />\n        </svg>\n        ${item.checklist[i]}\n      </li>`;\n    }\n  }\n\n  return `\n    <div id=\"item-${projectId}-${itemId}\" class=\"list-item\">\n      <div class=\"basic-info\">\n        <div>\n          <span class=\"list-item--title\">\n            <span class=\"list-item--priority ${item.priority}-priority\"></span\n            >${item.title}</span\n          >\n          ${description}\n        </div>\n        <span class=\"list-item--date\">${item.dueDate}</span>\n      </div>\n      <div class=\"full-info\">\n        <div class=\"list-item--notes\">\n          <p class=\"list-item__notes--title\">Notes</p>\n          <p class=\"list-item__notes--text\">${notes}</p>\n        </div>\n        <ul class=\"list-item--checklist\">\n          <p>Checklist</p>\n          ${checklist}\n        </ul>\n      </div>\n    </div>\n  `;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);\n\n\n//# sourceURL=webpack://todo-list/./src/views/TodoList/TodoList.js?");

/***/ }),

/***/ "./src/views/TodoList/index.js":
/*!*************************************!*\
  !*** ./src/views/TodoList/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ \"./src/views/TodoList/TodoList.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TodoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://todo-list/./src/views/TodoList/index.js?");

/***/ }),

/***/ "./src/assets/bg.jpg":
/*!***************************!*\
  !*** ./src/assets/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c619605c68419f0d1bfb.jpg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/bg.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;