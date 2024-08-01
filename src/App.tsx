import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
