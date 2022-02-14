import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Office } from 'src/app/shared/models/ambulatory/office';
import * as AppState from '../../state/app.state';
import { daysOfficeFeatureKey, DaysOfficeState } from './daysoffice.reducer';

export interface State extends AppState.State {
  daysOffices: DaysOfficeState;
}

const getProductFeatureState =
  createFeatureSelector<DaysOfficeState>(daysOfficeFeatureKey);

export const getDaysOffice = createSelector(
  getProductFeatureState,
  (state) => state.daysOffices
);

export const getOffices = createSelector(getDaysOffice, (daysOffices) => {
  let offices: Office[] = [];
  daysOffices.map((day) => offices.push(day.office));
  return offices;
});


