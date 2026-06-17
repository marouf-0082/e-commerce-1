import { useCartContextProvider } from "../../context/CartContext";

function OrderSummary() {
  const { cartQty, subTotal, tax, total } = useCartContextProvider();

  return (
    <>
      <div className="py-4 text-[#262626] font-bold">
        <h2>Order Summary</h2>
      </div>
      <div>
        <div className="pb-4">
          <div className="flex items-center justify-between pb-2 text-[14px]">
            <span className="text-[#697280]">Subtotal ({cartQty} items)</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between pb-2 text-[14px]">
            <span className="text-[#697280]">Shipping</span>
            <div>free</div>
          </div>
          <div className="flex items-center justify-between border-b border-gray-300 pb-2 text-[14px]">
            <span className="text-[#697280]">Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <h2 className="text-[#262626]">Total</h2>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default OrderSummary;
