import {renderUseCanvas} from './render';
import {ApplicationOptions} from '../@types/index.d';
import Layer from './Layer';
/**
 *
 *
 * @export
 * @class App
 * @extends {BaseNode}
 */
class App {
  nodeType:string
  root:HTMLDivElement = null;
  layers:Layer [] = [];
  _layersSortedByIndex = [];

  /**
  * Creates an instance of App.
  * @param {ApplicationOptions} [options]
  * @param {number} [options.resolution]
  * The resolution / device pixel ratio of the renderer.
  * @memberof App
  */
  constructor(options?:ApplicationOptions) {
    this.nodeType = 'APP';
  }


  /**
   *
   *
   * @param {HTMLDivElement} element
   * @memberof App
   */
  mount(element:HTMLDivElement) {
    this.root = element;
  }

  /**
   *
   *
   * @memberof App
   */
  render() {
    this._layersSortedByIndex =
      this.layers.sort((a, b)=>{
        return a.attributes.zIndex - b.attributes.zIndex;
      });
    renderUseCanvas(this._layersSortedByIndex);
  }

  /**
   *
   * put the layers into the application
   * @memberof App
   * @param {Layer} layer - the instance of layer
   */
  append(layer:Layer) {
    // if you had not mount an element, it will create one.
    if (this.root===null) {
      this.root = document.createElement('div');
      this.root.id = 'LionRoot';
      this.root.style.width = '100%';
      this.root.style.height = '100%';
      document.body.append(this.root);
    }
    this.root.append(layer._self);
    this.layers.push(layer);
  }
}

export default App;
