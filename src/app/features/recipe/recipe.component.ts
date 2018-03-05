import {Component, Input} from '@angular/core';
import {GroceryItem} from './groceries/grocery-item';

@Component({
  selector: 'recipe-unit',
  templateUrl: './recipe.component.html',
  styles: [`
    .recipe-wrapper {
      padding: 15px;
      margin-right: 30px;
      margin-top: 10px;
      border: black solid;
    }
  `]
})

export class RecipeComponent {
  @Input() groceriesList: GroceryItem[];
  @Input() description: string;
  constructor () {
  }
}
