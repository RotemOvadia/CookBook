import {Component, Input} from '@angular/core';
import {GroceryItem} from './grocery-item';

@Component({
  selector: 'groceries-list',
  templateUrl: './groceries.component.html',
  styles: [`
    .groceries-wrapper {
      padding: 15px;
    }
  `]
})

export class GroceriesComponent {
  @Input() groceries: GroceryItem[];
  @Input() isEditMode: boolean;
  constructor () {
  }
}
