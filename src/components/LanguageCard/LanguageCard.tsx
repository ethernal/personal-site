import CardUI, {
	CardUIBody,
	CardUIFooter,
	CardUIHeader,
} from '@/components/CardUI';
import DividerUI from '@/components/DividerUI';
import { Language } from '@/types/CurriculumVitae';
import { cn } from '@/utils/utils';

import CircularProgressUI from '../CircularProgressUI';

type LanguageCardProps = {
	language: Prettify<Language>;
	className?: string;
};

function LanguageCard({ language, className = '' }: LanguageCardProps) {
	const { language: languageName, value, fluency } = language;
	return (
		<CardUI
			className={cn(
				'dark:bg-theme-dark-background-card bg-theme-light-background-card dark:text-theme-dark-text-light text-theme-light-text-dark',
				className,
			)}
			isBlurred={true}
		>
			<CardUIHeader className={'items-center'}>
				<h4 className="font-bold text-large uppercase">{languageName}</h4>
			</CardUIHeader>
			<DividerUI orientation="horizontal" />

			<CardUIBody>
				<CircularProgressUI value={value} topic={languageName} size="3xl" />
			</CardUIBody>
			<DividerUI orientation="horizontal" className="bg-theme-accent-muted" />
			<CardUIFooter className={'justify-center'}>
				<small className="text-default-500">
					Level: <span className="capitalize">{fluency}</span>
				</small>
			</CardUIFooter>
		</CardUI>
	);
}

export default LanguageCard;
