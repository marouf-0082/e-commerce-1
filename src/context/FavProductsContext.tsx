import { createContext, useContext, useState } from "react";
import type { IProduct } from "../components/services/product/types";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface IFavProductProvider {
  children: React.ReactNode;
}

interface IFavProductContext {
  handleAddToFav: ({
    product,
    e,
  }: {
    product: IProduct;
    e: React.MouseEvent<HTMLDivElement, MouseEvent>;
  }) => void;
  isFavorite: (productId: number | string) => boolean;
  favItems: IProduct[];
}

const FavProductsContext = createContext<IFavProductContext | undefined>(
  undefined
);

export const useFavContextProvider = (): IFavProductContext => {
  const context = useContext(FavProductsContext);
  if (!context) {
    throw new Error(
      "useFavContextProvider must be used within a FavProductsContex"
    );
  }
  return context;
};
export default function FavProductsProvider({ children }: IFavProductProvider) {
  const [favItems, setFavItems] = useLocalStorage<IProduct[]>("favItems", []);
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("favorites") || "[]") as string[];
  });

  const handleAddToFav = ({
    product,
    e,
  }: {
    product: IProduct;
    e: React.MouseEvent<HTMLDivElement, MouseEvent>;
  }) => {
    e.preventDefault();
    e.stopPropagation();

    const productId = product.id.toString();
    const isAlreadyFavorite = favoriteIds.includes(productId);
    const updatedFavorites = isAlreadyFavorite
      ? favoriteIds.filter((favId) => favId !== productId)
      : [...favoriteIds, productId];

    setFavoriteIds(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    setFavItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id.toString() === productId
      );

      if (existingItem == null) {
        return [...currentItems, product];
      }

      return currentItems.filter((item) => item.id.toString() !== productId);
    });
  };

  const isFavorite = (productId: number | string) =>
    favoriteIds.includes(productId.toString());

  return (
    <FavProductsContext.Provider
      value={{
        handleAddToFav,
        isFavorite,
        favItems,
      }}
    >
      {children}
    </FavProductsContext.Provider>
  );
}
