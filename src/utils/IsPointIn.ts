import Block from '../core/Block';
import Point from './Point';
import Circle from '../shapes/Circle';

export const IsPointInRect = (point:Point, target:Block )=> {

};


export const IsPointInCircle = (point:Point, target:Circle) => {
  const edgeX = Math.abs(point.x - target.center.x);
  const edgeY = Math.abs(point.y - target.center.y);
  if (Math.pow(edgeX, 2)+Math.pow(edgeY, 2)>Math.pow(target.radius, 2)) {
    return false;
  } else {
    return true;
  }
};

