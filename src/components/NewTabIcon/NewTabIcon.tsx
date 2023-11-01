import * as React from 'react';
import { RiExternalLinkLine as NewTab } from 'react-icons/ri';

import { cn } from '@/utils/utils';

function NewTabIcon({ className }: { className?: string }) {
	return (
		<span className="inline-flex text-[0.9rem]">
			<NewTab
				className={cn(
					'text-theme-light-text-dark-muted dark:text-theme-dark-text-light-muted',
					className,
				)}
			/>
		</span>
	);
}

export default NewTabIcon;
