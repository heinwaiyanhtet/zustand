import { create } from "zustand";

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

const useProductStore = create<ProductStore>((set: (arg0: { products: any; }) => any) => ({
  products: [],
  setProducts: (products: any) => set({ products }),
}));

export default useProductStore;
