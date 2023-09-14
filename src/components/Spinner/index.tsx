import dynamic from 'next/dynamic';

const Spinner = dynamic(() => import('@/components/Spinner/Spinner'));

export default Spinner;
