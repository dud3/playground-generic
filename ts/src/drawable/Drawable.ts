import { V, Vector } from "~math/Vector";
import { Canvas } from "~canvas/canvas";

export default abstract class Drawable<T extends V> {
	pos: Vector<T>;

	constructor(pos: Vector<T>) {
		this.pos = pos;
	}

	render(canvas: Canvas): void {}
}
