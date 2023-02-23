import { Entity } from "~entity/Entity";

export interface Canvas {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
};

const clock = {
	start: 0
};

export class Canvas implements Canvas {
	entities: Entity[] = [];
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;

	clock: {
		start: number;
	};

	constructor(id: string) {
		this.canvas = document.getElementById(id) as HTMLCanvasElement;

		if (this.canvas) {
			this.ctx = this.canvas.getContext('2d');
		}

		this.clock = {
			start: undefined
		};
	}

	clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	push(entities: Entity[]) {
		this.entities = this.entities.concat(entities);
	}

	private _step(time: number) {
		if (this.clock.start === undefined) { this.clock.start = time; }
		const dt = time - this.clock.start;

		this.entities.forEach((e) => { e.update(dt, dt); e.render(dt); })

		window.requestAnimationFrame(this._step.bind(this));
	}

	tick() {
		window.requestAnimationFrame(this._step.bind(this));
	}
}
