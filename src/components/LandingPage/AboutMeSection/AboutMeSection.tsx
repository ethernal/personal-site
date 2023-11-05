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
					My passion for creating software started while I was still in primary
					school but I started creating real products in 2013 and since then i
					have built applications and products that multiply the value of the
					businesses.
				</p>
				<p>
					I enjoy solving problems with clean scalable solutions and I also have
					a genuine passion for UX design as I find that easy to use products
					turn people into their best possible versions.
				</p>
				<p>
					I am a fullstack developer focusing on frontend technologies which
					include HTML, CSS, Javascript and Typescript, React and others.
				</p>
			</section>
		</div>
	);
}

export default AboutMeSection;
