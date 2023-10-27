import dynamic from 'next/dynamic';

const ArticleInfo = dynamic(
	() => import('@/components/ArticleInfo/ArticleInfo'),
);
export default ArticleInfo;
