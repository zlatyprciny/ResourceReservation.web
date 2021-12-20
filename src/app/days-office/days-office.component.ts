import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
/* NgRx */
import { Store } from '@ngrx/store';
import { DaysOffice } from './daysoffice';
import { getDaysOffice, State } from './state';

import { DaysOfficePageActions } from './state/actions';

@Component({
  selector: 'app-days-office',
  templateUrl: './days-office.component.html',
  styleUrls: ['./days-office.component.scss'],
})
export class DaysOfficeComponent implements OnInit {
  daysOffice$!: Observable<DaysOffice[]>;
  daysOffice: DaysOffice[] = [];
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.daysOffice$ = this.store.select(getDaysOffice);

    this.store.dispatch(DaysOfficePageActions.loadOffices());
    this.daysOffice$.subscribe(
      (daysOffice) => (this.daysOffice = daysOffice)
    );
  }

  // ngOnDestroy() {
  //   this.daysOffice$.unsubscribe();
  // }
}
