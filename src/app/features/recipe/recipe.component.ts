import {Component, Input, OnInit} from '@angular/core';

import {GroceryItem} from './groceries/grocery-item';
import {publicDecrypt} from 'crypto';
import {RecipeItem} from './recipe-item';
import {RecipesService} from '../../services';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'recipe-unit',
  templateUrl: './recipe.component.html',
  styles: [`
    .recipe-wrapper {
      padding: 15px;
      margin-right: 30px;
      margin-top: 10px;
      border: black solid;
      font-size: medium;
      display: inline-block;
    }

    .recipe-image-wrapper {
      display: inline-block;
    }
  `]
})

export class RecipeComponent implements OnInit {
  @Input() myRecipe$: Observable<RecipeItem>;
  isEditMode: boolean;
  constructor (private recipeService: RecipesService) {
    this.isEditMode = false;
  }
  // constructor (_route: ActivatedRoute) {
  //   this.isEditMode = false;
  // }

  ngOnInit() {
    this.myRecipe$ = this.recipeService.getRecipe(1);
  }

  public EditModeClick() {
    this.isEditMode = true;
  }

  public SaveModeClick() {
    this.isEditMode = false;
  }
}


