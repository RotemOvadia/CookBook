import {GroceryItem} from './groceries/grocery-item';

export class RecipeItem {
  constructor(public id: string, public name: string, public groceriesList: GroceryItem[], public recipeDescription: string, public image: string) {

  }
}
