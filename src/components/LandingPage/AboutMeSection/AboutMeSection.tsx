'use client';

import { cn } from '@/utils/utils';
import { Divider, Image } from '@nextui-org/react';

function AboutMeSection({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				'w-full py-theme-default grid grid-cols-1 gap-4 md:grid-cols-2',
				className,
			)}
		>
			<section className="flex justify-center items-center">
				<Image
					src="/image/profile/skills-visualization.png"
					width={350}
					alt="React, JavaScript, TypeScript, CSS, HTML"
				/>
			</section>
			<section className="flex flex-col gap-4">
				<h2>About me</h2>
				<Divider className="bg-theme-accent h-0.5" />
				<p>
					My passion for building websites started since 2013 and since then i
					have helped companies around the world build amazing websites and
					products that create real value for the business and users.
				</p>
				<p>
					I enjoy solving problems with clean scalable solutions and I also have
					a genuine passion for inspiring design.
				</p>
				<p>
					I am a fullstack developer focusing on core frontend and backend
					technologies which include HTML, CSS, Javascript, React and other core
					languages
				</p>
			</section>
		</div>
	);
}

export default AboutMeSection;
