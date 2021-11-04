import Layer from './Layer';
import Block from './Block';
import Sprite from './Sprite';

type LionNode = Block | Sprite;

interface Border {
  color: string;
  width: number;
  radius: number;
}

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
const drawRadiusRoute = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    r: number,
): void => {
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

const setBorder = (
    ctx: CanvasRenderingContext2D,
    borderParams: Border,
    block: Block,
) => {
  const {x, y} = block;
  const w = block.width;
  const h = block.height;
  if (borderParams.width) ctx.lineWidth = borderParams.width;
  if (borderParams.color) ctx.strokeStyle = borderParams.color;
  const p = borderParams.width / 2; // 偏移距离
  // 是否有圆角
  if (borderParams.radius) {
    const r = borderParams.radius;
    drawRadiusRoute(ctx, x - p, y - p, w + 2 * p, h + 2 * p, r + p);
    ctx.stroke();
  } else {
    ctx.strokeRect(x - p, y - p, w + 2 * p, h + 2 * p);
  }
};

export const renderBlock = (ctx: CanvasRenderingContext2D, block: Block) => {
  const {x, y, width, height} = block;
  const {borderRadius, borderColor, borderWidth} = block.attributes;
  if (borderWidth) {
    setBorder(
        ctx,
        {
          width: borderWidth,
          color: borderColor,
          radius: borderRadius,
        },
        block,
    );
  }
  ctx.save();
  if (borderRadius !== undefined) {
    drawRadiusRoute(ctx, x, y, width, height, borderRadius);
  }
  ctx.strokeStyle = borderColor;
  ctx.fillStyle = block.attributes.backgroundColor;
  ctx.fill();
  ctx.restore();
};

// todo
export const renderSprite = (ctx: CanvasRenderingContext2D, sprite: Sprite) => {
  if (sprite.isStatic) {
    sprite.load().then((img: HTMLImageElement) => {
      console.log(sprite.imgWidth);
      ctx.drawImage(
          img,
          0,
          0,
          sprite.imgWidth,
          sprite.imgHeight,
          sprite.width,
          sprite.height,
          sprite.x,
          sprite.y,
      );
    });
  }
};

const RENDER_MAP = {
  Block: renderBlock,
  Sprite: renderSprite,
};

export const renderWithCanvas = (layers) => {
  layers.forEach((layer: Layer) => {
    const ctx = layer._self.getContext('2d');
    layer.children.forEach((child: LionNode) => {
      RENDER_MAP[child.nodeType](ctx, child);
    });
  });
};
