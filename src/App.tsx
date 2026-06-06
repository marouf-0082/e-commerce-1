import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import CartProvider from "./context/CartContext";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <CartProvider>
      <ScrollToTop/>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<Product/>} />
        </Routes>
      </Layout>
    </CartProvider>
    </QueryClientProvider>
     
    </>
  );
}

export default App;
