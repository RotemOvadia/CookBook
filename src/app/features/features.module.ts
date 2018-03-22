import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {StoreModule} from '@ngrx/store';

// import { APP_DECLARATIONS } from './app.declarations';
// import { APP_ENTRY_COMPONENTS } from './app.entry-components';
// import { APP_IMPORTS } from './app.imports';
//
// import { routes } from './app.routing';



// import { AppComponent } from './app.component';
import {reducers} from '../store/reducers';
import {RecipeDescriptionComponent} from './recipe/recipe-description/recipe-description.component';
import {RecipeComponent} from './recipe/recipe.component';
import {DashboardComponent} from './dashboard.component';
import {RecipePreviewComponent} from './recipe/recipe.preview.component';
import {GroceriesComponent} from './recipe/groceries/groceries.component';
import {GroceryComponent} from './recipe/groceries/grocery/grocery.component';
import {FormsModule} from '@angular/forms';
import {APP_IMPORTS} from '../app.imports';

@NgModule({
   declarations: [
    DashboardComponent,
    RecipeComponent,
    RecipeDescriptionComponent,
    GroceriesComponent,
    GroceryComponent,
    RecipePreviewComponent
  ],
  // entryComponents: [APP_ENTRY_COMPONENTS],
  imports: [
    CommonModule,
    APP_IMPORTS,
    // DEV_SERVER ? [BrowserAnimationsModule, BrowserTransferStateModule] : [],
    // HttpModule,
    // APP_IMPORTS,
    // RouterModule.forChild(  ),
    StoreModule.forFeature('products', reducers)
  ],
  // bootstrap: [AppComponent],
  // exports: [AppComponent],
  providers: []
})

export class FeaturesModule {
  constructor() {}
    // public appRef: ApplicationRef) { }
}
