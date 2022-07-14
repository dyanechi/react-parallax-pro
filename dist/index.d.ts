/// <reference types="react" />
declare type RGBA = [red: number, green: number, blue: number, alpha: number];
declare type Color = RGBA | string;
declare type HTMLValueType = number | `${number}%` | string;
interface TransformProps {
    translate?: [
        X: [start: number, end: number],
        Y: [start: number, end: number]
    ];
    translateX?: [start: number, end: number];
    translateY?: [start: number, end: number];
    scale?: [start: number, end: number];
    rotate?: [start: number, end: number];
}
interface GradientProps {
    type?: "linear" | "radial" | undefined;
    dir?: [start: number, end: number] | undefined;
    start: Color[];
    end: Color[];
}
interface FilterProps {
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
interface IParallaxAnimation {
    offset?: number;
    opacity?: [start: number, end: number];
    background?: [start: Color, end: Color];
    transform?: TransformProps;
    gradient?: GradientProps;
    filter?: FilterProps;
}
interface IParallaxAnimationProps extends IParallaxAnimation {
    length: HTMLValueType;
}
interface ParallaxKeyframe {
    length: HTMLValueType;
    animation: IParallaxAnimationProps;
}
interface ParallaxStatus {
    isTransitioning: boolean;
    inView: boolean;
}
declare type IParallaxChildren = (status: ParallaxStatus) => JSX.Element;
interface IParallaxProps {
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
    render?(): React.ReactElement<React.ReactNode>;
    callback?: () => void;
}

declare const Parallax: (props: IParallaxProps) => JSX.Element;

declare const getRGBA: (color: Color) => RGBA;

export { Parallax, getRGBA };
