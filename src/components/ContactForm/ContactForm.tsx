'use client';
import * as React from 'react';

import { cn } from '@/utils/utils';
import { Button } from '@nextui-org/react';

type ContactFormData = {
	email: string;
	name: string;
	message: string;
};

function ContactForm({ className }: { className?: string }) {
	const [formData, setFormData] = React.useState<ContactFormData | {}>({
		email: '',
		name: '',
		message: '',
	});

	const updateFormData = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): void => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="min-h-[59dvh]">
			<p>If you want to get in touch, please fill out the form below.</p>
			<form
				className={cn('flex flex-col gap-4 pb-10', className)}
				onSubmit={(e) => {
					e.preventDefault();
					console.log('Sending message to server with data: ');
					console.log('-------------------------------------');
					console.log(formData);
					console.log('-------------------------------------');
				}}
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<input
						name="name"
						type="text"
						placeholder="Name"
						className="p-3 dark:bg-theme-dark-background-secondary bg-theme-light-background-secondary placeholder:text-theme-light-text-muted dark:placeholder:text-theme-dark-text-muted dark:text-theme-dark-text-light rounded-theme-default outline-theme-accent focus:outline-2"
						required
						min={3}
						onChange={updateFormData}
					/>
					<input
						name="email"
						type="email"
						placeholder="Email Address"
						className="p-3 dark:bg-theme-dark-background-secondary bg-theme-light-background-secondary placeholder:text-theme-light-text-muted dark:placeholder:text-theme-dark-text-muted dark:text-theme-dark-text-light rounded-theme-default outline-theme-accent"
						required
						onChange={updateFormData}
					/>
				</div>
				<textarea
					name="message"
					placeholder="Message description"
					className="p-3 dark:bg-theme-dark-background-secondary bg-theme-light-background-secondary placeholder:text-theme-light-text-muted dark:placeholder:text-theme-dark-text-muted dark:text-theme-dark-text-light rounded-theme-default outline-theme-accent col-span-1"
					// ignore this error - this is available in Chrome 120
					//@ts-ignore
					style={{ formSizing: 'content' }}
					minLength={10}
					onChange={updateFormData}
				/>
				<Button
					className="text-base font-heading max-sm:text-2xl min-w-min sm:self-start text-theme-white bg-theme-accent rounded-md shadow-md shadow-black px-10 text-[clamp(0.925rem,-0.875rem+3vw,1.75rem)]"
					type="submit"
				>
					Send
				</Button>
			</form>
		</div>
	);
}

export default ContactForm;