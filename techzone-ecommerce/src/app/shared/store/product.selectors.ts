import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductListingState } from './app.state.model';

const getProductListingState =
  createFeatureSelector<ProductListingState>('productListing');

export const getFilterText = createSelector(
  getProductListingState,
  (state) => state.filterText
);
