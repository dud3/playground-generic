import { V3, Vector } from "~math/Vector";
import { Canvas } from "~canvas/canvas";
import Primitive from "~primitive/Primitive";

export default class Rectangle<T extends V3> extends Primitive<T> {
	a: Vector<T>;
	b: Vector<T>;
	c: Vector<T>;
	d: Vector<T>;

	constructor(pos: Vector<T>, b: Vector<T>, c: Vector<T>, d: Vector<T>) {
		super(pos);

		this.b = b;
		this.c = c;
		this.d = d;
	}

	render(canvas: Canvas): void {
		const a = this.pos.v;
		const b = this.b.v;
		const c = this.c.v;
		const d = this.d.v;

		canvas.ctx.moveTo(a[0], a[1]);
		canvas.ctx.lineTo(b[0], b[1]);
		canvas.ctx.lineTo(c[0], c[1]);
		canvas.ctx.lineTo(d[0], d[1]);
		canvas.ctx.lineTo(a[0], a[1]);

		canvas.ctx.stroke();
	}
}
