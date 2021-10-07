import BaseNode from './BaseNode';
import {LayerOptions} from '../@types/index';
/**
 *
 *
 * @class Layer
 * @extends {BaseNode}
 */
class Layer extends BaseNode {
  _self: HTMLCanvasElement
  ctx: CanvasRenderingContext2D;
  /**
     * Creates an instance of Layer.
     * @memberof Layer
     * @param {Object} options Options for
     */
  constructor(options:LayerOptions) {
    super();
    this.nodeType = 'layer';
    this.attributes.zIndex = options.zIndex!==undefined ? options.zIndex:1;
    this.attributes.backgroundColor =
      options.backgroundColor!==undefined?options.backgroundColor:'#000000';
    this.init();
  }

  /**
   *
   *
   * @memberof Layer
   */
  init() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.width = `100%`;
    canvas.style.height = `100%`;
    canvas.style.backgroundColor = this.attributes.backgroundColor;
    canvas.style.zIndex = `${this.attributes.zIndex}`;
    canvas.width = this.width;
    canvas.height = this.height;
    this._self = canvas;
  }
}
export default Layer;
