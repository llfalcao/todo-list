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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  text-decoration: none;\\n  border: 0;\\n  list-style: none;\\n  font-size: 16px;\\n  line-height: 1;\\n}\\n\\nbody {\\n  background-color: #fff;\\n  color: #fff;\\n  font-family: \\\"Roboto\\\", -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  width: 100%;\\n  height: 100vh;\\n}\\n\\ninput:focus,\\ntextarea:focus {\\n  outline: none;\\n}\\n\\n.btn {\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 0.8rem;\\n  padding: 0.4rem 1rem;\\n  cursor: pointer;\\n  background-color: transparent;\\n  border: 1px solid #b3b3b3;\\n  color: #b3b3b3;\\n  transition: 0.3s;\\n  border-radius: 2px;\\n}\\n.btn:hover {\\n  color: #fff;\\n  border: 1px solid #fff;\\n}\\n\\n.overlay {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.9);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.form {\\n  background-color: #101112;\\n  padding: 1.5rem 1rem;\\n  width: 90%;\\n  max-width: 650px;\\n  border-radius: 0.25rem;\\n  overflow-y: scroll;\\n}\\n.form p {\\n  margin-bottom: 0.5rem;\\n  font-weight: 600;\\n}\\n\\n.form-item {\\n  display: block;\\n}\\n.form-item label {\\n  display: block;\\n  margin-bottom: 0.5rem;\\n  font-weight: 600;\\n}\\n.form-item input {\\n  width: 100%;\\n  margin-bottom: 1rem;\\n  padding: 0.5rem;\\n  background-color: rgba(255, 255, 255, 0.05);\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n  color: #fff;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  transition: 0.3s;\\n}\\n.form-item input:focus {\\n  border: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n.form-item textarea {\\n  min-width: 100%;\\n  max-width: 100%;\\n  height: 80px;\\n  margin-bottom: 1rem;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  padding: 0.5rem;\\n  background-color: rgba(255, 255, 255, 0.05);\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n  color: #fff;\\n  transition: 0.3s;\\n}\\n.form-item textarea:focus {\\n  border: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n.form-item button {\\n  margin-bottom: 0.5rem;\\n}\\n\\n.form-group {\\n  display: flex;\\n  column-gap: 2rem;\\n}\\n\\n.left {\\n  flex-grow: 1;\\n}\\n\\n.radio-wrapper {\\n  display: flex;\\n  justify-content: left;\\n  align-items: center;\\n  gap: 1rem;\\n}\\n\\n.radio-item {\\n  display: flex;\\n  align-items: center;\\n  line-height: 1.8;\\n  padding-right: 2rem;\\n}\\n.radio-item input {\\n  margin-top: 0.65rem;\\n  margin-right: 0.3rem;\\n}\\n\\n.checklist {\\n  display: flex;\\n}\\n\\n#btn-new-checklist-item {\\n  height: 41px;\\n  aspect-ratio: 1;\\n  font-size: 2rem;\\n  font-weight: 300;\\n  display: flex;\\n  justify-content: center;\\n  align-items: flex-end;\\n  border-radius: 0 0.25rem 0.25rem 0;\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n  border-left: 0;\\n}\\n#btn-new-checklist-item:hover {\\n  border: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n\\n#header {\\n  padding: 2rem 2rem;\\n  border-bottom: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n#header h1 {\\n  font-weight: 400;\\n  font-size: 1.8rem;\\n  padding-bottom: 0.5rem;\\n}\\n\\n#btn-new-todo {\\n  position: absolute;\\n  right: 2rem;\\n  top: 2rem;\\n  display: flex;\\n  align-items: center;\\n  gap: 0.5rem;\\n  border: 1px solid rgba(179, 179, 179, 0.2);\\n  background-color: #000;\\n}\\n#btn-new-todo svg {\\n  fill: #ccc;\\n  width: 10px;\\n  transition: 0.3s;\\n  pointer-events: none;\\n}\\n#btn-new-todo span {\\n  font-size: 1rem;\\n  padding-bottom: 0.1rem;\\n  pointer-events: none;\\n}\\n#btn-new-todo:hover {\\n  background-color: rgba(255, 255, 255, 0.05);\\n  border: 1px solid rgba(179, 179, 179, 0.3);\\n}\\n#btn-new-todo:hover svg {\\n  fill: #fff;\\n}\\n\\n#content {\\n  width: 100%;\\n  height: 100%;\\n  min-height: 600px;\\n  padding: 1.5rem;\\n  display: flex;\\n  gap: 1rem;\\n  background: linear-gradient(to bottom right, #b696fb, #96dafb, #96edfb);\\n}\\n\\n#projects {\\n  width: 320px;\\n  box-shadow: 0 0 5px #080808;\\n  background-color: #101112;\\n  border-radius: 0.25rem;\\n}\\n\\n.projects--header {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 1.5rem 1rem 1.5rem 1rem;\\n  border-bottom: 1px solid rgba(179, 179, 179, 0.5);\\n}\\n.projects--header h2 {\\n  font-size: 1.5rem;\\n  font-weight: 300;\\n}\\n\\n.project-item {\\n  display: block;\\n  padding: 0.8rem 1rem;\\n  color: #b3b3b3;\\n  transition: 0.3s;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  z-index: 1000;\\n}\\n.project-item:hover {\\n  color: #fff;\\n}\\n\\n.project-item--active {\\n  background-color: rgba(255, 255, 255, 0.05);\\n}\\n\\n#btn-new-project {\\n  height: 30px;\\n  aspect-ratio: 1;\\n  font-weight: 300;\\n  display: flex;\\n  justify-content: center;\\n  align-items: flex-end;\\n  font-size: 2rem;\\n  line-height: 28px;\\n  border: 0;\\n}\\n\\n#new-project-input {\\n  width: 100%;\\n  display: block;\\n  padding: 0.8rem 1rem;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  animation: slide-down 0.3s;\\n}\\n\\n@keyframes slide-down {\\n  0% {\\n    transform: translateY(-50%);\\n  }\\n  100% {\\n    transform: unset;\\n  }\\n}\\n#todo {\\n  position: relative;\\n  width: calc(100% - 320px);\\n  box-shadow: 0 0 5px #080808;\\n  background-color: #101112;\\n  border-radius: 0.25rem;\\n}\\n\\n.list-item {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-wrap: wrap;\\n  padding: 0 1rem;\\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\\n  position: relative;\\n}\\n.list-item div {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 1rem 0 1rem 2rem;\\n}\\n.list-item span {\\n  display: inline-block;\\n}\\n\\n.list-item--priority {\\n  position: absolute;\\n  left: 1rem;\\n  top: 1.18rem;\\n  width: 0.8rem;\\n  aspect-ratio: 1;\\n  border-radius: 100%;\\n}\\n\\n.list-item--title {\\n  margin-bottom: 0.5rem;\\n}\\n\\n.list-item--description {\\n  font-size: 0.8rem;\\n  color: #b3b3b3;\\n}\\n\\n.list-item--date {\\n  margin: 1rem 0rem 1rem 2rem;\\n}\\n\\n.low-priority {\\n  background-color: #63dd2c;\\n}\\n\\n.normal-priority {\\n  background-color: #ddd22c;\\n}\\n\\n.high-priority {\\n  background-color: #dd2c2c;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Form = function () {\n  return `\n    <div class=\"overlay\">\n      <form class=\"form\">\n        <div class=\"form-item\">\n          <label for=\"form-item--title\">Title</label>\n          <input type=\"text\" id=\"form-item--title\" name=\"title\" />\n        </div>\n\n        <div class=\"form-item\">\n          <label for=\"form-item--description\">Description</label>\n          <input type=\"text\" id=\"form-item--description\" name=\"description\" />\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"form-item left\">\n            <label for=\"form-item--date\">Due Date</label>\n            <input type=\"text\" id=\"form-item--date\" name=\"date\" />\n          </div>\n\n          <div class=\"form-item right\">\n            <p>Priority</p>\n            <div class=\"radio-wrapper\">\n              <div class=\"radio-item\">\n                <input\n                  type=\"radio\"\n                  id=\"form-item--priority-low\"\n                  name=\"priority\"\n                  value=\"low\"\n                />\n                <label for=\"form-item--priority-low\">Low</label>\n              </div>\n              <div class=\"radio-item\">\n                <input\n                  type=\"radio\"\n                  id=\"form-item--priority-normal\"\n                  name=\"priority\"\n                  value=\"normal\"\n                  checked\n                />\n                <label for=\"form-item--priority-normal\">Normal</label>\n              </div>\n              <div class=\"radio-item\">\n                <input\n                  type=\"radio\"\n                  id=\"form-item--priority-high\"\n                  name=\"priority\"\n                  value=\"high\"\n                />\n                <label for=\"form-item--priority-high\">High</label>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-item\">\n          <label for=\"form-item--notes\">Notes</label>\n          <textarea id=\"form-item--notes\" name=\"notes\"></textarea>\n        </div>\n\n        <p>Checklist</p>\n        <div class=\"form-item checklist\">\n          <input type=\"text\" name=\"checklist\" />\n          <button id=\"btn-new-checklist-item\" type=\"button\" class=\"btn\">\n            +\n          </button>\n        </div>\n\n        <div class=\"form-item\">\n          <button id=\"btn-submit-form\" type=\"submit\" class=\"btn\">Done</button>\n        </div>\n      </form>\n    </div>\n  `;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n\n//# sourceURL=webpack://todo-list/./src/components/Form/Form.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Header = function () {\n  return `\n    <header id=\"header\">\n      <h1></h1>\n      <button type=\"button\" id=\"btn-new-todo\" class=\"btn\">\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          width=\"24\"\n          height=\"24\"\n          viewBox=\"0 0 24 24\"\n        >\n          <path d=\"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z\" />\n        </svg>\n        <span>New Item</span>\n      </button>\n    </header>\n  `;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n\n//# sourceURL=webpack://todo-list/./src/components/Header/Header.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ \"./src/styles/app.scss\");\n/* harmony import */ var _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/DOMElements */ \"./src/utils/DOMElements/index.js\");\n/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Project */ \"./src/models/Project/index.js\");\n/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Todo */ \"./src/models/Todo/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header/index.js\");\n/* harmony import */ var _sections_ProjectSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/ProjectSection */ \"./src/sections/ProjectSection/index.js\");\n/* harmony import */ var _views_ProjectList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/ProjectList */ \"./src/views/ProjectList/index.js\");\n/* harmony import */ var _views_TodoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/TodoList */ \"./src/views/TodoList/index.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Form */ \"./src/components/Form/index.js\");\n\n\n\n\n\n\n\n\n\n\nconst ListController = (function () {\n  const add = (project, item) => {\n    project.addItem(item.getInfo());\n  };\n\n  const load = (item) => {\n    console.log(item);\n    const id = item.id.substring(5);\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject().classList.remove('project-item--active');\n    item.classList.add('project-item--active');\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listContainer().remove();\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList().insertAdjacentHTML(\n      'beforeend',\n      (0,_views_TodoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(projects[id].getInfo())\n    );\n  };\n\n  // Read from local storage\n  const read = () => {\n    projects = JSON.parse(localStorage.getItem('projects'));\n    if (projects === null) {\n      projects = [];\n      let defaultProject = (0,_models_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Untitled');\n      projects.push(defaultProject);\n    } else {\n      for (let i in projects) {\n        projects[i] = (0,_models_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projects[i].title, projects[i].items);\n      }\n      _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList().remove();\n      _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projects().insertAdjacentHTML(\n        'beforeend',\n        `<section class=\"projects--list\"></section>`\n      );\n    }\n\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList().insertAdjacentHTML(\n      'beforeend',\n      (0,_views_ProjectList__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(projects)\n    );\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].firstProject().classList.add('project-item--active');\n\n    if (_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listContainer() !== null) {\n      _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listContainer().remove();\n    }\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList().insertAdjacentHTML(\n      'beforeend',\n      (0,_views_TodoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(projects[0].getInfo())\n    );\n  };\n\n  const save = () => {\n    let userData = [];\n    for (let i in projects) {\n      userData.push(projects[i].getInfo());\n    }\n    localStorage.setItem('projects', JSON.stringify(userData));\n  };\n\n  return { add, load, read, save };\n})();\n\nlet projects = [];\n\n_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].content().insertAdjacentHTML('afterbegin', (0,_sections_ProjectSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\nListController.read();\n_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList().insertAdjacentHTML('afterbegin', (0,_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1().innerText = _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject().innerText;\n\n// Event Listener Handler\nfunction addGlobalEventListener(type, selector, callback) {\n  document.addEventListener(type, (e) => {\n    if (e.target.matches(selector)) callback(e);\n  });\n}\n\n// Display todo form\naddGlobalEventListener('click', '#btn-new-todo', () => {\n  _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList().insertAdjacentHTML('beforeend', (0,_components_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"])());\n});\n\n// Add new todo\naddGlobalEventListener('click', '#btn-submit-form', (e) => {\n  const id = _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject().id.substring(5);\n  const input = _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getFormInput();\n  const newItem = (0,_models_Todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n    input.title,\n    input.description,\n    input.date,\n    input.priority,\n    input.notes,\n    input.checklist\n  );\n  ListController.add(projects[id], newItem);\n  ListController.save();\n  ListController.load(_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject());\n  _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form().remove();\n  _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].overlay().remove();\n});\n\n// Switch between projects\naddGlobalEventListener('click', '.project-item', (event) => {\n  ListController.load(event.target);\n});\n\n// Display project form\naddGlobalEventListener('click', '#btn-new-project', () => {\n  const textBox = _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectInput();\n  if (textBox) {\n    textBox.focus();\n    return;\n  }\n  const input = `<input\n    id=\"new-project-input\"\n    type=\"text\"\n    placeholder=\"New Project\"\n  />`;\n  _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList().insertAdjacentHTML('beforeend', input);\n  _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectInput().focus();\n});\n\n// Add new project\naddGlobalEventListener('keydown', '#new-project-input', (event) => {\n  const input = event.target;\n  if (event.key === 'Enter') {\n    projects.push((0,_models_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(input.value));\n    event.target.remove();\n    ListController.save();\n    ListController.read();\n    ListController.load(_utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].latestProject());\n  }\n  if (event.key === 'Escape') {\n    _utils_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectInput().remove();\n  }\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/models/Project/Project.js":
/*!***************************************!*\
  !*** ./src/models/Project/Project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Project(title, items) {\n  let _title = title;\n  let _items = items || [];\n\n  const getInfo = () => {\n    return { title: _title, items: _items };\n  };\n  const getItems = () => _items;\n  const addItem = (item) => _items.push(item);\n\n  return { getInfo, getItems, addItem };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://todo-list/./src/models/Project/Project.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Projects = function () {\n  return `\n    <nav id=\"projects\">\n      <header class=\"projects--header\">\n        <h2>Projects</h2>\n        <button id=\"btn-new-project\" class=\"btn\" type=\"button\">+</button>\n      </header>\n\n      <section class=\"projects--list\"></section>\n    </nav>\n  `;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\n\n\n//# sourceURL=webpack://todo-list/./src/sections/ProjectSection/ProjectSection.js?");

/***/ }),

