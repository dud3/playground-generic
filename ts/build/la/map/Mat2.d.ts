import { Vec2 } from "./Vec2";
export type TMat2 = [Vec2, Vec2];
export declare class Mat2 {
    constructor(u: Vec2, v: Vec2);
    add(): void;
    mul(): void;
    div(): void;
}
