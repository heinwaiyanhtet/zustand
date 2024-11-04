import { gql } from "@apollo/client";

// GraphQL Queries and Mutations
export const GET_PRODUCTS_QUERY = gql`
  query GetProducts {
    products {
      id
      name
      price
      stock
    }
  }
`;

export const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProduct($name: String!, $price: Float!, $stock: Int!) {
    createProduct(name: $name, price: $price, stock: $stock) {
      id
      name
      price
      stock
    }
  }
`;

export const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
