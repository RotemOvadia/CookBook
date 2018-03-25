import {RecipeItem} from '../../features/recipe/recipe-item';
import * as fromRecipes from '../actions/recipes.actions';
import {
  LOAD_RECIPE, LOAD_RECIPE_FAIL, LOAD_RECIPE_SUCCESS,
  RecipesActions
} from '../actions/recipes.actions';


export interface RecipeState {
  data: RecipeItem[];
  loaded: boolean;
  loading: boolean;
}


export const initialState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromRecipes.RecipesActions
): RecipeState {

  switch (action.type) {
    case fromRecipes.LOAD_RECIPE: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromRecipes.LOAD_RECIPE_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }

    case fromRecipes.LOAD_RECIPE_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
}
  return state;
}

export const getRecipesLoading = (state: RecipeState) => state.loading;
export const getRecipesLoaded = (state: RecipeState) => state.loaded;
export const getRecipes = (state: RecipeState) => state.data;

