"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.construct = function (a) {
        this.a = a;
    };
    Point.prototype.diff = function (b) {
        return this.a.map(function (e, i) { return e - b[i]; });
    };
    return Point;
}());
exports.Point = Point;
