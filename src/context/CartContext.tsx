import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ICartContext {
  handleAddToCart: (id: number, qty: number, price: number) => void;
  cartItems: ICartItem[];
  cartQty: number;
  handleClearAll: () => void;
  handleRemoveItem: (id: number) => void;
  handleUpdateProduct: (id: number, type: TUpdateType) => void;
  subTotal: number;
  tax: number;
  total: number;
}

interface ICartProvider {
  children: React.ReactNode;
}

interface ICartItem {
  id: number;
  qty: number;
  price: number;
}

type TUpdateType = "increment" | "decrement";

const CartContext = createContext({} as ICartContext);

export const useCartContextProvider = () => {
  return useContext(CartContext);
};

export default function CartProvider({ children }: ICartProvider) {
  const [cartItems, setCartItems] = useLocalStorage<ICartItem[]>(
    "cartItems",
    []
  );
  const handleAddToCart = (id: number, qty: number, price: number) => {
    setCartItems((currentItems) => {
      let selectItem = currentItems.find((item) => item.id == id);
      if (selectItem == null) {
        return [...currentItems, { id: id, qty: qty, price: price }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + qty, price: item.price };
          }
          return item;
        });
      }
    });
  };

  const handleUpdateProduct = (id: number, type: TUpdateType) => {
    setCartItems((currentItems) =>
      currentItems.map((item) => {
        if (item.id !== id) return item;

        const newQty =
          type === "increment" ? item.qty + 1 : Math.max(1, item.qty - 1);

        return {
          ...item,
          qty: newQty,
        };
      })
    );
  };

  const handleClearAll = () => {
    setCartItems([]);
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((currentItem) => {
      return currentItem.filter((item) => item.id !== id);
    });
  };

  const cartQty = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const tax = cartItems.reduce(
    (sum, item) => sum + item.price * 0.08 * item.qty,
    0
  );

  const total = subTotal + tax;
  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        cartItems,
        cartQty,
        handleClearAll,
        handleRemoveItem,
        handleUpdateProduct,
        subTotal,
        tax,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
