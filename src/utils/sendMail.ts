'use server';
import nodemailer from 'nodemailer';

//-----------------------------------------------------------------------------
type SendMailParams = {
	from: string;
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
export async function sendMail({
	from,
	subject,
	toEmail,
	otpText,
}: SendMailParams) {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
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

	await new Promise((resolve, reject) => {
		// send mail
		transporter.sendMail(mailOptions, (err, response) => {
			if (err) {
				console.error('Error: ', err?.name, 'Message: ', err?.message);
				reject(err);
			} else {
				resolve(response);
				console.log(
					`Email from: "${from}" to: "${toEmail}" with topic: "${subject}" sent.`,
				);
			}
		});
	});
}

export async function sendEmailAction(data: FormData) {
	('use server');
	const name = data.get('name') as string;
	const email = data.get('email') as string;
	const message = data.get('message') as string;

	sendMail({
		from: email ?? 'sebee.website@gmail.com',
		subject: 'Email from: ' + name + ' (' + email + ')',
		toEmail: process.env.NODEMAILER_RECIPIENT ?? 'sebee.website@gmail.com',
		otpText: `${message}`,
	});
}
