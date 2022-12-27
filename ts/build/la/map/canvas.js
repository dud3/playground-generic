"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canvas = void 0;
var canvas = function () {
    var canvas = document.getElementById('canvas');
    if (!canvas)
        return false;
    var ctx = canvas.getContext('2d');
    if (!ctx)
        return false;
    return {
        canvas: canvas,
        ctx: ctx
    };
};
exports.canvas = canvas;
//# sourceMappingURL=canvas.js.map