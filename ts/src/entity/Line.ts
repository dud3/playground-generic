import { Canvas } from "~canvas/canvas";
import { V3 } from "~math/Vector";
import { default as Line_ } from "~primitive/Line";
import { Entity, EInput } from "~entity/Entity";

export default class Line extends Entity {
        primitive: Line_<V3>;

        constructor(entity: EInput, b: V3) {
                super(entity);
                this.primitive = new Line_(this.pos, V3(b));
        }

        render(canvas: Canvas, dt: number): void {
                this.primitive.render(canvas);
        }
}
