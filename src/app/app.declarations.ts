import { DashboardComponent } from './features/dashboard.component';
import { NotFound404Component } from './not-found404.component';
import {GroceryComponent} from './features/recipe/groceries/grocery/grocery.component';
import {GroceriesComponent} from './features/recipe/groceries/groceries.component';
import { RecipeDescriptionComponent} from './features/recipe/recipe-description/recipe-description.component';
import {RecipeComponent} from './features/recipe/recipe.component';
import {RecipePreviewComponent} from './features/recipe/recipe.preview.component';

export const APP_DECLARATIONS = [
  DashboardComponent,
  NotFound404Component,
  RecipeComponent,
  RecipeDescriptionComponent,
  GroceriesComponent,
  GroceryComponent,
  RecipePreviewComponent
];
