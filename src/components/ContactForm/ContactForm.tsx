'use client';
import * as React from 'react';

import { sendEmailAction } from '@/utils/sendMail';
import { cn } from '@/utils/utils';
import { Button } from '@nextui-org/react';

import CTAButton from '../LandingPage/CTAButton';

type ContactFormData = {
	email: string;
	name: string;
	message: string;
};

function ContactForm({ className }: { className?: string }) {
	const initialData = {
		email: '',
		name: '',
		message: '',
	};

	const [formData, setFormData] = React.useState<ContactFormData>(initialData);

	const resetFormData = (): void => {
		setFormData(initialData);
	};

	const updateFormData = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): void => {
		const newFormData = { ...formData, [e.target.name]: e.target.value };

		setFormData(newFormData);
	};

	return (
		<form
			className={cn('flex flex-col gap-4 pb-10', className)}
			action={(data) => {
				sendEmailAction(data);
				resetFormData();
			}}
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<input
					name="name"
					type="text"
					placeholder="Name"
					className="p-3 dark:bg-theme-dark-background-secondary bg-theme-light-background-secondary placeholder:text-theme-light-text-muted dark:placeholder:text-theme-dark-text-muted dark:text-theme-dark-text-light rounded-theme-default outline-theme-accent focus:outline-2 disabled:cursor-not-allowed disabled:bg-opacity-50"
					required
					min={3}
					onChange={updateFormData}
					value={formData.name}
					// disabled
					// aria-disabled
				/>
				<input
					name="email"
					type="email"
					placeholder="Email Address"
					className="p-3 dark:bg-theme-dark-background-secondary bg-theme-light-background-secondary placeholder:text-theme-light-text-muted dark:placeholder:text-theme-dark-text-muted dark:text-theme-dark-text-light rounded-theme-default outline-theme-accent disabled:cursor-not-allowed disabled:bg-opacity-50"
					required
					onChange={updateFormData}
					value={formData.email}
					// disabled
					// aria-disabled
				/>
			</div>
			<textarea
				name="message"
				placeholder="Message description"
				className="p-3 dark:bg-theme-dark-background-secondary bg-theme-light-background-secondary placeholder:text-theme-light-text-muted dark:placeholder:text-theme-dark-text-muted dark:text-theme-dark-text-light rounded-theme-default outline-theme-accent col-span-1 disabled:cursor-not-allowed disabled:bg-opacity-50"
				// ignore this error - this is available in Chrome 120
				//@ts-ignore
				style={{ formSizing: 'content' }}
				minLength={10}
				onChange={updateFormData}
				value={formData.message}
				// disabled
				// aria-disabled
			/>
			<CTAButton
				as={Button}
				type="submit"
				className="text-base font-heading max-sm:text-2xl min-w-min sm:self-start text-theme-white bg-theme-accent rounded-md shadow-md shadow-black px-10 text-[clamp(0.925rem,-0.875rem+3vw,1.75rem)]"
			>
				Send
			</CTAButton>
		</form>
	);
}

export default ContactForm;
