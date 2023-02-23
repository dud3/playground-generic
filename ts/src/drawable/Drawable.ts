import { V, Vector } from "~math/Vector";
import { Canvas } from "~canvas/canvas";

export default abstract class Drawable<T extends V> {
	c: Canvas;
	pos: Vector<T>;

	constructor(c: Canvas, pos: T) {
		this.c = c;
		this.pos = new Vector<T>(pos);
	}

	render(): void {}
}
