import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import CartProvider from "./context/CartContext";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import SignUpProvider from "./context/SignUpContext";
import PrivateRout from "./components/privateRout/PrivateRout";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <SignUpProvider>
            <ScrollToTop />
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/signup" element={<SignUp />} />

                <Route element={<PrivateRout />}>
                  <Route path="/cart" element={<Cart />} />
                </Route>
              </Routes>
            </Layout>
          </SignUpProvider>
        </CartProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
