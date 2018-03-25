import {Component, OnInit, state} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as fromStore from '../store';

import {RecipeItem} from './recipe/recipe-item';
import {RecipesService} from '../services/recipes.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`#my-logout-button { background: #F44336 }`]
})

export class DashboardComponent implements OnInit {
  form: FormGroup;
  // isEditMode: boolean;
  recipes$: Observable<RecipeItem[]>;
  recipes: RecipeItem[];
  constructor(
    private myStore: Store<fromStore.ProductState>,
    private fb: FormBuilder,
    private http: TransferHttp,
    private recipesService: RecipesService
  ) {
    this.form = fb.group({
      name: ''
    });

    // this.isEditMode = false;
  }

  ngOnInit() {
    this.recipes$ = this.myStore.select(fromStore.getAllRecipes);
    // this.recipes$ = this.recipesService.getRecipes();
    this.myStore.dispatch(new fromStore.LoadRecipe());
  }

}
