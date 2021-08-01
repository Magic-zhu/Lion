import BaseNode from './BaseNode';
import {BlockOptions} from '../@types/index';
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
  constructor(options:BlockOptions) {
    super();
    this.nodeType = 'Block';
  }
}

export default Block;
