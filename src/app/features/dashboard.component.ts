import {Component, OnInit, state} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as fromStore from '../store';


import {GroceryItem} from './recipe/groceries/grocery-item';
import {RecipeItem} from './recipe/recipe-item';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`#my-logout-button { background: #F44336 }`]
})

export class DashboardComponent implements OnInit {
  form: FormGroup;
  isEditMode: boolean;
  groceriesList: GroceryItem[] = [];
  recipe: RecipeItem;
  recipe2: RecipeItem;
  constructor(
    private myStore: Store<fromStore.ProductState>,
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

    // this.recipe = new RecipeItem('1', "פאדג' בראוניז", this.groceriesList, 'לערבב את כל החומרים', '../../assets/Fudge-Brownies2.jpg');
    // this.recipe2 = new RecipeItem('2', 'מאפינס בננה', this.groceriesList, 'לערבב את כל החומרים', '../../assets/banana-muffins.jpg');
    // this.recipe = {
    //   "id": "1",
    //   "name": "פאדג' בראוניז",
    //   "groceriesList": [
    //     {
    //       "name": "שוקולד",
    //       "quantity": 200,
    //       "units": "גרם"
    //     },
    //     {
    //       "name": "חמאה",
    //       "quantity": 200,
    //       "units": "גרם"
    //     },
    //     {
    //       "name": "ביצים",
    //       "quantity": 4,
    //       "units": ""
    //     },
    //     {
    //       "name": "סוכר",
    //       "quantity": 2,
    //       "units": "כוסות"
    //     },
    //     {
    //       "name": "קמח",
    //       "quantity": 2,
    //       "units": "כוסות"
    //     },
    //     {
    //       "name": "מלח",
    //       "quantity": 1,
    //       "units": "קורט"
    //     }
    //   ],
    //   "recipeDescription": "לערבב את כל החומרים",
    //   "image": "../../assets/Fudge-Brownies2.jpg"
    // };

  }

  ngOnInit() {
    this.myStore.select<any>(fromStore.getAllRecipes).subscribe(myState => {
      console.log(myState);
    });
  }

}
