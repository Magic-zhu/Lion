import Layer from './Layer';
import Block from './Block';
import Sprite from './Sprite';

type LionNode = Block|Sprite;

export const renderBlock = (ctx:CanvasRenderingContext2D, block:Block)=> {
  ctx.fillStyle = block.attributes.backgroundColor;
  ctx.fillRect(block.x, block.y, block.width, block.height);
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


