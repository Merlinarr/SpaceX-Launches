import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				launches: {
					merge(existing, incoming) {
						return incoming;
					},
				},
			},
		},
	},
});

const client = new ApolloClient({
	uri: "http://127.0.0.1:3008/graphql",
	cache,
});

export default client;
