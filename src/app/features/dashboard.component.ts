import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';


import {GroceryItem} from './recipe/groceries/grocery-item';
import {RecipeItem} from './recipe/recipe-item';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`#my-logout-button { background: #F44336 }`]
})

export class DashboardComponent {
  form: FormGroup;
  isEditMode: boolean;
  groceriesList: GroceryItem[] = [];
  recipe: RecipeItem;
  recipe2: RecipeItem;
  constructor(
    private fb: FormBuilder,
    private http: TransferHttp
  ) {
    this.form = fb.group({
      name: ''
    });

    this.isEditMode = false;
    this.groceriesList.push(new  GroceryItem('שוקולד', 200, 'גרם'));
    this.groceriesList.push(new  GroceryItem('חמאה', 200, 'גרם'));
    this.groceriesList.push(new  GroceryItem('ביצים', 2, ''));
    this.groceriesList.push(new  GroceryItem('סוכר', 2, 'כוסות'));
    this.groceriesList.push(new  GroceryItem('קמח', 2, 'כוסות'));
    this.groceriesList.push(new  GroceryItem('מלח', 1, 'קורט'));

    this.recipe = new RecipeItem("פאדג' בראוניז", this.groceriesList, 'לערבב את כל החומרים', '../../assets/Fudge-Brownies2.jpg');
    this.recipe2 = new RecipeItem('מאפינס בננה', this.groceriesList, 'לערבב את כל החומרים', '../../assets/banana-muffins.jpg');

  }
}
