import BaseNode from './BaseNode';
import {SpriteOptions} from '../@types/index';
/**
 *
 *
 * @class Sprite
 */
class Sprite extends BaseNode {
  src:string|string[];
  isStatic:boolean = true;
  /**
   * Creates an instance of Sprite.
   * @memberof Sprite
   * @param {SpriteOptions} options
   */
  constructor(options:SpriteOptions) {
    super();
    this.nodeType = 'Sprite';
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    this.src = options.src;
    options.isStatic!==undefined?this.isStatic = options.isStatic:null;
  }
}
export default Sprite;
