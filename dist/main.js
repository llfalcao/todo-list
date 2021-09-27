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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  text-decoration: none;\\n  border: 0;\\n  list-style: none;\\n  font-size: 16px;\\n  line-height: 1;\\n}\\n\\nbody {\\n  background-color: #fff;\\n  color: #fff;\\n  font-family: \\\"Roboto\\\", -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  width: 100%;\\n  height: 100vh;\\n}\\n\\ninput:focus,\\ntextarea:focus,\\nbutton:focus {\\n  outline: none;\\n}\\n\\n.btn {\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 0.8rem;\\n  padding: 0.4rem 1rem;\\n  cursor: pointer;\\n  background-color: transparent;\\n  border: 1px solid #b3b3b3;\\n  color: #b3b3b3;\\n  transition: 0.3s;\\n  border-radius: 2px;\\n}\\n\\n.btn:hover {\\n  color: #fff;\\n  border: 1px solid #fff;\\n}\\n\\n.btn:focus {\\n  outline: 1px solid #fff;\\n  outline-offset: -1px;\\n}\\n\\n.overlay {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.9);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  z-index: 1;\\n  border-radius: 0.25rem;\\n}\\n\\n.form-wrapper {\\n  overflow-y: auto;\\n  display: flex;\\n  flex-direction: column-reverse;\\n  width: 90%;\\n  max-width: 650px;\\n  max-height: 90%;\\n}\\n\\n.form {\\n  background-color: #0d0e0e;\\n  padding: 1.5rem 1rem;\\n  border-radius: 0.25rem;\\n  max-height: 90%;\\n  animation: zoom-out 0.3s;\\n  z-index: 2;\\n}\\n.form p {\\n  margin-bottom: 0.5rem;\\n  font-weight: 600;\\n}\\n\\n.form-item {\\n  display: block;\\n}\\n.form-item label {\\n  display: block;\\n  margin-bottom: 0.5rem;\\n  font-weight: 600;\\n}\\n.form-item input {\\n  width: 100%;\\n  margin-bottom: 1rem;\\n  padding: 0.5rem;\\n  background-color: rgba(255, 255, 255, 0.05);\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n  color: #fff;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n}\\n.form-item input:focus {\\n  border: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n\\n#form-item--notes {\\n  min-width: 100%;\\n  max-width: 100%;\\n  min-height: 80px;\\n  margin-bottom: 1rem;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  padding: 0.5rem;\\n  background-color: rgba(255, 255, 255, 0.05);\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n  color: #fff;\\n  line-height: 1.4;\\n}\\n\\n#form-item--notes:focus {\\n  border: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n\\n.form-group {\\n  display: flex;\\n  flex-wrap: wrap;\\n  column-gap: 2rem;\\n}\\n\\n.left {\\n  flex-grow: 1;\\n}\\n\\n.radio-wrapper {\\n  display: flex;\\n  justify-content: left;\\n  align-items: center;\\n  gap: 1rem;\\n}\\n\\n.radio-item {\\n  display: flex;\\n  align-items: center;\\n  line-height: 1.8;\\n  padding-right: 2rem;\\n}\\n.radio-item input {\\n  margin-top: 0.65rem;\\n  margin-right: 0.3rem;\\n}\\n\\n.checklist {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.checklist input:not(:first-child) {\\n  border-top: 0;\\n  margin-bottom: 0;\\n}\\n\\n.checklist-item {\\n  display: flex;\\n}\\n.checklist-item input {\\n  margin-bottom: 0;\\n}\\n\\n#btn-new-checklist-item {\\n  height: 41px;\\n  aspect-ratio: 1;\\n  font-size: 2rem;\\n  font-weight: 300;\\n  display: flex;\\n  justify-content: center;\\n  align-items: flex-end;\\n  border-radius: 0 0.25rem 0.25rem 0;\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n  padding: 0.4rem 0 0.45rem;\\n  border-left: 0;\\n}\\n#btn-new-checklist-item svg {\\n  pointer-events: none;\\n  fill: #ccc;\\n  width: 15px;\\n  transition: 0.3s;\\n}\\n\\n#btn-new-checklist-item:hover {\\n  border: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n#btn-new-checklist-item:hover svg {\\n  fill: #fff;\\n}\\n\\n#btn-submit-form {\\n  margin: 1rem 0 0;\\n}\\n\\n@keyframes zoom-out {\\n  0% {\\n    opacity: 0;\\n    transform: scale(1.2);\\n  }\\n  100% {\\n    opacity: 1;\\n    transform: scale(1);\\n  }\\n}\\n#header {\\n  padding: 2rem 2rem;\\n  border-bottom: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n#header h1 {\\n  font-weight: 400;\\n  font-size: 1.8rem;\\n  padding-bottom: 0.5rem;\\n}\\n\\n#btn-new-todo {\\n  position: absolute;\\n  right: 2rem;\\n  top: 2rem;\\n  display: flex;\\n  align-items: center;\\n  gap: 0.5rem;\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n  background-color: #000;\\n}\\n#btn-new-todo svg {\\n  fill: #ccc;\\n  width: 10px;\\n  transition: 0.3s;\\n}\\n#btn-new-todo span {\\n  font-size: 1rem;\\n  padding-bottom: 0.1rem;\\n}\\n#btn-new-todo:hover {\\n  background-color: rgba(255, 255, 255, 0.05);\\n  border: 1px solid rgba(179, 179, 179, 0.3);\\n}\\n#btn-new-todo:hover svg {\\n  fill: #fff;\\n}\\n\\n#content {\\n  width: 100%;\\n  height: 100%;\\n  min-height: 600px;\\n  padding: 1rem;\\n  display: flex;\\n  gap: 1rem;\\n  background-image: linear-gradient(to bottom left, #8294dd, #a782dd, #82bfdd, #82ddc3);\\n}\\n\\n#projects {\\n  width: 320px;\\n  box-shadow: 0 0 5px #080808;\\n  background-color: #0d0e0e;\\n  border-radius: 0.25rem;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.projects--header {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 1.5rem 1rem 1.5rem 1rem;\\n  border-bottom: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n.projects--header h2 {\\n  font-size: 1.5rem;\\n  font-weight: 300;\\n}\\n\\n.projects--list {\\n  overflow-y: auto;\\n}\\n\\n.project-item {\\n  display: block;\\n  padding: 0.8rem 1rem;\\n  color: #b3b3b3;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  z-index: 1000;\\n}\\n\\n.project-item:hover {\\n  color: #fff;\\n  transition: 0.3s;\\n}\\n\\n.project-item--active {\\n  background-color: rgba(255, 255, 255, 0.05);\\n  color: #fff;\\n}\\n\\n#btn-new-project {\\n  height: 30px;\\n  aspect-ratio: 1;\\n  font-weight: 300;\\n  display: flex;\\n  justify-content: center;\\n  align-items: flex-end;\\n  font-size: 2rem;\\n  line-height: 28px;\\n  border: 0;\\n}\\n\\n#btn-new-project:focus {\\n  outline: none;\\n}\\n\\n#new-project-input {\\n  width: 100%;\\n  display: block;\\n  padding: 0.8rem 1rem;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  animation: slide-down 0.3s;\\n}\\n\\n@keyframes slide-down {\\n  0% {\\n    transform: translateY(-50%);\\n  }\\n  100% {\\n    transform: unset;\\n  }\\n}\\n#todo {\\n  position: relative;\\n  width: calc(100% - 320px);\\n  box-shadow: 0 0 5px #080808;\\n  background-color: #0d0e0e;\\n  border-radius: 0.25rem;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.list-container {\\n  overflow-y: auto;\\n}\\n\\n.list-item {\\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\\n  transition: 0.3s;\\n}\\n\\n.basic-info {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-wrap: wrap;\\n  padding: 1rem 2rem 1rem 3rem;\\n  cursor: pointer;\\n}\\n.basic-info div {\\n  display: flex;\\n  flex-direction: column;\\n  min-width: 70%;\\n}\\n.basic-info span {\\n  display: inline-block;\\n}\\n\\n.list-item--title {\\n  line-height: 1.3;\\n  position: relative;\\n}\\n\\n.list-item--priority {\\n  position: absolute;\\n  left: -2rem;\\n  top: 0.3rem;\\n  width: 0.8rem;\\n  aspect-ratio: 1;\\n  border-radius: 100%;\\n}\\n\\n.low-priority {\\n  background-color: #63dd2c;\\n}\\n\\n.normal-priority {\\n  background-color: #ddd22c;\\n}\\n\\n.high-priority {\\n  background-color: #dd2c2c;\\n}\\n\\n.list-item--description {\\n  font-size: 0.8rem;\\n  color: #b3b3b3;\\n  margin: 0.5rem 0;\\n  line-height: 1.3;\\n}\\n\\n.full-info {\\n  padding-left: 3rem;\\n  padding-right: 2rem;\\n  max-height: 0px;\\n  transition: max-height 0.3s ease-in-out;\\n  overflow: hidden;\\n}\\n\\n.list-item__notes--title {\\n  font-weight: 600;\\n  margin-bottom: 0.5rem;\\n}\\n\\n.list-item__notes--text {\\n  line-height: 1.3rem;\\n  font-size: 0.95rem;\\n}\\n\\n.list-item--checklist {\\n  display: flex;\\n  flex-direction: column;\\n  font-size: 0.95rem;\\n  margin: 1rem 0;\\n}\\n.list-item--checklist p {\\n  font-weight: 600;\\n  margin-bottom: 0.5rem;\\n}\\n\\n.list-item__checklist--icon {\\n  min-width: 20px;\\n  max-width: 20px;\\n  aspect-ratio: 1;\\n  background-size: contain;\\n  display: block;\\n  margin-right: 0.5rem;\\n  fill: rgba(255, 255, 255, 0.48);\\n}\\n\\n.list-item__checklist--item {\\n  margin-bottom: 0.5rem;\\n  display: flex;\\n  align-items: center;\\n  position: relative;\\n  font-size: 0.9rem;\\n  line-height: 1.3;\\n}\\n\\n.expanded {\\n  background: #0a0a0a;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Form = function () {\r\n  return `\r\n    <div class=\"overlay\">\r\n      <div class=\"form-wrapper\">\r\n        <form class=\"form\">\r\n          <div class=\"form-item\">\r\n            <label for=\"form-item--title\">Title</label>\r\n            <input type=\"text\" id=\"form-item--title\" name=\"title\" />\r\n          </div>\r\n\r\n          <div class=\"form-item\">\r\n            <label for=\"form-item--description\">Description</label>\r\n            <input type=\"text\" id=\"form-item--description\" name=\"description\" />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <div class=\"form-item left\">\r\n              <label for=\"form-item--date\">Due Date</label>\r\n              <input type=\"text\" id=\"form-item--date\" name=\"date\" />\r\n            </div>\r\n\r\n            <div class=\"form-item right\">\r\n              <p>Priority</p>\r\n              <div class=\"radio-wrapper\">\r\n                <div class=\"radio-item\">\r\n                  <input\r\n                    type=\"radio\"\r\n                    id=\"form-item--priority-low\"\r\n                    name=\"priority\"\r\n                    value=\"low\"\r\n                  />\r\n                  <label for=\"form-item--priority-low\">Low</label>\r\n                </div>\r\n                <div class=\"radio-item\">\r\n                  <input\r\n                    type=\"radio\"\r\n                    id=\"form-item--priority-normal\"\r\n                    name=\"priority\"\r\n                    value=\"normal\"\r\n                    checked\r\n                  />\r\n                  <label for=\"form-item--priority-normal\">Normal</label>\r\n                </div>\r\n                <div class=\"radio-item\">\r\n                  <input\r\n                    type=\"radio\"\r\n                    id=\"form-item--priority-high\"\r\n                    name=\"priority\"\r\n                    value=\"high\"\r\n                  />\r\n                  <label for=\"form-item--priority-high\">High</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-item\">\r\n            <label for=\"form-item--notes\">Notes</label>\r\n            <textarea id=\"form-item--notes\" name=\"notes\"></textarea>\r\n          </div>\r\n\r\n          <p>Checklist</p>\r\n          <div class=\"form-item checklist\">\r\n            <div class=\"checklist-item\">\r\n              <input type=\"text\" name=\"checklist\" />\r\n              <button id=\"btn-new-checklist-item\" type=\"button\" class=\"btn\">\r\n                <svg\r\n                  xmlns=\"http://www.w3.org/2000/svg\"\r\n                  width=\"24\"\r\n                  height=\"24\"\r\n                  viewBox=\"0 0 24 24\"\r\n                >\r\n                  <path d=\"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z\" />\r\n                </svg>\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-item\">\r\n            <button id=\"btn-submit-form\" type=\"submit\" class=\"btn\">Done</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  `;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/Form/Form.js?");

/***/ }),

