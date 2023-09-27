'use client';
import Image from 'next/image';
import React from 'react';

import ResponsiveImage from '@/components/ResponsiveImage';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

import TooltipMessage from '../TooltipMessage';

function AboutMeToggleMessage() {
	return (
		<div className="flex w-full flex-col mt-8">
			<Tabs aria-label="About me.." defaultSelectedKey="recruiter">
				<Tab key="friend" title="Friend">
					<Card className="overflow-visible">
						<CardBody className="overflow-visible">
							<p className="text-base leading-6 tracking-wide">
								I am a software developer who loves to create applications that
								make life easier and more enjoyable. I have built commercial
								projects and toys using various technologies and frameworks,
								such as{' '}
								<TooltipMessage content="React">
									<ResponsiveImage
										src="/logotypes/react-logo.svg"
										width={100}
										height={100}
										alt=""
										className="self-center object-cover"
									/>
									<p>
										React is a library for creating fast and maintainable{' '}
										<abbr title="User Interface">UI</abbr>.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage content="Typescript">
									<ResponsiveImage
										src="/logotypes/typescript-logo.svg"
										width={100}
										height={100}
										alt=""
										className="self-center object-cover"
									/>
									<p>
										Making Javascript code more reliable with strong typing
										system.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage content="PrismaJS">
									<ResponsiveImage
										src="/logotypes/prisma-logo.svg"
										width={100}
										height={100}
										alt=""
										className="self-center object-cover"
									/>
									<p>
										Allows to connect to various databases and send and receive
										data from it.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage content="TailwindCSS">
									<ResponsiveImage
										src="/logotypes/tailwind-logo.svg"
										width={100}
										height={100}
										alt=""
										className="self-center object-cover"
									/>
									<p>
										CSS utility framework that&apos;s eating the world but we do
										not need to name classes ourselves anymore.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage content="GraphQL">
									<ResponsiveImage
										src="/logotypes/graphql-logo.svg"
										width={100}
										height={100}
										alt=""
										className="self-center object-cover"
									/>
									<p>
										Specification for retreiving <em>only needed</em> data from
										the database via API calls.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage content="PHP">
									<ResponsiveImage
										src="/logotypes/php-logo.svg"
										width={100}
										height={100}
										alt=""
										className="self-center object-cover"
									/>
									<p>
										Originally an abbreviation of Personal Home Page, but it now
										stands for the recursive initialism PHP: Hypertext
										Preprocessor. Used to create generated websites before
										Javascript was given that capability.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage content="MongoDB">
									<ResponsiveImage
										src="/logotypes/mongodb-logo.svg"
										width={100}
										height={100}
										alt=""
										className="self-center object-cover"
									/>
									<p>
										NoSQL database that uses JSON-like documents with optional
										schemas. For me it was great when structure was unknown and
										fairly simple. Nowadays it&apos;s fully fledged database
										with multiple features.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage content="PostgreSQL">
									<ResponsiveImage
										src="/logotypes/postgresql-logo.svg"
										width={100}
										height={100}
										alt=""
										className="self-center object-cover"
									/>
									<p>
										Relational SQL database that uses JSON-like documents with
										optional schemas. For me it was great when structure was
										unknown and fairly simple. Nowadays it&apos;s fully fledged
										database with multiple features.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage content="MySQL">
									<ResponsiveImage
										src="/logotypes/mysql-logo.svg"
										width={100}
										height={100}
										alt=""
										className="self-center object-cover"
									/>
									<p>
										Postgres, is a free and open-source relational database
										management system (RDBMS) emphasizing extensibility and SQL
										compliance. It&apos;s my default choice for the database
										when developing applications.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage content="Next.js">
									<ResponsiveImage
										src="/logotypes/nextjs-logo.svg"
										width={100}
										height={100}
										alt=""
										className="self-center object-cover"
									/>
									<p>
										Next.js is a flexible React framework that this website uses
										to display the text you are reading.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage content="Symfony Framework">
									<ResponsiveImage
										src="/logotypes/symfony-logo.svg"
										width={100}
										height={100}
										alt=""
										className="self-center object-cover"
									/>
									<p>
										Symfony is a set of reusable PHP components and a PHP
										framework for web projects.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage content="CSS">
									<ResponsiveImage
										src="/logotypes/css-logo.svg"
										width={100}
										height={100}
										alt=""
										className="self-center object-cover"
									/>
									<p>
										CSS stands for Cascading Style Sheets and it is a language
										used for describing how the elements of the website or
										applications should look like. Tailwind is built on top of
										CSS if that helps.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage content="Wordpress">
									<ResponsiveImage
										src="/logotypes/wordpress-logo.svg"
										width={100}
										height={100}
										alt=""
										className="self-center object-cover"
									/>
									<p>
										Wordpress is a Content Management System that allows to
										create websites without technical knowledge. Powers huge
										number of websites and shops.
									</p>
								</TooltipMessage>
								, Hyper SQL, Joomla, ExpressJs, NodeJS, and more.
							</p>
							<p className="text-base leading-6 tracking-wide">
								I have also been a technical lead, a manager assistant, and an
								IT professional responsible for designing network in production
								halls and supporting users. I have developed and maintained
								internal applications such as ISO standards document management,
								ticketing, machine maintenance, data analysis, data
								visualization. My latest endeavor was creating this website
								using NextJS 13 and React 18, and a training application that
								connects trainers and trainees with personalized training plans.
								I am passionate about learning new things and improving my
								skills.
							</p>
						</CardBody>
					</Card>
				</Tab>
				<Tab key="recruiter" title="Recruiter">
					<Card className="overflow-visible">
						<CardBody className="overflow-visible">
							<p className="text-base leading-6 tracking-wide">
								I am a <span className="font-semibold">React Developer</span>{' '}
								and Full Stack with over 10 years of experience in IT, working
								for various companies and clients. I worked with{' '}
								<em>
									{' '}
									<TooltipMessage content="React">
										<ResponsiveImage
											src="/logotypes/react-logo.svg"
											width={100}
											height={100}
											alt=""
											className="self-center object-cover"
										/>
										<p>
											React is a library for creating fast and maintainable{' '}
											<abbr title="User Interface">UI</abbr>.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage content="Typescript" initialOpen={false}>
										<ResponsiveImage
											src="/logotypes/typescript-logo.svg"
											width={100}
											height={100}
											alt=""
											className="self-center object-cover"
										/>
										<p>
											Making Javascript code more reliable with strong typing
											system.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage content="PrismaJS">
										<ResponsiveImage
											src="/logotypes/prisma-logo.svg"
											width={100}
											height={100}
											alt=""
											className="self-center object-cover"
										/>
										<p>
											Allows to connect to various databases and send and
											receive data from it.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage content="TailwindCSS">
										<ResponsiveImage
											src="/logotypes/tailwind-logo.svg"
											width={100}
											height={100}
											alt=""
											className="self-center object-cover"
										/>
										<p>
											CSS utility framework that&apos;s eating the world but we
											do not need to name classes ourselves anymore.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage content="GraphQL">
										<ResponsiveImage
											src="/logotypes/graphql-logo.svg"
											width={100}
											height={100}
											alt=""
											className="self-center object-cover"
										/>
										<p>
											Specification for retrieving <em>only needed</em> data
											from the database via API calls.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage content="PHP">
										<ResponsiveImage
											src="/logotypes/php-logo.svg"
											width={100}
											height={100}
											alt=""
											className="self-center object-cover"
										/>
										<p>
											Originally an abbreviation of Personal Home Page, but it
											now stands for the recursive initialism PHP: Hypertext
											Preprocessor. Used to create generated websites before
											Javascript was given that capability.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage content="MongoDB">
										<ResponsiveImage
											src="/logotypes/mongodb-logo.svg"
											width={100}
											height={100}
											alt=""
											className="self-center object-cover"
										/>
										<p>
											NoSQL database that uses JSON-like documents with optional
											schemas. For me it was great when structure was unknown
											and fairly simple. Nowadays it&apos;s fully fledged
											database with multiple features.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage content="PostgreSQL" initialOpen={false}>
										<ResponsiveImage
											src="/logotypes/postgresql-logo.svg"
											width={100}
											height={100}
											alt=""
											className="object-contain"
										/>
										<p>
											Relational SQL database that uses JSON-like documents with
											optional schemas. For me it was great when structure was
											unknown and fairly simple. Nowadays it&apos;s fully
											fledged database with multiple features.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage content="MySQL">
										<ResponsiveImage
											src="/logotypes/mysql-logo.svg"
											width={100}
											height={100}
											alt=""
											className="self-center object-cover"
										/>
										<p>
											Postgres, is a free and open-source relational database
											management system (RDBMS) emphasizing extensibility and
											SQL compliance. It&apos;s my default choice for the
											database when developing applications.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage content="Next.js">
										<ResponsiveImage
											src="/logotypes/nextjs-logo.svg"
											width={100}
											height={100}
											alt=""
											className="self-center object-cover"
										/>
										<p>
											Next.js is a flexible React framework that this website
											uses to display the text you are reading.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage content="Symfony Framework">
										<ResponsiveImage
											src="/logotypes/symfony-logo.svg"
											width={100}
											height={100}
											alt=""
											className="self-center object-cover"
										/>
										<p>
											Symfony is a set of reusable PHP components and a PHP
											framework for web projects.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage content="CSS">
										<ResponsiveImage
											src="/logotypes/css-logo.svg"
											width={100}
											height={100}
											alt=""
											className="self-center object-cover"
										/>
										<p>
											CSS stands for Cascading Style Sheets and it is a language
											used for describing how the elements of the website or
											applications should look like. Tailwind is built on top of
											CSS if that helps.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage content="Wordpress">
										<ResponsiveImage
											src="/logotypes/wordpress-logo.svg"
											width={100}
											height={100}
											alt=""
											className="self-center object-cover"
										/>
										<p>
											Wordpress is a Content Management System that allows to
											create websites without technical knowledge. Powers huge
											number of websites and shops.
										</p>
									</TooltipMessage>
								</em>
								, and more.
							</p>
							<p className="text-base leading-6 tracking-wide">
								In my last role I have acted as a technical lead in a small team
								that was building a training application that connects trainees
								to trainers and allows to create personalized training plans.
							</p>
							<p className="text-base leading-6 tracking-wide">
								I have developed and maintained several applications that help
								users and businesses with document management for ISO standards,
								ticketing, machine maintenance, data analysis and visualization.
								I have also built this website using NextJS 13 and React 18, and
								various libraries. All content is powered by MDX.
							</p>
						</CardBody>
					</Card>
				</Tab>
				<Tab key="tech" title="Technical">
					<Card className="overflow-visible">
						<CardBody className="overflow-visible">
							<p className="text-base leading-6 tracking-wide">
								I am a React Developer / Full Stack who is responsible for
								project’s architecture, frontend and backend development and
								deployment to AWS. I have worked with React, Typescript,
								PrismaJS, TailwindCSS, and GraphQL as the core technologies for
								latest applications. I have also worked with Figma for design
								(as a consumer) and gathered requirements with the client during
								meetings. I have been a technical lead in a{' '}
								<TooltipMessage content="small team">
									we were 3 developers me included and a UX/UI designer
								</TooltipMessage>{' '}
								of frontend and backend developers and mentored a junior
								developer.
							</p>
							<p className="text-base leading-6 tracking-wide">
								In my last role I have worked on a{' '}
								<TooltipMessage content="training application">
									Subject to NDA so I cannot reveal what is not already public
									thus I am unable to present it as well at this point.
								</TooltipMessage>{' '}
								that connects trainers and trainees with personalized training
								plans.
							</p>
							<p className="text-base leading-6 tracking-wide">
								At the same company I was also responsible for frontend projects
								for an international company from the cyber-security space.
							</p>
							<p className="text-base leading-6 tracking-wide">
								Earlier I have worked with PHP and worked with MongoDB,
								PostgreSQL, MySQL, Wordpress, CSS, NextJS, Symfony, NodeJS and
								more. I have created and maintained various applications that
								solve problems for users and businesses in various domains, such
								as{' '}
								<TooltipMessage content="ISO standards document management">
									This was developed with Symfony (PHP framework) while working
									at ifm ecolink. The application is still in use and operating.
								</TooltipMessage>
								,{' '}
								<TooltipMessage content="ticketing and machine	maintenance">
									It was also built in Symfony Framework. The application is
									still in use and helping company keep machines operating. As
									far as I know it saved hundreds of thousands of euros till
									this day.
								</TooltipMessage>
								,{' '}
								<TooltipMessage content="data analysis">
									using NodeJS packaged into an executable file to run on
									Windows to scan contents of log files (hundreds thousands of
									lines long) and identify major errors in operations.
								</TooltipMessage>
								.
							</p>
							<p className="text-base leading-6 tracking-wide">
								I have also helped design network infrastructure for production
								halls and office areas and helped adopt new processes in R&D and
								engineering departments.
							</p>
							<p className="text-base leading-6 tracking-wide">
								The website you are browsing was built using latest NextJS 13
								and React 18.
							</p>
						</CardBody>
					</Card>
				</Tab>
			</Tabs>
		</div>
	);
}

export default AboutMeToggleMessage;
