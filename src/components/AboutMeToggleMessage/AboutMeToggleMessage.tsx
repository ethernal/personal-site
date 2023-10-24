'use client';

import ResponsiveImage from '@/components/ResponsiveImage';
import TooltipMessage from '@/components/TooltipMessage';
import { cn } from '@/utils/utils';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

function AboutMeToggleMessage() {
	return (
		<div className={cn('flex w-full flex-col mt-8 mb-theme-card')}>
			<Tabs
				aria-label="About me.."
				defaultSelectedKey="recruiter"
				className=""
				variant="underlined"
				classNames={{
					tabList:
						'gap-theme-card w-full relative rounded-none p-0 ps-6 border-b-theme-accent/25 border-b dark:bg-transparent',
					cursor: 'w-full bg-theme-accent',
					tab: 'max-w-fit px-0 h-12  dark:bg-transparent text-xl',
					tabContent: 'group-data-[selected=true]:text-theme-accent',
				}}
			>
				<Tab key="friend" title="Friend" className="">
					<Card className="overflow-visible bg-theme-light-background-secondary dark:bg-theme-dark-background-secondary">
						<CardBody className="overflow-visible">
							<p className="text-base leading-6">
								I am a software developer who loves to create applications that
								make life easier and more enjoyable. I have built commercial
								projects and toys using various technologies and frameworks,
								such as{' '}
								<TooltipMessage
									content="React"
									className="grid grid-cols-[100px_1fr] gap-4"
									initialOpen={false}
								>
									<ResponsiveImage
										src="/logotypes/react-logo.svg"
										width={100}
										height={100}
										alt=""
										className="[&>img]:object-contain"
									/>
									<p>
										React is a library for creating fast and maintainable{' '}
										<abbr title="User Interface">UI</abbr>.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage
									content="Typescript"
									className="grid grid-cols-[100px_1fr] gap-4"
								>
									<ResponsiveImage
										src="/logotypes/typescript-logo.svg"
										width={100}
										height={100}
										alt=""
										className="[&>img]:object-contain"
									/>
									<p>
										Making Javascript code more reliable with strong typing
										system.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage
									className="grid grid-cols-[100px_1fr] gap-4"
									content="PrismaJS"
								>
									<ResponsiveImage
										src="/logotypes/prisma-logo.svg"
										width={100}
										height={100}
										alt=""
										className="[&>img]:object-contain dark:[&>img]:invert"
									/>
									<p>
										Allows to connect to various databases and send and receive
										data from it.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage
									className="grid grid-cols-[100px_1fr] gap-4"
									content="TailwindCSS"
								>
									<ResponsiveImage
										src="/logotypes/tailwind-logo.svg"
										width={100}
										height={100}
										alt=""
										className="[&>img]:object-contain"
									/>
									<p>
										CSS utility framework that&apos;s eating the world but we do
										not need to name classes ourselves anymore.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage
									className="grid grid-cols-[100px_1fr] gap-4"
									content="GraphQL"
								>
									<ResponsiveImage
										src="/logotypes/graphql-logo.svg"
										width={100}
										height={100}
										alt=""
										className="[&>img]:object-contain"
									/>
									<p>
										Specification for retrieving <em>only needed</em> data from
										the database via API calls.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage
									className="grid grid-cols-[100px_1fr] gap-4"
									content="PHP"
								>
									<ResponsiveImage
										src="/logotypes/php-logo.svg"
										width={100}
										height={100}
										alt=""
										className="[&>img]:object-contain dark:[&>img]:invert"
									/>
									<p>
										Originally an abbreviation of Personal Home Page, but it now
										stands for the recursive initialism PHP: Hypertext
										Preprocessor. Used to create generated websites before
										Javascript was given that capability.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage
									className="grid grid-cols-[100px_1fr] gap-4"
									content="MongoDB"
								>
									<ResponsiveImage
										src="/logotypes/mongodb-logo.svg"
										width={100}
										height={100}
										alt=""
										className="[&>img]:object-contain"
									/>
									<p>
										NoSQL database that uses JSON-like documents with optional
										schemas. For me it was great when structure was unknown and
										fairly simple. Nowadays it&apos;s fully fledged database
										with multiple features.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage
									className="grid grid-cols-[100px_1fr] gap-4"
									content="PostgreSQL"
								>
									<ResponsiveImage
										src="/logotypes/postgresql-logo.svg"
										width={100}
										height={100}
										alt=""
										className="[&>img]:object-contain"
									/>
									<p>
										Relational SQL database that uses JSON-like documents with
										optional schemas. For me it was great when structure was
										unknown and fairly simple. Nowadays it&apos;s fully fledged
										database with multiple features.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage
									className="grid grid-cols-[100px_1fr] gap-4"
									content="MySQL"
								>
									<ResponsiveImage
										src="/logotypes/mysql-logo.svg"
										width={100}
										height={100}
										alt=""
										className="[&>img]:object-contain dark:[&>img]:invert"
									/>
									<p>
										Postgres, is a free and open-source relational database
										management system (RDBMS) emphasizing extensibility and SQL
										compliance. It&apos;s my default choice for the database
										when developing applications.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage
									className="grid grid-cols-[100px_1fr] gap-4"
									content="Next.js"
								>
									<ResponsiveImage
										src="/logotypes/nextjs-logo.svg"
										width={100}
										height={100}
										alt=""
										className="[&>img]:object-contain dark:[&>img]:invert"
									/>
									<p>
										Next.js is a flexible React framework that this website uses
										to display the text you are reading.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage
									className="grid grid-cols-[100px_1fr] gap-4"
									content="Symfony Framework"
								>
									<ResponsiveImage
										src="/logotypes/symfony-logo.svg"
										width={100}
										height={100}
										alt=""
										className="[&>img]:object-contain dark:[&>img]:invert"
									/>
									<p>
										Symfony is a set of reusable PHP components and a PHP
										framework for web projects.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage
									className="grid grid-cols-[100px_1fr] gap-4"
									content="CSS"
								>
									<ResponsiveImage
										src="/logotypes/css-logo.svg"
										width={100}
										height={100}
										alt=""
										className="[&>img]:object-contain dark:[&>img]:invert"
									/>
									<p>
										CSS stands for Cascading Style Sheets and it is a language
										used for describing how the elements of the website or
										applications should look like. Tailwind is built on top of
										CSS if that helps.
									</p>
								</TooltipMessage>
								,{' '}
								<TooltipMessage
									className="grid grid-cols-[100px_1fr] gap-4"
									content="Wordpress"
								>
									<ResponsiveImage
										src="/logotypes/wordpress-logo.svg"
										width={100}
										height={100}
										alt=""
										className="[&>img]:object-contain dark:[&>img]:invert"
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
				<Tab key="recruiter" title="Recruiter" className="">
					<Card className="overflow-visible bg-theme-light-background-secondary dark:bg-theme-dark-background-secondary">
						<CardBody className="overflow-visible">
							<p className="text-base leading-6">
								I am a <span className="font-semibold">React Developer</span>{' '}
								and Full Stack Engineer with over 10 years of experience in IT,
								working for various companies and clients. I worked with{' '}
								<em>
									{' '}
									<TooltipMessage
										className="grid grid-cols-[100px_1fr] gap-4"
										content="React"
									>
										<ResponsiveImage
											src="/logotypes/react-logo.svg"
											width={100}
											height={100}
											alt=""
											className="[&>img]:object-contain"
										/>
										<p>
											React is a library for creating fast and maintainable{' '}
											<abbr title="User Interface">UI</abbr>.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage
										className="grid grid-cols-[100px_1fr] gap-4"
										content="Typescript"
										initialOpen={false}
									>
										<ResponsiveImage
											src="/logotypes/typescript-logo.svg"
											width={100}
											height={100}
											alt=""
											className="[&>img]:object-contain"
										/>
										<p>
											Making Javascript code more reliable with strong typing
											system.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage
										className="grid grid-cols-[100px_1fr] gap-4"
										content="PrismaJS"
									>
										<ResponsiveImage
											src="/logotypes/prisma-logo.svg"
											width={100}
											height={100}
											alt=""
											className="[&>img]:object-contain dark:[&>img]:invert"
										/>
										<p>
											Allows to connect to various databases and send and
											receive data from it.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage
										className="grid grid-cols-[100px_1fr] gap-4"
										content="TailwindCSS"
									>
										<ResponsiveImage
											src="/logotypes/tailwind-logo.svg"
											width={100}
											height={100}
											alt=""
											className="[&>img]:object-contain"
										/>
										<p>
											CSS utility framework that&apos;s eating the world but we
											do not need to name classes ourselves anymore.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage
										className="grid grid-cols-[100px_1fr] gap-4"
										content="GraphQL"
									>
										<ResponsiveImage
											src="/logotypes/graphql-logo.svg"
											width={100}
											height={100}
											alt=""
											className="[&>img]:object-contain"
										/>
										<p>
											Specification for retrieving <em>only needed</em> data
											from the database via API calls.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage
										className="grid grid-cols-[100px_1fr] gap-4"
										content="PHP"
									>
										<ResponsiveImage
											src="/logotypes/php-logo.svg"
											width={100}
											height={100}
											alt=""
											className="[&>img]:object-contain dark:[&>img]:invert"
										/>
										<p>
											Originally an abbreviation of Personal Home Page, but it
											now stands for the recursive initialism PHP: Hypertext
											Preprocessor. Used to create generated websites before
											Javascript was given that capability.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage
										className="grid grid-cols-[100px_1fr] gap-4"
										content="MongoDB"
									>
										<ResponsiveImage
											src="/logotypes/mongodb-logo.svg"
											width={100}
											height={100}
											alt=""
											className="[&>img]:object-contain"
										/>
										<p>
											NoSQL database that uses JSON-like documents with optional
											schemas. For me it was great when structure was unknown
											and fairly simple. Nowadays it&apos;s fully fledged
											database with multiple features.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage
										className="grid grid-cols-[100px_1fr] gap-4"
										content="PostgreSQL"
										initialOpen={false}
									>
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
									<TooltipMessage
										className="grid grid-cols-[100px_1fr] gap-4"
										content="MySQL"
									>
										<ResponsiveImage
											src="/logotypes/mysql-logo.svg"
											width={100}
											height={100}
											alt=""
											className="[&>img]:object-contain dark:[&>img]:invert"
										/>
										<p>
											Postgres, is a free and open-source relational database
											management system (RDBMS) emphasizing extensibility and
											SQL compliance. It&apos;s my default choice for the
											database when developing applications.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage
										className="grid grid-cols-[100px_1fr] gap-4"
										content="Next.js"
									>
										<ResponsiveImage
											src="/logotypes/nextjs-logo.svg"
											width={100}
											height={100}
											alt=""
											className="[&>img]:object-contain dark:[&>img]:invert"
										/>
										<p>
											Next.js is a flexible React framework that this website
											uses to display the text you are reading.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage
										className="grid grid-cols-[100px_1fr] gap-4"
										content="Symfony Framework"
									>
										<ResponsiveImage
											src="/logotypes/symfony-logo.svg"
											width={100}
											height={100}
											alt=""
											className="[&>img]:object-contain dark:[&>img]:invert"
										/>
										<p>
											Symfony is a set of reusable PHP components and a PHP
											framework for web projects.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage
										className="grid grid-cols-[100px_1fr] gap-4"
										content="CSS"
									>
										<ResponsiveImage
											src="/logotypes/css-logo.svg"
											width={100}
											height={100}
											alt=""
											className="[&>img]:object-contain dark:[&>img]:invert"
										/>
										<p>
											CSS stands for Cascading Style Sheets and it is a language
											used for describing how the elements of the website or
											applications should look like. Tailwind is built on top of
											CSS if that helps.
										</p>
									</TooltipMessage>
									,{' '}
									<TooltipMessage
										className="grid grid-cols-[100px_1fr] gap-4"
										content="Wordpress"
									>
										<ResponsiveImage
											src="/logotypes/wordpress-logo.svg"
											width={100}
											height={100}
											alt=""
											className="[&>img]:object-contain dark:[&>img]:invert"
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
				<Tab key="tech" title="Technical" className="">
					<Card className="overflow-visible dark:bg-theme-dark-background-secondary bg-theme-light-background-secondary">
						<CardBody className="overflow-visible">
							<p className="text-base leading-6 tracking-wide">
								I am a React Developer and a Full Stack Engineer who is
								responsible for project’s architecture, frontend and backend
								development and deployment to AWS. I have worked with React,
								Typescript, PrismaJS, TailwindCSS, and GraphQL as the core
								technologies for latest applications. I also have experience
								working with Figma as a consumer of designs. I have gathered
								requirements with the client during meetings and translated them
								into features implemented into the application. I have been a
								&ldquo;technical lead&rdquo; in a{' '}
								<TooltipMessage content="small team">
									we were 3 developers me included and a UX/UI designer
								</TooltipMessage>{' '}
								of frontend and backend developers and mentored a junior
								developer.
							</p>
							<p className="text-base leading-6">
								In my last role I have worked on a{' '}
								<TooltipMessage content="training application">
									Subject to NDA so I cannot reveal what is not already public
									thus I am unable to present it as well at this point.
								</TooltipMessage>{' '}
								that connects trainers and trainees with personalized training
								plans.
							</p>
							<p className="text-base leading-6">
								At the same company I was also responsible for frontend projects
								for an international company from the cyber-security space.
							</p>
							<p className="text-base leading-6">
								Earlier I have worked with PHP and worked with MongoDB,
								PostgreSQL, MySQL, Wordpress, CSS, NextJS, Symfony, NodeJS and
								more. I have created and maintained various applications that
								solve problems for users and businesses in various domains, such
								as{' '}
								<TooltipMessage content="ISO standards document management">
									This was developed with Symfony (PHP framework) while working
									at ifm ecolink. The application is still in use and
									operational.
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
							<p className="text-base leading-6">
								I have also helped design network infrastructure for production
								halls and office areas and helped adopt new processes in R&D and
								engineering departments.
							</p>
							<p className="text-base leading-6">
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
