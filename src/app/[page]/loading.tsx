import ArticleInfo from '@/components/ArticleInfo';
import { Skeleton } from '@nextui-org/react';

async function SitePageLoading() {
	return (
		<article className="mx-auto max-w-[var(--page-wrapper-max-width)] wrapper">
			<header>
				<ArticleInfo publishedOn={'2023.12.24'} className="font-loading">
					Sebastian Wishes you Merry Christmas
				</ArticleInfo>
			</header>

			<Skeleton className="min-h-[55dvh] w-full rounded-theme-default">
				<div className="font-loading">~~~~~~~~~~~~~~</div>
			</Skeleton>
		</article>
	);
}

export default SitePageLoading;
