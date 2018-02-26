import {Component, Input} from '@angular/core';

@Component({
  selector: 'recipe-description',
  templateUrl: './recipe-description.component.html',
  styles: [`
    .description-wrapper {
      border: 1px solid black;
      padding: 15px;
      direction: rtl;
      margin-right: 300px;
      margin-top: 30px;
    }
    .title-wrapper {
      color: palevioletred;
      margin: 3px;
    }
    .content-wrapper {
      color: blue;
    }
  `]
})

export class RecipeDescriptionComponent {
 @Input() description: string;
  constructor () {}
}