/***/ "./src/components/Form/index.js":
/*!**************************************!*\
  !*** ./src/components/Form/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ \"./src/components/Form/Form.js\");\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Form__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/Form/index.js?");

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Header = function () {\r\n  return `\r\n    <header id=\"header\">\r\n      <h1></h1>\r\n      <button type=\"button\" id=\"btn-new-todo\" class=\"btn\">\r\n        <svg\r\n          xmlns=\"http://www.w3.org/2000/svg\"\r\n          width=\"24\"\r\n          height=\"24\"\r\n          viewBox=\"0 0 24 24\"\r\n        >\r\n          <path d=\"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z\" />\r\n        </svg>\r\n        <span>New Item</span>\r\n      </button>\r\n    </header>\r\n  `;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/Header/Header.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/components/Header/Header.js\");\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/Header/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ \"./src/styles/app.scss\");\n/* harmony import */ var _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/DOMElements */ \"./src/utils/DOMElements/index.js\");\n/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Project */ \"./src/models/Project/index.js\");\n/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Todo */ \"./src/models/Todo/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header/index.js\");\n/* harmony import */ var _sections_ProjectSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/ProjectSection */ \"./src/sections/ProjectSection/index.js\");\n/* harmony import */ var _views_ProjectList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/ProjectList */ \"./src/views/ProjectList/index.js\");\n/* harmony import */ var _views_TodoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/TodoList */ \"./src/views/TodoList/index.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Form */ \"./src/components/Form/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst ListController = (function () {\r\n  const add = (project, item) => {\r\n    project.addItem(item.getInfo());\r\n  };\r\n\r\n  const load = (item) => {\r\n    const id = item.id.substring(5);\r\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject().classList.remove('project-item--active');\r\n    item.classList.add('project-item--active');\r\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listContainer().remove();\r\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList().insertAdjacentHTML(\r\n      'beforeend',\r\n      (0,_views_TodoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(projects[id].getInfo())\r\n    );\r\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1().innerText = _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject().innerText;\r\n  };\r\n\r\n  // Read from local storage\r\n  const read = () => {\r\n    projects = JSON.parse(localStorage.getItem('projects'));\r\n    if (projects === null) {\r\n      projects = [];\r\n      let defaultProject = (0,_models_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projects.length, 'Untitled');\r\n      projects.push(defaultProject);\r\n    } else {\r\n      for (let i in projects) {\r\n        projects[i] = (0,_models_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(i, projects[i].title, projects[i].items);\r\n      }\r\n      _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList().remove();\r\n      _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projects().insertAdjacentHTML(\r\n        'beforeend',\r\n        `<section class=\"projects--list\"></section>`\r\n      );\r\n    }\r\n\r\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList().insertAdjacentHTML(\r\n      'beforeend',\r\n      (0,_views_ProjectList__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(projects)\r\n    );\r\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].firstProject().classList.add('project-item--active');\r\n\r\n    if (_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listContainer() !== null) {\r\n      _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listContainer().remove();\r\n    }\r\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList().insertAdjacentHTML(\r\n      'beforeend',\r\n      (0,_views_TodoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(projects[0].getInfo())\r\n    );\r\n  };\r\n\r\n  const save = () => {\r\n    let userData = [];\r\n    for (let i in projects) {\r\n      userData.push(projects[i].getInfo());\r\n    }\r\n    localStorage.setItem('projects', JSON.stringify(userData));\r\n  };\r\n\r\n  return { add, load, read, save };\r\n})();\r\n\r\nlet projects = [];\r\n\r\n_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].content().insertAdjacentHTML('afterbegin', (0,_sections_ProjectSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\r\nListController.read();\r\n_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList().insertAdjacentHTML('afterbegin', (0,_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1().innerText = _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject().innerText;\r\n\r\n// Event Listener Handler\r\nfunction addGlobalEventListener(type, selector, callback) {\r\n  document.addEventListener(type, (e) => {\r\n    if (e.target.closest(selector)) callback(e);\r\n  });\r\n}\r\n\r\n// Display project form\r\naddGlobalEventListener('click', '#btn-new-project', () => {\r\n  const textBox = _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectInput();\r\n  if (textBox) {\r\n    textBox.focus();\r\n    return;\r\n  }\r\n  const input = `<input\r\n    id=\"new-project-input\"\r\n    type=\"text\"\r\n    placeholder=\"New Project\"\r\n  />`;\r\n  _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList().insertAdjacentHTML('beforeend', input);\r\n  _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectInput().focus();\r\n});\r\n\r\n// Add new project\r\naddGlobalEventListener('keydown', '#new-project-input', (event) => {\r\n  let name = event.target.value;\r\n  if (event.key === 'Enter') {\r\n    if (name === '') {\r\n      name = 'Untitled';\r\n    }\r\n    projects.push((0,_models_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projects.length, name));\r\n    event.target.remove();\r\n    ListController.save();\r\n    ListController.read();\r\n    ListController.load(_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].lastProject());\r\n  }\r\n  if (event.key === 'Escape') {\r\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectInput().remove();\r\n  }\r\n});\r\n\r\n// Display todo form\r\naddGlobalEventListener('click', '#btn-new-todo', () => {\r\n  _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList().insertAdjacentHTML('beforeend', (0,_components_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"])());\r\n});\r\n\r\n// Add new todo\r\naddGlobalEventListener('click', '#btn-submit-form', () => {\r\n  const id = _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject().id.substring(5);\r\n  const input = _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getFormInput();\r\n  const newItem = (0,_models_Todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\r\n    input.title,\r\n    input.description,\r\n    input.date,\r\n    input.priority,\r\n    input.notes,\r\n    input.checklist\r\n  );\r\n  ListController.add(projects[id], newItem);\r\n  ListController.save();\r\n  ListController.load(_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject());\r\n  _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form().remove();\r\n  _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].overlay().remove();\r\n});\r\n\r\n// Switch between projects\r\naddGlobalEventListener('click', '.project-item', (event) => {\r\n  ListController.load(event.target);\r\n});\r\n\r\n// Add new checklist item\r\naddGlobalEventListener('click', '#btn-new-checklist-item', (event) => {\r\n  const btn = event.target;\r\n  const input = document.createElement('input');\r\n  input.type = 'text';\r\n  input.name = 'checklist';\r\n  const wrapper = document.createElement('div');\r\n  wrapper.classList.add('checklist-item');\r\n  wrapper.appendChild(input);\r\n  wrapper.appendChild(btn);\r\n  _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].formChecklist().insertAdjacentElement('beforeend', wrapper);\r\n  _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].lastChecklistItem().focus();\r\n});\r\n\r\n// Display full todo info\r\naddGlobalEventListener('click', '.basic-info', (event) => {\r\n  const item = event.target.closest('.list-item');\r\n  const info = _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].itemFullInfo(item);\r\n  if (item.classList.contains('expanded')) {\r\n    info.style.maxHeight = '0';\r\n    item.classList.remove('expanded');\r\n    return;\r\n  }\r\n  const infoHeight = info.scrollHeight;\r\n  info.style.maxHeight = infoHeight + 'px';\r\n  item.classList.add('expanded');\r\n});\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/models/Project/Project.js":
/*!***************************************!*\
  !*** ./src/models/Project/Project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Project(id, title, items) {\r\n  const _id = parseInt(id);\r\n  const _title = title;\r\n  const _items = items || [];\r\n\r\n  const getInfo = () => {\r\n    return { id: _id, title: _title, items: _items };\r\n  };\r\n  const getItems = () => _items;\r\n  const addItem = (item) => _items.push(item);\r\n\r\n  return { getInfo, getItems, addItem };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\r\n\n\n//# sourceURL=webpack://todo-list/./src/models/Project/Project.js?");

/***/ }),

