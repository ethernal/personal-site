'use client';

import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/utils/utils';
import { Divider, Image } from '@nextui-org/react';

function WorkedForSection({ className }: { className?: string }) {
	return (
		<div>
			<section
				className={cn(
					'flex justify-center items-center gap-1 flex-col',
					className,
				)}
			>
				<h2 className="pb-4">Companies I have worked for</h2>
				<Divider className="bg-theme-accent w-32 h-0.5 mb-12" />
			</section>
			<section className="flex gap-10 px-32 pb-16 justify-center items-center flex-wrap md:flex-nowrap">
				<Link href="https://www.morecode.ai" target="_blank">
					<Image
						src="/logotypes/morecode-logo.png"
						alt="MoreCode"
						radius="none"
						height={20}
						className="min-w-[5vw] max-w-[80px] bg-transparent"
					/>
				</Link>
				<Link href="https://www.ifm.com" target="_blank">
					<Image
						src="/logotypes/ifm-logo.svg"
						alt="ifm ecolink"
						radius="none"
						height={20}
						className="min-w-[5vw] max-w-[80px]"
					/>
				</Link>
				<Link href="https://www.karrsa.eu" target="_blank">
					<Image
						src="/logotypes/karrsa-logo.png"
						alt="KARR S.A."
						radius="none"
						height={20}
						className="min-w-[5vw] max-w-[200px]"
					/>
				</Link>
			</section>
		</div>
	);
}

export default WorkedForSection;
