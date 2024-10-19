import Image from 'next/image';
import { BsPersonCircle } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { GrStatusInfo } from 'react-icons/gr';
import { RiPhoneLine, RiUserLocationLine } from 'react-icons/ri';
import { TbWorldWww } from 'react-icons/tb';

import TooltipMessage from '@/components//TooltipMessage';
import SocialNetworkList from '@/components/CurriculumVitae/SocialNetworkList';
import HorizontalItem from '@/components/HorizontalItem';
import { cn } from '@/utils/utils';

import CardUI, { CardUIBody, CardUIFooter, CardUIHeader } from '../CardUI';
import FigureUI, { FigureCaptionUI } from '../FigureUI';

import type { PersonalInformation } from '@/types/CurriculumVitae';
type PersonalInformationProps = {
	className?: string;
	personalInformation: PersonalInformation;
};

export default function PersonalInformation({
	className,
	personalInformation,
}: PersonalInformationProps) {
	// const country: typeof countries.PL =
	// 	countries[
	// 		personalInformation.location.countryCode as keyof typeof countries
	// 	];

	return (
		<section className={cn('', className)}>
			<article data-section-basic data-section-visible="true">
				<div>
					<CardUI className="bg-theme-light-background-card dark:bg-theme-dark-background-card relative grid grid-cols-1 xs:grid-cols-[1fr_170px]">
						<span className="grid-start-1 grid-end-2">
							<CardUIHeader>
								<ol>
									<HorizontalItem as="li">
										<BsPersonCircle /> {personalInformation.name}
									</HorizontalItem>
									<HorizontalItem as="li">
										<GrStatusInfo className="bg-transparent dark:bg-theme-dark-white" />
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
											<li>{personalInformation.location.city}</li>
											<li>
												<TooltipMessage content={'Poland'}>
													<div>
														<p>Country name: {'Poland'}</p>
														<p>Timezone: {'Europe/Warsaw'}</p>
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
									socialProfiles={personalInformation.profiles ?? []}
								/>
							</CardUIFooter>
						</span>
						<FigureUI
							className="p-0 grid-start-2 grid-end-3 mr-4"
							options={{ variant: 'float', float: 'right' }}
						>
							<Image
								src={personalInformation.picture}
								alt={`Profile picture of ${personalInformation.name}`}
								width={150}
								height={150}
							/>
							<FigureCaptionUI className="rounded-theme-default">
								{personalInformation.summary}
							</FigureCaptionUI>
						</FigureUI>
					</CardUI>
				</div>
			</article>
		</section>
	);
}
