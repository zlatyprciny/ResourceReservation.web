import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaysOfficeRoutingModule } from './days-office-routing.module';
import { DaysOfficeComponent } from './days-office.component';
import { AddDayComponent } from './add-day/add-day.component';


@NgModule({
  declarations: [
    DaysOfficeComponent,
    AddDayComponent
  ],
  imports: [
    CommonModule,
    DaysOfficeRoutingModule
  ]
})
export class DaysOfficeModule { }
