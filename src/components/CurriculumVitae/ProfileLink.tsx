import Link from 'next/link';

type ProfileLinkProps = {
	network: string;
	username: string;
	className?: string;
	children: React.ReactNode;
};

export function ProfileLink({
	network,
	username,
	className,
	children,
	...delegated
}: ProfileLinkProps) {
	const protocol = 'https://';
	let linkAddress = protocol;
	const networkName = network;

	switch (networkName.toLowerCase()) {
		case 'github':
			{
				linkAddress = `${protocol}github.com/${username}`;
			}
			break;
		case 'linkedin':
			{
				linkAddress = `${protocol}linkedin.com/in/${username}`;
			}
			break;

		case 'x':
		case 'twitter':
			{
				linkAddress = `${protocol}twitter.com/${username}`;
			}
			break;
	}

	return (
		<Link
			href={linkAddress ?? '#'}
			target="_blank"
			className={className}
			{...delegated}
		>
			{children}
		</Link>
	);
}
