export type RGBA = [red: number, green: number, blue: number, alpha: number];
export type Color = RGBA | string;

// --- Generic Types --- //
export type HTMLValueType = number | `${number}%` | string;


// --- Tranformation Interfaces --- //

export interface TransformProps {
  translate?: [
    X: [start: number, end: number],
    Y: [start: number, end: number]
  ];
  translateX?: [start: number, end: number];
  translateY?: [start: number, end: number];
  scale?: [start: number, end: number];
  rotate?: [start: number, end: number];
}

export interface GradientProps {
  type?: "linear" | "radial" | undefined;
  dir?: [start: number, end: number] | undefined;
  start: Color[];
  end: Color[];
}

// type DropShadowType = 
//   `${number}px ${number}px ${number}px` |
//   `${number}px ${number}px ${number}px` & Color

export interface FilterProps {
  blur?: [start: number, end: number];
  brightness?: [start: number, end: number];
  contrast?: [start: number, end: number];
  grayscale?: [start: number, end: number];
  hueRotate?: [start: number, end: number];
  opacity?: [start: number, end: number];
  saturate?: [start: number, end: number];
  sepia?: [start: number, end: number];

  dropShadow?: [start: number, end: number];
}
// --------------------------------------



// --- Animation Interfaces --- //

export interface IParallaxAnimation {
  offset?: number;
  opacity?: [start: number, end: number];
  background?: [start: Color, end: Color];
  transform?: TransformProps;
  gradient?: GradientProps;
  filter?: FilterProps;
}

export interface IParallaxAnimationProps extends IParallaxAnimation {
  length: HTMLValueType;
}


export interface ParallaxKeyframe {
  length: HTMLValueType;
  animation: IParallaxAnimationProps;
}
// ---------------------------------------


// --- Parallax Interfaces --- //

export interface ParallaxStatus {
  isTransitioning: boolean;
  inView: boolean;
}

export type IParallaxChildren = (status: ParallaxStatus) => JSX.Element;

export interface IParallaxProps {
  startScroll?: "top" | "center" | "bottom" | number;
  endScroll?: HTMLValueType;
  speed?: number;
  disabled?: boolean;
  offset?: number;
  
  fadeIn?: IParallaxAnimationProps;
  fadeOut?: IParallaxAnimationProps;
  keyframes?: ParallaxKeyframe[];

  className?: string;
  children?: IParallaxChildren;

  render?(): React.ReactElement<React.ReactNode>

  callback?: () => void;
}


export type IParallax = IParallaxProps & IParallaxAnimationProps
// -------------------------------------------------
