import React from 'react';
import {
	RiFacebookLine,
	RiGithubLine,
	RiGitlabLine,
	RiInstagramLine,
	RiLinkedinLine,
	RiTwitterXLine,
} from 'react-icons/ri';

import { SocialNetwork } from '@/types/CurriculumVitae';

import { ProfileLink } from './ProfileLink';

const networkIconMap = {
	twitter: RiTwitterXLine,
	linkedin: RiLinkedinLine,
	github: RiGithubLine,
	facebook: RiFacebookLine,
	instagram: RiInstagramLine,
	gitlab: RiGitlabLine,
};

type SocialNetworkListProps = {
	socialProfiles: SocialNetwork[];
};

function SocialNetworkList(props: SocialNetworkListProps) {
	const { socialProfiles } = props;
	return socialProfiles.map((profile: SocialNetwork) => {
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
