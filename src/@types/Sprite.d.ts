export interface SpriteOptions {
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  isStatic?: boolean;
  clip?: SpriteClip;
  borderRadius?: number;
}

export interface SpriteClip {
  sx?: number;
  sy?: number;
  sw?: number;
  sh?: number;
}
