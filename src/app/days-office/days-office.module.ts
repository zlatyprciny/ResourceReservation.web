import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { DaysOfficeRoutingModule } from './days-office-routing.module';
import { DaysOfficeComponent } from './days-office.component';
import { AddDayComponent } from './add-day/add-day.component';
import * as fromDaysOffice from './state/daysoffice.reducer'

@NgModule({
  declarations: [
    DaysOfficeComponent,
    AddDayComponent
  ],
  imports: [
    CommonModule,
    DaysOfficeRoutingModule,
    StoreModule.forFeature(fromDaysOffice.daysOfficeFeatureKey,fromDaysOffice.daysOfficeReducer)
  ]
})
export class DaysOfficeModule { }
