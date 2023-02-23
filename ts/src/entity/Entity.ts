export interface Entity {
	update(dt: number, du: number): void;
	render(dt: number): void;
}

export class Entity implements Entity {
	update(dt: number, du: number) {};
	render(dt: number) {};
}
