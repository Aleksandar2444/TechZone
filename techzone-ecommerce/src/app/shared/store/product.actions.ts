import { createAction, props } from '@ngrx/store';

export const setFilterText = createAction(
  '[Product Listing] Set Filter Text',
  props<{ filterText: string }>()
);
