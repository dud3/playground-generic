import { Vector, V } from "./Vector";

// Todo
// - Distance between 2 points on 2 lines
// - Intersection

export class Line<T extends V> {
	s: Vector<T>;
	v: Vector<T>;

	constructor(s: T, v: T) {
		this.s = V(s);
		this.v = V(v);
	}

	// Parametric function of a line
	// Pn(tn) = Sn + tn*Vn (where n is an integer)
	// P1(t1) = S1 + t1*V1 
	// P2(t2) = S2 + t2*V2
	// ...
	// 
	// Distance between 2 points on 2 lines
	// 
	// |P1(t1) - P2(t2)|
	//
	// returns a point on the line
	// thus drawing it
	point(t: number): Vector<T> {
		return this.s.add(this.v.mul(t));
	}
}

