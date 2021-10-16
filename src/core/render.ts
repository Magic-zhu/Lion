import Layer from './Layer';
import Block from './Block';
import Sprite from './Sprite';

type LionNode = Block|Sprite;

/**
 *
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {number} r
 */
export const drawRadiusRoute = (ctx:CanvasRenderingContext2D,
    x:number, y:number, w:number, h:number, r:number):void=> {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arc(x + w - r, y + r, r, 1.5 * Math.PI, 0);
  ctx.lineTo(x + w, y + h - r);
  ctx.arc(x + w - r, y + h - r, r, 0, 0.5 * Math.PI);
  ctx.lineTo(x + r, y + h);
  ctx.arc(x + r, y + h - r, r, 0.5 * Math.PI, Math.PI);
  ctx.lineTo(x, y + r);
  ctx.arc(x + r, y + r, r, Math.PI, 1.5 * Math.PI);
  ctx.closePath();
};

export const renderBlock = (ctx:CanvasRenderingContext2D, block:Block)=> {
  const {x, y, width, height} = block;
  const {borderRadius, borderColor, borderWidth} = block.attributes;
  ctx.save();
  if (borderRadius!==undefined) {
    drawRadiusRoute(
        ctx,
        x,
        y,
        width,
        height,
        borderRadius,
    );
  }
  ctx.strokeStyle = borderColor;
  ctx.fillStyle = block.attributes.backgroundColor;
  ctx.fillRect(x, y, width, height);
  ctx.restore();
};

export const renderSprite = (ctx:CanvasRenderingContext2D, sprite:Sprite)=> {
  if (sprite.isStatic) {
    sprite.load()
        .then((img:HTMLImageElement)=>{
          console.log(sprite.imgWidth);
          ctx.drawImage(
              img,
              0, 0,
              sprite.imgWidth, sprite.imgHeight,
              sprite.width, sprite.height,
              sprite.x, sprite.y,
          );
        });
  }
};

const RENDER_MAP = {
  'Block': renderBlock,
  'Sprite': renderSprite,
};

export const renderWithCanvas = (layers) => {
  layers.forEach((layer:Layer) => {
    const ctx = layer._self.getContext('2d');
    layer.children.forEach((child:LionNode) => {
      RENDER_MAP[child.nodeType](ctx, child);
    });
  });
};


