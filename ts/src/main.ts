import { Canvas } from "~canvas/canvas";
import { Primitive } from "~primitive/Primitives";
import { Entity } from "~entity/Entities";
import Point from "~primitive/Point"
import { Matrix, Mat, Mat2, Mat3, Mat22, Mat33, Mat44 } from "~math/Matrix";
import { Vector, V, V2, V3, V4 } from "~math/Vector";

import { Space } from "~math/space/Space";

const w = (window as any);

const _canvas = new Canvas("canvas");
_canvas.clock.upf = 2;
_canvas.clock.clear = false;

const primitives = [
	new Point(V([128, 128, 0])),
	new Point(V([256, 128, 0])),
	new Primitive.Line(V([0,0,0]), V([32,32,0])),
	new Primitive.Line(V([32,32,0]), V([64,32,0])),
	new Primitive.Triangle(
		V([100,100,0]),
		V([150,100,0]),
		V([100,50,0])
	)
];

const entities = {
	lines: {
		a: new Entity.Line({pos: [0,0,1]}, [32,32,1])
	},
	points: {
		a: new Entity.Point({pos: [150,150,1], offset: [32,32,0]}, {color: "#F00"}),
		b: new Entity.Point({pos: [200,200,1]}, {color: "#0F0"}),
		c: new Entity.Point({pos: [10,20,1]}, {color: "#00F"}),
		d: new Entity.Point({pos: [10,10,1]})
	},
	triangle: {
		a: new Entity.Triangle({pos: [40,40,1]}, [60,40,1], [50,20,1])
	},
	rectangle: {
		a: new Entity.Rectangle({pos: [0,0,1]}, [50,0,1], [50,50,1], [0,50,1]),
		b: new Entity.Rectangle({pos: [0,0,1]}, [50,0,1], [50,50,1], [0,50,1]),

		// a: new Entity.Rectangle([200,100,1], [250,100,1], [250,50,1], [200,50,1]),
		// b: new Entity.Rectangle([200,100,1], [250,100,1], [250,50,1], [200,50,1])
	}
};

