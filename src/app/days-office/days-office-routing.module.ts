import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDayComponent } from './add-day/add-day.component';
import { DaysOfficeComponent } from './days-office.component';

const routes: Routes = [
  { path: '', component: DaysOfficeComponent },
  { path: 'addday', component: AddDayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaysOfficeRoutingModule {}
