import BaseNode from './BaseNode';
import { LayerOptions } from '../@types/index';
declare class Layer extends BaseNode {
    _self: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor(options: LayerOptions);
    init(): void;
}
export default Layer;
