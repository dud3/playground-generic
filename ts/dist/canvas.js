"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
exports.default = (function (id) {
    var canvas = document.getElementById(id);
    if (!canvas)
        return false;
    var ctx = canvas.getContext('2d');
    if (!ctx)
        return false;
    var clear = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    return {
        canvas: canvas,
        ctx: ctx,
        clear: clear
    };
});
