"use strict";
exports.__esModule = true;
exports.Vec2 = void 0;
var Vec2 = /** @class */ (function () {
    function Vec2(a, b) {
        this.a = a;
        this.b = b;
    }
    Vec2.prototype.sub = function (vec2) {
        return new Vec2(this.a - vec2.a, this.b - vec2.b);
    };
    Vec2.prototype.add = function (vec2) {
        return new Vec2(this.a + vec2.a, this.b + vec2.b);
    };
    Vec2.prototype.set = function (a, b) {
        this.a = a;
        this.b = b;
    };
    return Vec2;
}());
exports.Vec2 = Vec2;
//# sourceMappingURL=Vec2.js.map