/***/ "./src/sections/ProjectSection/index.js":
/*!**********************************************!*\
  !*** ./src/sections/ProjectSection/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ProjectSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectSection */ \"./src/sections/ProjectSection/ProjectSection.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProjectSection__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://todo-list/./src/sections/ProjectSection/index.js?");

/***/ }),

/***/ "./src/utils/DOMElements/DOMElements.js":
/*!**********************************************!*\
  !*** ./src/utils/DOMElements/DOMElements.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst DOMElements = (() => {\n  const content = () => document.querySelector('#content');\n  const projects = () => document.querySelector('#projects');\n  const projectList = () => document.querySelector('.projects--list');\n  const firstProject = () => document.querySelector('.project-item');\n  const latestProject = () => {\n    const nodes = document.querySelectorAll('.project-item');\n    const last = nodes[nodes.length - 1];\n    if (last !== null) {\n      return last;\n    }\n  };\n  const currentProject = () => document.querySelector('.project-item--active');\n  const newProjectBtn = () => document.querySelector('#btn-new-project');\n  const newProjectInput = () => document.querySelector('#new-project-input');\n  const todoList = () => document.querySelector('#todo');\n  const h1 = () => document.querySelector('h1');\n  const listContainer = () => document.querySelector('.list-container');\n  const newTodoBtn = () => document.querySelector('#btn-new-todo');\n  const overlay = () => document.querySelector('.overlay');\n  const form = () => document.querySelector('.form');\n  const formRadio = () => document.querySelector('input[type=radio]:checked');\n  const formSubmitBtn = () => document.querySelector('#btn-submit-form');\n\n  const getFormInput = () => {\n    let checklist = [];\n    const input = Object.values(form()).reduce((obj, field) => {\n      if (field.type === 'radio') {\n        obj[field.name] = formRadio().value;\n      } else if (field.name === 'checklist') {\n        checklist.push(field.value);\n        obj[field.name] = checklist;\n      } else {\n        obj[field.name] = field.value;\n      }\n      return obj;\n    }, {});\n\n    delete input[''];\n    return input;\n  };\n\n  return {\n    content,\n    currentProject,\n    firstProject,\n    form,\n    formRadio,\n    formSubmitBtn,\n    getFormInput,\n    h1,\n    latestProject,\n    listContainer,\n    newProjectBtn,\n    newProjectInput,\n    newTodoBtn,\n    overlay,\n    projectList,\n    projects,\n    todoList,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMElements);\n\n\n//# sourceURL=webpack://todo-list/./src/utils/DOMElements/DOMElements.js?");

/***/ }),

