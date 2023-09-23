import { Entity } from "~entity/Entity";
import { Vec3 } from "~math/Vector";
import { Space } from "~math/space/Space";

export interface Canvas<T extends Vec3> {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	space: Space;
};

let delay: ReturnType<typeof setTimeout>;

export class Canvas<T extends Vec3 = Vec3> implements Canvas<T> {
	entities: Entity[] = [];
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	space: Space;

	clock: {
		start: number;
		upf: number;
		fc: number;
		dt: number;
		est: number;
		clear: boolean;
	};

	constructor(id: string) {
		this.canvas = document.getElementById(id) as HTMLCanvasElement;

		if (this.canvas) {
			this.ctx = this.canvas.getContext('2d');
		}

		this.clock = {
			start: undefined,
			upf: 1,
			fc: 0,
			dt: 0,
			est: 0,
			clear: true
		};
	}

	clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	push(entities: Entity[]) {
		this.entities = this.entities.concat(entities);
	}

	private async _step(time: number) {
		this.clock.fc += 1;

		if (this.clock.fc % this.clock.upf != 0) {
			window.requestAnimationFrame(this._step.bind(this));
		} else {
			const dt = this.clock.dt = time - (this.clock.start ?? 0);
			this.clock.start = time;
			this.clock.fc = 0;

			if (this.clock.clear)
				this.clear();

			this.entities.forEach((e) => { this.main(e, dt); });

			window.requestAnimationFrame(this._step.bind(this));
		}
	}

	tick() {
		window.requestAnimationFrame(this._step.bind(this));
	}

	update(entity: Entity, dt: number) {
		entity.update(dt, dt, entity);
	}

	render(entity: Entity, dt: number) {
		entity.space.render(this);
		entity.render(this, dt, entity);
	}

	main(entity: Entity, dt: number) {
		this.update(entity, dt);
		this.render(entity, dt);
	}
}
