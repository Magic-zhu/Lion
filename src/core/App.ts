import BaseNode from './BaseNode';
import { renderUseCanvas } from './render';
import {ApplicationOptions} from '../@types/index.d';
/**
 *
 *
 * @export
 * @class App
 * @extends {BaseNode}
 */
class App extends BaseNode {

  root:HTMLDivElement = null;
  layers:[] = [];
  _layersSortedByIndex = [];

  /**
  * Creates an instance of App.
  * @param {ApplicationOptions} [options]
  * @param {number} [options.resolution]
  * The resolution / device pixel ratio of the renderer.
  * @memberof App
  */
  constructor(options?:ApplicationOptions) {
    super();
    this.nodeType = 'APP';
  }


  mount(element:HTMLDivElement) {
    this.root = element;
  }

  render() {
    renderUseCanvas(this._layersSortedByIndex)
  }
}

export default App;
