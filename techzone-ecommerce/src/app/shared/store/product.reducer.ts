import { createReducer, on } from '@ngrx/store';
import { setFilterText } from './product.actions';
import { ProductListingState } from './app.state.model';

export const initialState: ProductListingState = {
  filterText: '',
};

export const productListingReducer = createReducer(
  initialState,
  on(setFilterText, (state, { filterText }) => ({
    ...state,
    filterText,
  }))
);
