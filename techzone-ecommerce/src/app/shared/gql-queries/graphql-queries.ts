import { gql } from 'apollo-angular';

export const GET_PRODUCTS_QUERY = gql`
  {
    products(options: { take: 100, sort: { name: ASC } }) {
      items {
        id
        name
        slug
        description
        createdAt
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID_QUERY = gql`
  query GetProductById($id: ID!) {
    product(id: $id) {
      id
      name
      slug
      description
      createdAt
    }
  }
`;

export const ADD_TO_ORDER_MUTATION = gql`
  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ... on Order {
        id
        code
        createdAt
        type
        active
        total
      }
    }
  }
`;

export const GET_ORDER_DETAILS_QUERY = gql`
  {
    activeOrder {
      id
      type
      active
      customer {
        firstName
        lastName
      }
      totalQuantity
      total
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $username: String = "test@vendure.io"
    $password: String = "test"
    $rememberMe: Boolean = true
  ) {
    login(username: $username, password: $password, rememberMe: $rememberMe) {
      ... on NativeAuthenticationResult {
        ... on CurrentUser {
          id
          identifier
          channels {
            id
            token
            code
            permissions
          }
        }
      }
    }
  }
`;
