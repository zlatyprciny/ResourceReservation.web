/* NgRx */
import { createAction, props } from '@ngrx/store';
import { DaysOffice } from '../../daysoffice';

export const loadDaysOfficeSuccess = createAction(
  '[DaysOffice API] Load Success',
  props<{ daysOffice: DaysOffice[] }>()
);
