export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface CurriculumVitae {
	basics: PersonalInformation;
	work?: Employment[] | null;
	volunteer?: Volunteer[] | null;
	education?: EducationHistory[] | null;
	awards?: Awards[] | null;
	publications?: Publication[] | null;
	skills?: Skill[] | null;
	languages?: Language[] | null;
	references?: null[] | null;
	projects?: Project[] | null;
	certificates?: Certificate[] | null;
	specific: PersonalDetails;
	resumeCustomization: ResumeCustomization;
}

export interface PersonalInformation {
	name: string;
	label: string;
	picture: string;
	email: string;
	phone: string;
	website: string;
	summary: string;
	location: Address;
	profiles?: SocialNetwork[] | null;
}

export type Address = {
	address: string;
	postalCode: string;
	city: string;
	countryCode: string;
	region: string;
};

export type SocialNetwork = {
	network: string;
	username: string;
};

export interface Employment {
	name: string;
	position: string;
	website: string;
	startDate: string;
	endDate: string;
	summary: string;
	location: string;
	highlights?: string[] | null;
	keywords?: string[] | null;
}

export interface Volunteer {
	organization: string;
	position: string;
	website: string;
	startDate: string;
	summary: string;
	highlights?: null[] | null;
}

export interface EducationHistory {
	institution: string;
	area: string;
	studyType: string;
	startDate: string;
	endDate: string;
	gpa: string;
	courses?: null[] | null;
	level?: EducationLevel;
}

export interface Awards {
	title: string;
	date: string;
	awarder: string;
	summary: string;
}

export interface Publication {
	name: string;
	publisher: string;
	releaseDate: string;
	website: string;
	summary: string;
}

export type Skill = {
	name: string;
	level: SkillLevel;
	value: number;
	keywords?: string[] | null;
};

export interface Language {
	language: string;
	value: number;
	fluency: string;
}

export interface Project {
	name: string;
	startDate: string;
	endDate?: string | null;
	description: string;
	highlights?: string[] | null;
	keywords?: string[] | null;
	url: string;
	gallery?: Array<{ src: string; alt: string }>;
}

export interface Certificate {
	name: string;
	date: string;
	issuer: string;
	url: string;
}

export interface PersonalDetails {
	basics: AdditionalPersonalInfo;
	dreamJob: DreamJob;
	currentJob: CurrentJob;
	education: EducationLevel;
	work: WorkExperienceAndAvailability;
	sound: Sound;
	interestedBy: string;
}

export interface AdditionalPersonalInfo {
	visaSponsorship: boolean;
	personalDescription: string;
}

export type DreamJob = {
	locations: Location[] | null;
	remoteFrequency: RemoteFrequency;
};

export interface Location {
	name: string;
}

export type RemoteFrequency = {
	frequency: string;
	daysPerWeek: number;
};

export interface CurrentJob {
	issues: CurrentJobIssues;
}

export interface CurrentJobIssues {
	z: boolean;
	boring_team: boolean;
}

export interface EducationLevel {
	studiesLevel: string;
}

export interface WorkExperienceAndAvailability {
	contractTypes?: string[] | null;
	codingReason: string;
	searchState: string;
	experienceYears: number;
	codeExperienceYears: number;
	otherExperienceYears: number;
}

export interface Sound {
	embedUrl: string;
}

export interface ResumeCustomization {
	imageHeader: ImageHeader;
	cardsOrder?: CardsOrderEntity[] | null;
	fields: Fields;
}

export interface ImageHeader {
	url: string;
	alt: string;
}

export interface CardsOrderEntity {
	type: string;
	variant: number;
}

export interface Fields {
	work: Work1;
}

export interface Work1 {
	customDateFormat: string;
}
