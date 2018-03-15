import  {Action} from '@ngrx/store';
import {RecipeItem} from '../../features/recipe/recipe-item';

export const LOAD_RECIPE = '[recipe] Load Recipe'
export const LOAD_RECIPE_FAIL = '[recipe] Load Recipe Fail'
export const LOAD_RECIPE_SUCCESS = '[recipe] Load Recipe Success'

export class LoadRecipe implements Action {
  readonly type = LOAD_RECIPE;
}

export class LoadRecipeFail implements Action {
  readonly type = LOAD_RECIPE_FAIL;
  constructor(public  payload: RecipeItem[]) {}
}

export class LoadRecipeSuccess implements Action {
  readonly type = LOAD_RECIPE_SUCCESS;
  constructor(public  payload: RecipeItem[]) {}
}


// action types
export type RecipesActions = LoadRecipe | LoadRecipeFail | LoadRecipeSuccess;
