import { Certificate } from '@/types/CurriculumVitae';
import { cn } from '@/utils/utils';
import { Image } from '@nextui-org/react';

import CardUI, { CardUIFooter, CardUIHeader } from '../CardUI';

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
			className={cn(
				'p-0 text-theme-light-text-dark bg-theme-light-background-card dark:text-theme-dark-text-dark dark:bg-theme-dark-background-card',
				className,
			)}
			isBlurred={true}
			isFooterBlurred={true}
		>
			<CardUIHeader
				className={
					'absolute z-10 top-1 flex-col items-start bg-white bg-[linear-gradient(180deg,_rgba(255,255,255,0.6)_0%,_rgba(255,255,255,0.8)_100%)] pb-4 backdrop-blur-[2px]'
				}
			>
				<h4 className="font-bold text-large uppercase">{name}</h4>
				<ul>
					<li className="text-small font-semibold min-h-">{issuer}</li>
				</ul>
			</CardUIHeader>

			{url && url?.length > 0 && (
				<Image
					alt={name}
					className="z-0 min-h-[250px] h-full w-full object-cover dark:invert "
					src={url}
					removeWrapper
				/>
			)}
			<CardUIFooter
				className={
					'p-0 z-10 bottom-4 absolute text-tiny rounded-none align-middle'
				}
			>
				<p className="text-theme-light-text-dark dark:text-theme-dark-text-light m-auto py-2 font-semibold text-small">
					{date}
				</p>
			</CardUIFooter>
		</CardUI>
	);
}

export default CertificateCard;
