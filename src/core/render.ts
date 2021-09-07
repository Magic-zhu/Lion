import Layer from './Layer';
import Block from './Block';

type LionNode = Block;

export const renderWithCanvas = (layers) => {
  layers.forEach((layer:Layer) => {
    const ctx = layer._self.getContext('2d');
    layer.children.forEach((child:LionNode) => {
      if (child.nodeType === 'Block') {
        renderBlock(ctx, child);
      }
    });
  });
};


export const renderBlock = (ctx:CanvasRenderingContext2D, block:Block)=> {
  ctx.fillStyle = block.attributes.backgroundColor;
  ctx.fillRect(block.x, block.y, block.width, block.height);
};

