import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";
import { Launchpad } from "../../../common/types";
export default function LaunchpadDescription(props: { data: Launchpad }) {
	const { data } = props;
	const items: DescriptionsProps["items"] = [
		{
			label: "Location Name",
			children: data.full_name,
		},
		{
			label: "Latitude ",
			children: data.latitude,
		},
		{
			label: "Longitude",
			children: data.longitude,
		},
		{
			label: "Timezone",
			children: data.timezone,
		},
	];
	return (
		<Descriptions
			title={<div className="text-slate-500 pb-1">Launchpad</div>}
			bordered
			size="small"
			column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
			items={items}
		/>
	);
}
