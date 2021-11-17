import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaysOfficeComponent } from './days-office.component';

const routes: Routes = [{ path: '', component: DaysOfficeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaysOfficeRoutingModule { }
