import dynamic from 'next/dynamic';

const ContactForm = dynamic(
	() => import('@/components/ContactForm/ContactForm'),
);

export default ContactForm;
