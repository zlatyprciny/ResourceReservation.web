import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
/* NgRx */
import { Store } from '@ngrx/store';
import { DaysOffice } from './daysoffice';
import { getDaysByOffice, getDaysOffice, getOffices, State } from './state';

import { DaysOfficePageActions } from './state/actions';
import { Office } from '../shared/models/ambulatory/office';
import { DayOffice } from './day-office';

@Component({
  selector: 'app-days-office',
  templateUrl: './days-office.component.html',
  styleUrls: ['./days-office.component.scss'],
})
export class DaysOfficeComponent implements OnInit {
  offices$: Observable<Office[]>;
  days$: Observable< DayOffice[]| null>;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.offices$ = this.store.select(getOffices);
    this.days$ = this.store.select(getDaysByOffice);
    this.store.dispatch(DaysOfficePageActions.loadOffices());
  }

  onOfficeChanged(office: Office) {
    console.warn(
      `Office day: saving ID office ${office.id} has been selected.`
    );
    this.store.dispatch(
      DaysOfficePageActions.OfficeChanged({ currentOfficeId: office.id })
    );
  }
}
