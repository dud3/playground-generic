import { Canvas } from "~canvas/canvas";
import { V } from "~math/Vector";
import { default as PLine } from "~primitive/Line";
import { Entity } from "~entity/Entity";

export default class Line extends Entity {
        primitive: PLine<V>;

        constructor(canvas: Canvas, a: V, b: V) {
                super();
                this.primitive = new PLine(canvas, a, b);
        }

        render(dt: number): void {
                this.primitive.render();
        }
}
