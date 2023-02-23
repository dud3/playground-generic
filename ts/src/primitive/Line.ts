import { V, Vector } from "~math/Vector";
import { Canvas } from "~canvas/canvas";
import Primitive from "~primitive/Primitive";

export default class Line<T extends V> extends Primitive<T> {
	a: Vector<T>;
	b: Vector<T>;

	constructor(c: Canvas, pos: T, b: T) {
		super(c, pos);
		this.a = new Vector<T>(pos);
		this.b = new Vector<T>(b);
	}

	render(): void {
		const a = this.a.get();
		const b = this.b.get();

		this.c.ctx.moveTo(a[0], a[1]);
		this.c.ctx.lineTo(b[0], b[1]);
		this.c.ctx.stroke();
	}
}
