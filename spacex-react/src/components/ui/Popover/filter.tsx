import { useState } from "react";
import { Button, Popover } from "antd";
import { SettingFilled } from "@ant-design/icons";
import { Checkbox } from "antd";
import { useSnapshot } from "valtio";
import { SpacexStore } from "../../../store/spacexStore";
import { SeachFields } from "../../../common/types";
import { CheckboxChangeEvent } from "antd/es/checkbox";
export default function FieldsFilter() {
	const [open, setOpen] = useState(false);
	const handleOpenChange = (newOpen: boolean) => {
		setOpen(newOpen);
	};

	return (
		<Popover
			content={FilterContent}
			title="Search Fields"
			trigger="click"
			open={open}
			placement="topRight"
			onOpenChange={handleOpenChange}
		>
			<Button
				data-test="search-fields-button"
				type="text"
				icon={<SettingFilled className="text-white opacity-75" />}
			></Button>
		</Popover>
	);
}

function FilterContent() {
	const { searchFields } = useSnapshot(SpacexStore);
	const onChange = (e: CheckboxChangeEvent, field: SeachFields) => {
		SpacexStore.searchFields[field] = e.target.checked;
	};
	return (
		<div>
			<div data-test="search-fields">
				<Checkbox
					defaultChecked={searchFields.date_utc}
					onChange={(e) => onChange(e, SeachFields.DATE_UTC)}
				>
					By Launch Date
				</Checkbox>
			</div>
			<div data-test="search-fields">
				<Checkbox
					defaultChecked={searchFields.name}
					onChange={(e) => onChange(e, SeachFields.NAME)}
				>
					By Name
				</Checkbox>
			</div>
			<div data-test="search-fields">
				<Checkbox
					defaultChecked={searchFields.details}
					onChange={(e) => onChange(e, SeachFields.DETAILS)}
				>
					By Details
				</Checkbox>
			</div>
		</div>
	);
}
