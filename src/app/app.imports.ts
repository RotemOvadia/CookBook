import { ReactiveFormsModule } from '@angular/forms';;

import { MaterialModule } from './material.module';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';

import { FormsModule } from '@angular/forms';


export const APP_IMPORTS = [
  MaterialModule,
  ReactiveFormsModule,
  TransferHttpModule,
  FormsModule
];
