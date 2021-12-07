import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from "../../state/app.state";
import { daysOfficeFeatureKey, DaysOfficeState } from "./daysoffice.reducer";



export interface State extends AppState.State {
   daysOffices: DaysOfficeState
}

const getProductFeatureState = createFeatureSelector<DaysOfficeState>(daysOfficeFeatureKey);


