import { Office } from 'src/app/shared/models/ambulatory/office';
import { DaysOfficePageActions } from './actions';
//NgRx
import { createReducer, on } from '@ngrx/store';
import { state } from '@angular/animations';

export interface DaysOfficeState {
  CurrentOffice: Office | null;
}

const initialState: DaysOfficeState = {
  CurrentOffice: null,
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
