'use client';
import { BsPersonCircle } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { GrStatusInfo } from 'react-icons/gr';
import { RiPhoneLine, RiUserLocationLine } from 'react-icons/ri';
import { TbWorldWww } from 'react-icons/tb';

import countries from '@/data/country/countries.json';
import { PersonalInformation } from '@/types/CurriculumVitae';

import CardUI, { CardUIBody, CardUIFooter, CardUIHeader } from '../CardUI';
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
			<article data-section-basic data-section-visible="true">
				<div>
					<CardUI className="relative grid grid-cols-1  xs:grid-cols-[1fr_170px]">
						<span className="grid-start-1 grid-end-2">
							<CardUIHeader>
								<ol>
									<HorizontalItem as="li">
										<BsPersonCircle /> {personalInformation.name}
									</HorizontalItem>
									<HorizontalItem as="li">
										<GrStatusInfo />
										{personalInformation.label}
									</HorizontalItem>
									<HorizontalItem as="li">
										<FiMail size={16} />
										{personalInformation.email}
									</HorizontalItem>
									<HorizontalItem as="li">
										<RiPhoneLine />
										{personalInformation.phone}
									</HorizontalItem>
								</ol>
							</CardUIHeader>

							<CardUIBody className="justify-start p-4">
								<ol className="">
									<HorizontalItem as="li" className="items-start">
										<RiUserLocationLine />
										<ol>
											<li>{personalInformation.location.address}</li>
											<li>{personalInformation.location.postalCode} </li>
											<li>{personalInformation.location.region} </li>
											<li>{personalInformation.location.city}</li>
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
							</CardUIBody>
							<CardUIFooter
								className={'gap-4 flex-wrap max-xs:flex-col max-xs:items-start'}
							>
								<SocialNetworkList
									socialProfiles={personalInformation.profiles}
								/>
							</CardUIFooter>
						</span>
						<ResponsiveImage
							src={personalInformation.picture}
							alt={`Profile picture of ${personalInformation.name}`}
							// options={{ float: 'right', variant: 'float', showBorder: true }}
							width={150}
							caption={personalInformation.summary}
							className="p-0  grid-start-2 grid-end-3"
						/>
					</CardUI>
				</div>
			</article>
		</section>
	);
}
