import { Link } from "react-router-dom";
import type { IProduct } from "../services/product/types";
import { useCartContextProvider } from "../../context/CartContext";
import { ShoppingCart } from "lucide-react";

type IProductItem = IProduct;

function ProductItem({ name, price, image, id }: IProductItem) {
  const { handleAddToCart } = useCartContextProvider();

  return (
    <div className="shadow-md border border-slate-200 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <Link to={`/product/${id}`}>
        <div className="group/cart relative w-full h-102 overflow-hidden rounded-t-3xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110  transition-all duration-300"
          />
          <div className="absolute top-0 w-full h-full rounded-t-3xl opacity-0 group-hover/cart:opacity-100 backdrop-blur-xs transition-all duration-300">
            <div className="fixed top-3 right-3 w-9 h-9 bg-white rounded-full group/heart flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-black group-hover/heart:text-amber-300 transition-colors duration-300"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f69e0a] inline py-1.5 px-3 rounded-3xl">
              <span className="flex items-center gap-4 text-[14px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                </svg>
                Quick View
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div className="m-3">
        <div className="flex flex-col">
          <Link to={`/product/${id}`}>
            <h2 className="inline font-[500] hover:text-[#f69e0a] transition-colors duration-300">
              {name}
            </h2>
          </Link>
          <span className="font-semibold text-[20px]">${price.toFixed(2)}</span>
        </div>
        <button
          onClick={() => handleAddToCart(id , 1)}
          className={`block text-center bg-[#f69e0a] w-full rounded-3xl py-1.5 mt-3`}
        >
          <div className="flex items-center justify-center gap-2">
            <ShoppingCart size={16} color="#000000" />
            <span>Add to Cart</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
