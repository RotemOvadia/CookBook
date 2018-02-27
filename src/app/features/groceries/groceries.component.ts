import {Component, Input} from '@angular/core';
import {GroceryItem} from './grocery-item';

@Component({
  selector: 'groceries-list',
  templateUrl: './groceries.component.html',
  styles: [`

  `]
})

export class GroceriesComponent {
  @Input() groceries: GroceryItem[];
  constructor () {
  }
}
