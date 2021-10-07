import {CircleOptions} from '../@types/index';
import BaseNode from '../core/BaseNode';
import Point from '../utils/Point';
/**
 *
 *
 * @class Circle
 */
class Circle extends BaseNode {
  public center:Point
  public radius:number
  /**
   * Creates an instance of Circle.
   * @memberof Circle
   * @param {CircleOptions} options
   */
  constructor(options:CircleOptions) {
    super();
    this.nodeType = 'circle';
    this.center = options.center;
    this.radius = options.radius;
  }
}
export default Circle;
