import { useEffect, useState } from "react";
import { getProduct } from "../services/product/endpints";
import type { IProduct } from "../services/product/types";
import { Minus, Trash, Plus } from "lucide-react";
import { useCartContextProvider } from "../../context/CartContext";
import Button from "../../ui/Button";

interface ICartItem {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();
  const { handleRemoveItem, handleUpdateProduct } = useCartContextProvider();
  const totalPrice = (product?.price ?? 0) * qty;

  useEffect(() => {
    getProduct(id).then((res) => {
      setProduct(res);
    });
  }, []);

  return (
    <div className="flex gap-5 mt-8">
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
            <h3 className="text-[#262626] font-semibold">{product?.name}</h3>
            <p>${product?.price} each</p>
          </div>
          <Button
            onClick={() => handleRemoveItem(id)}
            className="group hover:bg-yellow-50 p-2 transition-all duration-300"
          >
            <Trash
              size={16}
              className="text-[#697280] group-hover:text-red-500"
            />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between border border-gray-200 rounded-3xl h-9 ">
            <Button
              className={`h-full w-8 flex items-center justify-center text-2xl rounded-l-3xl cursor-pointer text-center hover:bg-yellow-50 ${qty === 1 && " cursor-not-allowed hover:bg-transparent opacity-20 cursor "}`}
              onClick={() => handleUpdateProduct(id, "decrement")}
            >
              <Minus size={16} />
            </Button>
            <span className="text-center">
              <input
                type="number"
                value={qty}
                className="w-13 text-center outline-none px-4"
              />
            </span>
            <Button
              className="h-full w-8 flex items-center justify-center text-2xl rounded-r-3xl  cursor-pointer text-center hover:bg-yellow-50"
              onClick={() => handleUpdateProduct(id, "increment")}
            >
              <Plus size={16} />
            </Button>
          </div>
          <span className="text-[18px] font-bold">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
