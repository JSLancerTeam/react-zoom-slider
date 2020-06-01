import React from 'react';

interface SliderImage {
	title: string;
	sub?: string;
}

type TimelineDirection = 'left' | 'center' | 'right';
type TimelinePivot = 'vertical' | 'horizontal';

interface TimelineProps {
	/**
	 * Array of TimelineItem to display on the timeline
	 */
	timelines: TimelineItem[];
	/**
	 * Left, Center, or Right
	 */
	direction?: TimelineDirection;
	/**
	 * Horizontal or Vertical
	 */
	pivot?: TimelinePivot;
	/**
	 * 'none' or a CSS px string. Eg: 100px, 200px...
	 */
	textLimit?: string;
	/**
	 * Whether to display a tooltip
	 */
	tooltip?: boolean;
}

declare const SliderImage: React.ComponentType<SliderImageProps>;

export { SliderImage };
