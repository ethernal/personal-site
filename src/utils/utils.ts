import { ClassValue, clsx } from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { diacriticsToLettersMap } from './diacriticsMap';

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
		const attr = {
			[`${prefix}-${keyword.toLowerCase().replaceAll(' ', '-')}`]: keyword,
		};
		dataKeywords = {
			...dataKeywords,
			...attr,
		};
	});

	return dataKeywords;
}

/**
 * Removes diacritics from a given string.
 *
 * @param {string} str - The input string
 * @return {string} - The string with diacritics removed
 */
export function removeDiacritics(str: string) {
	let changes = diacriticsToLettersMap;

	for (var i = 0; i < changes.length; i++) {
		str = str.replace(changes[i].letters, changes[i].base);
	}
	return str;
}
