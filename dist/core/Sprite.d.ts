import BaseNode from './BaseNode';
import { SpriteOptions } from '../@types/index';
declare class Sprite extends BaseNode {
    src: string | string[];
    isStatic: boolean;
    constructor(options: SpriteOptions);
}
export default Sprite;
