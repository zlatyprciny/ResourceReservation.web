import { DaysOffice } from './../daysoffice';
import { state } from '@angular/animations';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Office } from 'src/app/shared/models/ambulatory/office';
import * as AppState from '../../state/app.state';
import { daysOfficeFeatureKey, DaysOfficeState } from './daysoffice.reducer';
import { DayOffice } from '../day-office';

export interface State extends AppState.State {
  daysOffices: DaysOfficeState;
}

const getDaysOfficeFeatureState =
  createFeatureSelector<DaysOfficeState>(daysOfficeFeatureKey);

export const getDaysOffice = createSelector(
  getDaysOfficeFeatureState,
  (state) => state.daysOffices
);

export const getOffices = createSelector(getDaysOffice, (daysOffices) => {
  return daysOffices.map((day) => day.office);
});

export const getDaysByOffice = createSelector(
  getDaysOfficeFeatureState,
  (state) => {
    const dayPlanOffice = state.daysOffices.find(
      (day) => day.office.id === state.currentOfficeId
    );
    return dayPlanOffice ? dayPlanOffice.days : ([] as DayOffice[]);
  }
);
