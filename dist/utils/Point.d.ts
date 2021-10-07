declare class Point extends Array {
    constructor(x?: number, y?: number);
    set x(v: number);
    set y(v: number);
    get x(): number;
    get y(): number;
}
export default Point;
