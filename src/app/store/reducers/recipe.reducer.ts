import {RecipeItem} from '../../features/recipe/recipe-item';
import * as fromRecipes from '../actions/recipes.actions';
import {
  LOAD_RECIPE, LOAD_RECIPE_FAIL, LOAD_RECIPE_SUCCESS,
  RecipesActions
} from '../actions/recipes.actions';


export interface RecipeState {
  entities: { [id: number]: RecipeItem};
  loaded: boolean;
  loading: boolean;
}


export const initialState: RecipeState = {
  entities: {},
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
      const recipes = action.payload;

      const entities = recipes.reduce(
        (entity: {[id: number]: RecipeItem}, recipe: RecipeItem) => {
          return {
            ...entity,
            [recipe.id]: recipe
          };
        },
        {
        ...state.entities
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
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

export const getRecipesEntities = (state: RecipeState) => state.entities;
export const getRecipesLoading = (state: RecipeState) => state.loading;
export const getRecipesLoaded = (state: RecipeState) => state.loaded;

