/**
 * This module is the entry for your App when NOT using universal.
 *
 * Make sure to use the 3 constant APP_ imports so you don't have to keep
 * track of your root app dependencies here. Only import directly in this file if
 * there is something that is specific to the environment.
 */

import { ApplicationRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import {StoreModule} from '@ngrx/store';

import {
  BrowserTransferStateModule
} from '../modules/transfer-state/browser-transfer-state.module';

import { APP_DECLARATIONS } from './app.declarations';
import { APP_ENTRY_COMPONENTS } from './app.entry-components';
import { APP_IMPORTS } from './app.imports';

import { routes } from './app.routing';

import { AppComponent } from './app.component';
import {FeaturesModule} from './features/features.module';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    APP_DECLARATIONS
  ],
  entryComponents: [APP_ENTRY_COMPONENTS],
  imports: [
    CommonModule,
    DEV_SERVER ? [BrowserAnimationsModule, BrowserTransferStateModule] : [],
    HttpModule,
    HttpClientModule,
    APP_IMPORTS,
    FeaturesModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      // preloadingStrategy: PreloadAllModules
    }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),

  ],
  bootstrap: [AppComponent],
  exports: [AppComponent],
  providers: []
})

export class AppModule {
  constructor(public appRef: ApplicationRef) { }
}
