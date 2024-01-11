'use client';
import * as React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Id, toast } from 'react-toastify';

import { sendEmailAction } from '@/utils/sendMail';
import { cn } from '@/utils/utils';

type ContactFormData = {
	email: string;
	name: string;
	message: string;
};

function Submit({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	const status = useFormStatus();
	return (
		<button type="submit" disabled={status.pending} className={className}>
			{children}
		</button>
	);
}

function ContactForm({ className }: { className?: string }) {
	const initialFormState: ContactFormData = {
		email: '',
		name: '',
		message: '',
	};

	const toastId = React.useRef<Id | null>(null);

	const formRef = React.useRef<HTMLFormElement | null>(null);
	const [state, formAction] = useFormState(
		async (prev: any, formData: FormData) => {
			const res = await sendEmailAction(prev, formData);
			if (res === true) {
				updateMailSuccess();
				// formRef.current?.reset();
				return initialFormState;
			} else {
				updateMailError();
				return formData;
			}
		},
		initialFormState,
	);

	const sendMailInProgress = () =>
		(toastId.current = toast('Sending your message. Please wait...', {
			autoClose: false,
		}));

	const updateMailSuccess = () =>
		toastId.current &&
		toast.update(toastId.current, {
			render: 'Your message has been sent. Thank you!',
			type: 'success',
			autoClose: 5000,
		});

	const updateMailError = () =>
		toastId.current &&
		toast.update(toastId.current, {
			render: 'Something went wrong. Please try again later.',
			type: 'error',
			autoClose: 5000,
		});

	return (
		<>
			<form
				className={cn('flex flex-col gap-4 pb-10', className)}
				action={(formData) => {
					sendMailInProgress();
					formAction(formData);
				}}
				ref={formRef}
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<input
						name="name"
						type="text"
						placeholder="Name"
						className="p-3 dark:bg-theme-dark-background-secondary bg-theme-light-background-secondary placeholder:text-theme-light-text-muted dark:placeholder:text-theme-dark-text-muted dark:text-theme-dark-text-light rounded-theme-default outline-theme-accent focus:outline-2 disabled:cursor-not-allowed disabled:bg-opacity-50"
						required
						min={3}
					/>
					<input
						name="email"
						type="email"
						placeholder="Email Address"
						className="p-3 dark:bg-theme-dark-background-secondary bg-theme-light-background-secondary placeholder:text-theme-light-text-muted dark:placeholder:text-theme-dark-text-muted dark:text-theme-dark-text-light rounded-theme-default outline-theme-accent disabled:cursor-not-allowed disabled:bg-opacity-50"
						required
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
				/>
				<Submit className="text-base font-heading max-sm:text-2xl min-w-min sm:self-start text-theme-white bg-theme-accent rounded-md shadow-md shadow-black px-10 text-[clamp(0.925rem,-0.875rem+3vw,1.75rem)] disabled:bg-gray-400 disabled:pointer-events-none disabled:cursor-not-allowed">
					Send
				</Submit>
			</form>
		</>
	);
}

export default ContactForm;
