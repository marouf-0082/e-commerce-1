import { useState } from "react";
import { useCartContextProvider } from "../context/CartContext";
import { Check, ShoppingCart } from "lucide-react";
import type { IProduct } from "../components/services/product/types";
import { Link } from "react-router-dom";

interface IButtonProps {
  props: IProduct;
  type: TButton;
  qty?: number;
}

type TButton = "primery" | "secondery";

function Button({ props, type , qty}: IButtonProps) {
  const { handleAddToCart } = useCartContextProvider();

  const [isAdded, setIsAdded] = useState<boolean>(false);

  const handleCart = () => {
    !isAdded && handleAddToCart(props.id, qty || 1, props.price);

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return type === "primery" ? (
    <button
      onClick={handleCart}
      className={`btn primary-btn block w-full mt-3 ${
        isAdded && "bg-green-500 hover:cursor-not-allowed"
      }`}
    >
      <div className="relative flex items-center justify-center gap-2 overflow-hidden">
        <div
          className={`
                absolute flex items-center gap-2
                transition-all duration-300 ease-in-out
                ${
                  isAdded
                    ? "opacity-0 translate-x-20"
                    : "opacity-100 translate-x-0"
                }
              `}
        >
          <ShoppingCart size={20} className="text-svgIcon" />
          <span>Add to Cart</span>
        </div>

        <div
          className={`
                flex items-center gap-2
                transition-all duration-300 ease-in-out
                ${
                  isAdded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }
              `}
        >
          <Check size={20} color="#00ff40" strokeWidth={3} />
          <span>Added</span>
        </div>
      </div>
    </button>
  ) : (
    <Link
      to={"/cart"}
      className="btn secondry-btn shadow-md border border-gray-50 mt-3 text-black cursor-default"
      onClick={() =>
        handleAddToCart(props.id, qty || 1, props.price)
      }
    >
      Buy Now
    </Link>
  );
}

export default Button;
