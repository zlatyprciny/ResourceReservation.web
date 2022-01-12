import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
/* NgRx */
import { Store } from '@ngrx/store';
import { DaysOffice } from './daysoffice';
import { getDaysOffice, getOffices, State } from './state';

import { DaysOfficePageActions } from './state/actions';
import { Office } from '../shared/models/ambulatory/office';

@Component({
  selector: 'app-days-office',
  templateUrl: './days-office.component.html',
  styleUrls: ['./days-office.component.scss'],
})
export class DaysOfficeComponent implements OnInit {
  offices$: Observable<Office[]>;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.offices$ = this.store.select(getOffices);
    this.store.dispatch(DaysOfficePageActions.loadOffices());
  }

}
