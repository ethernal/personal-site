import React, { ReactNode, useId } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
	children: ReactNode;
};

function Portal({ children }: PortalProps) {
	const id = useId();
	const [host, setHost] = React.useState<HTMLDivElement | null>(null);

	React.useEffect(() => {
		const host = document.createElement('div');
		document.body.appendChild(host);
		host.setAttribute('data-react-portal-id', id);
		host.setAttribute('id', '');

		setHost(host);

		return () => {
			host.remove();
		};
	}, [id]);

	if (!host) {
		return null;
	}

	return createPortal(children, host);
}

export default Portal;
