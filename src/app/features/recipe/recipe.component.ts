import {Component, Input} from '@angular/core';
import {GroceryItem} from './groceries/grocery-item';
import {publicDecrypt} from 'crypto';
import {RecipeItem} from './recipe-item';

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

export class RecipeComponent {
  @Input() myRecipe: RecipeItem;
  isEditMode: boolean;
  constructor () {
    this.isEditMode = false;
  }

  public EditModeClick() {
    this.isEditMode = true;
  }

  public SaveModeClick() {
    this.isEditMode = false;
  }
}


