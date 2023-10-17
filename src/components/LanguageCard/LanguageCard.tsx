'use client';
import * as React from 'react';

import CardUI, {
	CardUIBody,
	CardUIFooter,
	CardUIHeader,
} from '@/components/CardUI';
import { Language } from '@/types/CurriculumVitae';
import { cn } from '@/utils/utils';
import { CircularProgress, Divider } from '@nextui-org/react';

type LanguageCardProps = {
	language: Prettify<Language>;
	className?: string;
};

function LanguageCard({ language, className = '' }: LanguageCardProps) {
	const { language: languageName, value, fluency } = language;
	return (
		<CardUI
			className={cn('dark:bg-theme-dark-gray', className)}
			isBlurred={true}
		>
			<CardUIHeader>
				<h4 className="font-bold text-large uppercase">{languageName}</h4>
				<small className="text-default-500">
					Current level: <span className="capitalize">{fluency}</span>
				</small>
			</CardUIHeader>
			<Divider orientation="horizontal" />

			<CardUIBody>
				<CircularProgress
					aria-label={`Always learning ${languageName}`}
					size="lg"
					value={value}
					color="success"
					showValueLabel={true}
					className="max-w-md"
				/>
				<p className="m-0">{value}</p>
			</CardUIBody>
			<Divider orientation="horizontal" />
			<CardUIFooter></CardUIFooter>
		</CardUI>
	);
}

export default LanguageCard;