/***/ "./src/utils/DOMElements/index.js":
/*!****************************************!*\
  !*** ./src/utils/DOMElements/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOMElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMElements */ \"./src/utils/DOMElements/DOMElements.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DOMElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://todo-list/./src/utils/DOMElements/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst TodoList = function (project) {\n  let listContainer = '';\n  for (let i in project.items) {\n    listContainer += objectToHTML(project.items[i]);\n  }\n  const content = `\n    <div class=\"list-container\">\n      ${listContainer}\n    </div>\n  `;\n\n  return content;\n};\n\nfunction objectToHTML(item) {\n  return `\n    <div class=\"list-item\">\n      <span class=\"list-item--priority ${item.priority}-priority\"></span>\n      <div>\n        <span class=\"list-item--title\">${item.title}</span>\n        <span class=\"list-item--description\">${item.description}</span>\n      </div>\n      <span class=\"list-item--date\">${item.dueDate}</span>\n    </div>\n  `;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);\n\n\n//# sourceURL=webpack://todo-list/./src/views/TodoList/TodoList.js?");

/***/ }),

/***/ "./src/views/TodoList/index.js":
/*!*************************************!*\
  !*** ./src/views/TodoList/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ \"./src/views/TodoList/TodoList.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TodoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://todo-list/./src/views/TodoList/index.js?");

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