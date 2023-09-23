import { Canvas } from "~canvas/canvas";
import { V3, Vector } from "~math/Vector";
import { default as Triangle_ } from "~primitive/Triangle";
import { Entity, EInput } from "~entity/Entity";

export default class Triangle extends Entity {
	primitive: Triangle_<V3>;
	b: Vector<V3>;
	c: Vector<V3>;

	constructor(entity: EInput, b: V3, c: V3) {
		super(entity);

		this.b = V3(b);
		this.c = V3(c);

		this.primitive = new Triangle_(this.pos, this.b, this.c);
	}

	update(dt: number, du: number, entity: Triangle) {};

	render(canvas: Canvas, dt: number): void {
		this.primitive.render(canvas);
    }
}
