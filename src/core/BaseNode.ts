let _BaseNodeId = 0;

/**
 *
 *
 * @class BaseNode
 */
class BaseNode {
  id: number | string; // unique identification
  x: number = 0; // absolute position
  y: number = 0; // absolute position
  width: number = 0;
  height: number = 0;
  parent: any = null;
  children: any = [];
  nodeType: string = 'Base';
  attributes = {
    zIndex: 0,
    borderRadius: 0,
    backgroundColor: '#000000',
    padding: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
  };

  /**
   * Creates an instance of BaseNode.
   * @memberof BaseNode
   */
  constructor() {
    Object.defineProperty(this, 'id', {value: _BaseNodeId++});
  }

  /**
   * copy this node
   */
  copy() {}

  /**
   * addEventListener
   */
  addEventListener() {}

  /**
   *
   *
   * @memberof BaseNode
   */
  removeEventListener() {}

  /**
   * removeAllListeners
   */
  removeAllListeners() {}

  /**
   *
   *
   * @memberof BaseNode
   */
  attr() {}

  /**
   *
   *
   * @memberof BaseNode
   */
  removeAttribute() {}

  /**
   *
   *
   * @param {BaseNode} child
   * @memberof BaseNode
   */
  append(child: BaseNode) {
    if (child instanceof BaseNode) {
      child.parent = this;
      this.children.push(child);
    } else {
      throw new Error('only Lion node can be appended.');
    }
  }
}

export default BaseNode;
