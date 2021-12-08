import { DaysOfficePageActions } from './actions';
//NgRx
import { createReducer, on } from '@ngrx/store';
import { DaysOffice } from '../daysoffice';

export interface DaysOfficeState {
  daysOffices: DaysOffice[]
}

const initialState: DaysOfficeState = {
  daysOffices: []
};

export const daysOfficeFeatureKey = 'daysOffice';

export const daysOfficeReducer = createReducer<DaysOfficeState>(
  initialState,
  on(DaysOfficePageActions.loadOffices, (state): DaysOfficeState => {
    return {
      ...state,
    };
  })
);
