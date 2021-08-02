import BaseNode from './BaseNode';
import {ApplicationOptions} from '../@types/index.d';
import {Renderer} from './render';
import type Stage from './Stage';

/**
 *
 *
 * @export
 * @class App
 * @extends {BaseNode}
 */
class App extends BaseNode {
  /**
   *
   *
   * @type {Renderer}
   * @memberof App
   */
  public renderer: Renderer;

  public stage: Stage;

  /**
  * Creates an instance of App.
  * @param {ApplicationOptions} [options]
  * @param {number} [options.resolution]
  * The resolution / device pixel ratio of the renderer.
  * @memberof App
  */
  constructor(options?:ApplicationOptions) {
    super();
    this.renderer = new Renderer(options);
  }

  render() {
    this.renderer.render(this.stage);
  }
}

export default App;
