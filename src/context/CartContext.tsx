import { createContext, useContext, useMemo } from "react";
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
  shippingCost: number;
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

const CartContext = createContext<ICartContext | undefined>(undefined);

export const useCartContextProvider = (): ICartContext => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "useCartContextProvider must be used within a CartProvider"
    );
  }
  return context;
};

export default function CartProvider({ children }: ICartProvider) {
  const [cartItems, setCartItems] = useLocalStorage<ICartItem[]>(
    "cartItems",
    []
  );
  const handleAddToCart = (id: number, qty: number, price: number) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === id);
      if (existingItem == null) {
        return [...currentItems, { id, qty, price }];
      }

      return currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, qty: item.qty + qty, price: item.price };
        }
        return item;
      });
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
  const { cartQty, subTotal, tax, total, shippingCost } = useMemo(() => {
    const qty = cartItems.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
    const shippingCost = subtotal > 50 ? 0 : 5;
    const calculatedTax = subtotal * 0.08;
    const tot = subtotal + calculatedTax + shippingCost;
    return {
      cartQty: qty,
      subTotal: subtotal,
      tax: calculatedTax,
      total: tot,
      shippingCost: shippingCost,
    };
  }, [cartItems]);
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
        shippingCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
