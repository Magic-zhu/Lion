import BaseNode from './BaseNode';
import {SpriteOptions, SpriteClip} from '../@types/index';
/**
 *
 *
 * @class Sprite
 */
class Sprite extends BaseNode {
  src:string;
  isStatic:boolean = true;
  imgWidth:number = 0;
  imgHeight:number = 0;
  _img:HTMLImageElement|null = null;
  clip:SpriteClip = {};
  /**
   * Creates an instance of Sprite.
   * @memberof Sprite
   * @param {SpriteOptions} options
   */
  constructor(options:SpriteOptions) {
    super();
    this.nodeType = 'Sprite';
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    this.src = options.src;
    options.isStatic!==undefined?this.isStatic = options.isStatic:null;
    this.load();
  }
  /**
   * load image source
   * @return {Promise}
   * @memberof Sprite
   */
  load() {
    if (this._img !==null) {
      return Promise.resolve(this._img);
    }

    const imageSource= this.src;
    if ( typeof imageSource ==='string') {
      const img = document.createElement('img');
      img.setAttribute('crossOrigin', 'Anonymous');
      img.src = imageSource;
      return new Promise((resolve, reject)=>{
        img.onload=()=>{
          this._img = img;
          this.imgWidth = img.width;
          this.imgHeight = img.height;
          resolve(img);
        };
        img.onerror=(err)=>{
          console.warn('img load error:', err);
          reject(err);
        };
      });
    } else {
      return new Promise((resolve, reject)=>{

      });
    }
  }
}
export default Sprite;
