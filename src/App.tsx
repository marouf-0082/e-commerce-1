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
import FavProduct from "./pages/FavProduct";
import FavProductsProvider from "./context/FavProductsContext";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <SignUpProvider>
            <FavProductsProvider>
              <ScrollToTop />
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<Product />} />
                  <Route path="/signup" element={<SignUp />} />

                  <Route element={<PrivateRout />}>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/fav" element={<FavProduct />} />
                  </Route>
                </Routes>
              </Layout>
            </FavProductsProvider>
          </SignUpProvider>
        </CartProvider>
      </QueryClientProvider>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-35 left-1/5 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-purple-600"></div>
        <div className="absolute top-30 right-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-blue-600"></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-indigo-600"></div>
      </div>
    </>
  );
}

export default App;
