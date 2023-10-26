import * as React from 'react';

import ContactForm from '@/components/ContactForm';
import DividerUI from '@/components/DividerUI';
import { cn } from '@/utils/utils';

type ContactSectionProps = {
	className?: string;
};

function ContactSection({ className }: ContactSectionProps) {
	return (
		<div className={cn('', className)}>
			<div className="py-theme-default text-3xl flex flex-col gap-4">
				<h2>Tell me about your project</h2>
				<DividerUI className="bg-theme-accent w-full h-0.5" />
			</div>
			<div>
				<ContactForm />
			</div>
		</div>
	);
}

export default ContactSection;
