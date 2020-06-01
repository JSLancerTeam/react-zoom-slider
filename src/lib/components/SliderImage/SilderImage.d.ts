import React from 'react';

export interface SliderImage {
	image: string;
	text?: string;
}

export type SliderDirection = 'left' | 'right';

export interface SliderImageProps {
	/**
	 * Array to display on the slider image
	 */
	data: SliderImage[];
	/**
	 * Left, Center, or Right
	 */
	direction?: SliderDirection;
	/**
	 * Whether to display a description image
	 */
	showDescription?: boolean;
	/**
	 * Set size for slider image
	 */
	width?: auto;
}

declare const SliderImage: React.ComponentType<SliderImageProps>;
export default SliderImage;
