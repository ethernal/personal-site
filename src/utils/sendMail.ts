'use server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

//-----------------------------------------------------------------------------
type SendMailParams = {
	replyTo: string;
	subject: string;
	toEmail: string;
	otpText: string;
};
/**
 * Sends an email with the specified subject, toEmail, and otpText.
 *
 * @param from - The sender's email address.
 * @param subject - The subject of the email.
 * @param toEmail - The recipient's email address.
 * @param otpText - The text of the email.
 * @returns A Promise that resolves to a boolean indicating whether the email was sent successfully.
 */
export async function nodemailerSendMail({
	from,
	subject,
	toEmail,
	otpText,
}: SendMailParams) {
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
		replyTo: from,
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
	await new Promise((resolve, reject) => {
		// send mail
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				console.error(err);
				reject(err);
			} else {
				console.log(info);
				resolve(info);
			}
		});
	});
}

export async function resendSendMail({
	replyTo = 'noreply@sebee.website',
	subject = 'Hello World from sebee.wesite',
	toEmail = 'testament777@gmail.com',
	otpText = '<p>Congrats on sending your <strong>first email</strong>!</p>',
}: SendMailParams) {
	const resend = new Resend(process.env.RESEND_API_KEY);

	resend.emails.send({
		from: process.env.RESEND_FROM_EMAIL ?? 'noreply@sebee.website',
		reply_to: replyTo,
		to: toEmail,
		subject: subject,
		html: otpText,
	});
}

export async function sendEmailAction(data: FormData) {
	('use server');
	const name = data.get('name') as string;
	const email = data.get('email') as string;
	const message = data.get('message') as string;

	resendSendMail({
		replyTo: email,
		subject: 'Email from: ' + name + ' (' + email + ')',
		toEmail: process.env.NODEMAILER_RECIPIENT ?? 'sebee.website@gmail.com',
		otpText: `${message}`,
	});
}
