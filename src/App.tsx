import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Hotels from "./pages/Hotels";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: "tracked",
      refetchOnWindowFocus: process.env.NODE_ENV !== "development",
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Hotels />

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
