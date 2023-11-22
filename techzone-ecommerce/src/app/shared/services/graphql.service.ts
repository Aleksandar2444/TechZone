import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  ProductByIdQueryResponse,
  AddToOrderMutationResponse,
  OrderDetailsResponse,
  LoginMutationResponse,
} from '@@shared/gql-models/graphql';
import {
  GET_PRODUCTS_QUERY,
  GET_PRODUCT_BY_ID_QUERY,
  ADD_TO_ORDER_MUTATION,
  GET_ORDER_DETAILS_QUERY,
  LOGIN_MUTATION,
  GetProductsOptions,
} from '@@shared/gql-queries/graphql-queries';
import { Product } from '@@features/product-listings/models/product';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private readonly apollo: Apollo) {}

  getProducts(options: GetProductsOptions): Observable<Product> {
    return this.apollo
      .query<Product>({
        query: GET_PRODUCTS_QUERY,
        variables: {
          take: 20,
          orderBy: options.orderBy,
          skipNumber: options.skipNumber,
        },
      })
      .pipe(map((result) => result.data));
  }

  getProductById(productId: string): Observable<ProductByIdQueryResponse> {
    return this.apollo
      .query<ProductByIdQueryResponse>({
        query: GET_PRODUCT_BY_ID_QUERY,
        variables: { id: productId },
      })
      .pipe(map((result) => result.data));
  }

  addToOrder(productId: string): Observable<AddToOrderMutationResponse> {
    const quantity = 1;

    return this.apollo
      .mutate<AddToOrderMutationResponse>({
        mutation: ADD_TO_ORDER_MUTATION,
        variables: { productVariantId: productId, quantity: quantity },
      })
      .pipe(map((result) => result.data as AddToOrderMutationResponse));
  }

  getOrderDetails(): Observable<OrderDetailsResponse> {
    return this.apollo
      .query<OrderDetailsResponse>({ query: GET_ORDER_DETAILS_QUERY })
      .pipe(map((result) => result.data));
  }

  loginQuery(): Observable<LoginMutationResponse> {
    return this.apollo
      .mutate<LoginMutationResponse>({ mutation: LOGIN_MUTATION })
      .pipe(map((result) => result!.data as LoginMutationResponse));
  }
}
