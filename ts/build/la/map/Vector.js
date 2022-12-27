"use strict";
// Vectors
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(u) {
        this.u = u;
    }
    Vector.prototype.add = function (v) {
        if (v instanceof Array)
            return this;
        return new Vector(this.u.map(function (e, i) { return e + (v.get()[i] || 0); }));
    };
    Vector.prototype.sub = function (v) {
        if (v instanceof Array)
            return this;
        return new Vector(this.u.map(function (e, i) { return e - (v.get()[i] || 0); }));
    };
    Vector.prototype.get = function () {
        return this.u;
    };
    return Vector;
}());
exports.Vector = Vector;
//# sourceMappingURL=Vector.js.map