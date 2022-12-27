import { Vec, Vector } from "./Vector";
export type Mat<T extends Vector<Vec>> = [T] | [T, T] | [T, T, T] | [T, T, T, T];
export declare class Matrix<T extends Mat<Vector<Vec>>> {
    m: T;
    constructor(m: T);
    add(m: Matrix<T>): Vector<Vec>[];
    sub(m: Matrix<T>): Vector<Vec>[];
    get(): T;
}
/**
 * Example:
 *
 * const A22 = new Matrix<Mat<Vector<Vec2>>>([
 * 	new Vector<Vec2>([0, 1]),
 * 	new Vector<Vec2>([0, 1])
 * ]);
 *
 * const B22 = new Matrix<Mat<Vector<Vec2>>>([
 * 	new Vector<Vec2>([1, 1]),
 * 	new Vector<Vec2>([1, 1])
 * ]);
 *
 * const A33 = new Matrix<Mat<Vector<Vec3>>>([
 * 	new Vector<Vec3>([0,0,1]),
 * 	new Vector<Vec3>([0,0,1]),
 * 	new Vector<Vec3>([0,0,1])
 * ]);
 *
 * console.log(A22.add(A22), B22.sub(A22));
 */
