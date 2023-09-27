import { ReactNode } from 'react';

type ArticleInfoProps = {
	publishedOn: string;
	children: ReactNode;
};

function ArticleInfo({ publishedOn, children }: ArticleInfoProps) {
	return (
		<div className={`px-viewport-padding`}>
			<h2 className={`mb-0`}>{children}</h2>
			<ul className={`m-0 list-none`}>
				<li className={`text-sm`}>Published on: {publishedOn}</li>
			</ul>
		</div>
	);
}

export default ArticleInfo;
