import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";
import { Rocket } from "../../../common/types";
import LaunchStatusIcon from "../LaunchStatusIcon";
export default function RocketDescription(props: {
	data: Rocket;
	upcoming: boolean;
	success: boolean;
}) {
	const { data, upcoming, success } = props;
	const items: DescriptionsProps["items"] = [
		{
			label: "Rocket Name",
			children: data.name,
		},
		{
			label: "Launch Status",
			children: <LaunchStatusIcon upcoming={upcoming} success={success} />,
		},
		{
			label: "Mission Success Rate",
			children: `${data.success_rate_pct}%`,
		},
		{
			label: "Description",
			children: data.description,
		},
	];
	return (
		<Descriptions
			title={<div className="text-slate-500 pb-1">Rocket</div>}
			bordered
			size="small"
			column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
			items={items}
		/>
	);
}
