export type Vec2 = [number, number];
export type Vec3 = [number, number, number];
export type Vec4 = [number, number, number, number];

export type V2 = Vec2;
export type V3 = Vec3;
export type V4 = Vec4;
export type V = V2 | V3 | V4;

export class Vector<T extends V> {
  v: T;

  constructor(v: T) {
    this.v = v;
  }

  traverse(u: T, f: (vi: number, ui: number, i?: number) => number) {
    return this.v.map((e,i) => f(e, u[i], i)) as T;
  }

  add(u: T): Vector<T> {
    this.v = this.traverse(u, (vi, ui) => vi + ui);
    return this;
  }
  sub(u: T): Vector<T> {
    this.v = this.traverse(u, (vi, vu) => vi - vu);
    return this;
  }
  get() {
    return this.v;
  }
}

