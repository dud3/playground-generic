import { V3, Vector } from "~math/Vector";
import { Canvas } from "~canvas/canvas";
import Primitive from "~primitive/Primitive";

export default class Triangle<T extends V3> extends Primitive<T> {
	a: Vector<T>;
	b: Vector<T>;
	c: Vector<T>;

	constructor(pos: Vector<T>, b: Vector<T>, c: Vector<T>) {
		super(pos);

		this.b = b;
		this.c = c;
	}

	render(canvas: Canvas): void {
		const a = this.pos.get();
		const b = this.b.get();
		const c = this.c.get();

		canvas.ctx.moveTo(a[0], a[1]);
		canvas.ctx.lineTo(b[0], b[1]);
		canvas.ctx.lineTo(c[0], c[1]);
		canvas.ctx.lineTo(a[0], a[1]);

		canvas.ctx.stroke();
	}
}
