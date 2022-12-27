export type Vec2 = [number, number];
export type Vec3 = [number, number, number];
export type Vec4 = [number, number, number, number];
export type Vec = Vec2 | Vec3 | Vec4;
export declare class Vector<T extends Vec> {
    u: T;
    constructor(u: T);
    add(v: Vector<T> | []): Vector<T>;
    sub(v: Vector<T> | []): Vector<T>;
    get(): T;
}
