import { ln1, ln2, ln3, ln4 } from "~util/List";

export type Point2 = ln2;
export type Point3 = ln3;
export type Point4 = ln4;

export type P2 = Point2;
export type P3 = Point3;
export type P4 = Point4;

export type P = P2 | P3 | P4;

export class Point<T extends P> {
	a: T;

	construct(a: T) {
		this.a = a;
	}

	diff(b: T) {
		return this.a.map((e,i) => e - b[i]) as P;
	}
}
