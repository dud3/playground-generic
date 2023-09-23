import { Canvas } from "~canvas/canvas";
import { V3, Vector } from "~math/Vector";
import { default as Rectangle_ } from "~primitive/Rectangle";
import { Entity, EInput } from "~entity/Entity";

export default class Rectangle extends Entity {
	primitive: Rectangle_<V3>;
	b: Vector<V3>;
	c: Vector<V3>;
	d: Vector<V3>;

	constructor(entity: EInput, b: V3, c: V3, d: V3) {
		super(entity);

		this.b = V3(b);
		this.c = V3(c);
		this.d = V3(d);

		this.primitive = new Rectangle_(this.pos, this.b, this.c, this.d);
	}

	update(dt: number, du: number, entity: Rectangle) {};

	render(canvas: Canvas, dt: number): void {
		this.primitive.render(canvas);
    }
}
