export type FunctionComponent = React.ReactElement | null;

export enum LaunchStatus {
	UPCOMING = "UPCOMING",
	SUCCESS = "SUCCESS",
	FAILURE = "FAILURE",
	ALL = "ALL",
}
export enum SeachFields {
	DATE_UTC = "date_utc",
	NAME = "name",
	DETAILS = "details",
}

export interface SeachFieldsParameters {
	date_utc: boolean;
	name: boolean;
	details: boolean;
}

interface LinkPatch {
	large: string | null;
}

interface Links {
	webcast: string;
	patch: LinkPatch;
}

export interface Rocket {
	flickr_images: string[];
	name: string;
	success_rate_pct: number;
	description: string;
}

export interface Launchpad {
	full_name: string;
	latitude: number;
	longitude: number;
	timezone: string;
}

export interface LaunchDoc {
	id: string;
	name: string;
	date_utc: string;
	upcoming: boolean;
	success: boolean;
	details: string | null;
	links: Links;
	rocket: Rocket;
	launchpad: Launchpad;
}

interface Launches {
	docs: LaunchDoc[];
	totalDocs: number;
	totalPages: number;
}

export interface GetLaunchesResponse {
	launches: Launches;
}
