import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Nav from "./components/header/Nav";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
       <Nav />
      <Home />
      <Footer/>
    </QueryClientProvider>
     
    </>
  );
}

export default App;
