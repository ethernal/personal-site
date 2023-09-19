import React from 'react';
import {
	RiFacebookLine,
	RiGithubLine,
	RiGitlabLine,
	RiInstagramLine,
	RiLinkedinLine,
	RiTwitterXLine,
} from 'react-icons/ri';

import { ProfileLink } from './ProfileLink';

const networkIconMap = {
	twitter: RiTwitterXLine,
	linkedin: RiLinkedinLine,
	github: RiGithubLine,
	facebook: RiFacebookLine,
	instagram: RiInstagramLine,
	gitlab: RiGitlabLine,
};

type SocialProfile = {
	network: string;
	username: string;
};

type SocialProfiles = {
	network: string;
	username: string;
}[];

type SocialNetworkListProps = {
	socialProfiles: Prettify<SocialProfiles>;
};

function SocialNetworkList(props: SocialNetworkListProps) {
	const { socialProfiles } = props;
	return socialProfiles.map((profile: SocialProfile) => {
		const Icon = networkIconMap[profile.network];

		return (
			<div key={profile.network} className="flex gap-2 items-center">
				<Icon />
				<ProfileLink
					className="no-underline"
					network={profile.network}
					username={profile.username ?? ''}
				>
					{profile.username}
				</ProfileLink>
			</div>
		);
	});
}

export default SocialNetworkList;
