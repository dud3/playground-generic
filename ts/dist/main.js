(()=>{"use strict";var t={253:function(t,n){var e=this&&this.__awaiter||function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function s(t){try{a(o.next(t))}catch(t){i(t)}}function c(t){try{a(o.throw(t))}catch(t){i(t)}}function a(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(s,c)}a((o=o.apply(t,n||[])).next())}))},o=this&&this.__generator||function(t,n){var e,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(a){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(s=0)),s;)try{if(e=1,o&&(r=2&c[0]?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return s.label++,{value:c[1],done:!1};case 5:s.label++,o=c[1],c=[0];continue;case 7:c=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){s=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){s.label=c[1];break}if(6===c[0]&&s.label<r[1]){s.label=r[1],r=c;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(c);break}r[2]&&s.ops.pop(),s.trys.pop();continue}c=n.call(t,s)}catch(t){c=[6,t],o=0}finally{e=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}};Object.defineProperty(n,"__esModule",{value:!0}),n.Canvas=void 0;var r=function(){function t(t){this.entities=[],this.canvas=document.getElementById(t),this.canvas&&(this.ctx=this.canvas.getContext("2d")),this.clock={start:void 0,upf:1,fc:0,dt:0,est:0,clear:!0}}return t.prototype.clear=function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},t.prototype.push=function(t){this.entities=this.entities.concat(t)},t.prototype._step=function(t){var n;return e(this,void 0,void 0,(function(){var e,r=this;return o(this,(function(o){return this.clock.fc+=1,this.clock.fc%this.clock.upf!=0||(e=this.clock.dt=t-(null!==(n=this.clock.start)&&void 0!==n?n:0),this.clock.start=t,this.clock.fc=0,this.clock.clear&&this.clear(),this.entities.forEach((function(t){r.main(t,e)}))),window.requestAnimationFrame(this._step.bind(this)),[2]}))}))},t.prototype.tick=function(){window.requestAnimationFrame(this._step.bind(this))},t.prototype.update=function(t,n){t.update(n,n,t)},t.prototype.render=function(t,n){t.space.render(this),t.render(this,n,t)},t.prototype.main=function(t,n){this.update(t,n),this.render(t,n)},t}();n.Canvas=r},836:(t,n)=>{Object.defineProperty(n,"__esModule",{value:!0});var e=function(){function t(t){this.pos=t}return t.prototype.render=function(t){},t}();n.default=e},232:(t,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Entity=void 0;var o=e(39),r=e(34),i=e(454),s=e(821);n.Entity={Line:r.default,Point:o.default,Triangle:i.default,Rectangle:s.default}},165:(t,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Entity=void 0;var o=e(521),r=e(782),i=function(){function t(t){var n;this.offset=(0,r.Vec3)(null!==(n=t.offset)&&void 0!==n?n:[0,0,0]),this.space=new o.Space((0,r.Vec3)(t.pos)),this.pos=this.space.span(this.offset)}return t.prototype.move=function(t){this.space.setOrigin((0,r.Vec3)(t)),this.pos=this.space.span(this.offset)},t.prototype.transform=function(t){this.space.setBasis(t)},t.prototype.update=function(t,n,e){},t.prototype.render=function(t,n,e){},t}();n.Entity=i},34:function(t,n,e){var o,r=this&&this.__extends||(o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},o(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)});Object.defineProperty(n,"__esModule",{value:!0});var i=e(782),s=e(641),c=function(t){function n(n,e){var o=t.call(this,n)||this;return o.primitive=new s.default(o.pos,(0,i.V3)(e)),o}return r(n,t),n.prototype.render=function(t,n){this.primitive.render(t)},n}(e(165).Entity);n.default=c},39:function(t,n,e){var o,r=this&&this.__extends||(o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},o(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)});Object.defineProperty(n,"__esModule",{value:!0});var i=e(782),s=e(517),c=function(t){function n(n,e){void 0===e&&(e={});var o,r=this;return(r=t.call(this,n)||this).primitive=new s.default(r.pos,null!==(o=e.color)&&void 0!==o?o:"#000"),r}return r(n,t),n.prototype.update=function(t,n,e){},n.prototype.render=function(t,n){this.primitive.render(t)},n.prototype.move=function(t){this.space.setOrigin((0,i.V3)(t)),this.pos=this.space.span(this.offset),this.primitive.pos=this.pos},n}(e(165).Entity);n.default=c},821:function(t,n,e){var o,r=this&&this.__extends||(o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},o(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)});Object.defineProperty(n,"__esModule",{value:!0});var i=e(782),s=e(29),c=function(t){function n(n,e,o,r){var c=t.call(this,n)||this;return c.b=(0,i.V3)(e),c.c=(0,i.V3)(o),c.d=(0,i.V3)(r),c.primitive=new s.default(c.pos,c.b,c.c,c.d),c}return r(n,t),n.prototype.update=function(t,n,e){},n.prototype.render=function(t,n){this.primitive.render(t)},n}(e(165).Entity);n.default=c},454:function(t,n,e){var o,r=this&&this.__extends||(o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},o(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)});Object.defineProperty(n,"__esModule",{value:!0});var i=e(782),s=e(77),c=function(t){function n(n,e,o){var r=t.call(this,n)||this;return r.b=(0,i.V3)(e),r.c=(0,i.V3)(o),r.primitive=new s.default(r.pos,r.b,r.c),r}return r(n,t),n.prototype.update=function(t,n,e){},n.prototype.render=function(t,n){this.primitive.render(t)},n}(e(165).Entity);n.default=c},371:(t,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Mat=n.Mat44=n.Mat33=n.Mat22=n.Matrix=void 0;var o=e(782),r=function(){function t(t,n){this.t=this.transform,this.ma=t,this.label=n}return t.prototype.identity=function(){return(0,n.Mat)([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]])},t.prototype.traverse=function(t,n){return this.ma.map((function(e,o){return n(e,t[o],o)}))},t.prototype.transpose=function(){var t=this,e=Array.from({length:this.ma[0].cols()},(function(t,n){return n}));return(0,n.Mat)(e.map((function(n){return t.ma.map((function(t){return t.get()[n]}))})),this.label)},t.prototype.transform=function(t,e){var o;return(0,n.Mat)(this.ma.map((function(n){return t.transpose().ma.map((function(t){return n.dot(t)}))})),null!==(o=this.label)&&void 0!==o?o:e)},t.prototype.add=function(n){return new t(this.ma.map((function(t,e){return t.add(n.ma[e])})))},t.prototype.sub=function(n){return new t(this.ma.map((function(t,e){return t.sub(n.ma[e])})))},t.prototype.mul=function(t){return this.transform(t)},t.prototype.print=function(){this.label&&console.warn(this.label),this.ma.forEach((function(t){return t.print()}))},t}();n.Matrix=r,n.Mat22=function(t,n,e){return new r([(0,o.V2)(t),(0,o.V2)(n)],e)},n.Mat33=function(t,n,e,i){return new r([(0,o.V3)(t),(0,o.V3)(n),(0,o.V3)(e)],i)},n.Mat44=function(t,n,e,i,s){return new r([(0,o.V4)(t),(0,o.V4)(n),(0,o.V4)(e),(0,o.V4)(i)],s)},n.Mat=function(t,n){return new r(t.map((function(t){return(0,o.V)(t)})),n)}},782:(t,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.V=n.V4=n.V3=n.V2=n.Vec=n.Vec4=n.Vec3=n.Vec2=n.Vector=void 0;var o=e(371),r=function(){function t(t,n){void 0===n&&(n=""),this._t=this._transform,this.v=t,this.l=n}return t.prototype.traverse=function(t,n){return this.v.map((function(e,o){return n(e,t[o],o)}))},t.prototype.transpose=function(){return this.v.map((function(t){return[t]}))},t.prototype.cols=function(){return this.v.length},t.prototype.add_=function(t){return this.v=this.traverse(t.v,(function(t,n){return t+n})),this},t.prototype.sub_=function(t){return this.v=this.traverse(t.v,(function(t,n){return t-n})),this},t.prototype.length=function(){return this.v.reduce((function(t,n){return t+n*n}),0)},t.prototype.translate_=function(t,n,e){return void 0===e&&(e=1),this.v=this.transform((0,o.Mat)([[1,0,t],[0,1,n],[0,0,1]])),this},t.prototype.scale_=function(t,n,e){return void 0===e&&(e=1),this.v=this.transform((0,o.Mat)([[t,0,0],[0,n,0],[0,0,e]])),this},t.prototype.reflect_=function(t,n,e){return void 0===t&&(t=1),void 0===n&&(n=1),void 0===e&&(e=1),this.v=this.transform((0,o.Mat)([[t,0,0],[0,n,0],[0,0,e]])),this},t.prototype.shear_=function(t){return void 0===t&&(t=0),this.v=this.transform((0,o.Mat)([[1,Math.tan(t),0],[0,1,0],[0,0,1]])),this},t.prototype.rotate_=function(t){return void 0===t&&(t=0),this.v=this.transform((0,o.Mat)([[Math.cos(t),-Math.sin(t),0],[Math.sin(t),Math.cos(t),0],[0,0,1]])),this},t.prototype.add=function(n){return new t(this.v.map((function(t,e){return t+n.v[e]})))},t.prototype.sub=function(n){return new t(this.v.map((function(t,e){return t-n.v[e]})))},t.prototype.mul=function(n){return new t(this.v.map((function(t,e){return t*n.v[e]})))},t.prototype.dot=function(t){return this.traverse(t.v,(function(t,n){return t*n})).reduce((function(t,n){return t+n}))},t.prototype.cross=function(t){var e=this.v,o=t.v,r=e.map((function(t,n){return e[n]*o[(n+1)%e.length]-o[n]*e[(n+1)%e.length]}));return(0,n.V)(r)},t.prototype._transform=function(t){return this.v=this.transform(t),this},t.prototype.transform=function(t){var n=this;return t.ma.map((function(t){return t.dot(n)}))},t.prototype.clone=function(){return new t(this.v,this.l)},t.prototype.print=function(){this.l.length&&console.warn(this.l),console.log("|".concat(this.v.join(" "),"|"))},t.prototype.get=function(){return this.v},t}();n.Vector=r,n.Vec2=function(t,n){return void 0===n&&(n=""),new r(t,n)},n.Vec3=function(t,n){return void 0===n&&(n=""),new r(t,n)},n.Vec4=function(t,n){return void 0===n&&(n=""),new r(t,n)},n.Vec=function(t,e){return void 0===e&&(e=""),4==t.length?(0,n.V4)(t,e):3==t.length?(0,n.V3)(t,e):(0,n.V2)(t,e)},n.V2=n.Vec2,n.V3=n.Vec3,n.V4=n.Vec4,n.V=n.Vec},521:(t,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Space=void 0;var o=e(371),r=e(782),i=function(){function t(t,n){void 0===t&&(t=(0,r.Vec3)([0,0,0]));var e=this;this.origin=t,this.basis=null!=n?n:(0,o.Mat)([]).identity(),this.span=function(t){return(0,r.Vec3)((0,r.Vec4)([t.v[0],t.v[1],t.v[2],1])._t((0,o.Mat)([[1,0,0,e.origin.v[0]],[0,1,0,e.origin.v[1]],[0,0,1,e.origin.v[2]],[0,0,0,1]]).t(e.basis)).v.slice(0,-1))}}return t.prototype.setOrigin=function(t){return this.origin=t,this},t.prototype.setBasis=function(t){return this.basis=t,this},t.prototype.render=function(t){var n=this.origin.v[0],e=this.origin.v[1],o=(this.origin.v[2],this.span((0,r.Vec3)([64,0,0]))),i=this.span((0,r.Vec3)([0,64,0]));this.span((0,r.Vec3)([0,0,64])),t.ctx.strokeStyle="#f00",t.ctx.beginPath(),t.ctx.moveTo(n,e),t.ctx.lineTo(o.v[0],o.v[1]),t.ctx.stroke(),t.ctx.strokeStyle="#00f",t.ctx.beginPath(),t.ctx.moveTo(n,e),t.ctx.lineTo(i.v[0],i.v[1]),t.ctx.stroke()},t}();n.Space=i},641:function(t,n,e){var o,r=this&&this.__extends||(o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},o(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)});Object.defineProperty(n,"__esModule",{value:!0});var i=function(t){function n(n,e){var o=t.call(this,n)||this;return o.a=o.pos,o.b=e,o}return r(n,t),n.prototype.render=function(t){var n=this.a.get(),e=this.b.get();t.ctx.moveTo(n[0],n[1]),t.ctx.lineTo(e[0],e[1]),t.ctx.stroke()},n}(e(196).default);n.default=i},517:function(t,n,e){var o,r=this&&this.__extends||(o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},o(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)});Object.defineProperty(n,"__esModule",{value:!0});var i=function(t){function n(n,e){void 0===e&&(e="#000");var o=t.call(this,n)||this;return o.color=e,o}return r(n,t),n.prototype.render=function(t){var n=t.ctx,e=this.pos.v;n.fillStyle=this.color,n.beginPath(),n.arc(e[0],e[1],2,0,2*Math.PI),n.fill()},n}(e(196).default);n.default=i},196:function(t,n,e){var o,r=this&&this.__extends||(o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},o(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)});Object.defineProperty(n,"__esModule",{value:!0});var i=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return r(n,t),n}(e(836).default);n.default=i},510:(t,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Primitive=void 0;var o=e(641),r=e(517),i=e(77);n.Primitive={Line:o.default,Point:r.default,Triangle:i.default}},29:function(t,n,e){var o,r=this&&this.__extends||(o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},o(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)});Object.defineProperty(n,"__esModule",{value:!0});var i=function(t){function n(n,e,o,r){var i=t.call(this,n)||this;return i.b=e,i.c=o,i.d=r,i}return r(n,t),n.prototype.render=function(t){var n=this.pos.v,e=this.b.v,o=this.c.v,r=this.d.v;t.ctx.moveTo(n[0],n[1]),t.ctx.lineTo(e[0],e[1]),t.ctx.lineTo(o[0],o[1]),t.ctx.lineTo(r[0],r[1]),t.ctx.lineTo(n[0],n[1]),t.ctx.stroke()},n}(e(196).default);n.default=i},77:function(t,n,e){var o,r=this&&this.__extends||(o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},o(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)});Object.defineProperty(n,"__esModule",{value:!0});var i=function(t){function n(n,e,o){var r=t.call(this,n)||this;return r.b=e,r.c=o,r}return r(n,t),n.prototype.render=function(t){var n=this.pos.get(),e=this.b.get(),o=this.c.get();t.ctx.moveTo(n[0],n[1]),t.ctx.lineTo(e[0],e[1]),t.ctx.lineTo(o[0],o[1]),t.ctx.lineTo(n[0],n[1]),t.ctx.stroke()},n}(e(196).default);n.default=i}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o].call(i.exports,i,i.exports,e),i.exports}(()=>{var t=e(253),n=e(510),o=e(232),r=e(517),i=e(371),s=e(782),c=e(521),a=window,u=new t.Canvas("canvas");u.clock.upf=2,u.clock.clear=!1;var p=[new r.default((0,s.V)([128,128,0])),new r.default((0,s.V)([256,128,0])),new n.Primitive.Line((0,s.V)([0,0,0]),(0,s.V)([32,32,0])),new n.Primitive.Line((0,s.V)([32,32,0]),(0,s.V)([64,32,0])),new n.Primitive.Triangle((0,s.V)([100,100,0]),(0,s.V)([150,100,0]),(0,s.V)([100,50,0]))],f={lines:{a:new o.Entity.Line({pos:[0,0,1]},[32,32,1])},points:{a:new o.Entity.Point({pos:[150,150,1],offset:[32,32,0]},{color:"#F00"}),b:new o.Entity.Point({pos:[200,200,1]},{color:"#0F0"}),c:new o.Entity.Point({pos:[10,20,1]},{color:"#00F"}),d:new o.Entity.Point({pos:[10,10,1]})},triangle:{a:new o.Entity.Triangle({pos:[40,40,1]},[60,40,1],[50,20,1])},rectangle:{a:new o.Entity.Rectangle({pos:[0,0,1]},[50,0,1],[50,50,1],[0,50,1]),b:new o.Entity.Rectangle({pos:[0,0,1]},[50,0,1],[50,50,1],[0,50,1])}};if(u){p.forEach((function(t){return t.render(u)})),f.lines.a.update=function(t,n,e){e.pos.translate_(4*Math.random(),4*Math.random())};var l=0;f.points.a.update=function(t,n,e){f.points.b.pos.translate_(.6,Math.random(),0),f.points.a.move([f.points.b.pos.v[0],f.points.b.pos.v[1],0]),f.points.a.transform((0,i.Mat)([[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]]).t((0,i.Mat)([[Math.cos(l),-Math.sin(l),0,1],[Math.sin(l),Math.cos(l),0,1],[0,0,1,0],[0,0,0,1]]))),l+=.1,(new c.Space).setOrigin((0,s.V3)([f.points.b.pos.v[0]+32,f.points.b.pos.v[1]+32,0])).setBasis((0,i.Mat)([[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]]).t((0,i.Mat)([[Math.cos(l),-Math.sin(l),0,1],[Math.sin(l),Math.cos(l),0,1],[0,0,1,0],[0,0,0,1]]))).render(u),console.log("Update")},f.points.b.update=function(t,n,e){},f.points.c.update=function(t,n,e){e.pos.translate_(4*Math.random(),4*Math.random())},f.points.d.update=function(t,n,e){e.pos.translate_(16,4),e.pos.reflect_([1,-1][Math.floor(2*Math.random())])},f.triangle.a.update=function(t,n,e){e.pos.translate_(8,8),e.b.translate_(8,8),e.c.translate_(8,8)},u.push([f.points.a,f.points.b,f.points.c,f.points.d,f.lines.a]);var h=(0,i.Mat)([[1,0,200],[0,1,200],[0,0,1]],"t+"),v=(0,i.Mat)([[1,0,-200],[0,1,-200],[0,0,1]],"t-"),d=(0,i.Mat)([[Math.cos(Math.PI/8),-Math.sin(Math.PI/8),0],[Math.sin(Math.PI/8),Math.cos(Math.PI/8),0],[0,0,1]],"r");h.print(),d.print(),d.transpose().print(),v.mul(d).mul(h).print();var y=new o.Entity.Point({pos:[200,200,0],offset:[32,32,0]},{color:"#00F"});y.render(u,0),y.space.render(u),y.move([4,4,0]),y.space.render(u),y.render(u,0),y.space.setOrigin((0,s.V)([100,100,0])).setBasis((0,i.Mat)([]).identity()).render(u),new c.Space((0,s.V3)([400,400,0]),(0,i.Mat)([[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]]).t((0,i.Mat)([[Math.cos(Math.PI/4),-Math.sin(Math.PI/4),0,1],[Math.sin(Math.PI/4),Math.cos(Math.PI/4),0,1],[0,0,1,0],[0,0,0,1]]))).render(u),a.canvas=u,a.v=s.V,a.m=i.Mat,u.tick()}})()})();