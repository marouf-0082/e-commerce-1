import { Link } from "react-router-dom";
import { Container } from "../components/container/Container";
import { useCartContextProvider } from "../context/CartContext";
import { Trash, ArrowLeft } from "lucide-react";
import CartItem from "../components/cartItem/CartItem";
import Button from "../ui/Button";
import OrderSummary from "../components/ordersummary/OrderSummary";
import EmptyCart from "../components/emptyCart/EmptyCart";
import React from "react";
function Cart() {
  const { cartQty, cartItems, handleClearAll } = useCartContextProvider();
  return (
    <div className="mt-25 mb-8">
      <Container>
        {cartQty > 0 ? (
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold pb-3">Shopping Cart</h1>
                <p>
                  {cartQty} {cartQty > 1 ? "items" : "item"} in your cart
                </p>
              </div>
              <div>
                <Link
                  to={"/"}
                  className="flex gap-2 text-[14px] text-[#697280] hover:bg-[#fffde8] rounded-3xl px-3 py-2 w-max items-center hover:text-[#262626] transition-all duration-300"
                >
                  <ArrowLeft
                    size={20}
                    className="text-[#697280] group-hover:text-[#262626] transition-all duration-300"
                  />
                  Continue Shopping
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 mt-5 gap-6">
              <div className="col-span-2 p-6 self-start border border-gray-200 rounded-3xl shadow">
                <div className="flex items-center justify-between pb-3">
                  <h3 className="text-[18px] font-bold">Cart Items</h3>
                  <div>
                    <Button
                      onClick={handleClearAll}
                      className="flex items-center justify-center gap-3 px-3 py-1 rounded-3xl text-[14px] group text-[#697280] hover:bg-yellow-50 hover:text-red-500 transition-all duration-300"
                    >
                      <Trash
                        size={16}
                        className="text-[#697280] group-hover:text-red-500 duration-300"
                      />{" "}
                      Clear All
                    </Button>
                  </div>
                </div>
                {cartItems.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <CartItem {...item} />
                    {index !== cartItems.length - 1 && (
                      <hr className="border-gray-200 my-4" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="col-span-1 h-96 p-6 border border-gray-200 rounded-3xl shadow sticky top-1/12">
                <OrderSummary />
              </div>
            </div>
            <div className="border border-gray-200 shadow-md rounded-3xl mt-15">
              <div className="p-6">
                <h3>You might also like</h3>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 py-12">
                <p>Discover more products that match your style</p>
                <Link
                  to={"/"}
                  className="secondry-btn shadow-md px-3 py-1 text-black text-[14px] border border-gray-200 rounded-3xl"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </Container>
    </div>
  );
}

export default Cart;
