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
  data: [{
    "id": "1",
    "name": "פאדג' בראוניז",
    "groceriesList": [
      {
        "name": "שוקולד",
        "quantity": 200,
        "units": "גרם"
      },
      {
        "name": "חמאה",
        "quantity": 200,
        "units": "גרם"
      },
      {
        "name": "ביצים",
        "quantity": 4,
        "units": ""
      },
      {
        "name": "סוכר",
        "quantity": 2,
        "units": "כוסות"
      },
      {
        "name": "קמח",
        "quantity": 2,
        "units": "כוסות"
      },
      {
        "name": "מלח",
        "quantity": 1,
        "units": "קורט"
      }
    ],
    "recipeDescription": "לערבב את כל החומרים",
    "image": "../../assets/Fudge-Brownies2.jpg"
  },
  {
    "id": "1",
    "name": "מאפינס בננה",
    "groceriesList": [
      {
        "name": "בננות",
        "quantity": 3,
        "units": ""
      },
      {
        "name": "חמאה",
        "quantity": 200,
        "units": "גרם"
      },
      {
        "name": "ביצים",
        "quantity": 4,
        "units": ""
      },
      {
        "name": "סוכר",
        "quantity": 2,
        "units": "כוסות"
      },
      {
        "name": "קמח",
        "quantity": 2,
        "units": "כוסות"
      },
      {
        "name": "מלח",
        "quantity": 1,
        "units": "קורט"
      }
    ],
    "recipeDescription": "לערבב את כל החומרים",
    "image": "../../assets/banana-muffins.jpg"
  }],
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
      return {
        ...state,
        loading: false,
        loaded: true,
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

