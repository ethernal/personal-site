import { BsPersonCircle } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { GrStatusInfo } from 'react-icons/gr';
import { RiPhoneLine, RiUserLocationLine } from 'react-icons/ri';
import { TbWorldWww } from 'react-icons/tb';

import countries from '@/data/country/countries.json';
import { PersonalInformation } from '@/types/CurriculumVitae';

import HorizontalItem from '../HorizontalItem';
import ResponsiveImage from '../ResponsiveImage';
import TooltipMessage from '../TooltipMessage';
import SocialNetworkList from './SocialNetworkList';

type PersonalInformationProps = {
	className?: string;
	personalInformation: PersonalInformation;
};

export default function PersonalInformation({
	className,
	personalInformation,
}: PersonalInformationProps) {
	const country: typeof countries.PL =
		countries[personalInformation.location.countryCode];

	return (
		<section className={className}>
			<article
				className="flow-root"
				data-section-basic
				data-section-visible="true"
			>
				<ResponsiveImage
					src={personalInformation.picture}
					alt={`Profile picture of ${personalInformation.name}`}
					options={{ float: 'right', variant: 'float', showBorder: true }}
					width={150}
					caption={personalInformation.summary}
					className="p-0"
				/>
				<ol>
					<HorizontalItem as="li">
						<BsPersonCircle /> {personalInformation.name}
					</HorizontalItem>
					<HorizontalItem as="li">
						<GrStatusInfo />
						{personalInformation.label}
					</HorizontalItem>
					<HorizontalItem as="li">
						<FiMail />
						{personalInformation.email}
					</HorizontalItem>
					<HorizontalItem as="li">
						<RiPhoneLine />
						{personalInformation.phone}
					</HorizontalItem>
					<HorizontalItem as="li">
						<RiUserLocationLine />
						<ol>
							<li>{personalInformation.location.address}</li>
							<li>
								{personalInformation.location.postalCode}{' '}
								{personalInformation.location.region}{' '}
								{personalInformation.location.city}
							</li>
							<li>
								<TooltipMessage content={country['Country Name']}>
									<div>
										<p>Country name: {country['Country Name']}</p>
										<p>Timezone: {country['Time Zone in Capital']}</p>
									</div>
								</TooltipMessage>
							</li>
						</ol>
					</HorizontalItem>
					<HorizontalItem as="li">
						<TbWorldWww />
						{personalInformation.website}
					</HorizontalItem>
				</ol>
				<SocialNetworkList socialProfiles={personalInformation.profiles} />
			</article>
		</section>
	);
}
