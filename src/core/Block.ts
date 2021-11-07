import BaseNode from './BaseNode';
import { BlockOptions } from '../@types/index';
/**
 *
 *
 * @class Block
 * @extends {BaseNode}
 */
class Block extends BaseNode {
  /**
   * Creates an instance of Block.
   * @param {BlockOptions} options
   * @memberof Block
   */
  constructor(options: BlockOptions) {
    super();
    this.nodeType = 'Block';
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    this.children =
      options.children !== undefined ? options.children : this.children;
    const attrMap = [
      'borderRadius',
      'borderWidth',
      'borderColor',
      'backgroundColor',
    ];
    attrMap.forEach((key: string) => {
      this.attributes[key] =
        options[key] !== undefined ? options[key] : this.attributes[key];
    });
  }
}

export default Block;
