import {renderWithCanvas} from './render';
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
  nodeType: string;
  root: HTMLDivElement = null;
  layers: Layer[] = [];
  _layersSortedByIndex = [];
  resolution: number = 1;

  /**
   * Creates an instance of App.
   * @param {ApplicationOptions} [options]
   * @param {number} [options.resolution]
   * The resolution / device pixel ratio of the renderer.
   * @memberof App
   */
  constructor(options?: ApplicationOptions) {
    this.nodeType = 'APP';
    this.resolution = options && options.resolution ? options.resolution : 1;
    this.handleWindowResize();
  }

  /**
   *
   *
   * @param {HTMLDivElement} element
   * @memberof App
   */
  mount(element: HTMLDivElement) {
    this.root = element;
  }

  /**
   *
   *
   * @param {Layer[]} layers
   * @return {*}  {Layer []}
   * @memberof App
   */
  sortByzIndex(layers: Layer[]): Layer[] {
    return layers.sort((a, b) => {
      return a.attributes.zIndex - b.attributes.zIndex;
    });
  }
  /**
   *
   *
   * @memberof App
   */
  render() {
    this._layersSortedByIndex = this.sortByzIndex(this.layers);
    renderWithCanvas(this._layersSortedByIndex);
  }

  /**
   *
   * put the layers into the application
   * @memberof App
   * @param {Layer} layer - the instance of layer
   */
  append(layer: Layer) {
    // if you had not mount an element, it will create one.
    if (this.root === null) {
      this.root = document.createElement('div');
      this.root.id = 'LionRoot';
      this.root.style.width = '100vw';
      this.root.style.height = '100vh';
      document.body.append(this.root);
    }
    this.handleResolution(layer._self);
    this.root.append(layer._self);
    this.layers.push(layer);
  }

  /**
   *
   *
   * @param {HtmlCanvasElement} canvasEle
   * @memberof App
   */
  handleResolution(canvasEle) {
    const width =
    +getComputedStyle(this.root).width.match(/[0-9]*/) * this.resolution;
    const height =
    +getComputedStyle(this.root).height.match(/[0-9]*/) * this.resolution;
    canvasEle.width = width;
    canvasEle.height = height;
  }

  /**
   *
   *
   * @memberof App
   */
  handleWindowResize() {
    if (window!== undefined) {
      window.onresize = () =>{
        this._layersSortedByIndex.forEach((layer:Layer)=>{
          this.handleResolution(layer._self);
        });
        this.render();
      };
    }
  }
}

export default App;
