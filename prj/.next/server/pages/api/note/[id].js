module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/note/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/note/[id].js":
/*!********************************!*\
  !*** ./pages/api/note/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/data */ \"./src/data/data.js\");\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_data_data__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst getNote = id => _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.find(n => n.id === parseInt(id));\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()().get((req, res) => {\n  const note = getNote(req.query.id);\n\n  if (!note) {\n    res.status(404);\n    res.end();\n    return;\n  }\n\n  res.json({\n    data: note\n  });\n}).patch((req, res) => {\n  const note = getNote(req.query.id);\n\n  if (!note) {\n    res.status(404);\n    res.end();\n    return;\n  }\n\n  const i = _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(n => n.id === parseInt(req.query.id));\n\n  const updated = _objectSpread(_objectSpread({}, note), req.body);\n\n  _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a[i] = updated;\n  res.json({\n    data: updated\n  });\n}).delete((req, res) => {\n  const note = getNote(req.query.id);\n\n  if (!note) {\n    res.status(404);\n    res.end();\n    return;\n  }\n\n  const i = _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(n => n.id === parseInt(req.query.id));\n  _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.splice(i, 1);\n  res.json({\n    data: req.query.id\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbm90ZS8uanM/OGExYiJdLCJuYW1lcyI6WyJnZXROb3RlIiwiaWQiLCJub3RlcyIsImZpbmQiLCJuIiwicGFyc2VJbnQiLCJoYW5kbGVyIiwibmMiLCJnZXQiLCJyZXEiLCJyZXMiLCJub3RlIiwicXVlcnkiLCJzdGF0dXMiLCJlbmQiLCJqc29uIiwiZGF0YSIsInBhdGNoIiwiaSIsImZpbmRJbmRleCIsInVwZGF0ZWQiLCJib2R5IiwiZGVsZXRlIiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHQyxFQUFFLElBQUlDLHFEQUFLLENBQUNDLElBQU4sQ0FBV0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNILEVBQUYsS0FBU0ksUUFBUSxDQUFDSixFQUFELENBQWpDLENBQXRCOztBQUVBLE1BQU1LLE9BQU8sR0FBR0MsbURBQUUsR0FDZkMsR0FEYSxDQUNULENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBRWpCLFFBQU1DLElBQUksR0FBR1gsT0FBTyxDQUFDUyxHQUFHLENBQUNHLEtBQUosQ0FBVVgsRUFBWCxDQUFwQjs7QUFFQSxNQUFJLENBQUNVLElBQUwsRUFBVztBQUNURCxPQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYO0FBQ0FILE9BQUcsQ0FBQ0ksR0FBSjtBQUNBO0FBQ0Q7O0FBRURKLEtBQUcsQ0FBQ0ssSUFBSixDQUFTO0FBQUNDLFFBQUksRUFBRUw7QUFBUCxHQUFUO0FBQ0QsQ0FaYSxFQWFiTSxLQWJhLENBYVAsQ0FBQ1IsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDbkIsUUFBTUMsSUFBSSxHQUFHWCxPQUFPLENBQUNTLEdBQUcsQ0FBQ0csS0FBSixDQUFVWCxFQUFYLENBQXBCOztBQUVBLE1BQUksQ0FBQ1UsSUFBTCxFQUFXO0FBQ1RELE9BQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVg7QUFDQUgsT0FBRyxDQUFDSSxHQUFKO0FBQ0E7QUFDRDs7QUFFRCxRQUFNSSxDQUFDLEdBQUdoQixxREFBSyxDQUFDaUIsU0FBTixDQUFnQmYsQ0FBQyxJQUFJQSxDQUFDLENBQUNILEVBQUYsS0FBU0ksUUFBUSxDQUFDSSxHQUFHLENBQUNHLEtBQUosQ0FBVVgsRUFBWCxDQUF0QyxDQUFWOztBQUNBLFFBQU1tQixPQUFPLG1DQUFPVCxJQUFQLEdBQWdCRixHQUFHLENBQUNZLElBQXBCLENBQWI7O0FBRUFuQix1REFBSyxDQUFDZ0IsQ0FBRCxDQUFMLEdBQVdFLE9BQVg7QUFDQVYsS0FBRyxDQUFDSyxJQUFKLENBQVM7QUFBQ0MsUUFBSSxFQUFFSTtBQUFQLEdBQVQ7QUFDRCxDQTNCYSxFQTRCYkUsTUE1QmEsQ0E0Qk4sQ0FBQ2IsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDcEIsUUFBTUMsSUFBSSxHQUFHWCxPQUFPLENBQUNTLEdBQUcsQ0FBQ0csS0FBSixDQUFVWCxFQUFYLENBQXBCOztBQUVBLE1BQUksQ0FBQ1UsSUFBTCxFQUFXO0FBQ1RELE9BQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVg7QUFDQUgsT0FBRyxDQUFDSSxHQUFKO0FBQ0E7QUFDRDs7QUFDRCxRQUFNSSxDQUFDLEdBQUdoQixxREFBSyxDQUFDaUIsU0FBTixDQUFnQmYsQ0FBQyxJQUFJQSxDQUFDLENBQUNILEVBQUYsS0FBU0ksUUFBUSxDQUFDSSxHQUFHLENBQUNHLEtBQUosQ0FBVVgsRUFBWCxDQUF0QyxDQUFWO0FBRUFDLHVEQUFLLENBQUNxQixNQUFOLENBQWFMLENBQWIsRUFBZ0IsQ0FBaEI7QUFFQVIsS0FBRyxDQUFDSyxJQUFKLENBQVM7QUFBQ0MsUUFBSSxFQUFFUCxHQUFHLENBQUNHLEtBQUosQ0FBVVg7QUFBakIsR0FBVDtBQUNELENBekNhLENBQWhCO0FBNENlSyxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9ub3RlL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmMgZnJvbSAnbmV4dC1jb25uZWN0J1xuaW1wb3J0IG5vdGVzIGZyb20gJy4uLy4uLy4uL3NyYy9kYXRhL2RhdGEnXG5cbmNvbnN0IGdldE5vdGUgPSBpZCA9PiBub3Rlcy5maW5kKG4gPT4gbi5pZCA9PT0gcGFyc2VJbnQoaWQpKVxuXG5jb25zdCBoYW5kbGVyID0gbmMoKVxuICAuZ2V0KChyZXEsIHJlcykgPT4ge1xuICAgIFxuICAgIGNvbnN0IG5vdGUgPSBnZXROb3RlKHJlcS5xdWVyeS5pZClcblxuICAgIGlmICghbm90ZSkge1xuICAgICAgcmVzLnN0YXR1cyg0MDQpXG4gICAgICByZXMuZW5kKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHJlcy5qc29uKHtkYXRhOiBub3RlfSlcbiAgfSlcbiAgLnBhdGNoKChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IG5vdGUgPSBnZXROb3RlKHJlcS5xdWVyeS5pZClcblxuICAgIGlmICghbm90ZSkge1xuICAgICAgcmVzLnN0YXR1cyg0MDQpXG4gICAgICByZXMuZW5kKClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBcbiAgICBjb25zdCBpID0gbm90ZXMuZmluZEluZGV4KG4gPT4gbi5pZCA9PT0gcGFyc2VJbnQocmVxLnF1ZXJ5LmlkKSlcbiAgICBjb25zdCB1cGRhdGVkID0gey4uLm5vdGUsIC4uLnJlcS5ib2R5fVxuXG4gICAgbm90ZXNbaV0gPSB1cGRhdGVkXG4gICAgcmVzLmpzb24oe2RhdGE6IHVwZGF0ZWR9KVxuICB9KVxuICAuZGVsZXRlKChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IG5vdGUgPSBnZXROb3RlKHJlcS5xdWVyeS5pZClcblxuICAgIGlmICghbm90ZSkge1xuICAgICAgcmVzLnN0YXR1cyg0MDQpXG4gICAgICByZXMuZW5kKClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBpID0gbm90ZXMuZmluZEluZGV4KG4gPT4gbi5pZCA9PT0gcGFyc2VJbnQocmVxLnF1ZXJ5LmlkKSlcbiAgICBcbiAgICBub3Rlcy5zcGxpY2UoaSwgMSlcblxuICAgIHJlcy5qc29uKHtkYXRhOiByZXEucXVlcnkuaWR9KVxuICB9KVxuICBcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/note/[id].js\n");

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