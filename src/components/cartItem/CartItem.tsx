import { useEffect, useState } from "react";
import { getProduct } from "../services/product/endpints";
import type { IProduct } from "../services/product/types";
import { Trash } from "lucide-react";
import { useCartContextProvider } from "../../context/CartContext";

interface ICartItem {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();
  const { handleRemoveItem } = useCartContextProvider();

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
      <div className="w-full">
        {" "}
        <div className="flex items-center justify-between">
          <div>
            <h3>{product?.name}</h3>
            <p>${product?.price} each</p>
          </div>
          <button onClick={() => handleRemoveItem(id)}>
            <Trash size={16} color="#141414" />
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default CartItem;
