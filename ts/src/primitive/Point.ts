import { V3, Vector } from "~math/Vector";
import { Canvas } from "~canvas/canvas";
import Primitive from "~primitive/Primitive";

export default class Line<T extends V3> extends Primitive<T> {
	color: string;

	constructor(pos: Vector<T>, color: string = "#000") {
		super(pos);

		this.color = color;
	}

	render(canvas: Canvas): void {
		const { ctx } = canvas;

		const a = this.pos.v;

		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(a[0], a[1], 2, 0, 2 * Math.PI);
		ctx.fill();
	}
}
