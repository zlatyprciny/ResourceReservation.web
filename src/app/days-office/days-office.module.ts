import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DaysOfficeRoutingModule } from './days-office-routing.module';
import { DaysOfficeComponent } from './days-office.component';
import { AddDayComponent } from './add-day/add-day.component';
import { DaysOfficeEffects } from './state/daysoffice.effect';
import * as fromDaysOffice from './state/daysoffice.reducer'
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { OfficeListComponent } from './office-list/office-list.component';
import { DayListComponent } from './day-list/day-list.component';

@NgModule({
  declarations: [
    DaysOfficeComponent,
    AddDayComponent,
    OfficeListComponent,
    DayListComponent
  ],
  imports: [
    CommonModule,
    DaysOfficeRoutingModule,
    DxDataGridModule,
    StoreModule.forFeature(fromDaysOffice.daysOfficeFeatureKey,fromDaysOffice.daysOfficeReducer),
    EffectsModule.forFeature([DaysOfficeEffects])
  ]
})
export class DaysOfficeModule { }
