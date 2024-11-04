import ProductList from "../components/products/ProductList";
import createApolloClient from "../services/apolloClient";
import { GET_PRODUCTS_QUERY } from "../services/productService";


export default async function ProductsSSRPage() {
  const client = createApolloClient();
  let products = [];

  try {
    const { data } = await client.query({
      query: GET_PRODUCTS_QUERY,
    });

    products = data.products.slice(0, 5); 

  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <div>
        <h1>Error</h1>
        <p>Failed to load products.</p>
      </div>
    );
  }

  if (typeof window !== 'undefined') {
    const useProductStore = (await import('../../app/stores/useProductStore')).default;
    useProductStore.getState().setProducts(products);
  }

  return <ProductList products={products} />;
}
