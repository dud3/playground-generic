import { Space } from "~math/space/Space";
import { Vector, Vec3, Vec4 } from "~math/Vector";
import { Matrix } from "~math/Matrix";
import { Canvas } from "~canvas/canvas";

export interface Entity {
	space: Space;
	pos: Vector<Vec3>;
	vertices?: Vector<Vec3>[];

	entities?: Entity[];

	update(dt: number, du: number, entity: Entity): void;
	render(canvas: Canvas, dt: number, entity: Entity): void;

	transform(m: Matrix<Vector<Vec4>[]>): void;
	move(a: Vec3, dt?: number, du?: number): void;
}

export type EInput = {
	pos: Vec3;
	offset?: Vec3;
	vertices?: Vector<Vec3>[];
}

export class Entity implements Entity {
	space: Space;
	pos: Vector<Vec3>;
	offset: Vector<Vec3>;

	constructor(input: EInput) {
		this.offset = Vec3(input.offset ?? [0,0,0]);

		this.space = new Space(Vec3(input.pos));
		this.pos = this.space.span(this.offset);
	}

	move(a: Vec3) {
		this.space.setOrigin(Vec3(a));
		this.pos = this.space.span(this.offset);
	}

	transform(m: Matrix<Vector<Vec4>[]>) {
		this.space.setBasis(m);
	}

	update(dt: number, du: number, entity: Entity) {};
	render(canvas: Canvas, dt: number, entity: Entity) {};
}
