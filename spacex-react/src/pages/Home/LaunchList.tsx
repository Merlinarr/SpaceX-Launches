import { Avatar, Card, Divider, List, Skeleton, Empty } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../../queries/launchQueries";
import { GetLaunchesResponse, LaunchDoc } from "../../common/types";
import LaunchStatusIcon from "../../components/ui/LaunchStatusIcon";
import DetailModal from "../../components/ui/Modal/details";
import { useSnapshot } from "valtio";
import { SpacexStore } from "../../store/spacexStore";
export default function LauchList() {
	const { searchFields, searchText, lauchStatus } = useSnapshot(SpacexStore);
	const [page, setPage] = useState(1);
	const [initLoading, setInitLoading] = useState(true);
	const [combineData, setCombineData] = useState<LaunchDoc[]>([]);
	const { data, fetchMore } = useQuery<GetLaunchesResponse>(GET_LAUNCHES, {
		variables: {
			page,
			status: lauchStatus,
			search: searchText,
			searchFields: searchFields,
		},
		notifyOnNetworkStatusChange: true,
		fetchPolicy: "no-cache",
		onCompleted: () => {
			const fetchData = data?.launches.docs ?? [];
			setCombineData([...combineData, ...fetchData]);
			setInitLoading(false);
		},
	});
	const loadMoreData = useCallback(() => {
		setInitLoading(false);
		fetchMore({
			variables: {
				page,
				status: lauchStatus,
				search: searchText,
				searchFields: searchFields,
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev;
				return fetchMoreResult;
			},
		});
	}, [page, lauchStatus, searchText, searchFields]);
	const hasMore = useMemo(() => {
		let hasMore = false;
		if (
			data?.launches.totalDocs &&
			data?.launches.totalDocs > combineData.length
		) {
			hasMore = true;
		}
		return hasMore;
	}, [combineData, data]);
	useEffect(() => {
		setCombineData([]);
		setPage(1);
	}, [searchText, lauchStatus, searchFields]);
	return (
		<Card className="opacity-85">
			<div
				id="scrollableDiv"
				className={`${initLoading ? "h-[16rem]" : "h-[32rem]"} overflow-auto`}
			>
				<InfiniteScroll
					dataLength={combineData.length}
					next={() => {
						setPage(page + 1);
						loadMoreData();
					}}
					hasMore={hasMore}
					loader={
						<Skeleton className="py-4" avatar paragraph={{ rows: 1 }} active />
					}
					endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
					scrollableTarget="scrollableDiv"
				>
					<div className="px-6 relative">
						<List
							locale={{
								emptyText: initLoading ? (
									"Loading..."
								) : (
									<div className="py-20 flex justify-center items-center">
										<Empty
											className="h-full"
											image={Empty.PRESENTED_IMAGE_SIMPLE}
										/>
									</div>
								),
							}}
							dataSource={combineData}
							renderItem={(item) => (
								<List.Item key={item.id} className="hover:bg-slate-50">
									<div className="flex justify-center items-center">
										<Avatar
											size={50}
											src={
												item.links.patch.large
													? item.links.patch.large
													: undefined
											}
										>
											SpaceX
										</Avatar>
										<div className="pl-4">
											<div>{item.name}</div>
											<div className="py-1">{item.date_utc}</div>
											<div>
												<LaunchStatusIcon
													success={item.success}
													upcoming={item.upcoming}
												/>
											</div>
											<div>
												<DetailModal launch={item} textMode={true}/>
											</div>

										</div>
									</div>
									<div className="pr-4">
										<DetailModal launch={item} />
									</div>
								</List.Item>
							)}
						/>
					</div>
				</InfiniteScroll>
			</div>
		</Card>
	);
}
