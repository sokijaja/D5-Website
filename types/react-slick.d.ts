import React from 'react';

declare module 'react-slick' {
  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    // Add any other settings you're using
  }

  export interface SliderProps extends Settings {
    children?: React.ReactNode;
  }

  export default class Slider extends React.Component<SliderProps> {}
}