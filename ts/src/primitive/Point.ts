import { V, Vector } from "~math/Vector";
import { Canvas } from "~canvas/canvas";
import Primitive from "~primitive/Primitive";

export default class Line<T extends V> extends Primitive<T> {
	constructor(c: Canvas, pos: T) {
		super(c, pos);
	}

	render(): void {
		const { ctx } = this.c;

		const a = this.pos.get();

		ctx.beginPath();
		ctx.arc(a[0], a[1], 2, 0, 2 * Math.PI);
		ctx.fill();
	}
}
