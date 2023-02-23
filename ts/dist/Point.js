"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Primitive_1 = require("./Primitive");
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line(c, pos) {
        return _super.call(this, c, pos) || this;
    }
    Line.prototype.render = function () {
        var ctx = this.c.ctx;
        var a = this.pos.get();
        ctx.beginPath();
        ctx.arc(a[0], a[1], 2, 0, 2 * Math.PI);
        ctx.fill();
    };
    return Line;
}(Primitive_1.default));
exports.default = Line;
