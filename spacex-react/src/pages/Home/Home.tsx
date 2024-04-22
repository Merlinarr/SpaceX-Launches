import SpaceXLogo from "../../components/ui/Logo/logo";
import LauchList from "./LaunchList";
import SearchFilter from "./SearchFilter";

export default function Home() {
	return (
		<div className="main-background w-screen h-screen">
			<div className=" container mx-auto px-4 pb-12">
				<div className="w-full flex justify-center">
					<div className="w-72 py-16">
						<SpaceXLogo />
					</div>
				</div>
				<div className="text-slate-200 text-3xl text-center font-semibold">
					Launch Mission Dashboard
				</div>
				<div className="py-12">
					<SearchFilter />
				</div>
				<div>
					<LauchList />
				</div>
			</div>
		</div>
	);
}
