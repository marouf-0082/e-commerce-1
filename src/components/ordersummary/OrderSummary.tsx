import { CreditCard, Shield, Truck, Heart } from "lucide-react";
import { useCartContextProvider } from "../../context/CartContext";
import Button from "../../ui/Button";

function OrderSummary() {
  const { cartQty, subTotal, tax, total, shippingCost } =
    useCartContextProvider();
console.log(shippingCost);

  return (
    <>
      <div className="pb-4 font-bold text-[18px]">
        <h2>Order Summary</h2>
      </div>
      <div>
        <div className="pb-4">
          <div className="flex items-center justify-between pb-2 text-[14px]">
            <span className="text-foreground-2">
              Subtotal ({cartQty} {cartQty == 1 ? "item" : "items"})
            </span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between pb-2 text-[14px]">
            <span className="text-foreground-2">Shipping</span>
            <span className={`${shippingCost === 0 ? "bg-svgIconBackground rounded-3xl px-2" : ""}`}>
              {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-300 pb-2 text-[14px]">
            <span className="text-foreground-2">Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <h2 className="text-[18px]">Total</h2>
            <span className="text-[#FC9D0F] font-bold">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="border-b border-gray-300 pb-4">
          <Button className="btn primary-btn flex gap-2 w-full justify-center items-center">
            <CreditCard size={16} />
            Proceed to Checkout
          </Button>
        </div>
        <div className="pt-3 flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <Shield size={16} color="#00C753" strokeWidth={1.75} />
            <p>Secure SSL checkout</p>
          </div>
          <div className="flex gap-3 items-center">
            <Truck size={16} color="#0083FF" strokeWidth={1.75} />
            <p>Free returns within 30 days</p>
          </div>
          <div className="flex gap-3 items-center">
            <Heart size={16} color="#FF2D35" strokeWidth={1.75} />
            <p>24/7 customer support</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderSummary;
