import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DaysOfficeRoutingModule } from './days-office-routing.module';
import { DaysOfficeComponent } from './days-office.component';
import { AddDayComponent } from './add-day/add-day.component';
import { DaysOfficeEffects } from './state/daysoffice.effect';
import * as fromDaysOffice from './state/daysoffice.reducer'
import { DxDataGridModule, DxContextMenuModule, DxTemplateModule, DxButtonModule } from 'devextreme-angular';
import { OfficeListComponent } from './office-list/office-list.component';
import { DayListComponent } from './day-list/day-list.component';
import { DaySummaryComponent } from './day-summary/day-summary.component';

@NgModule({
  declarations: [
    DaysOfficeComponent,
    AddDayComponent,
    OfficeListComponent,
    DayListComponent,
    DaySummaryComponent
  ],
  imports: [
    CommonModule,
    DaysOfficeRoutingModule,
    DxDataGridModule,
    DxContextMenuModule,
    DxTemplateModule,
    DxButtonModule,
    StoreModule.forFeature(fromDaysOffice.daysOfficeFeatureKey,fromDaysOffice.daysOfficeReducer),
    EffectsModule.forFeature([DaysOfficeEffects])
  ]
})
export class DaysOfficeModule { }
