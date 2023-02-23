"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
var Matrix = /** @class */ (function () {
    function Matrix(a) {
        this.a = a;
    }
    Matrix.prototype.traverse = function (b, f) {
        return this.a.map(function (e, i) { return f(e, b[i], i); });
    };
    Matrix.prototype.add = function (b) {
        this.a.map(function (e, i) { e.add(b[i].get()); });
    };
    return Matrix;
}());
exports.Matrix = Matrix;
