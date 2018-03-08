import {Component, Input} from '@angular/core';

@Component({
  selector: 'recipe-description',
  templateUrl: './recipe-description.component.html',
  styles: [`
    .description-wrapper {
      padding: 15px;
      margin-top: 10px;
    }
    .description-content {
      word-wrap: break-word;
      word-break: break-all;
      display: inline-block;
    }
  `]
})

export class RecipeDescriptionComponent {
 @Input() description: string;
 @Input() isEditMode: boolean;
  constructor () {}
}
