import Circle from '../shapes/Circle';

export const renderUseCanvas = (layers) => {

};

export const renderCircle = (ctx:CanvasRenderingContext2D, circle:Circle) =>{
  ctx.save();
  ctx.beginPath();
  ctx.arc(circle.center.x, circle.center.y, circle.radius, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};

