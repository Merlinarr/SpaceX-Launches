import { gql } from "@apollo/client";

const GET_LAUNCHES = gql`
	query getLaunches(
		$page: Int
		$status: LaunchStatus
		$search: String
		$searchFields: SearchFieldsParameters
	) {
		launches(
			page: $page
			status: $status
			search: $search
			searchFields: $searchFields
		) {
			docs {
				id
				name
				date_utc
				details
				upcoming
				success
				links {
					webcast
					patch {
						large
					}
				}
				rocket {
					flickr_images
					name
					success_rate_pct
					description
				}
				launchpad {
					full_name
					latitude
					longitude
					timezone
				}
			}
			totalDocs
			totalPages
		}
	}
`;

export { GET_LAUNCHES };
