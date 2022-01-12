import { DaysOfficePageActions, DaysOfficeApiActions } from './actions';
//NgRx
import { createReducer, on } from '@ngrx/store';
import { DaysOffice } from '../daysoffice';
import { state } from '@angular/animations';

export interface DaysOfficeState {
  daysOffices: DaysOffice[];
  currentOfficeId: number;
}

const initialState: DaysOfficeState = {
  daysOffices: [],
  currentOfficeId: 0,
};

export const daysOfficeFeatureKey = 'daysOffice';

export const daysOfficeReducer = createReducer<DaysOfficeState>(
  initialState,
  on(DaysOfficePageActions.loadOffices, (state): DaysOfficeState => {
    return {
      ...state,
    };
  }),
  on(
    DaysOfficeApiActions.loadDaysOfficeSuccess,
    (state, action): DaysOfficeState => {
      return {
        ...state,
        daysOffices: action.daysOffice,
      };
    }
  ),
  on(DaysOfficePageActions.OfficeChanged, (state, action): DaysOfficeState => {
    return {
      ...state,
      currentOfficeId: action.currentOfficeId,
    };
  })
);
