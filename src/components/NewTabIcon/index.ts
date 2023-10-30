import dynamic from 'next/dynamic';

const NewTab = dynamic(() => import('@/components/NewTabIcon/NewTabIcon'));

export default NewTab;
