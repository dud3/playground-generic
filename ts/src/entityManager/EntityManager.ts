import { Entity } from "~entity/Entity";

interface EntityManager {
	entities: Entity[];
	update: (dt: number) => void;
	render: (dt: number) => void;
}

const EntityManager: EntityManager = {
	entities: [],
	update(dt: number) {
		this.entities.forEach((e: Entity) => { e.update(dt, dt); });
	},
	render(dt: number): void {
		this.entities.forEach((e: Entity) => { e.render(dt); });
	}
};
