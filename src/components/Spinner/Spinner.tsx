import React, { ComponentProps } from 'react';
import { Loader } from 'react-feather';

import styles from './Spinner.module.css';

type SpinnerProps = ComponentProps<typeof Loader>;

const Spinner = ({ color, size, ...delegated }: SpinnerProps) => {
	return (
		<div className={styles.wrapper}>
			<Loader color={color} size={size} {...delegated} />
		</div>
	);
};

export default Spinner;
