import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AngularMaterialModule } from '../core/angular-material.module';

import { CustomerServiceDialogComponent } from './customer-service-dialog.component';
import { MessageComponent, AttendantComponent } from './components';
import { AttendantListComponent } from './feature/attendant-list/attendant-list.component';

import {
  CustomerServiceEffects,
  reducer as customerServiceReducer,
} from './data-access/state/index';

@NgModule({
  declarations: [
    CustomerServiceDialogComponent,
    MessageComponent,
    AttendantListComponent,
    AttendantComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    StoreModule.forFeature('customer-service', customerServiceReducer),
    EffectsModule.forFeature([CustomerServiceEffects]),
  ],
  exports: [CustomerServiceDialogComponent],
  providers: [],
})
export class CustomerServiceDialogModule {}
