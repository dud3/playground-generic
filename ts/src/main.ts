import { Canvas } from "~canvas/canvas";
import { Primitive } from "~primitive/Primitives";
import { Entity } from "~entity/Entities";
import Point from "~primitive/Point"
import { Matrix, Mat22 } from "~math/Matrix";
import { V2 } from "~math/Vector";

const w = (window as any);

const _canvas = new Canvas("canvas");

if (_canvas) {
	const _line = new Primitive.Line(_canvas, [0,0], [32,32]);
	_line.render();

	const _line1 = new Primitive.Line(_canvas, [32, 32], [64, 32]);
	_line1.render();

	(new Point(_canvas, [128, 128])).render();
	(new Point(_canvas, [256, 128])).render();

	const _eline = new Entity.Line(_canvas, [0,0], [32,32]);
	_eline.update = (dt: number, du: number) => {
		console.log("_eline", dt, du);
	}

	_canvas.push([_eline]);

	_canvas.tick();

	const mat22 = Mat22([0,1], [1,0]);
	console.log(mat22);

	w.canvas = _canvas;
	w.line = _line;

	console.log(_canvas, Math.random(), _line);
}
