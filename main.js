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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  text-decoration: none;\\n  border: 0;\\n  list-style: none;\\n  font-size: 16px;\\n  line-height: 1;\\n}\\n\\nbody {\\n  background-color: #fff;\\n  color: #fff;\\n  font-family: \\\"Roboto\\\", -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\na,\\na:visited {\\n  color: inherit;\\n}\\n\\ninput:focus {\\n  outline: none;\\n}\\n\\n.btn {\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 0.8rem;\\n  padding: 0.4rem 1rem;\\n  cursor: pointer;\\n  background-color: transparent;\\n  border: 1px solid #b3b3b3;\\n  color: #b3b3b3;\\n  transition: 0.3s;\\n  border-radius: 2px;\\n}\\n.btn:hover {\\n  color: #fff;\\n  border: 1px solid #fff;\\n}\\n\\n.overlay {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.9);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.form {\\n  background-color: #101112;\\n  padding: 2rem 1rem;\\n  width: 90%;\\n  height: 90%;\\n  overflow-y: scroll;\\n}\\n.form p {\\n  margin-bottom: 0.5rem;\\n  font-weight: 600;\\n}\\n.form .form-item {\\n  display: block;\\n}\\n.form .form-item label {\\n  display: block;\\n  margin-bottom: 0.5rem;\\n  font-weight: 600;\\n}\\n.form .form-item input {\\n  width: 100%;\\n  margin-bottom: 1rem;\\n  padding: 0.5rem;\\n  background-color: rgba(255, 255, 255, 0.05);\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n  color: #fff;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  transition: 0.3s;\\n}\\n.form .form-item input:focus {\\n  border: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n.form .form-item textarea {\\n  min-width: 100%;\\n  max-width: 100%;\\n  height: 100px;\\n  margin-bottom: 1rem;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  padding: 0.5rem;\\n  background-color: rgba(255, 255, 255, 0.05);\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n  color: #fff;\\n}\\n.form .form-item button {\\n  margin-bottom: 0.5rem;\\n}\\n.form .radio-wrapper {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n.form .radio-wrapper .radio-item {\\n  display: flex;\\n  align-items: center;\\n  line-height: 1.8;\\n}\\n.form .radio-wrapper .radio-item input {\\n  margin-top: 0.65rem;\\n  margin-right: 0.5rem;\\n}\\n.form .checklist {\\n  display: flex;\\n}\\n.form #btn-new-checklist-item {\\n  height: 39px;\\n  aspect-ratio: 1;\\n  font-size: 2rem;\\n  font-weight: 300;\\n  display: flex;\\n  justify-content: center;\\n  align-items: flex-end;\\n  border-radius: 0 0.25rem 0.25rem 0;\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n  border-left: 0;\\n}\\n.form #btn-new-checklist-item:hover {\\n  border: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n\\n#header {\\n  padding: 2rem 2rem;\\n  border-bottom: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n#header h1 {\\n  font-weight: 400;\\n  font-size: 1.8rem;\\n  padding-bottom: 0.5rem;\\n}\\n#header #btn-new-todo {\\n  position: absolute;\\n  right: 2rem;\\n  top: 2rem;\\n  display: flex;\\n  align-items: center;\\n  gap: 0.5rem;\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n  background-color: #000;\\n}\\n#header #btn-new-todo svg {\\n  fill: #ccc;\\n  width: 10px;\\n  transition: 0.3s;\\n}\\n#header #btn-new-todo span {\\n  font-size: 1rem;\\n  padding-bottom: 0.1rem;\\n}\\n#header #btn-new-todo:hover {\\n  background-color: rgba(255, 255, 255, 0.05);\\n  border: 1px solid rgba(179, 179, 179, 0.3);\\n}\\n#header #btn-new-todo:hover svg {\\n  fill: #fff;\\n}\\n\\n#content {\\n  width: 100%;\\n  height: 100%;\\n  padding: 1.5rem;\\n  display: flex;\\n  gap: 1rem;\\n  background: linear-gradient(to bottom right, #b696fb, #96dafb, #96edfb);\\n}\\n\\n#projects {\\n  width: 320px;\\n  box-shadow: 0 0 5px #080808;\\n  background-color: #101112;\\n  border-radius: 0.25rem;\\n}\\n#projects .projects--header {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 1.5rem 1rem 1.5rem 1rem;\\n  border-bottom: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n#projects h2 {\\n  font-size: 1.5rem;\\n  font-weight: 300;\\n}\\n#projects .project-item {\\n  display: block;\\n  padding: 0.8rem 1rem;\\n  color: #b3b3b3;\\n  transition: 0.3s;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  z-index: 1000;\\n}\\n#projects .project-item:hover {\\n  color: #fff;\\n}\\n#projects .project-item--active {\\n  background-color: rgba(255, 255, 255, 0.05);\\n}\\n#projects #btn-new-project {\\n  height: 30px;\\n  aspect-ratio: 1;\\n  font-weight: 300;\\n  display: flex;\\n  justify-content: center;\\n  align-items: flex-end;\\n  font-size: 2rem;\\n  line-height: 28px;\\n  border: 0;\\n}\\n#projects #new-project-input {\\n  width: 100%;\\n  display: block;\\n  padding: 0.8rem 1rem;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  animation: slide-down 0.3s;\\n}\\n\\n@keyframes slide-down {\\n  0% {\\n    transform: translateY(-50%);\\n  }\\n  100% {\\n    transform: unset;\\n  }\\n}\\n#todo {\\n  position: relative;\\n  width: calc(100% - 320px);\\n  box-shadow: 0 0 5px #080808;\\n  background-color: #101112;\\n  border-radius: 0.25rem;\\n}\\n#todo .list-item {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-wrap: wrap;\\n  padding: 0 1rem;\\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\\n  position: relative;\\n}\\n#todo .list-item div {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 1rem 0 1rem 2rem;\\n}\\n#todo .list-item span {\\n  display: inline-block;\\n}\\n#todo .list-item .list-item--priority {\\n  position: absolute;\\n  left: 1rem;\\n  top: 1.18rem;\\n  width: 0.8rem;\\n  aspect-ratio: 1;\\n  border-radius: 100%;\\n}\\n#todo .list-item .list-item--title {\\n  margin-bottom: 0.5rem;\\n}\\n#todo .list-item .list-item--description {\\n  font-size: 0.8rem;\\n  color: #b3b3b3;\\n}\\n#todo .list-item .list-item--date {\\n  margin: 1rem 0rem 1rem 2rem;\\n}\\n#todo .list-item .low-priority {\\n  background-color: #63dd2c;\\n}\\n#todo .list-item .normal-priority {\\n  background-color: #ddd22c;\\n}\\n#todo .list-item .high-priority {\\n  background-color: #dd2c2c;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Form = function () {\r\n  return `\r\n    <div class=\"overlay\">\r\n      <form class=\"form\">\r\n        <div class=\"form-item\">\r\n          <label for=\"form-item--title\">Title</label>\r\n          <input type=\"text\" id=\"form-item--title\" name=\"title\" />\r\n        </div>\r\n\r\n        <div class=\"form-item\">\r\n          <label for=\"form-item--description\">Description</label>\r\n          <input type=\"text\" id=\"form-item--description\" name=\"description\" />\r\n        </div>\r\n\r\n        <div class=\"form-item\">\r\n          <label for=\"form-item--date\">Due Date</label>\r\n          <input type=\"text\" id=\"form-item--date\" name=\"date\" />\r\n        </div>\r\n\r\n        <p>Priority</p>\r\n        <div class=\"form-item radio-wrapper\">\r\n          <div class=\"radio-item\">\r\n            <input\r\n              type=\"radio\"\r\n              id=\"form-item--priority-low\"\r\n              name=\"priority\"\r\n              value=\"low\"\r\n            />\r\n            <label for=\"form-item--priority-low\">Low</label>\r\n          </div>\r\n          <div class=\"radio-item\">\r\n            <input\r\n              type=\"radio\"\r\n              id=\"form-item--priority-normal\"\r\n              name=\"priority\"\r\n              value=\"normal\"\r\n              checked\r\n            />\r\n            <label for=\"form-item--priority-normal\">Normal</label>\r\n          </div>\r\n          <div class=\"radio-item\">\r\n            <input\r\n              type=\"radio\"\r\n              id=\"form-item--priority-high\"\r\n              name=\"priority\"\r\n              value=\"high\"\r\n            />\r\n            <label for=\"form-item--priority-high\">High</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-item\">\r\n          <label for=\"form-item--notes\">Notes</label>\r\n          <textarea id=\"form-item--notes\" name=\"notes\"></textarea>\r\n        </div>\r\n\r\n        <p>Checklist</p>\r\n        <div class=\"form-item checklist\">\r\n          <input type=\"text\" name=\"checklist\" />\r\n          <button id=\"btn-new-checklist-item\" type=\"button\" class=\"btn\">\r\n            +\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"form-item\">\r\n          <button id=\"btn-submit-form\" type=\"submit\" class=\"btn\">Done</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  `;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/Form/Form.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../plus.svg */ \"./src/plus.svg\");\n\r\n\r\nconst Header = function () {\r\n  return `\r\n    <header id=\"header\">\r\n      <h1></h1>\r\n      <button type=\"button\" id=\"btn-new-todo\" class=\"btn\">\r\n        <svg\r\n          xmlns=\"http://www.w3.org/2000/svg\"\r\n          width=\"24\"\r\n          height=\"24\"\r\n          viewBox=\"0 0 24 24\"\r\n        >\r\n          <path d=\"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z\" />\r\n        </svg>\r\n        <span>New Item</span>\r\n      </button>\r\n    </header>\r\n  `;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/Header/Header.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ \"./src/styles/app.scss\");\n/* harmony import */ var _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/DOMElements */ \"./src/utils/DOMElements/index.js\");\n/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Project */ \"./src/models/Project/index.js\");\n/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Todo */ \"./src/models/Todo/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header/index.js\");\n/* harmony import */ var _sections_ProjectSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/ProjectSection */ \"./src/sections/ProjectSection/index.js\");\n/* harmony import */ var _views_ProjectList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/ProjectList */ \"./src/views/ProjectList/index.js\");\n/* harmony import */ var _views_TodoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/TodoList */ \"./src/views/TodoList/index.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Form */ \"./src/components/Form/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst ListController = (function () {\r\n  const add = (project, item) => {\r\n    project.addItem(item.getInfo());\r\n  };\r\n\r\n  // Read from local storage\r\n  const read = () => {\r\n    projects = JSON.parse(localStorage.getItem('projects'));\r\n    if (projects === null) {\r\n      projects = [];\r\n      let defaultProject = (0,_models_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Untitled');\r\n      projects.push(defaultProject);\r\n    } else {\r\n      for (let i in projects) {\r\n        projects[i] = (0,_models_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projects[i].title, projects[i].items);\r\n      }\r\n      _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList().remove();\r\n      _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projects().insertAdjacentHTML(\r\n        'beforeend',\r\n        `<section class=\"projects--list\"></section>`\r\n      );\r\n    }\r\n\r\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList().insertAdjacentHTML(\r\n      'beforeend',\r\n      (0,_views_ProjectList__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(projects)\r\n    );\r\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].firstProject().classList.add('project-item--active');\r\n\r\n    if (_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listContainer() !== null) {\r\n      _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listContainer().remove();\r\n    }\r\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList().insertAdjacentHTML(\r\n      'beforeend',\r\n      (0,_views_TodoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(projects[0].getInfo())\r\n    );\r\n  };\r\n\r\n  const save = () => {\r\n    let userData = [];\r\n    for (let i in projects) {\r\n      userData.push(projects[i].getInfo());\r\n    }\r\n    localStorage.setItem('projects', JSON.stringify(userData));\r\n  };\r\n\r\n  return { add, read, save };\r\n})();\r\n\r\nlet projects = [];\r\n\r\n_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].content().insertAdjacentHTML('afterbegin', (0,_sections_ProjectSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\r\nListController.read();\r\n_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList().insertAdjacentHTML('afterbegin', (0,_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1().innerText = _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject().innerText;\r\n\r\n// Add a new Todo to the list\r\nfunction handleSubmit() {\r\n  _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].formSubmitBtn().addEventListener('click', () => {\r\n    const input = _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getFormInput();\r\n    const newItem = (0,_models_Todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\r\n      input.title,\r\n      input.description,\r\n      input.date,\r\n      input.priority,\r\n      input.notes,\r\n      input.checklist\r\n    );\r\n\r\n    ListController.add(projects[0], newItem);\r\n    ListController.save();\r\n    ListController.read();\r\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form().remove();\r\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].overlay().remove();\r\n  });\r\n}\r\n\r\n_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newTodoBtn().addEventListener('click', () => {\r\n  _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList().insertAdjacentHTML('beforeend', (0,_components_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"])());\r\n  handleSubmit();\r\n});\r\n\r\n// Create a new project\r\nfunction handleKeyboard() {\r\n  const input = _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectInput();\r\n  input.addEventListener('keydown', (event) => {\r\n    if (event.key === 'Enter') {\r\n      let newProject = (0,_models_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(input.value);\r\n      projects.push(newProject);\r\n      _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectInput().remove();\r\n      ListController.save();\r\n      ListController.read();\r\n      _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].firstProject().classList.remove('project-item--active');\r\n      _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].latestProject().classList.add('project-item--active');\r\n    }\r\n    if (event.key === 'Escape') {\r\n      _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectInput().remove();\r\n    }\r\n  });\r\n}\r\n\r\n_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectBtn().addEventListener('click', () => {\r\n  if (_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectInput()) {\r\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectInput().focus();\r\n    return;\r\n  }\r\n  const input = `<input\r\n    id=\"new-project-input\"\r\n    type=\"text\"\r\n    placeholder=\"New Project\"\r\n  />`;\r\n  _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList().insertAdjacentHTML('beforeend', input);\r\n  _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectInput().focus();\r\n\r\n  handleKeyboard();\r\n});\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/models/Project/Project.js":
/*!***************************************!*\
  !*** ./src/models/Project/Project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Project(title, items) {\r\n  let _title = title;\r\n  let _items = items || [];\r\n\r\n  const getInfo = () => {\r\n    return { title: _title, items: _items };\r\n  };\r\n  const getItems = () => _items;\r\n  const addItem = (item) => _items.push(item);\r\n\r\n  return { getInfo, getItems, addItem };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\r\n\n\n//# sourceURL=webpack://todo-list/./src/models/Project/Project.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst DOMElements = (() => {\r\n  const content = () => document.querySelector('#content');\r\n  const projects = () => document.querySelector('#projects');\r\n  const projectList = () => document.querySelector('.projects--list');\r\n  const firstProject = () => document.querySelector('.project-item');\r\n  const latestProject = () => {\r\n    const nodes = document.querySelectorAll('.project-item');\r\n    const last = nodes[nodes.length - 1];\r\n    if (last !== null) {\r\n      return last;\r\n    }\r\n  };\r\n  const currentProject = () => document.querySelector('.project-item--active');\r\n  const newProjectBtn = () => document.querySelector('#btn-new-project');\r\n  const newProjectInput = () => document.querySelector('#new-project-input');\r\n  const todoList = () => document.querySelector('#todo');\r\n  const h1 = () => document.querySelector('h1');\r\n  const listContainer = () => document.querySelector('.list-container');\r\n  const newTodoBtn = () => document.querySelector('#btn-new-todo');\r\n  const overlay = () => document.querySelector('.overlay');\r\n  const form = () => document.querySelector('.form');\r\n  const formRadio = () => document.querySelector('input[type=radio]:checked');\r\n  const formSubmitBtn = () => document.querySelector('#btn-submit-form');\r\n\r\n  const getFormInput = () => {\r\n    let checklist = [];\r\n    const input = Object.values(form()).reduce((obj, field) => {\r\n      if (field.type === 'radio') {\r\n        obj[field.name] = formRadio().value;\r\n      } else if (field.name === 'checklist') {\r\n        checklist.push(field.value);\r\n        obj[field.name] = checklist;\r\n      } else {\r\n        obj[field.name] = field.value;\r\n      }\r\n      return obj;\r\n    }, {});\r\n\r\n    delete input[''];\r\n    return input;\r\n  };\r\n\r\n  return {\r\n    content,\r\n    currentProject,\r\n    firstProject,\r\n    form,\r\n    formRadio,\r\n    formSubmitBtn,\r\n    getFormInput,\r\n    h1,\r\n    latestProject,\r\n    listContainer,\r\n    newProjectBtn,\r\n    newProjectInput,\r\n    newTodoBtn,\r\n    overlay,\r\n    projectList,\r\n    projects,\r\n    todoList,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMElements);\r\n\n\n//# sourceURL=webpack://todo-list/./src/utils/DOMElements/DOMElements.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ProjectList = function (projects) {\r\n  let projectList = '';\r\n  for (let i in projects) {\r\n    projectList += `<a class=\"project-item\" href=\"#\">${\r\n      projects[i].getInfo().title\r\n    }</a>`;\r\n  }\r\n\r\n  const content = `\r\n    ${projectList}\r\n  `;\r\n\r\n  return content;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList);\r\n\n\n//# sourceURL=webpack://todo-list/./src/views/ProjectList/ProjectList.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst TodoList = function (project) {\r\n  let listContainer = '';\r\n  for (let i in project.items) {\r\n    listContainer += objectToHTML(project.items[i]);\r\n  }\r\n  const content = `\r\n    <div class=\"list-container\">\r\n      ${listContainer}\r\n    </div>\r\n  `;\r\n\r\n  return content;\r\n};\r\n\r\nfunction objectToHTML(item) {\r\n  return `\r\n    <div class=\"list-item\">\r\n      <span class=\"list-item--priority ${item.priority}-priority\"></span>\r\n      <div>\r\n        <span class=\"list-item--title\">${item.title}</span>\r\n        <span class=\"list-item--description\">${item.description}</span>\r\n      </div>\r\n      <span class=\"list-item--date\">${item.dueDate}</span>\r\n    </div>\r\n  `;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);\r\n\n\n//# sourceURL=webpack://todo-list/./src/views/TodoList/TodoList.js?");

/***/ }),

/***/ "./src/views/TodoList/index.js":
/*!*************************************!*\
  !*** ./src/views/TodoList/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ \"./src/views/TodoList/TodoList.js\");\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TodoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack://todo-list/./src/views/TodoList/index.js?");

/***/ }),

/***/ "./src/plus.svg":
/*!**********************!*\
  !*** ./src/plus.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e5fd29dd2275069f0cb.svg\";\n\n//# sourceURL=webpack://todo-list/./src/plus.svg?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;