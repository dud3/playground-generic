"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
;
var clock = {
    start: 0
};
var Canvas = /** @class */ (function () {
    function Canvas(id) {
        this.entities = [];
        this.canvas = document.getElementById(id);
        if (this.canvas) {
            this.ctx = this.canvas.getContext('2d');
        }
        this.clock = {
            start: undefined
        };
    }
    Canvas.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Canvas.prototype.push = function (entities) {
        this.entities = this.entities.concat(entities);
    };
    Canvas.prototype._step = function (time) {
        if (this.clock.start === undefined) {
            this.clock.start = time;
        }
        var dt = time - this.clock.start;
        this.entities.forEach(function (e) { e.update(dt, dt); });
        window.requestAnimationFrame(this._step.bind(this));
    };
    Canvas.prototype.tick = function () {
        window.requestAnimationFrame(this._step.bind(this));
    };
    return Canvas;
}());
exports.Canvas = Canvas;
