import { ShoppingBag, Truck, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../container/Container";

function EmptyCart() {
  return (
    <div className="py-24">
      <Container>
        <div>
          <div className="flex flex-col justify-center items-center gap-3 mb-8">
            <ShoppingBag size={60} color="#697280" />
            <h2 className="text-2xl text-[#262626] font-semibold">
              Your cart is empty
            </h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
          </div>
          <div className="flex items-center flex-col justify-center">
            <Link
              to={"/"}
              className="px-8 py-2 bg-[#FC9D0F] rounded-3xl text-[14px] hover:bg-[#fda41d]"
            >
              Continue Shopping
            </Link>
            <div className="flex gap-5 mt-4">
              <div className="flex gap-2 items-center">
                <Truck size={16} color="#697280"/> <p>Free shipping over $50</p>
              </div>
              <div className="flex gap-2 items-center">
                <Shield size={16} color="#697280"/> <p>Secure checkout</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default EmptyCart;
