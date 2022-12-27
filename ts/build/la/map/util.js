"use strict";
// @typescript:-downlevelIteration
//
var upTo = function (a, b) { return Array.from(Array(a).keys()).map(function (_) { return b; }); };
console.log(upTo(4, 'a'));
//# sourceMappingURL=util.js.map