module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/note/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/note/index.js":
/*!*********************************!*\
  !*** ./pages/api/note/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/data */ \"./src/data/data.js\");\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_data_data__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()().post((req, res) => {\n  const note = _objectSpread(_objectSpread({}, req.body), {}, {\n    id: Date.now()\n  });\n\n  _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.push(note);\n  res.json({\n    data: note\n  });\n}).get((req, res) => {\n  res.json({\n    data: _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbm90ZS9pbmRleC5qcz9mOTBiIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJuYyIsInBvc3QiLCJyZXEiLCJyZXMiLCJub3RlIiwiYm9keSIsImlkIiwiRGF0ZSIsIm5vdyIsIm5vdGVzIiwicHVzaCIsImpzb24iLCJkYXRhIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQSxNQUFNQSxPQUFPLEdBQUlDLG1EQUFFLEdBQ2RDLElBRFksQ0FDUCxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBWTtBQUNkLFFBQU1DLElBQUksbUNBQ0hGLEdBQUcsQ0FBQ0csSUFERDtBQUVOQyxNQUFFLEVBQUVDLElBQUksQ0FBQ0MsR0FBTDtBQUZFLElBQVY7O0FBSUFDLHVEQUFLLENBQUNDLElBQU4sQ0FBV04sSUFBWDtBQUNBRCxLQUFHLENBQUNRLElBQUosQ0FBUztBQUFDQyxRQUFJLEVBQUVSO0FBQVAsR0FBVDtBQUNILENBUlksRUFTWlMsR0FUWSxDQVNSLENBQUNYLEdBQUQsRUFBS0MsR0FBTCxLQUFZO0FBQ2JBLEtBQUcsQ0FBQ1EsSUFBSixDQUFTO0FBQUNDLFFBQUksRUFBRUgscURBQUtBO0FBQVosR0FBVDtBQUNILENBWFksQ0FBakI7QUFjZVYsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbm90ZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuYyBmcm9tICduZXh0LWNvbm5lY3QnXG5pbXBvcnQgbm90ZXMgZnJvbSBcIi4uLy4uLy4uL3NyYy9kYXRhL2RhdGFcIlxuXG5cbmNvbnN0IGhhbmRsZXIgID0gbmMoKVxuICAgIC5wb3N0KChyZXEsIHJlcyk9PntcbiAgICAgICAgY29uc3Qgbm90ZSA9IHtcbiAgICAgICAgICAgIC4uLnJlcS5ib2R5LFxuICAgICAgICAgICAgaWQ6IERhdGUubm93KClcbiAgICAgICAgfVxuICAgICAgICBub3Rlcy5wdXNoKG5vdGUpXG4gICAgICAgIHJlcy5qc29uKHtkYXRhOiBub3RlfSlcbiAgICB9KVxuICAgIC5nZXQoKHJlcSxyZXMpPT4ge1xuICAgICAgICByZXMuanNvbih7ZGF0YTogbm90ZXN9KVxuICAgIH0pXG5cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/note/index.js\n");

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// src/data/data\nconst notes = new Array(15).fill(1).map((_, i) => ({\n  id: Date.now() + i,\n  title: `Note ${i}`\n}));\nmodule.exports = notes; // export default notes//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9kYXRhLmpzP2Q1YzciXSwibmFtZXMiOlsibm90ZXMiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwiRGF0ZSIsIm5vdyIsInRpdGxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNQSxLQUFLLEdBQUcsSUFBSUMsS0FBSixDQUFVLEVBQVYsRUFDWEMsSUFEVyxDQUNOLENBRE0sRUFFWEMsR0FGVyxDQUVQLENBQUNDLENBQUQsRUFBSUMsQ0FBSixNQUFXO0FBQ2RDLElBQUUsRUFBRUMsSUFBSSxDQUFDQyxHQUFMLEtBQWFILENBREg7QUFFZEksT0FBSyxFQUFHLFFBQU9KLENBQUU7QUFGSCxDQUFYLENBRk8sQ0FBZDtBQU1BSyxNQUFNLENBQUNDLE9BQVAsR0FBaUJYLEtBQWpCLEMsQ0FDQSIsImZpbGUiOiIuL3NyYy9kYXRhL2RhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvZGF0YS9kYXRhXG5jb25zdCBub3RlcyA9IG5ldyBBcnJheSgxNSlcbiAgLmZpbGwoMSlcbiAgLm1hcCgoXywgaSkgPT4gKHtcbiAgICBpZDogRGF0ZS5ub3coKSArIGksXG4gICAgdGl0bGU6IGBOb3RlICR7aX1gXG4gIH0pKVxubW9kdWxlLmV4cG9ydHMgPSBub3Rlc1xuLy8gZXhwb3J0IGRlZmF1bHQgbm90ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/data/data.js\n");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-connect\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIj9lYTQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtY29ubmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-connect\n");

/***/ })

/******/ });