/***/ "./src/models/Project/index.js":
/*!*************************************!*\
  !*** ./src/models/Project/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/models/Project/Project.js\");\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack://todo-list/./src/models/Project/index.js?");

/***/ }),

/***/ "./src/models/Todo/Todo.js":
/*!*********************************!*\
  !*** ./src/models/Todo/Todo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Todo = (title, description, dueDate, priority, notes, checklist) => {\r\n  let _title = title;\r\n  let _description = description;\r\n  let _dueDate = dueDate;\r\n  let _priority = priority;\r\n  let _notes = notes;\r\n  let _checklist = checklist;\r\n\r\n  const getInfo = () => {\r\n    return {\r\n      title: _title,\r\n      description: _description,\r\n      dueDate: _dueDate,\r\n      priority: _priority,\r\n      notes: _notes,\r\n      checklist: _checklist,\r\n    };\r\n  };\r\n\r\n  return { getInfo };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\r\n\n\n//# sourceURL=webpack://todo-list/./src/models/Todo/Todo.js?");

/***/ }),

/***/ "./src/models/Todo/index.js":
/*!**********************************!*\
  !*** ./src/models/Todo/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ \"./src/models/Todo/Todo.js\");\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack://todo-list/./src/models/Todo/index.js?");

/***/ }),

