import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ICartContext {
  handleAddToCart: (id: number, qty: number) => void;
  cartItems: ICartItem[];
  cartQty: number;
  handleClearAll: () => void;
  handleRemoveItem: (id: number) => void;
  handleUpdateProduct: (id: number, type: TUpdateType) => void;
}

interface ICartProvider {
  children: React.ReactNode;
}

interface ICartItem {
  id: number;
  qty: number;
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

  const handleAddToCart = (id: number, qty: number) => {
    setCartItems((currentItems) => {
      let selectItem = currentItems.find((item) => item.id == id);
      if (selectItem == null) {
        return [...currentItems, { id: id, qty: qty }];
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

  const handleUpdateProduct = (id: number, type: TUpdateType) => {
    setCartItems((items) =>
      items
        .map((item) => {
          if (item.id !== id) return item;

          const newQty = type === "increment" ? item.qty + 1 : item.qty - 1;

          return {
            ...item,
            qty: newQty,
          };
        })
        .filter((item) => item.qty > 0)
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
  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        cartItems,
        cartQty,
        handleClearAll,
        handleRemoveItem,
        handleUpdateProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
