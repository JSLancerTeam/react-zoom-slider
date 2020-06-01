import React from 'react';

interface SliderImage {
	image: string;
	text?: string;
}

declare const SliderImage: React.ComponentType<SliderImageProps>;

type SliderDirection = 'left' | 'right';

interface SliderImageProps {
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

export default SliderImage;
