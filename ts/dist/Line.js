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
var Vector_1 = require("./la/Vector");
var Primitive_1 = require("./Primitive");
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line(c, pos, b) {
        var _this = _super.call(this, c, pos) || this;
        _this.a = new Vector_1.Vector(pos);
        _this.b = new Vector_1.Vector(b);
        return _this;
    }
    Line.prototype.render = function () {
        var a = this.a.get();
        var b = this.b.get();
        this.c.ctx.moveTo(a[0], a[1]);
        this.c.ctx.lineTo(b[0], b[1]);
        this.c.ctx.stroke();
    };
    return Line;
}(Primitive_1.default));
exports.default = Line;
