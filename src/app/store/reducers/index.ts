import {ActionReducerMap, createSelector, createFeatureSelector} from '@ngrx/store';

import * as fromRecipes from './recipe.reducer';

export interface ProductState {
  recipes: fromRecipes.RecipeState;
}

export const reducers: ActionReducerMap<ProductState> = {
  recipes: fromRecipes.reducer
}

export const getProductState = createFeatureSelector<ProductState>('product');

export const getRecipesState = createSelector(getProductState, (state: ProductState) => state.recipes);

export const getAllRecipes = createSelector(getRecipesState, fromRecipes.getRecipes);
export const getRecipesLoaded = createSelector(getRecipesState, fromRecipes.getRecipesLoaded);
export const getRecipesLoading = createSelector(getRecipesState, fromRecipes.getRecipesLoading);
