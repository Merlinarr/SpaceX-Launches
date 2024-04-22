import { proxy } from "valtio";
import { SeachFieldsParameters, LaunchStatus } from "../common/types";
export const SpacexStore = proxy<{
	searchFields: SeachFieldsParameters;
	searchText: string;
	lauchStatus: LaunchStatus;
}>({
	searchFields: {
		date_utc: true,
		name: true,
		details: true,
	},
	searchText: "",
	lauchStatus: LaunchStatus.ALL,
});
