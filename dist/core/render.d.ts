import Block from './Block';
import Sprite from './Sprite';
export declare const drawRadiusRoute: (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => void;
export declare const renderBlock: (ctx: CanvasRenderingContext2D, block: Block) => void;
export declare const renderSprite: (ctx: CanvasRenderingContext2D, sprite: Sprite) => void;
export declare const renderWithCanvas: (layers: any) => void;
