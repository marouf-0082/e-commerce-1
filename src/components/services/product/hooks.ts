import { useQuery } from "@tanstack/react-query";
import { getProduct, getProducts } from "./endpints";
import type { IProduct } from "./types";

export const useGetProducts = () => {
  return useQuery<IProduct[]>({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });
};

export const useGetProduct = (id: string | number) => {
  return useQuery({
    queryKey: ["getProduct", id],
    queryFn: () => getProduct(id),
  });
};
