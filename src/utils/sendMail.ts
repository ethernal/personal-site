'use server';
import nodemailer, { SentMessageInfo } from 'nodemailer';
import { toast } from 'react-toastify';
import { Resend } from 'resend';

//-----------------------------------------------------------------------------
type SendMailParams = {
	replyTo: string;
	subject: string;
	toEmail: string;
	otpText: string;
};

export async function nodemailerSendMail({
	replyTo,
	subject,
	toEmail,
	otpText,
}: SendMailParams): Promise<Error | SentMessageInfo> {
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.NODEMAILER_USER,
			pass: process.env.NODEMAILER_PASS,
		},
	});

	const mailOptions = {
		replyTo: replyTo,
		to: toEmail,
		subject: subject,
		text: otpText,
	};

	// transporter.sendMail(mailOptions, function (error, info) {
	// 	if (error) {
	// 		console.error('Error: ', error?.name, 'Message: ', error?.message);
	// 		throw new Error(error?.message);
	// 	} else {
	// 		console.log(
	// 			`Email from: "${from}" to: "${toEmail}" with topic: "${subject}" sent.`,
	// 		);
	// 		return true;
	// 	}
	// });

	// for serverless environment
	return await new Promise<Error | SentMessageInfo>((resolve, reject) => {
		// send mail
		transporter.sendMail(
			mailOptions,
			(err: Error | null, info: SentMessageInfo) => {
				if (err) {
					console.error(err);
					reject(err);
				} else {
					resolve(info);
				}
			},
		);
	});
}

export async function resendSendMail({
	replyTo = 'noreply@sebee.website',
	subject = 'Hello World from sebee.website',
	toEmail = 'testament777@gmail.com',
	otpText = '<p>Congrats on sending your <strong>first email</strong>!</p>',
}: SendMailParams) {
	const resend = new Resend(process.env.RESEND_API_KEY);

	await resend.emails.send({
		from: process.env.RESEND_FROM_EMAIL ?? 'noreply@sebee.website',
		reply_to: replyTo,
		to: toEmail,
		subject: subject,
		html: otpText,
	});
}

export async function sendEmailAction(prevState: any, formData: FormData) {
	('use server');
	const name = formData.get('name') as string;
	const email = formData.get('email') as string;
	const message = formData.get('message') as string;
	toast;

	// await resendSendMail({
	// 	replyTo: email,
	// 	subject: 'Email from: ' + name + ' (' + email + ')',
	// 	toEmail: process.env.RESEND_TO_EMAIL ?? 'sebee.website@gmail.com',
	// 	otpText: `${message}`,
	// });

	if (name === null || email === null || message === null) {
		return false;
	}

	try {
		const response = await nodemailerSendMail({
			replyTo: email,
			subject: 'Email from: ' + name + ' (' + email + ')',
			toEmail: process.env.NODEMAILER_RECIPIENT ?? 'sebee.website@gmail.com',
			otpText: `${message}`,
		});

		if ('response' in response && response?.response[0] === '2') {
			return true;
		} else {
			return false;
		}
	} catch (e) {
		console.error(e);
		return false;
	}
}
