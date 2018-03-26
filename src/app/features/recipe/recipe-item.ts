import {GroceryItem} from './groceries/grocery-item';

export class RecipeItem {
  constructor(
    public id: number,
    public name: string,
    public groceriesList: GroceryItem[],
    public recipeDescription: string,
    public image: string) {

  }
}
