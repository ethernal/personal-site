import { ClassValue, clsx } from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */
export function getValidChildren(children: React.ReactNode) {
	return React.Children.toArray(children).filter((child) =>
		React.isValidElement(child),
	) as React.ReactElement[];
}

export function getDataAttributesFromJSONKeywords(
	keywords: string[],
	prefix = 'data-keyword',
) {
	let dataKeywords = {};
	keywords?.forEach((keyword) => {
		const attr = { [`${prefix}-${keyword.toLowerCase()}`]: keyword };
		dataKeywords = {
			...dataKeywords,
			...attr,
		};
	});

	return dataKeywords;
}
