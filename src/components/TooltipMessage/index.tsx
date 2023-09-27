import dynamic from 'next/dynamic';

export * from '@/components/TooltipMessage';

const TooltipMessage = dynamic(
	() => import('@/components/TooltipMessage/TooltipMessage'),
);

export default TooltipMessage;