if (_canvas) {
	primitives.forEach(e => e.render(_canvas));

	entities.lines.a.update = (dt, du, e) => {
		e.pos.translate_(Math.random() * 4, Math.random() * 4);
		// console.log(e.pos.v);
	};

	const rotate = (tx: number, ty: number, r: number) =>
		Mat([[1,0,tx,0],[0,1,ty,0],[0,0,1,0]])
		.t(Mat([
			[Math.cos(r), -Math.sin(r), 0,0],
			[Math.sin(r), Math.cos(r), 0,0],
			[0, 0, 1,0]
		]))
		.t(Mat([[1,0,-tx,0],[0,1,-ty,0],[0,0,1,0]]));

	let alpha = 0;
	entities.points.a.update = (dt, du, e) => {
		// e.pos.translate_(Math.random() * 4, Math.random() * 4);
		// entities.points.a.pos.translate_(-200, -200);
		// entities.points.a.pos.rotate_(-Math.PI/32);
		// entities.points.a.pos.translate_(200, 200);

		entities.points.b.pos.translate_(.6, Math.random(), 0);
		entities.points.a.move([entities.points.b.pos.v[0],entities.points.b.pos.v[1],0]);
		entities.points.a.transform(Mat([
			[1,0,0,0],
			[0,-1,0,0],
			[0,0,1,0],
			[0,0,0,1]
		]).t(Mat([
			[Math.cos(alpha), -Math.sin(alpha),0,1],
			[Math.sin(alpha), Math.cos(alpha),0,1],
			[0,0,1,0],
			[0,0,0,1]
		])) as Matrix<Vector<V4>[]>);

		alpha += 0.1;

		new Space()
			.setOrigin(V3([entities.points.b.pos.v[0] + 32,entities.points.b.pos.v[1] + 32,0]))
			.setBasis(Mat([
				[1,0,0,0],
				[0,-1,0,0],
				[0,0,1,0],
				[0,0,0,1]
			]).t(Mat([
				[Math.cos(alpha), -Math.sin(alpha),0,1],
				[Math.sin(alpha), Math.cos(alpha),0,1],
				[0,0,1,0],
				[0,0,0,1]
			])) as Matrix<Vector<V4>[]>)
			.render(_canvas);

		console.log("Update");
	};

	entities.points.b.update = (dt, du, e) => {
		// e.pos.translate_(Math.random() * 8, Math.random() * 8);
	};
	entities.points.c.update = (dt, du, e) => {
		e.pos.translate_(Math.random() * 4, Math.random() * 4);
	};
	entities.points.d.update = (dt, du, e) => {
		e.pos.translate_(16, 4);
		e.pos.reflect_([1,-1][Math.floor(Math.random() * 2)]);
	};

	entities.triangle.a.update = (dt, du, e) => {
		e.pos.translate_(8, 8);
		e.b.translate_(8, 8);
		e.c.translate_(8, 8);
	};

	/*
		entities.rectangle.b.pos.shear_(Math.PI/4);
		entities.rectangle.b.b.shear_(Math.PI/4);
		entities.rectangle.b.c.shear_(Math.PI/4);
		entities.rectangle.b.d.shear_(Math.PI/4);

		entities.rectangle.b.pos.reflect_(1, -1);
		entities.rectangle.b.b.reflect_(1, -1);
		entities.rectangle.b.c.reflect_(1, -1);
		entities.rectangle.b.d.reflect_(1, -1);

		entities.rectangle.b.pos.translate_(0, 50);
		entities.rectangle.b.b.translate_(0, 50);
		entities.rectangle.b.c.translate_(0, 50);
		entities.rectangle.b.d.translate_(0, 50);

		entities.rectangle.b.pos.translate_(50, 50);
		entities.rectangle.b.b.translate_(50, 50);
		entities.rectangle.b.c.translate_(50, 50);
		entities.rectangle.b.d.translate_(50, 50);

		entities.rectangle.b.update = (dt, du, e) => {
		};
		entities.rectangle.a.render(_canvas, 0);
		entities.rectangle.b.render(_canvas, 0);

		entities.points.a.render(_canvas, 0);

		entities.points.a.pos.translate_(-200, -200);
		entities.points.a.pos.rotate_(Math.PI/4);

		entities.points.a.pos.translate_(200, 200);
		entities.points.a.render(_canvas, 0);
	*/

	// entities.points.a.pos.rotate_(Math.PI/8);
	// entities.points.a.render(_canvas, 0);
	// entities.points.b.render(_canvas, 0);

	_canvas.push([
		entities.points.a,
		entities.points.b,

		entities.points.c,
		entities.points.d,

		entities.lines.a
	]);

	const mt = Mat([
		[1, 0, 200],
		[0, 1, 200],
		[0, 0, 1]
	], "t+");
	const tm = Mat([
		[1, 0, -200],
		[0, 1, -200],
		[0, 0, 1]
	], "t-");
	const mr = Mat([
		[Math.cos(Math.PI/8), -Math.sin(Math.PI/8), 0],
		[Math.sin(Math.PI/8), Math.cos(Math.PI/8), 0],
		[0, 0, 1]
	], "r");

	mt.print();
	mr.print();
	mr.transpose().print();

	tm.mul(mr).mul(mt).print();

	// console.log(mt, rotate(200, 200, Math.PI/8));

	const p =
		new Entity.Point({pos: [200,200,0], offset: [32,32,0]}, {color: "#00F"});
	 p.render(_canvas, 0);
	p.space.render(_canvas);

	p.move([4,4,0]);
	p.space.render(_canvas);
	p.render(_canvas, 0);

	p.space
		.setOrigin(V([100,100,0]))
		.setBasis(Mat([]).identity()).render(_canvas);

	new Space(
		V3([400,400,0]),
		Mat([
			[1,0,0,0],
			[0,-1,0,0],
			[0,0,1,0],
			[0,0,0,1]
		]).t(Mat([
			[Math.cos(Math.PI/4), -Math.sin(Math.PI/4),0,1],
			[Math.sin(Math.PI/4), Math.cos(Math.PI/4),0,1],
			[0,0,1,0],
			[0,0,0,1]
		])) as Matrix<Vector<V4>[]>
	).render(_canvas);

	// console.log(mt.transpose());

	w.canvas = _canvas;
	w.v = V;
	w.m = Mat;

	// console.log(_canvas.ctx.getTransform());

	_canvas.tick();
}
