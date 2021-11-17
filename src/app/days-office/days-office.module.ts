import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaysOfficeRoutingModule } from './days-office-routing.module';
import { DaysOfficeComponent } from './days-office.component';


@NgModule({
  declarations: [
    DaysOfficeComponent
  ],
  imports: [
    CommonModule,
    DaysOfficeRoutingModule
  ]
})
export class DaysOfficeModule { }
