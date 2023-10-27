'use client';

import { useState } from 'react';
import {
	AiOutlineLeft as PreviousArrowIcon,
	AiOutlineRight as NextArrowIcon,
} from 'react-icons/ai';
import ReactSwipe from 'react-swipe';

import DividerUI from '@/components/DividerUI';
import { cn } from '@/utils/utils';

import TestimonialItem from '../TestimonialItem';

function TestimonialsSection({ className }: { className?: string }) {
	let reactSwipeEl: ReactSwipe | null = null;
	const [sliderPosition, setSliderPosition] = useState(0);

	return (
		<div className={cn('', className)}>
			<span className="flex justify-center flex-col items-center pb-12">
				<h2 className="text-3xl  pb-4">What my clients say</h2>
				<DividerUI className="bg-theme-accent w-40 h-0.5" />
			</span>

			<div className="relative px-10">
				<button
					onClick={() => {
						reactSwipeEl && reactSwipeEl.prev();
						setSliderPosition(reactSwipeEl?.getPos() || 0);
					}}
					className="absolute top-1/4 -left-4 z-10 "
				>
					<PreviousArrowIcon className="w-10 h-10 text-theme-dark-text-gray" />
				</button>

				<ReactSwipe
					className="grid grid-cols-1 grid-rows-1"
					swipeOptions={{ continuous: true }}
					ref={(el) => (reactSwipeEl = el)}
				>
					<div className="grid grid-cols-2 gap-8 pb-10">
						<TestimonialItem
							profile={{
								src: '/profile/profile-photo.png',
								name: 'Sebastian Pieczyński',
								position: 'Software Engineer',
								testimonial: 'I made this website with Next.js!',
							}}
						/>
						<TestimonialItem
							profile={{
								src: 'https://i.pravatar.cc/200?img=1',
								name: 'Cathrene',
								position: 'Model',
								testimonial:
									'I love the games Rafał creates. Every session is unique and fun!',
							}}
						/>
					</div>
					<div className="grid grid-cols-2 gap-20 pb-10">
						<TestimonialItem
							profile={{
								src: 'https://i.pravatar.cc/200?img=2',
								name: 'Miquel',
								position: 'Game Tester',
								testimonial:
									'I cannot write or read but these games are still engaging and thanks to their design now I do not have to learn!',
							}}
						/>
						<TestimonialItem
							profile={{
								src: 'https://i.pravatar.cc/200?img=3',
								name: 'The Boss',
								position: 'Capo di tutti capi',
								testimonial:
									'I easily spot the game that is worth my time. These certailny are!',
							}}
						/>
					</div>

					<div className="grid grid-cols-2 gap-20 pb-10">
						<TestimonialItem
							profile={{
								src: 'https://i.pravatar.cc/200?img=4',
								name: 'Albert',
								position: 'Scholar',
								testimonial:
									'I invited my friends over for a session during the weekend. We were lucky my mom was home and we got food and water. We thought we played a bit and the weekend was over! We almost did not sleep because we were so engaged.',
							}}
						/>
						<TestimonialItem
							profile={{
								src: 'https://i.pravatar.cc/200?img=5',
								name: 'Hanna',
								position: 'PhD Student',
								testimonial:
									'I would not have made it to PhD without these games. They helped me so much both in growing my intuition as well as planning skills.',
							}}
						/>
					</div>
				</ReactSwipe>
				<button
					onClick={() => {
						reactSwipeEl && reactSwipeEl.next();
						setSliderPosition(reactSwipeEl?.getPos() || 0);
					}}
					className="absolute top-1/4 -right-4 z-10"
				>
					<NextArrowIcon className="w-10 h-10 text-theme-dark-text-gray" />
				</button>
			</div>

			<div className="flex justify-center gap-4">
				<span
					className={`rounded-full cursor-pointer ${
						sliderPosition === 0 ? 'bg-theme-accent' : 'bg-theme-inactive'
					} w-3 aspect-square`}
					onClick={() => {
						reactSwipeEl && reactSwipeEl.slide(0, 100);
						setSliderPosition(reactSwipeEl?.getPos() || 0);
					}}
				></span>
				<span
					className={`rounded-full cursor-pointer ${
						sliderPosition === 1 ? 'bg-theme-accent' : 'bg-theme-inactive'
					} w-3 aspect-square`}
					onClick={() => {
						reactSwipeEl && reactSwipeEl.slide(1, 100);
						setSliderPosition(reactSwipeEl?.getPos() || 0);
					}}
				></span>
				<span
					className={`rounded-full cursor-pointer ${
						sliderPosition === 2 ? 'bg-theme-accent' : 'bg-theme-inactive'
					} w-3 aspect-square`}
					onClick={() => {
						reactSwipeEl && reactSwipeEl.slide(2, 100);
						setSliderPosition(reactSwipeEl?.getPos() || 0);
					}}
				></span>
			</div>
		</div>
	);
}

export default TestimonialsSection;
