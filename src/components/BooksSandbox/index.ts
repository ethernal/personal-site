import dynamic from 'next/dynamic';

const BooksSandbox = dynamic(
	() => import('@/components/BooksSandbox/BooksSandbox'),
);

export default BooksSandbox;
