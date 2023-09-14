'use client';
import React from 'react';

import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

function AboutMeToggleMessage() {
	return (
		<div className="flex w-full flex-col">
			<Tabs aria-label="About me..">
				<Tab key="friend" title="Friend">
					<Card>
						<CardBody>
							I am a React Developer who loves to create applications that make
							life easier and more enjoyable. I have worked for different
							companies and clients, using various technologies and frameworks,
							such as React, Typescript, PrismaJS, TailwindCSS, GraphQL, PHP,
							MongoDB, PostgreSQL, MySQL, Java, Hyper SQL, Joomla, Wordpress,
							CSS, NextJS, Symfony, ExpressJs, NodeJS, and more. I have also
							been a technical lead, a manager assistant, and an IT professional
							responsible for designing network in production halls and
							supporting users. I have developed and maintained internal
							applications such as , and ISO standards document management,
							ticketing, machine maintenance, data analysis, data visualization.
							My latest endeavor was creating this website using NextJS 13 and
							React 18, and a training application that connects trainers and
							trainees with personalized training plans. I am passionate about
							learning new things and improving my skills.
						</CardBody>
					</Card>
				</Tab>
				<Tab key="recruiter" title="Recruiter">
					<Card>
						<CardBody>
							I am a <b>React Developer</b> Full Stack with over 10 years of
							experience in IT, working for various companies and clients. I
							worked with{' '}
							<em>
								React, Typescript, CSS, TailwindCSS, PrismaJS, GraphQL, PHP,
								MongoDB, PostgreSQL, MySQL, Wordpress, NextJS, SymfonyPHP,
								NodeJS
							</em>
							, and more.
							<br />
							In my last role I have acted as a technical lead in a small team
							that was building a training application that connects trainees to
							trainers and allows to create personalized training plans. I have
							developed and maintained several applications that help users and
							businesses with document management for ISO standards, ticketing,
							machine maintenance, data analysis and visualization. I have also
							built this website using NextJS 13 and React 18, and various
							libraries. All content is powered by MDX.
						</CardBody>
					</Card>
				</Tab>
				<Tab key="tech" title="Technical">
					<Card>
						<CardBody>
							I am a React Developer / Full Stack who is responsible for
							project’s architecture, frontend and backend development and
							deployment to AWS. I have worked with React, Typescript, PrismaJS,
							TailwindCSS, and GraphQL as the core technologies for latest
							applications. I have also worked with Figma for design (as a
							consumer) and gathered requirements with the client during
							meetings. I have led a small team of frontend and backend
							developers and mentored a junior developer.
							<br />
							In my last role I have worked on a training application that
							connects trainers and trainees with personalized training plans.
							At the same company I was also responsible for frontend projects
							for an international company from the cyber-security space.
							Earlier I have worked with PHP and worked with MongoDB,
							PostgreSQL, MySQL, Wordpress, CSS, NextJS, Symfony, NodeJS and
							more. I have created and maintained various applications that
							solve problems for users and businesses in different domains, such
							as ISO standards document management, ticketing, machine
							maintenance, data analysis.
							<br />I have also helped design network infrastructure for
							production halls and office areas and helped adopt new processes
							in R&D and engineering departments.
							<br />
							The website you are browsing was built using latest NextJS 13 and
							React 18.
						</CardBody>
					</Card>
				</Tab>
			</Tabs>
		</div>
	);
}

export default AboutMeToggleMessage;
