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
    const imageSource:string = sprite.src as string;
    const img = document.createElement('img');
    img.setAttribute('crossOrigin', 'Anonymous');
    img.src = imageSource;
    img.onload = () => {
      ctx.drawImage(img, sprite.width, sprite.height);
    };
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


