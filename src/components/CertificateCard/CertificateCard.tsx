'use client';

import { Certificate } from '@/types/CurriculumVitae';
import { cn } from '@/utils/utils';

import CardUI, { CardUIFooter, CardUIHeader } from '../CardUI';
import ResponsiveImage from '../ResponsiveImage';

type CertificateCardProps = {
	certificate: Prettify<Certificate>;
	className?: string;
};
function CertificateCard({
	certificate,
	className = '',
}: CertificateCardProps) {
	const { name, issuer, date, url } = certificate;

	return (
		<CardUI
			className={cn('p-0 mb-4 min-h-[300px]', className)}
			isBlurred={true}
			isFooterBlurred={true}
		>
			<CardUIHeader
				className={
					'absolute z-10 top-1 flex-col items-start bg-white bg-[linear-gradient(180deg,_rgba(255,255,255,0.4)_0%,_rgba(255,255,255,0.2)_100%)] pb-4 backdrop-blur-[2px]'
				}
			>
				<h4 className="font-bold text-large uppercase">{name}</h4>
				<ul>
					<li className="text-small font-semibold min-h-">{issuer}</li>
				</ul>
			</CardUIHeader>

			{url && url?.length > 0 && (
				<ResponsiveImage
					alt="Card background"
					className="z-0 w-full h-full object-cover"
					src={url}
				/>
			)}
			<CardUIFooter
				className={
					'p-0 z-10 bottom-4 absolute text-tiny rounded-none align-middle'
				}
			>
				<p className="text-theme-black m-auto py-2 font-semibold text-small">
					{date}
				</p>
			</CardUIFooter>
		</CardUI>
	);
}

export default CertificateCard;
