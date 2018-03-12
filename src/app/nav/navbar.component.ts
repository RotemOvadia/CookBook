import {Component, Input} from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .recipe-preview-wrapper {
      padding: 15px;
      margin-right: 30px;
      margin-top: 10px;
      border: black solid;
      font-size: medium;
      display: inline-block;
    }

    .recipe-preview-image-wrapper {
      display: inline-block;
    }
    .recipe-preview-image {
      height: 25em;
      width: 25em;
    }
  `]
})

export class NavbarComponent {
  constructor () {
  }

}


