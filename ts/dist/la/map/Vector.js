"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(v) {
        this.v = v;
    }
    Vector.prototype.traverse = function (u, f) {
        return this.v.map(function (e, i) { return f(e, u[i], i); });
    };
    Vector.prototype.add = function (u) {
        this.v = this.traverse(u, function (vi, ui) { return vi + ui; });
        return this;
    };
    Vector.prototype.sub = function (u) {
        this.v = this.traverse(u, function (vi, vu) { return vi - vu; });
        return this;
    };
    Vector.prototype.get = function () {
        return this.v;
    };
    return Vector;
}());
exports.Vector = Vector;
