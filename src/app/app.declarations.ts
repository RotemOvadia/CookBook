import { DashboardComponent } from './features/dashboard.component';
import { RecipeDescriptionComponent} from './features/recipe-description/recipe-description.component';
import { NotFound404Component } from './not-found404.component';
import {GroceriesComponent} from './features/groceries/groceries.component';
import {GroceryItem} from './features/groceries/grocery-item';
import {GroceryComponent} from './features/groceries/grocery/grocery.component';

export const APP_DECLARATIONS = [
  DashboardComponent,
  NotFound404Component,
  RecipeDescriptionComponent,
  GroceriesComponent,
  GroceryComponent
];
