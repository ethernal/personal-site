type BlogPostFrontmatterType = {
	slug: string;
	title: string;
	author?: string;
	published?: boolean;
	publishedOn: string;
	abstract: string;
	image?: string;
	imageAlt?: string;
	imageCredits?: string;
};

export default BlogPostFrontmatterType;
