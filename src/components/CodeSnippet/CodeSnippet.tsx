import { Code } from 'bright';
import React, { ComponentProps } from 'react';

import styles from './CodeSnippet.module.css';
import theme from './theme';

function CodeSnippet(props: ComponentProps<typeof Code>) {
	return (
		<Code {...props} theme={theme} className={styles.wrapper} lineNumbers />
	);
}

export default CodeSnippet;
