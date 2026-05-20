import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Nav from "./components/header/Nav";
import Home from "./pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
       <Nav />
      <Home />
    </QueryClientProvider>
     
    </>
  );
}

export default App;
