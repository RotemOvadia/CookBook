import {ActionReducerMap, createSelector, createFeatureSelector} from '@ngrx/store';

import * as fromRecipes from './recipe.reducer';

export interface ProductState {
  recipes: fromRecipes.RecipeState;
}

export const reducers: ActionReducerMap<ProductState> = {
  recipes: fromRecipes.reducer
}

export const getProductState = createFeatureSelector<ProductState>('products');

export const getRecipesState = createSelector(getProductState, (state: ProductState) => state.recipes);
// export const getRecipesState = createSelector(getProductState, (state: ProductState) => {
//   debugger;
//   state.recipes});

export const getRecipesEntities = createSelector(getRecipesState, fromRecipes.getRecipesEntities);

export const getAllRecipes = createSelector(
  getRecipesEntities,
  (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
)

export const getRecipesLoaded = createSelector(getRecipesState, fromRecipes.getRecipesLoaded);
export const getRecipesLoading = createSelector(getRecipesState, fromRecipes.getRecipesLoading);
