import { ConfigProvider } from "antd";
import ThemeConfig from "./config/theme";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";
import { RouterProvider, type createRouter } from "@tanstack/react-router";
import type { FunctionComponent } from "./common/types";

type AppProps = { router: ReturnType<typeof createRouter> };

const App = ({ router }: AppProps): FunctionComponent => {
	return (
		<ApolloProvider client={client}>
			<ConfigProvider theme={ThemeConfig}>
				<RouterProvider router={router} />
			</ConfigProvider>
		</ApolloProvider>
	);
};

export default App;
