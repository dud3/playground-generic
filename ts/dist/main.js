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

/***/ "./src/canvas/canvas.ts":
/*!******************************!*\
  !*** ./src/canvas/canvas.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Canvas = void 0;\n;\nvar clock = {\n    start: 0\n};\nvar Canvas = /** @class */ (function () {\n    function Canvas(id) {\n        this.entities = [];\n        this.canvas = document.getElementById(id);\n        if (this.canvas) {\n            this.ctx = this.canvas.getContext('2d');\n        }\n        this.clock = {\n            start: undefined\n        };\n    }\n    Canvas.prototype.clear = function () {\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    };\n    Canvas.prototype.push = function (entities) {\n        this.entities = this.entities.concat(entities);\n    };\n    Canvas.prototype._step = function (time) {\n        if (this.clock.start === undefined) {\n            this.clock.start = time;\n        }\n        var dt = time - this.clock.start;\n        this.entities.forEach(function (e) { e.update(dt, dt); });\n        window.requestAnimationFrame(this._step.bind(this));\n    };\n    Canvas.prototype.tick = function () {\n        window.requestAnimationFrame(this._step.bind(this));\n    };\n    return Canvas;\n}());\nexports.Canvas = Canvas;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/canvas/canvas.ts?");

/***/ }),

/***/ "./src/drawable/Drawable.ts":
/*!**********************************!*\
  !*** ./src/drawable/Drawable.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Vector_1 = __webpack_require__(/*! ~math/Vector */ \"./src/math/Vector.ts\");\nvar Drawable = /** @class */ (function () {\n    function Drawable(c, pos) {\n        this.c = c;\n        this.pos = new Vector_1.Vector(pos);\n    }\n    Drawable.prototype.render = function () { };\n    return Drawable;\n}());\nexports[\"default\"] = Drawable;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/drawable/Drawable.ts?");

/***/ }),

/***/ "./src/entity/Line.ts":
/*!****************************!*\
  !*** ./src/entity/Line.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Line = void 0;\nvar Line_1 = __webpack_require__(/*! ~primitive/Line */ \"./src/primitive/Line.ts\");\nvar Line = /** @class */ (function (_super) {\n    __extends(Line, _super);\n    function Line() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Line.prototype.render = function () {\n    };\n    Line.prototype.update = function (dt, du) {\n        console.log(dt, du);\n    };\n    return Line;\n}(Line_1.default));\nexports.Line = Line;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/entity/Line.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar canvas_1 = __webpack_require__(/*! ~canvas/canvas */ \"./src/canvas/canvas.ts\");\nvar Line_1 = __webpack_require__(/*! ~primitive/Line */ \"./src/primitive/Line.ts\");\nvar Line_2 = __webpack_require__(/*! ~entity/Line */ \"./src/entity/Line.ts\");\nvar Point_1 = __webpack_require__(/*! ~primitive/Point */ \"./src/primitive/Point.ts\");\nvar Matrix_1 = __webpack_require__(/*! ~math/Matrix */ \"./src/math/Matrix.ts\");\nvar w = window;\nvar _canvas = new canvas_1.Canvas(\"canvas\");\nif (_canvas) {\n    var _line = new Line_1.default(_canvas, [0, 0], [32, 32]);\n    _line.render();\n    var _line1 = new Line_1.default(_canvas, [32, 32], [64, 32]);\n    _line1.render();\n    (new Point_1.default(_canvas, [128, 128])).render();\n    (new Point_1.default(_canvas, [256, 128])).render();\n    var _eline = new Line_2.Line(_canvas, [0, 0], [32, 32]);\n    _canvas.push([_eline]);\n    // _canvas.tick();\n    var mat22 = (0, Matrix_1.Mat22)([0, 1], [1, 0]);\n    console.log(mat22);\n    w.canvas = _canvas;\n    w.line = _line;\n    console.log(_canvas, Math.random(), _line);\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/main.ts?");

/***/ }),

