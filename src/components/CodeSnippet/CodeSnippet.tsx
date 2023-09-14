import { Code } from 'bright';
import React, { ComponentProps } from 'react';

import styles from './CodeSnippet.module.css';
import theme from './theme';

function CodeSnippet(props: ComponentProps<typeof Code>) {
	return (
		/**
		 * it makes more sense to leave this styled via CSS module instead of Tailwind
		 */
		<Code {...props} theme={theme} className={styles.wrapper} lineNumbers />
	);
}

export default CodeSnippet;
