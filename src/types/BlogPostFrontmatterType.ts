type BlogPostFrontmatterType = {
	slug: string;
	title: string;
	author?: string;
	published?: boolean;
	publishedOn: string | Date;
	abstract: string;
	image?: string | null;
	imageAlt?: string | null;
	imageCredits?: string | null;
};

export default BlogPostFrontmatterType;
