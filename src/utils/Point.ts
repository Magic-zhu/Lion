
/**
 *
 *
 * @class Point
 */
class Point extends Array {
  /**
   * Creates an instance of Point.
   * @param {number} [x=0]
   * @param {number} [y=0]
   * @memberof Point
   */
  constructor(x:number=0, y:number=0) {
    super();
    this.x = x;
    this.y = y;
  }

  /**
   *
   * @param {number} v
   * @memberof Point
   */
  set x(v:number) {
    this[0] = v;
  }

  /**
   *
   * @param {number} v
   * @memberof Point
   */
  set y(v:number) {
    this[1] =v;
  }

  /**
   *
   * @readonly
   * @memberof Point
   */
  get x() {
    return this[0];
  }

  /**
   *
   * @readonly
   * @memberof Point
   */
  get y() {
    return this[1];
  }
}
export default Point;
