import { V, V2, V3, V4, Vector } from  "./Vector"

export type Mat2<T extends Vector<V>> = [T, T];
export type Mat3<T extends Vector<V>> = [T, T, T];
export type Mat4<T extends Vector<V>> = [T, T, T, T];
export type Mat<T extends Vector<V>> = Mat2<T> | Mat3<T> | Mat4<T>;
export type M<T extends Vector<V>> = Mat<T>;

export type Mat22 = Mat2<Vector<V2>>;
export type Mat33 = Mat3<Vector<V3>>;
export type Mat44 = Mat4<Vector<V4>>;

export class Matrix<T extends Mat<Vector<V>>> {
  a: T;

  constructor(a: T) {
    this.a = a;
  }

  traverse(b: T, f: (vi: Vector<V>, ui: Vector<V>, i?: number) => Vector<V>): T {
    return this.a.map((e,i) => f(e, b[i], i)) as T;
  }

  add(b: T) {
    this.a.map((e, i) => { e.add(b[i].get()) })
  }
}

export const Mat22 = (a: V2, b: V2) => new Matrix<Mat22>([V2(a), V2(b)]);
export const Mat33 = (a: V3, b: V3, c: V3) => new Matrix<Mat33>([V3(a), V3(b), V3(c)]);
