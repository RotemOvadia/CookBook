import {Injectable} from '@angular/core';

import {Effect, Actions} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {map, switchMap, catchError} from 'rxjs/operators';

import * as recipeAction from '../actions/recipes.actions';
import * as fromServices from '../../services';

@Injectable()
export class RecipeEffect {
  constructor(
    private actions$: Actions,
    private recipeService: fromServices.RecipesService
  ) {}

  @Effect()
  loadRecipes$ = this.actions$.ofType(recipeAction.LOAD_RECIPE)
    .pipe(
      switchMap(() => {
        return this.recipeService.getRecipes().pipe(
          map(recipes => new recipeAction.LoadRecipeSuccess(recipes)),
          catchError(error => of (new recipeAction.LoadRecipeFail(error)))
        );
      })
    );
}
