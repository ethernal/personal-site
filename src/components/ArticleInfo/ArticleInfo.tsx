import React from 'react';

import styles from './ArticleInfo.module.css';

function ArticleInfo({ publishedOn, children }) {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.pageTitle}>{children}</h2>
			<ul className={styles.list}>
				<li className={styles.listElement}>Published on: {publishedOn}</li>
			</ul>
		</div>
	);
}

export default ArticleInfo;
