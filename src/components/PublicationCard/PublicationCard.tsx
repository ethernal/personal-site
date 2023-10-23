import Link from 'next/link';

import { Publication } from '@/types/CurriculumVitae';
import { cn } from '@/utils/utils';

import CardUI, { CardUIBody, CardUIFooter, CardUIHeader } from '../CardUI';

type PublicationCardProps = {
	publication: Prettify<Publication>;
	className?: string;
};
function PublicationCard({
	publication,
	className = '',
}: PublicationCardProps) {
	const { name, publisher, releaseDate, summary, website } = publication;

	return (
		<CardUI
			className={cn(
				'p-0 mb-4 min-h-[300px] max-w-full dark:border dark:border-theme-white dark:bg-theme-dark-background-card bg-theme-light-background-card',
				className,
			)}
			isBlurred={true}
			isFooterBlurred={true}
		>
			<CardUIHeader
				className={
					'flex-col items-start bg-white text-theme-light-text-dark dark:text-theme-dark-text-dark bg-[linear-gradient(180deg,_rgba(255,255,255,0.4)_0%,_rgba(255,255,255,0.2)_100%)] pb-4 backdrop-blur-[2px]'
				}
			>
				<h4 className="font-bold text-large uppercase">{name}</h4>
				<ul>
					<li className="text-small font-semibold min-h-">{publisher}</li>
				</ul>
			</CardUIHeader>
			<CardUIBody className="text-justify text-lg">{summary}</CardUIBody>

			<CardUIFooter className={'p-4 text-tiny rounded-none'}>
				{website && website?.length > 0 && (
					<Link href={website} target="_blank">
						{website}
					</Link>
				)}
				<p className="text-theme-light-text-dark dark:text-theme-dark-text-light m-auto py-2 font-semibold text-small">
					{releaseDate}
				</p>
			</CardUIFooter>
		</CardUI>
	);
}

export default PublicationCard;
