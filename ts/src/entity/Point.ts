import { Canvas } from "~canvas/canvas";
import { V3 } from "~math/Vector";
import { default as Point_ } from "~primitive/Point";
import { Entity } from "~entity/Entity";

export type Config = {
        color?: string;
}

export default class Point extends Entity {
        primitive: Point_<V3>;

        constructor(entity: {pos: V3, offset?: V3}, config: Config = {}) {
                super(entity);

                this.primitive =
                        new Point_(this.pos, config.color ?? "#000");
        }

        update(dt: number, du: number, entity: Point) {};

        render(canvas: Canvas, dt: number): void {
                this.primitive.render(canvas);
        }

        move(a: V3) {
                this.space.setOrigin(V3(a));
		this.pos = this.space.span(this.offset);
                this.primitive.pos = this.pos;
        }
}
