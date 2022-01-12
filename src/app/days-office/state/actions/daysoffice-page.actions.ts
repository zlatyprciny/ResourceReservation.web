/* NgRx */
import { createAction, props  } from '@ngrx/store';

export const loadOffices = createAction(
  '[DaysOffice API] Load'
);
export const OfficeChanged = createAction(
  'DaysOffice API OfficeChanged',
  props<{ currentOfficeId: number }>()
);