/***/ "./src/sections/ProjectSection/ProjectSection.js":
/*!*******************************************************!*\
  !*** ./src/sections/ProjectSection/ProjectSection.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Projects = function () {\r\n  return `\r\n    <nav id=\"projects\">\r\n      <header class=\"projects--header\">\r\n        <h2>Projects</h2>\r\n        <button id=\"btn-new-project\" class=\"btn\" type=\"button\">+</button>\r\n      </header>\r\n\r\n      <section class=\"projects--list\"></section>\r\n    </nav>\r\n  `;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\r\n\n\n//# sourceURL=webpack://todo-list/./src/sections/ProjectSection/ProjectSection.js?");

/***/ }),

/***/ "./src/sections/ProjectSection/index.js":
/*!**********************************************!*\
  !*** ./src/sections/ProjectSection/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ProjectSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectSection */ \"./src/sections/ProjectSection/ProjectSection.js\");\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProjectSection__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack://todo-list/./src/sections/ProjectSection/index.js?");

/***/ }),

/***/ "./src/utils/DOMElements/DOMElements.js":
/*!**********************************************!*\
  !*** ./src/utils/DOMElements/DOMElements.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst DOMElements = (() => {\r\n  const content = () => document.querySelector('#content');\r\n  const projects = () => document.querySelector('#projects');\r\n  const projectList = () => document.querySelector('.projects--list');\r\n  const firstProject = () => document.querySelector('.project-item');\r\n  const lastProject = () => {\r\n    const nodes = document.querySelectorAll('.project-item');\r\n    const last = nodes[nodes.length - 1];\r\n    if (last !== null) {\r\n      return last;\r\n    }\r\n  };\r\n  const currentProject = () => document.querySelector('.project-item--active');\r\n  const newProjectBtn = () => document.querySelector('#btn-new-project');\r\n  const newProjectInput = () => document.querySelector('#new-project-input');\r\n  const todoList = () => document.querySelector('#todo');\r\n  const h1 = () => document.querySelector('h1');\r\n  const listContainer = () => document.querySelector('.list-container');\r\n  const itemFullInfo = (item) =>\r\n    document.querySelector(`#${item.id} .full-info`);\r\n  const newTodoBtn = () => document.querySelector('#btn-new-todo');\r\n  const overlay = () => document.querySelector('.overlay');\r\n  const form = () => document.querySelector('.form');\r\n  const formRadio = () => document.querySelector('input[type=radio]:checked');\r\n  const formChecklist = () => document.querySelector('.checklist');\r\n  const lastChecklistItem = () =>\r\n    document.querySelector('.checklist-item:last-child input');\r\n  const formSubmitBtn = () => document.querySelector('#btn-submit-form');\r\n\r\n  const getFormInput = () => {\r\n    let checklist = [];\r\n    const input = Object.values(form()).reduce((obj, field) => {\r\n      if (field.type === 'radio') {\r\n        obj[field.name] = formRadio().value;\r\n      } else if (field.name === 'checklist') {\r\n        checklist.push(field.value);\r\n        obj[field.name] = checklist;\r\n      } else {\r\n        obj[field.name] = field.value;\r\n      }\r\n      return obj;\r\n    }, {});\r\n\r\n    delete input[''];\r\n    return input;\r\n  };\r\n\r\n  return {\r\n    content,\r\n    currentProject,\r\n    firstProject,\r\n    form,\r\n    formChecklist,\r\n    formRadio,\r\n    formSubmitBtn,\r\n    getFormInput,\r\n    h1,\r\n    itemFullInfo,\r\n    lastProject,\r\n    lastChecklistItem,\r\n    listContainer,\r\n    newProjectBtn,\r\n    newProjectInput,\r\n    newTodoBtn,\r\n    overlay,\r\n    projectList,\r\n    projects,\r\n    todoList,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMElements);\r\n\n\n//# sourceURL=webpack://todo-list/./src/utils/DOMElements/DOMElements.js?");

/***/ }),

