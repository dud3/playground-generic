"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
var Matrix = /** @class */ (function () {
    function Matrix(m) {
        this.m = m;
    }
    Matrix.prototype.add = function (m) {
        return this.m.map(function (v, i) { var _a; return v.add((_a = m.get()[i]) !== null && _a !== void 0 ? _a : []); });
    };
    Matrix.prototype.sub = function (m) {
        return this.m.map(function (v, i) { var _a; return v.sub((_a = m.get()[i]) !== null && _a !== void 0 ? _a : []); });
    };
    Matrix.prototype.get = function () {
        return this.m;
    };
    return Matrix;
}());
exports.Matrix = Matrix;
/**
 * Example:
 *
 * const A22 = new Matrix<Mat<Vector<Vec2>>>([
 * 	new Vector<Vec2>([0, 1]),
 * 	new Vector<Vec2>([0, 1])
 * ]);
 *
 * const B22 = new Matrix<Mat<Vector<Vec2>>>([
 * 	new Vector<Vec2>([1, 1]),
 * 	new Vector<Vec2>([1, 1])
 * ]);
 *
 * const A33 = new Matrix<Mat<Vector<Vec3>>>([
 * 	new Vector<Vec3>([0,0,1]),
 * 	new Vector<Vec3>([0,0,1]),
 * 	new Vector<Vec3>([0,0,1])
 * ]);
 *
 * console.log(A22.add(A22), B22.sub(A22));
 */
//# sourceMappingURL=Matrix.js.map