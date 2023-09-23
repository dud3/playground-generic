import { Canvas } from "~canvas/canvas";
import { Entity } from "~entity/Entity";

interface EntityManager {
	entities: Entity[];
	update: (dt: number) => void;
	render: (canvas: Canvas, dt: number) => void;
}

const EntityManager: EntityManager = {
	entities: [],
	update(dt: number) {
		this.entities.forEach((e: Entity) => { e.update(dt, dt, e); });
	},
	render(canvas: Canvas, dt: number): void {
		this.entities.forEach((e: Entity) => { e.render(canvas, dt, e); });
	}
};
