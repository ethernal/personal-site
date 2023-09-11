import React, { ReactNode } from 'react';

import styles from './ArticleInfo.module.css';

type ArticleInfoProps = {
	publishedOn: string;
	children: ReactNode;
};

function ArticleInfo({ publishedOn, children }: ArticleInfoProps) {
	return (
		<div className={`px-[var(--page-wrapper-padding-inline)]`}>
			<h2 className={`mb-0`}>{children}</h2>
			<ul className={`m-0 list-none`}>
				<li className={`text-sm`}>Published on: {publishedOn}</li>
			</ul>
		</div>
	);
}

export default ArticleInfo;
