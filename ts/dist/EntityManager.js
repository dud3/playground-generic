"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EntityManager = {
    entities: [],
    update: function (dt) {
        this.entities.forEach(function (e) { e.update(dt, dt); });
    },
    render: function () {
        this.entities.forEach(function (e) { e.render(); });
    }
};
