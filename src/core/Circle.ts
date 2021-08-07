import BaseNode from './BaseNode';
import {CircleOptions} from '../@types/index';
import Point from '../utils/Point';
/**
 *
 *
 * @class Sprite
 */
class Circle extends BaseNode {
  public center:Point
  public radius:number

  /**
   * Creates an instance of Sprite.
   * @memberof Sprite
   * @param {SpriteOptions} options
   */
  constructor(options:CircleOptions) {
    super();
    this.nodeType = 'circle';
    this.center = options.center;
    this.radius = options.radius;
  }
}
export default Circle;