/***/ "./src/math/Matrix.ts":
/*!****************************!*\
  !*** ./src/math/Matrix.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Mat33 = exports.Mat22 = exports.Matrix = void 0;\nvar Vector_1 = __webpack_require__(/*! ./Vector */ \"./src/math/Vector.ts\");\nvar Matrix = /** @class */ (function () {\n    function Matrix(a) {\n        this.a = a;\n    }\n    Matrix.prototype.traverse = function (b, f) {\n        return this.a.map(function (e, i) { return f(e, b[i], i); });\n    };\n    Matrix.prototype.add = function (b) {\n        this.a.map(function (e, i) { e.add(b[i].get()); });\n    };\n    return Matrix;\n}());\nexports.Matrix = Matrix;\nvar Mat22 = function (a, b) { return new Matrix([(0, Vector_1.V2)(a), (0, Vector_1.V2)(b)]); };\nexports.Mat22 = Mat22;\nvar Mat33 = function (a, b, c) { return new Matrix([(0, Vector_1.V3)(a), (0, Vector_1.V3)(b), (0, Vector_1.V3)(c)]); };\nexports.Mat33 = Mat33;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/math/Matrix.ts?");

/***/ }),

/***/ "./src/math/Vector.ts":
/*!****************************!*\
  !*** ./src/math/Vector.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.V4 = exports.V3 = exports.V2 = exports.Vector = void 0;\nvar Vector = /** @class */ (function () {\n    function Vector(v) {\n        this.v = v;\n    }\n    Vector.prototype.traverse = function (u, f) {\n        return this.v.map(function (e, i) { return f(e, u[i], i); });\n    };\n    Vector.prototype.add = function (u) {\n        this.v = this.traverse(u, function (vi, ui) { return vi + ui; });\n        return this;\n    };\n    Vector.prototype.sub = function (u) {\n        this.v = this.traverse(u, function (vi, vu) { return vi - vu; });\n        return this;\n    };\n    Vector.prototype.get = function () {\n        return this.v;\n    };\n    return Vector;\n}());\nexports.Vector = Vector;\nvar V2 = function (v) { return new Vector(v); };\nexports.V2 = V2;\nvar V3 = function (v) { return new Vector(v); };\nexports.V3 = V3;\nvar V4 = function (v) { return new Vector(v); };\nexports.V4 = V4;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/math/Vector.ts?");

/***/ }),

/***/ "./src/primitive/Line.ts":
/*!*******************************!*\
  !*** ./src/primitive/Line.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Vector_1 = __webpack_require__(/*! ~math/Vector */ \"./src/math/Vector.ts\");\nvar Primitive_1 = __webpack_require__(/*! ~primitive/Primitive */ \"./src/primitive/Primitive.ts\");\nvar Line = /** @class */ (function (_super) {\n    __extends(Line, _super);\n    function Line(c, pos, b) {\n        var _this = _super.call(this, c, pos) || this;\n        _this.a = new Vector_1.Vector(pos);\n        _this.b = new Vector_1.Vector(b);\n        return _this;\n    }\n    Line.prototype.render = function () {\n        var a = this.a.get();\n        var b = this.b.get();\n        this.c.ctx.moveTo(a[0], a[1]);\n        this.c.ctx.lineTo(b[0], b[1]);\n        this.c.ctx.stroke();\n    };\n    return Line;\n}(Primitive_1.default));\nexports[\"default\"] = Line;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/primitive/Line.ts?");

/***/ }),

/***/ "./src/primitive/Point.ts":
/*!********************************!*\
  !*** ./src/primitive/Point.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Primitive_1 = __webpack_require__(/*! ~primitive/Primitive */ \"./src/primitive/Primitive.ts\");\nvar Line = /** @class */ (function (_super) {\n    __extends(Line, _super);\n    function Line(c, pos) {\n        return _super.call(this, c, pos) || this;\n    }\n    Line.prototype.render = function () {\n        var ctx = this.c.ctx;\n        var a = this.pos.get();\n        ctx.beginPath();\n        ctx.arc(a[0], a[1], 2, 0, 2 * Math.PI);\n        ctx.fill();\n    };\n    return Line;\n}(Primitive_1.default));\nexports[\"default\"] = Line;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/primitive/Point.ts?");

/***/ }),

/***/ "./src/primitive/Primitive.ts":
/*!************************************!*\
  !*** ./src/primitive/Primitive.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Drawable_1 = __webpack_require__(/*! ~drawable/Drawable */ \"./src/drawable/Drawable.ts\");\nvar Primitive = /** @class */ (function (_super) {\n    __extends(Primitive, _super);\n    function Primitive() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    return Primitive;\n}(Drawable_1.default));\nexports[\"default\"] = Primitive;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/primitive/Primitive.ts?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;