export class GroceryItem {
  public name: string;
  public quantity: number;
  public units: string;
  constructor(name: string, quantity: number, units: string) {
    this.name = name;
    this.quantity = quantity;
    this.units = units;
  }
}
