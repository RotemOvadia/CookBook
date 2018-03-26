/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';
import {DashboardComponent} from './features/dashboard.component';
import {RecipeComponent} from './features/recipe/recipe.component';

export const routes: Routes = [
  {path: 'recipes', component: DashboardComponent},
  {path: 'recipes/:id', component: RecipeComponent},
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];
