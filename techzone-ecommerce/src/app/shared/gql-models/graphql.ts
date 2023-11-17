export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: Date;
}

export interface ProductQueryResponse {
  products: {
    items: Product[];
  };
}

export interface ProductByIdQueryVariables {
  id: string;
}

export interface ProductByIdQueryResponse {
  product: Product;
}

export interface AddToOrderMutationVariables {
  productVariantId: string;
  quantity: number;
}

export interface AddToOrderMutationResponse {
  addItemToOrder: {
    id: string;
    code: string;
    createdAt: Date;
    type: string;
    active: boolean;
    total: number;
  };
}

export interface OrderDetailsResponse {
  activeOrder: {
    id: string;
    type: string;
    active: boolean;
    customer: {
      firstName: string;
      lastName: string;
    };
    totalQuantity: number;
    total: number;
  };
}

export interface LoginMutationResponse {
  login: {
    id: string;
    identifier: string;
    channels: Channel[];
  } | null;
}

interface Channel {
  id: string;
  token: string;
  code: string;
  permissions: string[];
}
