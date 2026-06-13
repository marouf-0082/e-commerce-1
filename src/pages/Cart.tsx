import { Link } from "react-router-dom";
import { Container } from "../components/container/Container";
import { useCartContextProvider } from "../context/CartContext";
import { Trash, ArrowLeft } from "lucide-react";
import CartItem from "../components/cartItem/CartItem";
function Cart() {
  const { cartQty, cartItems, handleClearAll } = useCartContextProvider();
  return (
    <div className="mt-25">
      <Container>
        {cartQty > 0 ? (
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold pb-3">Shopping Cart</h1>
                <p>{cartQty} items in your cart</p>
              </div>
              <div>
                <Link
                  to={"/"}
                  className="group flex gap-2 text-[14px] text-slate-500 hover:bg-[#fffde8] rounded-3xl px-3 py-2 w-max items-center hover:text-black transition-all duration-300"
                >
                  <ArrowLeft
                    size={20}
                    className="text-slate-500 group-hover:text-black transition-all duration-300"
                  />
                  Continue Shopping
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 mt-5">
              <div className="col-span-2 p-8 border border-gray-300 rounded-3xl">
                <div className="flex items-center justify-between ">
                  <h3 className="text-2xl font-bold">Cart Items</h3>
                  <div>
                    <button
                      onClick={handleClearAll}
                      className="flex items-center justify-center gap-3"
                    >
                      <Trash size={16} color="#141414" /> Clear All
                    </button>
                  </div>
                </div>
                {cartItems.map((item) => (
                  <CartItem {...item} key={item.id} />
                ))}
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
        ) : (
          <h2 className="text-2xl font-semibold">
            You have {cartQty} items in your cart.
          </h2>
        )}
      </Container>
    </div>
  );
}

export default Cart;
