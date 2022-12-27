export interface Vec2 {
    a: number;
    b: number;
}
export declare class Vec2 {
    a: number;
    b: number;
    constructor(a: number, b: number);
    sub(vec2: Vec2): Vec2;
    add(vec2: Vec2): Vec2;
    set(a: number, b: number): void;
}
