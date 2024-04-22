import { useEffect, useState } from "react";
import { LaunchStatus } from "../../../common/types";
import {
	CloseCircleFilled,
	CheckCircleFilled,
	RocketFilled,
} from "@ant-design/icons";
export default function LaunchStatusIcon(porps: {
	upcoming: boolean;
	success: boolean;
}) {
	const { upcoming, success } = porps;
	const [status, setStatus] = useState<LaunchStatus | null>(null);
	useEffect(() => {
		if (upcoming) {
			setStatus(LaunchStatus.UPCOMING);
		} else if (success) {
			setStatus(LaunchStatus.SUCCESS);
		} else if (!success) {
			setStatus(LaunchStatus.FAILURE);
		}
	}, [upcoming, success]);
	return (
		<>
			{status == LaunchStatus.UPCOMING ? (
				<div className="flex justify-start items-center">
					<RocketFilled className="text-blue-600" />
					<span
						data-test="lauchstatus"
						className="pl-2 text-slate-500 font-semibold"
					>
						Upcoming
					</span>
				</div>
			) : null}
			{status == LaunchStatus.SUCCESS ? (
				<div className="flex justify-start items-center">
					<CheckCircleFilled className="text-green-600" />
					<span data-test="lauchstatus" className="pl-2 text-slate-500">
						Success
					</span>
				</div>
			) : null}
			{status == LaunchStatus.FAILURE ? (
				<div className="flex justify-start items-center">
					<CloseCircleFilled className="text-red-600" />
					<span
						data-test="lauchstatus"
						className="pl-2 text-slate-500 font-semibold"
					>
						Failure
					</span>
				</div>
			) : null}
		</>
	);
}
