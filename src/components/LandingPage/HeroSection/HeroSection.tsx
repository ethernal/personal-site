import NextImage from 'next/image';

import { cn } from '@/utils/utils';
import { Image } from '@nextui-org/react';

import CTAButton from '../CTAButton';

function HeroSection({ className }: { className?: string }) {
	return (
		<div className={cn('grid grid-cols-2', className)}>
			<section className="flex flex-col gap-10 py-10">
				<h2 className="text-4xl font-bold">
					I am a software engineer focused on{' '}
					{/* TODO: make it type itself and use multiple keywords */}
					<span className="text-theme-accent">user experience.</span>
				</h2>
				<p className="">
					Hey, I’m Sebastian Pieczyński. A React developer and software engineer
					with more than 12 years experience in IT and software development for
					manufacturing companies. I focus heavily on lowering friction when
					using software and making products that closely align with business
					requirements of my clients.
				</p>
				{/* TODO: call to action should invoke some contact page or form */}
				<CTAButton className="px-10 py-2 flex-1 self-start font-heading">
					Get in Touch
				</CTAButton>
			</section>
			<section className="grid grid-rows-1 grid-cols-1 self-end justify-self-center">
				<Image
					src={`/image/profile/sebastian-pieczynski.png`}
					removeWrapper={true}
					alt="My profile"
					width={250}
					height={450}
					className="row-start-1 row-end-2 col-start-1 col-end-1 self-end pointer-events-none "
					as={NextImage}
				/>
				<div className="w-40 xs:w-48 sm:w-56 justify-self-center aspect-square -mt-8 dark:bg-theme-dark-background-secondary-muted bg-theme-light-background-secondary rounded-full row-start-1 row-end-1 col-start-1 col-end-1"></div>
			</section>
		</div>
	);
}

export default HeroSection;
