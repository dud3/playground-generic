import { V3, Vector } from "~math/Vector";
import { Canvas } from "~canvas/canvas";
import Primitive from "~primitive/Primitive";

export default class Line<T extends V3> extends Primitive<T> {
	a: Vector<T>;
	b: Vector<T>;

	constructor(a: Vector<T>, b: Vector<T>) {
		super(a);

		this.a = this.pos;
		this.b = b;
	}

	render(canvas: Canvas): void {
		const a = this.a.get();
		const b = this.b.get();

		canvas.ctx.moveTo(a[0], a[1]);
		canvas.ctx.lineTo(b[0], b[1]);
		canvas.ctx.stroke();
	}
}
