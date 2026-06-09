import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ICartContext {
  handleAddToCart: (id: number, qty: number) => void;
  cartItems: ICartItem[];
  cartQty: number;
}

interface ICartProvider {
  children: React.ReactNode;
}

interface ICartItem {
  id: number;
  qty: number;
}

const CartContext = createContext({} as ICartContext);

export const useCartContextProvider = () => {
  return useContext(CartContext);
};

export default function CartProvider({ children }: ICartProvider) {
  const [cartItems, setCartItems] = useLocalStorage<ICartItem[]>(
    "cartItems",
    []
  );
  
  const handleAddToCart = (id: number, qty: number) => {
    setCartItems((currentItems) => {
      let selectItem = currentItems.find((item) => item.id == id);
      if (selectItem == null) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + qty };
          }
          return item;
        });
      }
    });
  };


  const cartQty = cartItems.reduce((sum, item) => sum + item.qty, 0);
  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        cartItems,
        cartQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
