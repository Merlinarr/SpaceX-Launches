import { useState } from "react";
import { Button, Divider, Modal, Carousel, Image } from "antd";
import { LaunchDoc } from "../../../common/types";
import RocketDescription from "../Description/rocket";
import LaunchpadDescription from "../Description/launchpad";
import { YoutubeFilled } from "@ant-design/icons";
export default function DetailModal(props: {
	launch: LaunchDoc;
	textMode?: boolean;
}) {
	const { launch, textMode } = props;
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			{textMode ? (
				<div
					data-test="learn-more"
					onClick={showModal}
					className="block sm:hidden sm:block cursor-pointer underline underline-offset-8 text-blue-600 hover:opacity-60"
				>
					Learn More
				</div>
			) : (
				<Button
					data-test="learn-more"
					type="default"
					className="hidden sm:block"
					onClick={showModal}
				>
					Learn More
				</Button>
			)}
			<Modal
				title="Launch Information"
				open={isModalOpen}
				maskClosable={true}
				centered
				closeIcon={false}
				onCancel={handleCancel}
				footer={[
					<Button key="close" type="text" onClick={handleCancel}>
						<span className="text-slate-500">Close</span>
					</Button>,
				]}
			>
				<div className="pb-4">
					<Divider className="my-0" />
				</div>
				<div className="h-[32rem] overflow-auto">
					<div className="flex justify-center"></div>
					{launch.rocket.flickr_images.length > 0 ? (
						<div className="pb-4">
							<Carousel autoplay>
								{launch.rocket.flickr_images.map((img, i) => {
									return (
										<div key={i}>
											<Image src={img} height={"18rem"} width={"100%"} />
										</div>
									);
								})}
							</Carousel>
							{launch.links.webcast ? (
								<div className="flex justify-center">
									<div className="w-32 text-center">
										<a href={launch.links.webcast}>
											<div
												style={{
													color: "#ff0000",
													backgroundColor: "rgba(88,81,219,0.08)",
												}}
												className="px-2 py-1 rounded-md cursor-pointer"
											>
												<YoutubeFilled />
												<span className="pl-2"> YouTube</span>
											</div>
										</a>
									</div>
								</div>
							) : null}
						</div>
					) : null}
					{launch.rocket ? (
						<div className="pb-4">
							<RocketDescription
								data={launch.rocket}
								upcoming={launch.upcoming}
								success={launch.success}
							/>
						</div>
					) : null}
					{launch.launchpad ? (
						<div className="pb-4">
							<LaunchpadDescription data={launch.launchpad} />
						</div>
					) : null}
					{launch.details ? <p className="pb-4">{launch.details}</p> : null}
				</div>

				<Divider className="my-0" />
			</Modal>
		</>
	);
}
