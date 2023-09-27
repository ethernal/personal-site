import React, { CSSProperties, ReactElement } from 'react';

import styles from '@/components/FullWidthSplitSection/full-width-split-section.module.css';

/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */
function getValidChildren(children: React.ReactNode) {
	return React.Children.toArray(children).filter((child) =>
		React.isValidElement(child),
	) as React.ReactElement[];
}

type FullWidthSplitSectionProps = {
	children: ReactElement;
	className: CSSProperties | string;
};

function FullWidthSplitSection({
	children,
	className: classNamePrefix,
	...delegated
}: FullWidthSplitSectionProps): ReactElement {
	const validChildren = getValidChildren(children);
	const childrenCount = validChildren.length;

	const usableNodes = validChildren.filter((child, index) => {
		if (index >= 2) {
			console.warn(
				`Provided ${childrenCount} elements to FullWidthSplitSection component. This component accepts 1 or 2 elements. ` +
					`Child element of type "${child?.type}", with props: "${JSON.stringify(
						child?.props,
						undefined,
						' ',
					)}" ignored.`,
			);
		}
		if (index < 2) return child;
	});

	return (
		<section
			className={`${styles.fullWidthSplitGrid} ${classNamePrefix ?? ''}`}
			// style={{ height: 300 + 'px' }}
		>
			{usableNodes}
		</section>
	);
}

export default FullWidthSplitSection;
