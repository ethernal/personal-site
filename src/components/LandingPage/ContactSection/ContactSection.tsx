'use client';
import * as React from 'react';

import DividerUI from '@/components/DividerUI';
import { cn } from '@/utils/utils';
import { Button } from '@nextui-org/react';

function ContactSection({ className }: { className?: string }) {
	const [formData, setFormData] = React.useState({});

	const updateFormData = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className={cn('', className)}>
			<div className="py-theme-default text-3xl flex flex-col gap-4">
				<h2>Tell me about your project</h2>
				<DividerUI className="bg-theme-accent w-72 h-0.5" />
			</div>
			<div>
				<form
					className="flex flex-col gap-4 pb-10"
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
						style={{ formSizing: 'content' }}
						minLength={10}
						onChange={updateFormData}
					/>
					<Button
						className="py-3 text-base min-w-min self-start text-theme-white bg-theme-accent rounded-md shadow-2xl shadow-black px-10 text-[clamp(0.925rem,-0.875rem+3vw,1.75rem)]"
						type="submit"
					>
						Send
					</Button>
				</form>
			</div>
		</div>
	);
}

export default ContactSection;
