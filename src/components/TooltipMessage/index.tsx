import dynamic from 'next/dynamic';

export * from './TooltipMessage';

const TooltipMessage = dynamic(
	() => import('@/components/TooltipMessage/TooltipMessage'),
);

export default TooltipMessage;
