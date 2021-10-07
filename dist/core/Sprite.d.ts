import BaseNode from './BaseNode';
import { SpriteOptions, SpriteClip } from '../@types/index';
declare class Sprite extends BaseNode {
    src: string;
    isStatic: boolean;
    imgWidth: number;
    imgHeight: number;
    _img: HTMLImageElement | null;
    clip: SpriteClip;
    constructor(options: SpriteOptions);
    load(): Promise<unknown>;
}
export default Sprite;
