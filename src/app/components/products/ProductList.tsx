'use client';
import useProductStore from "@/app/stores/useProductStore";


export default function ProductList({ products } : any) {
  
  const setProducts = useProductStore((state) => state.setProducts);

  if (products.length > 0) {
    setProducts(products);
  }

  const storedProducts = useProductStore((state) => state.products);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {storedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} - Stock: {product.stock}
          </li>
        ))}
      </ul>
    </div>
  );
}
