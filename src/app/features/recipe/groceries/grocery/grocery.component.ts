import {Component, Input} from '@angular/core';
import {GroceryItem} from '../grocery-item';

@Component({
  selector: 'grocery-item',
  templateUrl: './grocery.component.html',
  styles: [`

  `]
})

export class GroceryComponent {
  @Input() groceryItem: GroceryItem;
  @Input() isEditMode: boolean;
  constructor () {}
}
