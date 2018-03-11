import {Component, Input} from '@angular/core';
import {GroceryItem} from './groceries/grocery-item';
import {publicDecrypt} from 'crypto';
import {RecipeItem} from './recipe-item';

@Component({
  selector: 'recipe-preview',
  templateUrl: './recipe.preview.component.html',
  styles: [`
    .recipe-preview-wrapper {
      padding: 15px;
      margin-right: 30px;
      margin-top: 10px;
      border: black solid;
      font-size: medium;
      display: inline-block;
    }

    .recipe-preview-image-wrapper {
      display: inline-block;
    }
    .recipe-preview-image {
      height: 25em;
      width: 25em;
    }
  `]
})

export class RecipePreviewComponent {
  @Input() myRecipe: RecipeItem;
  constructor () {
  }

  public ShowRecipe() {
  }
}


