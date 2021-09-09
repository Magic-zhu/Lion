import { CircleOptions } from '../@types/index';
import BaseNode from '../core/BaseNode';
import Point from '../utils/Point';
declare class Circle extends BaseNode {
    center: Point;
    radius: number;
    constructor(options: CircleOptions);
}
export default Circle;
