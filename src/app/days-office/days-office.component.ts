import { Component, OnInit } from '@angular/core';
/* NgRx */
import { Store } from '@ngrx/store';
import { State } from './state';

import { DaysOfficePageActions } from './state/actions';

@Component({
  selector: 'app-days-office',
  templateUrl: './days-office.component.html',
  styleUrls: ['./days-office.component.scss']
})
export class DaysOfficeComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(DaysOfficePageActions.loadOffices());
  }

}
