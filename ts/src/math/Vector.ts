import { num, rad } from "~util/Types";
import { Matrix, Mat, Mat33 } from "~math/Matrix";

export type Vec2 = [number, number];
export type Vec3 = [number, number, number];
export type Vec4 = [number, number, number, number];
export type Vec = Vec2 | Vec3 | Vec4;

export type V2 = Vec2;
export type V3 = Vec3;
export type V4 = Vec4;
export type V = Vec

export class Vector<T extends V> {
  v: T;
  l: string;

  constructor(v: T, l: string = "") {
    this.v = v;
    this.l = l;
  }

  traverse(u: T, f: (vi: num, ui: num, i?: num) => num) {
    return this.v.map((e, i) => f(e, u[i], i)) as T;
  }

  transpose() {
    return this.v.map(e => [e]);
  }

  cols() {
    return this.v.length;
  }

  add_(u: Vector<T>): Vector<T> {
    this.v = this.traverse(u.v, (vi, ui) => vi + ui);
    return this;
  }

  sub_(u: Vector<T>): Vector<T> {
    this.v = this.traverse(u.v, (vi, vu) => vi - vu);
    return this;
  }

  length(): number {
    return this.v.reduce((acc, v) => acc + v * v, 0);
  }

  translate_(tx: num, ty: num, tz: num = 1) {
    this.v = this.transform(Mat([
      [1, 0, tx],
      [0, 1, ty],
      [0, 0,  1]
    ]));

    return this;
  }

  scale_(sx: num, sy: num, sz: num = 1) {
    this.v = this.transform(Mat([
      [sx, 0, 0],
      [0, sy, 0],
      [0, 0, sz]
    ]));

    return this;
  }

  reflect_(x: num = 1, y: num = 1, z: num = 1) {
    this.v = this.transform(Mat([
      [x, 0, 0],
      [0, y, 0],
      [0, 0, z]
    ]));

    return this;
  }

  shear_(beta: rad = 0) {
    this.v = this.transform(Mat([
      [1, Math.tan(beta), 0],
      [0, 1, 0],
      [0, 0, 1]
    ]));

    return this;
  }

  rotate_(beta: rad = 0) {
    this.v = this.transform(Mat([
      [Math.cos(beta), -Math.sin(beta), 0],
      [Math.sin(beta),  Math.cos(beta), 0],
      [0,               0,              1]
    ]));

    return this;
  }

  add(u: Vector<T>): Vector<T> {
    return new Vector<T>(this.v.map((e, i) => e + u.v[i]) as T);
  }

  sub(u: Vector<T>): Vector<T> {
    return new Vector<T>(this.v.map((e, i) => e - u.v[i]) as T);
  }

  mul(t: number): Vector<T> {
	return  new Vector<T>(this.v.map(e => e * t) as T);
  }

  dot(u: Vector<T>): num {
    return this.traverse(u.v, (a, b) => a * b).reduce((acc, v) => acc + v);
  }

  cross(v: Vector<T>): Vector<T> {
    const a = this.v, b = v.v;
    // z = (0,1) - (1,0)
    // x = (1,2) - (2,1)
    // y = (2,0) - (0,2)
    // [z,x,y]
    const n = a.map((_, i) => a[i] * b[(i + 1) % a.length] - b[i] * a[(i + 1) % a.length]) as T;
    return V(n);
  }

  _transform(ma: Matrix<Vector<V>[]>) {
    this.v = this.transform(ma);
    return this;
  }
  _t = this._transform

  transform(ma: Matrix<Vector<V>[]>): T {
    return ma.ma.map(a => a.dot(this)) as T;
  }

  clone() {
    return new Vector(this.v, this.l);
  }

  print() {
    if (this.l.length)
      console.warn(this.l);

    console.log(`|${this.v.join(" ")}|`);
  }

  get() {
    return this.v;
  }
}

export const Vec2 = (v: V2, l = "") => new Vector<V2>(v, l);
export const Vec3 = (v: V3, l = "") => new Vector<V3>(v, l);
export const Vec4 = (v: V4, l = "") => new Vector<V4>(v, l);
export const Vec = <T extends V>(v: T, l = "") =>
(v.length == 4 ? V4(v, l) :
  v.length == 3 ? V3(v, l)
    : V2(v, l)) as Vector<T>;

export const V2 = Vec2;
export const V3 = Vec3;
export const V4 = Vec4;
export const V = Vec;
