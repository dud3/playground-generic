"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector_1 = require("./la/Vector");
var Drawable = /** @class */ (function () {
    function Drawable(c, pos) {
        this.c = c;
        this.pos = new Vector_1.Vector(pos);
    }
    Drawable.prototype.render = function () { };
    return Drawable;
}());
exports.default = Drawable;
