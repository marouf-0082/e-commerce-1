import { useEffect, useState } from "react";
import { getProduct } from "../services/product/endpints";
import type { IProduct } from "../services/product/types";
import { Minus, Trash, Plus } from "lucide-react";
import { useCartContextProvider } from "../../context/CartContext";
import Button from "../../ui/Button";

interface ICartItem {
  id: string;
  qty: number;
}

function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();
  const { handleRemoveItem, handleUpdateProduct } = useCartContextProvider();
  const totalPriceEachProduct = (product?.price ?? 0) * qty;

  useEffect(() => {
    getProduct(id).then((res) => {
      setProduct(res);
    });
  }, []);

  return (
    <div className="flex gap-5">
      <div className="w-28 h-25 rounded-3xl overflow-hidden">
        <img
          src={product?.image}
          alt={product?.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex justify-between flex-col">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">{product?.name}</h3>
            <p>${product?.price} each</p>
          </div>
          <button
            onClick={() => handleRemoveItem(id)}
            className="group rounded-full hover:bg-yellow-50 p-2 transition-all duration-300"
          >
            <Trash
              size={16}
              className="text-[#697280] group-hover:text-red-500"
            />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between border border-gray-200 rounded-3xl h-9 ">
            <button
              className={`h-full w-8 flex items-center justify-center text-2xl rounded-l-3xl cursor-pointer text-center hover:bg-svgIconBackground ${qty === 1 && " cursor-not-allowed hover:bg-transparent opacity-20 cursor "}`}
              onClick={() => handleUpdateProduct(id, "decrement")}
            >
              <Minus size={16} />
            </button>
            <span className="text-center">
              <input
                type="number"
                value={qty}
                className="w-13 text-center outline-none"
                readOnly
              />
            </span>
            <button
              className="h-full w-8 flex items-center justify-center text-2xl rounded-r-3xl  cursor-pointer text-center hover:bg-svgIconBackground"
              onClick={() => handleUpdateProduct(id, "increment")}
            >
              <Plus size={16} />
            </button>
          </div>
          <span className="text-[18px] font-bold">
            ${totalPriceEachProduct.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
