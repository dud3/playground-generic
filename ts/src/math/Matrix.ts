import { V, V2, V3, V4, Vector } from  "./Vector"

export type Mat2<T extends V> = [Vector<T>, Vector<T>];
export type Mat3<T extends V> = [Vector<T>, Vector<T>, Vector<T>];
export type Mat4<T extends V> = [Vector<T>, Vector<T>, Vector<T>, Vector<T>];

export type Mat22 = Mat2<V2>;
export type Mat33 = Mat3<V3>;
export type Mat44 = Mat4<V4>;
export type Mat<T extends V> = Mat2<T> | Mat3<T> | Mat4<T>

/**
	   c0   c1   c2   cn
  r0 |    |    |    |    |
  r1 |    |    |    |    |
  r2 |    |    |    |    |
  rn |    |    |    |    |
					   rn+cn

	cxr . rxc (r = rows, c = cols)

	A (2x3) =
		1   1   1
		2   2	1

 	A' (3x2) =
		1   2
		1   2
		1   2

	B (3x2) =
		1   1
		2   2
		3   3

	B' (2x3)
		1   2   3
		1   2   3

	C (2x2) =
		2   2
		2   2

	A * B = 2x3 * 3x2 = 2x2
	B * A = 3x2 * 2x3 = 3x3

	B * C = 3x2 * 2x2 = 3x2
	C * B = 2x2 * 3x2 = failure

	A * C = 2x3 * 2x2 = failure
	C * A = 2x2 * 2x3 = 2x3
 */

export class Matrix<T extends Vector<V>[]> {
	ma: T;
  	label?: string;

  	constructor(ma: T, label?: string) {
		this.ma = ma;
		this.label = label;
  	}

	identity() {
		return Mat([[1,0,0,0], [0,1,0,0], [0,0,1,0], [0,0,0,1]]);
	}

	traverse(b: T, f: (vi: Vector<V>, ui: Vector<V>, i?: number) => Vector<V>): T {
		return this.ma.map((e,i) => f(e, b[i], i)) as T;
	}

	transpose(): Matrix<Vector<V>[]> {
		const cols = Array.from({length: this.ma[0].cols()}, (_, i) => i);
		return Mat(cols.map(ci => this.ma.map(row => row.get()[ci])) as unknown as V[], this.label);
	}

	transform(mb: Matrix<T>, l?: string): Matrix<Vector<V>[]> {
		return Mat(this.ma.map(v => mb.transpose().ma.map(u => v.dot(u)) as V), this.label ?? l);
	}
	t = this.transform

	add(b: Matrix<T>): Matrix<T> {
		return new Matrix<T>(this.ma.map((e, i) => e.add(b.ma[i])) as unknown as T);
	}

	sub(b: Matrix<T>): Matrix<T> {
		return new Matrix<T>(this.ma.map((e, i) => e.sub(b.ma[i])) as unknown as T);
	}

	mul(b: Matrix<T>) {
		return this.transform(b);
	}

	print() {
		if(this.label)
			console.warn(this.label);

		this.ma.forEach(v => v.print());
	}
}

export const Mat22 = (a: V2, b: V2, label?: string) => new Matrix<Mat22>([V2(a), V2(b)], label);
export const Mat33 = (a: V3, b: V3, c: V3, label?: string) => new Matrix<Mat33>([V3(a), V3(b), V3(c)], label);
export const Mat44 = (a: V4, b: V4, c: V4, d: V4, label?: string) => new Matrix<Mat44>([V4(a), V4(b), V4(c), V4(d)], label);

export const Mat = <T extends V>(m: T[], l?: string): Matrix<Vector<T>[]> =>
	new Matrix(m.map(v => V(v)), l);
