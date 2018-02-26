import {Component, Input} from '@angular/core';

@Component({
  selector: 'recipe-description',
  templateUrl: './recipe-description.component.html',
  styles: [`#my-logout-button { background: #F44336 }`]
})

export class RecipeDescriptionComponent {
 @Input() description: string;
  constructor () {}
}
