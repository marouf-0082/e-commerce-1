import { useEffect, useState } from "react";
import { useCartContextProvider } from "../context/CartContext";
import { Check, ShoppingCart } from "lucide-react";
import type { IProduct } from "../components/services/product/types";
import { Link } from "react-router-dom";
import clsx from "clsx";

interface IButtonProps {
  product: IProduct;
  type: TButton;
  qty?: number;
}

type TButton = "primary" | "secondary";

function Button({ product, type, qty }: IButtonProps) {
  const { handleAddToCart } = useCartContextProvider();

  const [isAdded, setIsAdded] = useState<boolean>(false);

  const addToCart = () => handleAddToCart(product.id, qty ?? 1, product.price);
  const handleCart = () => {
    if (isAdded) return;
    addToCart();

    setIsAdded(true);

    const timeout = setTimeout(() => {
      setIsAdded(false);
    }, 2000);
    return () => clearTimeout(timeout);
  };

  return type === "primary" ? (
    <button
      onClick={handleCart}
      disabled={isAdded}
      className={clsx(
        "btn primary-btn block w-full block w-full mt-3",
        isAdded ? "bg-green-500 disabled:cursor-not-allowed" : "",
      )}
    >
      <div className="relative flex items-center justify-center gap-2 overflow-hidden">
        <div
          className={clsx(
            "absolute flex items-center gap-2 transition-all duration-300 ease-in-out",
            isAdded ? "opacity-0 translate-x-20" : "opacity-100 translate-x-0",
          )}
        >
          <ShoppingCart size={20} className="text-svgIcon" />
          <span>Add to Cart</span>
        </div>

        <div
          className={clsx(
            "flex items-center gap-2 transition-all duration-300 ease-in-out",
            isAdded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20",
          )}
        >
          <Check size={20} strokeWidth={3} className="text-green-300" />
          <span>Added</span>
        </div>
      </div>
    </button>
  ) : (
    <Link
      to={"/cart"}
      className="btn secondry-btn shadow-md border border-gray-50 mt-3 text-black cursor-default"
      onClick={addToCart}
    >
      Buy Now
    </Link>
  );
}

export default Button;