/***/ "./src/utils/DOMElements/index.js":
/*!****************************************!*\
  !*** ./src/utils/DOMElements/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOMElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMElements */ \"./src/utils/DOMElements/DOMElements.js\");\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DOMElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack://todo-list/./src/utils/DOMElements/index.js?");

/***/ }),

/***/ "./src/views/ProjectList/ProjectList.js":
/*!**********************************************!*\
  !*** ./src/views/ProjectList/ProjectList.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ProjectList = function (projects) {\r\n  let projectList = '';\r\n  for (let i in projects) {\r\n    projectList += `<a class=\"project-item\" id=\"proj-${i}\" href=\"#\">${\r\n      projects[i].getInfo().title\r\n    }</a>`;\r\n  }\r\n\r\n  const content = `\r\n    ${projectList}\r\n  `;\r\n\r\n  return content;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList);\r\n\n\n//# sourceURL=webpack://todo-list/./src/views/ProjectList/ProjectList.js?");

/***/ }),

/***/ "./src/views/ProjectList/index.js":
/*!****************************************!*\
  !*** ./src/views/ProjectList/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList */ \"./src/views/ProjectList/ProjectList.js\");\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProjectList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack://todo-list/./src/views/ProjectList/index.js?");

/***/ }),

/***/ "./src/views/TodoList/TodoList.js":
/*!****************************************!*\
  !*** ./src/views/TodoList/TodoList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst TodoList = function (project) {\r\n  let listContainer = '';\r\n  for (let i in project.items) {\r\n    listContainer += objectToHTML(project.id, i, project.items[i]);\r\n  }\r\n  const content = `\r\n    <div class=\"list-container\">\r\n      ${listContainer}\r\n    </div>\r\n  `;\r\n\r\n  return content;\r\n};\r\n\r\nfunction objectToHTML(projectId, itemId, item) {\r\n  let description;\r\n  if (item.description === '') {\r\n    description = '';\r\n  } else {\r\n    description = `<span class=\"list-item--description\">${item.description}</span>`;\r\n  }\r\n\r\n  let notes;\r\n  if (item.notes === '') {\r\n    notes = '-';\r\n  } else {\r\n    notes = item.notes;\r\n  }\r\n\r\n  let checklist = '';\r\n  if (item.checklist.length === 1 && item.checklist[0] === '') {\r\n    checklist = '-';\r\n  } else {\r\n    for (let i = 0; i < item.checklist.length; i++) {\r\n      checklist += `<li class=\"list-item__checklist--item\">\r\n        <svg\r\n          class=\"list-item__checklist--icon\"\r\n          xmlns=\"http://www.w3.org/2000/svg\"\r\n          width=\"24\"\r\n          height=\"24\"\r\n          viewBox=\"0 0 24 24\"\r\n        >\r\n          <path\r\n            d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z\"\r\n          />\r\n        </svg>\r\n        ${item.checklist[i]}\r\n      </li>`;\r\n    }\r\n  }\r\n\r\n  return `\r\n    <div id=\"item-${projectId}-${itemId}\" class=\"list-item\">\r\n      <div class=\"basic-info\">\r\n        <div>\r\n          <span class=\"list-item--title\">\r\n            <span class=\"list-item--priority ${item.priority}-priority\"></span\r\n            >${item.title}</span\r\n          >\r\n          ${description}\r\n        </div>\r\n        <span class=\"list-item--date\">${item.dueDate}</span>\r\n      </div>\r\n      <div class=\"full-info\">\r\n        <div class=\"list-item--notes\">\r\n          <p class=\"list-item__notes--title\">Notes</p>\r\n          <p class=\"list-item__notes--text\">${notes}</p>\r\n        </div>\r\n        <ul class=\"list-item--checklist\">\r\n          <p>Checklist</p>\r\n          ${checklist}\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  `;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);\r\n\n\n//# sourceURL=webpack://todo-list/./src/views/TodoList/TodoList.js?");

/***/ }),

/***/ "./src/views/TodoList/index.js":
/*!*************************************!*\
  !*** ./src/views/TodoList/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ \"./src/views/TodoList/TodoList.js\");\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TodoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack://todo-list/./src/views/TodoList/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;