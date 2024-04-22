import { Select, Row, Col, Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import FieldsFilter from "../../components/ui/Popover/filter";
const { Search } = Input;
import { LaunchStatus } from "../../common/types";

import { SpacexStore } from "../../store/spacexStore";
import { useRef } from "react";
export default function SearchFilter() {
	const searchInputRef = useRef(null);
	const handleChange = (value: LaunchStatus) => {
		SpacexStore.lauchStatus = value;
	};
	const onSearch: SearchProps["onSearch"] = (value) => {
		SpacexStore.searchText = value;
	};
	return (
		<div>
			<Row gutter={24}>
				<Col xs={24} sm={24} md={4} lg={4} xl={4} xxl={4} className="py-4">
					<div className="text-white opacity-85">Launch Status</div>
					<Select
						defaultValue={LaunchStatus.ALL}
						className="w-full opacity-75"
						data-test="search-select"
						onChange={handleChange}
						options={[
							{ value: LaunchStatus.ALL, label: "All" },
							{ value: LaunchStatus.UPCOMING, label: "Upcoming" },
							{ value: LaunchStatus.SUCCESS, label: "Success" },
							{ value: LaunchStatus.FAILURE, label: "Failure" },
						]}
					/>
				</Col>
				<Col
					xs={20}
					sm={20}
					md={18}
					lg={18}
					xl={18}
					xxl={18}
					className="flex items-end py-4"
				>
					<div className="w-full">
						<Search
							data-test="search-submit"
							placeholder="Search"
							allowClear
							className="opacity-75"
							enterButton="Search"
							onSearch={onSearch}
							ref={searchInputRef}
						/>
					</div>
				</Col>
				<Col
					xs={2}
					sm={2}
					md={2}
					lg={2}
					xl={2}
					xxl={2}
					className="flex items-end justify-center py-4"
				>
					<div className="w-full ">
						<FieldsFilter />
					</div>
				</Col>
			</Row>
		</div>
	);
}
