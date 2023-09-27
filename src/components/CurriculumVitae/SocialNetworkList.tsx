import React from 'react';
import {
	RiFacebookLine,
	RiGithubLine,
	RiGitlabLine,
	RiInstagramLine,
	RiLinkedinLine,
	RiTwitterXLine,
} from 'react-icons/ri';

import { ProfileLink } from '@/components/CurriculumVitae/ProfileLink';
import { SocialNetwork } from '@/types/CurriculumVitae';

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
			<div
				key={profile.network}
				className="flex gap-1 items-center flex-wrap group"
			>
				<Icon className="group-hover:text-primary-color" />
				<ProfileLink
					className="no-underline group-hover:text-primary-color"
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
